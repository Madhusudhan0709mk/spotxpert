'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function ServiceIsometricGraphic() {
  return (
    <div className="relative w-full max-w-[460px] lg:max-w-[520px] aspect-square mx-auto flex items-center justify-center select-none pointer-events-none">
      {/* Background Soft Emerald Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#33A685]/25 via-[#42CF9F]/15 to-transparent rounded-full blur-3xl" />

      {/* SVG Layered Faceted Geometric Rhombus - Matching the reference screenshot shape */}
      <motion.svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
        initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <defs>
          {/* Gradients tailored to SpotXpert's brand theme */}
          <linearGradient id="facetTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#42CF9F" />
            <stop offset="50%" stopColor="#33A685" />
            <stop offset="100%" stopColor="#1E7A60" />
          </linearGradient>

          <linearGradient id="facetRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#258E70" />
            <stop offset="100%" stopColor="#0E4032" />
          </linearGradient>

          <linearGradient id="facetLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A6851" />
            <stop offset="100%" stopColor="#092820" />
          </linearGradient>

          <linearGradient id="facetInnerTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#55E2B2" />
            <stop offset="100%" stopColor="#33A685" />
          </linearGradient>

          <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F2E6A7" />
            <stop offset="100%" stopColor="#D4C374" />
          </linearGradient>

          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Ring / Halo */}
        <motion.circle
          cx="250"
          cy="250"
          r="195"
          fill="none"
          stroke="#33A685"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          opacity="0.35"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '250px 250px' }}
        />

        {/* Outer Stepped Rhombus Frame */}
        <g transform="translate(250, 250) rotate(45) translate(-250, -250)">
          {/* Layer 1: Outermost Soft Rim */}
          <rect
            x="110"
            y="110"
            width="280"
            height="280"
            rx="48"
            fill="none"
            stroke="url(#facetTop)"
            strokeWidth="3"
            opacity="0.4"
          />

          {/* Layer 2: Main Faceted Thick Rhombus Body */}
          <rect
            x="130"
            y="130"
            width="240"
            height="240"
            rx="40"
            fill="url(#facetLeft)"
            stroke="#33A685"
            strokeWidth="2"
            opacity="0.9"
          />

          {/* Layer 3: Inner Beveled Cutout creating the 3D window */}
          <rect
            x="160"
            y="160"
            width="180"
            height="180"
            rx="30"
            fill="#092820"
            stroke="url(#facetTop)"
            strokeWidth="3.5"
          />

          {/* Layer 4: Deep Inner Core with Geometric Ribbons */}
          <rect
            x="195"
            y="195"
            width="110"
            height="110"
            rx="18"
            fill="url(#facetRight)"
            stroke="#42CF9F"
            strokeWidth="2"
            opacity="0.95"
          />

          {/* Layer 5: Bright Core Diamond Accent */}
          <rect
            x="225"
            y="225"
            width="50"
            height="50"
            rx="8"
            fill="url(#facetInnerTop)"
            stroke="#F2E6A7"
            strokeWidth="1.5"
          />
        </g>

        {/* Diagonal Light Glint Lines across the Diamond */}
        <line
          x1="120"
          y1="140"
          x2="380"
          y2="360"
          stroke="url(#goldAccent)"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.6"
        />
        <line
          x1="380"
          y1="140"
          x2="120"
          y2="360"
          stroke="#42CF9F"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.5"
        />

        {/* Orbiting Particle Nodes */}
        <motion.circle
          cx="250"
          cy="70"
          r="6"
          fill="#42CF9F"
          filter="url(#glowFilter)"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.circle
          cx="430"
          cy="250"
          r="5"
          fill="#F2E6A7"
          filter="url(#glowFilter)"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
        <motion.circle
          cx="250"
          cy="430"
          r="6"
          fill="#33A685"
          filter="url(#glowFilter)"
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
        />
        <motion.circle
          cx="70"
          cy="250"
          r="5"
          fill="#42CF9F"
          filter="url(#glowFilter)"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </motion.svg>
    </div>
  );
}
