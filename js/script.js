document.addEventListener("DOMContentLoaded", function () {

  const navbar = document.querySelector(".custom-navbar");

  if (navbar) {
    function handleScroll() {
      navbar.classList.toggle("scrolled", window.scrollY > 80);
    }

    window.addEventListener("scroll", handleScroll);
  }

  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navbarCollapse.classList.contains("show")) {
          new bootstrap.Collapse(navbarCollapse).hide();
        }
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

});
