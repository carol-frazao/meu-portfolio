//Animação do cursor no botão "Start"

const cursor_click = document.getElementById('cursor_click')
const btn_start = document.getElementById('img-start')
const arrowClick = document.getElementById('arrowStart')


function clickStart() {
    btn_start.addEventListener("click", (e) => {
        cursor_click.classList.add('animacao_cursor');
        btn_start.classList.add('scale_btn');
        arrowClick.style.opacity = '0';
    })

    setTimeout(function () {
        cursor_click.classList.remove('animacao_cursor');
        btn_start.classList.remove('scale_btn');
        arrowClick.style.opacity = '1'
    }, 2000)
}