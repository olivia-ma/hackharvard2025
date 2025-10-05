// app.jsx

import React from "react";    
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
// import Game1 from "./pages/Game1";
// import Game2 from "./pages/Game2";
// import Game3 from "./pages/Game3";
// import Game4 from "./pages/Game4";
import Snake from "./pages/Snake";
import FlappyBird from "./pages/FlappyBird";
import Dino from "./pages/Dino";
import Breakout from "./pages/Breakout";
import Pong from "./pages/Pong"
import LoginPage from "./pages/LoginPage";
// import SnakeGame from "./snakeGame";

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
            {/* <Link to="/games/Game1">Game 1</Link>
            <Link to="/games/Game2">Game 2</Link>
            <Link to="/games/Game3">Game 3</Link>
            <Link to="/games/Game4">Game 4</Link> */}
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

        <a href="#accessibility">Accessibility</a>

        <a href="#technology">Technology</a>

        

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
        <h2>Where Mind Meets Machine</h2>
        <p>Revolutionary EEG-powered gaming that transforms brain signals into digital control. Experience the future of accessibility technology where a simple blink or eye movement becomes your controller.</p>
        <div className="hero-features">
          <div className="feature-item">🧠 EEG Brain Control</div>
          <div className="feature-item">♿ Accessibility First</div>
          <div className="feature-item">🎮 Play Without Hands</div>
        </div>
        <Link to="/snake" className="cta-button">Start Your Journey</Link>
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

function AccessibilitySection() {
  return (
    <section id="accessibility" className="accessibility-section">
      <div className="container">
        <h2>Empowering Every Player</h2>
        <div className="accessibility-grid">
          <div className="accessibility-card">
            <div className="icon">♿</div>
            <h3>Limited Mobility</h3>
            <p>Perfect for individuals with paralysis, stroke recovery, or amputation who need alternative control methods.</p>
          </div>
          <div className="accessibility-card">
            <div className="icon">🧠</div>
            <h3>Brain-Computer Interface</h3>
            <p>Direct neural control through EEG signals - no physical movement required beyond eye blinks and movements.</p>
          </div>
          <div className="accessibility-card">
            <div className="icon">🎯</div>
            <h3>Precise Control</h3>
            <p>Customizable key bindings for different EEG patterns, ensuring comfortable and accurate gameplay.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  return (
    <section id="technology" className="technology-section">
      <div className="container">
        <h2>Cutting-Edge Technology</h2>
        <div className="tech-content">
          <div className="tech-text">
            <h3>Muse EEG Headband Integration</h3>
            <p>BlinkLet uses advanced EEG signal processing to detect:</p>
            <ul>
              <li>Single eye blinks (left/right)</li>
              <li>Double eye blinks</li>
              <li>Eye movements (left/right/up/down)</li>
              <li>Concentration patterns</li>
            </ul>
            <p>These signals are translated into intuitive controls, creating accessible experiences for communication, productivity, and entertainment.</p>
          </div>
          <div className="tech-visual">
            <div className="eeg-demo">
              <div className="signal-wave"></div>
              <div className="signal-wave"></div>
              <div className="signal-wave"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LandingPage() {
  return (
    <>
      <Hero />
      <GamesSection />
      <AccessibilitySection />
      <TechnologySection />
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
            {/* <Route path="/games/Game1" element={<Game1/>} />
            <Route path="/games/Game2" element={<Game2/>} />
            <Route path="/games/Game3" element={<Game3/>} />
            <Route path="/games/Game4" element={<Game4/>} /> */}
            <Route path="/flappy" element={<FlappyBird />} />
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
// 
// function Flappy() {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Play FlappyBird</h2>
//       <iframe
//         src="https://r1w125.github.io/JS-Flappy-Bird/" // your GitHub Pages URL
//         width="100%"
//         height="600"
//         style={{ border: "none" }}
//         title="Flappy Bird Game"
//       />
//     </div>
//   );
// }

// function Dino() {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Play Dino</h2>
//       <iframe
//         src="https://r1w125.github.io/t-rex-runner/" // your GitHub Pages URL
//         width="100%"
//         height="600"
//         style={{ border: "none" }}
//         title="Dino Game"
//       />
//     </div>
//   );
// }

// function Breakout() {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Play Breakout</h2>
//       <iframe
//         src="https://r1w125.github.io/Breakout-HTML/" // your GitHub Pages URL
//         width="100%"
//         height="600"
//         style={{ border: "none" }}
//         title="Breakout Game"
//       />
//     </div>
//   );
// }



// function Pong() {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Play Pong</h2>
//       <iframe
//         src="https://R1W125.github.io/pong-js/" // your GitHub Pages URL
//         width="100%"
//         height="600"
//         style={{ border: "none" }}
//         title="Pong Game"
//       />
//     </div>
//   );
// }