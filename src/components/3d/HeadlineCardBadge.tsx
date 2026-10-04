import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const HeadlineCardBadge: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    const y = -(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
    setRotation({ x: -y * 22, y: x * 24 });
  };

  const resetRotation = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetRotation}
      initial={{ opacity: 0, y: -44, scale: 0.86 }}
      animate={{ opacity: 1, y: [-44, 7, -2, 0], scale: [0.86, 1.04, 0.985, 1] }}
      transition={{ duration: 0.95, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block relative cursor-grab active:cursor-grabbing align-middle mx-1 md:mx-2 perspective-[1000px] select-none"
    >
      <motion.div
        animate={{
          rotateX: isHovered ? rotation.x : [0, -3, 2, 0],
          rotateY: isHovered ? rotation.y : [0, 4, -3, 0],
          y: isHovered ? -3 : [0, -3, 0],
        }}
        transition={
          isHovered
            ? { type: 'spring', stiffness: 350, damping: 22 }
            : { repeat: Infinity, duration: 6, ease: 'easeInOut' }
        }
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.08 }}
        className="relative h-[78px] w-[102px] overflow-hidden rounded-[24px] border-2 border-[#252730] bg-[#0f1014] badge-3d-shadow"
      >
        <div
          className="absolute -left-1 -top-1 flex h-[50px] w-[58px] flex-col justify-between rounded-[9px] border border-black/10 bg-yellow-400 p-1.5 shadow-md"
          style={{ transform: 'rotate(-14deg) translate(-2px, -2px) translateZ(12px)' }}
        >
          <span className="h-1 w-2.5 rounded-full bg-black/60" />
          <span className="text-[6.5px] font-black leading-none text-black">Secure<br />Checkout</span>
          <span className="h-1 w-full rounded-full bg-black/20" />
        </div>

        <div
          className="absolute left-7 top-1 z-10 flex h-[54px] w-[56px] flex-col justify-between rounded-[9px] border border-white/10 bg-[#22242a] p-1.5 shadow-lg"
          style={{ transform: 'rotate(2deg) translateZ(24px)' }}
        >
          <div className="flex items-center justify-between">
            <span className="text-[6px] font-bold text-amber-400">Card Ready</span>
            <span className="size-1.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex h-4 w-full items-center rounded bg-gradient-to-r from-amber-500/30 to-yellow-600/30 px-1">
            <span className="font-mono text-[5.5px] font-bold text-amber-300">••• 3456</span>
          </div>
          <span className="text-right text-[5.5px] font-medium text-white/50">Apply</span>
        </div>

        <div
          className="absolute -right-0 -top-1 z-0 flex h-[48px] w-[52px] flex-col justify-between rounded-[9px] border border-black/10 bg-zinc-100 p-1.5 shadow-md"
          style={{ transform: 'rotate(12deg) translate(2px, -2px) translateZ(8px)' }}
        >
          <span className="text-[6px] font-bold leading-tight text-black">Generate<br />a New Card</span>
          <span className="size-3 self-end rounded bg-purple-600 shadow-sm" />
        </div>

        <div
          className="absolute -bottom-2 left-4 z-20 flex h-6 w-16 items-center justify-between rounded-[7px] border border-white/20 bg-black/95 px-1.5 py-0.5 shadow-md"
          style={{ transform: 'translateZ(30px)' }}
        >
          <span className="text-[6.5px] font-bold text-white/90">Balance:</span>
          <span className="text-[7.5px] font-black text-amber-400">$20,230</span>
        </div>

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent mix-blend-overlay"
          style={{ transform: 'translateZ(35px)' }}
        />
      </motion.div>
    </motion.div>
  );
};