'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, ChevronLeft, ChevronRight, Volume2, Sparkles, Mic } from 'lucide-react';
import { AudioSample } from '@/lib/industries-data';

interface IndustryAudioCarouselProps {
  samples: AudioSample[];
  industryName: string;
}

export default function IndustryAudioCarousel({
  samples,
  industryName,
}: IndustryAudioCarouselProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTogglePlay = (sample: AudioSample) => {
    if (playingId === sample.id) {
      // Pause
      setPlayingId(null);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    } else {
      // Start playing
      setPlayingId(sample.id);

      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        try {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(sample.audioSimText);
          utterance.rate = 1.0;
          utterance.pitch = 1.0;
          utterance.onend = () => {
            setPlayingId(null);
          };
          window.speechSynthesis.speak(utterance);
        } catch (e) {
          // If browser speech fails, timeout after 5 seconds
          setTimeout(() => setPlayingId(null), 5000);
        }
      } else {
        setTimeout(() => setPlayingId(null), 5000);
      }
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % samples.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + samples.length) % samples.length);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F2F2F2] border-b border-[#B4D9C4]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Frames 57s - 60s) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032] mb-3 shadow-xs">
              <Mic className="w-3.5 h-3.5 text-[#33A685]" />
              Production Voice Latency &amp; Intonation
            </div>
            <h2 className="section-heading text-[#0E4032]">
              Hear the difference in every dialect and tone.
            </h2>
            <p className="body-text text-[#0E4032]/80 mt-3 text-sm sm:text-base">
              Listen to actual audio clips trained specifically on {industryName} domain terminology and customer dialogues.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={handlePrev}
              aria-label="Previous sample"
              className="w-10 h-10 rounded-full bg-white border border-[#B4D9C4] flex items-center justify-center text-[#0E4032] hover:bg-[#33A685] hover:text-white hover:border-[#33A685] transition-all cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next sample"
              className="w-10 h-10 rounded-full bg-white border border-[#B4D9C4] flex items-center justify-center text-[#0E4032] hover:bg-[#33A685] hover:text-white hover:border-[#33A685] transition-all cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Cards Grid (Frames 60s - 66s) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {samples.map((sample, idx) => {
            const isPlaying = playingId === sample.id;
            return (
              <div
                key={sample.id}
                className={`bg-white border rounded-3xl p-6 shadow-sm transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  isPlaying
                    ? 'border-[#33A685] ring-2 ring-[#33A685]/40 shadow-lg'
                    : 'border-[#B4D9C4] hover:border-[#33A685]/80'
                }`}
              >
                {/* Playing Top Indicator Strip */}
                {isPlaying && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#33A685] via-[#F2E6A7] to-[#33A685] animate-pulse" />
                )}

                <div>
                  {/* Category and Duration */}
                  <div className="flex items-center justify-between mb-4 text-xs">
                    <span className="bg-[#B4D9C4]/35 text-[#0E4032] font-semibold px-2.5 py-0.5 rounded-full border border-[#B4D9C4]">
                      {sample.category}
                    </span>
                    <span className="text-[#0E4032]/70 font-mono font-medium">
                      {sample.duration}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="card-heading text-[#0E4032] text-base font-bold mb-2">
                    {sample.title}
                  </h3>
                  <p className="text-xs text-[#0E4032]/75 leading-relaxed mb-4">
                    {sample.description}
                  </p>

                  {/* Transcript Quotation Bubble */}
                  <div className="bg-[#F2F2F2]/80 border border-[#B4D9C4]/60 rounded-xl p-3 text-xs text-[#0E4032]/90 italic font-medium leading-relaxed mb-6">
                    &ldquo;{sample.audioSimText}&rdquo;
                  </div>
                </div>

                {/* Bottom Player Controller */}
                <div className="pt-4 border-t border-[#B4D9C4]/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleTogglePlay(sample)}
                      className={`w-11 h-11 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-md ${
                        isPlaying
                          ? 'bg-[#0E4032] text-[#F2E6A7]'
                          : 'bg-[#33A685] hover:bg-[#288f72] text-white'
                      }`}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                    </button>

                    <div>
                      <div className="text-xs font-bold text-[#0E4032]">
                        {sample.speaker}
                      </div>
                      <div className="text-[11px] text-[#33A685] font-medium">
                        {sample.accent}
                      </div>
                    </div>
                  </div>

                  {/* Soundwave Simulation Animation */}
                  <div className="flex items-center gap-1 h-6">
                    {[0.3, 0.7, 1, 0.5, 0.8, 0.4].map((scale, i) => (
                      <motion.span
                        key={i}
                        animate={
                          isPlaying
                            ? {
                                height: ['4px', '22px', '8px', '18px', '6px'],
                              }
                            : { height: '4px' }
                        }
                        transition={{
                          repeat: Infinity,
                          duration: 0.8 + i * 0.1,
                          ease: 'easeInOut',
                        }}
                        className={`w-1 rounded-full ${
                          isPlaying ? 'bg-[#33A685]' : 'bg-[#B4D9C4]'
                        }`}
                      />
                    ))}
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
