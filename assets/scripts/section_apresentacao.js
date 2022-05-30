// Type write no h1 da sessão de apresentação
const text_h1 = document.getElementById('text_h1');

function typeWhiter(text) {
    const textArray = text.innerText.split('');
    text.innerText = '';
    textArray.forEach((letra, indice) => {
        setTimeout(function () {
            text.innerText += letra;
        }, 45 * indice)
    })
}

typeWhiter(text_h1)


//Tempo para exibir a descrição na sessão de apresentação
const descricao = document.querySelector('.descricao')

setTimeout( function() {
    descricao.style.opacity = '1'
}, 2500)


//Tempo para exibir os vetores
const girl_image = document.getElementById('girl_image')
const react_gif = document.getElementById('react_gif')
const css_vetor = document.getElementById('css_vetor')

setTimeout( function() {
    girl_image.style.opacity = '1'
    react_gif.style.opacity = '1'
    css_vetor.style.opacity = '1'
}, 2500)