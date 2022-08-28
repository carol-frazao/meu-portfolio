function envioMensagem() {
  if (document.form.nome.value == "") {
    alert("Preencha seu nome");
    document.form.nome.focus();
    return false;
  }

  if (document.form.nome.value.length < 3) {
    alert("O nome precisa ter no mínimo 3 caracteres");
    document.form.nome.focus();
    return false;
  }

  if (document.form.email.value == "") {
    alert("O e-mail é obrigatório");
    return false;
  }

  if (
    document.form.email.value.indexOf("@") == -1 ||
    document.form.email.value.indexOf(".") == -1
  ) {
    alert("Insira um e-mail válido");
    document.form.email.focus();
    return false;
  }

  if (document.form.assunto.value == "") {
    alert("Defina um assunto para a sua mensagem");
    document.form.assunto.focus();
    return false;
  }

  if (document.form.mensagem.value == "") {
    alert("Digite sua mensagem");
    document.form.assunto.focus();
    return false;
  }

  if (document.form.mensagem.value.length < 20) {
    alert("A mensagem precisa ter pelo menos 20 caracteres");
    document.form.mensagem.focus();
    return false;
  }

  return true;
}
