import { useEffect } from "react";

export function useRevealAnimation() {
  useEffect(() => {
    const parallaxElements = new Set<HTMLElement>();
    const observedRevealElements = new WeakSet<HTMLElement>();
    const observedReactiveElements = new WeakSet<HTMLElement>();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const supportsPointerHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    let frame = 0;
    let pointerFrame = 0;
    let pendingPointer:
      | {
          element: HTMLElement;
          clientX: number;
          clientY: number;
        }
      | undefined;
    const pointerRects = new WeakMap<HTMLElement, DOMRect>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
    );

    const updateParallax = () => {
      frame = 0;

      if (prefersReducedMotion) {
        return;
      }

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
      element.style.setProperty("--pointer-x", "0px");
      element.style.setProperty("--pointer-y", "0px");
      element.style.setProperty("--tilt-x", "0deg");
      element.style.setProperty("--tilt-y", "0deg");
      element.style.setProperty("--shadow-x", "0px");
    };

    const applyPointerPosition = () => {
      pointerFrame = 0;

      if (!pendingPointer) {
        return;
      }

      const { element, clientX, clientY } = pendingPointer;
      const rect = pointerRects.get(element) ?? element.getBoundingClientRect();
      const relativeX = (clientX - rect.left) / rect.width;
      const relativeY = (clientY - rect.top) / rect.height;
      const centeredX = relativeX - 0.5;
      const centeredY = relativeY - 0.5;

      element.classList.add("is-pointer-inside");
      element.style.setProperty(
        "--pointer-x",
        `${(centeredX * 6).toFixed(2)}px`,
      );
      element.style.setProperty(
        "--pointer-y",
        `${(centeredY * 6).toFixed(2)}px`,
      );
      element.style.setProperty(
        "--tilt-x",
        `${(-centeredY * 5).toFixed(2)}deg`,
      );
      element.style.setProperty("--tilt-y", `${(centeredX * 5).toFixed(2)}deg`);
      element.style.setProperty(
        "--shadow-x",
        `${(-centeredX * 14).toFixed(2)}px`,
      );
    };

    const requestPointerUpdate = (event: PointerEvent) => {
      pendingPointer = {
        element: event.currentTarget as HTMLElement,
        clientX: event.clientX,
        clientY: event.clientY,
      };

      if (pointerFrame) {
        return;
      }

      pointerFrame = window.requestAnimationFrame(applyPointerPosition);
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
      if (
        prefersReducedMotion ||
        !supportsPointerHover ||
        observedReactiveElements.has(element)
      ) {
        return;
      }

      observedReactiveElements.add(element);
      element.classList.add("mouse-reactive");
      resetPointerPosition(element);

      const handlePointerEnter = () => {
        pointerRects.set(element, element.getBoundingClientRect());
      };
      const handlePointerLeave = () => {
        pointerRects.delete(element);

        if (pendingPointer?.element === element) {
          pendingPointer = undefined;
        }

        resetPointerPosition(element);
      };

      element.addEventListener("pointerenter", handlePointerEnter);
      element.addEventListener("pointermove", requestPointerUpdate);
      element.addEventListener("pointerleave", handlePointerLeave);

      pointerCleanups.push(() => {
        element.removeEventListener("pointerenter", handlePointerEnter);
        element.removeEventListener("pointermove", requestPointerUpdate);
        element.removeEventListener("pointerleave", handlePointerLeave);
        element.classList.remove("mouse-reactive", "is-pointer-inside");
        resetPointerPosition(element);
      });
    };

    const observeElements = (root: ParentNode) => {
      if (root instanceof HTMLElement) {
        if (root.matches(".reveal")) {
          observeRevealElement(root);
        }

        if (root.matches("[data-parallax-speed]")) {
          parallaxElements.add(root);
        }

        if (
          root.matches(
            ".polish-card, .polish-tile, .image-card, .feature-image, .image-tile, .fluid-link, .fluid-surface",
          )
        ) {
          observeReactiveElement(root);
        }
      }

      root
        .querySelectorAll<HTMLElement>(".reveal")
        .forEach(observeRevealElement);
      root
        .querySelectorAll<HTMLElement>("[data-parallax-speed]")
        .forEach((element) => parallaxElements.add(element));
      root
        .querySelectorAll<HTMLElement>(
          ".polish-card, .polish-tile, .image-card, .feature-image, .image-tile, .fluid-link, .fluid-surface",
        )
        .forEach(observeReactiveElement);
    };

    observeElements(document);
    updateParallax();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });

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
      pointerCleanups.forEach((cleanup) => cleanup());

      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      if (pointerFrame) {
        window.cancelAnimationFrame(pointerFrame);
      }
    };
  }, []);
}
