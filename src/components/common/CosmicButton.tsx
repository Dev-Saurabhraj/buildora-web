import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CosmicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  withHalo?: boolean;
}

export const CosmicButton: React.FC<CosmicButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  className = '',
  size = 'md',
  icon = true,
  withHalo = true,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Play subtle synthetic audio click feedback
  const playClickSound = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch (_) {}
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCoords({ x: x * 0.22, y: y * 0.22 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  const handleClick = () => {
    playClickSound();
    onClick?.();
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-xs gap-2',
    md: 'px-6 py-3.5 text-sm gap-2.5',
    lg: 'px-8 py-4 text-base gap-3',
  }[size];

  return (
    <button
      ref={btnRef}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${coords.x}px, ${coords.y}px, 0)`,
      }}
      className={`
        group relative inline-flex items-center justify-center font-semibold tracking-tight
        rounded-full cursor-pointer transition-all duration-200 ease-out select-none
        active:scale-[0.96] hover:scale-[1.02]
        disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100
        ${sizeClasses}
        ${withHalo ? 'halo-btn' : ''}
        ${
          variant === 'primary'
            ? 'bg-[#0d0e12] text-white border border-white/10'
            : 'bg-white text-[#111216] dark:bg-[#16171d] dark:text-white border border-black/8 dark:border-white/10'
        }
        ${className}
      `}
    >
      {/* Dynamic Laser Sheen Ring */}
      <span
        className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden"
      >
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
          }}
        />
      </span>

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        )}
      </span>
    </button>
  );
};
