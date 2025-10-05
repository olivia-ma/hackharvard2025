import React from "react";
import GameTemplate from "./GameTemplate";

export default function FlappyBird() {
  return (
    <div>
      <h2>FlappyBird</h2>
      <iframe src="/flappy/index.html" width="100%" height="600" style={{ border: "none" }} title="Flappy Game" />
    </div>
  );
}