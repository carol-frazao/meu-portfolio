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
const vetores = {
    art_vetor: document.getElementById('art-vetor'),
    react_gif: document.getElementById('react_gif'),
    css_vetor: document.getElementById('css_vetor'),
    fumaca_gif: document.getElementById('fumaca-gif'),
    code_vetor: document.getElementById('code_symbol'),
    html_vetor: document.getElementById('html'),
    js_vetor: document.getElementById('js_vetor'),
}

setTimeout( function() {
    vetores.art_vetor.style.opacity = '1'
    vetores.fumaca_gif.style.opacity = '1'
    vetores.code_vetor.style.opacity = '1'
}, 20)

setTimeout( function() {
    vetores.css_vetor.style.opacity = '1'
},300)

setTimeout( function() {
    vetores.js_vetor.style.opacity = '1'
},900)

setTimeout( function() {
    vetores.react_gif.style.opacity = '1'
},1500)

setTimeout( function() {
    vetores.html_vetor.style.opacity = '1'
},2100)