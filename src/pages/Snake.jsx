import React from "react";
import GameTemplate from "./GameTemplate";
import SnakeGame from "../snakeGame";

export default function Snake() {
  return (
    <GameTemplate title="Snake">
      <SnakeGame />
    </GameTemplate>
  );
}
