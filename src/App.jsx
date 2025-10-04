import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";
import Game4 from "./pages/Game4";
import LoginPage from "./pages/LoginPage";
import SnakeGame from "./snakeGame";


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
            <Link to="/snake">Snake</Link>
            <Link to="/flappy">Flappy Bird</Link>
            <Link to="/dino">Dino</Link>
            <Link to="/breakout">Breakout</Link>
            <Link to="/pong">Pong</Link>
            {/* <a href="#">game 1</a>
            <a href="#">game 2</a>
            <a href="#">game 3</a>
            <a href="#">game 4</a> */}
          
          
          
          </div>
        </div>

        <a href="#">Use Cases</a>

        <a href="#">Purpose</a>

        

      </div>
      
      <div className="auth-link">
            <Link to="/login" className="login-button">Login</Link>
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
    { title: "Snake", path: "/snake" },
    { title: "Flappy Bird", path: "/flappy" },
    { title: "Dino", path: "/dino" },
    { title: "Breakout", path: "/breakout" },
    { title: "Pong", path: "/pong" },
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
              <div className="game-thumbnail-title">{game.title}</div>
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
        <Route path="/flappy" element={<Flappy />} />
        <Route path="/dino" element={<Dino />} />
        <Route path="/breakout" element={<Breakout />} />
        <Route path="/pong" element={<Pong />} />
        <Route path="/snake" element={<Snake />} />
      </Routes>
    </div>
  );
}

function Snake() {
  return ( 
    <div>
      <h2>Snake</h2>
      <SnakeGame />
    </div>
  );
}

function Flappy() {
  return ( 
    <div>
      <h2>Play Flappy Bird</h2>
      <iframe
        src="/JS-Flappy-Bird/index.html"
        width="100%"
        height="600"
        style={{ border: "none" }}
        title="Flappy Bird"
      ></iframe>
    </div>
  );
}

function Dino() {
  return ( 
    <div>
      <h2>Play Dino</h2>
      <iframe
        src="/t-rex-runner/index.html"
        width="1200"
        height="500"
        style={{ border: "none" }}
        title="Dino Runner"
      ></iframe>
    </div>
  );
}

function Breakout() {
  return ( 
    <div>
      <h2>Breakout</h2>
      <iframe
        src="/breakout/breakout/index.html"
        width="100%"
        height="1000"
        style={{ border: "none" }}
        title="Breakout Game"
      ></iframe>
    </div>
  );
}

function Pong() {
  return ( 
    <div>
      <h2>Pong</h2>
      <iframe
        src="/pong-js/index.html"
        width="80%"
        height="600"
        style={{ border: "none" }}
        title="Pong Game"
      ></iframe>
    </div>
  );
}