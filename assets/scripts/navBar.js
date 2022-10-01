//Navbar responsivo
function responsiveNavbar() {
  const btnMenu = get("#btn-menu");
  const navList = get("#nav-list");
  const btnCloseMenu = document.querySelectorAll(".close-menu");

  btnMenu.onclick = () => {
    setTimeout(() => navList.style.right = "0", 0);
  };

  btnCloseMenu.forEach((btn) => {
    btn.onclick = () => {
      setTimeout(() => navList.style.right = "-150%", 0)
    };
  });
}
responsiveNavbar();
