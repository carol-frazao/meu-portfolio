//Animação do cursor no botão "Start"
function clickStart() {
    const btn_start = document.getElementById('img-start')

    btn_start.addEventListener("click", (e) => {
        btn_start.classList.add('scale_btn');
        setTimeout( () => btn_start.classList.remove('scale_btn'), 1000);
    })
}

// Animação nas skills
function transformSkill() {
    const imgSkills = document.querySelectorAll('.skill-img')

    imgSkills.forEach((skill) => {
        skill.addEventListener("click", () => {
            setTimeout(() => skill.style.animation = "rotate-img-slide 1s", 0)
            setTimeout(() => skill.style.animation = "", 1000)
        })

    })
}
transformSkill()


// light theme
function addEventos() {
    const btn = document.getElementById('switch-shadow');
    const view1 = document.getElementById('view1');
    
    btn.addEventListener('change', (e) => {
        view1.classList.toggle('colorView1_lightTheme', e.target.unchecked);
    })
}
addEventos()