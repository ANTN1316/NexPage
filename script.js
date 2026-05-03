/* =========================================
   NEXPAGE — script.js
   ========================================= */

(function () {
  "use strict";

  /* --- NAV SCROLL --- */
  const nav = document.getElementById("nav");

  function handleNavScroll() {
    if (window.scrollY > 20) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleNavScroll, { passive: true });
  handleNavScroll();

  /* --- MOBILE MENU --- */
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", function () {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  // Close mobile menu on link click
  const mobileLinks = document.querySelectorAll(".nav__mobile-link");
  mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
    });
  });

  /* --- FADE IN OBSERVER --- */
  const fadeEls = document.querySelectorAll(".fade-in");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay ? parseInt(el.dataset.delay, 10) : 0;
        setTimeout(function () {
          el.classList.add("visible");
        }, delay);
        observer.unobserve(el);
      }
    });
  }, observerOptions);

  fadeEls.forEach(function (el) {
    observer.observe(el);
  });

  /* --- SMOOTH ACTIVE NAV LINK --- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav__links a");

  function setActiveLink() {
    let currentId = "";
    sections.forEach(function (sec) {
      const top = sec.getBoundingClientRect().top;
      if (top <= 100) {
        currentId = sec.id;
      }
    });

    navLinks.forEach(function (link) {
      link.style.color = "";
      const href = link.getAttribute("href");
      if (href === "#" + currentId) {
        link.style.color = "var(--text-1)";
      }
    });
  }

  window.addEventListener("scroll", setActiveLink, { passive: true });

})();