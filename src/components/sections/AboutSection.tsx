import React from 'react';
import { motion } from 'framer-motion';
import founderAvatar from '../../assets/avatar_founder.png';

export const AboutSection: React.FC = () => {
  const experiences = [
    { code: '01', role: 'Design Lead', company: 'Google', period: '2024 → Now', current: true },
    { code: '02', role: 'Senior Designer', company: 'PayPal', period: '2019 → 2024', current: false },
    { code: '03', role: 'Product Designer', company: 'Meta', period: '2016 → 2019', current: false },
    { code: '04', role: 'Art Director', company: 'Independent', period: '2011 → 2016', current: false },
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
        <span className="font-serif-italic text-2xl text-black/50 dark:text-white/50">Pushing Boundaries</span>
        <span className="w-16 h-[1px] bg-black/10 dark:bg-white/10" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold tracking-tight text-center text-[#111216] dark:text-white mb-20"
      >
        Pushing boundaries <span className="text-[#8e929d] font-normal">since 2011</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-12 items-start">
        {/* Left: Founder Photo Card with signature frosted halo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6, scale: 1.01 }}
          className="bg-white dark:bg-[#15161c] border border-black/8 dark:border-white/10 rounded-[32px] overflow-hidden halo-card"
        >
          <div className="h-80 overflow-hidden relative">
            <img
              src={founderAvatar}
              alt="Joris van Dijk"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-[#111216] dark:text-white">Joris van Dijk</h3>
            <p className="text-xs text-[#8e929d] mb-4">Hanzo Studio, Founder</p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full border border-black/8 dark:border-white/10 flex items-center justify-center text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 transition-colors halo-chip"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full border border-black/8 dark:border-white/10 flex items-center justify-center text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 transition-colors halo-chip"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener"
                className="w-9 h-9 rounded-full border border-black/8 dark:border-white/10 flex items-center justify-center text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 transition-colors halo-chip"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Bio & Documentary-Style Plain Timeline (No box design as requested) */}
        <div className="flex flex-col gap-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl text-[#111216] dark:text-white leading-relaxed font-normal"
          >
            Joris van Dijk is a Dutch designer known for his minimalist, expressive digital work. He helps startups and studios create clean interfaces and strong branding. Based in Utrecht, he blends function with emotion &mdash; and often crafts timeless digital experiences that scale.
          </motion.p>

          {/* Documentary Plane: Clean minimalist timeline with cinematic scroll reveals */}
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
