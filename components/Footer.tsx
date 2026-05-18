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

              {/* Social Media Icons */}
              <div className="pt-4 border-t border-white/5">
                <p className="text-white/30 text-[10px] uppercase tracking-widest font-body mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/balajiclassica.co/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/balajiclassica.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@balajiclassicabysslifespaces?si=5NztOTs9EW7aUxrx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>



        {/* Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6">
          <p className="text-[10px] text-white/30 font-body uppercase tracking-widest text-center sm:text-left">
            © {currentYear} SS Life Spaces. All Rights Reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-[10px] text-white/30 font-body uppercase tracking-widest text-center sm:text-right">
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
            <div className="flex items-center gap-3">
              <Link
                href="https://www.instagram.com/socialpulseagency.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white/80 transition-colors duration-300"
                aria-label="Social Pulse Agency Instagram"
              >
                <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/socialpulseagency.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white/80 transition-colors duration-300"
                aria-label="Social Pulse Agency Facebook"
              >
                <svg className="w-[14px] h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
