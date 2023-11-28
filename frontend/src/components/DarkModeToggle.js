import React, { useState } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode")
  };

  return (
    <div className="dark-mode-button-container">
        <label className="switch">
        <input type="checkbox"onClick={toggleDarkMode}></input>
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default DarkModeToggle;
