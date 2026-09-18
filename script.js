document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  /* মোবাইলের প্রধান মেনু */
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {

      navLinks.classList.toggle("active");

      const expanded =
        menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute("aria-expanded", !expanded);
    });
  }


  /* মোবাইলের সাব-মেনু */
  const dropdownButtons =
    document.querySelectorAll(".dropdown-btn");

  dropdownButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

      if (window.innerWidth <= 900) {

        event.preventDefault();

        const dropdown =
          button.closest(".nav-dropdown");

        dropdown.classList.toggle("open");

      }

    });

  });


  /* কোনো লিংকে ক্লিক করলে মোবাইল মেনু বন্ধ */
  const navItems =
    document.querySelectorAll(".nav-links a");

  navItems.forEach(function (item) {

    item.addEventListener("click", function () {

      if (window.innerWidth <= 900) {

        navLinks.classList.remove("active");

        if (menuToggle) {
          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );
        }

      }

    });

  });


  /* Footer-এর বর্তমান বছর */
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

});
