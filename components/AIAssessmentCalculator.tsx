'use client';

import React, { useState } from 'react';
import { Calculator, Sparkles, Users, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

interface CalculatorProps {
  onOpenConsultation: () => void;
}

export default function AIAssessmentCalculator({ onOpenConsultation }: CalculatorProps) {
  const [projectType, setProjectType] = useState<'genai' | 'mvp' | 'cloud' | 'enterprise'>('genai');
  const [timelineSpeed, setTimelineSpeed] = useState<'standard' | 'accelerated' | 'hyper'>('accelerated');
  const [complexity, setComplexity] = useState<'medium' | 'high' | 'mission-critical'>('high');

  const configs = {
    genai: {
      title: 'AI-Native Enterprise Solution',
      podSize: '4-6 Engineers',
      roles: ['AI Solutions Architect', '2x Senior ML/LLM Engineers', 'Fullstack App Engineer', 'QA Automation Lead'],
      weeksToMVP: timelineSpeed === 'hyper' ? '4-6' : timelineSpeed === 'accelerated' ? '7-9' : '10-12',
      savings: '48%',
    },
    mvp: {
      title: 'Digital Product MVP Launch',
      podSize: '3-5 Engineers',
      roles: ['Principal Fullstack Engineer', 'Senior Frontend (React/Next)', 'Backend Cloud Architect', 'UI/UX Designer'],
      weeksToMVP: timelineSpeed === 'hyper' ? '3-5' : timelineSpeed === 'accelerated' ? '6-8' : '8-10',
      savings: '52%',
    },
    cloud: {
      title: 'Cloud & Kubernetes Modernization',
      podSize: '3-4 Engineers',
      roles: ['AWS Premier Cloud Architect', '2x Senior DevOps/SRE Engineers', 'Security & Compliance Lead'],
      weeksToMVP: timelineSpeed === 'hyper' ? '3-4' : timelineSpeed === 'accelerated' ? '5-7' : '8-10',
      savings: '40%',
    },
    enterprise: {
      title: 'Dedicated Enterprise Scale Pod',
      podSize: '6-10+ Engineers',
      roles: ['Technical Delivery Lead', '3x Senior Engineers', '2x Mid-Level Engineers', 'Dedicated QA & DevOps'],
      weeksToMVP: timelineSpeed === 'hyper' ? '6-8' : timelineSpeed === 'accelerated' ? '8-12' : '14-16',
      savings: '55%',
    },
  };

  const currentConfig = configs[projectType];

  return (
    <section id="ai-accelerators" className="py-20 sm:py-28 bg-[#F2F2F2] relative overflow-hidden border-b border-[#B4D9C4]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B4D9C4]/40 border border-[#33A685]/40 text-[#0E4032] text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#33A685]" />
            Interactive Engineering Estimator
          </div>
          <h2 className="section-heading text-[#0E4032]">
            Estimate Your <span className="text-[#33A685]">Agile Pod</span> &amp; Timeline
          </h2>
          <p className="body-text text-[#0E4032]/80 mt-4 max-w-2xl mx-auto">
            Configure your technical scope to receive an architectural squad blueprint and estimated time-to-market.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Selection on #FFFFFF light surface */}
          <div className="lg:col-span-7 bg-white border border-[#B4D9C4] rounded-2xl p-6 sm:p-8 space-y-8 shadow-sm">
            
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-semibold text-[#0E4032] uppercase tracking-wider mb-3">
                1. Select Solution Focus
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'genai', label: 'AI & Generative LLMs', desc: 'RAG, Agentic workflows, custom models' },
                  { id: 'mvp', label: 'Digital Product MVP', desc: 'Fullstack web & mobile apps' },
                  { id: 'cloud', label: 'Cloud & DevOps Scale', desc: 'AWS migration, Kubernetes, FinOps' },
                  { id: 'enterprise', label: 'Enterprise Agile Pod', desc: 'Cross-functional dedicated squad' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setProjectType(item.id as any)}
                    className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      projectType === item.id
                        ? 'border-[#33A685] bg-[#B4D9C4]/35 ring-1 ring-[#33A685]'
                        : 'border-[#B4D9C4]/70 bg-[#F2F2F2] hover:bg-[#B4D9C4]/20'
                    }`}
                  >
                    <div className="font-semibold text-sm text-[#0E4032]">{item.label}</div>
                    <div className="text-xs text-[#0E4032]/75 mt-1 leading-normal">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Deployment Velocity */}
            <div>
              <label className="block text-xs font-semibold text-[#0E4032] uppercase tracking-wider mb-3">
                2. Sprint Speed &amp; Urgency
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', label: 'Standard', time: '2-week setup' },
                  { id: 'accelerated', label: 'Fast-Track', time: '1-week setup' },
                  { id: 'hyper', label: 'Hyper-Sprint', time: '48-hour onboarding' },
                ].map((speed) => (
                  <button
                    key={speed.id}
                    onClick={() => setTimelineSpeed(speed.id as any)}
                    className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                      timelineSpeed === speed.id
                        ? 'border-[#33A685] bg-[#B4D9C4]/35 ring-1 ring-[#33A685]'
                        : 'border-[#B4D9C4]/70 bg-[#F2F2F2] hover:bg-[#B4D9C4]/20'
                    }`}
                  >
                    <div className="font-semibold text-xs sm:text-sm text-[#0E4032]">{speed.label}</div>
                    <div className="text-[11px] text-[#0E4032]/75 mt-0.5">{speed.time}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Architecture Rigor */}
            <div>
              <label className="block text-xs font-semibold text-[#0E4032] uppercase tracking-wider mb-3">
                3. Architectural Rigor &amp; Compliance
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'medium', label: 'Standard Web' },
                  { id: 'high', label: 'SOC2 / High Load' },
                  { id: 'mission-critical', label: 'HIPAA / Fintech' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setComplexity(tier.id as any)}
                    className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                      complexity === tier.id
                        ? 'border-[#33A685] bg-[#B4D9C4]/35 ring-1 ring-[#33A685]'
                        : 'border-[#B4D9C4]/70 bg-[#F2F2F2] hover:bg-[#B4D9C4]/20'
                    }`}
                  >
                    <div className="font-semibold text-xs sm:text-sm text-[#0E4032]">{tier.label}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Projected Blueprint Summary - 25% #0E4032 dark anchor */}
          <div className="lg:col-span-5 bg-[#0E4032] border border-[#1b6550] rounded-2xl p-6 sm:p-8 shadow-2xl relative text-white">
            <div className="flex items-center justify-between pb-4 border-b border-[#1b6550] mb-6">
              <span className="text-xs font-semibold text-[#B4D9C4] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#33A685]" />
                SpotXpert Recommended Pod
              </span>
              <span className="text-xs font-semibold bg-[#F2E6A7] text-[#0E4032] px-2.5 py-0.5 rounded shadow-xs">
                Agile SLA
              </span>
            </div>

            <h3 className="card-heading text-white mb-6">
              {currentConfig.title}
            </h3>

            {/* Output Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#082920] border border-[#185c49] p-4 rounded-xl">
                <div className="flex items-center gap-2 text-xs text-[#B4D9C4] mb-1">
                  <Clock className="w-4 h-4 text-[#33A685]" />
                  <span>Est. Time to Production</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#F2E6A7] tracking-tight">
                  {currentConfig.weeksToMVP} Weeks
                </div>
              </div>

              <div className="bg-[#082920] border border-[#185c49] p-4 rounded-xl">
                <div className="flex items-center gap-2 text-xs text-[#B4D9C4] mb-1">
                  <Users className="w-4 h-4 text-[#33A685]" />
                  <span>Optimal Pod Scale</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {currentConfig.podSize}
                </div>
              </div>
            </div>

            {/* Team Breakdown */}
            <div className="mb-6">
              <div className="text-xs font-semibold text-[#B4D9C4] uppercase tracking-wider mb-3">
                Squad Composition:
              </div>
              <ul className="space-y-2">
                {currentConfig.roles.map((role, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#33A685]" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#124d3c] border border-[#185c49] p-4 rounded-xl mb-6 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#F2E6A7] flex-shrink-0" />
              <div className="text-xs text-[#B4D9C4] leading-relaxed">
                Backed by <span className="font-semibold text-white">SpotXpert 14-Day Sprint Trial Guarantee</span>. Zero risk onboarding.
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full bg-[#33A685] hover:bg-[#288f72] text-white btn-text py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-[#33A685]/25 cursor-pointer transition-all"
            >
              <span>Lock In This Engineering Pod</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
