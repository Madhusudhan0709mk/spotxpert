'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ContactLead } from '@/src/data/case-studies-data';
import { Phone, Check, Send } from 'lucide-react';

interface Props {
  contactLead: ContactLead;
}

export default function CaseStudyContactForm({ contactLead }: Props) {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-[#0E4032] border border-[#33A685]/40 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
      {/* Subtle radial emerald gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#175b47]/50 via-[#0E4032] to-[#082820] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Side: Form */}
        <div className="lg:col-span-7">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Let&apos;s talk
          </h3>

          {isSubmitted ? (
            <div className="bg-[#082820] border border-[#33A685] rounded-2xl p-6 text-center animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-[#33A685] text-white flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Message Received!</h4>
              <p className="text-sm text-[#B4D9C4] max-w-sm mx-auto">
                Thank you for reaching out. One of our principal solution architects will review your project and get in touch within 24 hours.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ firstName: '', email: '', phone: '', message: '' });
                }}
                className="mt-5 text-xs font-semibold text-[#F2E6A7] underline hover:text-white cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  required
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full bg-[#082820]/90 border border-[#33A685]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-[#B4D9C4]/60 focus:outline-none focus:ring-2 focus:ring-[#33A685] transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Email*"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#082820]/90 border border-[#33A685]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-[#B4D9C4]/60 focus:outline-none focus:ring-2 focus:ring-[#33A685] transition-all"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#082820]/90 border border-[#33A685]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-[#B4D9C4]/60 focus:outline-none focus:ring-2 focus:ring-[#33A685] transition-all"
                />
              </div>

              <div>
                <textarea
                  rows={3}
                  required
                  placeholder="Message*"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#082820]/90 border border-[#33A685]/50 rounded-xl px-4 py-3 text-sm text-white placeholder-[#B4D9C4]/60 focus:outline-none focus:ring-2 focus:ring-[#33A685] transition-all resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#33A685] hover:bg-[#299576] active:bg-[#1e785e] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Get In Touch</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right Side: Lead Executive Profile matching structure with brand palette */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left lg:border-l lg:border-[#33A685]/30 lg:pl-10">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-[#33A685] shadow-xl mb-4 bg-[#082820]">
            <Image
              src={contactLead.avatar}
              alt={contactLead.name}
              fill
              className="object-cover"
              sizes="112px"
              referrerPolicy="no-referrer"
            />
          </div>

          <h4 className="text-xl font-bold text-white mb-1">
            {contactLead.name}
          </h4>

          <p className="text-xs text-[#B4D9C4] leading-relaxed mb-6 max-w-xs font-normal">
            {contactLead.description}
          </p>

          <a
            href={`tel:${contactLead.phone}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#F2E6A7] hover:text-white uppercase tracking-wider bg-[#082820] hover:bg-[#33A685] border border-[#33A685] px-5 py-2.5 rounded-lg transition-colors shadow-md cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#33A685] group-hover:text-white" />
            <span>CALL US NOW</span>
          </a>
        </div>
      </div>
    </div>
  );
}

