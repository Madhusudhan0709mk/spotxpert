'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  CheckCircle2,
  Play,
  Check,
  Zap,
  ArrowRight,
  Database,
  Layers,
  Code2,
  Workflow
} from 'lucide-react';
import { UseCaseScenario } from '@/src/data/industries';

interface IndustrySolutionSimulatorProps {
  useCases: UseCaseScenario[];
  industryName: string;
  onOpenConsultation: () => void;
}

export default function IndustrySolutionSimulator({
  useCases,
  industryName,
  onOpenConsultation,
}: IndustrySolutionSimulatorProps) {
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulatedProgress, setSimulatedProgress] = useState<number>(0);

  const activeCase = useCases[selectedCaseIndex] || useCases[0];

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulatedProgress(0);

    const interval = setInterval(() => {
      setSimulatedProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulating(false);
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F2F2F2] border-b border-[#B4D9C4]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032] mb-3 shadow-xs">
            <Workflow className="w-3.5 h-3.5 text-[#33A685]" />
            Interactive Workflow Architecture
          </div>
          <h2 className="section-heading text-[#0E4032]">
            Simulate an automated {industryName} workflow
          </h2>
          <p className="body-text text-[#0E4032]/80 mt-3 text-sm sm:text-base">
            See how data ingestion, business rules, and real-time integrations replace manual friction.
          </p>
        </div>

        {/* 3-Column Interactive Testbed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Column 1: Choose a workflow scenario */}
          <div className="lg:col-span-4 bg-white border border-[#B4D9C4] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-[#0E4032]/70 uppercase tracking-wider mb-4">
                Select a workflow scenario
              </div>

              <div className="space-y-2.5">
                {useCases.map((uc, idx) => {
                  const isSelected = idx === selectedCaseIndex;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedCaseIndex(idx);
                        setSimulatedProgress(0);
                      }}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#B4D9C4]/35 border-[#33A685] ring-1 ring-[#33A685]'
                          : 'bg-[#F2F2F2]/60 border-[#B4D9C4]/70 hover:bg-[#B4D9C4]/20'
                      }`}
                    >
                      <div className="pr-2">
                        <div className="text-sm font-bold text-[#0E4032] flex items-center gap-1.5">
                          <span>{uc.title}</span>
                        </div>
                        <div className="text-xs text-[#0E4032]/75 mt-0.5 line-clamp-1">
                          Scenario #{idx + 1} &bull; <span className="text-[#33A685] font-semibold">Automated</span>
                        </div>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? 'bg-[#33A685] border-[#33A685] text-white'
                            : 'border-[#B4D9C4] bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#B4D9C4]/60 text-[11px] text-[#0E4032]/70 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#33A685]" />
              <span>Grounded in actual enterprise ERP and database webhooks</span>
            </div>
          </div>

          {/* Column 2: Live Workflow Execution Viewer */}
          <div className="lg:col-span-5 bg-[#0E4032] border border-[#1b6550] rounded-2xl p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Background Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#185c49]/60 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-3 border-b border-[#185c49] mb-4">
                <div className="text-xs font-semibold text-[#B4D9C4] uppercase tracking-wider">
                  Active Workflow Simulation
                </div>
                <span className="text-[10px] bg-[#33A685]/20 text-[#33A685] font-mono px-2 py-0.5 rounded-full border border-[#33A685]/40">
                  HTTP 200 OK
                </span>
              </div>

              <h3 className="card-heading text-white text-lg font-bold mb-3">
                {activeCase?.title}
              </h3>

              {/* Transformation Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-[#082920] border border-[#185c49]">
                  <span className="text-[#ff5e57] font-semibold block mb-1">Previous Bottleneck:</span>
                  <p className="text-white/80 leading-relaxed font-normal">
                    {activeCase?.before}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#145341] border border-[#33A685]/40">
                  <span className="text-[#F2E6A7] font-semibold block mb-1">SpotXpert Engineering:</span>
                  <p className="text-[#B4D9C4] leading-relaxed font-normal">
                    {activeCase?.withUs}
                  </p>
                </div>
              </div>
            </div>

            {/* Run Pipeline Button */}
            <div className="mt-6 pt-4 border-t border-[#185c49] relative z-10 flex items-center justify-between">
              <button
                onClick={handleRunSimulation}
                disabled={isSimulating}
                className="bg-[#33A685] hover:bg-[#288f72] active:bg-[#1e735b] text-white btn-text px-5 py-2.5 rounded-full text-xs font-bold shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isSimulating ? 'Processing data...' : 'Test pipeline run'}</span>
              </button>

              <div className="text-right">
                <div className="text-[11px] text-[#B4D9C4]">Verification SLA</div>
                <div className="text-xs font-bold text-[#F2E6A7]">&lt; 350ms response</div>
              </div>
            </div>

          </div>

          {/* Column 3: Result & Outcome Telemetry */}
          <div className="lg:col-span-3 bg-white border border-[#B4D9C4] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-[#0E4032]/70 uppercase tracking-wider mb-4">
                Delivered Outcome
              </div>

              <div className="bg-[#B4D9C4]/20 border border-[#33A685]/40 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0E4032] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#33A685]" />
                  <span>Production Impact</span>
                </div>
                <p className="text-xs text-[#0E4032]/85 leading-relaxed font-medium">
                  {activeCase?.result}
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#0E4032]/80">
                <div className="flex items-center justify-between py-1 border-b border-[#B4D9C4]/40">
                  <span>Data Encryption</span>
                  <span className="font-bold text-[#0E4032]">AES-256</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#B4D9C4]/40">
                  <span>Audit Logging</span>
                  <span className="font-bold text-[#33A685]">Immutable</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#B4D9C4]/40">
                  <span>Deployment</span>
                  <span className="font-bold text-[#0E4032]">AWS / Azure / GCP</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="mt-6 w-full py-2.5 px-4 rounded-xl bg-[#0E4032] text-white hover:bg-[#155442] text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Build this workflow</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#33A685]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
