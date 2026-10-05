import React from 'react';
import { motion } from 'framer-motion';
import { HeadlineCardBadge } from '../3d/HeadlineCardBadge';
import { HeadlineInfinityBadge } from '../3d/HeadlineInfinityBadge';
import { CosmicButton } from '../common/CosmicButton';
import leaderStrida from '../../assets/case_strida.png';
import leaderBravo from '../../assets/case_bravo.png';
import leaderNitro from '../../assets/case_nitro.png';
import leaderHaze from '../../assets/case_haze.png';
import leaderTaro from '../../assets/case_taro.png';
import leaderFargo from '../../assets/case_fargo.png';

const featuredProjectImages = [leaderStrida, leaderBravo, leaderNitro, leaderHaze, leaderTaro, leaderFargo];

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-36 md:pt-44 pb-16 flex flex-col items-center text-center w-full" id="hero">
      {/* Availability Status Pill with thick frosted halo */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/90 dark:bg-[#16171d]/90 backdrop-blur-xl border border-black/6 dark:border-white/10 rounded-full halo-chip mb-8 select-none"
      >
        <span className="w-2 h-2 rounded-full bg-[#22c55e] pulse-ring" />
        <span className="text-xs md:text-sm font-semibold tracking-tight text-[#111216] dark:text-white">
          Freelance projects welcome
        </span>
      </motion.div>

      {/* Hero Headline with 3D Badges matching Image 1 */}
      <motion.h1
        initial={{ opacity: 0, y: 8, filter: 'blur(16px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        className="text-5xl sm:text-6xl md:text-7xl font-medium tracking-[-0.04em] leading-[1.08] text-[#111216] dark:text-white max-w-5xl mb-6"
      >
        <span className="inline-flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 gap-y-2">
          <span>Thoughtful</span>
          {/* Authentic 3D Card Badge matching Image 1 */}
          <HeadlineCardBadge />
          <span className="text-black/35 dark:text-white/35 font-semibold">Design</span>
        </span>
        <br />
        <span className="inline-flex flex-wrap items-center justify-center gap-x-2 md:gap-x-4 gap-y-2">
          <span className="text-black/35 dark:text-white/35 font-semibold">for</span>
          {/* Authentic 3D Titanium Infinity Badge matching Image 1 */}
          <HeadlineInfinityBadge />
          <span>Growing Teams</span>
        </span>
      </motion.h1>

      {/* Hero Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="text-lg md:text-xl text-[#5d6069] dark:text-[#9ea2ae] max-w-xl mx-auto leading-relaxed mb-10"
      >
        Independent product, web, and brand design for teams ready to turn a good idea into a clear, useful experience.
      </motion.p>

      {/* Hero CTA & Social Proof Avatar Stack */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-8"
      >
        <CosmicButton onClick={onOpenBooking} size="lg" withHalo={true}>
          Discuss a project
        </CosmicButton>

        <a href="/#case-studies" className="flex flex-col items-start gap-1 select-none" aria-label="Explore selected projects">
          <div className="flex items-center -space-x-2">
            {featuredProjectImages.map((image, index) => (
              <img
                key={image}
                src={image}
                alt=""
                className="w-10 h-10 rounded-full object-cover halo-avatar hover:scale-110 hover:z-10 transition-transform"
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-[#8e929d]">
            Explore selected work
          </span>
        </a>
      </motion.div>
    </section>
  );
};
