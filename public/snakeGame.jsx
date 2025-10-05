import { useEffect, useRef } from "react";

function SnakeGame() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const gridSize = 20;
    const tileCount = 20;
    let snake = [{ x: 10, y: 10 }];
    let apple = { x: 15, y: 15 };
    let score = 0;

    let dx = 1; // start moving right
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
      if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) resetGame();
      for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) resetGame();
      }
    }

    function drawGame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "green";
      for (const segment of snake) ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
      ctx.fillStyle = "red";
      ctx.fillRect(apple.x * gridSize, apple.y * gridSize, gridSize, gridSize);
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
      if (e.key === "ArrowLeft") [dx, dy] = [-dy, dx];   // rotate left
      if (e.key === "ArrowRight") [dx, dy] = [dy, -dx]; // rotate right
    }

    document.addEventListener("keydown", handleKeyDown);
    const interval = setInterval(gameLoop, 100);

    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh", // centers vertically in the viewport
        backgroundColor: "#000" // optional: to match your border
      }}
    >
      {/* <h2 style={{ color: "white" }}>Snake Game</h2> */}
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