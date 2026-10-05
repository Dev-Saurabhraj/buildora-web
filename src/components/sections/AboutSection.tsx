import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const experiences = [
    { code: '01', role: 'Product & UX', company: 'Web apps · Digital products', period: 'Plan → prototype', current: true },
    { code: '02', role: 'Web design', company: 'Responsive sites · Landing pages', period: 'Structure → UI', current: false },
    { code: '03', role: 'Brand systems', company: 'Identity · Visual direction', period: 'Concept → assets', current: false },
    { code: '04', role: 'Design handoff', company: 'Figma · Developer collaboration', period: 'Polish → delivery', current: false },
  ];

  return (
    <section className="relative my-36 w-full" id="about">
      {/* Editorial Pre-header with scroll animation */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-4 mb-4"
      >
        <span className="w-16 h-[1px] bg-black/10 dark:bg-white/10" />
        <span className="font-serif-italic text-2xl text-black/50 dark:text-white/50">The practice</span>
        <span className="w-16 h-[1px] bg-black/10 dark:bg-white/10" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-center text-[#111216] dark:text-white mb-20"
      >
        Independent design, from idea to handoff.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-12 items-start">
        {/* Left: Buildora identity */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6, scale: 1.01 }}
          className="bg-white dark:bg-[#15161c] border border-black/8 dark:border-white/10 rounded-[32px] overflow-hidden halo-card"
        >
          <div className="relative flex h-80 flex-col justify-between overflow-hidden bg-[#111216] p-7 text-white">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
            <span className="relative text-xs font-medium uppercase tracking-[0.16em] text-white/55">Independent by design</span>
            <span className="relative text-6xl font-semibold tracking-tight">Buildora<span className="text-orange-500">.</span></span>
            <span className="relative max-w-[220px] text-sm leading-relaxed text-white/65">Clear ideas. Useful digital experiences. Thoughtful handoff.</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#111216] dark:text-white">Buildora</h3>
            <p className="text-xs text-[#8e929d] mb-4">Independent freelance design</p>
            <a href="/#contact" className="inline-flex items-center gap-2 text-sm font-medium text-[#111216] transition hover:text-orange-600 dark:text-white dark:hover:text-orange-400">
              Start a project <ArrowUpRight className="size-4" />
            </a>
          </div>
        </motion.div>

        {/* Right: Bio and freelance services */}
        <div className="flex flex-col gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-[#111216] dark:text-white leading-relaxed font-normal"
          >
            Buildora is an independent freelance design practice for founders and small teams. I turn complex ideas into useful, cohesive experiences across product UX, web design, and visual identity, from the first conversation through a considered handoff.
          </motion.p>

          {/* Freelance services and deliverables */}
          <div className="border-t border-black/10 dark:border-white/10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.code}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 6 }}
                className="group grid grid-cols-[50px_1fr_auto] sm:grid-cols-[60px_1.5fr_1.5fr_auto] py-5 border-b border-black/10 dark:border-white/10 items-center gap-3 transition-colors cursor-default"
              >
                {/* Archival Code */}
                <span className="font-mono text-xs text-[#8e929d] group-hover:text-orange-500 transition-colors">
                  {exp.code}
                </span>

                {/* Role */}
                <span className="font-bold text-base md:text-lg text-[#111216] dark:text-white group-hover:text-black dark:group-hover:text-white">
                  {exp.role}
                </span>

                {/* Company */}
                <span className="text-sm md:text-base text-[#5d6069] dark:text-[#9ea2ae] hidden sm:block">
                  {exp.company}
                </span>

                {/* Period + Live Signal */}
                <div className="flex items-center gap-2 justify-end">
                  {exp.current && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-ring" />
                  )}
                  <span className="text-right text-[#8e929d] font-mono text-xs md:text-sm">
                    {exp.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
