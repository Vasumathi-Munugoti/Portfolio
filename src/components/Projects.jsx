import React, { useState } from 'react';
import { Code, Server, Cpu, ShieldCheck, Eye, EyeOff, Play, RefreshCw } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  // Project 1 (Image Hiding) state
  const [secretMessage, setSecretMessage] = useState('Recruit Vasumathi!');
  const [isEncoded, setIsEncoded] = useState(false);
  const [extractedMessage, setExtractedMessage] = useState('');
  const [showCoverImage, setShowCoverImage] = useState(true);

  // Project 2 (Water Pump) state
  const [waterLevel, setWaterLevel] = useState(30); // percentage 0 - 100
  const [pumpStatus, setPumpStatus] = useState('ON'); // ON or OFF

  const handleEncode = () => {
    if (!secretMessage) return;
    setIsEncoded(true);
    setExtractedMessage('');
  };

  const handleDecode = () => {
    if (!isEncoded) return;
    setExtractedMessage(secretMessage);
  };

  const handleResetP1 = () => {
    setIsEncoded(false);
    setExtractedMessage('');
  };

  const adjustWaterLevel = (newLevel) => {
    setWaterLevel(newLevel);
    // Water Pump Logic:
    // If water level falls below 20%, turn pump ON (tank is empty).
    // If water level reaches 90% or more, turn pump OFF (tank is full to avoid overflow).
    if (newLevel <= 20) {
      setPumpStatus('ON');
    } else if (newLevel >= 90) {
      setPumpStatus('OFF');
    }
  };

  return (
    <section id="projects" className="projects-container section">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        Selected projects showcasing hardware-software integration and cryptographic security.
      </p>

      <div className="projects-grid">
        {/* Project 1: Secure & Reversible Image Data Hiding */}
        <div className="project-card glass-card">
          <div className="project-header-info">
            <div className="project-icon-box">
              <ShieldCheck size={24} />
            </div>
            <span className="project-tag-cat">Cryptography & Security</span>
          </div>

          <h3 className="project-title">Secure & Reversible Image Data Hiding</h3>
          <p className="project-desc">
            A security application using Java and Image Processing to hide secret payloads inside cover images. Implements reversible data hiding, allowing complete restoration of the original cover image after extraction, preventing permanent digital alterations.
          </p>

          <div className="project-skills-used">
            <span>Java</span>
            <span>Image Steganography</span>
            <span>Cryptography</span>
            <span>LSB Algorithm</span>
          </div>

          {/* Interactive Simulation 1 */}
          <div className="project-simulator glass-card">
            <h4>Live Steganography Simulator</h4>
            
            <div className="sim-p1-controls">
              <div className="input-group-sim">
                <label>Secret Message to Hide:</label>
                <input 
                  type="text" 
                  value={secretMessage} 
                  onChange={(e) => setSecretMessage(e.target.value)} 
                  placeholder="Enter secret message"
                  disabled={isEncoded}
                />
              </div>

              <div className="sim-p1-buttons">
                {!isEncoded ? (
                  <button onClick={handleEncode} className="sim-btn sim-btn-primary">
                    <Play size={14} /> Hide Message
                  </button>
                ) : (
                  <>
                    <button onClick={handleDecode} className="sim-btn sim-btn-secondary" disabled={!!extractedMessage}>
                      <Eye size={14} /> Extract Message
                    </button>
                    <button onClick={handleResetP1} className="sim-btn sim-btn-reset">
                      <RefreshCw size={14} /> Reset
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="sim-p1-visualizer">
              <div className="image-box">
                <span className="image-label">{showCoverImage ? 'Cover Image (Visual)' : 'Stego Image (Encoded)'}</span>
                <div className={`dummy-image ${isEncoded && !showCoverImage ? 'encoded' : ''}`}>
                  <div className="image-noise"></div>
                  <span className="image-status-tag">
                    {isEncoded ? '🔒 Message Encoded' : '🔓 Normal Image'}
                  </span>
                </div>
                {isEncoded && (
                  <button className="toggle-view-btn" onClick={() => setShowCoverImage(!showCoverImage)}>
                    {showCoverImage ? 'View Pixels (Stego)' : 'View Cover'}
                  </button>
                )}
              </div>

              <div className="result-display-box">
                <span className="res-title">Decryption Output:</span>
                <div className="res-console">
                  {extractedMessage ? (
                    <span className="extracted-text-output">&gt; {extractedMessage}</span>
                  ) : (
                    <span className="console-waiting">&gt; Waiting for extraction...</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Automatic Water Pump Switching */}
        <div className="project-card glass-card">
          <div className="project-header-info">
            <div className="project-icon-box">
              <Cpu size={24} />
            </div>
            <span className="project-tag-cat">IoT & Embedded Systems</span>
          </div>

          <h3 className="project-title">Automatic Water Pump Switching</h3>
          <p className="project-desc">
            An automated hardware prototype built to optimize water utilization in households. Uses a microcontroller and water sensors to detect water levels and operate a relay switch that toggles the pump automatically, preventing tank dry-runs and water overflows.
          </p>

          <div className="project-skills-used">
            <span>Internet of Things (IoT)</span>
            <span>Microcontrollers</span>
            <span>Sensor Calibration</span>
            <span>Relays & Switching</span>
          </div>

          {/* Interactive Simulation 2 */}
          <div className="project-simulator glass-card">
            <h4>Live IoT Pump Simulator</h4>
            
            <div className="sim-p2-layout">
              <div className="sim-p2-tank-visual">
                <div className="water-tank">
                  <div className="water-level-fill" style={{ height: `${waterLevel}%` }}>
                    <span className="water-label">{waterLevel}%</span>
                  </div>
                  <div className="sensor-marker low-marker">Low (20%)</div>
                  <div className="sensor-marker high-marker">High (90%)</div>
                </div>
              </div>

              <div className="sim-p2-stats">
                <div className="iot-metric">
                  <span className="metric-lbl">Water Tank Level</span>
                  <div className="metric-val">{waterLevel}%</div>
                </div>
                
                <div className="iot-metric">
                  <span className="metric-lbl">Water Pump Switch</span>
                  <div className={`metric-val pump-status-indicator ${pumpStatus.toLowerCase()}`}>
                    {pumpStatus}
                  </div>
                </div>

                <div className="sim-p2-control-buttons">
                  <label>Adjust Water Tank Level:</label>
                  <div className="level-btns-grid">
                    <button onClick={() => adjustWaterLevel(10)} className="btn-level">10% (Low)</button>
                    <button onClick={() => adjustWaterLevel(50)} className="btn-level">50% (Medium)</button>
                    <button onClick={() => adjustWaterLevel(95)} className="btn-level">95% (Full)</button>
                  </div>
                  <p className="sim-info-note">
                    *Pump switches <strong>ON</strong> if water &le; 20%. Switches <strong>OFF</strong> if water &ge; 90%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
