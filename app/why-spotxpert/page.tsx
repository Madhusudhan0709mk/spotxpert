'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { WHY_SPOTXPERT_DATA } from '@/src/data/why-spotxpert-data';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Users,
  Globe,
  Clock,
  CheckCircle2,
  Award,
  Zap,
  TrendingUp,
  Cpu
} from 'lucide-react';

export default function WhySpotxpertIndexPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const items = Object.values(WHY_SPOTXPERT_DATA);

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* 2. Hero Section */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-24 overflow-hidden border-b border-[#B4D9C4]/60 bg-gradient-to-b from-white via-[#F2F2F2] to-[#F2F2F2]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#B4D9C4]/35 via-[#33A685]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#B4D9C4] text-xs font-semibold text-[#0E4032] mb-6 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#33A685]" />
            <span>The SpotXpert Engineering Advantage</span>
          </div>

          <h1 className="hero-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#0E4032] tracking-tight leading-[1.12] max-w-4xl mx-auto">
            Agile in Mind, Spirit &amp; Speed: Why High-Growth Enterprises Choose SpotXpert
          </h1>

          <p className="body-text text-[#0E4032]/80 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-[1.65]">
            We bridge the gap between traditional IT outsourcing and slow in-house recruiting by providing autonomous, dedicated engineering pods with proven domain excellence.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="bg-[#0E4032] hover:bg-[#155442] active:bg-[#082820] text-white btn-text px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <span>Explore Pod Engagement</span>
              <ArrowRight className="w-4 h-4 text-[#33A685]" />
            </button>
            <a
              href="#pillars"
              className="bg-white hover:bg-[#B4D9C4]/20 border border-[#B4D9C4] text-[#0E4032] btn-text px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-xs"
            >
              The 3 Core Pillars
            </a>
          </div>

          {/* Key Advantage Metrics */}
          <div className="mt-14 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white border border-[#B4D9C4] rounded-2xl p-4 text-center shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0E4032]">900+</div>
              <div className="text-xs text-[#0E4032]/75 font-medium mt-1">Clients Worldwide</div>
            </div>
            <div className="bg-white border border-[#B4D9C4] rounded-2xl p-4 text-center shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#33A685]">Top 1%</div>
              <div className="text-xs text-[#0E4032]/75 font-medium mt-1">Vetted Engineers</div>
            </div>
            <div className="bg-white border border-[#B4D9C4] rounded-2xl p-4 text-center shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0E4032]">2 Weeks</div>
              <div className="text-xs text-[#0E4032]/75 font-medium mt-1">To First Sprint</div>
            </div>
            <div className="bg-white border border-[#B4D9C4] rounded-2xl p-4 text-center shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#33A685]">SOC 2 &amp; ISO</div>
              <div className="text-xs text-[#0E4032]/75 font-medium mt-1">Certified Security</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Three Core Pillars */}
      <section id="pillars" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#B4D9C4]/60">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
            The Three Pillars
          </span>
          <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold mt-3">
            Engineered to Solve the Delivery Trilemma
          </h2>
          <p className="body-text text-[#0E4032]/80 mt-3 text-sm sm:text-base">
            Most technology leaders are forced to pick two: speed, quality, or cost efficiency. Our model delivers all three.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/why-spotxpert/${pillar.slug}`}
              className="bg-white border border-[#B4D9C4] rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-xl hover:border-[#33A685] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
                    {pillar.badge}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#33A685] group-hover:scale-125 transition-transform" />
                </div>

                <h3 className="card-heading text-xl sm:text-2xl font-bold text-[#0E4032] group-hover:text-[#33A685] transition-colors mb-3">
                  {pillar.title}
                </h3>

                <p className="body-text text-[#0E4032]/80 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {pillar.heroSubheadline}
                </p>

                {/* Key Metric Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-6 pt-4 border-t border-[#B4D9C4]/50">
                  {pillar.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx} className="bg-[#F2F2F2] p-2.5 rounded-xl border border-[#B4D9C4]/60">
                      <div className="text-sm font-bold text-[#0E4032]">{m.value}</div>
                      <div className="text-[10px] text-[#0E4032]/70 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#B4D9C4]/60 flex items-center justify-between text-xs font-bold text-[#0E4032] group-hover:text-[#33A685] transition-colors">
                <span>Explore {pillar.title}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Comparison Matrix */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#B4D9C4]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
              Delivery Model Comparison
            </span>
            <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold mt-3">
              SpotXpert Pods vs Alternatives
            </h2>
          </div>

          <div className="rounded-3xl border border-[#B4D9C4] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0E4032] text-white">
                  <tr>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs">Dimension</th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs text-[#F2E6A7] bg-[#124d3d]">SpotXpert Agile Pods</th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs text-white/70">Traditional Outsourcing</th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs text-white/70">In-House Hiring</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#B4D9C4]/50">
                  <tr className="hover:bg-[#B4D9C4]/15 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#0E4032]">Time to Productivity</td>
                    <td className="p-4 sm:p-5 font-bold text-[#0E4032] bg-[#B4D9C4]/20">1 to 2 Weeks (Pre-assembled)</td>
                    <td className="p-4 sm:p-5 text-[#0E4032]/70">2 to 3 Months (Sourcing)</td>
                    <td className="p-4 sm:p-5 text-[#0E4032]/70">3 to 6 Months (Recruiting)</td>
                  </tr>
                  <tr className="hover:bg-[#B4D9C4]/15 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#0E4032]">Team Cohesion</td>
                    <td className="p-4 sm:p-5 font-bold text-[#0E4032] bg-[#B4D9C4]/20">High (Delivered past projects together)</td>
                    <td className="p-4 sm:p-5 text-[#0E4032]/70">Low (Random contractor pairings)</td>
                    <td className="p-4 sm:p-5 text-[#0E4032]/70">Must be built over time</td>
                  </tr>
                  <tr className="hover:bg-[#B4D9C4]/15 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#0E4032]">Security &amp; Compliance</td>
                    <td className="p-4 sm:p-5 font-bold text-[#0E4032] bg-[#B4D9C4]/20">SOC 2 Type II &amp; ISO 27001 Certified</td>
                    <td className="p-4 sm:p-5 text-[#0E4032]/70">Variable by individual contractor</td>
                    <td className="p-4 sm:p-5 text-[#0E4032]/70">High internal compliance cost</td>
                  </tr>
                  <tr className="hover:bg-[#B4D9C4]/15 transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-[#0E4032]">Code &amp; IP Ownership</td>
                    <td className="p-4 sm:p-5 font-bold text-[#0E4032] bg-[#B4D9C4]/20">100% Client IP Ownership</td>
                    <td className="p-4 sm:p-5 text-[#0E4032]/70">Complex contract disputes</td>
                    <td className="p-4 sm:p-5 text-[#0E4032]/70">100% Client Owned</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-20 sm:py-28 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
              Get Started
            </span>
            <h2 className="section-heading text-[#0E4032] text-3xl sm:text-4xl font-bold mt-4 mb-4">
              Ready to assemble your dedicated sprint pod?
            </h2>
            <p className="body-text text-[#0E4032]/80 text-sm sm:text-base mb-8">
              Discuss your project scope and launch within 2 weeks with a custom-assembled engineering pod.
            </p>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="bg-[#0E4032] hover:bg-[#155442] text-white btn-text px-8 py-4 rounded-full font-bold shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Schedule Pod Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#33A685]" />
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
