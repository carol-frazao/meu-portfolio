//Animação do cursor no botão "Start"

var cursor_click = document.getElementById('cursor_click')
var btn_start = document.getElementById('img-start')

function clickStart() {
    click = true

    if(click) {

        cursor_click.classList.toggle('animacao_cursor');
        btn_start.classList.toggle('scale_btn')

    } else {
        cursor_click.classList.remove('animacao_cursor');
        btn_start.classList.remove('scale_btn')
    }
}

