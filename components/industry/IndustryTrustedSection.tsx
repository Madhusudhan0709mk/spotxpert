'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Layers, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';
import { IndustryImage } from '@/src/data/industries';

interface IndustryTrustedSectionProps {
  overview: {
    paragraph1: string;
    paragraph2: string;
  };
  integrations: string[];
  compliance: string[];
  architectureImage: IndustryImage;
  industryName: string;
}

export default function IndustryTrustedSection({
  overview,
  integrations,
  compliance,
  architectureImage,
  industryName,
}: IndustryTrustedSectionProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-[#F2F2F2] border-b border-[#B4D9C4]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Industry Operational Context & Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-16">
          
          {/* Left Text: 2 short paragraphs on the industry today */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032] shadow-xs">
              <Layers className="w-3.5 h-3.5 text-[#33A685]" />
              Industry Operations &amp; Technology Shift
            </div>

            <h2 className="section-heading text-[#0E4032] text-2xl sm:text-3xl font-bold tracking-tight">
              Modernizing {industryName} operations through engineering excellence
            </h2>

            <p className="body-text text-[#0E4032]/85 text-sm sm:text-base leading-relaxed">
              {overview.paragraph1}
            </p>

            <p className="body-text text-[#0E4032]/80 text-sm sm:text-base leading-relaxed">
              {overview.paragraph2}
            </p>
          </div>

          {/* Right Image: Architecture & Operations Photo with Fallback */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#B4D9C4] shadow-md bg-white aspect-[4/3]">
              {!imageFailed ? (
                <Image
                  src={architectureImage.url}
                  alt={architectureImage.alt}
                  fill
                  className="object-cover"
                  onError={() => setImageFailed(true)}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#B4D9C4]/30 to-[#33A685]/10 flex flex-col items-center justify-center p-6 text-center">
                  <Building2 className="w-16 h-16 text-[#33A685] mb-2" />
                  <span className="text-xs font-bold text-[#0E4032]">{industryName}</span>
                </div>
              )}
            </div>
            {architectureImage.caption && (
              <p className="text-[11px] text-[#0E4032]/70 mt-2 text-center font-medium">
                {architectureImage.caption}
              </p>
            )}
          </div>

        </div>

        {/* Real Ecosystem Integrations & Standards Cards (6–8 tools, names only, text badges) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Integrations Badges Box */}
          <div className="md:col-span-7 bg-white border border-[#B4D9C4] rounded-2xl p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#B4D9C4]/50">
              <div className="text-xs font-bold text-[#0E4032] uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#33A685]" />
                <span>Industry Tool Ecosystem &amp; API Integrations</span>
              </div>
              <span className="text-[11px] text-[#33A685] font-semibold">Native Connectors</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {integrations.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-xl bg-[#F2F2F2] border border-[#B4D9C4] text-xs font-semibold text-[#0E4032] hover:border-[#33A685] transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Compliance & Standards Box */}
          <div className="md:col-span-5 bg-white border border-[#B4D9C4] rounded-2xl p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#B4D9C4]/50">
              <div className="text-xs font-bold text-[#0E4032] uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#33A685]" />
                <span>Compliance &amp; Regulatory Frameworks</span>
              </div>
              <span className="text-[11px] text-[#0E4032]/70 font-semibold">Strict Governance</span>
            </div>

            <div className="space-y-2">
              {compliance.map((comp, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#0E4032]/90 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#33A685] flex-shrink-0" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
