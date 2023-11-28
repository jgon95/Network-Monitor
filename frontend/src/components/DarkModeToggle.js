import React, { useState, useEffect} from "react";
import './darkMode.css';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true" ? true : false;
  });
  
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
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