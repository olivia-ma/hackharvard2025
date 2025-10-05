import React from "react";

export default function FlappyBird() {
  return (
    <div>
      <h2>Flappy Bird</h2>
      <iframe src="/flappy/index.html" 
      style={{
        position: "fixed",
        top: "130px",       // match your navbar height
        left: 0,
        width: "100vw",
        height: "calc(100vh - 130px)", // full height minus navbar
        border: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden"
      }}
      title="Flappy Bird Game" />
    </div>
  );
}