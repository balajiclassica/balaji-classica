"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import LocationSection from "@/components/LocationSection";
import FloorPlans from "@/components/FloorPlans";
import LegacySection from "@/components/LegacySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import EnquiryPopup from "@/components/EnquiryPopup";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    // Check if previously unlocked
    const unlocked = localStorage.getItem("floorplans_unlocked") === "true";
    if (unlocked) setIsUnlocked(true);

    // Auto-trigger popup after 10 seconds
    const timer = setTimeout(() => {
      if (!hasTriggeredRef.current && !unlocked) {
        setIsPopupOpen(true);
        hasTriggeredRef.current = true;
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const openPopup = () => {
    setIsPopupOpen(true);
    hasTriggeredRef.current = true; // Also prevent auto-trigger if opened manually
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleUnlock = () => {
    setIsUnlocked(true);
    localStorage.setItem("floorplans_unlocked", "true");
    // We keep the popup open for a second so they see the thank you message
    // but the floor plans are now unlocked in the background.
  };

  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <Navbar onEnquireClick={openPopup} />

      {/* Sections */}
      <HeroSection onCtaClick={openPopup} />

      <div id="about">
        <AboutSection />
      </div>

      <div id="amenities">
        <AmenitiesSection />
      </div>

      {/* <div id="gallery">
        <GallerySection />
      </div> */}

      <div id="location">
        <LocationSection />
      </div>

      <div id="floorplans">
        <FloorPlans isUnlocked={isUnlocked} onUnlockClick={openPopup} />
      </div>

      <LegacySection />

      {/* <div id="infra">
        <InfraSection />
      </div> */}

      <div id="contact">
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />

      {/* Popup Modal */}
      <EnquiryPopup
        isOpen={isPopupOpen}
        onClose={closePopup}
        onSuccess={handleUnlock}
      />
    </main>
  );
}
