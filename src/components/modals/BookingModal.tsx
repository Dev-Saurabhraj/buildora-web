import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CosmicButton } from '../common/CosmicButton';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [selectedSlot, setSelectedSlot] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', notes: '' });

  const slots = [
    'Product & UX',
    'Website / landing page',
    'Brand identity',
    'Something else',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (_) {}
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', company: '', notes: '' });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white dark:bg-[#14151a] rounded-[32px] p-8 md:p-10 shadow-2xl z-10 border border-black/8 dark:border-white/10 halo-card overflow-hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block mb-1">
                  Buildora · Freelance design
                </span>
                <h3 className="text-2xl font-extrabold text-[#111216] dark:text-white mb-2">
                  Tell me about your project
                </h3>
                <p className="text-xs text-[#5d6069] dark:text-[#9ea2ae] mb-6">
                  Share a few details about what you’re building. We can use them to shape a practical scope and next step.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#111216] dark:text-white">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-[#1c1d24] border border-black/8 dark:border-white/10 rounded-xl text-sm text-[#111216] dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#111216] dark:text-white">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@startup.io"
                        className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-[#1c1d24] border border-black/8 dark:border-white/10 rounded-xl text-sm text-[#111216] dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                      <label className="text-xs font-semibold text-[#111216] dark:text-white">Company or project</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Mobile app redesign"
                      className="w-full px-3.5 py-2.5 bg-gray-50 dark:bg-[#1c1d24] border border-black/8 dark:border-white/10 rounded-xl text-sm text-[#111216] dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#111216] dark:text-white">What kind of support do you need?</label>
                    <div className="grid grid-cols-2 gap-2">
                      {slots.map((slot, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedSlot(idx)}
                          className={`p-2 rounded-xl text-[11px] font-semibold transition-all border cursor-pointer ${
                            selectedSlot === idx
                              ? 'bg-black text-white dark:bg-white dark:text-black border-transparent shadow-sm'
                              : 'bg-gray-50 dark:bg-[#1c1d24] text-gray-700 dark:text-gray-300 border-black/8 dark:border-white/10 hover:border-black/30'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#111216] dark:text-white">Project Goals (Optional)</label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="What are you trying to improve, clarify, or launch?"
                      className="w-full px-3.5 py-2 bg-gray-50 dark:bg-[#1c1d24] border border-black/8 dark:border-white/10 rounded-xl text-sm text-[#111216] dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <CosmicButton size="md" withHalo={true} className="w-full">
                      Send Project Enquiry
                    </CosmicButton>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="text-2xl font-bold text-[#111216] dark:text-white">
                  Thanks for sharing your project.
                </h4>
                <p className="text-xs text-[#5d6069] dark:text-[#9ea2ae] max-w-xs mx-auto leading-relaxed">
                  The next step is to agree on a clear scope, timeline, and deliverables.
                </p>
                <div className="pt-2">
                  <CosmicButton onClick={handleClose} size="sm" withHalo={true}>
                    Done
                  </CosmicButton>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
