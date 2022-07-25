//Animação do cursor no botão "Start"

function clickStart() {
    const btn_start = document.getElementById('img-start')

    btn_start.addEventListener("click", (e) => {
        btn_start.classList.add('scale_btn');
        setTimeout( () => btn_start.classList.remove('scale_btn'), 1000);
    })
}