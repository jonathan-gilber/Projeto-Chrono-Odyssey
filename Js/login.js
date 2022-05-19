function validLogin() {
  /* verifica se há algum input vazio */
  if (input_email_login.value == "" || input_senha_login.value == "") {
    span_validacao.innerHTML = "Por favor preencha todos os campos";
    texto_login.style.marginTop = "0px";
    input_email_login.style.border = "thin solid #FF0000";
    input_senha_login.style.border = "thin solid #FF0000";

    /* marca a input email */
    if (input_email_login.value !== "") {
      input_email_login.style.border = "none";
    } else {
      input_email_login.style.border = "thin solid #FF0000";
    }

    /* marca a input senha */
    if (input_senha_login.value !== "") {
      input_senha_login.style.border = "none";
    } else {
      input_senha_login.style.border = "thin solid #FF0000";
    }
  } else {
    /* tira as marcações das inputs já preenchidas */
    input_email_login.border = "none";
    input_senha_login.style.border = "none";

    /* Valida se o email possui mais de 10 caracteres */
    if (input_email_login.value.length < 10) {
      input_email_login.style.border = "thin solid #FF0000";
      input_senha_login.style.border = "none";
      span_validacao.innerHTML =
        "Email inválido, deve conter no mínimo 10 digitos";
    } else if (input_email_login.value.indexOf("@") == -1) {

      /* Valida se o email possui "@" */
      input_email_login.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = 'Email inválido, deve conter "@"';
    } else if (input_senha_login.value.length < 8) {

      /* Valida se a senha tem mais de 8 caracteres */
      input_senha_login.style.border = "thin solid #FF0000";
      input_email_login.style.border = "none";
      span_validacao.innerHTML = "Senha deve conter no mínimo 8 digitos";
    } else {

      /* Confirma o login e abre a tela de monitoramento */
      window.location.href = "index.html";
    }
  }
}
