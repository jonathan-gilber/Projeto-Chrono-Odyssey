function validCadastro() {
  var nomeVar = input_nome.value
  var sobrenomeVar = input_sobrenome.value
  var telVar = input_tel.value
  var emailVar = input_email.value
  var senhaVar = input_senha.value
  if (
    input_nome.value == "" ||
    input_tel.value == "" ||
    input_senha.value == "" ||
    input_sobrenome.value == "" ||
    input_email.value == "" ||
    input_repetir_senha.value == ""
  ) {
    span_validacao.innerHTML = "Por favor preencha todos os campos";
    idcontainer2.style.marginTop = "-25px";
    texto_cadastro.style.marginBottom = "30px";

    if (input_nome.value !== "") {
      input_nome.style.border = "none";
    } else {
      input_nome.style.border = "thin solid #FF0000";
    }

    if (input_email.value !== "") {
      input_email.style.border = "none";
    } else {
      input_email.style.border = "thin solid #FF0000";
    }

    if (input_sobrenome.value !== "") {
      input_sobrenome.style.border = "none";
    } else {
      input_sobrenome.style.border = "thin solid #FF0000";
    }

    if (input_senha.value !== "") {
      input_senha.style.border = "none";
    } else {
      input_senha.style.border = "thin solid #FF0000";
    }

    if (input_repetir_senha.value !== "") {
      input_repetir_senha.style.border = "none";
    } else {
      input_repetir_senha.style.border = "thin solid #FF0000";
    }

    if (input_tel.value !== "") {
      input_tel.style.border = "none";
    } else {
      input_tel.style.border = "thin solid #FF0000";
    }
  } else {
    input_tel.style.border = "none";
    input_senha.style.border = "none";
    input_repetir_senha.style.border = "none";
    input_nome.style.border = "none";
    input_email.style.border = "none";
    input_sobrenome.style.border = "none";

    if (input_email.value.indexOf("@") == -1) {
      input_email.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = 'Email inválido, deve conter "@"';
    } else if (input_email.value.length < 10) {

      input_email.style.border = "thin solid #FF0000";
      span_validacao.innerHTML =
        "Email inválido, deve conter no mínimo 10 digitos";
    } else if (input_nome.value.length < 3) {

      input_nome.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = "Nome deve conter no mínimo 3 digitos";
    } else if (input_sobrenome.value.length < 3) {

      input_sobrenome.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = "Sobrenome deve conter no mínimo 3 digitos";
    } else if (input_tel.value.length < 8) {

      input_tel.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = "Telefone deve conter no mínimo 8 digitos";
    } else if (input_senha.value.length < 8) {

      input_senha.style.border = "thin solid #FF0000";
      input_repetir_senha.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = "Senha deve conter no mínimo 8 digitos";
    } else if (input_senha.value !== input_repetir_senha.value) {

      input_senha.style.border = "thin solid #FF0000";
      input_repetir_senha.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = "As senhas não coincidem";
    } else if (chk_termos.checked == false) {

      span_validacao.innerHTML =
        "Você deve concordar com os nossos termos de uso antes de prosseguir";
      chk_termos.style.outline = "1px solid red";
      chk_termos.style.outlineOffset = "-1px";
    } else {

      input_tel.style.border = "none";
      input_senha.style.border = "none";
      input_repetir_senha.style.border = "none";
      input_nome.style.border = "none";
      input_email.style.border = "none";
      input_sobrenome.style.border = "none";

      alert("Cadastro efetuado com sucesso");
      window.location.href = "index.html";

      fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nomeServer: nomeVar,
          sobrenomeServer: sobrenomeVar,
          telServer: telVar,
          emailServer: emailVar,
          senhaServer: senhaVar,
        })
      })
    }
  }
}