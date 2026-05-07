"use client";

import React from "react";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

export default function LegacySection() {
  const years = useCountUp(25);
  const sqft = useCountUp(2);
  const projects = useCountUp(70);
  const families = useCountUp(7200);

  return (
    <section className="py-12 bg-black border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Stat 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-3xl md:text-4xl font-display text-gold mb-1" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              {years}+
            </span>
            <span className="text-xs md:text-sm text-white/50 uppercase tracking-[0.2em] font-body">
              Years Legacy
            </span>
          </motion.div>

          {/* Stat 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-3xl md:text-4xl font-display text-gold mb-1" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              {sqft}+ M
            </span>
            <span className="text-xs md:text-sm text-white/50 uppercase tracking-[0.2em] font-body">
              Sq. Ft. Dev
            </span>
          </motion.div>

          {/* Stat 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-3xl md:text-4xl font-display text-gold mb-1" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              {projects}+
            </span>
            <span className="text-xs md:text-sm text-white/50 uppercase tracking-[0.2em] font-body">
              Projects
            </span>
          </motion.div>

          {/* Stat 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-3xl md:text-4xl font-display text-gold mb-1" style={{ fontFamily: 'var(--font-el-messiri)' }}>
              {families}+
            </span>
            <span className="text-xs md:text-sm text-white/50 uppercase tracking-[0.2em] font-body">
              Families
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
