document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const themeIconMobile = document.getElementById("theme-icon-mobile");

  // Check for saved user preference, if any, on load of the website
  const currentTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  if (currentTheme) {
    document.documentElement.classList.add(currentTheme);
    updateThemeIcons(currentTheme);
  }

  function updateThemeIcons(theme) {
    if (theme === "dark") {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
      themeIconMobile.classList.remove("fa-moon");
      themeIconMobile.classList.add("fa-sun");
    } else {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
      themeIconMobile.classList.remove("fa-sun");
      themeIconMobile.classList.add("fa-moon");
    }
  }

  function toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      updateThemeIcons("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      updateThemeIcons("dark");
    }
  }

  themeToggle.addEventListener("click", toggleTheme);
  themeToggleMobile.addEventListener("click", toggleTheme);

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      // Close mobile menu if open
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
      }

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Form submission
  const contactForm = document.getElementById("contact-form");
  const formSuccess = document.getElementById("form-success");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Here you would typically send the form data to a server
      // For this example, we'll just show a success message
      formSuccess.classList.remove("hidden");
      contactForm.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        formSuccess.classList.add("hidden");
      }, 5000);
    });
  }

  // Scroll reveal animations
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal("#hero > div", {
      delay: 200,
      origin: "bottom",
      distance: "50px",
      duration: 800,
      reset: false,
    });

    ScrollReveal().reveal("#about, #skills, #projects, #contact", {
      delay: 200,
      origin: "bottom",
      distance: "20px",
      duration: 800,
      interval: 100,
      reset: false,
    });

    ScrollReveal().reveal(".bg-white, .bg-gray-100", {
      delay: 200,
      origin: "bottom",
      distance: "20px",
      duration: 800,
      interval: 100,
      reset: false,
    });
  }
});
