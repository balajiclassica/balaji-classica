"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Eye, X, ZoomIn } from "lucide-react";

interface FloorPlan {
  type: string;
  area: string;
  image: string;
}

const PLANS: FloorPlan[] = [
  {
    type: "1 BHK Luxury",
    area: "750 Sq. Ft.",
    image: "/images/floor-plan-1.png",
  },
  {
    type: "2 BHK Premium",
    area: "1150 Sq. Ft.",
    image: "/images/floorplan-2.png",
  },
];

interface FloorPlansProps {
  isUnlocked: boolean;
  onUnlockClick: () => void;
}

export default function FloorPlans({ isUnlocked, onUnlockClick }: FloorPlansProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handlePlanClick = (image: string) => {
    if (!isUnlocked) {
      onUnlockClick();
    } else {
      setSelectedImage(image);
    }
  };

  return (
    <section id="floor-plans" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary/60 text-xs font-body uppercase tracking-[0.3em] block mb-3">
              Elite Layouts
            </span>
            <h2
              className="text-3xl md:text-5xl text-primary mb-4 leading-tight normal-case tracking-normal font-display"
              style={{ fontFamily: "var(--font-el-messiri)" }}
            >
              Architectural Excellence
            </h2>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-[1px] bg-primary/20 w-12" />
              <div className="w-2 h-2 rotate-45 border border-primary/30" />
              <div className="h-[1px] bg-primary/20 w-12" />
            </div>
          </motion.div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.7 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-primary/5 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)]">
                {/* Info Header */}
                <div className="p-6 md:p-8 border-b border-primary/5 flex items-center justify-between bg-primary/2">
                  <div>
                    <h3
                      className="text-xl md:text-2xl text-primary font-display mb-1"
                      style={{ fontFamily: "var(--font-el-messiri)" }}
                    >
                      {plan.type}
                    </h3>
                    <p className="text-primary/60 text-sm font-body tracking-wider">
                      {plan.area}
                    </p>
                  </div>

                  {!isUnlocked && (
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary/40">
                      <Lock size={18} />
                    </div>
                  )}
                </div>

                {/* Image Container */}
                <div
                  className="relative aspect-[4/3] cursor-pointer overflow-hidden group/img"
                  onClick={() => handlePlanClick(plan.image)}
                >
                  <Image
                    src={plan.image}
                    alt={plan.type}
                    fill
                    className={`object-contain p-8 transition-all duration-1000 ease-in-out ${!isUnlocked
                      ? "blur-md grayscale scale-95 opacity-50"
                      : "group-hover/img:scale-105"
                      }`}
                  />

                  {/* Locked Overlay */}
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] flex flex-col items-center justify-center p-6 text-center transition-all duration-500 group-hover:bg-primary/50">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-xl"
                      >
                        <Eye className="text-gold" size={24} />
                      </motion.div>

                      <button className="px-6 py-3 bg-white text-primary text-[10px] uppercase tracking-widest font-display font-bold rounded-full shadow-lg hover:bg-gold hover:text-white transition-all duration-300">
                        Unlock Floor Plan
                      </button>
                    </div>
                  )}

                  {/* Unlocked Hover Info */}
                  {isUnlocked && (
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-primary shadow-xl">
                        <ZoomIn size={24} />
                      </div>
                    </div>
                  )}

                  {/* Unlocked Badge */}
                  {isUnlocked && (
                    <div className="absolute top-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-lg">
                      Available
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
            >
              <X size={32} />
            </button>

            {/* Image Wrapper */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full max-w-6xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Detailed Floor Plan"
                fill
                className="object-contain"
                priority
              />

              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-[10px] uppercase tracking-[0.4em] whitespace-nowrap">
                Balaji Classica — Architectural Layout
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}