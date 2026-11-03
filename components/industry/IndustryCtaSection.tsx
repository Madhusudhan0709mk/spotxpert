'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IndustryCtaSectionProps {
  finalCta: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  compliance: string[];
  onOpenConsultation: () => void;
}

export default function IndustryCtaSection({
  finalCta,
  compliance: _compliance,
  onOpenConsultation,
}: IndustryCtaSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#F2F2F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container */}
        <div className="relative bg-gradient-to-br from-[#0E4032] via-[#124d3d] to-[#0A3026] border border-[#1b6550] rounded-3xl p-8 sm:p-14 lg:p-16 text-white shadow-2xl overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#33A685]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F2E6A7]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            {/* Main Headline */}
            <h2 className="hero-heading text-white text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15]">
              {finalCta.headline}
            </h2>

            {/* Subheading */}
            <p className="body-text text-[#B4D9C4] mt-5 mb-10 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {finalCta.subheadline}
            </p>

            {/* Button Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto bg-[#33A685] hover:bg-[#288f72] active:bg-[#1e735b] text-white btn-text px-8 py-4 rounded-full font-bold shadow-xl shadow-[#33A685]/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{finalCta.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
