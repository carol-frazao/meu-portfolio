const scrollToTop = () => window.scrollTo(0, 0);
const posicaoInicial = (section) => $(section).position().top;

$(document).scroll(function () {
  const topo = $(document).scrollTop(); // obtem a quantidade de scroll no momento

  if (posicaoInicial("#inicio") + 100 < topo) {
    $(".back-to-top").css("display", "block");
  } else {
    $(".back-to-top").css("display", "none");
  }
});
