import React from "react";

export default function Accessibility() {
  return (
    <div className="accessibility-page">
      <div className="container">
        <h1>Empowering Every Player</h1>
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
    </div>
  );
}
