"use client";

import { useState } from "react";
import { submitEnquiry, EnquiryData } from "@/lib/submitEnquiry";
import { Loader2, CheckCircle } from "lucide-react";

interface EnquiryFormProps {
  onSuccess?: () => void;
  variant?: "light" | "dark";
}

export default function EnquiryForm({ onSuccess, variant = "light" }: EnquiryFormProps) {
  const [formData, setFormData] = useState<EnquiryData>({
    name: "",
    phone: "",
    email: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const result = await submitEnquiry(formData);
    
    if (result.success) {
      setStatus("success");
      onSuccess?.();
    } else {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10 space-y-4">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="text-green-400" size={32} />
        </div>
        <h3 className="text-2xl text-white font-display normal-case tracking-normal">Thank You!</h3>
        <p className="text-white/60 font-body text-sm">Our team will reach out to you shortly.</p>
      </div>
    );
  }

  const isDark = variant === "dark";

  const inputClasses = `w-full px-4 py-3.5 rounded-lg bg-white/8 border border-white/15 text-white placeholder-white/35 focus:outline-none focus:border-white/40 focus:bg-white/12 transition-all duration-300 font-body text-sm`;

  const lightInputClasses = `w-full px-4 py-3.5 rounded-lg bg-white border border-primary/15 text-text-dark placeholder-text-body/50 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-300 font-body text-sm`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={`block text-[10px] uppercase tracking-widest mb-1.5 font-body ${isDark ? "text-white/50" : "text-text-body"}`}>
          Full Name
        </label>
        <input
          required
          type="text"
          placeholder="Enter your name"
          className={isDark ? inputClasses : lightInputClasses}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={`block text-[10px] uppercase tracking-widest mb-1.5 font-body ${isDark ? "text-white/50" : "text-text-body"}`}>
            Mobile Number
          </label>
          <input
            required
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className={isDark ? inputClasses : lightInputClasses}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <label className={`block text-[10px] uppercase tracking-widest mb-1.5 font-body ${isDark ? "text-white/50" : "text-text-body"}`}>
            Email Address
          </label>
          <input
            required
            type="email"
            placeholder="email@example.com"
            className={isDark ? inputClasses : lightInputClasses}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      {/* <div>
        <label className={`block text-[10px] uppercase tracking-widest mb-1.5 font-body ${isDark ? "text-white/50" : "text-text-body"}`}>
          Configuration
        </label>
        <select
          className={isDark ? inputClasses : lightInputClasses}
          value={formData.config}
          onChange={(e) => setFormData({ ...formData, config: e.target.value })}
        >
          <option value="1 BHK">1 BHK Residence</option>
          <option value="2 BHK">2 BHK Residence</option>
          <option value="Penthouse">Luxury Penthouse</option>
        </select>
      </div> */}

      
      <button
        disabled={status === "submitting"}
        type="submit"
        className={`w-full py-4 flex items-center justify-center gap-2 uppercase tracking-widest font-display text-sm transition-all duration-300 cursor-pointer rounded-lg mt-2 ${
          isDark
            ? "bg-white text-primary hover:bg-white/90 disabled:bg-white/50"
            : "bg-primary text-white hover:bg-primary-dark disabled:bg-primary/50"
        }`}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="animate-spin h-4 w-4" />
            Processing...
          </>
        ) : (
          "Submit Enquiry"
        )}
      </button>
      
      {status === "error" && (
        <p className="text-red-400 text-xs text-center mt-2">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
