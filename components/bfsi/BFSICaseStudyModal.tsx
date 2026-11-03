'use client';

import React from 'react';
import { X, TrendingUp, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

export interface CaseStudyData {
  id: string;
  category: string;
  title: string;
  summary: string;
  impactMetric: string;
  impactLabel: string;
  challenge: string;
  solution: string;
  technologies: string[];
}

interface CaseStudyModalProps {
  study: CaseStudyData | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export default function BFSICaseStudyModal({
  study,
  onClose,
  onOpenConsultation,
}: CaseStudyModalProps) {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0E4032] border border-[#33A685]/50 rounded-2xl shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#B4D9C4] hover:text-white p-2 rounded-lg hover:bg-[#155442] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0E4032] bg-[#F2E6A7] px-2.5 py-0.5 rounded shadow-xs inline-block mb-2">
            {study.category}
          </span>
          <h2 className="card-heading text-white">
            {study.title}
          </h2>
        </div>

        {/* Metric Highlight Box */}
        <div className="bg-[#08241c] border border-[#1b6550] rounded-xl p-4 mb-6 flex items-center justify-between">
          <div>
            <div className="text-xs text-[#B4D9C4] font-medium">Measurable Enterprise Outcome</div>
            <div className="text-2xl sm:text-3xl font-bold text-[#F2E6A7] tracking-tight mt-0.5">
              {study.impactMetric}
            </div>
          </div>
          <div className="text-right text-xs text-[#B4D9C4] max-w-xs font-normal">
            {study.impactLabel}
          </div>
        </div>

        {/* Architecture Details */}
        <div className="space-y-4 mb-6 text-sm text-[#B4D9C4] leading-[1.65]">
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#33A685]" />
              Executive Challenge
            </h4>
            <p className="font-normal text-white/90">{study.challenge}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#33A685]" />
              Engineered Solution
            </h4>
            <p className="font-normal text-white/90">{study.solution}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="pt-4 border-t border-[#185c49] mb-6">
          <div className="text-xs font-semibold text-[#B4D9C4] uppercase tracking-wider mb-2.5">
            Key Architecture &amp; Frameworks:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {study.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono font-medium text-white bg-[#08241c] border border-[#1b6550] px-2.5 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#185c49]">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-[#B4D9C4] hover:text-white px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="bg-[#33A685] hover:bg-[#288f72] text-white btn-text px-6 py-2.5 rounded-lg flex items-center gap-2 shadow-md cursor-pointer transition-all"
          >
            <span>Discuss Similar Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
