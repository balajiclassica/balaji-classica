"use client";

import { motion } from "framer-motion";
import { 
  Plane, 
  Route, 
  TrainFront, 
  Landmark, 
  Mountain, 
  ArrowRight 
} from "lucide-react";

const INFRA_CARDS = [
  {
    title: "Navi Mumbai International Airport",
    desc: "30-min drive. One of the largest greenfield airports in the world.",
    icon: Plane,
  },
  {
    title: "Multimodal Corridor",
    desc: "126 km long, Virar to Alibaug. Connecting major economic hubs.",
    icon: Route,
  },
  {
    title: "Super Wide Roads",
    desc: "30m–60m ultra-wide roads mandated for smooth urban transit.",
    icon: ArrowRight,
  },
  {
    title: "Mumbai Metro Line 12 & 14",
    desc: "Connect to Kalyan, Ambernath, Kanjurmarg with high-speed metro.",
    icon: TrainFront,
  },
  {
    title: "Mothagaon–Mankoli Bridge",
    desc: "980m 6-lane bridge over Ulhas Creek, reducing travel time to Thane.",
    icon: Landmark,
  },
  {
    title: "Airoli-Katai Tunnel Road",
    desc: "Bypass Shilphata, Mahape, Mumbra for direct Navi Mumbai access.",
    icon: Mountain,
  }
];

export default function InfraSection() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-primary/60 text-sm font-body block mb-3">
            Infrastructure
          </span>
          <h2 className="text-3xl md:text-5xl text-primary mb-4 leading-tight normal-case tracking-normal font-display">
            A Suburb With Fast-Paced Progress
          </h2>
          <p className="text-text-body font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Dombivli is rapidly evolving into a pivotal hub within the Mumbai Metropolitan Region. Its strategic location seamlessly connects Mumbai, Navi Mumbai, and Thane.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[1px] bg-primary/20 w-12" />
            <div className="w-2 h-2 rotate-45 border border-primary/30" />
            <div className="h-[1px] bg-primary/20 w-12" />
          </div>
        </motion.div>

        {/* Infra Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INFRA_CARDS.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-xl p-7 shadow-sm hover:shadow-lg transition-all duration-500 border border-transparent hover:border-primary/10 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <card.icon 
                  className="text-primary group-hover:text-white transition-colors duration-300" 
                  size={24} 
                  strokeWidth={1.5} 
                />
              </div>
              <h3 className="text-primary font-display text-sm">
                {card.title}
              </h3>
              <p className="text-text-body font-body text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
