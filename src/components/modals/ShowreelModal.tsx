import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import work1 from '../../assets/work_detail_1.jpg';
import work2 from '../../assets/work_detail_2.jpg';
import work3 from '../../assets/work_detail_3.jpg';
import work4 from '../../assets/work_detail_4.jpg';
import work5 from '../../assets/work_detail_5.jpg';
import work6 from '../../assets/work_detail_6.jpg';
import work7 from '../../assets/work_detail_7.png';
import work8 from '../../assets/work_detail_8.jpg';
import work9 from '../../assets/work_detail_9.jpg';
import work10 from '../../assets/work_detail_10.jpg';
import work11 from '../../assets/work_detail_11.png';
import work12 from '../../assets/work_detail_12.png';
import testimonialWork1 from '../../assets/testimonial_1.jpg';
import testimonialWork2 from '../../assets/testimonial_2.jpg';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const works = [
    { title: 'Portfolio system', category: 'Portfolio · Art direction', img: work1 },
    { title: 'Bravo', category: 'Product · Web', img: work2 },
    { title: 'Nitro', category: 'Digital · Mobile', img: work3 },
    { title: 'Fargo', category: 'SaaS · Web app', img: work4 },
    { title: 'Concierge', category: 'Product · Fintech', img: work5 },
    { title: 'Wallet', category: 'Product · Interface', img: work6 },
    { title: 'Hobby Point', category: 'Mobile · Community', img: work7 },
    { title: 'Saver', category: 'Finance · Dashboard', img: work8 },
    { title: 'Brand website', category: 'Brand · Website', img: work9 },
    { title: 'Learning platform', category: 'Product · Interface', img: work10 },
    { title: 'Visual identity', category: 'Brand · Art direction', img: work11 },
    { title: 'Journey', category: 'Product · Web', img: work12 },
    { title: 'Playground', category: 'Mobile · Exploration', img: testimonialWork1 },
    { title: 'Longboarding', category: 'Mobile · Community', img: testimonialWork2 },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl bg-white dark:bg-[#14151a] rounded-[36px] p-8 md:p-12 shadow-2xl z-10 border border-black/8 dark:border-white/10 max-h-[90vh] overflow-y-auto halo-card"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block mb-1">
              Design Archive
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#111216] dark:text-white mb-8">
              Selected Design Works (2024–2026)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {works.map((work, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl overflow-hidden bg-[#181920] border border-black/8 dark:border-white/10 hover:border-orange-500 transition-colors"
                >
                  <img
                    src={work.img}
                    alt={`${work.title} project preview`}
                    loading="lazy"
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-4 text-white">
                    <h4 className="font-bold text-base">{work.title}</h4>
                    <p className="text-xs text-white/50">{work.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
