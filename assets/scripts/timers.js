// Type write no h1 da sessão de apresentação
const text_h1 = document.getElementById('text_h1');

function typeWhiter(text) {
    const textArray = text.innerText.split('');
    text.innerText = '';
    textArray.forEach((letra, indice) => {
        setTimeout(function () {
            text.innerText += letra;
        }, 46 * indice)
    })
}
typeWhiter(text_h1)


//Tempo para exibir os vetores
const vetor = {
    art_vetor: document.getElementById('art-vetor'),
    react_gif: document.getElementById('react_gif'),
    css_vetor: document.getElementById('css_vetor'),
    fumaca_gif: document.getElementById('fumaca-gif'),
    code_vetor: document.getElementById('code_symbol'),
    html_vetor: document.getElementById('html'),
    js_vetor: document.getElementById('js_vetor'),
}

setTimeout( function() {
    vetor.art_vetor.style.opacity = '1'
    vetor.code_vetor.style.opacity = '1'
}, 10)

setTimeout( function() {
    vetor.css_vetor.style.opacity = '1'
},600)

setTimeout( function() {
    vetor.js_vetor.style.opacity = '1'
},1200)

setTimeout( function() {
    vetor.react_gif.style.opacity = '1'
},1800)

setTimeout( function() {
    vetor.html_vetor.style.opacity = '1'
},2400)
