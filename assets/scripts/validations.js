function validaCampo() {
  if (document.form.nome.value == "") {
    document.getElementById('nameFeedback').innerText = "Insira seu nome"
    document.form.nome.focus();
    return false;
  }

  if (document.form.nome.value.length < 3) {
    document.getElementById('nameFeedback').innerText = "Nome precisa ter no mínimo 3 caracteres"
    document.form.nome.focus();
    return false;
  }

  if (document.form.email.value == "") {
    document.getElementById('emailFeedback').innerText = "Insira seu e-mail"
    return false;
  }

  if (
    document.form.email.value.indexOf("@") == -1 ||
    document.form.email.value.indexOf(".") == -1
  ) {
    document.getElementById('emailFeedback').innerText = "Formato inválido"
    document.form.email.focus();
    return false;
  }

  if (document.form.assunto.value == "") {
    document.getElementById('assuntoFeedback').innerText = "Defina um assunto para esta mensagem"
    document.form.assunto.focus();
    return false;
  }

  if (document.form.mensagem.value == "") {
    document.getElementById('mensagemFeedback').innerText = "Digite sua mensagem"
    document.form.assunto.focus();
    return false;
  }

  return true;
}
