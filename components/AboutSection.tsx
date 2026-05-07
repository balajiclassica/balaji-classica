"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  Layers,
  Sparkles,
  Wind,
  Home,
  Maximize,
  Coffee,
  Trees
} from "lucide-react";

const FEATURES = [
  { icon: Trees, label: "5-acre Township" },
  { icon: Building2, label: "5 Neoclassical Towers of 23 Storey" },
  { icon: Layers, label: "3-Levels of Recreations & Indulgences" },
  { icon: Sparkles, label: "25+ Lifestyle Amenities" },
  { icon: Wind, label: "Well-ventilated Homes" },
  { icon: Home, label: "Vaastu Compliant Homes" },
  { icon: Maximize, label: "Uninterrupted Cityscape and Hill Views" },
  { icon: Coffee, label: "Over 20,000 sq. ft. of Clubhouse" },
];

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, x: -40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1] }
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column - Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="relative"
          >
            <div className="relative p-3 border border-primary/10 rounded-sm">
              <div className="relative overflow-hidden shadow-2xl">
                <Image
                  src="/images/aboutus.jpg"
                  alt="Balaji Classica — Premium Residences"
                  width={800}
                  height={600}
                  className="w-full h-[400px] md:h-[520px] lg:h-[580px] object-cover transition-transform duration-700"
                />
                {/* Decorative frame overlay */}
                <div className="absolute inset-4 border border-white/30 pointer-events-none" />
              </div>
              {/* External decorative frame */}
              <div className="absolute -inset-1 border border-primary/5 -z-10" />
            </div>
            {/* Decorative offset border shadow */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary/10 -z-20 hidden md:block" />
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            {/* Subtitle */}
            <span className="text-primary text-xs font-body uppercase tracking-[0.3em] mb-4 ">
              Our Integrity
            </span>

            {/* Heading */}
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-primary mb-6 leading-tight normal-case tracking-normal font-semibold font-display"
              style={{ fontFamily: 'var(--font-el-messiri)' }}
            >
              Experience the legacy of fine living
            </h2>

            {/* Descriptions */}
            <div className="space-y-5 mb-10">
              <p className="text-text-body font-body text-base md:text-lg leading-relaxed">
                Balaji Classica is a special place where luxury, lifestyle, and location blend perfectly. Shaping up at the most exclusive address, this epitome of exquisite architectural details offers meticulously designed residences that emulate opulence.
              </p>
              <p className="text-text-body font-body text-base md:text-lg leading-relaxed">
                In addition, this gated community is dotted with handpicked recreations and indulgences. It is the only development in the vicinity where unparalleled living experiences redefine urban sophistication.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="text-primary" size={16} strokeWidth={1.5} />
                  </div>
                  <span className="text-text-dark font-body text-sm leading-snug">
                    {feature.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
