import React, { useState, useEffect } from "react";
import './darkMode.css';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true" ? true : false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  return (
    <div className={`tdnn ${darkMode ? '' : 'day'}`} onClick={toggleDarkMode}>
      <div className={`moon ${darkMode ? '' : 'sun'}`}></div>
    </div>
  );
}

export default DarkModeToggle;