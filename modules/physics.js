function verificaColisaoBorda() {
  if (bola.x + bola.raio >= tela.width || bola.x <= 0){
    bola.velocidadeX *= -1;
  }
  if (bola.y + bola.raio >= tela.height || bola.y <= 0) {
    bola.velocidadeY *= -1;
  }
}

function movimentarOponente() {
  const distanciaY = bola.y - oponente.y;
  const velocidadeOponente = 0.5; // Ajuste esse valor para controlar a velocidade do oponente
  oponente.y += distanciaY * velocidadeOponente;
}

function verificaColisaoRaquete(jogador) {
  //Física construída com auxilio do ChatGPT

  var closestX = Math.max(jogador.x, Math.min(bola.x, jogador.x + jogador.largura));
  var closestY = Math.max(jogador.y, Math.min(bola.y, jogador.y + jogador.altura));
  var distanceX = bola.x - closestX;
  var distanceY = bola.y - closestY;
  if ((distanceX * distanceX + distanceY * distanceY) <= (bola.raio * bola.raio)){
    bola.velocidadeX *= -1;
    raquetadaSom.play();
  }
}
