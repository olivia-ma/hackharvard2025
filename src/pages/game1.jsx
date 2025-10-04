import React, { useState } from "react";
import "./GamePage.css";

export default function Game1() {
  const [showBindings, setShowBindings] = useState(false);
  const [bindings, setBindings] = useState([
    { action: "Blink Both Eyes", key: "Space" },
    { action: "Blink Left Eye", key: "ArrowLeft" },
  ]);

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
            {/* NEED TO  */}
            game container
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
                  placeholder="Keyboard key..."
                  value={binding.key}
                  onChange={(e) =>
                    handleBindingChange(idx, "key", e.target.value)
                  }
                />
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
