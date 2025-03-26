
import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for user's preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newDark = !prev;
      if (newDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newDark;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-muted transition-colors duration-200 focus:outline-none"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <span
          className={`absolute inset-0 transition-opacity duration-300 ${
            isDark ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Moon size={24} />
        </span>
        <span
          className={`absolute inset-0 transition-opacity duration-300 ${
            isDark ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Sun size={24} />
        </span>
      </div>
    </button>
  );
};

export default ThemeToggle;
