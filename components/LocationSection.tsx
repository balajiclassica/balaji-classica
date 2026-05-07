"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Train,
  Hospital,
  GraduationCap,
  ShoppingBag,
  ExternalLink
} from "lucide-react";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/Diva+Manpada+Road+Usarghar+Dombivli+East+Maharashtra+421201";

const CONNECTIVITY = [
  {
    title: "Connectivity",
    icon: Train,
    items: [
      "Dativali Rly Station – 4 mins",
      "Kalyan-Shilphata Road – 8 mins",
      "Diva Rly Station – 12 mins",
      "Dombivli Rly Station – 18 mins"
    ]
  },
  {
    title: "Prominent Hospitals",
    icon: Hospital,
    items: [
      "Orion Multispeciality – 15 mins",
      "Icon Hospital – 15 mins",
      "BAJ RR Hospital – 15 mins",
      "AIMS Hospital – 15 mins"
    ]
  },
  {
    title: "Reputed Schools",
    icon: GraduationCap,
    items: [
      "Ryan International – 4 mins",
      "Ira Global School – 10 mins",
      "NES International – 12 mins",
      "Vidya Niketan – 15 mins"
    ]
  },
  {
    title: "Retail & Recreation",
    icon: ShoppingBag,
    items: [
      "R Galleria Mall – 5 mins",
      "Xperia Mall – 6 mins",
      "City Mall – 15 mins",
      "DMart – 20 mins"
    ]
  },
];

export default function LocationSection() {
  const openGoogleMaps = () => {
    window.open(GOOGLE_MAPS_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="location" className="py-20 md:py-28 bg-bg overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-primary/60 text-xs font-body uppercase tracking-[0.3em] block mb-3">
            Strategic Location
          </span>
          <h2 
            className="text-3xl md:text-5xl text-primary mb-4 leading-tight normal-case tracking-normal font-display"
            style={{ fontFamily: 'var(--font-el-messiri)' }}
          >
            A Unique Location That Brings the World Closer
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-[1px] bg-primary/20 w-12" />
            <div className="w-2 h-2 rotate-45 border border-primary/30" />
            <div className="h-[1px] bg-primary/20 w-12" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Side: Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-xl overflow-hidden shadow-xl min-h-[400px] lg:min-h-[550px] group cursor-pointer"
            onClick={openGoogleMaps}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2229905753275!2d73.0687455752081!3d19.185460382041825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf003fabce55%3A0x477893cd4f8081b2!2sBalaji%20Classica%20Dombivli!5e0!3m2!1sen!2sin!4v1778095252345!5m2!1sen!2sin"
              className="w-full h-full border-0 pointer-events-none"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map Overlay - Click to open */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
              <div className="bg-white shadow-lg px-5 py-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                <ExternalLink size={16} className="text-primary" />
                <span className="text-primary text-xs font-display uppercase tracking-widest">
                  View on Google Maps
                </span>
              </div>
            </div>

            {/* Address badge */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white/95 backdrop-blur-md rounded-lg px-5 py-3.5 flex items-center gap-3 shadow-lg">
                <MapPin className="text-primary flex-shrink-0" size={18} />
                <p className="text-text-dark font-body text-xs md:text-sm leading-snug">
                  Balaji Classica, Diva Manpada Road, Opp. HPCL Petrol Pump, Usarghar, Dombivli (E) – 421201
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Connectivity Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {CONNECTIVITY.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary/10 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <cat.icon className="text-primary group-hover:text-white transition-colors duration-300" size={20} />
                  </div>
                  <h3 className="text-primary font-display text-sm tracking-wider uppercase">
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {cat.items.map((item, i) => (
                    <li key={i} className="text-text-body font-body text-sm flex items-start gap-2">
                      <span className="text-primary/40 mt-[2px] text-xs">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
