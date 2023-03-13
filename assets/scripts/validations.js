function validaCampo() {
  // inputs
  const nome = document.form.nome.value,
        email = document.form.email.value,
        assunto = document.form.assunto.value,
        mensagem = document.form.mensagem.value;
  // feedbacks
  const nameFeedback = document.getElementById('nameFeedback'),
        emailFeedback = document.getElementById('emailFeedback'),
        assuntoFeedback = document.getElementById('assuntoFeedback'),
        mensagemFeedback = document.getElementById('mensagemFeedback');

  if (!nome) {
    nameFeedback.innerText = "Insira seu nome";
    document.form.nome.focus();
    return false;
  }

  if (nome.length < 3) {
    nameFeedback.innerText = "Nome precisa ter no mínimo 3 caracteres"
    document.form.nome.focus();
    return false;
  }

  if (!email) {
    emailFeedback.innerText = "Insira seu e-mail";
    document.form.email.focus()
    return false;
  }

  if (
    email.indexOf("@") == -1 ||
    email.indexOf(".") == -1
  ) {
    emailFeedback.innerText = "Formato de e-mail inválido"
    document.form.email.focus();
    return false;
  }

  if (!assunto) {
    assuntoFeedback.innerText = "Defina um assunto para esta mensagem"
    document.form.assunto.focus();
    return false;
  }

  if (!mensagem) {
    mensagemFeedback.innerText = "Digite sua mensagem"
    document.form.mensagem.focus();
    return false;
  }
  return true;
}
