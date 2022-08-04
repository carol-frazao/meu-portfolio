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
    const imgSkills = document.querySelectorAll('.skill-img');
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

    imgSkills.forEach((skill) => {
        skill.addEventListener("click", () => {
            setTimeout(() => skill.style.animation = "rotate-img-slide 1s", 0);
            setTimeout(() => skill.style.animation = "", 1000);
        })
    })

    skills.html.addEventListener("click", (e) => {
        background('assets/img/skills-wallpaper/html-wallpaper.jpg');
        backgroundCover();
    })

    skills.css.addEventListener("click", (e) => {
        background('assets/img/skills-wallpaper/css-wallpaper.jpg');
        backgroundCover();
    })

    skills.js.addEventListener("click", () => {
        background('assets/img/skills-wallpaper/js-wallpaper.jpg');
        backgroundCover();
    })

    skills.react.addEventListener("click", () => {
        background('assets/img/skills-wallpaper/react-background.jpg');
        backgroundCover();
    })

    skills.node.addEventListener("click", () => {
        background('assets/img/skills-wallpaper/node-background.png');
        backgroundCover();
    })

    skills.git.addEventListener("click", () => {
        background('assets/img/skills-wallpaper/git-background.jpg');
        backgroundCover();
    })

    skills.github.addEventListener("click", () => {
        background('assets/img/skills-wallpaper/github-background.jpg');
        backgroundCover();
    })

    skills.figma.addEventListener("click", () => {
        background('assets/img/skills-wallpaper/figma-background.jpg');
        backgroundCover();
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

