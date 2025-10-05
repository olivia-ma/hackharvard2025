// app.jsx

import React from "react";    
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Game1 from "./pages/Game1";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";
import Game4 from "./pages/Game4";
import Snake from "./pages/Snake";
import LoginPage from "./pages/LoginPage";
import SnakeGame from "../public/snakeGame";

import GradientCursor from "./components/GradientCursor";

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
      <div className="hero-overlay">
        <h1>BlinkLet</h1>
        <p>Harness EEG signals for blinks and eye movements to control technology hands-free. Empowering new forms of interaction, accessibility, and play.</p>
        <Link to="/snake" className="cta-button">Play Now</Link>
      </div>
    </section>

  );
}

function GamesSection() {
  const games = [
    // { title: "game 1", path: "/games/Game1", image: "/images/Pong.png" },
    // { title: "game 2", path: "/games/Game2" },
    // { title: "game 3", path: "/games/Game3" },
    // { title: "game 4", path: "/games/Game4" },
    { title: "Snake", path: "/snake", image: "/images/SnakeGame.webp" },
    { title: "Flappy Bird", path: "/flappy", image: "/images/FlappyBird.jpg" },
    { title: "Dino", path: "/dino", image: "/images/Dino.jpg"  },
    { title: "Breakout", path: "/breakout", image: "/images/Breakout.jpg" },
    { title: "Pong", path: "/pong", image: "/images/Pong.png" },
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
              <img 
                src={game.image} 
                alt={game.title} 
                className="game-thumbnail" 
              />
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
      <GradientCursor />
      <div className="app-content">
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
            
            <Route path="/login" element={<LoginPage />} />
          </Routes>
      </div>
    </div>
      
  );
}

// function Snake() {
//   return ( 
//     <div>
//       <h2>Snake</h2>
//       <SnakeGame />
//     </div>
//   );
// }

function Flappy() {
  return (
    <div>
      <h2>FlappyBird</h2>
      <iframe
        src="/flappy/index.html"
        width="100%"
        height="600"
        style={{ border: "none" }}
        title="Flappy Game"
      />
    </div>
  );
}

function Dino() {
  return (
    <div>
      <h2>Dino</h2>
      <iframe
        src="/dino/index.html"
        width="100%"
        height="600"
        style={{ border: "none" }}
        title="Dino Game"
      />
    </div>
  );
}

function Breakout() {
  return (
    <div>
      <h2>Breakout</h2>
      <iframe
        src="/breakout/index.html"
        width="100%"
        height="600"
        style={{ border: "none" }}
        title="Breakout Game"
      />
    </div>
  );
}



function Pong() {
  return (
    <div>
      <h2>Pong</h2>
      <iframe
        src="/pong/index.html"
        width="100%"
        height="600"
        style={{ border: "none" }}
        title="Pong Game"
      />
    </div>
  );
}