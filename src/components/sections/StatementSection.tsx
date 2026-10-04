import React from 'react';
import { motion } from 'framer-motion';

// ── Exact Hanzo Framer chip colors from live DOM inspection ──────────────────
interface ChipItem {
  id: string;
  label: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
  rotation: number;
}

// SVG icons matching the Framer originals
const GridIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor" />
    <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" />
    <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" />
    <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" />
  </svg>
);

const MobileIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <rect x="4" y="1" width="8" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="8" cy="12.5" r="0.75" fill="currentColor" />
  </svg>
);

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <line x1="10.5" y1="10.5" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const WaveIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M1 8 C3 4, 5 4, 7 8 C9 12, 11 12, 13 8 C14 5.5, 15 5, 15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

const LayersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="5" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <rect x="4" y="3" width="8" height="2" rx="1" fill="currentColor" opacity="0.6" />
  </svg>
);

const TargetIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="8" cy="8" r="1" fill="currentColor" />
  </svg>
);

const leftChips: ChipItem[] = [
  {
    id: 'design-systems',
    label: 'Design systems',
    iconBg: '#FF5E00',       // Exact Framer orange
    iconColor: '#fff3c2',    // warm cream
    icon: <GridIcon />,
    rotation: -4,
  },
  {
    id: 'ui-ux',
    label: 'UI/UX',
    iconBg: '#474747',       // Exact Framer dark charcoal
    iconColor: '#baFFd0',    // mint green
    icon: <MobileIcon />,
    rotation: 5,
  },
  {
    id: 'research',
    label: 'Research',
    iconBg: '#05A9FF',       // Exact Framer sky blue
    iconColor: '#f8ffbf',    // pale yellow
    icon: <SearchIcon />,
    rotation: -3,
  },
];

const rightChips: ChipItem[] = [
  {
    id: 'animation',
    label: 'Animation',
    iconBg: '#52FF69',       // Exact Framer bright green
    iconColor: '#3224FF',    // electric indigo
    icon: <WaveIcon />,
    rotation: 4,
  },
  {
    id: 'prototyping',
    label: 'Prototyping',
    iconBg: '#FF45AB',       // Exact Framer hot pink
    iconColor: '#c9fFFB',    // light cyan
    icon: <LayersIcon />,
    rotation: -5,
  },
  {
    id: 'strategy',
    label: 'Strategy',
    iconBg: '#FFD500',       // Exact Framer canary yellow
    iconColor: '#660080',    // deep purple
    icon: <TargetIcon />,
    rotation: 3,
  },
];

const statementWords = [
  'We', 'help', 'startups', 'and', 'enterprise', 'to', 'establish', 'an',
  'emotional', 'connection', 'between', 'their', 'products', 'and', 'happy', 'engaged', 'customers.',
];

// Chip component — isolated so drag state doesn't mess with parent variants
const Chip: React.FC<{ chip: ChipItem; direction: 'left' | 'right'; index: number }> = ({
  chip,
  direction,
  index,
}) => {
  const offset = direction === 'left' ? -320 : 320;
  return (
    <motion.div
      drag
      dragSnapToOrigin
      dragElastic={0.35}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 25 }}
      whileHover={{ scale: 1.06 }}
      whileDrag={{ scale: 1.12, zIndex: 60, cursor: 'grabbing' }}
      variants={{
        hidden: { x: offset, opacity: 0, scale: 0.75 },
        visible: {
          x: 0,
          opacity: 1,
          scale: 1,
          transition: {
            type: 'spring',
            stiffness: 120,
            damping: 18,
            delay: index * 0.08,
          },
        },
      }}
      style={{ rotate: chip.rotation }}
      className="flex items-center gap-2.5 py-2 pl-2 pr-5 bg-white dark:bg-[#1a1b22] rounded-full select-none cursor-grab active:cursor-grabbing halo-chip"
      title="Drag me!"
    >
      {/* Icon box — matches exact Framer square icon badge */}
      <span
        className="w-7 h-7 flex-shrink-0 rounded-lg flex items-center justify-center"
        style={{ backgroundColor: chip.iconBg, color: chip.iconColor }}
      >
        {chip.icon}
      </span>
      <span className="text-[13px] font-medium tracking-tight whitespace-nowrap text-black dark:text-white leading-none">
        {chip.label}
      </span>
    </motion.div>
  );
};

export const StatementSection: React.FC = () => {
  return (
    <section className="relative my-24 py-10 w-full" id="statement">
      {/* Editorial Pre-header */}
      <div className="flex items-center justify-center gap-5 mb-10">
        <span className="w-14 h-[1px] bg-black/15 dark:bg-white/15" />
        <span className="font-serif-italic text-xl text-black/45 dark:text-white/45">Hello!</span>
        <span className="w-14 h-[1px] bg-black/15 dark:bg-white/15" />
      </div>

      {/* Parent motion.div controls the whileInView trigger for ALL children */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.08 }}
        className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-4"
      >
        {/* Left Chips Column */}
        <div className="flex max-w-full flex-row flex-wrap items-center justify-center gap-4 lg:flex-col lg:items-end lg:gap-8 lg:justify-center flex-shrink-0 z-20">
          {leftChips.map((chip, i) => (
            <Chip key={chip.id} chip={chip} direction="left" index={i} />
          ))}
        </div>

        {/* Centre Statement Text */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.45 }}
          className="max-w-2xl px-4 text-center text-2xl font-normal leading-[1.42] tracking-[-0.02em] text-[#111216] select-none sm:text-3xl md:text-[34px] lg:text-[38px] dark:text-white"
        >
          {statementWords.map((word, index) => {
            const isEmphasis = word === 'emotional' || word === 'connection';
            return (
              <motion.span
                key={`${word}-${index}`}
                variants={{
                  hidden: { opacity: 0.24, filter: 'blur(7px)', y: 5 },
                  visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
                }}
                transition={{ duration: 0.42, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}
                className={`mr-[0.28em] inline-block ${isEmphasis ? 'font-serif-italic text-orange-600 dark:text-orange-400' : ''}`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.p>

        {/* Right Chips Column */}
        <div className="flex max-w-full flex-row flex-wrap items-center justify-center gap-4 lg:flex-col lg:items-start lg:gap-8 lg:justify-center flex-shrink-0 z-20">
          {rightChips.map((chip, i) => (
            <Chip key={chip.id} chip={chip} direction="right" index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
