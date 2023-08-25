function marcarPonto() {
  if (bola.x + bola.raio >= tela.width) {
    var aux = Number(placarJogador.innerHTML);
    aux++;
    placarJogador.innerHTML = aux;
  } else if (bola.x + bola.raio <= 12) {
    var aux2 = Number(placarOponente.innerHTML);
    aux2++;
    placarOponente.innerHTML = aux2;
  }
}