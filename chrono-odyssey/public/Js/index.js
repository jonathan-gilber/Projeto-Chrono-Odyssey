function ancoraConteudo() {
  window.location.href = "#conteudo_overlay";
}

function galeria_midia() {
  window.location.href = "#ancora_galeria";
}

function ancoraEnquete() {
  window.location.href = "#ancora_enquete";
}

window.onload = function() {
  if (sessionStorage.ID_USUARIO != undefined) {
    nome_session.innerHTML = sessionStorage.NOME_USUARIO.toUpperCase()
    btn_sair.style.display = "block"
    btn_iniciar.style.display = "none"
    btn_juntar.style.display = "none"
    bloqueio_enquete.style.display = "none"

    bloqueio_leftbox.style.filter = "none"
    bloqueio_rightbox.style.filter = "none"
  } else {
    btn_sair.style.display = "none"
    bloqueio_enquete.style.display = "flex"
    bloqueio_leftbox.style.filter = "blur(8px)"
    bloqueio_rightbox.style.filter = "blur(8px)"
  }
}

function deslogar() {
  sessionStorage.clear()
  window.location = "index.html";
}

var b = true

function toggle() {
  b = !b;

  if (b == false) {
    drop_menu.style.height = "350px"
    window.location.href = "#drop_menu"
    down_arrow_img.src = "./assets/up_arrow.png"
  } else {
    drop_menu.style.height = "0px"
    down_arrow_img.src = "./assets/down_arrow.png"
  }
}

var c = true
var x = document.getElementById("myAudio");

function toggleMusica() {
  c = !c; console.log(c)

  if (c == false) {
    texto_play.innerHTML = `PAUSAR MÚSICA`
    play_img.src = "./assets/pause_icon.png"
    play_img.style.width = "18px"
    var x = document.getElementById("myAudio");
    x.play();
  } else {
    texto_play.innerHTML = `TOCAR MÚSICA`
    play_img.src = "./assets/play_icon.png"
    play_img.style.width = "16px"
    var x = document.getElementById("myAudio");
    x.pause();
  }
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    conteudo_overlay.style.backgroundColor = "transparent"
    conteudo_overlay.style.zIndex = "-1"
  } else {
    conteudo_overlay.style.backgroundColor = "black"
    conteudo_overlay.style.zIndex = "1"
  }

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    ScrollUp.style.display = "block";
    ScrollUp.style.display = "block"
  } else {
    ScrollUp.style.display = "none"
  }

  if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
    conteudo1.style.opacity = "0"
    conteudo1.style.zIndex = "0"
    conteudo2.style.opacity = "1"
    conteudo2.style.zIndex = "1"
    conteudo_container.style.backgroundImage = "url('./Assets/scroll_2.jpg')";
  } else {
    ScrollUp.style.display = "none";
    conteudo1.style.opacity = "1"
    conteudo1.style.zIndex = "1"
    conteudo2.style.opacity = "0"
    conteudo2.style.zIndex = "0"
    conteudo_container.style.backgroundImage = "url('./Assets/scroll_1.jpg')";
  }
}

function topFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

function popup_login() {
  div_login.style.display = "flex"
}

function fechar_popup_login() {
  div_login.style.display = "none"
  input_email_login.style.border = "thin solid #646569"
  input_senha_login.style.border = "thin solid #646569"
  input_email_login.innerHTML = ""
  input_senha_login.innerHTML = ""
  span_validacao.innerHTML = ""
}

function frame_principal(id) {
  if (id == "c1f1") {
    imagem_atual.style.backgroundImage = "url('Assets/c1f1.jpg')";
  } else if (id == "c1f2") {
    imagem_atual.style.backgroundImage = "url('Assets/c1f2.jpg')";
  } else if (id == "c2f1") {
    imagem_atual.style.backgroundImage = "url('Assets/c2f1.jpg')";
  } else if (id == "c2f2") {
    imagem_atual.style.backgroundImage = "url('Assets/c2f2.jpg')";
  } else if (id == "c3f1") {
    imagem_atual.style.backgroundImage = "url('Assets/c3f1.jpg')";
  } else if (id == "c3f2") {
    imagem_atual.style.backgroundImage = "url('Assets/c3f2.jpg')";
  } else if (id == "c4f1") {
    imagem_atual.style.backgroundImage = "url('Assets/c4f1.jpg')";
  } else if (id == "c4f2") {
    imagem_atual.style.backgroundImage = "url('Assets/c4f2.jpg')";
  } else if (id == "c5f1") {
    imagem_atual.style.backgroundImage = "url('Assets/c5f1.jpg')";
  } else if (id == "c5f2") {
    imagem_atual.style.backgroundImage = "url('Assets/c5f2.jpg')";
  } else if (id == "c6f1") {
    imagem_atual.style.backgroundImage = "url('Assets/c6f1.jpg')";
  } else if (id == "c6f2") {
    imagem_atual.style.backgroundImage = "url('Assets/c6f2.jpg')";
  }
}

