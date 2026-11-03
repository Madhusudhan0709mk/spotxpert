'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { LEADERSHIP_TEAM, CORE_CULTURE_VALUES } from '@/src/data/about-us-data';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Users,
  ShieldCheck,
  Target,
  BookOpen,
  CheckCircle2,
  Linkedin
} from 'lucide-react';

export default function LeadershipCulturePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const getValueIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#33A685]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#33A685]" />;
      case 'Target': return <Target className="w-5 h-5 text-[#33A685]" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#33A685]" />;
      default: return <Sparkles className="w-5 h-5 text-[#33A685]" />;
    }
  };

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
            <span className="text-[#0E4032] font-semibold">Leadership &amp; Culture</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4D9C4]/30 border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032]">
            <Users className="w-3.5 h-3.5 text-[#33A685]" />
            <span>Executive Leadership &amp; Engineering Values</span>
          </div>
        </div>
      </section>

      {/* 3. Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 border-b border-[#B4D9C4]/60 bg-gradient-to-b from-white via-[#F2F2F2] to-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
            People &amp; Principles
          </span>

          <h1 className="hero-heading text-3xl sm:text-5xl font-bold text-[#0E4032] tracking-tight leading-[1.14] mt-4 mb-5 max-w-3xl mx-auto">
            Engineers First: Led by Technology Practitioners
          </h1>

          <p className="body-text text-[#0E4032]/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
            SpotXpert AI is steered by hands-on engineering leaders who code, architect distributed systems, and champion a culture of intellectual curiosity, craftsman pride, and radical transparency.
          </p>
        </div>
      </section>

      {/* 4. Leadership Team Profiles */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#B4D9C4]/60">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
            Executive Leadership
          </span>
          <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold mt-2">
            Meet the Leaders Guiding SpotXpert AI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {LEADERSHIP_TEAM.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#B4D9C4] rounded-3xl overflow-hidden shadow-xs hover:border-[#33A685] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 w-full">
                  <Image src={leader.image} alt={leader.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E4032]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="font-bold text-base">{leader.name}</div>
                    <div className="text-[11px] text-[#B4D9C4]">{leader.role}</div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs text-[#0E4032]/80 leading-relaxed font-normal">
                    {leader.bio}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="w-full py-2 rounded-xl bg-[#F2F2F2] hover:bg-[#0E4032] hover:text-white text-xs font-semibold text-[#0E4032] transition-colors cursor-pointer text-center"
                >
                  Request Leadership Briefing
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Core Culture Values */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
              Our DNA
            </span>
            <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold mt-2">
              The 4 Cultural Pillars That Guide Every Sprint
            </h2>
            <p className="body-text text-[#0E4032]/80 mt-3 text-sm sm:text-base">
              These values govern how we hire, conduct code reviews, resolve technical disagreements, and deliver value to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_CULTURE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-[#F2F2F2] border border-[#B4D9C4] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#33A685] transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0E4032] text-[#F2E6A7] flex items-center justify-center mb-5">
                    {getValueIcon(val.icon)}
                  </div>
                  <h3 className="card-heading text-lg font-bold text-[#0E4032] mb-3">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer & Modals */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
   
    </main>
  );
}
