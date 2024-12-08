import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-toggle"  id="darkMode-icon">
      <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'}`}></i>
    </button>
  );
};

export default ThemeToggle;
