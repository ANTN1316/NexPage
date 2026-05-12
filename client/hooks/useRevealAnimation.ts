import { useEffect } from "react";

export function useRevealAnimation() {
  useEffect(() => {
    const reactiveSelector =
      ".tilt-card, [data-tilt-card], .card, .polish-card";
    const parallaxElements = new Set<HTMLElement>();
    const observedRevealElements = new WeakSet<HTMLElement>();
    const observedReactiveElements = new WeakSet<HTMLElement>();
    const observedMobileCardElements = new WeakSet<HTMLElement>();
    const isMobileOrTablet = window.matchMedia("(max-width: 1024px)").matches;
    const isLowPowerDevice =
      window.navigator.hardwareConcurrency <= 4 ||
      Number((window.navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) <=
        4;
    const maxTiltRotation = 8;
    const tiltFrameInterval = isLowPowerDevice ? 32 : 16;
    const mobileFocusInterval = isLowPowerDevice ? 140 : 90;
    let frame = 0;
    let mobileCardFrame = 0;
    let lastMobileFocusTime = 0;
    let lastMobileFocusY = window.scrollY;
    let activeMobileCard: HTMLElement | undefined;
    const mobileCardElements = new Set<HTMLElement>();
    type TiltState = {
      currentPointerX: number;
      currentPointerY: number;
      currentTiltX: number;
      currentTiltY: number;
      currentShadowX: number;
      currentGlowX: number;
      currentGlowY: number;
      currentGlare: number;
      targetPointerX: number;
      targetPointerY: number;
      targetTiltX: number;
      targetTiltY: number;
      targetShadowX: number;
      targetGlowX: number;
      targetGlowY: number;
      targetGlare: number;
      isActive: boolean;
      canMove: boolean;
      frame: number;
      enterFrame: number;
      leaveTimer: number;
      lastFrameTime: number;
      pendingClientX?: number;
      pendingClientY?: number;
    };
    const pointerRects = new WeakMap<HTMLElement, DOMRect>();
    const tiltStates = new WeakMap<HTMLElement, TiltState>();
    const revealDelayTimers = new Set<number>();

    const clearRevealDelay = (element: HTMLElement) => {
      if (!element.style.transitionDelay) {
        return;
      }

      element.style.transitionDelay = "";
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;

            element.classList.add("is-visible");

            if (element.style.transitionDelay) {
              let timer = 0;
              const handleTransitionEnd = () => {
                window.clearTimeout(timer);
                revealDelayTimers.delete(timer);
                clearRevealDelay(element);
              };
              timer = window.setTimeout(() => {
                revealDelayTimers.delete(timer);
                clearRevealDelay(element);
              }, 1400);

              revealDelayTimers.add(timer);
              element.addEventListener("transitionend", handleTransitionEnd, {
                once: true,
              });
            }

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );

    const setActiveMobileCard = (nextActiveCard?: HTMLElement) => {
      if (activeMobileCard === nextActiveCard) {
        return;
      }

      if (activeMobileCard) {
        activeMobileCard.classList.remove("is-mobile-card-active");
      }

      activeMobileCard = nextActiveCard;

      if (!activeMobileCard) {
        return;
      }

      activeMobileCard.classList.add("is-mobile-card-active");
    };

    const updateMobileCardFocus = () => {
      mobileCardFrame = 0;

      if (!isMobileOrTablet) {
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      const centerActivationRange = window.innerHeight * 0.28;
      let nextActiveCard: HTMLElement | undefined;
      let nearestDistance = Number.POSITIVE_INFINITY;

      // Keep the mobile centered-card polish, but sample it at a modest cadence
      // so low-end GPUs are not doing layout reads on every scroll tick.
      mobileCardElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const visibleHeight =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const visibleRatio = Math.max(0, visibleHeight) / Math.max(rect.height, 1);
        const cardCenter = rect.top + rect.height / 2;
        const centerDistance = Math.abs(cardCenter - viewportCenter);
        const isSubtlyVisible = visibleRatio > 0.22;
        const isCentered =
          visibleRatio > 0.42 && centerDistance < centerActivationRange;

        element.classList.toggle("is-mobile-card-visible", isSubtlyVisible);

        if (!isCentered || centerDistance >= nearestDistance) {
          return;
        }

        nearestDistance = centerDistance;
        nextActiveCard = element;
      });

      setActiveMobileCard(nextActiveCard);
    };

    const requestMobileCardFocusUpdate = () => {
      if (!isMobileOrTablet || mobileCardFrame) {
        return;
      }

      const now = window.performance.now();
      const scrollDelta = Math.abs(window.scrollY - lastMobileFocusY);

      if (now - lastMobileFocusTime < mobileFocusInterval && scrollDelta < 24) {
        return;
      }

      lastMobileFocusTime = now;
      lastMobileFocusY = window.scrollY;
      mobileCardFrame = window.requestAnimationFrame(updateMobileCardFocus);
    };

    const updateParallax = () => {
      frame = 0;

      const scrollY = window.scrollY;

      parallaxElements.forEach((element) => {
        const speed = Number(element.dataset.parallaxSpeed ?? 0);
        const y = scrollY * speed;
        element.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      });
    };

    const requestParallaxUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(updateParallax);
    };

    const resetPointerPosition = (element: HTMLElement) => {
      element.classList.remove("is-pointer-inside");
      element.classList.remove("is-pointer-moving");
      element.style.setProperty("--pointer-x", "0px");
      element.style.setProperty("--pointer-y", "0px");
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
      element.style.setProperty("--shadow-x", "0px");
      element.style.setProperty("--glow-x", "50%");
      element.style.setProperty("--glow-y", "50%");
      element.style.setProperty("--glare-opacity", "0");
    };

    const getTiltState = (element: HTMLElement) => {
      const existingState = tiltStates.get(element);

      if (existingState) {
        return existingState;
      }

      const state: TiltState = {
        currentPointerX: 0,
        currentPointerY: 0,
        currentTiltX: 0,
        currentTiltY: 0,
        currentShadowX: 0,
        currentGlowX: 50,
        currentGlowY: 50,
        currentGlare: 0,
        targetPointerX: 0,
        targetPointerY: 0,
        targetTiltX: 0,
        targetTiltY: 0,
        targetShadowX: 0,
        targetGlowX: 50,
        targetGlowY: 50,
        targetGlare: 0,
        isActive: false,
        canMove: false,
        frame: 0,
        enterFrame: 0,
        leaveTimer: 0,
        lastFrameTime: 0,
      };

      tiltStates.set(element, state);
      return state;
    };

    const setTiltVariables = (element: HTMLElement, state: TiltState) => {
      if (state.currentPointerX !== state.targetPointerX) {
        element.style.setProperty(
          "--pointer-x",
          `${state.targetPointerX.toFixed(2)}px`,
        );
        state.currentPointerX = state.targetPointerX;
      }

      if (state.currentPointerY !== state.targetPointerY) {
        element.style.setProperty(
          "--pointer-y",
          `${state.targetPointerY.toFixed(2)}px`,
        );
        state.currentPointerY = state.targetPointerY;
      }

      if (state.currentTiltX !== state.targetTiltX) {
        element.style.setProperty("--tilt-x", `${state.targetTiltX.toFixed(2)}deg`);
        state.currentTiltX = state.targetTiltX;
      }

      if (state.currentTiltY !== state.targetTiltY) {
        element.style.setProperty("--tilt-y", `${state.targetTiltY.toFixed(2)}deg`);
        state.currentTiltY = state.targetTiltY;
      }

      if (state.currentShadowX !== state.targetShadowX) {
        element.style.setProperty(
          "--shadow-x",
          `${state.targetShadowX.toFixed(2)}px`,
        );
        state.currentShadowX = state.targetShadowX;
      }

      if (state.currentGlowX !== state.targetGlowX) {
        element.style.setProperty("--glow-x", `${state.targetGlowX.toFixed(2)}%`);
        state.currentGlowX = state.targetGlowX;
      }

      if (state.currentGlowY !== state.targetGlowY) {
        element.style.setProperty("--glow-y", `${state.targetGlowY.toFixed(2)}%`);
        state.currentGlowY = state.targetGlowY;
      }

      if (state.currentGlare !== state.targetGlare) {
        element.style.setProperty(
          "--glare-opacity",
          state.targetGlare.toFixed(3),
        );
        state.currentGlare = state.targetGlare;
      }
    };

    const requestTiltFrame = (element: HTMLElement, state: TiltState) => {
      if (state.frame) {
        return;
      }

      state.frame = window.requestAnimationFrame((timestamp) => {
        state.frame = 0;

        if (state.isActive) {
          if (timestamp - state.lastFrameTime < tiltFrameInterval) {
            requestTiltFrame(element, state);
            return;
          }

          state.lastFrameTime = timestamp;
          setTiltVariables(element, state);
        }
      });
    };

    const updateTiltTarget = (
      element: HTMLElement,
      clientX: number,
      clientY: number,
    ) => {
      const state = getTiltState(element);
      if (!state.canMove) {
        state.pendingClientX = clientX;
        state.pendingClientY = clientY;
        return;
      }

      const rect = pointerRects.get(element) ?? element.getBoundingClientRect();
      const px = Math.min(
        Math.max((clientX - rect.left) / rect.width, 0),
        1,
      );
      const py = Math.min(
        Math.max((clientY - rect.top) / rect.height, 0),
        1,
      );
      const normalizedX = px * 2 - 1;
      const normalizedY = py * 2 - 1;
      const rotateX = (0.5 - py) * maxTiltRotation;
      const rotateY = (px - 0.5) * maxTiltRotation;

      element.classList.add("is-pointer-inside");
      element.classList.add("is-pointer-moving");
      element.classList.add("is-hovered");
      element.classList.add("is-tilt-active");
      element.classList.remove("is-leaving");

      state.isActive = true;
      state.targetPointerX = normalizedX * 5;
      state.targetPointerY = normalizedY * 5;
      state.targetTiltX = rotateX;
      state.targetTiltY = rotateY;
      state.targetShadowX = -normalizedX * 16;
      state.targetGlowX = px * 100;
      state.targetGlowY = py * 100;
      state.targetGlare = 1;

      if (state.leaveTimer) {
        window.clearTimeout(state.leaveTimer);
        state.leaveTimer = 0;
      }

      requestTiltFrame(element, state);
    };

    const requestMouseUpdate = (event: MouseEvent) => {
      updateTiltTarget(
        event.currentTarget as HTMLElement,
        event.clientX,
        event.clientY,
      );
    };

    const pointerCleanups: Array<() => void> = [];

    const observeRevealElement = (element: HTMLElement) => {
      if (observedRevealElements.has(element)) {
        return;
      }

      observedRevealElements.add(element);
      observer.observe(element);
    };

    const observeReactiveElement = (element: HTMLElement) => {
      if (observedReactiveElements.has(element)) {
        return;
      }

      observedReactiveElements.add(element);

      if (isMobileOrTablet) {
        return;
      }

      element.classList.add("mouse-reactive");
      resetPointerPosition(element);

      const beginElementInteraction = (event: MouseEvent | PointerEvent) => {
        pointerRects.set(element, element.getBoundingClientRect());

        const state = getTiltState(element);
        if (state.frame) {
          window.cancelAnimationFrame(state.frame);
          state.frame = 0;
        }
        if (state.enterFrame) {
          window.cancelAnimationFrame(state.enterFrame);
          state.enterFrame = 0;
        }
        if (state.leaveTimer) {
          window.clearTimeout(state.leaveTimer);
          state.leaveTimer = 0;
        }

        state.isActive = true;
        state.canMove = false;
        state.pendingClientX = event.clientX;
        state.pendingClientY = event.clientY;
        state.targetPointerX = 0;
        state.targetPointerY = 0;
        state.targetTiltX = 0;
        state.targetTiltY = 0;
        state.targetShadowX = 0;
        state.targetGlowX = 50;
        state.targetGlowY = 50;
        state.targetGlare = 0.82;

        element.classList.add("is-hovered");
        element.classList.add("is-pointer-inside");
        element.classList.add("is-tilt-active");
        element.classList.remove("is-leaving", "is-pointer-moving");
        setTiltVariables(element, state);

        state.enterFrame = window.requestAnimationFrame(() => {
          state.enterFrame = window.requestAnimationFrame(() => {
            state.enterFrame = 0;
            state.canMove = true;

            if (
              state.pendingClientX !== undefined &&
              state.pendingClientY !== undefined &&
              state.isActive
            ) {
              const pendingClientX = state.pendingClientX;
              const pendingClientY = state.pendingClientY;
              state.pendingClientX = undefined;
              state.pendingClientY = undefined;
              updateTiltTarget(element, pendingClientX, pendingClientY);
            }
          });
        });
      };

      const resetElementInteraction = () => {
        pointerRects.delete(element);

        const state = getTiltState(element);
        if (state.frame) {
          window.cancelAnimationFrame(state.frame);
          state.frame = 0;
        }
        if (state.enterFrame) {
          window.cancelAnimationFrame(state.enterFrame);
          state.enterFrame = 0;
        }

        state.isActive = false;
        state.canMove = false;
        state.pendingClientX = undefined;
        state.pendingClientY = undefined;
        state.targetPointerX = 0;
        state.targetPointerY = 0;
        state.targetTiltX = 0;
        state.targetTiltY = 0;
        state.targetShadowX = 0;
        state.targetGlowX = 50;
        state.targetGlowY = 50;
        state.targetGlare = 0;
        setTiltVariables(element, state);

        element.classList.remove("is-hovered");
        element.classList.remove("is-pointer-moving");
        element.classList.remove("is-pointer-inside");
        element.classList.remove("is-tilt-active");
        element.classList.add("is-leaving");

        if (state.leaveTimer) {
          window.clearTimeout(state.leaveTimer);
        }

        state.leaveTimer = window.setTimeout(() => {
          state.leaveTimer = 0;
          element.classList.remove("is-leaving");
        }, 280);
      };

      element.addEventListener("mouseenter", beginElementInteraction);
      element.addEventListener("mousemove", requestMouseUpdate);
      element.addEventListener("mouseleave", resetElementInteraction);

      pointerCleanups.push(() => {
        element.removeEventListener("mouseenter", beginElementInteraction);
        element.removeEventListener("mousemove", requestMouseUpdate);
        element.removeEventListener("mouseleave", resetElementInteraction);
        const state = getTiltState(element);
        if (state.frame) {
          window.cancelAnimationFrame(state.frame);
        }
        if (state.enterFrame) {
          window.cancelAnimationFrame(state.enterFrame);
        }
        if (state.leaveTimer) {
          window.clearTimeout(state.leaveTimer);
        }
        element.classList.remove(
          "mouse-reactive",
          "is-hovered",
          "is-leaving",
          "is-pointer-inside",
          "is-pointer-moving",
          "is-tilt-active",
        );
        resetPointerPosition(element);
      });
    };

    const observeMobileCardElement = (element: HTMLElement) => {
      if (!isMobileOrTablet || observedMobileCardElements.has(element)) {
        return;
      }

      observedMobileCardElements.add(element);
      mobileCardElements.add(element);
      requestMobileCardFocusUpdate();
    };

    const observeElements = (root: ParentNode) => {
      if (root instanceof HTMLElement) {
        if (root.matches(".reveal")) {
          observeRevealElement(root);
        }

        if (root.matches("[data-parallax-speed]")) {
          parallaxElements.add(root);
        }

        if (root.matches(reactiveSelector)) {
          observeReactiveElement(root);
          observeMobileCardElement(root);
        }
      }

      root
        .querySelectorAll<HTMLElement>(".reveal")
        .forEach(observeRevealElement);
      root
        .querySelectorAll<HTMLElement>("[data-parallax-speed]")
        .forEach((element) => parallaxElements.add(element));
      root
        .querySelectorAll<HTMLElement>(reactiveSelector)
        .forEach((element) => {
          observeReactiveElement(element);
          observeMobileCardElement(element);
        });
    };

    observeElements(document);
    updateParallax();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });

    if (isMobileOrTablet) {
      window.addEventListener("scroll", requestMobileCardFocusUpdate, {
        passive: true,
      });
      window.addEventListener("resize", requestMobileCardFocusUpdate, {
        passive: true,
      });
      requestMobileCardFocusUpdate();
    }

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            observeElements(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", requestParallaxUpdate);

      if (isMobileOrTablet) {
        window.removeEventListener("scroll", requestMobileCardFocusUpdate);
        window.removeEventListener("resize", requestMobileCardFocusUpdate);
      }
      pointerCleanups.forEach((cleanup) => cleanup());

      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      if (mobileCardFrame) {
        window.cancelAnimationFrame(mobileCardFrame);
      }

      revealDelayTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);
}
