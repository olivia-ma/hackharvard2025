import React from "react";

export default function Pong() {
  return (
    <div>
      <h2 style={{ 
        background: "transparent", 
        margin: 0, 
        padding: 0, 
        color: "white",      // or whatever text color you want
        textAlign: "left" 
      }}>Pong</h2>
      <iframe src="/pong/index.html" 
      style={{
        position: "fixed",
        top: "60px",       // match your navbar height
        left: 0,
        width: "100vw",
        height: "calc(100vh - 60px)", // full height minus navbar
        border: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden"
      }}

      title="Pong Game" />
    </div>
  );
}