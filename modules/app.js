//GameInit
const raquetadaSom = document.querySelector("#raquetada");
var tela = screenFactory(600,400);
var jogador = new Player(10, 160, 100, 20, "white",10);
var oponente = new Player(570, 160, 100, 20, "white",0);
var bola = new Ball(300, 200, 10, "white", 3, 3);
var placarJogador = document.querySelector("#jogador");
var placarOponente = document.querySelector("#oponente");
var iniciar = false;

function animacao() {
  requestAnimationFrame(animacao);
  tela.limpaTela();
  tela.desenhaPlayer(jogador);
  tela.desenhaPlayer(oponente);
  tela.desenhaBolinha(bola);
  bola.movimentaBolinha();
  verificaColisaoBorda();
  movimentarOponente();
  verificaColisaoRaquete(jogador);
  verificaColisaoRaquete(oponente);
  marcarPonto();
}

function comecaJogo() {
  animacao();
}

tela.telaInicial();