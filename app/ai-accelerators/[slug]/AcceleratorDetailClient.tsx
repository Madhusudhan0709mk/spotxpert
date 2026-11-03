'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { AcceleratorItem } from '@/src/data/accelerators-data';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Database,
  Layers,
  Zap,
  RotateCcw,
  GitBranch,
  BarChart3,
  HelpCircle,
  Plus,
  Minus,
  Clock,
  Lock,
  ChevronRight,
  UserCheck
} from 'lucide-react';

interface Props {
  item: AcceleratorItem;
}

export default function AcceleratorDetailClient({ item }: Props) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getFeatureIcon = (name: string) => {
    switch (name) {
      case 'Layers': return <Layers className="w-5 h-5 text-[#33A685]" />;
      case 'Database': return <Database className="w-5 h-5 text-[#33A685]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#33A685]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#33A685]" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-[#33A685]" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 text-[#33A685]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#33A685]" />;
      case 'RotateCcw': return <RotateCcw className="w-5 h-5 text-[#33A685]" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-[#33A685]" />;
      default: return <Sparkles className="w-5 h-5 text-[#33A685]" />;
    }
  };

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* 2. Breadcrumb & Announcement Header */}
      <section className="pt-24 sm:pt-28 pb-4 bg-white border-b border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs text-[#0E4032]/70 font-medium">
            <Link href="/" className="hover:text-[#33A685]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#33A685]" />
            <Link href="/ai-accelerators" className="hover:text-[#33A685]">AI Accelerators</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#33A685]" />
            <span className="text-[#0E4032] font-semibold">{item.name}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4D9C4]/30 border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032]">
            <Sparkles className="w-3.5 h-3.5 text-[#33A685]" />
            <span>{item.badge}</span>
          </div>
        </div>
      </section>

      {/* 3. Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-24 border-b border-[#B4D9C4]/60 bg-gradient-to-b from-white via-[#F2F2F2] to-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
                {item.category}
              </span>

              <h1 className="hero-heading text-3xl sm:text-5xl font-bold text-[#0E4032] tracking-tight leading-[1.14]">
                {item.hero.headline}
              </h1>

              <p className="body-text text-[#0E4032]/80 text-base sm:text-lg leading-relaxed">
                {item.hero.subheadline}
              </p>

              <div className="flex items-center gap-4 flex-wrap pt-2">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="bg-[#0E4032] hover:bg-[#155442] active:bg-[#082820] text-white btn-text px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
                >
                  <span>Request Framework Architecture</span>
                  <ArrowRight className="w-4 h-4 text-[#33A685]" />
                </button>

                <a
                  href="#benchmarks"
                  className="bg-white hover:bg-[#B4D9C4]/25 border border-[#B4D9C4] text-[#0E4032] btn-text px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-xs"
                >
                  View Benchmarks
                </a>
              </div>

              {/* 4 Key Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#B4D9C4]/60">
                {item.hero.metrics.map((m, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-2xl border border-[#B4D9C4] shadow-xs">
                    <div className="text-xl sm:text-2xl font-extrabold text-[#0E4032]">{m.value}</div>
                    <div className="text-xs font-bold text-[#33A685] mt-0.5">{m.label}</div>
                    <div className="text-[10px] text-[#0E4032]/70 leading-tight mt-1">{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#B4D9C4] shadow-xl bg-white aspect-[4/3]">
                <Image
                  src={item.heroImage.url}
                  alt={item.heroImage.alt}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E4032]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#B4D9C4] text-xs">
                  <div className="font-bold text-[#0E4032] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#33A685]" />
                    <span>Private VPC Ready Deployment</span>
                  </div>
                  <div className="text-[#0E4032]/75 mt-0.5 font-normal">
                    Docker / Helm charts packaged for AWS, Azure, and on-premise clusters.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Problem & Architectural Overview */}
      <section className="py-20 bg-white border-b border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            <div className="p-8 rounded-3xl bg-[#F2F2F2] border border-red-200/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-100 px-3 py-1 rounded-full">
                  The Enterprise Challenge
                </span>
                <h3 className="card-heading text-xl font-bold text-[#0E4032] mt-4 mb-3">
                  Why Naive Implementations Fail
                </h3>
                <p className="body-text text-[#0E4032]/80 text-sm sm:text-base leading-relaxed">
                  {item.overview.problem}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-red-200/60 text-xs text-red-700 font-semibold flex items-center gap-1.5">
                <span>Result: Catastrophic hallucination, high token costs &amp; compliance audit failures</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#0E4032] text-white border border-[#1b6550] flex flex-col justify-between shadow-lg">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#F2E6A7] bg-[#185c49] px-3 py-1 rounded-full border border-[#33A685]/50">
                  The SpotXpert Solution
                </span>
                <h3 className="card-heading text-xl font-bold text-white mt-4 mb-3">
                  Engineered for Deterministic Accuracy
                </h3>
                <p className="body-text text-[#B4D9C4] text-sm sm:text-base leading-relaxed">
                  {item.overview.solution}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1b6550] text-xs text-[#F2E6A7] font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#33A685]" />
                <span>Result: Sub-second latency, zero data leaks &amp; verifiable citations</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Core Architectural Features */}
      <section className="py-20 sm:py-28 bg-[#F2F2F2] border-b border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032] mb-3 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-[#33A685]" />
              Modular Deep Dive
            </div>
            <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold">
              Key Technical Capabilities of {item.name}
            </h2>
            <p className="body-text text-[#0E4032]/80 mt-3 text-sm sm:text-base">
              Each module is decoupled and containerized, allowing selective adoption into your existing cloud infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {item.features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#B4D9C4] rounded-3xl p-6 sm:p-8 shadow-xs hover:border-[#33A685] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0E4032] text-[#F2E6A7] flex items-center justify-center mb-5">
                    {getFeatureIcon(feat.icon)}
                  </div>
                  <h3 className="card-heading text-lg sm:text-xl font-bold text-[#0E4032] mb-2.5">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0E4032]/80 font-normal leading-relaxed mb-6">
                    {feat.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#B4D9C4]/50">
                    {feat.details.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#0E4032]/85 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#33A685] flex-shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Execution Lifecycle Pipeline */}
      <section className="py-20 bg-white border-b border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
              Execution Architecture
            </span>
            <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold mt-3">
              How the pipeline executes at runtime
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {item.architectureSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#F2F2F2] border border-[#B4D9C4] flex flex-col justify-between relative group hover:border-[#33A685] transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#0E4032] text-[#F2E6A7] font-bold text-sm flex items-center justify-center mb-4">
                    {step.step}
                  </div>
                  <h4 className="card-heading text-base font-bold text-[#0E4032] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#0E4032]/80 font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Supported Technologies Row */}
          <div className="mt-14 pt-8 border-t border-[#B4D9C4]/60">
            <div className="text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-4 text-center">
              Compatible Enterprise Stack &amp; Protocols
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {item.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-[#F2F2F2] border border-[#B4D9C4] text-xs font-bold text-[#0E4032]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Benchmarks Table */}
      <section id="benchmarks" className="py-20 sm:py-28 bg-[#F2F2F2] border-b border-[#B4D9C4]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032] mb-3 shadow-xs">
              <BarChart3 className="w-3.5 h-3.5 text-[#33A685]" />
              Empirical Benchmarks
            </div>
            <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold">
              SpotXpert Framework vs Traditional Approach
            </h2>
            <p className="body-text text-[#0E4032]/80 mt-3 text-sm sm:text-base">
              Performance metrics measured across production enterprise workloads.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#B4D9C4] overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0E4032] text-white">
                  <tr>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs">Evaluation Metric</th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs text-white/70">Traditional / Naive Setup</th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs text-[#F2E6A7]">SpotXpert Framework</th>
                    <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-xs text-[#33A685]">Enterprise Gain</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#B4D9C4]/50">
                  {item.benchmarks.map((b, idx) => (
                    <tr key={idx} className="hover:bg-[#B4D9C4]/15 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-[#0E4032]">{b.metric}</td>
                      <td className="p-4 sm:p-5 text-[#0E4032]/70 font-mono">{b.traditional}</td>
                      <td className="p-4 sm:p-5 font-bold text-[#0E4032] font-mono bg-[#B4D9C4]/20">{b.spotxpert}</td>
                      <td className="p-4 sm:p-5 font-extrabold text-[#33A685]">{b.improvement}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Industry Use Cases */}
      <section className="py-20 bg-white border-b border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
              Production Deployments
            </span>
            <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold mt-3">
              Where {item.name} drives measurable value
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {item.useCases.map((uc, idx) => (
              <div
                key={idx}
                className="bg-[#F2F2F2] border border-[#B4D9C4] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#33A685] transition-all"
              >
                <div>
                  <div className="text-xs font-bold text-[#33A685] uppercase tracking-wider mb-2">
                    {uc.industry}
                  </div>
                  <h3 className="card-heading text-lg font-bold text-[#0E4032] mb-3">
                    {uc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal mb-6">
                    {uc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#B4D9C4]/60 text-xs font-bold text-[#0E4032] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#33A685]" />
                  <span>{uc.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="py-20 sm:py-28 bg-[#F2F2F2] border-b border-[#B4D9C4]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032] mb-3 shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-[#33A685]" />
              Framework FAQs
            </div>
            <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-4">
            {item.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#B4D9C4] rounded-2xl overflow-hidden shadow-xs hover:border-[#33A685] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="card-heading text-[#0E4032] text-sm sm:text-base font-bold pr-2">
                      {faq.question}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#F2F2F2] border border-[#B4D9C4] flex items-center justify-center text-[#0E4032] flex-shrink-0">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal border-t border-[#B4D9C4]/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Final Call to Action */}
      <section className="py-20 sm:py-28 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#0E4032] via-[#124d3d] to-[#0A3026] border border-[#1b6550] rounded-3xl p-8 sm:p-14 text-white shadow-2xl text-center overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#185c49] border border-[#33A685]/50 text-xs text-[#F2E6A7] font-semibold mb-4">
                Architecture Review
              </span>
              <h2 className="hero-heading text-white text-3xl sm:text-4xl font-extrabold mb-4">
                Deploy {item.name} with our dedicated sprint pod
              </h2>
              <p className="body-text text-[#B4D9C4] mb-8 text-sm sm:text-base">
                Our Principal AI Architects work alongside your engineering team to customize the framework for your domain data and deploy into your VPC.
              </p>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="bg-[#33A685] hover:bg-[#288f72] text-white btn-text px-8 py-4 rounded-full font-bold shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Talk to an AI Architect</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Footer & Modals */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
     
    </main>
  );
}
