import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const HeadlineInfinityBadge: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setRot({ x: -y * 22, y: x * 24 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRot({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: -48, scale: 0.84 }}
      animate={{ opacity: 1, y: [-48, 8, -2, 0], scale: [0.84, 1.045, 0.985, 1] }}
      transition={{ duration: 1.02, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block relative cursor-grab active:cursor-grabbing align-middle mx-1 md:mx-2 perspective-[1000px] select-none"
    >
      <motion.div
        animate={{
          rotateX: isHovered ? rot.x : [0, 3, -2, 0],
          rotateY: isHovered ? rot.y : [0, -4, 3, 0],
          y: isHovered ? -3 : [0, -3, 0],
        }}
        transition={
          isHovered
            ? { type: 'spring', stiffness: 350, damping: 22 }
            : { repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 0.5 }
        }
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.08 }}
        className="w-[102px] h-[78px] bg-[#262626] border-[2px] border-[#383838] rounded-[24px] relative badge-3d-shadow flex items-center justify-center overflow-hidden"
      >
        {/* Subtle Top Inner Edge Highlight */}
        <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

        {/* Embossed Metallic Infinity Loop with Parallax Float */}
        <div
          className="relative flex items-center justify-center"
          style={{ transform: 'translateZ(18px)' }}
        >
          <svg
            className="w-16 h-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
            viewBox="0 0 60 28"
            fill="none"
          >
            <defs>
              <linearGradient id="metallicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9ca3af" />
                <stop offset="35%" stopColor="#4b5563" />
                <stop offset="70%" stopColor="#d1d5db" />
                <stop offset="100%" stopColor="#374151" />
              </linearGradient>
            </defs>
            <path
              d="M14 6C9.58 6 6 9.58 6 14C6 18.42 9.58 22 14 22C19.5 22 24.5 14 30 14C35.5 14 40.5 22 46 22C50.42 22 54 18.42 54 14C54 9.58 50.42 6 46 6C40.5 6 35.5 14 30 14C24.5 14 19.5 6 14 6Z"
              stroke="url(#metallicGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Specular Highlight Sheen */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent mix-blend-overlay"
          style={{ transform: 'translateZ(25px)' }}
        />
      </motion.div>
    </motion.div>
  );
};
