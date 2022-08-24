const getElement = (element) => document.querySelector(element);

// Type write no título da introdução
const text_h1 = getElement("#text_h1");

function typeWhiter(text) {
  const textArray = text.innerText.split("");
  text.innerText = "";
  textArray.forEach((letra, indice) => {
    setTimeout(function () {
      text.innerText += letra;
    }, 46 * indice);
  });
}
typeWhiter(text_h1);

//Tempo para exibir os vetores
const vetor = {
  art_vetor: getElement("#art-vetor"),
  react_gif: getElement("#react_gif"),
  css_vetor: getElement("#css_vetor"),
  code_vetor: getElement("#code_symbol"),
  html_vetor: getElement("#html"),
  js_vetor: getElement("#js_vetor"),
};

setTimeout(() => {
  vetor.art_vetor.style.opacity = "1";
  vetor.code_vetor.style.opacity = "1";
}, 10);

setTimeout(() => {
  vetor.css_vetor.style.opacity = "1";
}, 600);

setTimeout(() => {
  vetor.js_vetor.style.opacity = "1";
}, 1200);

setTimeout(() => {
  vetor.react_gif.style.opacity = "1";
}, 1800);

setTimeout(() => {
  vetor.html_vetor.style.opacity = "1";
}, 2400);
