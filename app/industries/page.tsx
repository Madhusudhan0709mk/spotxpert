'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { getAllIndustries } from '@/src/data/industries';
import { ArrowRight, Sparkles, Building2, ShieldCheck, Layers } from 'lucide-react';

export default function IndustriesIndexPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const industries = getAllIndustries();

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* 2. Directory Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 border-b border-[#B4D9C4]/60 bg-gradient-to-b from-white via-[#F2F2F2] to-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#B4D9C4] text-xs font-semibold text-[#0E4032] mb-6 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#33A685]" />
            <span>17 Industry-Specialized Engineering Solutions</span>
          </div>

          <h1 className="hero-heading text-[#0E4032] text-4xl sm:text-6xl font-extrabold tracking-tight">
            Software &amp; AI engineering tailored for your industry
          </h1>

          <p className="body-text text-[#0E4032]/80 mt-5 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Every industry operates with unique ERPs, regulatory compliance mandates, and operational workflows. Explore our custom software platforms, data architectures, and agile pods across 17 enterprise sectors.
          </p>
        </div>
      </section>

      {/* 3. 17 Industries Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group bg-white border border-[#B4D9C4] rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-xl hover:border-[#33A685] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
                    {ind.category}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#33A685] group-hover:scale-125 transition-transform" />
                </div>

                {/* Industry Name */}
                <h2 className="card-heading text-xl sm:text-2xl font-bold text-[#0E4032] group-hover:text-[#33A685] transition-colors mb-3">
                  {ind.name}
                </h2>

                {/* Short Subheadline */}
                <p className="text-xs sm:text-sm text-[#0E4032]/75 line-clamp-3 leading-relaxed mb-6 font-normal">
                  {ind.hero.subheadline}
                </p>

                {/* Use Case Chips tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {ind.useCaseChips.slice(0, 3).map((chip) => (
                    <span
                      key={chip.id}
                      className="text-[11px] font-medium bg-[#B4D9C4]/30 text-[#0E4032] px-2.5 py-1 rounded-full border border-[#B4D9C4]"
                    >
                      {chip.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="pt-4 border-t border-[#B4D9C4]/60 flex items-center justify-between text-xs font-bold text-[#0E4032] group-hover:text-[#33A685] transition-colors">
                <span>Explore Solutions &amp; Architecture</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Global Enterprise Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </main>
  );
}
