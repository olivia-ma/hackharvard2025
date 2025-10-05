import React, { useState, useEffect } from "react";
import "./GamePage.css";

export default function GameTemplate({ title, iframeSrc, iframeHeight = 600, children }) {
  const [showBindings, setShowBindings] = useState(false);
  const [bindings, setBindings] = useState([
    { action: "Left Look", key: "left" },
    { action: "Right Look", key: "right" },
  ]);
  const [listeningIndex, setListeningIndex] = useState(null);

  const eegActions = [
    "Single Blink",
    "Double Blink",
    "Left Look",
    "Right Look",
  ];

  const handleBindingChange = (index, field, value) => {
    return
    const newBindings = [...bindings];
    newBindings[index][field] = value;
    setBindings(newBindings);
  };

  const sendBindingToBackend = async (eeg_action, key_binding) => {
      try {
      const resp = await fetch("http://127.0.0.1:4545/update-keybindings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // add Authorization header here if your backend requires it:
          // "Authorization": "Bearer <token>"
        },
        body: JSON.stringify({
          event_name:  eeg_action,
          key: key_binding
        })
      });

      if (!resp.ok) {
        // try to parse error detail returned by FastAPI
        const errBody = await resp.json().catch(() => null);
        const errMsg = errBody?.detail || `${resp.status} ${resp.statusText}`;
        throw new Error(errMsg);
      }}
      catch (err) {
        // 🔍 Print detailed info
        console.error("❌ Failed to update key bindings:", err);
        alert(`Update failed: ${err.message}`);
      }
  }

  const moveAllToBackend = async () => {
    for (const a of eegActions) {
      // Find the binding for this action
      const binding = bindings.find(b => b.action === a);

      // If not found, send an empty key
      if (!binding || !binding.key) {
        await sendBindingToBackend(a, '');
        continue;
      }

      // Otherwise send the existing binding
      await sendBindingToBackend(binding.action, binding.key);
    }
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
            {children ? (
              children
            ) : (
                <iframe
                    src={iframeSrc}
                    title={title}
                    className="game-iframe"
                    scrolling="no"
                    style={{ width: "100%", height: "100%", border: "none", overflow: "hidden" }}
                />
            )}
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
            <button className="add-binding" onClick={moveAllToBackend}>
              send key bindings to backend
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
