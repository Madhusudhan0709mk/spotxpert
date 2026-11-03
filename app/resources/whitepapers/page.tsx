'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { WHITEPAPERS_DATA } from '@/src/data/resources-data';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Download,
  FileText,
  CheckCircle2,
  Users,
  BookOpen
} from 'lucide-react';

export default function WhitepapersPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null);

  const handleDownload = (title: string) => {
    setDownloadSuccessMessage(`Access link for "${title}" has been prepared.`);
    setTimeout(() => {
      setIsConsultationOpen(true);
    }, 600);
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
            <Link href="/resources" className="hover:text-[#33A685]">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#33A685]" />
            <span className="text-[#0E4032] font-semibold">Whitepapers &amp; Guides</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4D9C4]/30 border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032]">
            <FileText className="w-3.5 h-3.5 text-[#33A685]" />
            <span>Executive Playbooks</span>
          </div>
        </div>
      </section>

      {/* 3. Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 border-b border-[#B4D9C4]/60 bg-gradient-to-b from-white via-[#F2F2F2] to-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
            Strategic Executive Guides
          </span>

          <h1 className="hero-heading text-3xl sm:text-5xl font-bold text-[#0E4032] tracking-tight leading-[1.14] mt-4 mb-5 max-w-3xl mx-auto">
            Actionable Roadmaps for Engineering &amp; Technology Leaders
          </h1>

          <p className="body-text text-[#0E4032]/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-6">
            In-depth strategic analyses, cost models, and architectural frameworks to help CTOs, VPs of Engineering, and Product leaders make confident technology bets.
          </p>

          {downloadSuccessMessage && (
            <div className="max-w-md mx-auto p-3 rounded-xl bg-[#33A685]/15 border border-[#33A685] text-xs font-semibold text-[#0E4032] animate-in fade-in">
              {downloadSuccessMessage} Opening consultation access...
            </div>
          )}
        </div>
      </section>

      {/* 4. Whitepapers List */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {WHITEPAPERS_DATA.map((wp) => (
            <div
              key={wp.id}
              className="bg-white border border-[#B4D9C4] rounded-3xl overflow-hidden shadow-xs hover:border-[#33A685] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Image & Specs */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 w-full lg:h-full min-h-[320px]">
                <Image src={wp.image.url} alt={wp.image.alt} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-[#0E4032] shadow-xs">
                  {wp.publishedQuarter}
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#0E4032]/95 backdrop-blur-xs p-3.5 rounded-2xl text-xs text-white border border-[#1b6550] flex items-center justify-between">
                  <div>
                    <div className="font-bold">{wp.format}</div>
                    <div className="text-[11px] text-[#B4D9C4]">{wp.pages} Pages of In-Depth Research</div>
                  </div>
                  <Download className="w-5 h-5 text-[#F2E6A7]" />
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="card-heading text-xl sm:text-2xl font-bold text-[#0E4032] mb-2">
                    {wp.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#33A685] font-semibold mb-4">
                    {wp.subtitle}
                  </p>

                  <p className="body-text text-[#0E4032]/80 text-xs sm:text-sm leading-relaxed font-normal mb-6">
                    {wp.summary}
                  </p>

                  {/* Key Takeaways */}
                  <div className="bg-[#F2F2F2] p-5 rounded-2xl border border-[#B4D9C4]/70 mb-6 space-y-2">
                    <div className="text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-2">
                      What You Will Learn
                    </div>
                    {wp.keyTakeaways.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-[#0E4032]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#33A685] flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Target Audience */}
                  <div className="flex items-center gap-2 flex-wrap mb-6 text-xs text-[#0E4032]/70 font-medium">
                    <Users className="w-4 h-4 text-[#33A685]" />
                    <span className="font-bold text-[#0E4032]">Target Audience:</span>
                    {wp.targetAudience.map((aud, aIdx) => (
                      <span key={aIdx} className="bg-white border border-[#B4D9C4] px-2.5 py-0.5 rounded-full text-[11px]">
                        {aud}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#B4D9C4]/60 flex items-center justify-between flex-wrap gap-4">
                  <button
                    onClick={() => handleDownload(wp.title)}
                    className="bg-[#0E4032] hover:bg-[#155442] text-white btn-text px-6 py-3 rounded-full text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4 text-[#33A685]" />
                    <span>Download Complimentary PDF</span>
                  </button>

                  <button
                    onClick={() => setIsConsultationOpen(true)}
                    className="text-xs font-bold text-[#33A685] hover:text-[#0E4032] transition-colors cursor-pointer"
                  >
                    Discuss with Author &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Footer & Modals */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
     
    </main>
  );
}
