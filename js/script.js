document.addEventListener("DOMContentLoaded", function () {

  const navbar = document.querySelector(".custom-navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");
  const navbarCollapse = document.getElementById("mainMenu");

  /* ================= SCROLL EFFECT ================= */

  function handleScroll() {

    // Navbar shrink
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Active section detection
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
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

  /* ================= CLOSE MOBILE MENU ================= */

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  });

  /* ================= SMOOTH SCROLL ================= */

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 90,
          behavior: "smooth"
        });
      }
    });
  });

});

