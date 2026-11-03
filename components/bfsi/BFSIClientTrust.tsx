'use client';

import React from 'react';
import { ShieldCheck, Building2 } from 'lucide-react';

export default function BFSIClientTrust() {
  const clients = [
    { name: 'Bank of America', category: 'Banking & Financial Services' },
    { name: 'American Credit Acceptance', category: 'Consumer Lending & Auto Finance' },
    { name: 'Tryg', category: 'Global Insurance & InsurTech' },
    { name: 'Cisco', category: 'Enterprise Telecommunications' },
    { name: 'Twilio', category: 'Cloud Communications API' },
    { name: 'VMware', category: 'Virtualization & Cloud Infrastructure' },
    { name: 'Mitsubishi', category: 'Global Industrial & Finance' },
    { name: 'Renesas', category: 'Advanced Semiconductor Tech' },
    { name: 'Fujifilm', category: 'Enterprise Imaging & Healthcare' },
    { name: 'Hyundai Glovis', category: 'Global Supply Chain & Logistics' },
    { name: 'Red Bull', category: 'Sports & Media Streaming' },
    { name: 'Cameo', category: 'Consumer Digital Platform' },
  ];

  return (
    <section className="bg-[#F2F2F2] py-16 sm:py-20 border-b border-[#B4D9C4]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B4D9C4]/40 border border-[#33A685]/40 text-[#0E4032] text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#33A685]" />
            Enterprise Validation
          </div>
          <h2 className="section-heading text-[#0E4032]">
            Trusted by the World&apos;s Leading Companies
          </h2>
          <p className="body-text text-[#0E4032]/80 mt-2 max-w-xl mx-auto">
            From category-defining global banks to hyper-growth digital lenders and multinational enterprises.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#B4D9C4] rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-xs hover:border-[#33A685] hover:shadow-md transition-all duration-200 group cursor-pointer min-h-[110px]"
            >
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#0E4032] group-hover:text-[#33A685] transition-colors font-mono">
                {client.name}
              </span>
              <span className="text-[10px] text-[#33A685] font-medium uppercase tracking-wider mt-1.5 leading-tight opacity-80 group-hover:opacity-100 transition-opacity">
                {client.category}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Regulatory Compliance Bar */}
        <div className="mt-12 pt-8 border-t border-[#B4D9C4]/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#0E4032]/80 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#33A685]" />
            <span>PCI-DSS Level 1 Merchant Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#33A685]" />
            <span>SOC-2 Type II Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#33A685]" />
            <span>GDPR &amp; Open Banking Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#33A685]" />
            <span>ISO 27001 Data Security</span>
          </div>
        </div>

      </div>
    </section>
  );
}
