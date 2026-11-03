'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Layers, Building2, CheckCircle2 } from 'lucide-react';
import { IndustryImage } from '@/src/data/industries';

interface IndustryVisualShowcaseProps {
  images: {
    hero: IndustryImage;
    architecture: IndustryImage;
    operations: IndustryImage;
    showcase: IndustryImage;
  };
  industryName: string;
}

export default function IndustryVisualShowcase({
  images,
  industryName,
}: IndustryVisualShowcaseProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const galleryItems = [
    {
      title: 'Operational Excellence & Production Workflows',
      desc: `Modern software architectures deployed directly into ${industryName} enterprise workflows.`,
      image: images.operations,
      tag: 'Operations',
    },
    {
      title: 'Digital Systems & Enterprise Architecture',
      desc: `Scalable cloud backbones, automated data sync, and high-availability systems.`,
      image: images.architecture,
      tag: 'Architecture',
    },
    {
      title: 'Client & Stakeholder Touchpoints',
      desc: `Intuitive, self-service portals built for desktop, tablet, and mobile field use.`,
      image: images.showcase,
      tag: 'User Experience',
    },
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F2F2F2] border-b border-[#B4D9C4]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032] mb-3 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-[#33A685]" />
              Production Environments in Action
            </div>
            <h2 className="section-heading text-[#0E4032]">
              Engineered for the reality of {industryName}
            </h2>
            <p className="body-text text-[#0E4032]/80 mt-3 text-sm sm:text-base">
              Explore how our custom software solutions fit into the physical and digital operations of leading enterprises.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="w-10 h-10 rounded-full bg-white border border-[#B4D9C4] flex items-center justify-center text-[#0E4032] hover:bg-[#33A685] hover:text-white hover:border-[#33A685] transition-all cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="w-10 h-10 rounded-full bg-white border border-[#B4D9C4] flex items-center justify-center text-[#0E4032] hover:bg-[#33A685] hover:text-white hover:border-[#33A685] transition-all cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => {
            const isFailed = failedImages[idx];
            return (
              <div
                key={idx}
                className="bg-white border border-[#B4D9C4] rounded-3xl overflow-hidden shadow-sm hover:border-[#33A685] transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Container with Fallback */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E5EAE7]">
                  {!isFailed ? (
                    <Image
                      src={item.image.url}
                      alt={item.image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [idx]: true }))
                      }
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#B4D9C4]/40 via-[#F2F2F2] to-[#33A685]/20 flex flex-col items-center justify-center p-6 text-center">
                      <Building2 className="w-12 h-12 text-[#33A685] mb-2" />
                      <span className="text-xs font-bold text-[#0E4032]">{industryName}</span>
                    </div>
                  )}

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#0E4032]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="card-heading text-base font-bold text-[#0E4032] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#0E4032]/75 leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#B4D9C4]/50 flex items-center gap-1.5 text-[11px] font-semibold text-[#33A685]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Production Grade SLA</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
