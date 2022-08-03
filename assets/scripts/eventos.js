//Animação do cursor no botão "Start"
function clickStart() {
    const btn_start = document.getElementById('img-start')

    btn_start.addEventListener("click", (e) => {
        btn_start.classList.add('scale_btn');
        setTimeout( () => btn_start.classList.remove('scale_btn'), 1000);
    })
}

// Animação nas skills e background conforme click
function transformSkill() {
    const imgSkills = document.querySelectorAll('.skill-img')
    const container = document.getElementById('skills')
    const skills = {
        html: document.getElementById('html-img'),
        css: document.getElementById('css-img'),
        js: document.getElementById('js-img'),
        react: document.getElementById('react-img'),
        node: document.getElementById('node-img'),
        git: document.getElementById('git-img'),
        github: document.getElementById('github-img'),
        figma: document.getElementById('figma-img')
    }


    imgSkills.forEach((skill) => {
        skill.addEventListener("click", () => {
            setTimeout(() => skill.style.animation = "rotate-img-slide 1s", 0);
            setTimeout(() => skill.style.animation = "", 1000);
        })
    })

    skills.html.addEventListener("click", () => {
        setTimeout(() => {
        container.style.backgroundImage = "url('assets/img/skills-wallpaper/html-wallpaper.jpg')",
        container.style.backgroundSize = "cover",
        0 })
    })

    skills.css.addEventListener("click", () => {
        setTimeout(() => { container.style.background = "url('assets/img/skills-wallpaper/css-wallpaper.jpg') center",
        container.style.backgroundSize = "cover",
        0 })
    })

    skills.js.addEventListener("click", () => {
        setTimeout(() => { container.style.background = "url('assets/img/skills-wallpaper/js-wallpaper.jpg') center",
        container.style.backgroundSize = "cover",
        0 })
    })

    skills.react.addEventListener("click", () => {
        setTimeout(() => { container.style.background = "url('assets/img/skills-wallpaper/react-background.jpg') center",
        container.style.backgroundSize = "cover",
        0 })
    })

    skills.node.addEventListener("click", () => {
        setTimeout(() => { container.style.background = "url('assets/img/skills-wallpaper/node-background.png') center",
        container.style.backgroundSize = "cover",
        0 })
    })

    skills.git.addEventListener("click", () => {
        setTimeout(() => { container.style.background = "url('assets/img/skills-wallpaper/git-background.jpg') center",
        container.style.backgroundSize = "cover",
        0 })
    })

    skills.github.addEventListener("click", () => {
        setTimeout(() => { container.style.background = "url('assets/img/skills-wallpaper/github-background.jpg') center",
        container.style.backgroundSize = "cover",
        0 })
    })

    skills.figma.addEventListener("click", () => {
        setTimeout(() => { container.style.background = "url('assets/img/skills-wallpaper/figma-background.jpg') center",
        container.style.backgroundSize = "cover",
        0 })
    })
}
transformSkill()


function defaultBackground() {
    const container = document.getElementById('skills')
    container.addEventListener("click", () => {
            container.style.background = "var(--bg-color-1)"
    })
}
defaultBackground()


// animação no botão enviar mensagem
function submitAnimation() {
    const submit = document.getElementById('btn-submit')

    submit.addEventListener('click', (e) => {
        submit.style.animation = "";
        setTimeout(() => submit.style.animation = "scaleSubmit .5s", 0);
    })
}

