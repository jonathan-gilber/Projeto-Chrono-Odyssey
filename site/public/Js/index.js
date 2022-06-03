// Âncora até determinado elemento da página
function saibaMais() {
  window.location.href = "#ancora_conteudo";
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
  } else {
    btn_sair.style.display = "none"
  }
}

function deslogar() {
  sessionStorage.clear()
  window.location = "index.html";
}

// Toggle para o botão drop-down
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

// toggle para o botão play/pause
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

// Exibir botão de scroll up
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    ScrollUp.style.display = "block";
  } else {
    ScrollUp.style.display = "none";
  }
}

// Scroll para o topo da página
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Abre pop-up de login
function popup_login() {
  div_login.style.display = "flex"
}

// Fecha pop-up de login
function fechar_popup_login() {
  div_login.style.display = "none"
  input_email_login.style.border = "thin solid #646569";
  input_senha_login.style.border = "thin solid #646569";
  input_email_login.innerHTML = "";
  input_senha_login.innerHTML = "";
  span_validacao.innerHTML = "";
}

// Altera a imagem do frame principal na galeria de midias
function frame_principal(id) {
  if (id == "c1f1") {
    imagem_atual.style.backgroundImage = "url('https://chrono-odyssey.online/wp-content/uploads/2020/12/chrono_odyssey_mmorpg-scaled.jpg')"
  } else if (id == "c1f2") {
    imagem_atual.style.backgroundImage = "url('https://chrono-odyssey.online/wp-content/uploads/2020/12/chronos_odyssey_west-scaled.jpg')"
  } else if (id == "c2f1") {
    imagem_atual.style.backgroundImage = "url('https://chrono-odyssey.online/wp-content/uploads/2020/12/chronos_odyssey_cuando_sale-scaled.jpg')"
  } else if (id == "c2f2") {
    imagem_atual.style.backgroundImage = "url('https://chrono-odyssey.online/wp-content/uploads/2020/12/chronos_odyssey_ps5-scaled.jpg')"
  } else if (id == "c3f1") {
    imagem_atual.style.backgroundImage = "url('https://chrono-odyssey.online/wp-content/uploads/2020/12/chronos_odyssey_como_jugar-scaled.jpg')"
  } else if (id == "c3f2") {
    imagem_atual.style.backgroundImage = "url('https://chrono-odyssey.online/wp-content/uploads/2020/12/chronos_odyssey_gremios-scaled.jpg')"
  } else if (id == "c4f1") {
    imagem_atual.style.backgroundImage = "url('https://chrono-odyssey.online/wp-content/uploads/2020/12/chronos_odyssey_pvp-1-scaled.jpg')"
  } else if (id == "c4f2") {
    imagem_atual.style.backgroundImage = "url('https://chrono-odyssey.online/wp-content/uploads/2020/12/chronos_odyssey_rvr-scaled.jpg')"
  }
}

function votoEnquete(id) {
  if (id == "voto_1") {
    voto_1.style.backgroundColor = "grey"
    voto_2.style.backgroundColor = "#0a0a0a00"
    voto_3.style.backgroundColor = "#0a0a0a00"
    voto_4.style.backgroundColor = "#0a0a0a00"
  } else if (id == "voto_2") {
    voto_1.style.backgroundColor = "#0a0a0a00"
    voto_2.style.backgroundColor = "grey"
    voto_3.style.backgroundColor = "#0a0a0a00"
    voto_4.style.backgroundColor = "#0a0a0a00"
  } else if (id == "voto_3") {
    voto_1.style.backgroundColor = "#0a0a0a00"
    voto_2.style.backgroundColor = "#0a0a0a00"
    voto_3.style.backgroundColor = "grey"
    voto_4.style.backgroundColor = "#0a0a0a00"
  } else if (id == "voto_4") {
    voto_1.style.backgroundColor = "#0a0a0a00"
    voto_2.style.backgroundColor = "#0a0a0a00"
    voto_3.style.backgroundColor = "#0a0a0a00"
    voto_4.style.backgroundColor = "grey"
  }
}

