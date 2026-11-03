'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import PyramidGraphic from './PyramidGraphic';

interface HeroProps {
  onOpenConsultation?: () => void;
  onOpenWidget?: () => void;
}

export default function Hero({ onOpenConsultation: _onOpenConsultation, onOpenWidget: _onOpenWidget }: HeroProps) {
  // Heights and opacities for the vertical decorative barcode stripes on bottom-left
  const barcodeStripes = [
    { height: 'h-48 sm:h-64', opacity: 'opacity-40' },
    { height: 'h-64 sm:h-80', opacity: 'opacity-60' },
    { height: 'h-40 sm:h-56', opacity: 'opacity-35' },
    { height: 'h-80 sm:h-96', opacity: 'opacity-85' },
    { height: 'h-52 sm:h-72', opacity: 'opacity-50' },
    { height: 'h-72 sm:h-92', opacity: 'opacity-70' },
    { height: 'h-36 sm:h-48', opacity: 'opacity-30' },
    { height: 'h-60 sm:h-84', opacity: 'opacity-55' },
    { height: 'h-44 sm:h-60', opacity: 'opacity-40' },
    { height: 'h-76 sm:h-96', opacity: 'opacity-75' },
    { height: 'h-32 sm:h-44', opacity: 'opacity-25' },
    { height: 'h-56 sm:h-76', opacity: 'opacity-45' },
  ];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen bg-[#0E4032] text-white flex items-center overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-20">
      {/* Background Gradient Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#175b47]/45 via-[#0E4032] to-[#082820] pointer-events-none" />

      {/* Vertical Decorative Barcode Stripes (Bottom-Left) - Themed with Jade & Sage */}
      <div className="absolute left-0 bottom-0 flex items-end gap-1.5 sm:gap-2 px-3 sm:px-6 pointer-events-none z-10 select-none">
        {barcodeStripes.map((stripe, idx) => (
          <div
            key={idx}
            className={`w-1 sm:w-1.5 bg-gradient-to-t from-[#33A685] via-[#1c745b]/60 to-transparent rounded-t-sm ${stripe.height} ${stripe.opacity}`}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[600px]">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 xl:col-span-6 z-20 py-4 sm:py-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              {/* Eyebrow: AI-Native Engineering */}
              <div className="text-[#33A685] font-semibold text-[20px] sm:text-[26px] lg:text-[30px] tracking-tight leading-[1.15] mb-2 sm:mb-3">
                AI-Native Transformation 
              </div>

              {/* Main Headline: For Digital Products & Enterprise Solutions (52px/700/1.08 desktop, 36px mobile) */}
              <h1 className="hero-heading text-white">
               Engineered for Growth.
              </h1>

              {/* CTA Button: Book A Consultation Call (14px font-semibold) */}
              <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-9">
                <Link
                  href="/contact"
                  className="btn-text bg-[#33A685] hover:bg-[#299576] active:bg-[#208064] text-white px-7 py-3.5 rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#33A685]/35 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#33A685]/40 inline-flex items-center justify-center"
                >
                  Book A Consultation Call
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Stepped Pyramid Artwork (matching user selected element) */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="w-full relative lg:translate-x-12 xl:translate-x-20">
              <PyramidGraphic />
            </div>
          </div>

        </div>
      </div>
 
    </section>
  );
}
