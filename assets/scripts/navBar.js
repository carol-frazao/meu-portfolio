//Navbar responsivo
function responsiveNavbar() {
  const btnMenu = getElement("#btn-menu");
  const navList = getElement("#nav-list");
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
