import React, { useEffect, useState } from 'react';

export const LightRay: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const syncTheme = (event?: Event) => {
      const detail = (event as CustomEvent<{ isDark?: boolean }> | undefined)?.detail;
      setIsDark(detail?.isDark ?? document.documentElement.classList.contains('dark'));
    };

    syncTheme();
    window.addEventListener('themechange', syncTheme);
    return () => window.removeEventListener('themechange', syncTheme);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      <div
        className="absolute -left-[18vw] -top-[30vh] h-[140vh] w-[145vw] origin-top-left rotate-[15deg] blur-[18px]"
        style={{
          background: isDark
            ? 'linear-gradient(120deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.04) 36%, transparent 72%), repeating-linear-gradient(112deg, transparent 0 140px, rgba(255,255,255,0.045) 160px, transparent 205px 300px)'
            : 'linear-gradient(120deg, rgba(35,38,44,0.11) 0%, rgba(35,38,44,0.035) 36%, transparent 72%), repeating-linear-gradient(112deg, transparent 0 140px, rgba(35,38,44,0.035) 160px, transparent 205px 300px)',
          maskImage: 'linear-gradient(135deg, #000 0%, rgba(0,0,0,0.72) 42%, transparent 92%)',
          mixBlendMode: isDark ? 'screen' : 'multiply',
          opacity: 0.82,
        }}
      />
      <div
        className="absolute -left-[12vw] -top-[22vh] h-[95vh] w-[125vw] origin-top-left rotate-[21deg] blur-[32px]"
        style={{
          background: isDark
            ? 'linear-gradient(120deg, rgba(255,246,230,0.10) 0%, rgba(255,246,230,0.025) 40%, transparent 76%)'
            : 'linear-gradient(120deg, rgba(50,53,60,0.075) 0%, rgba(50,53,60,0.02) 42%, transparent 78%)',
          maskImage: 'linear-gradient(135deg, #000 0%, transparent 88%)',
          mixBlendMode: isDark ? 'screen' : 'multiply',
          opacity: 0.72,
        }}
      />
    </div>
  );
};