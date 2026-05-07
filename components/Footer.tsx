"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-24 mb-14">

          {/* Column 1 - Brand & Legal */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Image
                src="/images/logo.png"
                alt="Balaji Classica Logo"
                width={120}
                height={60}
                className="h-auto w-[130px] brightness-0 invert opacity-90 mb-6"
              />
              <p className="text-white/50 font-body text-sm leading-relaxed mb-8">
                Experience the legacy of fine living at Balaji Classica — meticulously crafted residences in the heart of Dombivli (E).
              </p>

              {/* MahaRERA Info directly below */}
              <div className="pt-4 border-t border-white/5">
                <p className="text-white/30 text-[10px] uppercase tracking-widest font-body mb-2">MahaRERA No.</p>
                <p className="text-white/70 font-body text-sm font-semibold tracking-wider mb-1">P51700055289</p>
                <a
                  href="https://maharera.mahaonline.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-white/60 text-xs font-body transition-colors inline-block"
                >
                  maharera.mahaonline.gov.in ↗
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:pl-12">
            <h4 className="text-sm font-display text-white/90 tracking-widest uppercase mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "#" },
                { name: "About", href: "#about" },
                { name: "Amenities", href: "#amenities" },
                { name: "Location", href: "#location" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-white/80 text-sm font-body transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-white/40 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-sm font-display text-white/90 tracking-widest uppercase mb-8">Contact Us</h4>
            <div className="space-y-6">
              <div>
                <p className="text-white/30 text-[10px] uppercase tracking-widest font-body mb-2">Lounge Address</p>
                <p className="text-white/60 font-body text-sm leading-relaxed">
                  Balaji Classica, Diva Manpada Road, Opp. HPCL Petrol Pump, Usarghar, Dombivli (E) – 421201
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                <div>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest font-body mb-1">Call Us</p>
                  <p className="text-white/60 font-body text-sm tracking-wide">+91 8451006431</p>
                </div>
                <div>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest font-body mb-1">Email Us</p>
                  <p className="text-white/60 font-body text-sm">info@sslifespaces.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>



        {/* Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6">
          <p className="text-[10px] text-white/30 font-body uppercase tracking-widest">
            © {currentYear} SS Life Spaces. All Rights Reserved.
          </p>
          <p className="text-[10px] text-white/30 font-body uppercase tracking-widest">
            Designed by{" "}
            <Link
              href="https://www.socialpulseagency.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white/80 transition-colors duration-300"
            >
              Social Pulse Agency
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
