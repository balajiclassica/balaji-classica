"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  { id: 1, src: "https://picsum.photos/seed/arch1/800/1000", alt: "Architectural View 1" },
  { id: 2, src: "https://picsum.photos/seed/int1/1000/800", alt: "Interior View 1" },
  { id: 3, src: "https://picsum.photos/seed/arch2/800/800", alt: "Architectural View 2" },
  { id: 4, src: "https://picsum.photos/seed/int2/800/1200", alt: "Interior View 2" },
  { id: 5, src: "https://picsum.photos/seed/arch3/1200/800", alt: "Architectural View 3" },
  { id: 6, src: "https://picsum.photos/seed/int3/800/800", alt: "Interior View 3" },
];

export default function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % IMAGES.length);
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + IMAGES.length) % IMAGES.length);
  };

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-white mb-4">A GLIMPSE OF GRANDEUR</h2>
          <div className="section-ornament">
            <span className="ornament-symbol">⊡</span>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-500">
                  <Maximize2 size={32} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors"
            >
              <X size={32} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 md:left-10 text-white hover:text-gold transition-colors"
            >
              <ChevronLeft size={48} />
            </button>

            <motion.div
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-full flex items-center justify-center"
            >
              <Image
                src={IMAGES[selectedImageIndex].src}
                alt={IMAGES[selectedImageIndex].alt}
                fill
                className="object-contain shadow-2xl"
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center text-white font-body text-lg">
                {IMAGES[selectedImageIndex].alt}
              </div>
            </motion.div>

            <button
              onClick={nextImage}
              className="absolute right-4 md:right-10 text-white hover:text-gold transition-colors"
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
