import React, { useState } from "react";
import './darkMode.css';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode")
  };

  return (
    <div className="dark-mode-button-container">
      <button className="dark-mode-button"onClick={toggleDarkMode}>
        {darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}

      </button>
    </div>
  );
}

export default DarkModeToggle;