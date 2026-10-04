import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../../constants/data';
import { CosmicButton } from '../common/CosmicButton';

interface FAQSectionProps {
  onOpenBooking: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative my-36 w-full" id="faq">
      {/* Editorial Pre-header */}
      <div className="flex items-center justify-center gap-4 mb-4">
        <span className="w-16 h-[1px] bg-black/10 dark:bg-white/10" />
        <span className="font-serif-italic text-2xl text-black/50 dark:text-white/50">FAQ</span>
        <span className="w-16 h-[1px] bg-black/10 dark:bg-white/10" />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center text-[#111216] dark:text-white mb-20">
        Your Questions, Answered
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-16 items-start">
        {/* Left Sticky Contact Card (Exact Match to Framer live site with glass halo) */}
        <div className="rounded-[24px] p-8 md:p-10 halo-card-glass border border-white/20 dark:border-white/10 md:sticky md:top-28 space-y-6 flex flex-col">
          {/* Avatar with circular halo ring matching Image 2 */}
          <div className="w-16 h-16 rounded-full overflow-hidden halo-avatar mb-2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces"
              alt="Joris van Dijk"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-[#111216] dark:text-white leading-snug">
            Have more questions?<br />Book a free discovery call
          </h3>

          {/* Button with thick frosted halo matching Image 2 */}
          <div className="pt-2">
            <CosmicButton onClick={onOpenBooking} size="md" withHalo={true} className="w-full">
              Book a Discovery Call
            </CosmicButton>
          </div>

          <p className="text-xs text-[#8e929d] pt-1">
            Or, email me at{' '}
            <a href="mailto:joris@hanzo.com" className="text-[#ff5e00] font-semibold underline hover:opacity-80">
              joris@hanzo.com
            </a>
          </p>
        </div>

        {/* Right Accordion List */}
        <div className="border-t border-black/8 dark:border-white/10">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-black/8 dark:border-white/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left gap-4 group cursor-pointer"
                >
                  <span className="text-base md:text-lg font-bold text-[#111216] dark:text-white group-hover:text-[#ff5e00] transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`text-xl font-light text-[#ff5e00] transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm md:text-base text-[#5d6069] dark:text-[#9ea2ae] leading-relaxed pb-6 pr-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
