import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onOpenDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDrawer }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('hanzo-theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      if ((window as any).updateThreeTheme) (window as any).updateThreeTheme(true);
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      if ((window as any).updateThreeTheme) (window as any).updateThreeTheme(false);
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
    localStorage.setItem('hanzo-theme', nextDark ? 'dark' : 'light');
    window.dispatchEvent(new CustomEvent('themechange', { detail: { isDark: nextDark } }));
    if ((window as any).updateThreeTheme) (window as any).updateThreeTheme(nextDark);
  };

  return (
    <header className="fixed top-6 left-0 w-full z-40 pointer-events-none px-6">
      <div className="w-full flex items-center justify-between">
        {/* Brand Logo Pill with signature halo */}
        <a
          href="/#hero"
          className="pointer-events-auto inline-flex items-center px-6 py-2.5 bg-white/90 dark:bg-[#16171d]/90 backdrop-blur-xl border border-black/8 dark:border-white/10 rounded-full halo-chip hover:scale-105 transition-transform duration-200"
        >
          <span className="font-extrabold text-base tracking-tight text-[#111216] dark:text-white">
            Hanzo
          </span>
        </a>

        {/* Action Buttons */}
        <div className="pointer-events-auto flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-11 h-11 rounded-full bg-white/90 dark:bg-[#16171d]/90 backdrop-blur-xl border border-black/8 dark:border-white/10 halo-chip flex items-center justify-center text-[#111216] dark:text-white hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={onOpenDrawer}
            aria-label="Open menu"
            className="w-11 h-11 rounded-full bg-white/90 dark:bg-[#16171d]/90 backdrop-blur-xl border border-black/8 dark:border-white/10 halo-chip flex flex-col items-center justify-center gap-1.5 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span className="w-4 h-[2px] bg-[#111216] dark:bg-white rounded-full transition-transform" />
            <span className="w-4 h-[2px] bg-[#111216] dark:bg-white rounded-full transition-transform" />
          </button>
        </div>
      </div>
    </header>
  );
};
