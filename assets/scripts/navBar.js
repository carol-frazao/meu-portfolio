//Navbar responsivo
function responsiveNavbar() {
  const btnMenu = document.getElementById("btn-menu");
  const navList = document.getElementById("nav-list");
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
