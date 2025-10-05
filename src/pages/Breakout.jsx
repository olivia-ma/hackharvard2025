import React from "react";
import GameTemplate from "./GameTemplate";

export default function Breakout() {
  return (
    <div>
      <h2>Breakout</h2>
      <iframe src="/breakout/index.html" width="100%" height="600" style={{ border: "none" }} title="Breakout Game" />
    </div>

  );
}