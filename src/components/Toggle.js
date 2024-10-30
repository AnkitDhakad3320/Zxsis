import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for the user's preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    // Apply the theme to the body
    document.body.className = isDarkMode ? 'dark' : 'light';
    // Save the preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle" id="darkMode-icon" >
      {/* {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'} */}
      <i className={`bx ${isDarkMode ? "bx-sun" : "bx-moon"}`}></i>
    </button>
  );
};

export default ThemeToggle;
