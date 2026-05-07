"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AMENITIES = [
  { name: "Fitness Centre", img: "/images/amenities/Gym.tif" },
  { name: "Outdoor Sports", img: "/images/amenities/outdoor games.jpg" },
  { name: "Mini Theatre", img: "/images/amenities/Theater.tif" },
  { name: "Grand Clubhouse", img: "/images/amenities/reception_club.tif" },
  { name: "Panoramic Views", img: "/images/amenities/view_09.jpg" },
  { name: "Swimming Pool", img: null },
  { name: "Kids Play Area", img: null },
  { name: "Jogging Track", img: null },
  { name: "Meditation Garden", img: null },
  { name: "Party Hall", img: null },
  { name: "Salon & Spa", img: null },
  { name: "Rooftop Garden", img: null },
];

// Only amenities with images for the carousel
const CAROUSEL_ITEMS = AMENITIES.filter((a) => a.img !== null);
// Duplicate for seamless infinite scroll
const MARQUEE_ITEMS = [...CAROUSEL_ITEMS, ...CAROUSEL_ITEMS];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="py-20 md:py-28 bg-primary overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* <span className="text-white/80 text-sm font-body block mb-3">
            Exclusive Access
          </span> */}
          <h2 
            className="text-3xl md:text-5xl text-white mb-4 leading-tight normal-case tracking-normal font-display"
            style={{ fontFamily: 'var(--font-el-messiri)' }}
          >
            Amenities
          </h2>
          <p className="text-white/60 font-body text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            A world of recreation designed to complement your lifestyle. From wellness to work, everything is within your reach.
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="animate-marquee flex gap-6 w-max">
          {MARQUEE_ITEMS.map((amenity, index) => (
            <div
              key={`${amenity.name}-${index}`}
              className="relative flex-shrink-0 w-[280px] h-[320px] md:w-[320px] md:h-[380px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Image or Gradient Placeholder */}
              {amenity.img ? (
                <Image
                  src={amenity.img}
                  alt={amenity.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="320px"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary-light to-primary-dark" />
              )}

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Label */}
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-block bg-white/90 text-primary px-4 py-2 text-xs font-display">
                  {amenity.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom amenities list */}
      <div className="container mx-auto px-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {AMENITIES.map((amenity, index) => (
            <span
              key={index}
              className="text-white/50 text-[11px] md:text-xs font-body border border-white/10 px-4 py-2 hover:border-white/30 hover:text-white/80 transition-all duration-300"
            >
              {amenity.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
