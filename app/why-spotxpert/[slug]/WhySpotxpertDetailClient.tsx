'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { WhySpotxpertItem } from '@/src/data/why-spotxpert-data';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Clock,
  Globe,
  Award,
  ChevronRight,
  Lock,
  Plus,
  Minus,
  HelpCircle,
  Quote
} from 'lucide-react';

interface Props {
  item: WhySpotxpertItem;
}

export default function WhySpotxpertDetailClient({ item }: Props) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Users': return <Users className="w-5 h-5 text-[#33A685]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#33A685]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#33A685]" />;
      case 'Lock': return <Lock className="w-5 h-5 text-[#33A685]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-[#33A685]" />;
      case 'Globe': return <Globe className="w-5 h-5 text-[#33A685]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#33A685]" />;
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
            <Link href="/why-spotxpert" className="hover:text-[#33A685]">Why SpotXpert AI</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#33A685]" />
            <span className="text-[#0E4032] font-semibold">{item.title}</span>
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
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
                {item.badge}
              </span>

              <h1 className="hero-heading text-3xl sm:text-5xl font-bold text-[#0E4032] tracking-tight leading-[1.14]">
                {item.heroHeadline}
              </h1>

              <p className="body-text text-[#0E4032]/80 text-base sm:text-lg leading-relaxed">
                {item.heroSubheadline}
              </p>

              <div className="flex items-center gap-4 flex-wrap pt-2">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="bg-[#0E4032] hover:bg-[#155442] active:bg-[#082820] text-white btn-text px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#33A685]" />
                </button>
              </div>

              {/* 4 Key Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#B4D9C4]/60">
                {item.metrics.map((m, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-2xl border border-[#B4D9C4] shadow-xs">
                    <div className="text-xl sm:text-2xl font-extrabold text-[#0E4032]">{m.value}</div>
                    <div className="text-xs font-bold text-[#33A685] mt-0.5">{m.label}</div>
                    <div className="text-[10px] text-[#0E4032]/70 leading-tight mt-1">{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#B4D9C4] shadow-xl bg-white aspect-[4/3]">
                <Image src={item.image.url} alt={item.image.alt} fill priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E4032]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#B4D9C4] text-xs">
                  <div className="font-bold text-[#0E4032] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#33A685]" />
                    <span>Dedicated Pod Accountability</span>
                  </div>
                  <div className="text-[#0E4032]/75 mt-0.5 font-normal">
                    Direct integration into your Jira, GitHub, and daily standups.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Pillars Deep Dive */}
      <section className="py-20 bg-white border-b border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
              Pillar Architecture
            </span>
            <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold mt-3">
              Core Tenets of {item.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {item.corePillars.map((p, idx) => {
              const listItems = p.points || (p as any).details || [];
              return (
                <div
                  key={idx}
                  className="bg-[#F2F2F2] border border-[#B4D9C4] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#33A685] transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#0E4032] text-[#F2E6A7] flex items-center justify-center mb-5">
                      {getPillarIcon(p.icon)}
                    </div>
                    <h3 className="card-heading text-lg sm:text-xl font-bold text-[#0E4032] mb-3">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal mb-6">
                      {p.description}
                    </p>

                    <div className="space-y-2 pt-4 border-t border-[#B4D9C4]/50">
                      {listItems.map((point: string, ptIdx: number) => (
                        <div key={ptIdx} className="flex items-start gap-2 text-xs text-[#0E4032]/85 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#33A685] flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Process Steps or Comparison Matrix if present */}
      {item.processSteps && (
        <section className="py-20 sm:py-28 bg-[#F2F2F2] border-b border-[#B4D9C4]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
                Step-by-Step Cadence
              </span>
              <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold mt-3">
                How We Launch Your Pod in 2 Weeks
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {item.processSteps.map((s, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-[#B4D9C4] flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#0E4032] text-[#F2E6A7] font-bold text-sm flex items-center justify-center mb-4">
                      {s.step}
                    </div>
                    <h4 className="card-heading text-base font-bold text-[#0E4032] mb-2">{s.name}</h4>
                    <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Testimonial Quote */}
      {item.testimonials && item.testimonials.length > 0 && (
        <section className="py-20 bg-white border-b border-[#B4D9C4]/60">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Quote className="w-12 h-12 text-[#33A685]/30 mx-auto mb-4" />
            <blockquote className="text-lg sm:text-2xl font-medium text-[#0E4032] leading-relaxed mb-6 italic">
              &ldquo;{item.testimonials[0].quote}&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#B4D9C4]">
                <Image src={item.testimonials[0].avatar} alt={item.testimonials[0].author} fill className="object-cover" />
              </div>
              <div className="text-left">
                <div className="font-bold text-sm text-[#0E4032]">{item.testimonials[0].author}</div>
                <div className="text-xs text-[#0E4032]/70">{item.testimonials[0].role}, {item.testimonials[0].company}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. FAQs */}
      <section className="py-20 sm:py-28 bg-[#F2F2F2] border-b border-[#B4D9C4]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032] mb-3 shadow-xs">
              <HelpCircle className="w-3.5 h-3.5 text-[#33A685]" />
              Engagement FAQs
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

      {/* 8. Final CTA */}
      <section className="py-20 sm:py-28 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#0E4032] via-[#124d3d] to-[#0A3026] border border-[#1b6550] rounded-3xl p-8 sm:p-14 text-white shadow-2xl text-center overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#185c49] border border-[#33A685]/50 text-xs text-[#F2E6A7] font-semibold mb-4">
                Partner with SpotXpert AI
              </span>
              <h2 className="hero-heading text-white text-3xl sm:text-4xl font-extrabold mb-4">
                Experience the SpotXpert Pod Advantage
              </h2>
              <p className="body-text text-[#B4D9C4] mb-8 text-sm sm:text-base">
                Book an exploratory consultation with our engineering directors to size your dedicated squad.
              </p>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="bg-[#33A685] hover:bg-[#288f72] text-white btn-text px-8 py-4 rounded-full font-bold shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Talk to Engineering Leadership</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Footer & Modals */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
      
    </main>
  );
}
