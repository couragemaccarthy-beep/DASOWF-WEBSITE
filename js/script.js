const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const header = document.getElementById("site-header");
if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 8);
  });
}

const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");
if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Highlight the nav link matching the current page (each page sets
// data-nav on <body>, e.g. data-nav="about").
const currentNav = document.body.getAttribute("data-nav");
if (currentNav) {
  document.querySelectorAll(".main-nav a[data-nav]").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("data-nav") === currentNav);
  });
}

const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");
if (contactForm && formNote) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formNote.textContent = "Thanks for reaching out — we'll get back to you soon.";
    contactForm.reset();
  });
}
