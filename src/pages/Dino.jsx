import React from "react";
import GameTemplate from "./GameTemplate";

export default function Dino() {
  return (
    <div>
      <h2>Dino</h2>
      <iframe src="/dino/index.html" width="100%" height="600" style={{ border: "none" }} title="Dino Game" />
    </div>
  );
}