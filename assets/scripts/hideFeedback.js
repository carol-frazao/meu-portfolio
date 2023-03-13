function hideFeedback() {
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

    if (nome  && nome.length < 3) {
        nameFeedback.innerText = "O nome precisa ter no mínimo 3 caracteres";
    }

    if (nome && nome.length >= 3) {
        nameFeedback.innerText = "";
    }

    if (email && (email.indexOf("@") == -1 || email.indexOf(".") == -1)) {
        emailFeedback.innerText = "Insira um e-mail válido";
    }

    if (!email) {
        emailFeedback.innerText = "";
    }

    if (email && email.indexOf("@") != -1 && email.indexOf(".") != -1) {
       emailFeedback.innerText = "";
    }

    if (assunto) {
        assuntoFeedback.innerText = "";
    }

    if (mensagem) {
        mensagemFeedback.innerText = "";
    }
}
