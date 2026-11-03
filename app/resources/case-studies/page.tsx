'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { CASE_STUDIES_DATA } from '@/src/data/resources-data';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Quote,
  TrendingUp,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Filter
} from 'lucide-react';

export default function CaseStudiesPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const STUDIES_PER_PAGE = 3;
  const allTags = [
    'All',
    'AppFolio',
    'Clio',
    'Procore',
    'Bench',
    'AvidXchange',
    'Applied Systems',
    'Flexport'
  ];

  const filteredStudies = selectedTag === 'All'
    ? CASE_STUDIES_DATA
    : CASE_STUDIES_DATA.filter(cs =>
        cs.clientName.toLowerCase() === selectedTag.toLowerCase() ||
        cs.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase()) ||
        cs.clientIndustry.toLowerCase().includes(selectedTag.toLowerCase())
      );

  const totalPages = Math.max(1, Math.ceil(filteredStudies.length / STUDIES_PER_PAGE));
  const validCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (validCurrentPage - 1) * STUDIES_PER_PAGE;
  const endIndex = Math.min(startIndex + STUDIES_PER_PAGE, filteredStudies.length);
  const paginatedStudies = filteredStudies.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const el = document.getElementById('case-studies-list');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
    setCurrentPage(1);
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
            <span className="text-[#0E4032] font-semibold">Client Case Studies</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4D9C4]/30 border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032]">
            <Sparkles className="w-3.5 h-3.5 text-[#33A685]" />
            <span>Verified Enterprise ROI</span>
          </div>
        </div>
      </section>

      {/* 3. Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 border-b border-[#B4D9C4]/60 bg-gradient-to-b from-white via-[#F2F2F2] to-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
            Engineering Case Studies
          </span>

          <h1 className="hero-heading text-3xl sm:text-5xl font-bold text-[#0E4032] tracking-tight leading-[1.14] mt-4 mb-5 max-w-3xl mx-auto">
            Measurable Enterprise ROI Across Leading Client Platforms
          </h1>

          <p className="body-text text-[#0E4032]/80 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
            Discover how SpotXpert dedicated agile pods engineered mission-critical automations, deep API integrations, and AI-driven workflows across industry leaders like AppFolio, Clio, Procore, Bench, AvidXchange, Applied Systems, and Flexport.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap max-w-4xl mx-auto">
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => handleTagSelect(t)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedTag === t
                    ? 'bg-[#0E4032] text-white shadow-xs'
                    : 'bg-white text-[#0E4032]/80 border border-[#B4D9C4] hover:border-[#33A685]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Case Studies List */}
      <section id="case-studies-list" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="space-y-12">
          {paginatedStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white border border-[#B4D9C4] rounded-3xl overflow-hidden shadow-xs hover:border-[#33A685] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Image */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 w-full lg:h-full min-h-[300px]">
                <Image src={cs.image.url} alt={cs.image.alt} fill className="object-cover" />
                <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
                  <span className="bg-[#0E4032] text-white px-3 py-1 rounded-full text-xs font-extrabold tracking-wide shadow-sm">
                    {cs.clientName}
                  </span>
                  <span className="bg-white/95 backdrop-blur-xs px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#0E4032] shadow-xs">
                    {cs.clientIndustry}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 bg-[#0E4032]/90 backdrop-blur-xs px-3 py-1.5 rounded-xl text-xs font-medium text-white">
                  Client Profile: {cs.clientType}
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-xs font-extrabold text-[#0E4032] bg-[#B4D9C4]/40 px-3 py-1 rounded-full border border-[#33A685]/40">
                      {cs.clientName} Platform
                    </span>
                    {cs.tags.slice(1, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-semibold bg-[#B4D9C4]/30 text-[#0E4032] px-2.5 py-0.5 rounded-full border border-[#B4D9C4]">
                        {tag}
                      </span>
                    ))}
                    <span className="text-[11px] text-[#0E4032]/60 font-medium ml-auto">
                      Duration: {cs.duration}
                    </span>
                  </div>

                  <h2 className="card-heading text-xl sm:text-2xl font-bold text-[#0E4032] mb-2">
                    {cs.title}
                  </h2>

                  <p className="body-text text-xs sm:text-sm text-[#0E4032]/85 leading-relaxed font-normal mb-4">
                    {cs.summary}
                  </p>

                  {/* Testimonial & Industry Endorsement Quote */}
                  {cs.testimonialQuote && (
                    <div className="bg-[#B4D9C4]/20 border-l-4 border-[#33A685] p-3.5 sm:p-4 rounded-r-2xl mb-6 flex items-start gap-3">
                      <Quote className="w-5 h-5 text-[#33A685] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs sm:text-sm text-[#0E4032] italic font-medium leading-relaxed">
                          &ldquo;{cs.testimonialQuote.quote}&rdquo;
                        </p>
                        <div className="text-[11px] text-[#0E4032]/75 font-semibold mt-1">
                          — {cs.testimonialQuote.author} <span className="text-[#33A685]">({cs.testimonialQuote.role}, {cs.testimonialQuote.company})</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Challenge & Solution Breakdown */}
                  <div className="space-y-4 mb-6">
                    <div className="bg-[#F2F2F2] p-4 rounded-2xl border border-[#B4D9C4]/70">
                      <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
                        The Challenge
                      </div>
                      <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal">
                        {cs.challenge}
                      </p>
                    </div>

                    <div className="bg-[#B4D9C4]/20 p-4 rounded-2xl border border-[#33A685]/40">
                      <div className="text-xs font-bold text-[#33A685] uppercase tracking-wider mb-1">
                        SpotXpert Engineering Solution
                      </div>
                      <p className="text-xs sm:text-sm text-[#0E4032]/85 leading-relaxed font-normal">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* 4 Impact Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#B4D9C4]/50">
                    {cs.impactMetrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-white p-3 rounded-xl border border-[#B4D9C4] shadow-2xs">
                        <div className="text-lg font-extrabold text-[#0E4032]">{m.value}</div>
                        <div className="text-[10px] font-semibold text-[#33A685] leading-tight mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#B4D9C4]/60 flex items-center justify-between">
                  <Link
                    href={`/contact?service=Case%20Study%20Architecture%20Review&client=${encodeURIComponent(cs.clientName)}`}
                    className="text-xs font-bold text-[#33A685] hover:text-[#0E4032] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Similar Architecture Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <span className="text-xs text-[#0E4032]/60 font-medium">
                    Delivered by Dedicated Agile Pod
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredStudies.length === 0 && (
          <div className="text-center py-16 bg-white border border-[#B4D9C4] rounded-3xl p-8">
            <Building2 className="w-12 h-12 text-[#33A685] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-[#0E4032]">No case studies found</h3>
            <p className="text-xs sm:text-sm text-[#0E4032]/70 mt-1 mb-4">
              There are currently no case studies matching &ldquo;{selectedTag}&rdquo;.
            </p>
            <button
              onClick={() => handleTagSelect('All')}
              className="text-xs font-semibold text-white bg-[#0E4032] hover:bg-[#155442] px-4 py-2 rounded-full transition-colors cursor-pointer"
            >
              View all case studies
            </button>
          </div>
        )}

        {/* 5. Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-14 pt-8 border-t border-[#B4D9C4]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Range Counter */}
            <div className="text-xs sm:text-sm text-[#0E4032]/75 font-medium">
              Showing <span className="font-bold text-[#0E4032]">{startIndex + 1}–{endIndex}</span> of <span className="font-bold text-[#0E4032]">{filteredStudies.length}</span> case studies
            </div>

            {/* Pagination Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(validCurrentPage - 1)}
                disabled={validCurrentPage === 1}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  validCurrentPage === 1
                    ? 'bg-[#E5E7EB]/40 border-transparent text-[#9CA3AF] cursor-not-allowed'
                    : 'bg-white border-[#B4D9C4] text-[#0E4032] hover:border-[#33A685] hover:bg-[#B4D9C4]/20 cursor-pointer shadow-xs'
                }`}
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isActive = validCurrentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-9 h-9 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center ${
                        isActive
                          ? 'bg-[#0E4032] text-white shadow-xs'
                          : 'bg-white border border-[#B4D9C4] text-[#0E4032] hover:border-[#33A685] hover:bg-[#B4D9C4]/20'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handlePageChange(validCurrentPage + 1)}
                disabled={validCurrentPage === totalPages}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  validCurrentPage === totalPages
                    ? 'bg-[#E5E7EB]/40 border-transparent text-[#9CA3AF] cursor-not-allowed'
                    : 'bg-white border-[#B4D9C4] text-[#0E4032] hover:border-[#33A685] hover:bg-[#B4D9C4]/20 cursor-pointer shadow-xs'
                }`}
                aria-label="Next Page"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 5. Final CTA */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
              Start Your Transformation
            </span>
            <h2 className="section-heading text-[#0E4032] text-3xl sm:text-4xl font-bold mt-4 mb-4">
              Have a similar engineering challenge?
            </h2>
            <p className="body-text text-[#0E4032]/80 text-sm sm:text-base mb-8">
              Let us analyze your architecture runway and deliver a tailored feasibility assessment in 2 business days.
            </p>
            <Link
              href="/contact"
              className="bg-[#0E4032] hover:bg-[#155442] text-white btn-text px-8 py-4 rounded-full font-bold shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4 text-[#33A685]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Footer & Modals */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    
    </main>
  );
}
