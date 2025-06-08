import React, { useState } from "react";

export function StarRating() {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const displayRating = tempRating || rating;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Star Rating</h1>
      <h3>by NamasteDev</h3>

      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              fontSize: "50px",
              cursor: "pointer",
              color: star <= displayRating ? "gold" : "gray",
            }}
            onClick={() => setRating(star)}
            onMouseEnter={() => setTempRating(star)}
            onMouseLeave={() => setTempRating(0)}
          >
            ★
          </span>
        ))}
      </div>
      <p style={{ marginTop: "5px" }}>Current Rating: {tempRating || rating}</p>

      <button onClick={() => setRating(0)}>Reset Rating</button>
    </div>
  );
}

///////////////////////////////////////

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./styles.css";

export function TogglePassword() {
  const [showPassword, setShowPassword] = useState(false);

  function handleToggle() {
    setShowPassword(() => !showPassword);
  }

  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          className="password-input"
          data-testid="password-input"
        />
        <span onClick={handleToggle} className="icon" data-testid="toggle-icon">
          {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
        </span>
      </div>
      <span className="visibility-label" data-testid="visibility-label">
        {showPassword ? "Password Visible" : "Password Hidden"}
      </span>
    </div>
  );
}

////////////////////////////////////////

import React, { useState } from "react";

export function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div style={{ textAlign: "center", padding: "50px", height: "100vh" }}>
      <h1>Modal Popup</h1>
      <button
        onClick={handleOpen}
        style={{ padding: "10px", cursor: "pointer" }}
      >
        Open Modal
      </button>

      {isOpen && (
        <div
          onMouseDown={handleClose}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          data-testid="modal-backdrop"
        >
          <div
            onMouseDown={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "8px",
              minWidth: "300px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
              textAlign: "center",
            }}
          >
            <h1>Modal Header</h1>
            <p>This is the modal body</p>
            <button
              onClick={handleClose}
              style={{ padding: "10px", cursor: "pointer" }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

//////////////////////////////////////////////

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode((prev) => !prev);
  }

  return (
    <div className={`container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h1>Dark Mode Toggle</h1>
      <div>
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} checked={isDarkMode} />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </span>
      </div>
    </div>
  );
}
