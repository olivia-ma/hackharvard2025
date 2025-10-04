import React from "react";
import "./index.css";
import game1 from "./pages/game1";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">BlinkLet</div>
      
      
      <div className="tabs">

        {/* <a href="#">Games</a> */}
        {/* Games dropdown */}
        <div className="dropdown">
          <span className="dropdown-button">Games ▾</span>
          <div className="dropdown-content">
            <a href="#">game 1</a>
            <a href="#">game 2</a>
            <a href="#">game 3</a>
            <a href="#">game 4</a>
          </div>
        </div>

        <a href="#">Use Cases</a>

        <a href="#">Purpose</a>

      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="placeholder">Hero Section Placeholder</div>
    </section>
  );
}

function GamesSection() {
  const games = [
    { title: "game 1", path: "/games/game1" },
    { title: "game 2", path: "/games/game1" },
    { title: "game 3", path: "/games/game1" },
    { title: "game 4", path: "/games/game1" },
  ];

  return (
    <section className="games">
      {/* <h2>Try Our Games</h2> */}
      <div className="game-grid">
        {games.map((game, idx) => (
          <div key={idx} className="game-card">
            <div className="game-thumbnail">Thumbnail</div>
            <div className="game-title">{game.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <GamesSection />
    </div>
  );
}
