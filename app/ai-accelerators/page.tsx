'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { getAllAccelerators } from '@/src/data/accelerators-data';
import {
  Sparkles,
  ArrowRight,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  Database,
  GitBranch,
  BarChart3,
  CheckCircle2,
  Lock,
  Workflow
} from 'lucide-react';

export default function AiAcceleratorsIndexPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'LLM & Agent Toolkits' | 'Vision & Perception'>('All');

  const accelerators = getAllAccelerators();
  const filtered = selectedCategory === 'All'
    ? accelerators
    : accelerators.filter(a => a.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* 2. Hero Section */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-24 overflow-hidden border-b border-[#B4D9C4]/60 bg-gradient-to-b from-white via-[#F2F2F2] to-[#F2F2F2]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#B4D9C4]/35 via-[#33A685]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#B4D9C4] text-xs font-semibold text-[#0E4032] mb-6 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#33A685]" />
            <span>SpotXpert AI Engineering Frameworks</span>
          </div>

          <h1 className="hero-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#0E4032] tracking-tight leading-[1.12] max-w-4xl mx-auto">
            Production-Grade AI Accelerators That Cut Time-to-Market by 60%
          </h1>

          <p className="body-text text-[#0E4032]/80 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-[1.65]">
            Do not build complex AI architectures from scratch. Our pre-engineered, modular frameworks provide battle-tested foundations for high-precision RAG, multi-agent workflows, vision intelligence, and synthetic data.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="bg-[#0E4032] hover:bg-[#155442] active:bg-[#082820] text-white btn-text px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <span>Explore Framework Architecture</span>
              <ArrowRight className="w-4 h-4 text-[#33A685]" />
            </button>
            <a
              href="#accelerators-catalog"
              className="bg-white hover:bg-[#B4D9C4]/20 border border-[#B4D9C4] text-[#0E4032] btn-text px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-xs"
            >
              View All 5 Frameworks
            </a>
          </div>

          {/* Quick Metrics Banner */}
          <div className="mt-14 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white border border-[#B4D9C4] rounded-2xl p-4 text-center shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0E4032]">60%</div>
              <div className="text-xs text-[#0E4032]/75 font-medium mt-1">Faster Time-to-Market</div>
            </div>
            <div className="bg-white border border-[#B4D9C4] rounded-2xl p-4 text-center shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#33A685]">99.4%</div>
              <div className="text-xs text-[#0E4032]/75 font-medium mt-1">Factual Precision</div>
            </div>
            <div className="bg-white border border-[#B4D9C4] rounded-2xl p-4 text-center shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0E4032]">&lt;240ms</div>
              <div className="text-xs text-[#0E4032]/75 font-medium mt-1">P95 Retrieval Latency</div>
            </div>
            <div className="bg-white border border-[#B4D9C4] rounded-2xl p-4 text-center shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#33A685]">100%</div>
              <div className="text-xs text-[#0E4032]/75 font-medium mt-1">Private Cloud (VPC)</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Accelerators Catalog */}
      <section id="accelerators-catalog" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {(['All', 'LLM & Agent Toolkits', 'Vision & Perception'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0E4032] text-white shadow-md'
                  : 'bg-white text-[#0E4032]/80 border border-[#B4D9C4] hover:border-[#33A685]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accelerators Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <Link
              key={item.slug}
              href={`/ai-accelerators/${item.slug}`}
              className="group bg-white border border-[#B4D9C4] rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-xl hover:border-[#33A685] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                  <span className="text-xs font-medium text-[#0E4032]/60">
                    {item.category}
                  </span>
                </div>

                <h2 className="card-heading text-xl sm:text-2xl font-bold text-[#0E4032] group-hover:text-[#33A685] transition-colors mb-2">
                  {item.name}
                </h2>

                <p className="text-xs sm:text-sm text-[#0E4032]/75 font-medium mb-4 line-clamp-2">
                  {item.tagline}
                </p>

                <p className="text-xs text-[#0E4032]/70 leading-relaxed mb-6 font-normal line-clamp-3">
                  {item.overview.solution}
                </p>

                {/* Key Metrics Chips */}
                <div className="grid grid-cols-2 gap-2 mb-6 pt-4 border-t border-[#B4D9C4]/50">
                  {item.hero.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx} className="bg-[#F2F2F2] rounded-xl p-2.5 border border-[#B4D9C4]/60">
                      <div className="text-sm font-bold text-[#0E4032]">{m.value}</div>
                      <div className="text-[10px] text-[#0E4032]/70 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#B4D9C4]/60 flex items-center justify-between text-xs font-bold text-[#0E4032] group-hover:text-[#33A685] transition-colors">
                <span>View Architecture &amp; Benchmarks</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Architecture Standards & Security */}
      <section className="py-20 bg-white border-y border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4D9C4]/30 border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032] mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#33A685]" />
              Enterprise Security Standard
            </div>
            <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold">
              Built for Enterprise Security &amp; Private Cloud Isolation
            </h2>
            <p className="body-text text-[#0E4032]/80 mt-3 text-sm sm:text-base">
              Every SpotXpert AI accelerator is designed from the ground up for strict regulatory environments with zero client data leakage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#F2F2F2] border border-[#B4D9C4]">
              <div className="w-10 h-10 rounded-xl bg-[#0E4032] text-[#F2E6A7] flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="card-heading text-lg font-bold text-[#0E4032] mb-2">100% Private Cloud VPC</h3>
              <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal">
                Deploy inside your AWS, Azure, or GCP perimeter. No model inputs or customer data are ever retained or shared with external model trainers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F2F2F2] border border-[#B4D9C4]">
              <div className="w-10 h-10 rounded-xl bg-[#0E4032] text-[#F2E6A7] flex items-center justify-center mb-4">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="card-heading text-lg font-bold text-[#0E4032] mb-2">Full IP &amp; Code Ownership</h3>
              <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal">
                You own 100% of the deployed codebase, pipelines, and configuration. Zero perpetual SaaS vendor lock-in or per-seat licensing penalties.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F2F2F2] border border-[#B4D9C4]">
              <div className="w-10 h-10 rounded-xl bg-[#0E4032] text-[#F2E6A7] flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="card-heading text-lg font-bold text-[#0E4032] mb-2">Predictable FinOps Costs</h3>
              <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal">
                Built-in semantic caching, token optimization, and intelligent model routing cut monthly API inference costs by 45% to 75%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-20 sm:py-28 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#0E4032] via-[#124d3d] to-[#0A3026] border border-[#1b6550] rounded-3xl p-8 sm:p-14 text-white shadow-2xl text-center overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#185c49] border border-[#33A685]/50 text-xs text-[#F2E6A7] font-semibold mb-4">
                Architecture Review
              </span>
              <h2 className="hero-heading text-white text-3xl sm:text-4xl font-extrabold mb-4">
                Accelerate your AI roadmap with our engineering pods
              </h2>
              <p className="body-text text-[#B4D9C4] mb-8 text-sm sm:text-base">
                Schedule a 45-minute architectural session with our Principal AI Architects to evaluate your data readiness and select the right accelerator foundation.
              </p>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="bg-[#33A685] hover:bg-[#288f72] text-white btn-text px-8 py-3.5 rounded-full font-bold shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Book Architecture Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer & Modals */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
 
    </main>
  );
}
