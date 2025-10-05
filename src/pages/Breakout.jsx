import React, { useState, useEffect } from "react";
import "./GamePage.css";

export default function Breakout() {
  const title = "Breakout";
  const iframeSrc = "/breakout/index.html";

  const [showBindings, setShowBindings] = useState(false);
  const [bindings, setBindings] = useState([
    { action: "Blink Both Eyes", key: "Space" },
    { action: "Blink Left Eye", key: "ArrowLeft" },
  ]);
  const [listeningIndex, setListeningIndex] = useState(null);

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
    setBindings(bindings.filter((_, i) => i !== index));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (listeningIndex !== null) {
        e.preventDefault();
        const newBindings = [...bindings];
        newBindings[listeningIndex].key = e.key;
        setBindings(newBindings);
        setListeningIndex(null);
      }
    };

    if (listeningIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [listeningIndex, bindings]);

  return (
    <div className="game-page" style={{ overflow: "hidden", height: "80vh", width: "95%" }}>
      <div className="game-header">
        <h1 className="game-title">{title}</h1>
        <button className="keybind-toggle" onClick={() => setShowBindings(!showBindings)}>
          {showBindings ? "Close Key Bindings" : "Edit Key Bindings"}
        </button>
      </div>

      <div className={`game-container ${showBindings ? "with-panel" : ""}`} style={{ overflow: "hidden", height: "calc(100vh - 100px)" }}>
        <div className="game-view" style={{ height: "100%" }}>
          <div className="game-placeholder" style={{ height: "100%" }}>
            <iframe
              src={iframeSrc}
              title={title}
              className="game-iframe"
              scrolling="no"
              style={{ width: "100%", height: "100%", border: "none", overflow: "hidden" }}
            />
          </div>
        </div>

        {showBindings && (
          <div className="keybind-panel">
            <h2>Key Bindings</h2>
            {bindings.map((binding, idx) => (
              <div key={idx} className="binding-row">
                <select
                  value={binding.action}
                  onChange={(e) => handleBindingChange(idx, "action", e.target.value)}
                >
                  {eegActions.map((action) => (
                    <option key={action} value={action}>
                      {action}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  value={listeningIndex === idx ? "Press any key..." : binding.key || ""}
                  onFocus={() => setListeningIndex(idx)}
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