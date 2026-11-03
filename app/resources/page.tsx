'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { CASE_STUDIES_DATA, BLOG_POSTS_DATA } from '@/src/data/resources-data';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Briefcase,
  Layers,
  Clock,
  FileText,
  TrendingUp,
  Download
} from 'lucide-react';

export default function ResourcesIndexPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* 2. Hero Section */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-24 overflow-hidden border-b border-[#B4D9C4]/60 bg-gradient-to-b from-white via-[#F2F2F2] to-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#B4D9C4] text-xs font-semibold text-[#0E4032] mb-6 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#33A685]" />
            <span>SpotXpert Engineering Knowledge Base</span>
          </div>

          <h1 className="hero-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#0E4032] tracking-tight leading-[1.12] max-w-4xl mx-auto">
            Architectural Insights, Verified ROI &amp; Executive Blueprints
          </h1>

          <p className="body-text text-[#0E4032]/80 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-[1.65]">
            Explore real-world case studies of complex legacy modernizations, technical deep dives authored by our Principal Architects, and downloadable executive playbooks.
          </p>

          {/* Quick Hub Navigation Cards */}
          <div className="mt-12 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <Link
              href="/resources/case-studies"
              className="p-6 rounded-3xl bg-white border border-[#B4D9C4] hover:border-[#33A685] transition-all shadow-xs group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0E4032] text-[#F2E6A7] flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="card-heading text-lg font-bold text-[#0E4032] group-hover:text-[#33A685] transition-colors">
                Client Case Studies
              </h3>
              <p className="text-xs text-[#0E4032]/70 mt-1 mb-4">
                Measurable business outcomes and technical architecture breakdowns.
              </p>
              <span className="text-xs font-bold text-[#33A685] flex items-center gap-1">
                Explore {CASE_STUDIES_DATA.length} Stories &rarr;
              </span>
            </Link>

            <Link
              href="/resources/blog"
              className="p-6 rounded-3xl bg-white border border-[#B4D9C4] hover:border-[#33A685] transition-all shadow-xs group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#0E4032] text-[#F2E6A7] flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="card-heading text-lg font-bold text-[#0E4032] group-hover:text-[#33A685] transition-colors">
                Engineering Blog
              </h3>
              <p className="text-xs text-[#0E4032]/70 mt-1 mb-4">
                In-depth architecture articles on RAG, Kafka, FinOps, and Kubernetes.
              </p>
              <span className="text-xs font-bold text-[#33A685] flex items-center gap-1">
                Read Articles &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Featured Case Studies Preview */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#B4D9C4]/60">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
              Enterprise Success
            </span>
            <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold mt-2">
              Featured Client Transformations
            </h2>
          </div>
          <Link
            href="/resources/case-studies"
            className="text-xs sm:text-sm font-bold text-[#33A685] hover:text-[#0E4032] flex items-center gap-1.5"
          >
            <span>View all case studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES_DATA.slice(0, 2).map((cs) => (
            <div
              key={cs.id}
              className="bg-white border border-[#B4D9C4] rounded-3xl overflow-hidden shadow-xs hover:border-[#33A685] transition-all flex flex-col justify-between"
            >
              <div className="relative h-60 w-full">
                <Image src={cs.image.url} alt={cs.image.alt} fill className="object-cover" />
                <div className="absolute top-4 left-4 flex items-center gap-1.5">
                  <span className="bg-[#0E4032] text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold shadow-xs">
                    {cs.clientName}
                  </span>
                  <span className="bg-white/95 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-[#0E4032] shadow-xs">
                    {cs.clientIndustry}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="card-heading text-xl font-bold text-[#0E4032] mb-3">
                    {cs.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal mb-6">
                    {cs.summary}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6 pt-4 border-t border-[#B4D9C4]/50">
                    {cs.impactMetrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="bg-[#F2F2F2] p-3 rounded-xl border border-[#B4D9C4]/60">
                        <div className="text-lg font-bold text-[#0E4032]">{m.value}</div>
                        <div className="text-[11px] text-[#0E4032]/70">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/resources/case-studies"
                  className="text-xs font-bold text-[#33A685] hover:text-[#0E4032] flex items-center gap-1 pt-2"
                >
                  <span>Read full case study architecture &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Latest Engineering Articles Preview */}
      <section className="py-20 bg-white border-b border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
                Tech Deep Dives
              </span>
              <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold mt-2">
                From Our Principal Architects
              </h2>
            </div>
            <Link
              href="/resources/blog"
              className="text-xs sm:text-sm font-bold text-[#33A685] hover:text-[#0E4032] flex items-center gap-1.5"
            >
              <span>Explore all articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS_DATA.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="bg-[#F2F2F2] border border-[#B4D9C4] rounded-3xl p-6 flex flex-col justify-between hover:border-[#33A685] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#0E4032]/60 mb-3">
                    <span className="font-semibold text-[#33A685] bg-[#33A685]/10 px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h3 className="card-heading text-lg font-bold text-[#0E4032] mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0E4032]/75 leading-relaxed font-normal mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#B4D9C4]/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden">
                      <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                    </div>
                    <div className="text-[11px]">
                      <div className="font-bold text-[#0E4032]">{post.author.name}</div>
                      <div className="text-[#0E4032]/60">{post.author.role}</div>
                    </div>
                  </div>

                  <Link href="/resources/blog" className="text-xs font-bold text-[#33A685] hover:text-[#0E4032]">
                    Read &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer & Modals */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
     
    </main>
  );
}
