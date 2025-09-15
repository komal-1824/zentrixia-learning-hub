// Dark mode toggle with localStorage persistence
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    // initial mode from localStorage or system
    const saved = localStorage.getItem('zentrixia-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('zentrixia-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('zentrixia-theme', 'light');
    }
  }, [dark]);

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setDark((d) => !d)}
      className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-gray-100 dark:bg-white/10 border border-black/5 dark:border-white/10 hover:scale-105 transition"
    >
      {dark ? <FaSun /> : <FaMoon />} <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
    </button>
  );
}
