"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

interface HeroSectionProps {
  onCtaClick: () => void;
}



const letterSlide: Variants = {
  hidden: { opacity: 0, x: -50, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      delay: 0.3 + i * 0.06,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  },
});

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const years = useCountUp(25);
  const sqft = useCountUp(2);
  const projects = useCountUp(70);
  const families = useCountUp(7200);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end">
      {/* Background with slow zoom — replays every time section comes into view */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.18, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full h-full"
        >
          {/* Desktop image */}
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat hidden md:block"
            style={{ backgroundImage: "url('/images/banner/desk.jpg')" }}
          />
          {/* Mobile image */}
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat md:hidden"
            style={{ backgroundImage: "url('/images/banner/mob.jpg')" }}
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-20 md:pb-16 lg:pb-24">
        <div className="w-full max-w-2xl">
          {/* H1 for SEO */}
          <h1 className="sr-only">
            Balaji Classica — Lavish 1 & 2 BHK Residences in Dombivli East
          </h1>

          {/* Balaji Classica — unified hero heading */}
          <motion.div
            className="overflow-hidden mb-2"
          >
            <div className="flex flex-wrap">
              {"Balaji Classica".split("").map((char, i) => (
                <motion.span
                  key={`bc-${i}`}
                  custom={i}
                  variants={letterSlide}
                  initial="hidden"
                  animate="visible"
                  className="font-display leading-tight font-bold text-white"
                  style={{
                    fontSize: "clamp(2.8rem, 7.5vw, 5.8rem)",
                    display: "inline-block",
                    whiteSpace: char === " " ? "pre" : "normal",
                    letterSpacing: "0.02em",
                    fontFamily: 'var(--font-el-messiri)'
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Accent Line with glow pulse */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
            className="h-[2px] bg-gradient-to-r from-gold via-gold/80 to-transparent mt-3 mb-6 w-20"
            style={{ transformOrigin: "left" }}
          />

          {/* Tagline & Location */}
          <motion.div
            variants={fadeUp(1.0)}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <p
              className="text-white/90 text-lg md:text-xl font-display tracking-wider mb-2"
              style={{ fontFamily: 'var(--font-el-messiri)' }}
            >
              Dombivli (E)
            </p>
            <p className="text-white/55 text-sm md:text-base leading-relaxed max-w-md font-body">
              Lavish 1 & 2 Bed Residences crafted with timeless elegance.
              An unmatched legacy of sheltering dreams and shaping lifestyles.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={fadeUp(1.1)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10 border-t border-white/10 pt-8"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-display text-white">{years}+</span>
              <span className="text-[16px] text-white/40 font-body">Years Legacy</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display text-white">{sqft}+ M</span>
              <span className="text-[16px] text-white/40 font-body">Sq. Ft. Dev</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display text-white">{projects}+</span>
              <span className="text-[16px] text-white/40 font-body">Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-display text-white">{families}+</span>
              <span className="text-[16px] text-white/40 font-body">Families</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp(1.25)}
            initial="hidden"
            animate="visible"
            className="flex flex-row flex-wrap items-center gap-4"
          >
            <button
              onClick={onCtaClick}
              className="luxury-button"
            >
              Book A Site Visit
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 [writing-mode:vertical-lr]">Scroll</span>
        <motion.div
          animate={{ height: ["0%", "100%", "0%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-white/30"
          style={{ height: 64 }}
        />
      </motion.div>
    </section>
  );
}
