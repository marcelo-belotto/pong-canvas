function screenFactory(width,height){
    var screen = {}
    var tela = document.querySelector("canvas");
    var context = tela.getContext("2d");
    tela.width = width;
    tela.height = height;
    
    function desenhaBolinha(ball){
      context.beginPath();
      context.fillStyle = ball.cor;
      context.arc(ball.x, ball.y, ball.raio, 0, 2 * Math.PI);
      context.fill();
    }
    
    function desenhaPlayer(player) {
      context.fillStyle = player.cor;
      context.fillRect(player.x, player.y, player.largura, player.altura);
    }
    
    function limpaTela() {
      context.clearRect(0, 0, 600, 400);
    }
    
    function telaInicial(){
      tela.style.background = "black";
      context.fillStyle = "white";
      context.font = "30px Arial";
      context.fillText("Aperte Enter para Jogar!", 150, 200);
    }

    screen.width = tela.width;
    screen.height = tela.height;
    screen.desenhaBolinha = desenhaBolinha;
    screen.desenhaPlayer = desenhaPlayer;
    screen.limpaTela = limpaTela;
    screen.telaInicial = telaInicial;

    return screen;
}