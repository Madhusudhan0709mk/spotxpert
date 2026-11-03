'use client';

import React from 'react';
import { motion } from 'motion/react';

interface HeroVideoSectionProps {
  onOpenConsultation?: () => void;
}

export default function HeroVideoSection({ onOpenConsultation: _onOpenConsultation }: HeroVideoSectionProps) {
  // Mux video embed configuration
  const muxPlaybackId = 'k6JRnttJIra00P01fTC7RH2F8PVYsZ7Yq2yAy259BhYu4';
  const muxVideoTitle = 'SpotXpertAI';
  const muxIframeUrl = `https://player.mux.com/${muxPlaybackId}?metadata-video-title=${encodeURIComponent(
    muxVideoTitle
  )}&video-title=${encodeURIComponent(muxVideoTitle)}`;

  return (
    <section className="relative py-16 sm:py-24 bg-[#0B2E24] text-white overflow-hidden border-b border-[#33A685]/30">
      {/* Background Ambient Gradients matching Brand Theme */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#175C48]/40 via-[#0B2E24] to-[#061A14] pointer-events-none" />

      {/* Subtle Grid Lines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video Cinema Theater Frame - Focused Clean Mux Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Glowing Aura Ring around Frame */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#33A685]/40 via-[#42CF9F]/20 to-[#1c745b]/40 rounded-2xl sm:rounded-3xl blur-md opacity-70 transition duration-500 pointer-events-none" />

          {/* Clean 16:9 Mux Video Frame */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-[#33A685]/50 shadow-2xl shadow-black/80 aspect-video">
            <iframe
              src={muxIframeUrl}
               
              className="w-full h-full border-0 aspect-video block"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                aspectRatio: '16/9',
              }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
