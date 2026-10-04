import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Subscribe',
    description: 'Choose a plan and start with a focused design queue built around your priorities.',
    detail: 'A clear monthly partnership',
  },
  {
    number: '02',
    title: 'Request',
    description: 'Share the brief, references, and context. I turn each request into a considered direction.',
    detail: 'One active request at a time',
  },
  {
    number: '03',
    title: 'Get Your Designs',
    description: 'Review polished, developer-ready work and keep refining until it feels right.',
    detail: 'Typical turnaround: 1–2 days',
  },
];

const useScrollRange = (
  progress: MotionValue<number>,
  values: [number, number, number],
  reducedMotion: boolean | null,
) => {
  const output = reducedMotion
    ? [
        values[1] + (values[0] - values[1]) * 0.18,
        values[1],
        values[1] + (values[2] - values[1]) * 0.18,
      ] as [number, number, number]
    : values;

  return useTransform(progress, [0, 0.5, 1], output);
};

interface ProcessCardProps {
  step: (typeof steps)[number];
  compact?: boolean;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ step, compact = false }) => (
  <motion.article
    initial={compact ? { opacity: 0, y: 24 } : false}
    whileInView={compact ? { opacity: 1, y: 0 } : undefined}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: compact ? -3 : -8, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
    className={`relative flex h-full min-h-75 flex-col justify-between overflow-hidden rounded-[20px] border border-black/6 bg-white p-7 shadow-[0_20px_45px_-28px_rgba(16,18,20,0.35)] dark:border-white/8 dark:bg-[#17181c] md:p-9 ${compact ? '' : 'halo-card'}`}
  >
    <div className="flex items-start justify-between">
      <span className="text-[72px] font-medium leading-[0.9] tracking-[-0.06em] text-[#17181c] dark:text-white md:text-[88px]">
        {step.number[1]}
      </span>
      <span className="mt-2 rounded-full border border-black/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-black/45 dark:border-white/15 dark:text-white/50">
        Step {step.number}
      </span>
    </div>

    <div className="max-w-85">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-orange-600 dark:text-orange-400">
        {step.detail}
      </p>
      <h3 className="mb-3 text-2xl font-semibold tracking-tight text-[#17181c] dark:text-white md:text-[28px]">
        {step.title}
      </h3>
      <p className="text-[15px] leading-relaxed text-[#666] dark:text-[#a4a7b0]">
        {step.description}
      </p>
    </div>
  </motion.article>
);

export const ProcessSection: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ['start end', 'end start'],
  });
  const progress = scrollYProgress;
  const firstY = useScrollRange(progress, [38, -4, 38], reducedMotion);
  const firstRotate = useScrollRange(progress, [-8, -3, -8], reducedMotion);
  const firstScale = useScrollRange(progress, [0.94, 1, 0.94], reducedMotion);
  const secondY = useScrollRange(progress, [-12, 18, -12], reducedMotion);
  const secondRotate = useScrollRange(progress, [8, 1, 8], reducedMotion);
  const secondScale = useScrollRange(progress, [0.97, 1.04, 0.97], reducedMotion);
  const thirdY = useScrollRange(progress, [32, -8, 32], reducedMotion);
  const thirdRotate = useScrollRange(progress, [-6, 4, -6], reducedMotion);
  const thirdScale = useScrollRange(progress, [0.94, 1, 0.94], reducedMotion);
  const firstPath = useTransform(progress, [0.03, 0.32], [0, 1]);
  const secondPath = useTransform(progress, [0.29, 0.58], [0, 1]);
  const nodeOpacity = useTransform(progress, [0.04, 0.14], [0, 1]);

  return (
    <section className="relative my-28 w-full py-10 md:my-36" id="process">
      <div className="mb-5 flex items-center justify-center gap-4">
        <span className="h-px w-14 bg-black/15 dark:bg-white/15" />
        <span className="font-serif-italic text-xl text-black/45 dark:text-white/45">Our Process, Explained</span>
        <span className="h-px w-14 bg-black/15 dark:bg-white/15" />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mb-14 text-center text-4xl font-semibold tracking-tight text-[#111216] dark:text-white md:mb-20 md:text-5xl"
      >
        Here's how it works
      </motion.h2>

      <div ref={cardsRef} className="relative mx-auto max-w-7xl">
        <div className="pointer-events-none absolute inset-0 z-30 hidden md:block">
          <svg className="h-full w-full" viewBox="0 0 1200 520" fill="none" preserveAspectRatio="none" aria-hidden="true">
            <motion.path
              d="M 310 155 C 370 60, 460 65, 560 90"
              stroke="#FF4D00"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength: firstPath }}
            />
            <motion.circle cx="310" cy="155" r="5.5" stroke="#FF4D00" strokeWidth="2" fill="var(--bg-page)" style={{ opacity: nodeOpacity }} />
            <motion.circle cx="560" cy="90" r="5.5" stroke="#FF4D00" strokeWidth="2" fill="var(--bg-page)" style={{ opacity: nodeOpacity }} />
            <motion.path
              d="M 835 205 C 865 255, 900 263, 881 232 C 859 198, 824 222, 850 278 C 874 327, 928 291, 970 244"
              stroke="#FF4D00"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength: secondPath }}
            />
            <motion.circle cx="835" cy="205" r="5.5" stroke="#FF4D00" strokeWidth="2" fill="var(--bg-page)" style={{ opacity: nodeOpacity }} />
            <motion.circle cx="970" cy="244" r="5.5" stroke="#FF4D00" strokeWidth="2" fill="var(--bg-page)" style={{ opacity: nodeOpacity }} />
          </svg>
        </div>

        <div className="relative hidden h-117.5 md:block lg:h-127.5">
          <motion.div
            initial={{ opacity: 0, x: 360, scale: 0.92 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.28 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="absolute bottom-0 left-0 z-10 h-[92%] w-[32%] max-w-115"
          >
            <motion.div style={{ y: firstY, rotate: firstRotate, scale: firstScale }} className="h-full w-full">
              <ProcessCard step={steps[0]} />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.35, y: 26, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.28 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.08 }}
            className="absolute bottom-0 left-[34%] z-20 h-full w-[32%] max-w-120"
          >
            <motion.div style={{ y: secondY, rotate: secondRotate, scale: secondScale }} className="h-full w-full">
              <ProcessCard step={steps[1]} />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -360, scale: 0.92 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.28 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.16 }}
            className="absolute bottom-0 left-[68%] z-10 h-[92%] w-[32%] max-w-115"
          >
            <motion.div style={{ y: thirdY, rotate: thirdRotate, scale: thirdScale }} className="h-full w-full">
              <ProcessCard step={steps[2]} />
            </motion.div>
          </motion.div>
        </div>

        <div className="grid gap-4 md:hidden">
          {steps.map((step) => <ProcessCard key={step.number} step={step} compact />)}
        </div>
      </div>
    </section>
  );
};