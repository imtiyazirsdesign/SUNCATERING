// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Sidebar Toggle
const toggler = document.querySelector(".navbar-toggler");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

toggler.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});
