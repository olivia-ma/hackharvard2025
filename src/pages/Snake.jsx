import React from "react";
import GameTemplate from "./GameTemplate";
import SnakeGame from "/public/snakeGame";

export default function Snake() {
  return (
    <GameTemplate title="Snake">
      <SnakeGame />
    </GameTemplate>
  );
}
