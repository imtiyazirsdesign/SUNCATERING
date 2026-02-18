document.addEventListener("DOMContentLoaded", function () {

  const navbar = document.querySelector(".custom-navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");
  const navbarCollapse = document.getElementById("mainMenu");

  /* ================= SCROLL EFFECT ================= */

  function handleScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 80);

    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);

  /* ================= CLOSE MOBILE MENU ON CLICK ================= */

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  });

});
