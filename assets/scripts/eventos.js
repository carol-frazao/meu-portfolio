// Eventos ao clicar nas skills: animações e backgrounds
function skillEvents() {
  const container = getElement("#skills");
  const backgroundCover = () => (container.style.backgroundSize = "cover");
  const background = (image) =>
    (container.style.background = "url(" + image + ") center");
  const btnResetBg = getElement("#btn-reset-bg");
  const resetBgContainer = getElement(".resetBg");
  const displayResetBG = () => (resetBgContainer.style.opacity = "1");
  const skills = {
    html: getElement("#html-img"),
    css: getElement("#css-img"),
    js: getElement("#js-img"),
    sass: getElement("#sass-img"),
    react: getElement("#react-img"),
    node: getElement("#node-img"),
    git: getElement("#git-img"),
    github: getElement("#github-img"),
    figma: getElement("#figma-img"),
  };

  // set rotate on click
  document.querySelectorAll(".skill-img").forEach((skill) => {
    skill.addEventListener("click", () => {
      setTimeout(() => (skill.style.animation = "rotate-img-slide 1s"), 0);
      setTimeout(() => (skill.style.animation = ""), 1000);
    });
  });

  // set background on click
  skills.html.addEventListener("click", (e) => {
    background("assets/img/skills-wallpaper/html-wallpaper.jpg");
    backgroundCover();
    displayResetBG();
    btnResetBg.style.cursor = "pointer";
  });

  skills.css.addEventListener("click", (e) => {
    background("assets/img/skills-wallpaper/css-wallpaper.jpg");
    backgroundCover();
    displayResetBG();
    btnResetBg.style.cursor = "pointer";
  });

  skills.js.addEventListener("click", () => {
    background("assets/img/skills-wallpaper/js-wallpaper.jpg");
    backgroundCover();
    displayResetBG();
    btnResetBg.style.cursor = "pointer";
  });

  skills.sass.addEventListener("click", () => {
    background("assets/img/skills-wallpaper/sass-background.png");
    backgroundCover();
    displayResetBG();
    btnResetBg.style.cursor = "pointer";
  });

  skills.react.addEventListener("click", () => {
    background("assets/img/skills-wallpaper/react-background.jpg");
    backgroundCover();
    displayResetBG();
    btnResetBg.style.cursor = "pointer";
  });

  skills.node.addEventListener("click", () => {
    background("assets/img/skills-wallpaper/node-background.png");
    backgroundCover();
    displayResetBG();
    btnResetBg.style.cursor = "pointer";
  });

  skills.git.addEventListener("click", () => {
    background("assets/img/skills-wallpaper/git-background.jpg");
    backgroundCover();
    displayResetBG();
    btnResetBg.style.cursor = "pointer";
  });

  skills.github.addEventListener("click", () => {
    background("assets/img/skills-wallpaper/github-background.jpg");
    backgroundCover();
    displayResetBG();
    btnResetBg.style.cursor = "pointer";
  });

  skills.figma.addEventListener("click", () => {
    background("assets/img/skills-wallpaper/figma-background.jpg");
    backgroundCover();
    displayResetBG();
    btnResetBg.style.cursor = "pointer";
  });

  btnResetBg.addEventListener("click", () => {
    container.style.background = "#2c2c2c";
    resetBgContainer.style.opacity = "0";
    btnResetBg.style.cursor = "default";
  });
}
skillEvents();

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
