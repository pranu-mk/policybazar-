// Optionally handle dropdowns on hover (for desktop)
document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".navbar .dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", function () {
      const menu = this.querySelector(".dropdown-menu");
      if (menu) {
        menu.classList.add("show");
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      const menu = this.querySelector(".dropdown-menu");
      if (menu) {
        menu.classList.remove("show");
      }
    });
  });
});
