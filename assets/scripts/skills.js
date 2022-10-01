// Eventos ao clicar nas skills: animações e backgrounds
function skillEvents() {
  const container = get("#skills");
  const backgroundCover = () => (container.style.backgroundSize = "cover");
  const background = (image) =>
    (container.style.background = "url(" + image + ") center");
  const btnResetBg = get("#btn-reset-bg");
  const resetBgContainer = get(".resetBg");
  const displayResetBG = () => (resetBgContainer.style.opacity = "1");
  const skills = {
    html: get("#html-img"),
    css: get("#css-img"),
    js: get("#js-img"),
    sass: get("#sass-img"),
    react: get("#react-img"),
    styled: get("#styled-img"),
    node: get("#node-img"),
    git: get("#git-img"),
    github: get("#github-img"),
    figma: get("#figma-img"),
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

  skills.styled.addEventListener("click", () => {
    background("assets/img/skills-wallpaper/styled-background.png");
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