var countDownDate = new Date("Jul 5, 2026 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);

function validarSessao() {

  var email = sessionStorage.EMAIL_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;

  var b_usuario = document.getElementById("b_usuario");

  if (email != null && nome != null) {
      b_usuario.innerHTML = nome;
  } else {
      window.location = "../login.html";
  }
}

function limparSessao() {
  sessionStorage.clear();
  window.location = "../login.html";
}

function aguardar() {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
  var divAguardar = document.getElementById("div_aguardar");
  divAguardar.style.display = "none";

  var divErrosLogin = document.getElementById("div_erros_login");
  if (texto) {
      divErrosLogin.innerHTML = texto;
  }
}

function validLogin() {
  emailVar = input_email_login.value
  senhaVar = input_senha_login.value
  if (input_email_login.value == "" || input_senha_login.value == "") {
    span_validacao.innerHTML = "Por favor preencha todos os campos";
    input_email_login.style.border = "thin solid #FF0000";
    input_senha_login.style.border = "thin solid #FF0000";

    if (input_email_login.value !== "") {
      input_email_login.style.border = "thin solid #646569";
    } else {
      input_email_login.style.border = "thin solid #FF0000";
    }

    if (input_senha_login.value !== "") {
      input_senha_login.style.border = "thin solid #646569";
    } else {
      input_senha_login.style.border = "thin solid #FF0000";
    }
  } else {
    input_email_login.border = "thin solid #646569";
    input_senha_login.style.border = "thin solid #646569";

    if (input_email_login.value.length < 10) {
      input_email_login.style.border = "thin solid #FF0000";
      input_senha_login.style.border = "thin solid #646569";
      span_validacao.innerHTML =
        "Email inválido, deve conter no mínimo 10 digitos";
    } else if (input_email_login.value.indexOf("@") == -1) {

      input_email_login.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = 'Email inválido, deve conter "@"';
    } else if (input_senha_login.value.length < 8) {

      input_senha_login.style.border = "thin solid #FF0000";
      input_email_login.style.border = "thin solid #646569";
      span_validacao.innerHTML = "Senha deve conter no mínimo 8 digitos";
    } else {
      fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          emailServer: emailVar,
          senhaServer: senhaVar
        })
      }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
          console.log(resposta);

          resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));

            sessionStorage.EMAIL_USUARIO = json.email;
            sessionStorage.NOME_USUARIO = json.nome;
            sessionStorage.SOBRENOME_USUARIO = json.sobrenome;
            sessionStorage.ID_USUARIO = json.idUsuario;

            span_validacao.innerHTML = `Redirecionando...`
            span_gif.style.display = "flex"
            span_validacao.style.color = "white"

            setTimeout(function () {
              window.location = "index.html";
            }, 2000);
          });

        } else {
          console.log("Houve um erro ao tentar realizar o login!");
          span_validacao.innerHTML = `Email ou senha inválidos`
          input_senha_login.style.border = "thin solid red";
          input_email_login.style.border = "thin solid red";

          resposta.text().then(texto => {
            console.error(texto);
            finalizarAguardar(texto);
          });
        }

      }).catch(function (erro) {
        console.log(erro);
      })

      return false;
    }

    function sumirMensagem() {
      cardErro.style.display = "none"
    }
  }
}

function votar() {
 var votoVar = document.querySelector('input[name="tela1"]:checked').value;
 var idVar = sessionStorage.ID_USUARIO
 var opcaoVotoVar = 0

 if (votoVar == 1) {
  opcaoVotoVar = "Gráficos"
 } else if (votoVar == 2) {
  opcaoVotoVar = "Jogabilidade"
 } else if (votoVar == 3) {
  opcaoVotoVar = "História"
} else if (votoVar == 4) {
  opcaoVotoVar = "Combate"
}

  votacao.style.display = "none"
  div_chartjs.style.display = "flex"

  texto_chart1.innerHTML = `Muito obrigado, ${sessionStorage.NOME_USUARIO}`
  texto_chart2.innerHTML = `Seu voto vai para: ${opcaoVotoVar}`

  fetch("/usuarios/votacao", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      votoServer: votoVar,
      idServer: idVar,
      opcaoVotoServer: opcaoVotoVar
    })
  })
}