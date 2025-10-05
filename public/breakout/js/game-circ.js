  //Tomando el lienzo
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  
  //Definición de altura y ancho de lienzo
  canvas.width  = 800;
  canvas.height = 600;
  
  //Definiendo el radio de la pelota
  var ballRadius = 10;
  
  //Posición inicial de la pelota
  var x = canvas.width/2;
  var y = canvas.height-30;
  
  //Variables para actualizar posición
  var dx = 2;
  var dy = -2;
  
  //Posición del Paddle
  var paddleHeight = 10;
  var paddleWidth = 75;
  
  //Actualizador de posición del paddle en el eje X
  var paddleX = (canvas.width-paddleWidth)/2;
  
  //variables de controles
  var rightPressed = false;
  var leftPressed = false;
  
  //variables de los bloques
  var brickRowCount = 4;
  var brickColumnCount = 9;
  var brickWidth = 75;
  var brickHeight = 20;
  var brickPadding = 10;
  var brickOffsetTop = 30;
  var brickOffsetLeft = 30;

  //variable de puntuación
  var score = 0;
  var highScore = localStorage.getItem("highScore") || 0;

  //Bucle para crear bloques
  var bricks = [];
  for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1};
    }
  }

  //EventListener para controles
  document.addEventListener("mousemove", mouseMoveHandler, false);
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);

  //Controles para mover si se pulsa la tecla
  function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
  }

  //Y para detener el movimiento si no presionan
  function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
  }

  //Controles con el ratón
  function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
  }

  //Detectar la colisión con los bloques
  function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    //Si golpea el balón, aumente el Score
                    dy = -dy;
                    b.status = 0;
                    score++;
                    //Si golpeas todas, un mensaje de victoria
                    if(score == brickRowCount*brickColumnCount) {
                      if (score > highScore) {
                        highScore = score;
                        localStorage.setItem("highScore", highScore);
                      }
                      drawScore.fillStyle = "#FFFFFF";
                      ctx.textAlign = "center";
                      ctx.font = "30px Arial";
                      ctx.fillStyle = "#000000";
                      ctx.fillText("Ganaste!"+"<br>"+"Your Score: "+score, canvas.width/2, canvas.height/2);
                      setTimeout(function () { 
                      location.reload();
                      }, 2000);
                      clearInterval(interval); 
                    }
                  }
              }
          }
      }
  }
  
  //Función para mostrar la puntuación en Canvas
  function drawScore() {
  ctx.font = "20px Arial";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "left";
  ctx.fillText("Score: " + score + " | High Score " + highScore, 10, 20);
  }

  //Función para dibujar la bola en Canvas
  function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
  }

  //Función para dibujar la paddle en el canvas
  function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
  }

  //Función para dibujar los bloques en Canvas
  function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
      for(var r=0; r<brickRowCount; r++) {
        if(bricks[c][r].status == 1) {
          var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
          var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = "#000000";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }

  //El juego en sí
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawScore();
    drawBricks();
    collisionDetection();
    
    //Movimiento de la pelota
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy < ballRadius) {
        dy = -dy;
    }

    //Quitar en los bordes de Canvas
    else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        else {
          if (score > highScore) {
            highScore = score;
            localStorage.setItem("highScore", highScore);
          }
          ctx.textAlign = "left"; 
          ctx.font = "30px Arial";
          ctx.fillStyle = "#000000";
          ctx.fillText("Game Over", canvas.width/2.35, canvas.height/2);
          setTimeout(function () { 
            location.reload();
          }, 2000);
          clearInterval(interval); 
        }
    }
    
    //Hacer que el Paddle no pase de los límites de Canvas
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
  }

  var interval = setInterval(draw, 10);