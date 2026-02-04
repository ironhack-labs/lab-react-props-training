import { useState, useCallback, useEffect } from 'react';

// Custom hook para alternância de tema escuro/claro
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem('theme');
    return saved || 'light';
  });

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return [theme, toggleTheme];
}
