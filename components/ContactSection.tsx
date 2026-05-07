"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Award } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    title: "Sales Lounge",
    content: "Balaji Classica Sales Lounge, Diva Manpada Road, Opp. HPCL Petrol Pump, Usarghar, Dombivli (E) – 421201",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 8451006431",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@sslifespaces.com",
  },
  {
    icon: Award,
    title: "MahaRERA No.",
    content: "P51700055289",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-start">

          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <span className="text-white/40 text-sm font-body block mb-3">
              Reach Out
            </span>
            <h2 
              className="text-3xl md:text-5xl mb-4 normal-case tracking-normal font-display text-white"
              style={{ fontFamily: 'var(--font-el-messiri)' }}
            >
              Get in Touch
            </h2>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[1px] bg-white/15 w-12" />
              <div className="w-1.5 h-1.5 rotate-45 border border-white/20" />
            </div>

            <div className="space-y-8">
              {CONTACT_ITEMS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors duration-300">
                    <item.icon size={20} className="text-white/70" />
                  </div>
                  <div>
                    <h3 className="text-white/90 font-display text-sm mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-white/50 font-body text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-white/10"
          >
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl text-white mb-2 normal-case tracking-normal font-display">
                Enquire Now
              </h3>
              <p className="text-white/40 text-sm font-body">
                Fill the form below and our team will get back to you.
              </p>
            </div>

            <EnquiryForm variant="dark" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
