import React from 'react';
import { motion } from 'framer-motion';

const BlurRevealText: React.FC<{ text: string; delayBase?: number }> = ({ text, delayBase = 0 }) => (
  <motion.p
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-60px' }}
    className="text-[22px] font-normal leading-[1.55] text-[#111216] dark:text-white md:text-[26px]"
  >
    {text.split(' ').map((word, index) => (
      <motion.span
        key={`${word}-${index}`}
        variants={{
          hidden: { opacity: 0.22, filter: 'blur(9px)', y: 5 },
          visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
        }}
        transition={{ duration: 0.42, delay: delayBase + index * 0.025, ease: [0.16, 1, 0.3, 1] }}
        className="mr-[0.28em] inline-block"
      >
        {word}
      </motion.span>
    ))}
  </motion.p>
);

export const TestimonialsBlurSection: React.FC = () => (
  <section className="relative my-36 w-full" aria-labelledby="collaboration-title">
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="mb-4 flex items-center justify-center gap-4"
    >
      <span className="h-px w-14 bg-black/10 dark:bg-white/10" />
      <span className="font-serif-italic text-xl text-black/45 dark:text-white/45">Working together</span>
      <span className="h-px w-14 bg-black/10 dark:bg-white/10" />
    </motion.div>

    <motion.h2
      id="collaboration-title"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="mb-14 text-center text-4xl font-semibold tracking-tight text-[#111216] dark:text-white md:mb-16 md:text-5xl"
    >
      Clear thinking. Considered craft.
    </motion.h2>

    <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1px_1fr] md:gap-0">
      <article className="flex flex-col justify-between gap-8 pr-0 md:pr-12">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-orange-600 dark:text-orange-400">01 / Find the focus</p>
          <BlurRevealText
            text="We start by understanding the people, goals, and constraints behind your project. Then we agree on a clear direction before the detailed design begins."
            delayBase={0.04}
          />
        </div>
        <p className="text-sm text-[#777b84] dark:text-white/55">Discovery · Product strategy · UX flows</p>
      </article>

      <div className="hidden w-px bg-black/10 dark:bg-white/10 md:block" />

      <article className="flex flex-col justify-between gap-8 border-t border-black/10 pt-10 dark:border-white/10 md:border-0 md:pl-12 md:pt-0">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-orange-600 dark:text-orange-400">02 / Make it real</p>
          <BlurRevealText
            text="Together we shape the interface, visual system, and useful details that make the experience feel cohesive. You get regular reviews and a considered handoff."
            delayBase={0.12}
          />
        </div>
        <p className="text-sm text-[#777b84] dark:text-white/55">UI design · Prototyping · Developer handoff</p>
      </article>
    </div>
  </section>
);