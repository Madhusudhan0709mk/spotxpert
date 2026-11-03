'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  AlertTriangle,
  FileCheck,
  Compass,
  Layers,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  CornerDownRight,
  TrendingUp,
  Clock
} from 'lucide-react';
import { IndustryItem } from '@/src/data/industries';

interface IndustryFeatureTabsProps {
  industry: IndustryItem;
  onOpenConsultation: () => void;
}

export default function IndustryFeatureTabs({
  industry,
  onOpenConsultation,
}: IndustryFeatureTabsProps) {
  const [activeTab, setActiveTab] = useState<
    'solutions' | 'challenges' | 'useCases' | 'process' | 'integrations' | 'outcomes'
  >('solutions');

  const tabs = [
    { id: 'solutions', label: 'Solutions & Services', icon: Sparkles },
    { id: 'challenges', label: 'Industry Challenges', icon: AlertTriangle },
    { id: 'useCases', label: 'Proven Use Cases', icon: FileCheck },
    { id: 'process', label: 'Delivery Process', icon: Compass },
    { id: 'integrations', label: 'Tech Stack & Tools', icon: Layers },
    { id: 'outcomes', label: 'Target Outcomes', icon: BarChart3 },
  ] as const;

  return (
    <section id="solutions-section" className="py-20 sm:py-28 bg-[#F2F2F2] border-b border-[#B4D9C4]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sticky Tab Navigation Bar */}
        <div className="sticky top-20 z-30 mb-12 sm:mb-16 bg-[#F2F2F2]/95 backdrop-blur-md py-3 border-y border-[#B4D9C4]/60">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0E4032] text-white shadow-md'
                      : 'bg-white text-[#0E4032]/80 border border-[#B4D9C4] hover:border-[#33A685] hover:bg-[#B4D9C4]/20'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#F2E6A7]' : 'text-[#33A685]'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">

            {/* TAB 1: SOLUTIONS & SERVICES */}
            {activeTab === 'solutions' && (
              <motion.div
                key="solutions"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="section-heading text-[#0E4032]">
                    How our engineering services empower {industry.name}
                  </h2>
                  <p className="body-text text-[#0E4032]/80 mt-3 text-sm sm:text-base">
                    Tailored software, data architectures, and AI solutions engineered specifically for your domain workflows.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {industry.solutions.slice(1).map((sol, index) => (
                    <div
                      key={index}
                      className="bg-white border border-[#B4D9C4] rounded-2xl p-6 shadow-sm hover:border-[#33A685] transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Service Name Header */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4D9C4]/35 text-[#0E4032] text-xs font-bold mb-3 border border-[#B4D9C4]">
                          <Zap className="w-3.5 h-3.5 text-[#33A685]" />
                          <span>{sol.service}</span>
                        </div>

                        {/* What we do */}
                        <p className="text-xs sm:text-sm text-[#0E4032]/90 leading-relaxed font-normal mb-4">
                          {sol.action}
                        </p>
                      </div>

                      {/* Business Outcome */}
                      <div className="pt-3 border-t border-[#B4D9C4]/50 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#33A685] flex-shrink-0 mt-0.5" />
                        <div className="text-xs font-semibold text-[#0E4032]">
                          <span className="text-[#33A685]">Business Outcome:</span> {sol.outcome}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-2 bg-[#0E4032] hover:bg-[#155442] text-white btn-text px-8 py-3.5 rounded-full shadow-md transition-all cursor-pointer text-xs sm:text-sm"
                  >
                    <span>Discuss your custom solution</span>
                    <ArrowRight className="w-4 h-4 text-[#33A685]" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* TAB 2: INDUSTRY CHALLENGES */}
            {activeTab === 'challenges' && (
              <motion.div
                key="challenges"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="section-heading text-[#0E4032]">
                    Operational challenges we solve in {industry.name}
                  </h2>
                  <p className="body-text text-[#0E4032]/80 mt-3 text-sm sm:text-base">
                    Critical friction points holding back operational agility, margin health, and customer satisfaction.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {industry.challenges.map((ch, index) => (
                    <div
                      key={index}
                      className="bg-white border border-[#B4D9C4] rounded-2xl p-6 shadow-sm hover:border-[#ff5e57]/60 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2 text-[#0E4032]">
                        <span className="w-6 h-6 rounded-full bg-[#ff5e57]/15 text-[#ff5e57] text-xs font-bold flex items-center justify-center flex-shrink-0">
                          {index + 1}
                        </span>
                        <h3 className="card-heading text-base font-bold text-[#0E4032]">
                          {ch.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed pl-8">
                        {ch.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 3: PROVEN USE CASES (Before / With us / Result) */}
            {activeTab === 'useCases' && (
              <motion.div
                key="useCases"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="section-heading text-[#0E4032]">
                    Proven use cases &amp; workflow transformations
                  </h2>
                  <p className="body-text text-[#0E4032]/80 mt-3 text-sm sm:text-base">
                    Real scenarios demonstrating how modern software replaces manual bottlenecks.
                  </p>
                </div>

                <div className="space-y-6">
                  {industry.useCases.map((uc, index) => (
                    <div
                      key={index}
                      className="bg-white border border-[#B4D9C4] rounded-3xl p-6 sm:p-8 shadow-sm"
                    >
                      <h3 className="text-base sm:text-lg font-bold text-[#0E4032] mb-4 pb-3 border-b border-[#B4D9C4]/50 flex items-center gap-2">
                        <FileCheck className="w-5 h-5 text-[#33A685]" />
                        <span>{uc.title}</span>
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                        
                        {/* Before */}
                        <div className="p-4 rounded-2xl bg-[#F2F2F2] border border-[#B4D9C4]/60">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#0E4032]/70 mb-2">
                            Before Modernization
                          </div>
                          <p className="text-[#0E4032]/80 leading-relaxed">
                            {uc.before}
                          </p>
                        </div>

                        {/* With Us */}
                        <div className="p-4 rounded-2xl bg-[#B4D9C4]/25 border border-[#33A685]/50">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#33A685] mb-2">
                            With SpotXpert AI
                          </div>
                          <p className="text-[#0E4032] font-medium leading-relaxed">
                            {uc.withUs}
                          </p>
                        </div>

                        {/* Result */}
                        <div className="p-4 rounded-2xl bg-[#0E4032] text-white">
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[#F2E6A7] mb-2">
                            Measurable Outcome
                          </div>
                          <p className="text-[#B4D9C4] font-medium leading-relaxed">
                            {uc.result}
                          </p>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 4: DELIVERY METHODOLOGY (Discover -> Design -> Build -> Launch) */}
            {activeTab === 'process' && (
              <motion.div
                key="process"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="section-heading text-[#0E4032]">
                    Agile engagement lifecycle
                  </h2>
                  <p className="body-text text-[#0E4032]/80 mt-3 text-sm sm:text-base">
                    From workflow audit to production deployment, our engineering pods work in 2-week agile sprints.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {industry.process.map((st, index) => (
                    <div
                      key={index}
                      className="bg-white border border-[#B4D9C4] rounded-2xl p-6 shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-full bg-[#0E4032] text-[#F2E6A7] font-bold text-sm flex items-center justify-center mb-4">
                          {st.step}
                        </div>
                        <h3 className="card-heading text-lg font-bold text-[#0E4032] mb-2">
                          {st.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal">
                          {st.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-3 border-t border-[#B4D9C4]/50 text-[11px] font-semibold text-[#33A685] flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Dedicated Sprint Pod</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 5: TECH STACK & TOOLS */}
            {activeTab === 'integrations' && (
              <motion.div
                key="integrations"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="section-heading text-[#0E4032]">
                    Enterprise integrations &amp; compatibility
                  </h2>
                  <p className="body-text text-[#0E4032]/80 mt-3 text-sm sm:text-base">
                    We engineer clean API connections to your existing ERP, CRM, and domain software without disrupting operations.
                  </p>
                </div>

                <div className="bg-white border border-[#B4D9C4] rounded-3xl p-6 sm:p-10 shadow-sm">
                  <div className="text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-6 pb-2 border-b border-[#B4D9C4]/50">
                    Commonly Integrated Systems in {industry.name}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {industry.integrations.map((tool, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl bg-[#F2F2F2] border border-[#B4D9C4] text-center font-bold text-sm text-[#0E4032] hover:border-[#33A685] transition-colors flex items-center justify-center min-h-[70px]"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#B4D9C4]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-[#0E4032]/80">
                      <ShieldCheck className="w-4 h-4 text-[#33A685]" />
                      <span>Support for modern REST, GraphQL, webhooks, and legacy database connections</span>
                    </div>

                    <button
                      onClick={onOpenConsultation}
                      className="text-xs font-bold text-[#33A685] hover:text-[#0E4032] transition-colors"
                    >
                      Request custom API connector &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 6: TARGET OUTCOMES (Qualitative / Ranges) */}
            {activeTab === 'outcomes' && (
              <motion.div
                key="outcomes"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="space-y-8"
              >
                <div className="text-center max-w-2xl mx-auto">
                  <h2 className="section-heading text-[#0E4032]">
                    Measurable impact across {industry.name}
                  </h2>
                  <p className="body-text text-[#0E4032]/80 mt-3 text-sm sm:text-base">
                    Realistic, qualitative target ranges based on our enterprise engineering deployments.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {industry.outcomes.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-[#B4D9C4] rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[#33A685] transition-all"
                    >
                      <div>
                        <div className="text-xs font-semibold text-[#0E4032]/70 uppercase tracking-wider">
                          {m.label}
                        </div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-[#0E4032] mt-3 tracking-tight">
                          {m.value}
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#B4D9C4]/60 text-xs font-semibold text-[#33A685] flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{m.subtext}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
