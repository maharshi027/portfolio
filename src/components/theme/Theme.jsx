import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBolt } from 'react-icons/fa';
import './theme.css';

const THEMES = [
  { id: 'dark-theme', label: 'Dark', icon: FaMoon },
  { id: 'neon-theme', label: 'Neon', icon: FaBolt },
  { id: 'light-theme', label: 'Light', icon: FaSun }
];

function Theme() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark-theme';
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="theme-switcher-wrapper">
      <div className="theme-switcher-dock">
        {THEMES.map((item) => {
          const Icon = item.icon;
          const isActive = theme === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setTheme(item.id)}
              className={`theme-dock-btn ${isActive ? 'active' : ''}`}
              title={`Switch to ${item.label} Theme`}
              aria-label={`Switch to ${item.label} Theme`}
            >
              <Icon className="theme-dock-icon" />
              <span className="theme-dock-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Theme;
