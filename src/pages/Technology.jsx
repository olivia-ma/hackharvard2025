import React from "react";

export default function Technology() {
  return (
    <div className="technology-page">
      <div className="container">
        <h1>Cutting-Edge Technology</h1>
        <div className="tech-content">
          <div className="tech-text">
            <h3>Muse EEG Headband Integration</h3>
            <p>BlinkLet uses advanced EEG signal processing to detect:</p>
            <ul>
              <li>Double blinks (left/right)</li>
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
    </div>
  );
}
