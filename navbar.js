const navbars = document.querySelectorAll(".help_navbar");

navbars.forEach((navbar) => {
  const menuButton = navbar.querySelector(".mobile_menu_btn");
  const menu = navbar.querySelector(".help_menu");

  if (!menuButton || !menu) {
    return;
  }

  menuButton.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("mobile_nav_open");
    menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("mobile_nav_open");
      menuButton.setAttribute("aria-label", "Abrir menú");
    });
  });
});
