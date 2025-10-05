import React from "react";
import GameTemplate from "./GameTemplate";

export default function Breakout() {
  return (
    <div>
      <h2>Breakout</h2>
      <iframe src="/breakout/index.html" 
      style={{
        position: "fixed",
        top: "80px",       // match your navbar height
        left: 0,
        width: "100vw",
        height: "calc(100vh - 30px)", // full height minus navbar
        border: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        transform: "scale(0.85)",
      }}
      title="Breakout Game" />
    </div>

  );
}