const tela = document.querySelector("canvas");
const pontoSom = document.querySelector("#marcaPonto");
const raquetadaSom = document.querySelector("#raquetada");
tela.width = 600;
tela.height = 400;
tela.style.background = "black";

document.addEventListener("keydown", function (evento) {
  if (evento.key === "ArrowUp") {
    jogador.movimentaJogadorBaixo();
  } else if (evento.key === "ArrowDown") {
    jogador.movimentaJogadorCima();
  } else if (evento.key === "Enter") {
    if (iniciar == false) {
      iniciar = true;
      comecaJogo();
    }
  }
});
var placarJogador = document.querySelector("#jogador");
var placarOponente = document.querySelector("#oponente");
var chanceDeErrar = 1.5;
var iniciar = false;
const lapis = tela.getContext("2d");

//Tela Inicial
lapis.fillStyle = "white";
lapis.font = "30px Arial";
lapis.fillText("Aperte Enter para Jogar!", 150, 200);

class Player {
  constructor(x, y, altura, largura, cor,velocidadeY) {
    this.x = x;
    this.y = y;
    this.altura = altura;
    this.largura = largura;
    this.cor = cor;
    this.velocidadeY = velocidadeY;
  }
  desenhaPlayer() {
    lapis.fillStyle = this.cor;
    lapis.fillRect(this.x, this.y, this.largura, this.altura);
  }
  movimentaJogadorCima(){
    this.y += this.velocidadeY;
  }
  movimentaJogadorBaixo(){
    this.y -= this.velocidadeY;
  }
}

class Bolinha {
  constructor(x, y, raio, cor, velocidadeX, velocidadeY) {
    this.x = x;
    this.y = y;
    this.raio = raio;
    this.cor = cor;
    this.velocidadeX = velocidadeX;
    this.velocidadeY = velocidadeY;
  }

  desenhaBolinha() {
    lapis.beginPath();
    lapis.fillStyle = this.cor;
    lapis.arc(this.x, this.y, this.raio, 0, 2 * Math.PI);
    lapis.fill();
  }
  movimentaBolinha() {
    this.x += this.velocidadeX;
    this.y += this.velocidadeY;
  }
}

var jogador = new Player(10, 160, 100, 20, "white",10);
var oponente = new Player(570, 160, 100, 20, "white",10);
var bola = new Bolinha(300, 200, 10, "white", 3, 3);

function verificaColisaoBorda() {
  if (bola.x + bola.raio >= tela.width){
    bola.velocidadeX *= -1;
    bola.x -= 30;
  } else if(bola.x <= 0) {
    bola.velocidadeX *= -1;
    bola.x += 30;
  }
  if (bola.y + bola.raio >= tela.height || bola.y <= 0) {
    bola.velocidadeY *= -1;
  }
}

function movimentarOponente() {
  oponente.y = bola.y - (oponente.altura/3) * chanceDeErrar;
}

function chanceDeErro() {
  chanceDeErrar += Math.random() * 0.10;
  if (chanceDeErrar > 2.0 && Number(placarJogador.innerHTML) > Number(placarOponente.innerHTML)
  ) {
    chanceDeErrar = 1.7;
  }
}

function verificaColisaoRaquete() {
  if (
    bola.x-bola.raio <= jogador.x + jogador.largura &&
    bola.y-bola.raio >= jogador.y &&
    bola.y-bola.raio <= jogador.y + jogador.altura
  ) {
    bola.velocidadeX *= -1;
    raquetadaSom.play();
  }
}

function verificaColisaoRaqueteOponente() {
  if (
    bola.x+bola.raio > oponente.x &&
    bola.y+bola.raio >= oponente.y &&
    bola.y+bola.raio <= oponente.y + oponente.altura
  ) {
    bola.velocidadeX *= -1;
    raquetadaSom.play();
  }
}

function limpaTela() {
  lapis.clearRect(0, 0, 600, 400);
}

function marcarPonto() {
  if (bola.x + bola.raio >= tela.width) {
    var aux = Number(placarJogador.innerHTML);
    aux++;
    placarJogador.innerHTML = aux;
    pontoSom.play();
  } else if (bola.x + bola.raio <= 12) {
    //console.log(`${bola.x+bola.raio}`);
    var aux2 = Number(placarOponente.innerHTML);
    aux2++;
    placarOponente.innerHTML = aux2;
    pontoSom.play();
  }
}

function animacao() {
  limpaTela();
  jogador.desenhaPlayer();
  oponente.desenhaPlayer();
  bola.desenhaBolinha();
  verificaColisaoBorda();
  bola.movimentaBolinha();
  movimentarOponente();
  verificaColisaoRaquete();
  verificaColisaoRaqueteOponente();
  marcarPonto();
}

function comecaJogo() {
  setInterval(animacao, 12);
  setInterval(chanceDeErro, 1000);
}