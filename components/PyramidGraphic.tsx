'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function PyramidGraphic() {
  const aspect = 0.52; // slope ratio of isometric projection matching the reference image
  const cx = 400;

  // 8 progressive tiers from bottom (base) to top (sub-apex)
  const tiers = [
    {
      // Tier 1 (Base - bottom, deepest forest pine green #0E4032 / #145341)
      id: 1,
      w: 275,
      h: 30,
      topGrad: ['#28755e', '#1c5644'],
      leftGrad: ['#216853', '#164839'],
      rightGrad: ['#123e30', '#0a261e'],
    },
    {
      // Tier 2
      id: 2,
      w: 242,
      h: 29,
      topGrad: ['#2e856b', '#226955'],
      leftGrad: ['#277861', '#1b5645'],
      rightGrad: ['#174d3d', '#0e3429'],
    },
    {
      // Tier 3
      id: 3,
      w: 210,
      h: 28,
      topGrad: ['#35977a', '#297c64'],
      leftGrad: ['#2e8b70', '#226a54'],
      rightGrad: ['#1d5f4c', '#134234'],
    },
    {
      // Tier 4 (Teal jade #33A685)
      id: 4,
      w: 178,
      h: 28,
      topGrad: ['#3cb28f', '#31987b'],
      leftGrad: ['#36a383', '#288369'],
      rightGrad: ['#22715a', '#175241'],
    },
    {
      // Tier 5
      id: 5,
      w: 146,
      h: 28,
      topGrad: ['#4ec5a3', '#3ea98b'],
      leftGrad: ['#45b594', '#349478'],
      rightGrad: ['#2b846b', '#1e6350'],
    },
    {
      // Tier 6 (Mint sage #B4D9C4)
      id: 6,
      w: 116,
      h: 28,
      topGrad: ['#6cd7b7', '#55be9d'],
      leftGrad: ['#60c8a6', '#49aa8c'],
      rightGrad: ['#389b7d', '#297960'],
    },
    {
      // Tier 7
      id: 7,
      w: 86,
      h: 28,
      topGrad: ['#8de6c9', '#73ccb1'],
      leftGrad: ['#80d6b8', '#66bba0'],
      rightGrad: ['#4bac8c', '#37876e'],
    },
    {
      // Tier 8 (Top square slab, pale sage mint)
      id: 8,
      w: 58,
      h: 28,
      topGrad: ['#b2f2d9', '#93e1c6'],
      leftGrad: ['#a2e2c8', '#86ccb2'],
      rightGrad: ['#5ebd9e', '#49987d'],
    },
  ];

  // Calculate vertical positions:
  // Base slab front vertex starts at yBase.
  // Each subsequent slab sits directly on top of the previous slab.
  const yBase = 600;
  let currentY = yBase;

  const renderedTiers = tiers.map((tier) => {
    const frontY = currentY;
    const dy = tier.w * aspect;
    const topY = frontY - dy;
    const backY = topY - dy;
    const leftX = cx - tier.w;
    const rightX = cx + tier.w;

    // Advance currentY upward for next slab (moving by this slab's thickness)
    currentY -= tier.h;

    return {
      ...tier,
      frontY,
      dy,
      topY,
      backY,
      leftX,
      rightX,
      bottomFrontY: frontY + tier.h,
      bottomLeftY: topY + tier.h,
      bottomRightY: topY + tier.h,
    };
  });

  // Top of Tier 8 is where the apex sits:
  const topTier = renderedTiers[renderedTiers.length - 1];
  const apexBaseFrontY = currentY;
  const apexDy = topTier.w * aspect;
  const apexBaseTopY = apexBaseFrontY - apexDy;
  const apexPeakY = apexBaseFrontY - 88; // height of pyramid apex cap
  const apexLeftX = cx - topTier.w;
  const apexRightX = cx + topTier.w;

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden py-4">
      {/* Ambient background glow matching the jade/sage palette */}
      <div className="absolute w-[580px] h-[580px] rounded-full bg-[#33A685]/16 blur-[110px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
        whileHover={{ y: -6, transition: { duration: 0.3 } }}
        className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] lg:w-[540px] lg:h-[540px] xl:w-[580px] xl:h-[580px] flex-shrink-0 cursor-pointer drop-shadow-[0_25px_45px_rgba(4,20,14,0.65)]"
      >
        <svg
          viewBox="0 0 800 800"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft floor shadow filter */}
            <filter id="floorShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
            </filter>

            {/* Gradients for each tier */}
            {renderedTiers.map((t) => (
              <React.Fragment key={t.id}>
                {/* Top face gradient */}
                <linearGradient
                  id={`topGrad-${t.id}`}
                  x1={t.leftX}
                  y1={t.topY}
                  x2={t.rightX}
                  y2={t.topY}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor={t.topGrad[0]} />
                  <stop offset="100%" stopColor={t.topGrad[1]} />
                </linearGradient>

                {/* Left face gradient */}
                <linearGradient
                  id={`leftGrad-${t.id}`}
                  x1={t.leftX}
                  y1={t.topY}
                  x2={cx}
                  y2={t.frontY}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor={t.leftGrad[0]} />
                  <stop offset="100%" stopColor={t.leftGrad[1]} />
                </linearGradient>

                {/* Right face gradient */}
                <linearGradient
                  id={`rightGrad-${t.id}`}
                  x1={cx}
                  y1={t.frontY}
                  x2={t.rightX}
                  y2={t.topY}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor={t.rightGrad[0]} />
                  <stop offset="100%" stopColor={t.rightGrad[1]} />
                </linearGradient>
              </React.Fragment>
            ))}

            {/* Apex Pyramid gradients */}
            <linearGradient id="apexLeft" x1={apexLeftX} y1={apexBaseTopY} x2={cx} y2={apexBaseFrontY} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#d8f8e8" />
              <stop offset="70%" stopColor="#b4ecd1" />
              <stop offset="100%" stopColor="#9de0c3" />
            </linearGradient>
            <linearGradient id="apexRight" x1={cx} y1={apexBaseFrontY} x2={apexRightX} y2={apexBaseTopY} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#b6edd3" />
              <stop offset="50%" stopColor="#87d6b3" />
              <stop offset="100%" stopColor="#67be98" />
            </linearGradient>

            {/* Apex peak sunlight highlight */}
            <radialGradient id="apexSunlight" cx="50%" cy="30%" r="50%">
              <stop offset="0%" stopColor="#F2E6A7" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#B4D9C4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#33A685" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 1. Floor Cast Shadow under base slab */}
          <ellipse
            cx="400"
            cy="650"
            rx="290"
            ry="75"
            fill="#03160f"
            opacity="0.85"
            filter="url(#floorShadow)"
          />

          {/* 2. Stepped Slabs: Rendered in painters order from bottom (Tier 1) to top (Tier 8) */}
          {renderedTiers.map((t) => (
            <g key={t.id} id={`tier-${t.id}`}>
              {/* Left Face of slab */}
              <polygon
                points={`
                  ${t.leftX},${t.topY}
                  ${cx},${t.frontY}
                  ${cx},${t.bottomFrontY}
                  ${t.leftX},${t.bottomLeftY}
                `}
                fill={`url(#leftGrad-${t.id})`}
              />

              {/* Right Face of slab */}
              <polygon
                points={`
                  ${cx},${t.frontY}
                  ${t.rightX},${t.topY}
                  ${t.rightX},${t.bottomRightY}
                  ${cx},${t.bottomFrontY}
                `}
                fill={`url(#rightGrad-${t.id})`}
              />

              {/* Top Face of slab */}
              <polygon
                points={`
                  ${cx},${t.frontY}
                  ${t.rightX},${t.topY}
                  ${cx},${t.backY}
                  ${t.leftX},${t.topY}
                `}
                fill={`url(#topGrad-${t.id})`}
              />

              {/* Center Corner Crease Line (highlights the 3D edge facing the viewer) */}
              <line
                x1={cx}
                y1={t.frontY}
                x2={cx}
                y2={t.bottomFrontY}
                stroke="#d4fce8"
                strokeWidth="1.2"
                strokeOpacity="0.45"
              />

              {/* Top Rim Highlight */}
              <polyline
                points={`
                  ${t.leftX},${t.topY}
                  ${cx},${t.frontY}
                  ${t.rightX},${t.topY}
                `}
                stroke="#e8fff4"
                strokeWidth="1"
                strokeOpacity="0.3"
              />
            </g>
          ))}

          {/* 3. Apex Pyramid on Top (Tier 9 Point) */}
          <g id="pyramid-apex">
            {/* Left triangular facet */}
            <polygon
              points={`
                ${cx},${apexPeakY}
                ${apexLeftX},${apexBaseTopY}
                ${cx},${apexBaseFrontY}
              `}
              fill="url(#apexLeft)"
            />

            {/* Right triangular facet */}
            <polygon
              points={`
                ${cx},${apexPeakY}
                ${cx},${apexBaseFrontY}
                ${apexRightX},${apexBaseTopY}
              `}
              fill="url(#apexRight)"
            />

            {/* Apex Center Ridge highlight */}
            <line
              x1={cx}
              y1={apexPeakY}
              x2={cx}
              y2={apexBaseFrontY}
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeOpacity="0.75"
            />

            {/* Peak Golden/Sunlight Highlight */}
            <circle
              cx={cx}
              cy={apexPeakY + 12}
              r="24"
              fill="url(#apexSunlight)"
              style={{ mixBlendMode: 'screen' }}
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
