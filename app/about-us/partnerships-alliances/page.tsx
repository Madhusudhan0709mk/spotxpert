'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { PARTNERSHIPS_LIST } from '@/src/data/about-us-data';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Award,
  ShieldCheck,
  CheckCircle2,
  Cloud,
  Cpu,
  Layers,
  Database
} from 'lucide-react';

export default function PartnershipsAlliancesPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* 2. Breadcrumbs & Header */}
      <section className="pt-24 sm:pt-28 pb-4 bg-white border-b border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs text-[#0E4032]/70 font-medium">
            <Link href="/" className="hover:text-[#33A685]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#33A685]" />
            <Link href="/about-us" className="hover:text-[#33A685]">About Us</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#33A685]" />
            <span className="text-[#0E4032] font-semibold">Partnerships &amp; Alliances</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4D9C4]/30 border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032]">
            <Award className="w-3.5 h-3.5 text-[#33A685]" />
            <span>Certified Premier Tier Ecosystem</span>
          </div>
        </div>
      </section>

      {/* 3. Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 border-b border-[#B4D9C4]/60 bg-gradient-to-b from-white via-[#F2F2F2] to-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
            Strategic Cloud &amp; AI Alliances
          </span>

          <h1 className="hero-heading text-3xl sm:text-5xl font-bold text-[#0E4032] tracking-tight leading-[1.14] mt-4 mb-5 max-w-3xl mx-auto">
            Deep Ecosystem Partnerships with the World’s Leading Cloud Platforms
          </h1>

          <p className="body-text text-[#0E4032]/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
            As an AWS Premier Tier Services Partner, Microsoft Solutions Partner, and Google Cloud Partner, SpotXpert brings certified architects, funding incentives, and direct engineering escalation paths to your projects.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="bg-[#0E4032] hover:bg-[#155442] text-white btn-text px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Explore Joint Solutions</span>
              <ArrowRight className="w-4 h-4 text-[#33A685]" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Partnerships Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#B4D9C4]/60">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARTNERSHIPS_LIST.map((partner, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#B4D9C4] rounded-3xl p-6 sm:p-8 shadow-xs hover:border-[#33A685] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
                    {partner.tier}
                  </span>
                  <Award className="w-5 h-5 text-[#33A685]" />
                </div>

                <h3 className="card-heading text-xl font-bold text-[#0E4032] mb-2">
                  {partner.name}
                </h3>

                <p className="text-xs font-semibold text-[#0E4032]/70 mb-4">
                  Category: {partner.category}
                </p>

                <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal mb-6">
                  {partner.description}
                </p>

                {/* Certified Competencies */}
                <div className="space-y-2 pt-4 border-t border-[#B4D9C4]/50">
                  <div className="text-[11px] font-bold text-[#0E4032] uppercase tracking-wider mb-2">
                    Certified Competencies
                  </div>
                  {partner.competencies.map((comp, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-[#0E4032]/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#33A685] flex-shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#B4D9C4]/50 mt-6">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-[#F2F2F2] hover:bg-[#0E4032] hover:text-white text-xs font-semibold text-[#0E4032] transition-colors cursor-pointer text-center"
                >
                  Request {partner.name} Solution Review
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Cloud Migration Credits Banner */}
      <section className="py-20 bg-white border-b border-[#B4D9C4]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0E4032] text-white border border-[#1b6550] shadow-xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#185c49] border border-[#33A685]/50 text-xs text-[#F2E6A7] font-semibold mb-4">
              Partner Funding Programs
            </span>
            <h2 className="hero-heading text-white text-2xl sm:text-4xl font-extrabold mb-4">
              Unlock AWS, Azure &amp; GCP Migration &amp; PoC Credits
            </h2>
            <p className="body-text text-[#B4D9C4] mb-8 text-xs sm:text-base max-w-2xl mx-auto">
              Through our Premier Partner status, qualifying enterprises can offset up to 50% of modernization and GenAI proof-of-concept costs through partner-subsidized funding programs.
            </p>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="bg-[#33A685] hover:bg-[#288f72] text-white btn-text px-8 py-3.5 rounded-full font-bold shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Check Partner Credit Eligibility</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Footer & Modals */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    
    </main>
  );
}
