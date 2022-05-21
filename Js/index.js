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

// Altera a imagem do frame principal na galeria de midias
function frame_principal() {
  //frame_principal.style.backgroundImage = "url('img_tree.png')";
  if (document.getElementById('c1f1').clicked == true) {
    alert("botão 1");
  }

  else if (document.getElementById('c1f2').clicked == true) {
    alert("botão 2");
  }

  else {
    alert("a")
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
