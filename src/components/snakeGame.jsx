import { useEffect, useRef, useState } from "react";

function SnakeGame() {
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false); // track if game is running
  const intervalRef = useRef(null); // store interval ID

  useEffect(() => {
    if (!gameStarted) return; // only run the game loop if started

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const gridSize = 20;
    const tileCount = 20;
    let snake = [{ x: 10, y: 10 }];
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

      // If hits walls
      if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        endGame();
      }

      // If hits itself
      for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
          endGame();
        }
      }
    }

    function drawGame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw snake
      ctx.fillStyle = "green";
      for (const segment of snake) ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);

      // Draw apple
      ctx.fillStyle = "red";
      ctx.fillRect(apple.x * gridSize, apple.y * gridSize, gridSize, gridSize);

      // Draw score
      ctx.fillStyle = "white";
      ctx.fillText("Score: " + score, 10, 10);
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

    // When the game ends
    function endGame() {
      clearInterval(intervalRef.current); // stop the game loop
      intervalRef.current = null;
      setGameStarted(false); // show Start Game button again
      resetGame(); // reset snake and score
    }

    document.addEventListener("keydown", handleKeyDown);
    intervalRef.current = setInterval(gameLoop, 100);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameStarted]);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        backgroundColor: "#000",
      }}
    >
      {!gameStarted && (
        <button
          onClick={startGame}
          style={{ marginBottom: "20px", padding: "10px 20px", fontSize: "16px" }}
        >
          Start Game
        </button>
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
