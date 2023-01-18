function hideFeedback() {

    if (document.form.nome.value != "" && document.form.nome.value.length >= 3) {
        document.getElementById('nameFeedback').innerText = ""
    }

    if (
        document.form.email.value != ""
        && document.form.email.value.indexOf("@") != -1
        && document.form.email.value.indexOf(".") != -1
    ) {
        document.getElementById('emailFeedback').innerText = ""
    }

    if (document.form.assunto.value != "") {
        document.getElementById('assuntoFeedback').innerText = ""
    }

    if (document.form.mensagem.value != "") {
        document.getElementById('mensagemFeedback').innerText = ""
    }
}
