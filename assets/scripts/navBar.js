//Navbar responsivo
function responsiveNavbar() {
  const btnMenu = get("#btn-menu");
  const navList = get("#nav-list");
  const btnCloseMenu = document.querySelectorAll(".close-menu");

  btnMenu.onclick = () => {
    setTimeout(() => navList.style.display = "flex", 0);
    setTimeout(() => navList.style.right = "0", 100);
};

  btnCloseMenu.forEach((btn) => {
    btn.onclick = () => {
      setTimeout(() => navList.style.right = "-100%", 0)
      setTimeout(() => navList.style.display = "none", 100)
  };
  });
}
responsiveNavbar();
