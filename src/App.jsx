import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";
import Game4 from "./pages/Game4";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">BlinkLet</Link>
      </div>

      
      
      <div className="tabs">

        {/* <a href="#">Games</a> */}
        {/* Games dropdown */}
        <div className="dropdown">
          <span className="dropdown-button">Games ▾</span>
          <div className="dropdown-content">
            <Link to="/games/Game1">Game 1</Link>
            <Link to="/games/Game2">Game 2</Link>
            <Link to="/games/Game3">Game 3</Link>
            <Link to="/games/Game4">Game 4</Link>
            {/* <a href="#">game 1</a>
            <a href="#">game 2</a>
            <a href="#">game 3</a>
            <a href="#">game 4</a> */}
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
    { title: "game 1", path: "/games/Game1" },
    { title: "game 2", path: "/games/Game2" },
    { title: "game 3", path: "/games/Game3" },
    { title: "game 4", path: "/games/Game4" },
  ];

  return (
    <section className="games">
      <div className="game-grid">
        {games.map((game, idx) => (
          <Link 
            key={idx} 
            to={game.path} 
            className="game-card-link"
          >
            <div className="game-card">
              <div className="game-thumbnail">Thumbnail</div>
              <div className="game-title">{game.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function LandingPage() {
  return (
    <>
      <Hero />
      <GamesSection />
    </>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/games/Game1" element={<Game1/>} />
        <Route path="/games/Game2" element={<Game2/>} />
        <Route path="/games/Game3" element={<Game3/>} />
        <Route path="/games/Game4" element={<Game4/>} />
      </Routes>
    </div>
  );
}