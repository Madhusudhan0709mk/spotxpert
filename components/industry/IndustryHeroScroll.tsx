'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Brain,
  Code2,
  Database,
  Layers,
  Sparkles,
  ShieldCheck,
  Building2,
  Workflow
} from 'lucide-react';
import { ProcessStep, IndustryImage } from '@/src/data/industries';

interface IndustryHeroScrollProps {
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  process: ProcessStep[];
  heroImage: IndustryImage;
  onOpenConsultation: () => void;
}

export default function IndustryHeroScroll({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  process,
  heroImage,
  onOpenConsultation,
}: IndustryHeroScrollProps) {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [imageFailed, setImageFailed] = useState<boolean>(false);

  return (
    <section className="relative bg-[#F2F2F2] text-[#0E4032] pt-12 sm:pt-16 pb-16 sm:pb-24 overflow-hidden border-b border-[#B4D9C4]/60">
      {/* Background Soft Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[480px] bg-gradient-to-b from-[#B4D9C4]/35 via-[#33A685]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Hero Typography */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="hero-heading text-[#0E4032] tracking-tight text-3xl sm:text-5xl lg:text-[54px] font-bold leading-[1.12]"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="body-text text-[#0E4032]/80 mt-5 sm:mt-6 mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-[1.65]"
          >
            {subheadline}
          </motion.p>

          {/* Action Button Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <button
              onClick={onOpenConsultation}
              className="bg-[#0E4032] hover:bg-[#155442] active:bg-[#082820] text-white btn-text px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <span>{primaryCta}</span>
              <ArrowRight className="w-4 h-4 text-[#33A685]" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('solutions-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onOpenConsultation();
              }}
              className="bg-white hover:bg-[#B4D9C4]/20 border border-[#B4D9C4] text-[#0E4032] btn-text px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-xs"
            >
              <span>{secondaryCta}</span>
            </button>
          </motion.div>
        </div>

        {/* 4 Generic Engagement Steps: Discover -> Design -> Build & Integrate -> Launch & Scale */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center bg-white border border-[#B4D9C4] rounded-full p-1.5 shadow-xs overflow-x-auto max-w-full">
            {process.map((st, index) => {
              const isActive = activeStepIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStepIndex(index)}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0E4032] text-white shadow-xs'
                      : 'text-[#0E4032]/80 hover:text-[#0E4032] hover:bg-[#B4D9C4]/25'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isActive ? 'bg-[#33A685] text-white' : 'bg-[#B4D9C4] text-[#0E4032]'
                    }`}
                  >
                    {st.step}
                  </span>
                  <span>{st.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Description Bar */}
        <div className="text-center max-w-xl mx-auto mb-10 text-xs sm:text-sm text-[#0E4032]/85 bg-white/70 backdrop-blur-xs border border-[#B4D9C4]/60 rounded-xl px-4 py-2 font-medium">
          <span className="font-bold text-[#33A685] mr-1.5">{process[activeStepIndex]?.title}:</span>
          {process[activeStepIndex]?.description}
        </div>

        {/* Scroll-Driven Interactive Showcase Canvas with Real Industry Imagery */}
        <motion.div
          layout
          className="relative w-full max-w-5xl mx-auto bg-gradient-to-b from-white via-[#B4D9C4]/20 to-[#F2E6A7]/25 border border-[#B4D9C4] rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden min-h-[420px] sm:min-h-[480px] flex items-center justify-center"
        >
          {/* Background Industry Image with Fallback */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {!imageFailed ? (
              <Image
                src={heroImage.url}
                alt={heroImage.alt}
                fill
                priority
                className="object-cover opacity-15 scale-105"
                onError={() => setImageFailed(true)}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#B4D9C4]/30 via-transparent to-[#F2E6A7]/20 flex items-center justify-center">
                <Building2 className="w-48 h-48 text-[#33A685]/10" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
          </div>

          {/* Floating Tool Card: AI & Data Engineering (Top-Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-6 sm:top-10 left-4 sm:left-10 bg-white/95 backdrop-blur-md border border-[#B4D9C4] rounded-2xl p-3 sm:p-4 shadow-lg flex items-center gap-3 z-20 hover:scale-105 transition-transform"
          >
            <div className="w-10 h-10 rounded-xl bg-[#33A685]/15 border border-[#33A685]/30 flex items-center justify-center text-[#33A685]">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0E4032]">AI &amp; Data Engineering</div>
              <div className="text-[11px] text-[#0E4032]/70 font-normal">Predictive &amp; GenAI Pipelines</div>
            </div>
          </motion.div>

          {/* Floating Tool Card: Digital Product Engineering (Top-Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute top-6 sm:top-10 right-4 sm:right-10 bg-white/95 backdrop-blur-md border border-[#B4D9C4] rounded-2xl p-3 sm:p-4 shadow-lg flex items-center gap-3 z-20 hover:scale-105 transition-transform"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F2E6A7]/40 border border-[#F2E6A7] flex items-center justify-center text-[#0E4032]">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0E4032]">Digital Product Engineering</div>
              <div className="text-[11px] text-[#0E4032]/70 font-normal">Web, Mobile &amp; Cloud Systems</div>
            </div>
          </motion.div>

          {/* Floating Tool Card: Integrations & Governance (Bottom-Center) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute bottom-6 sm:bottom-10 bg-white/95 backdrop-blur-md border border-[#B4D9C4] rounded-2xl px-5 py-3 shadow-lg flex items-center gap-3 z-20 hover:scale-105 transition-transform"
          >
            <div className="w-9 h-9 rounded-xl bg-[#0E4032] flex items-center justify-center text-[#F2E6A7]">
              <Workflow className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#0E4032]">Enterprise Integration Hub</div>
              <div className="text-[11px] text-[#0E4032]/70 font-normal">ERP, CRM &amp; Multi-Entity Workflows</div>
            </div>
          </motion.div>

          {/* Center Stage Card */}
          <div className="text-center z-10 max-w-lg py-12 px-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032] mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#33A685]" />
              Enterprise AI &amp; Cloud Engineering Pods
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0E4032] tracking-tight">
              SpotXpert AI Engineering
            </h3>
            <p className="text-xs sm:text-sm text-[#0E4032]/80 mt-2.5 font-normal leading-relaxed">
              Domain-specialized agile development teams delivering custom software, intelligent data pipelines, and compliance governance.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
