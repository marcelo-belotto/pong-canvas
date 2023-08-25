class Player {
  constructor(x, y, altura, largura, cor,velocidadeY) {
    this.x = x;
    this.y = y;
    this.altura = altura;
    this.largura = largura;
    this.cor = cor;
    this.velocidadeY = velocidadeY;
  }

  movimentaJogadorCima(){
    this.y += this.velocidadeY;
  }
  movimentaJogadorBaixo(){
    this.y -= this.velocidadeY;
  }
}