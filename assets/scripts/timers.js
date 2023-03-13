const text_h1 = document.getElementById("text_h1");

const art_vetor =  document.getElementById("art-vetor"),
      react_gif = document.getElementById("react_gif"),
      css_vetor = document.getElementById("css_vetor"),
      code_vetor = document.getElementById("code_symbol"),
      html_vetor = document.getElementById("html"),
      js_vetor = document.getElementById("js_vetor");

// Type write no título da introdução
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
setTimeout(() => {
  art_vetor.style.opacity = "1";
  code_vetor.style.opacity = "1";
}, 10);

setTimeout(() => {
  css_vetor.style.opacity = "1";
}, 600);

setTimeout(() => {
  js_vetor.style.opacity = "1";
}, 1200);

setTimeout(() => {
  react_gif.style.opacity = "1";
}, 1800);

setTimeout(() => {
  html_vetor.style.opacity = "1";
}, 2400);
