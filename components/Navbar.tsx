"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollNav } from "@/hooks/useScrollNav";

interface NavbarProps {
  onEnquireClick: () => void;
}

const NAV_LINKS = [
  // { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Amenities", href: "#amenities" },
  { name: "Location", href: "#location" },
  { name: "Floor Plan", href: "#floorplans" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onEnquireClick }: NavbarProps) {
  const isScrolled = useScrollNav();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
        ? "bg-white/95 backdrop-blur-md py-2 shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
        : "bg-gradient-to-b from-black/40 to-transparent py-5"
        } ${isMobileMenuOpen ? "!bg-primary" : ""}`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 relative z-[101]">
          <Image
            src="/images/logo.png"
            alt="Balaji Classica Logo"
            width={120}
            height={60}
            className={`h-auto transition-all duration-500 ${isScrolled || isMobileMenuOpen ? "w-[100px] md:w-[120px] brightness-0 invert" : "w-[90px] md:w-[110px] brightness-0 invert"
              }`}
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm tracking-widest font-body font-semibold transition-colors duration-300 relative group ${isScrolled
                    ? "text-primary hover:text-primary-dark"
                    : "text-white/90 hover:text-white"
                    }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-300 ${isScrolled ? "bg-primary" : "bg-white"
                      }`}
                  />
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={onEnquireClick}
            className={`px-6 py-3 text-xs uppercase tracking-widest font-display transition-all duration-300 cursor-pointer ${isScrolled
              ? "bg-primary text-white hover:bg-primary-dark"
              : "bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/25"
              }`}
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors relative z-[101] ${isScrolled || isMobileMenuOpen ? "text-white" : "text-white"
            }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 bg-primary z-[99] flex flex-col pt-24"
          >
            {/* Mobile Nav Links */}
            <div className="flex-1 flex flex-col justify-center px-8">
              <ul className="flex flex-col gap-8 mb-12">
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white text-3xl font-display uppercase tracking-widest hover:text-gold transition-colors flex items-center gap-6"
                    >
                      <span className="text-gold/40 text-xs font-body">0{index + 1}</span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onEnquireClick();
                }}
                className="w-full py-5 bg-gold text-white font-display uppercase tracking-widest text-sm hover:bg-gold-muted transition-colors shadow-xl"
              >
                Enquire Now
              </motion.button>
            </div>

            {/* Mobile Footer */}
            <div className="p-8 border-t border-white/5">
              <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] text-center">
                Balaji Classica — Dombivli (E)
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
