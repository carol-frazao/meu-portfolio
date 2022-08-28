//Navbar responsivo
function responsiveNavbar() {
  const btnMenu = get("#btn-menu");
  const navList = get("#nav-list");
  const btnCloseMenu = document.querySelectorAll(".close-menu");

  btnMenu.onclick = () => {
    navList.style.display = "flex";
  };

  btnCloseMenu.forEach((btn) => {
    btn.onclick = () => {
      navList.style.display = "";
    };
  });
}
responsiveNavbar();
