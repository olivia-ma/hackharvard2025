import React from "react";

export default function FlappyBird() {
  return (
    <div>
      <h2>Flappy Bird</h2>
      <iframe src="/flappy/index.html" width="100%" height="600" style={{ border: "none" }} title="Flappy Bird Game" />
    </div>
  );
}