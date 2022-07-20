
function navCarrossel() {

    const arrow = document.querySelectorAll('.arrow')
    const skills = document.querySelectorAll('.skill');
    const left = document.getElementById('left')
    const right = document.getElementById('right')


    arrow.forEach((seta) => {
        seta.addEventListener("click", (e) => {
            seta.style.color = "rgb(129, 172, 48)";

            setTimeout(() => {
                seta.style.color = "#ffff"
            }, 150)
        })
    })

    left.addEventListener("click", () => {
        skills.forEach( (skill) => {
            skill.classList.add('animation-left');
            setTimeout(() => skill.classList.remove('animation-left'), 710)
        })
    })

    right.addEventListener("click", () => {
        skills.forEach((skill) => {
            skill.classList.add('animation-right');
            setTimeout(() => skill.classList.remove('animation-right'), 710)
        })
    })

}

navCarrossel()


