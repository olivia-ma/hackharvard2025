import React, { useState, useEffect } from "react";
import "./GamePage.css";

export default function Game1() {
  const [showBindings, setShowBindings] = useState(false);
  const [bindings, setBindings] = useState([
    { action: "Blink Both Eyes", key: "Space" },
    { action: "Blink Left Eye", key: "ArrowLeft" },
  ]);

   const [listeningIndex, setListeningIndex] = useState(null); // track which input is listening

  const eegActions = [
    "Blink Both Eyes",
    "Blink Left Eye",
    "Blink Right Eye",
    "Look Left",
    "Look Right",
  ];

  const handleBindingChange = (index, field, value) => {
    const newBindings = [...bindings];
    newBindings[index][field] = value;
    setBindings(newBindings);
  };

  const addBinding = () => {
    setBindings([...bindings, { action: eegActions[0], key: "" }]);
  };

  const removeBinding = (index) => {
    const newBindings = bindings.filter((_, i) => i !== index);
    setBindings(newBindings);
  };

  // used to wait for key press

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (listeningIndex !== null) {
        e.preventDefault();
        const newBindings = [...bindings];
        newBindings[listeningIndex].key = e.key;
        setBindings(newBindings);
        setListeningIndex(null); // stop listening after first key
      }
    };

    if (listeningIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [listeningIndex, bindings]);

  
  return (
    <div className="game-page">
      {/* Top bar */}
      <div className="game-header">
        <h1 className="game-title">INSERT GAME NAME HERE</h1>
        <button
          className="keybind-toggle"
          onClick={() => setShowBindings(!showBindings)}
        >
          {showBindings ? "Close Key Bindings" : "Edit Key Bindings"}
        </button>
      </div>

      <div className={`game-container ${showBindings ? "with-panel" : ""}`}>
        {/* Main game area */}
        <div className="game-view">
          <div className="game-placeholder">
            <h2></h2>
            <iframe
              src="/breakout/breakout/index.html"
              width="300%"
              height="800"
              style={{ border: "none" }}
              title="Breakout Game"
            ></iframe>
          </div>
        </div>

        {/* Key bindings panel */}
        {showBindings && (
          <div className="keybind-panel">
            <h2>Key Bindings</h2>

            {bindings.map((binding, idx) => (
              <div key={idx} className="binding-row">
                <select
                  value={binding.action}
                  onChange={(e) =>
                    handleBindingChange(idx, "action", e.target.value)
                  }
                >
                  {eegActions.map((action) => (
                    <option key={action} value={action}>
                      {action}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  value={
                    listeningIndex === idx
                      ? "Press any key..."
                      : binding.key || ""
                  }
                  onFocus={() => setListeningIndex(idx)} // 👈 start listening
                  readOnly
                />

                <button
                  className="delete-binding"
                  onClick={() => removeBinding(idx)}
                  aria-label="Delete binding"
                >
                  ✕
                </button>
                
              </div>
            ))}

            <button className="add-binding" onClick={addBinding}>
              + Add Binding
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
