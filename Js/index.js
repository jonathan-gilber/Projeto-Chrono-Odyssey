// tocar música com o botão de play
function tocar() {
  var audio = new Audio("./Assets/Index_Audio.mp3");
  audio.play();
}

// Âncora até determinado elemento da página
function saibaMais() {
  window.location.href = "#ancora_conteudo";
}

function galeria_midia() {
  window.location.href = "#ancora_galeria";
}

// Abre pop-up de login
function popup_login() {
  div_login.style.display = "flex"
}

// Fecha pop-up de login
function fechar_popup_login() {
  div_login.style.display = "none"
  input_email_login.style.border = "none";
  input_senha_login.style.border = "none";
  span_validacao.innerHTML = "";
}

// Altera a imagem do frame principal na galeria de midias
function frame_principal1() {
imagem_atual.style.backgroundImage = "url('https://chrono-odyssey.online/wp-content/uploads/2020/12/chrono_odyssey_mmorpg-scaled.jpg')"
}

function frame_principal2() {
  imagem_atual.style.backgroundImage = "url('https://chrono-odyssey.online/wp-content/uploads/2020/12/chronos_odyssey_west-scaled.jpg')"
}

function frame_principal3() {
  imagem_atual.style.backgroundImage = "url('https://chrono-odyssey.online/wp-content/uploads/2020/12/chronos_odyssey_cuando_sale-scaled.jpg')"
}

function frame_principal4() {
  imagem_atual.style.backgroundImage = "url('https://chrono-odyssey.online/wp-content/uploads/2020/12/chronos_odyssey_ps5-scaled.jpg')"
}

function frame_principal5() {
  imagem_atual.style.backgroundImage = "url('https://chrono-odyssey.online/wp-content/uploads/2020/12/chronos_odyssey_como_jugar-scaled.jpg')"
}

function frame_principal6() {
  imagem_atual.style.backgroundImage = "url('https://chrono-odyssey.online/wp-content/uploads/2020/12/chronos_odyssey_gremios-scaled.jpg')"
}

function frame_principal7() {
  imagem_atual.style.backgroundImage = "url('https://chrono-odyssey.online/wp-content/uploads/2020/12/chronos_odyssey_pvp-1-scaled.jpg')"
}

function frame_principal8() {
  imagem_atual.style.backgroundImage = "url('https://chrono-odyssey.online/wp-content/uploads/2020/12/chronos_odyssey_rvr-scaled.jpg')"
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



// Validação tela de login
function validLogin() {
  /* verifica se há algum input vazio */
  if (input_email_login.value == "" || input_senha_login.value == "") {
    span_validacao.innerHTML = "Por favor preencha todos os campos";
    texto_login.style.marginTop = "30px";
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