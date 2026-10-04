import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Folder } from 'lucide-react';
import stridaCatalogue from '../../assets/strida_catalogue.png';
import stridaProject from '../../assets/strida_project.png';
import stridaAbout from '../../assets/strida_about.png';
import bravoScreen from '../../assets/work_detail_2.jpg';
import nitroScreen from '../../assets/work_detail_3.jpg';
import walletScreen from '../../assets/work_detail_5.jpg';
import savingsScreen from '../../assets/work_detail_6.jpg';
import cardBoardScreen from '../../assets/work_detail_9.jpg';
import learningScreen from '../../assets/work_detail_10.jpg';

interface ShowcaseSectionProps {
  onOpenShowreel: () => void;
}

const wallProjects = [
  { name: 'Strida · Works catalogue', image: stridaCatalogue, href: '/work/strida' },
  { name: 'Bravo · Product experience', image: bravoScreen, href: '/work/bravo' },
  { name: 'Wallet · Concierge', image: walletScreen, href: '/work/bravo' },
  { name: 'Saver · Personal finance', image: savingsScreen, href: '/work/bravo' },
  { name: 'Nitro · Design system', image: nitroScreen, href: '/work/nitro' },
  { name: 'Cards · Checkout flow', image: cardBoardScreen, href: '/work/bravo' },
  { name: 'Learning · Courses', image: learningScreen, href: '/work/nitro' },
  { name: 'Strida · Project page', image: stridaProject, href: '/work/strida' },
  { name: 'Strida · About page', image: stridaAbout, href: '/work/strida' },
];

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ onOpenShowreel }) => {
  const wallRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: wallRef, offset: ['start start', 'end end'] });
  const wallX = useTransform(scrollYProgress, [0, 1], ['0vw', '-145vw']);
  const headlineY = useTransform(scrollYProgress, [0, 0.1, 0.52, 0.76], [24, 0, 0, -24]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.1, 0.52, 0.76], [0, 1, 1, 0]);
  const headlineBlur = useTransform(scrollYProgress, [0, 0.1, 0.52, 0.76], ['blur(12px)', 'blur(0px)', 'blur(0px)', 'blur(12px)']);

  return (
    <section className="relative left-1/2 my-10 w-screen -translate-x-1/2" id="showcase">
      <div ref={wallRef} className="relative h-[205vh] md:h-[220vh]">
        <div className="sticky top-0 h-[100svh] min-h-[640px] overflow-hidden bg-[var(--bg-page)]">
          <div className="absolute inset-x-4 top-4 bottom-4 overflow-hidden rounded-[30px] border-[6px] border-white/85 bg-white shadow-[0_32px_90px_-38px_rgba(0,0,0,0.45)] dark:border-white/20 dark:bg-[#101114] md:inset-x-8 md:top-6 md:bottom-6">
            <div className="absolute inset-0 flex flex-col justify-between gap-2 overflow-hidden">
            {[0, 1].map((row) => (
                <motion.div key={row} style={{ x: wallX }} className="wall-track">
                {[...wallProjects, ...wallProjects].map((project, index) => (
                  <a
                    key={`${row}-${project.name}-${index}`}
                    href={project.href}
                    className="wall-tile group"
                    aria-label={project.name}
                  >
                    <img src={project.image} alt="" loading={index > 5 ? 'lazy' : 'eager'} />
                    <span className="wall-tile-caption">{project.name}</span>
                  </a>
                ))}
                </motion.div>
            ))}
            </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-[72%] bg-linear-to-b from-black/78 via-black/35 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/10 via-transparent to-black/10" />

          <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 pt-5 md:px-10 md:pt-7">
            <div>
              <p className="mb-2 font-serif-italic text-xl text-white/70">Selected Work</p>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/45">A moving archive · 2021—2026</p>
            </div>
            <button
              onClick={onOpenShowreel}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-orange-100"
            >
              <Folder className="size-4" />
              Archive
            </button>
          </div>

          <motion.div
            style={{ y: headlineY, opacity: headlineOpacity, filter: headlineBlur }}
            className="pointer-events-none absolute inset-x-6 top-1/2 z-20 mx-auto flex max-w-5xl -translate-y-1/2 flex-col items-center text-center md:inset-x-12"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Independent design partner</p>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-7xl">
              Good work should move people.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Thoughtful digital experiences, made to feel clear, useful, and unmistakably yours.
            </p>
            <a href="/#case-studies" className="pointer-events-auto mt-7 inline-flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white">
              Explore selected projects <ArrowDown className="size-4" />
            </a>
          </motion.div>

          <div className="absolute bottom-8 left-6 right-6 z-20 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.15em] text-white/45 md:left-12 md:right-12">
            <span>Designed with intent</span>
            <span>Scroll to travel</span>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};