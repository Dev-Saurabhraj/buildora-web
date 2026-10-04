import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ConnectSectionProps {
  onOpenBooking: () => void;
}

export const ConnectSection: React.FC<ConnectSectionProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll through the container as it enters and docks into view
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    restDelta: 0.001,
  });

  // Gliding slide-down reveal: content translates from -260px down to 0px, opacity fades from 0 to 1
  const contentY = useTransform(smoothProgress, [0.05, 0.92], [-260, 0]);
  const contentOpacity = useTransform(smoothProgress, [0.05, 0.65], [0, 1]);

  return (
    <section ref={containerRef} className="relative mt-32 mb-8 w-full" id="contact">
      {/* Outer Obsidian Card with Halo Border & Atmospheric Lighting */}
      <div className="relative bg-[#000000] border border-white/10 rounded-[36px] pt-24 pb-10 px-6 sm:px-10 md:px-16 overflow-hidden halo-card shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] min-h-[580px] flex flex-col justify-between">
        {/* 1. Atmospheric Top-Left Spotlight Gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(85% 85% at 0% 0%, rgba(60, 60, 60, 0.55) 0%, rgba(0, 0, 0, 0.95) 100%)',
          }}
        />

        {/* 2. Diagonal Volumetric Light Rays */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.05]">
          <div className="absolute -top-32 -left-32 w-[900px] h-[700px] flex gap-12 skew-x-[-35deg]">
            <div className="w-24 h-full bg-gradient-to-b from-white to-transparent" />
            <div className="w-36 h-full bg-gradient-to-b from-white to-transparent" />
            <div className="w-20 h-full bg-gradient-to-b from-white to-transparent" />
            <div className="w-48 h-full bg-gradient-to-b from-white to-transparent" />
          </div>
        </div>

        {/* 3. Subtle Decorative Corner Accent Brackets matching Framer */}
        <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-white/20 pointer-events-none rounded-tl-sm" />
        <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-white/20 pointer-events-none rounded-tr-sm" />
        <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-white/20 pointer-events-none rounded-bl-sm" />
        <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-white/20 pointer-events-none rounded-br-sm" />

        {/* 4. Sliding Scroll-Reveal Content (Moves down into position as you scroll down) */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center text-center space-y-6 select-none my-auto"
        >
          {/* Availability Badge: "2 spots available" with Flanking Hairlines */}
          <div className="flex items-center justify-center gap-5">
            <span className="w-16 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-white/50" />
            <span className="font-serif-italic text-sm sm:text-base text-white/60 tracking-wide">
              2 spots available
            </span>
            <span className="w-16 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-white/50" />
          </div>

          {/* Headline: "Let's Connect" ("Let's" in pure white, "Connect" in 50% opacity white) */}
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-normal tracking-[-0.04em] leading-[1.08] select-none">
            <span className="text-white font-medium">Let's </span>
            <span className="text-white/50 font-normal">Connect</span>
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white font-normal max-w-xl mx-auto leading-relaxed">
            Feel free to contact me if having any questions.
            <br className="hidden sm:block" />
            I'm available for new projects or just for chatting.
          </p>

          {/* Action Button: Pill with Inset Depth, Halo, and Arrow */}
          <div className="pt-4">
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-black text-white text-base font-normal rounded-full halo-btn hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-2xl border border-white/15"
            >
              <span>Book a free intro call</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </motion.div>

        {/* 5. Bottom Footer Row (Integrated directly inside the dark card) */}
        <div className="relative z-10 w-full mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/50">
          <p className="font-normal tracking-tight">&copy; Hanzo Studio, 2026</p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {['Twitter / X', 'LinkedIn', 'Instagram', 'Framer'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="px-4 py-1.5 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all text-xs font-normal"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
