//----------------------------------------------------------------------------------------------------------------------------------------------

// INÍCIO DO SCRIPT

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");//fornece os métodos e propriedades necessários para desenhar e manipular gráficos 2D

//----------------------------------------------------------------------------------------------------------------------------------------------

//Variáveis do jogo

const tileSize = 20; //tamanho do tile
let snake = [{ x: 10, y: 10 }]; //inicializa a cobrinha com uma posição(é um array de objetos, onde cada objeto é um "quadradinho da cobrinha")

let dx = 0; //direção horizontal da cobrinha
let dy = 0; //direção vertical da cobrinha
let food = { x: 15, y: 15 }; //posição de comida
let gameOver = false; //indica o fim de jogo
let paused = false; //indica se o jogo está pausado ou não

//----------------------------------------------------------------------------------------------------------------------------------------------

function drawSnake() {
    //define a cor de preenchimento para cobrinha(verde)
    ctx.fillstyle = "#00ff08"
    //iter sobre cada segmento da cobrinha
    snake.forEach(segment => {
        ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
    //desenha um retangulo( um segmento da cobrinha) no canvas
    // o retangulo é preenchido com a cor definida acima
    //as coordenadas do retangulo são baseadas nas coordenadas do segmentos da cobrinha
    //cada coordenada é multiplicada pelo tamanho do tile para posicionamento correto
    //tileSize representa o tamanho de cada "bloco" na grade do jogo
    });
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

//função para desenhar a comida
function drawFood() {
    //define a cor de preenchimento para a comida(vermelho)
    ctx.fillstyle = "#f00";
        ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);
    //desenha um retangulo(representando a comida)no canvas
    //o retangulo é preenchido com a cor definida acima
    //as coordenadas do retangulo são baseadas nas coordenadas da comida
    //cada coordenada é multiplicada pelo tamanho do tile para posicionamento correto
    //tileSize representa o tamanho de cada "bloco" na grade do jogo
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

//função para mover a cobrinha
function moveSnake() {
    if(!paused) {//verifica se não está pausado
       const head = { x: snake[0].x + dx, y: snake[0].y + dy};//calcula a nova posição da cabeça da cobrinha
       snake.unchift(head);//adiciona a nova posição da cabeça no início do array
       if(head.x === food.x && head.y === food.y) {
        //verifica se a cabeça da cobrinha comeu a comida
        generateFood();//gera uma nova comida
       } else {
        snake.pop();//remove a ultima parte da cauda da cobrinha
       }
       if(checkCollission()) {//verifica colisão da cobrinha consigo mesma ou com as bordas do canvas
        gameOver = true;//define fim de jogo
        setTimeout(() => {//após 5 segundos, recarrega a página
            location.reload();
        },5000);
      }
    }
  }

  //---------------------------------------------------------------------------------------------------------------------------------------------

  //função para gerar comida em uma posição aleatória
  function generateFood() {
    food.x = Math.floor(Math.random() * canvas.width / tileSize);
    food.y = Math.floor(Math.random() * canvas.height / tileSize);
}

//função para limpar os canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width);//x,y,largura,altura
}

//-----------------------------------------------------------------------------------------------------------------------------------------------

//função para atualizar o jogo
function update() {
    clearCanvas();
    drawFood();
    drawSnake();
    moveSnake();
    if(!gameOver) {
        setTimeout(update, 100);//chama a função update novamente após 100ms
    } else {
        ctx.fillStyle = "#ffff";
        ctx.font = "30px Arial";
        ctx.fillText("Game over", canvas.width / 2 - 80, canvas.height / 2);
    }
  }

//------------------------------------------------------------------------------------------------------------------------------------------------

//função para verificar colisão
function checkCollission() {
    const head = snake[0];
    for( let i = 1; i < snake.length; i++) {
        if(snake[i].x === head.x && snake[i].y === head.y) {
            return true;//retorna true se houver colisão com o próprio corpo da cobrinha
        }
      }
      return head.x < 0 || head.x >= canvas.width / tileSize || head.y >= canvas.height / tileSize;
      //retorna true se a cabeça da cobrinha atingir as bordas do canvas
  }

  //função principal do jogo
  function main() {
    update();//inicia o jogo
  }

 //----------------------------------------------------------------------------------------------------------------------------------------------

 //evento de teclado para controlar a direção da cobrinha
 document.addEventListener("keydown", e => {
    if(!gameOver && !paused) {//verifica se o jogo não acaba e não esta pausado
        switch (e.key) {
            case "ArrowUp":
                if(dy === 0) {
                    dx = 0;
                    dy = -1;
                }
                break;
            case "ArrowDown":
                    if(dy === 0) {
                        dx = 0;
                        dy = 1;
                    }
                    break;
            case "ArrowLeft":
                        if(dx === 0) {
                            dx = -1;
                            dy = 0;
                        }
                        break;
            case "ArrowRight":
                if(dx === 0) {
                    dx = 1;
                    dy = 0;
                }   
                break; 
            }
        }
     });
     
//-----------------------------------------------------------------------------------------------------------------------------------------------

//adiciona evento de clique ao botão para pausar/despausar o jogo
const pauseButton = document.getElementById("pauseButton");
pauseButton.addEventListener("click", () => {
    paused = !paused; //inverte o estado de pausa do jogo
    pauseButton.textContent = paused ? "resume" : "Pause"; //altera o texto do botão
    //define o texto do botão de uma pausa com base no estado "paused"
    //a expressão ternária abaixo atribui um texto com base na condição "paused"
    //se "paused" for verdadeiro, o texto do botão será "resume", indicando que o jogo está em execução e pode ser pausado
});

main()//inicia o jogo

//-----------------------------------------------------------------------------------------------------------------------------------------------

  