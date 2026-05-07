const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");
const menuOverlay = document.querySelector(".menu-overlay");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

function openMenu() {
  mobileMenu.classList.add("open");
  menuOverlay.classList.add("visible");
  document.body.classList.add("menu-open");
  menuToggle.setAttribute("aria-expanded", "true");
  mobileMenu.setAttribute("aria-hidden", "false");
}

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  menuOverlay.classList.remove("visible");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
}

menuToggle.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeMobileMenu);
menuOverlay.addEventListener("click", closeMobileMenu);
mobileLinks.forEach((link) => link.addEventListener("click", closeMobileMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileMenu.classList.contains("open")) {
    closeMobileMenu();
  }
});
