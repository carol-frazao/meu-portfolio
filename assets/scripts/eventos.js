const $ = (id) => document.getElementById(id);


//Animação do cursor no botão "Start"
function clickStart() {
    const btn_start = $('img-start')

    btn_start.addEventListener("click", (e) => {
        this.classList.add('scale_btn');
        setTimeout( () => this.classList.remove('scale_btn'), 1000);
    })
}


// Eventos ao clicar nas skills: animações e backgrounds
function skillEvents() {

    const container = $('skills');
    const backgroundCover = () => container.style.backgroundSize = 'cover';
    const background = (image) => container.style.background = "url(" + image + ") center";
    const btnResetBg = $('btn-reset-bg');
    const displayResetBG = () => btnResetBg.style.opacity = "1";
    const skills = {
        html: $('html-img'),
        css: $('css-img'),
        js: $('js-img'),
        react: $('react-img'),
        node: $('node-img'),
        git: $('git-img'),
        github: $('github-img'),
        figma: $('figma-img')
    }

    // set rotate on click
    document.querySelectorAll('.skill-img').forEach((skill) => {
        skill.addEventListener("click", () => {
            setTimeout(() => skill.style.animation = "rotate-img-slide 1s", 0);
            setTimeout(() => skill.style.animation = "", 1000);
        })
    })

    // set background on click
    skills.html.addEventListener("click", (e) => {
        background('assets/img/skills-wallpaper/html-wallpaper.jpg');
        backgroundCover();
        displayResetBG();
        btnResetBg.style.cursor = "pointer";
    })

    skills.css.addEventListener("click", (e) => {
        background('assets/img/skills-wallpaper/css-wallpaper.jpg');
        backgroundCover();
        displayResetBG();
        btnResetBg.style.cursor = "pointer"
    })

    skills.js.addEventListener("click", () => {
        background('assets/img/skills-wallpaper/js-wallpaper.jpg');
        backgroundCover();
        displayResetBG();
        btnResetBg.style.cursor = "pointer";
    })

    skills.react.addEventListener("click", () => {
        background('assets/img/skills-wallpaper/react-background.jpg');
        backgroundCover();
        displayResetBG();
        btnResetBg.style.cursor = "pointer";
    })

    skills.node.addEventListener("click", () => {
        background('assets/img/skills-wallpaper/node-background.png');
        backgroundCover();
        displayResetBG();
        btnResetBg.style.cursor = "pointer";
    })

    skills.git.addEventListener("click", () => {
        background('assets/img/skills-wallpaper/git-background.jpg');
        backgroundCover();
        displayResetBG();
        btnResetBg.style.cursor = "pointer";
    })

    skills.github.addEventListener("click", () => {
        background('assets/img/skills-wallpaper/github-background.jpg');
        backgroundCover();
        displayResetBG();
        btnResetBg.style.cursor = "pointer";
    })

    skills.figma.addEventListener("click", () => {
        background('assets/img/skills-wallpaper/figma-background.jpg');
        backgroundCover();
        displayResetBG();
        btnResetBg.style.cursor = "pointer";
    })
    
    btnResetBg.addEventListener("click", () => {
        container.style.background = "var(--bg-color-1)";
        btnResetBg.style.opacity = "0";
        btnResetBg.style.cursor = "default";
    })
}
skillEvents()


// animação no botão de enviar mensagem
function submitAnimation() {
    const submit = $('btn-submit')

    submit.addEventListener('click', (e) => {
        submit.style.animation = "";
        setTimeout(() => submit.style.animation = "scaleSubmit .5s", 0);
    })
}

