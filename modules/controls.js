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