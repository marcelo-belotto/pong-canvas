class Ball {
  constructor(x, y, raio, cor, velocidadeX, velocidadeY) {
    this.x = x;
    this.y = y;
    this.raio = raio;
    this.cor = cor;
    this.velocidadeX = velocidadeX;
    this.velocidadeY = velocidadeY;
  }

  movimentaBolinha() {
    this.x += this.velocidadeX;
    this.y += this.velocidadeY;
  }
}