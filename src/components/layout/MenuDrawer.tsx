import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { CosmicButton } from '../common/CosmicButton';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const links = [
    { num: '01', label: 'Recent Work', href: '/#showcase' },
    { num: '02', label: 'How it Works', href: '/#process' },
    { num: '03', label: 'Case Studies', href: '/#case-studies' },
    { num: '04', label: 'About Buildora', href: '/#about' },
    { num: '05', label: 'Services & Scope', href: '/#pricing' },
    { num: '06', label: 'FAQ', href: '/#faq' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/45 backdrop-blur-md"
          />

          {/* Drawer Body */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            className="relative w-full max-w-md h-full bg-white dark:bg-[#121318] p-10 flex flex-col justify-between shadow-2xl z-10 border-l border-black/8 dark:border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="font-extrabold text-lg text-[#111216] dark:text-white">
                Buildora Design
              </span>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-6 my-auto py-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.num}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="group flex items-center gap-4 text-2xl font-bold text-[#111216] dark:text-white hover:text-[#ea580c] transition-colors"
                >
                  <span className="text-xs font-mono font-medium text-black/35 dark:text-white/35 group-hover:text-[#ea580c]">
                    {link.num}
                  </span>
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </nav>

            {/* Footer */}
            <div className="flex flex-col gap-4">
              <p className="text-xs text-[#5d6069] dark:text-[#9ea2ae]">
                 Have a product, website, or identity to shape?
              </p>
              <CosmicButton
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                size="md"
                withHalo={true}
              >
                Discuss a Project
              </CosmicButton>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
