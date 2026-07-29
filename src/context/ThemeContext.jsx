import React, { createContext, useContext, useState, useEffect } from 'react';
import { getSettings, saveSettings } from '../utils/localStorage';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    const settings = getSettings();
    return settings.theme || 'dark';
  });

  useEffect(() => {
    const root = document.body;
    root.classList.remove('light-theme', 'dark-theme');

    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList.add(prefersDark ? 'dark-theme' : 'light-theme');
    } else {
      root.classList.add(`${theme}-theme`);
    }

    const currentSettings = getSettings();
    saveSettings({ ...currentSettings, theme });
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
