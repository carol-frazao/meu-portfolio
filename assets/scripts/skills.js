// Eventos ao clicar nas skills: animações e backgrounds
function skillEvents() {

  const container = document.getElementById("skills"),
    btnResetBg = document.getElementById("btn-reset-bg"),
    resetBgContainer = document.querySelector(".resetBg"),
    html = document.getElementById("html-img"),
    css = document.getElementById("css-img"),
    js = document.getElementById("js-img"),
    ts = document.getElementById("ts-img"),
    sass = document.getElementById("sass-img"),
    react = document.getElementById("react-img"),
    nextjs = document.getElementById("nextjs-img"),
    gatsby = document.getElementById("gatsby-img"),
    redux = document.getElementById("redux-img"),
    styled = document.getElementById("styled-img"),
    node = document.getElementById("node-img"),
    git = document.getElementById("git-img"),
    github = document.getElementById("github-img"),
    figma = document.getElementById("figma-img"),
    bootstrap = document.getElementById('bootstrap-img')

  const backgroundCover = () => container.style.backgroundSize = "cover";
  const background = (image) => container.style.background = "url(" + image + ") center";
  const displayResetBG = () => resetBgContainer.style.opacity = "1";

  const setBackground = (container, image) => {
    container.addEventListener("click", e => {
      background(image);
      backgroundCover();
      displayResetBG();
      btnResetBg.style.cursor = "pointer";
    });

  }

  // set rotate on click
  document.querySelectorAll(".skill-img").forEach((skill) => {
    skill.addEventListener("click", () => {
      setTimeout(() => (skill.style.animation = "rotate-img-slide 1s"), 0);
      setTimeout(() => (skill.style.animation = ""), 1000);
    });
  });

  // set background on click
  setBackground(html, "assets/img/skills-wallpaper/html-wallpaper.jpg")
  setBackground(css, "assets/img/skills-wallpaper/css-wallpaper.jpg");
  setBackground(js, "assets/img/skills-wallpaper/js-wallpaper.jpg");
  setBackground(ts, "assets/img/skills-wallpaper/ts-background.png");
  setBackground(sass, "assets/img/skills-wallpaper/sass-background.png");
  setBackground(react, "assets/img/skills-wallpaper/react-background.jpg");
  setBackground(nextjs, "assets/img/skills-wallpaper/nextjs-background.png");
  setBackground(gatsby, "assets/img/skills-wallpaper/gatsby-background.jpeg");
  setBackground(redux, "assets/img/skills-wallpaper/redux-background.png");
  setBackground(styled, "assets/img/skills-wallpaper/styled-background.png");
  setBackground(node, "assets/img/skills-wallpaper/node-background.png");
  setBackground(git, "assets/img/skills-wallpaper/git-background.jpg");
  setBackground(github, "assets/img/skills-wallpaper/github-background.jpg");
  setBackground(figma, "assets/img/skills-wallpaper/figma-background.jpg");
  setBackground(bootstrap, "assets/img/skills-wallpaper/bootstrap-background.jpg");

  btnResetBg.addEventListener("click", e => {
    container.style.background = "#2c2c2c";
    resetBgContainer.style.opacity = "0";
    btnResetBg.style.cursor = "default";
  });
}
skillEvents();
