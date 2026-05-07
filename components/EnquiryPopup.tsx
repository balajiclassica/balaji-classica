"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

interface EnquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function EnquiryPopup({ isOpen, onClose, onSuccess }: EnquiryPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-[9998] backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[9999] pointer-events-none p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="w-full max-w-md max-h-[90vh] overflow-y-auto pointer-events-auto relative scrollbar-hide rounded-xl shadow-2xl"
            >
              {/* Gold accent top line */}
              <div className="h-1 bg-gradient-to-r from-primary via-gold-muted to-primary w-full rounded-t-xl" />

              {/* Content */}
              <div className="bg-primary rounded-b-xl">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all z-10 cursor-pointer"
                >
                  <X size={16} />
                </button>

                <div className="p-8 md:p-10">
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-white/40 text-[10px] font-body uppercase tracking-[0.3em] block mb-2">
                        Balaji Classica
                      </span>
                      <h2 
                        className="text-2xl md:text-3xl text-white mb-3 normal-case tracking-normal font-display"
                        style={{ fontFamily: 'var(--font-el-messiri)' }}
                      >
                        Book Your Site Visit
                      </h2>
                      <div className="flex items-center justify-center gap-4 mb-3">
                        <div className="h-[1px] bg-white/15 flex-1 max-w-[50px]" />
                        <div className="w-1.5 h-1.5 rotate-45 border border-white/20" />
                        <div className="h-[1px] bg-white/15 flex-1 max-w-[50px]" />
                      </div>
                      <p className="text-white/50 font-body text-sm tracking-wide">
                        Get exclusive pricing, floor plans & offers
                      </p>
                    </motion.div>
                  </div>

                  <EnquiryForm variant="dark" onSuccess={onSuccess} />
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
