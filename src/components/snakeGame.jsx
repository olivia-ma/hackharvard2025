import { useEffect, useRef, useState } from "react";

function SnakeGame() {
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const intervalRef = useRef(null);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem("highScore")) || 0;
  });

  useEffect(() => {
    if (!gameStarted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const gridSize = 20;
    const tileCount = 20;
    let snake = [{ x: 0, y: 10 }];
    let apple = { x: 15, y: 15 };
    let score = 0;

    let dx = 1;
    let dy = 0;

    function gameLoop() {
      moveSnake();
      checkCollisions();
      drawGame();
    }

    function moveSnake() {
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };
      snake.unshift(head);

      if (head.x === apple.x && head.y === apple.y) {
        score++;
        placeApple();
      } else {
        snake.pop();
      }
    }

    function checkCollisions() {
      const head = snake[0];
      if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) endGame();
      for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) endGame();
      }
    }

    function drawGame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "green";
      for (const s of snake)
        ctx.fillRect(s.x * gridSize, s.y * gridSize, gridSize, gridSize);

      ctx.fillStyle = "red";
      ctx.fillRect(apple.x * gridSize, apple.y * gridSize, gridSize, gridSize);

      ctx.fillStyle = "white";
      ctx.font = "16px Arial";
      ctx.fillText(`Score: ${score}`, 10, 20);
      ctx.fillText(`High Score: ${highScore}`, 10, 40);
    }

    function placeApple() {
      apple = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount),
      };
    }

    function resetGame() {
      snake = [{ x: 10, y: 10 }];
      dx = 1;
      dy = 0;
      score = 0;
      placeApple();
    }

    function handleKeyDown(e) {
      if (e.key === "ArrowLeft") [dx, dy] = [-dy, dx];
      if (e.key === "ArrowRight") [dx, dy] = [dy, -dx];
    }

    function endGame() {
      clearInterval(intervalRef.current);
      if (score > highScore) {
        setHighScore(score);
        localStorage.setItem("highScore", score);
      }
      setGameStarted(false);
      resetGame();
    }

    document.addEventListener("keydown", handleKeyDown);
    intervalRef.current = setInterval(gameLoop, 100);

    return () => {
      clearInterval(intervalRef.current);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameStarted, highScore]);

  const startGame = () => setGameStarted(true);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#000",
        borderRadius: "8px",
        maxWidth: "fit-content",
        margin: "0 auto",
      }}
    >
      {!gameStarted && (
        <>
          <button
            onClick={startGame}
            style={{
              marginBottom: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Start Game
          </button>
          <p style={{ color: "white", fontSize: "18px" }}>
            High Score: {highScore}
          </p>
        </>
      )}
      <canvas
        ref={canvasRef}
        width="400"
        height="400"
        style={{ border: "1px solid white" }}
        tabIndex="0"
        onClick={(e) => e.currentTarget.focus()}
      />
    </div>
  );
}

export default SnakeGame;
