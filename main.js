document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");
  const navOverlay = document.getElementById("navOverlay");
  const navLinks = document.querySelectorAll(".nav-link");

  function toggleMenu() {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    navOverlay.classList.toggle("active");
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", toggleMenu);
    navOverlay.addEventListener("click", toggleMenu);

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
          toggleMenu();
        }
      });
    });
  }
});