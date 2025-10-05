import React from "react";
import GameTemplate from "./GameTemplate";

export default function Dino() {
  return (
    <div>
      <h2>Dino</h2>
      <iframe src="/dino/index.html" 
      style={{
        position: "fixed",
        top: "150px",       // match your navbar height
        left: 0,
        width: "100vw",
        height: "calc(100vh - 150px)", // full height minus navbar
        border: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden"
      }}
      title="Dino Game" />
    </div>
  );
}