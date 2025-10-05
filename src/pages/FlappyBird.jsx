import React from "react";
import GameTemplate from "./GameTemplate";

export default function FlappyBird() {
  return (
    <GameTemplate 
      title="Flappy Bird" 
      iframeSrc="/flappy/index.html"
      iframeHeight={800}
    />
  );
}