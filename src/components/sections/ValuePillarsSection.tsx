import React from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Monitor,
  TrendingUp,
  PieChart,
  Lightbulb,
  Settings,
  Sparkles,
  Box,
  ScanFace,
} from 'lucide-react';

interface Pillar {
  icon: React.ReactNode;
  label: string;
}

const leftPillars: Pillar[] = [
  { icon: <Smartphone className="w-5 h-5 text-black/60 dark:text-white/60" />, label: 'Product UX & UI' },
  { icon: <TrendingUp className="w-5 h-5 text-black/60 dark:text-white/60" />, label: 'Responsive web design' },
  { icon: <Lightbulb className="w-5 h-5 text-black/60 dark:text-white/60" />, label: 'Visual identity' },
  { icon: <Sparkles className="w-5 h-5 text-black/60 dark:text-white/60" />, label: 'Prototypes & interaction' },
  { icon: <ScanFace className="w-5 h-5 text-black/60 dark:text-white/60" />, label: 'Developer handoff' },
];

const rightPillars: Pillar[] = [
  { icon: <Monitor className="w-5 h-5 text-black/60 dark:text-white/60" />, label: 'Websites & landing pages' },
  { icon: <PieChart className="w-5 h-5 text-black/60 dark:text-white/60" />, label: 'Design systems' },
  { icon: <Settings className="w-5 h-5 text-black/60 dark:text-white/60" />, label: 'Direct collaboration' },
  { icon: <Box className="w-5 h-5 text-black/60 dark:text-white/60" />, label: 'Scoped project delivery' },
];

export const ValuePillarsSection: React.FC = () => {
  return (
    <section className="relative my-32 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
        {/* Left Column */}
        <div className="flex flex-col">
          {leftPillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              whileHover={{ x: 6 }}
              className="group relative flex items-center gap-4 py-5 border-b border-black/8 dark:border-white/10 cursor-default"
            >
              <div className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                {item.icon}
              </div>
              <span className="text-base font-medium text-[#111216]/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                {item.label}
              </span>
              {/* Hairline extension line */}
              <div className="flex-1 h-[1px] bg-black/6 dark:bg-white/8 ml-2 transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
          {rightPillars.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 + 0.1, duration: 0.4 }}
              whileHover={{ x: 6 }}
              className="group relative flex items-center gap-4 py-5 border-b border-black/8 dark:border-white/10 cursor-default"
            >
              <div className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                {item.icon}
              </div>
              <span className="text-base font-medium text-[#111216]/80 dark:text-white/80 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                {item.label}
              </span>
              <div className="flex-1 h-[1px] bg-black/6 dark:bg-white/8 ml-2 transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
