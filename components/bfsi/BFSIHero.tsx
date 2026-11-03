'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowRight, Phone, Landmark, Sparkles } from 'lucide-react';
import BFSIArchitectureVisual from './BFSIArchitectureVisual';

interface BFSIHeroProps {
  onOpenConsultation: () => void;
}

export default function BFSIHero({ onOpenConsultation }: BFSIHeroProps) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen bg-[#0E4032] text-white flex items-center overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-24">
      {/* Background Gradient Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#175b47]/45 via-[#0E4032] to-[#082820] pointer-events-none" />

      {/* Decorative Matrix Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#33A685_1px,transparent_1px),linear-gradient(to_bottom,#33A685_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[600px]">
          
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-7 xl:col-span-6 z-20 py-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="max-w-2xl"
            >
              {/* Category Breadcrumbs / Eyebrow */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Link href="/" className="text-xs font-semibold text-[#B4D9C4] hover:text-white transition-colors">
                  Home
                </Link>
                <span className="text-[#33A685] text-xs">&bull;</span>
                <span className="text-xs font-semibold text-[#B4D9C4]">
                  Industries
                </span>
                <span className="text-[#33A685] text-xs">&bull;</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4D9C4]/20 border border-[#33A685]/40 text-[#F2E6A7] text-xs font-semibold uppercase tracking-wider">
                  <Landmark className="w-3.5 h-3.5 text-[#33A685]" />
                  Finance Development Services
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-heading text-white">
                Custom BFSI solutions built for <span className="text-[#33A685]">performance, security,</span> and compliance
              </h1>

              {/* Supporting Description */}
              <p className="body-text text-[#B4D9C4] mt-5 mb-8 sm:mb-10 max-w-xl">
                We develop bespoke solutions that ease operations and empower your customers with fast, reliable, and safe access to financial services.
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenConsultation}
                  className="btn-text bg-[#33A685] hover:bg-[#299576] active:bg-[#208064] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#33A685]/35 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#33A685]/40 flex items-center gap-2"
                >
                  <span>I&apos;d Like To Know More!</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:13212372727"
                  className="btn-text bg-[#08241c] hover:bg-[#155442] text-[#B4D9C4] hover:text-white border border-[#33A685]/50 px-6 py-4 rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#33A685]" />
                  <span>Call (321) 237-2727</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 sm:mt-12 pt-7 border-t border-[#33A685]/30 grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">&lt;200ms</div>
                  <div className="text-[13px] text-[#B4D9C4] font-normal mt-1">Transaction Speed</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">PCI-DSS</div>
                  <div className="text-[13px] text-[#B4D9C4] font-normal mt-1">Level 1 Certified</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#F2E6A7] tracking-tight">99.999%</div>
                  <div className="text-[13px] text-[#B4D9C4] font-normal mt-1">Core SLA Reliability</div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Column: High-Tech BFSI Architecture Visual */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-center">
            <BFSIArchitectureVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
