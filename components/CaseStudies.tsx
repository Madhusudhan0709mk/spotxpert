'use client';

import React from 'react';
import { ArrowUpRight, TrendingUp, Cpu, Award } from 'lucide-react';

interface CaseStudiesProps {
  onOpenConsultation: () => void;
}

export default function CaseStudies({ onOpenConsultation }: CaseStudiesProps) {
  const caseStudies = [
    {
      client: 'Red Bull',
      category: 'Real-time AI & Edge Analytics',
      title: 'Architecting High-Frequency Athlete Biometric Telemetry at Sub-Second Latency',
      impact: '300M+ data points/day',
      metricLabel: 'Processed in real-time with zero packet loss',
      tags: ['Kafka', 'AWS EKS', 'Edge AI', 'Go'],
      color: 'from-orange-500/20 to-red-500/20',
      accent: '#ff5e57',
    },
    {
      client: 'FreeConferenceCall',
      category: 'Cloud Modernization & WebRTC',
      title: 'Scaling Global Telecommunications Grid to Support 10M+ Daily High-Def Streams',
      impact: '99.999% Uptime',
      metricLabel: 'Achieved with zero-downtime rolling upgrades',
      tags: ['WebRTC', 'Kubernetes', 'Terraform', 'C++'],
      color: 'from-blue-500/20 to-indigo-500/20',
      accent: '#54a0ff',
    },
    {
      client: 'Global HealthTech',
      category: 'Generative AI & Computer Vision',
      title: 'HIPAA-Compliant Vision AI Pipeline for Automated Clinical Pathology Screening',
      impact: '72% Faster Triage',
      metricLabel: 'Turnaround time reduced from 4 days to 4 hours',
      tags: ['PyTorch', 'AWS HealthLake', 'Vision Transformers', 'FastAPI'],
      color: 'from-emerald-500/20 to-teal-500/20',
      accent: '#1dd1a1',
    },
  ];

  return (
    <section id="resources" className="py-20 sm:py-28 bg-[#F2F2F2] relative border-b border-[#B4D9C4]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B4D9C4]/40 border border-[#33A685]/40 text-[#0E4032] text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-[#33A685]" />
              Client Success Stories
            </div>
            <h2 className="section-heading text-[#0E4032]">
              Real Impact, <span className="text-[#33A685]">Measurable Velocity</span>
            </h2>
            <p className="body-text text-[#0E4032]/80 mt-3 max-w-xl">
              See how our agile engineering pods partner with high-velocity engineering organizations to ship world-class systems.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#33A685] hover:text-[#0E4032] transition-colors cursor-pointer group btn-text"
          >
            <span>View All 150+ Case Studies</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#B4D9C4] rounded-2xl p-7 flex flex-col justify-between hover:border-[#33A685] transition-all duration-300 hover:-translate-y-1 group shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[17px] font-semibold font-mono tracking-tight text-[#0E4032]">
                    {study.client}
                  </span>
                  <span className="text-[11px] font-medium text-[#0E4032] uppercase tracking-wider bg-[#B4D9C4]/35 px-2.5 py-1 rounded-md border border-[#B4D9C4]">
                    {study.category}
                  </span>
                </div>

                <h3 className="card-heading text-[#0E4032] group-hover:text-[#33A685] transition-colors mb-6">
                  {study.title}
                </h3>

                {/* Metric Anchor in #0E4032 */}
                <div className="bg-[#0E4032] border border-[#1b6550] rounded-xl p-4 mb-6 text-white shadow-sm">
                  <div className="flex items-center gap-2 text-[#F2E6A7] font-bold text-2xl tracking-tight">
                    <TrendingUp className="w-5 h-5 text-[#33A685]" />
                    <span>{study.impact}</span>
                  </div>
                  <div className="text-xs text-[#B4D9C4] mt-1 font-normal leading-normal">
                    {study.metricLabel}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#B4D9C4]/60">
                  {study.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono font-normal text-[#0E4032] bg-[#F2F2F2] border border-[#B4D9C4] px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