// Define a data que queremos alcançar
var countDownDate = new Date("Jul 5, 2022 15:37:25").getTime();

// atualiza o contador a cada 1 segundo
var x = setInterval(function () {
  // Define o dia e hora de hoje
  var now = new Date().getTime();

  // descobre a distância entre agora e a data que buscamos
  var distance = countDownDate - now;

  // cálculos para dias, minutos e horas
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // output do valor na div 'demo'
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);

// Validar a sessão
function validarSessao() {
  // aguardar();

  var email = sessionStorage.EMAIL_USUARIO;
  var nome = sessionStorage.NOME_USUARIO;

  var b_usuario = document.getElementById("b_usuario");

  if (email != null && nome != null) {
      // window.alert(`Seja bem-vindo, ${nome}!`);
      b_usuario.innerHTML = nome;

      // finalizarAguardar();
  } else {
      window.location = "../login.html";
  }
}

function limparSessao() {
  // aguardar();
  sessionStorage.clear();
  // finalizarAguardar();
  window.location = "../login.html";
}

// carregamento (loading)
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

// Validação tela de login
function validLogin() {
  emailVar = input_email_login.value
  senhaVar = input_senha_login.value
  /* verifica se há algum input vazio */
  if (input_email_login.value == "" || input_senha_login.value == "") {
    span_validacao.innerHTML = "Por favor preencha todos os campos";
    input_email_login.style.border = "thin solid #FF0000";
    input_senha_login.style.border = "thin solid #FF0000";

    /* marca a input email */
    if (input_email_login.value !== "") {
      input_email_login.style.border = "thin solid #646569";
    } else {
      input_email_login.style.border = "thin solid #FF0000";
    }

    /* marca a input senha */
    if (input_senha_login.value !== "") {
      input_senha_login.style.border = "thin solid #646569";
    } else {
      input_senha_login.style.border = "thin solid #FF0000";
    }
  } else {
    /* tira as marcações das inputs já preenchidas */
    input_email_login.border = "thin solid #646569";
    input_senha_login.style.border = "thin solid #646569";

    /* Valida se o email possui mais de 10 caracteres */
    if (input_email_login.value.length < 10) {
      input_email_login.style.border = "thin solid #FF0000";
      input_senha_login.style.border = "thin solid #646569";
      span_validacao.innerHTML =
        "Email inválido, deve conter no mínimo 10 digitos";
    } else if (input_email_login.value.indexOf("@") == -1) {

      /* Valida se o email possui "@" */
      input_email_login.style.border = "thin solid #FF0000";
      span_validacao.innerHTML = 'Email inválido, deve conter "@"';
    } else if (input_senha_login.value.length < 8) {

      /* Valida se a senha tem mais de 8 caracteres */
      input_senha_login.style.border = "thin solid #FF0000";
      input_email_login.style.border = "thin solid #646569";
      span_validacao.innerHTML = "Senha deve conter no mínimo 8 digitos";
    } else {
      /* Confirma o login e recarrega a página */
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
            sessionStorage.NOME_USUARIO = json.Nome;
            sessionStorage.SOBRENOME_USUARIO = json.Sobrenome;
            sessionStorage.ID_USUARIO = json.idUsuario;

            span_validacao.innerHTML = `Redirecionando...`
            span_gif.style.display = "flex"
            span_validacao.style.color = "white"

            setTimeout(function () {
              window.location = "index.html";
            }, 2000); // apenas para exibir o loading
          });

        } else {
          console.log("Houve um erro ao tentar realizar o login!");
          span_validacao.innerHTML = `Email ou senha inválidos`
          input_senha_login.style.border = "thin solid #646569";
          input_email_login.style.border = "thin solid #646569";

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