'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';

import ServiceIsometricGraphic from './ServiceIsometricGraphic';
import { ServiceItem } from '@/src/data/services-data';
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Check,
} from 'lucide-react';

interface ServicePageTemplateProps {
  service: ServiceItem;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  // Navigation & Modals State
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  // Section 2: Operating Model Interactive Tabs State
  const [activeTabId, setActiveTabId] = useState<string>(
    service.operatingModel.tabs[1]?.id || service.operatingModel.tabs[0].id
  );
  const activeTab =
    service.operatingModel.tabs.find(t => t.id === activeTabId) ||
    service.operatingModel.tabs[0];

  // Section: FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* ────────────────────────────────────────────────────────
          SECTION 1: HERO SECTION (Dark Pine #0E4032)
      ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] bg-[#0E4032] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden border-b border-[#33A685]/30">
        {/* Subtle Ambient Radial Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#19634e]/40 via-[#0E4032] to-[#082820] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-[#33A685]/15 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Category Pill, Headline, Subtitle, CTA */}
            <div className="lg:col-span-7 xl:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Category Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#33A685]/20 border border-[#33A685]/50 text-xs sm:text-[13px] font-semibold text-[#42CF9F] uppercase tracking-wide mb-6 shadow-sm">
                  <span>{service.categoryTag}</span>
                </div>

                {/* Hero Headline */}
                <h1 className="hero-heading text-3xl sm:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.12] mb-6">
                  {service.hero.headline}
                </h1>

                {/* Subheadline Paragraph */}
                <p className="body-text text-[#B4D9C4] text-base sm:text-lg leading-[1.68] mb-9 max-w-2xl font-normal">
                  {service.hero.subheadline}
                </p>

                {/* CTA Button */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setIsConsultationOpen(true)}
                    className="bg-[#33A685] hover:bg-[#299576] active:bg-[#208064] text-white font-semibold text-[15px] px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#33A685]/35 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#33A685]/40"
                  >
                    {service.hero.primaryCta}
                  </button>
                  {service.hero.secondaryCta && (
                    <a
                      href="#operating-model"
                      className="inline-flex items-center gap-2 text-white/90 hover:text-white font-medium text-[14px] px-5 py-3.5 rounded-lg border border-white/20 hover:border-white/40 transition-colors"
                    >
                      <span>{service.hero.secondaryCta}</span>
                      <ArrowRight className="w-4 h-4 text-[#42CF9F]" />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Layered Faceted 3D Geometric Rhombus */}
            <div className="lg:col-span-5 xl:col-span-5 flex items-center justify-center lg:justify-end">
              <ServiceIsometricGraphic />
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          SECTION 2: OPERATING MODEL & TABBED DEEP DIVE (ATOM)
      ──────────────────────────────────────────────────────── */}
      <section id="operating-model" className="relative bg-[#082820] text-white py-20 sm:py-28 border-b border-[#33A685]/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Headline & Narrative */}
          <div className="max-w-4xl mb-14 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] mb-5">
              {service.operatingModel.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#B4D9C4] leading-[1.65]">
              {service.operatingModel.subheadline}
            </p>
          </div>

          {/* Interactive Operating Model Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Vertical Interactive Tabs */}
            <div className="lg:col-span-5 space-y-3">
              {service.operatingModel.tabs.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`w-full text-left px-5 py-4 sm:py-5 rounded-xl transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                      isActive
                        ? 'bg-[#33A685] text-white border-[#42CF9F] shadow-lg shadow-[#33A685]/25 font-semibold translate-x-1'
                        : 'bg-[#0E4032]/80 hover:bg-[#145643] text-[#B4D9C4] hover:text-white border-[#33A685]/30 font-medium'
                    }`}
                  >
                    <span className="text-sm sm:text-base pr-4 leading-snug">{tab.title}</span>
                    <ChevronRight
                      className={`w-5 h-5 flex-shrink-0 transition-transform ${
                        isActive ? 'text-white translate-x-1' : 'text-[#33A685]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Tab Content & Deliverables */}
            <div className="lg:col-span-7 bg-[#0E4032]/70 border border-[#33A685]/40 rounded-2xl p-6 sm:p-8 sm:min-h-[380px] flex flex-col justify-between shadow-xl">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-[#33A685]/20 text-[#42CF9F] text-xs font-semibold uppercase tracking-wider mb-3">
                  Pillar Blueprint
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {activeTab.title}
                </h3>
                <h4 className="text-base sm:text-lg font-semibold text-[#F2E6A7] mb-4">
                  {activeTab.headline}
                </h4>
                <p className="text-sm sm:text-base text-[#B4D9C4] leading-[1.7] mb-8 font-normal">
                  {activeTab.description}
                </p>
              </div>

              {/* Deliverable Tags / Chips Row */}
              <div>
                <div className="text-xs uppercase tracking-wider text-[#B4D9C4]/70 font-semibold mb-3">
                  Key Artifacts &amp; Deliverables
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {activeTab.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#082820] border border-[#33A685]/50 text-xs sm:text-sm text-white font-medium hover:border-[#F2E6A7] transition-colors"
                    >
                      <Check className="w-3.5 h-3.5 text-[#42CF9F]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          SECTION 3: 6 FEATURE CARDS GRID (Light Background #F2F2F2)
      ──────────────────────────────────────────────────────── */}
      <section className="bg-[#F2F2F2] py-20 sm:py-28 border-b border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0E4032] tracking-tight leading-[1.2] mb-4">
              {service.featuresSection.headline}
            </h2>
            <p className="text-base sm:text-lg text-[#0E4032]/80 leading-relaxed font-normal">
              {service.featuresSection.subheadline}
            </p>
          </div>

          {/* 6 Feature Cards (3 columns x 2 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {service.featuresSection.cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#E8F5F0] hover:bg-[#DEF0E8] border border-[#B4D9C4] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0E4032] mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#0E4032]/80 leading-[1.65] font-normal">
                    {card.description}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#B4D9C4]/50 flex items-center justify-between text-xs font-semibold text-[#33A685]">
                  <span>SpotXpert Engineering Standard</span>
                  <CheckCircle2 className="w-4 h-4 text-[#33A685]" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          SECTION 4: FREQUENTLY ASKED QUESTIONS (Dark #082820)
      ──────────────────────────────────────────────────────── */}
      <section className="bg-[#082820] text-white py-20 sm:py-28 border-b border-[#33A685]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#B4D9C4]">
              Clear answers to common questions about engaging our engineering pods.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#33A685]/40 overflow-hidden bg-[#0E4032]/80 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#145643]/70 transition-colors"
                  >
                    <span className="font-semibold text-sm sm:text-base text-white">
                      {idx + 1}. {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#33A685] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#F2E6A7]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-[#33A685]/20 bg-[#071F19]"
                      >
                        <div className="p-5 sm:p-6 text-sm text-[#B4D9C4] leading-[1.7] font-normal">
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

      {/* Global Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

   
    </main>
  );
}
