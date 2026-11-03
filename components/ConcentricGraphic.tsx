'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function ConcentricGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none overflow-hidden">
      {/* Outer ambient glow using jade teal #33A685 */}
      <div className="absolute w-[650px] h-[650px] rounded-full bg-[#33A685]/18 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative w-[500px] h-[500px] sm:w-[620px] sm:h-[620px] lg:w-[760px] lg:h-[760px] max-w-none flex-shrink-0"
      >
        <svg
          viewBox="0 0 800 800"
          className="w-full h-full drop-shadow-[0_20px_50px_rgba(5,25,18,0.7)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Color Gradients for smooth enterprise depth matching the new palette */}
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0E4032" />
              <stop offset="100%" stopColor="#061f18" />
            </radialGradient>

            <linearGradient id="outerArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#33A685" />
              <stop offset="100%" stopColor="#1b6d56" />
            </linearGradient>

            <linearGradient id="midJadeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#289b7b" />
              <stop offset="100%" stopColor="#145341" />
            </linearGradient>

            <linearGradient id="innerRightGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#208064" />
              <stop offset="100%" stopColor="#33A685" />
            </linearGradient>

            {/* Clip masks for quadrant geometric cuts */}
            <clipPath id="topRightQuad">
              <rect x="400" y="0" width="400" height="400" />
            </clipPath>
            <clipPath id="bottomRightQuad">
              <rect x="400" y="400" width="400" height="400" />
            </clipPath>
            <clipPath id="topLeftQuad">
              <rect x="0" y="0" width="400" height="400" />
            </clipPath>
            <clipPath id="bottomLeftQuad">
              <rect x="0" y="400" width="400" height="400" />
            </clipPath>
          </defs>

          {/* 1. Outermost subtle concentric ring orbit in soft sage #B4D9C4 */}
          <circle
            cx="400"
            cy="400"
            r="380"
            stroke="#B4D9C4"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            strokeDasharray="4 6"
          />
          <circle
            cx="400"
            cy="400"
            r="355"
            stroke="#33A685"
            strokeWidth="1"
            strokeOpacity="0.25"
          />

          {/* 2. Outer Ring: Giant Right-Side Sweeping Arc in #33A685 */}
          {/* Outer radius 350, inner radius 270 */}
          <path
            d="M 400 50 A 350 350 0 0 1 750 400 A 350 350 0 0 1 400 750 L 400 670 A 270 270 0 0 0 670 400 A 270 270 0 0 0 400 130 Z"
            fill="#238b6f"
            opacity="0.95"
          />
          {/* Top-right segment accentuation of outer ring */}
          <path
            d="M 400 50 A 350 350 0 0 1 750 400 L 670 400 A 270 270 0 0 0 400 130 Z"
            fill="#33A685"
            opacity="0.9"
          />
          {/* Bottom-right segment of outer ring with deep tone */}
          <path
            d="M 750 400 A 350 350 0 0 1 400 750 L 400 670 A 270 270 0 0 0 670 400 Z"
            fill="#165946"
            opacity="0.9"
          />

          {/* 3. Middle Ring (Radius 270 to 180) */}
          {/* Left half of middle ring - dominant sage/deep emerald disk */}
          <path
            d="M 400 130 A 270 270 0 0 0 130 400 A 270 270 0 0 0 400 670 L 400 580 A 180 180 0 0 1 220 400 A 180 180 0 0 1 400 220 Z"
            fill="#186450"
            opacity="0.8"
          />

          {/* Middle Ring - Top-Left Quadrant */}
          <path
            d="M 400 130 A 270 270 0 0 0 130 400 L 220 400 A 180 180 0 0 1 400 220 Z"
            fill="#1f7961"
            opacity="0.85"
          />

          {/* Middle Ring - Bottom-Left Quadrant */}
          <path
            d="M 130 400 A 270 270 0 0 0 400 670 L 400 580 A 180 180 0 0 1 220 400 Z"
            fill="#124f3e"
            opacity="0.85"
          />

          {/* Middle Ring - Right side quadrant layers */}
          <path
            d="M 400 220 A 180 180 0 0 1 580 400 L 670 400 A 270 270 0 0 0 400 130 Z"
            fill="#0f4435"
            opacity="0.95"
          />
          <path
            d="M 580 400 A 180 180 0 0 1 400 580 L 400 670 A 270 270 0 0 0 670 400 Z"
            fill="#093125"
            opacity="0.95"
          />

          {/* 4. Inner Ring (Radius 180 down to 90) */}
          {/* Left half (Deep anchor forest green #082920) */}
          <path
            d="M 400 220 A 180 180 0 0 0 400 580 L 400 490 A 90 90 0 0 1 400 310 Z"
            fill="#082820"
          />

          {/* Right half (Vibrant bright jade #33A685) */}
          <path
            d="M 400 220 A 180 180 0 0 1 400 580 L 400 490 A 90 90 0 0 0 400 310 Z"
            fill="#33A685"
          />

          {/* 5. Center Core Void (Radius 90) */}
          <circle
            cx="400"
            cy="400"
            r="90"
            fill="#061e17"
          />
          <circle
            cx="400"
            cy="400"
            r="88"
            fill="url(#centerGlow)"
          />

          {/* Center rim highlight with soft #F2E6A7 touch */}
          <circle
            cx="400"
            cy="400"
            r="90"
            stroke="#B4D9C4"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />

          {/* Precision quadrant dividing cuts */}
          <line
            x1="400"
            y1="50"
            x2="400"
            y2="750"
            stroke="#051c15"
            strokeWidth="3"
            opacity="0.8"
          />
          <line
            x1="130"
            y1="400"
            x2="750"
            y2="400"
            stroke="#051c15"
            strokeWidth="2.5"
            opacity="0.7"
          />
        </svg>
      </motion.div>
    </div>
  );
}
