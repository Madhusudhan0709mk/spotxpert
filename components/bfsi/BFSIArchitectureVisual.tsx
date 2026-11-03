'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Lock, Landmark, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export default function BFSIArchitectureVisual() {
  const [activeMetric, setActiveMetric] = useState<'latency' | 'fraud' | 'compliance' | 'settlement'>('latency');

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Outer Glow Halo */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#33A685]/30 via-[#B4D9C4]/20 to-[#33A685]/10 rounded-3xl blur-xl opacity-75 pointer-events-none" />

      {/* Main Glassmorphic Terminal Card */}
      <div className="relative bg-[#092b22]/90 border border-[#33A685]/40 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
        
        {/* Top Terminal Status Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#185c49]/80 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#33A685] animate-pulse" />
            <span className="text-xs font-mono font-medium text-[#B4D9C4] uppercase tracking-wider">
              BFSI Core Engine &bull; High-Frequency Active
            </span>
          </div>
          <span className="text-[11px] font-semibold text-[#0E4032] bg-[#F2E6A7] px-2.5 py-0.5 rounded shadow-xs">
            ISO 20022 Ready
          </span>
        </div>

        {/* Live Architecture Flow Map */}
        <div className="space-y-3.5 mb-6">
          
          {/* Layer 1: Consumer & Open Banking Gateway */}
          <div className="bg-[#08241c] border border-[#1b6550] rounded-xl p-3.5 flex items-center justify-between hover:border-[#33A685] transition-all">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0E4032] border border-[#33A685]/50 flex items-center justify-center text-[#33A685]">
                <Landmark className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <span>Open Banking API &amp; Customer Gateways</span>
                  <span className="text-[10px] text-[#33A685] font-mono bg-[#33A685]/10 px-1.5 py-0.2 rounded">PSD2 / FDX</span>
                </div>
                <div className="text-xs text-[#B4D9C4]/80">
                  e-KYC biometric ingestion &bull; OAuth2 / mTLS 1.3
                </div>
              </div>
            </div>
            <span className="text-xs font-mono text-[#F2E6A7]">Verified</span>
          </div>

          {/* Connection Pulse */}
          <div className="flex justify-center -my-2">
            <div className="w-0.5 h-3 bg-gradient-to-b from-[#33A685] to-[#B4D9C4]" />
          </div>

          {/* Layer 2: Real-time ML Fraud & Risk Engine */}
          <div className="bg-[#08241c] border border-[#33A685]/50 rounded-xl p-3.5 flex items-center justify-between relative overflow-hidden ring-1 ring-[#33A685]/30">
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-[#33A685]/15 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#145341] border border-[#33A685] flex items-center justify-center text-[#F2E6A7]">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <span>ML Fraud Detection &amp; Risk Scoring</span>
                  <span className="w-2 h-2 rounded-full bg-[#F2E6A7] animate-ping" />
                </div>
                <div className="text-xs text-[#B4D9C4]/80">
                  Sub-second graph anomaly scoring &bull; TensorFlow Core
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-mono font-bold text-[#F2E6A7]">99.8%</div>
              <div className="text-[10px] text-[#B4D9C4]">Precision</div>
            </div>
          </div>

          {/* Connection Pulse */}
          <div className="flex justify-center -my-2">
            <div className="w-0.5 h-3 bg-gradient-to-b from-[#B4D9C4] to-[#33A685]" />
          </div>

          {/* Layer 3: Payment Orchestration & Settlement Rail */}
          <div className="bg-[#08241c] border border-[#1b6550] rounded-xl p-3.5 flex items-center justify-between hover:border-[#33A685] transition-all">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0E4032] border border-[#33A685]/50 flex items-center justify-center text-[#33A685]">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <span>Instant Settlement &amp; Ledger Engine</span>
                  <span className="text-[10px] text-[#F2E6A7] font-mono bg-[#F2E6A7]/10 px-1.5 py-0.2 rounded">&lt;200ms</span>
                </div>
                <div className="text-xs text-[#B4D9C4]/80">
                  NFC / BLE wallets &bull; Automated ERP reconciliation
                </div>
              </div>
            </div>
            <span className="text-xs font-mono text-[#33A685]">Active</span>
          </div>

          {/* Connection Pulse */}
          <div className="flex justify-center -my-2">
            <div className="w-0.5 h-3 bg-gradient-to-b from-[#33A685] to-[#B4D9C4]" />
          </div>

          {/* Layer 4: Compliance & Data Vault */}
          <div className="bg-[#08241c] border border-[#1b6550] rounded-xl p-3.5 flex items-center justify-between hover:border-[#33A685] transition-all">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0E4032] border border-[#33A685]/50 flex items-center justify-center text-[#33A685]">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  PCI-DSS Level 1 &amp; Immutable Audit Vault
                </div>
                <div className="text-xs text-[#B4D9C4]/80">
                  Hardware Security Module (HSM) &bull; Zero-Trust encryption
                </div>
              </div>
            </div>
            <span className="text-xs font-mono text-[#B4D9C4]">Compliant</span>
          </div>

        </div>

        {/* Live Metrics Selector Pills */}
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#185c49]/80">
          <div className="bg-[#08241c] p-2.5 rounded-lg border border-[#185c49]">
            <div className="text-[11px] text-[#B4D9C4] font-medium">Avg Latency</div>
            <div className="text-base sm:text-lg font-bold text-white tracking-tight">&lt;180ms</div>
          </div>
          <div className="bg-[#08241c] p-2.5 rounded-lg border border-[#185c49]">
            <div className="text-[11px] text-[#B4D9C4] font-medium">Fraud SLA</div>
            <div className="text-base sm:text-lg font-bold text-[#F2E6A7] tracking-tight">Zero-Loss</div>
          </div>
          <div className="bg-[#08241c] p-2.5 rounded-lg border border-[#185c49]">
            <div className="text-[11px] text-[#B4D9C4] font-medium">Core SLA</div>
            <div className="text-base sm:text-lg font-bold text-white tracking-tight">99.999%</div>
          </div>
        </div>

      </div>
    </div>
  );
}
