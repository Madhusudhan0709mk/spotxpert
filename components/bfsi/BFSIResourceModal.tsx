'use client';

import React, { useState } from 'react';
import { X, BookOpen, Download, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export interface ResourceData {
  id: string;
  category: string;
  title: string;
  description: string;
  author?: string;
  date?: string;
  type: 'article' | 'ebook';
  readTime?: string;
  outline: string[];
}

interface ResourceModalProps {
  resource: ResourceData | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export default function BFSIResourceModal({
  resource,
  onClose,
  onOpenConsultation,
}: ResourceModalProps) {
  const [downloaded, setDownloaded] = useState(false);

  if (!resource) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-[#0E4032] border border-[#33A685]/50 rounded-2xl shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            setDownloaded(false);
            onClose();
          }}
          className="absolute top-5 right-5 text-[#B4D9C4] hover:text-white p-2 rounded-lg hover:bg-[#155442] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-8 mb-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0E4032] bg-[#F2E6A7] px-2.5 py-0.5 rounded shadow-xs inline-block mb-2">
            {resource.category}
          </span>
          <h3 className="card-heading text-white">
            {resource.title}
          </h3>
          {resource.author && (
            <div className="text-xs text-[#B4D9C4] mt-2 font-medium">
              {resource.author} &bull; {resource.date} &bull; {resource.readTime}
            </div>
          )}
        </div>

        {/* Synopsis */}
        <div className="bg-[#08241c] border border-[#1b6550] rounded-xl p-4 mb-6">
          <p className="text-sm text-[#B4D9C4] leading-[1.65]">
            {resource.description}
          </p>
        </div>

        {/* Key Chapter Outline */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#33A685]" />
            What You Will Learn In This Publication:
          </h4>
          <div className="space-y-2">
            {resource.outline.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#B4D9C4]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#33A685] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-[#185c49] flex items-center justify-between gap-4">
          <button
            onClick={() => {
              setDownloaded(true);
            }}
            className={`btn-text px-5 py-2.5 rounded-lg text-xs flex items-center gap-2 cursor-pointer transition-all ${
              downloaded 
                ? 'bg-[#145341] text-[#F2E6A7] border border-[#33A685]'
                : 'bg-[#33A685] hover:bg-[#288f72] text-white shadow-md'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>{downloaded ? 'Downloaded PDF' : 'Download Complete Guide'}</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="text-xs font-semibold text-[#B4D9C4] hover:text-[#F2E6A7] flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
