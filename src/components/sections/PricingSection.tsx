import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECT_DELIVERABLES } from '../../constants/data';
import { CosmicButton } from '../common/CosmicButton';

interface PricingSectionProps {
  onOpenBooking: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  const [isBrandWeb, setIsBrandWeb] = useState(false);

  return (
    <section className="relative my-32 w-full" id="pricing">
      {/* Editorial Pre-header with scroll animation */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-4 mb-4"
      >
        <span className="w-16 h-[1px] bg-black/10 dark:bg-white/10" />
        <span className="font-serif-italic text-2xl text-black/50 dark:text-white/50">Engagements</span>
        <span className="w-16 h-[1px] bg-black/10 dark:bg-white/10" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-center text-[#111216] dark:text-white mb-16"
      >
        Freelance design, scoped to your project
      </motion.h2>

      {/* Main Pricing Card: expanded full-width with glass halo matching Image 2 */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[24px] p-8 md:p-14 halo-card-glass border border-white/20 dark:border-white/10 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12"
      >
        {/* Left: Pricing & Booking */}
        <div className="flex flex-col justify-between space-y-8">
          <div>
            {/* Project-focus selector */}
            <div className="inline-flex items-center gap-3 mb-6 select-none">
              <span className={`text-sm font-bold transition-colors ${!isBrandWeb ? 'text-[#111216] dark:text-white' : 'text-[#8e929d]'}`}>
                Product &amp; UX
              </span>
              <button
                type="button"
                aria-label="Toggle between product design and brand and web design"
                aria-pressed={isBrandWeb}
                onClick={() => setIsBrandWeb(!isBrandWeb)}
                className="w-12 h-7 bg-[#ff5e00] rounded-full p-1 cursor-pointer transition-colors relative"
              >
                <motion.div
                  animate={{ x: isBrandWeb ? 20 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="w-5 h-5 bg-white rounded-full shadow-sm"
                />
              </button>
              <span className={`text-sm font-bold transition-colors ${isBrandWeb ? 'text-[#111216] dark:text-white' : 'text-[#8e929d]'}`}>
                Brand &amp; Web
              </span>
            </div>

            {/* Price Display with Animated Scroll Appear */}
            <div className="mb-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isBrandWeb ? 'brand-web' : 'product'}
                  initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                  transition={{ duration: 0.3 }}
                  className="flex items-baseline gap-1"
                >
                  <span className="text-5xl md:text-6xl font-black tracking-tight text-[#111216] dark:text-white">
                    {isBrandWeb ? 'Brand & web' : 'Product design'}
                  </span>
                  <span className="text-xl text-[#8e929d] font-normal">
                    project scope
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="text-xs text-[#8e929d]">
              {isBrandWeb
                ? 'Visual identity and responsive website design, scoped to your goals.'
                : 'Product discovery, user experience, interface design, and prototypes.'}
              {' '}Every project has an agreed fee and timeline before work begins.
            </p>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#111216] dark:text-white">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] pulse-ring" />
              <span>Open for freelance projects</span>
            </div>
            <CosmicButton onClick={onOpenBooking} size="lg" withHalo={true} className="w-full">
              Discuss your project
            </CosmicButton>
          </div>

          {/* Project approach */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-[#f8f9fa] dark:bg-[#1a1b22] border border-black/4 dark:border-white/5 rounded-2xl p-5 space-y-3"
          >
            <p className="text-xs text-[#5d6069] dark:text-[#9ea2ae] leading-relaxed">
              Clear scope, thoughtful collaboration, and a handoff your team can keep building on.
            </p>
            <div className="flex items-center gap-3">
              <span className="grid size-8 place-items-center rounded-full bg-[#111216] text-sm font-bold text-white dark:bg-white dark:text-black">B</span>
              <div>
                <span className="text-xs font-bold block text-[#111216] dark:text-white">A considered process</span>
                <span className="text-[10px] text-[#8e929d]">From brief to handoff</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: What's Included (Staggered scroll-up/down animated items) */}
        <div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-black/8 dark:border-white/10 pt-8 md:pt-0 md:pl-10">
          <h3 className="text-lg font-bold text-[#111216] dark:text-white mb-6">
            A project can include
          </h3>
          <ul className="space-y-4">
            {(isBrandWeb ? PROJECT_DELIVERABLES.brand : PROJECT_DELIVERABLES.product).map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-center gap-3 text-sm text-[#5d6069] dark:text-[#9ea2ae]"
              >
                <span className="w-5 h-5 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-xs font-bold text-[#111216] dark:text-white flex-shrink-0">
                  +
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
