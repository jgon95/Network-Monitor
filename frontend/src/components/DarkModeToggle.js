// Import necessary React libraries and CSS file for styling.
import React, { useState, useEffect } from "react";
import './darkMode.css';

// Define a functional component called DarkModeToggle.
function DarkModeToggle() {
  // Initialize a state variable 'darkMode' using useState.
  const [darkMode, setDarkMode] = useState(() => {
    // Check if there is a value stored in the 'localStorage' with the key 'darkMode'.
    const savedMode = localStorage.getItem("darkMode");
    // Initialize 'darkMode' based on the value in 'localStorage'. Default to 'false' if not found.
    return savedMode === "true" ? true : false;
  });
  // Use 'useEffect' to add or remove the 'dark-mode' class from the 'document.body'
  // depending on the value of 'darkMode'.
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);
  // Define a function 'toggleDarkMode' to toggle the dark mode state.
  const toggleDarkMode = () => {
    // Invert the current value of 'darkMode'.
    const newDarkMode = !darkMode;
    // Update the 'darkMode' state with the new value.
    setDarkMode(newDarkMode);
    // Store the new value in 'localStorage' as a string.
    localStorage.setItem("darkMode", newDarkMode.toString());
  };
  // Render the dark mode toggle button, using the 'darkMode' state to determine
  // whether to apply the 'day' class or not.
  return (
    <div className={`tdnn ${darkMode ? '' : 'day'}`} onClick={toggleDarkMode}>
      <div className={`moon ${darkMode ? '' : 'sun'}`}></div>
    </div>
  );
}

export default DarkModeToggle;
