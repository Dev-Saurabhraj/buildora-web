import React from 'react';
import { motion } from 'framer-motion';
import sophiePortrait from '../../assets/case_bravo.png';
import milanPortrait from '../../assets/case_taro.png';

// Word-by-word blur+fade reveal — exactly like Framer's native reveal
const BlurRevealText: React.FC<{ text: string; delayBase?: number }> = ({
  text,
  delayBase = 0,
}) => {
  const words = text.split(' ');
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      // Inter Display, 24px, weight 400, line-height 1.6, letter-spacing -0.02em
      className="text-[22px] md:text-[26px] font-normal leading-[1.55] tracking-[-0.02em] text-[#000000] dark:text-white"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, filter: 'blur(10px)', y: 5 },
            visible: {
              opacity: 1,
              filter: 'blur(0px)',
              y: 0,
            },
          }}
          transition={{
            duration: 0.42,
            delay: delayBase + i * 0.03,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const TestimonialsBlurSection: React.FC = () => {
  return (
    // No card container — raw on the page background, exactly like Framer
    <section className="relative my-36 w-full">
      {/* Large opening " decoration, centered above */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <span className="font-serif text-[80px] leading-none text-black/12 dark:text-white/15 select-none">
          &ldquo;
        </span>
      </motion.div>

      {/* Two-column layout with vertical divider */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-0">
        {/* ── LEFT TESTIMONIAL ─────────────────────────────────── */}
        <div className="flex flex-col justify-between gap-10 pr-0 md:pr-14">
          <BlurRevealText
            text="Working with Joris was a game-changer. He instantly understood our vision and translated it into a sleek, intuitive product. The process felt effortless, and the results exceeded our expectations."
            delayBase={0.05}
          />

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center gap-4"
          >
            <img
              src={sophiePortrait}
              alt="Sophie Lemaire"
              className="w-[64px] h-[64px] rounded-full object-cover flex-shrink-0"
              style={{ boxShadow: '0 0 0 3px rgba(255,255,255,0.6), 0 4px 12px rgba(0,0,0,0.12)' }}
              loading="lazy"
            />
            <div>
              <p className="text-[16px] font-medium text-[#000000] dark:text-white leading-tight">
                Sophie Lemaire
              </p>
              <p className="text-[14px] text-[#666666] dark:text-[#9ea2ae] mt-0.5">
                Product Lead at Loomi
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Vertical Divider ──────────────────────────────────── */}
        <div className="hidden md:block w-[1px] bg-black/10 dark:bg-white/10 mx-0" />

        {/* ── RIGHT TESTIMONIAL ─────────────────────────────────── */}
        <div className="flex flex-col justify-between gap-10 pl-0 md:pl-14 mt-16 md:mt-0 border-t md:border-t-0 border-black/10 dark:border-white/10 pt-10 md:pt-0">
          <BlurRevealText
            text="Joris brings clarity to chaos. His design work is not only beautiful but deeply strategic. He helped us rebrand from the ground up, and our audience response has been incredible."
            delayBase={0.2}
          />

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <img
              src={milanPortrait}
              alt="Milan Bakker"
              className="w-[64px] h-[64px] rounded-full object-cover flex-shrink-0"
              style={{ boxShadow: '0 0 0 3px rgba(255,255,255,0.6), 0 4px 12px rgba(0,0,0,0.12)' }}
              loading="lazy"
            />
            <div>
              <p className="text-[16px] font-medium text-[#000000] dark:text-white leading-tight">
                Milan Bakker
              </p>
              <p className="text-[14px] text-[#666666] dark:text-[#9ea2ae] mt-0.5">
                Founder of Drifted Studio
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
