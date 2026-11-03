'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Award, MapPin, Mail, Phone, ArrowRight, Heart } from 'lucide-react';

interface FooterProps {
  onOpenConsultation?: () => void;
}

export default function Footer({ onOpenConsultation: _onOpenConsultation }: FooterProps) {
  return (
    <footer className="bg-[#0E4032] text-[#B4D9C4] text-xs sm:text-sm border-t border-[#185c49] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner */}
        <div className="bg-gradient-to-r from-[#145341] via-[#0E4032] to-[#165a46] border border-[#33A685]/40 rounded-2xl p-8 sm:p-12 mb-16 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F2E6A7]">
              Ready to Accelerate?
            </span>
            <h3 className="text-2xl sm:text-[32px] font-[650] leading-[1.2] text-white mt-1">
              Build Your Next-Gen AI Product With SpotXpert AI
            </h3>
          </div>

          <Link
            href="/contact"
            className="flex-shrink-0 bg-[#33A685] hover:bg-[#288f72] text-white btn-text px-8 py-4 rounded-xl shadow-xl hover:shadow-[#33A685]/30 transition-all cursor-pointer inline-flex items-center justify-center"
          >
            Book A Consultation Call
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand & Mission */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg">
  <img
    src="/images/logo-round.png"
    alt="SpotXpert AI"
    className="h-full w-full rotate-0 rounded-lg object-contain transition-transform duration-200 group-hover:scale-105"
  />
</div>
 {/* SpotXpert AI Wordmark */}
            <span className="font-bold text-[22px] tracking-tight font-sans antialiased inline-flex items-center">
              <span className="text-[#33A685]">Spot</span>
              <span className="text-white">X</span>
              <span className="text-[#33A685]">pert</span>
              <span className="text-white ml-1.5">AI</span>
            </span>
            </Link>
            
            <p className="text-[#B4D9C4]/90 text-xs sm:text-sm leading-[1.7] max-w-sm">
              AI-Native Transformation. Engineered for Growth.
            </p>
          </div>


          {/* Column: Services */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#B4D9C4]">
              <li><Link href="/services/generative-ai-solutions" className="hover:text-[#F2E6A7] transition-colors">Generative AI Solutions</Link></li>
              <li><Link href="/services/ai-agent-development" className="hover:text-[#F2E6A7] transition-colors">AI Agent Development</Link></li>
              <li><Link href="/services/ai-native-product-engineering" className="hover:text-[#F2E6A7] transition-colors">AI-Native Product Engineering</Link></li>
              <li><Link href="/services/cloud-devops-engineering" className="hover:text-[#F2E6A7] transition-colors">Cloud &amp; DevOps Engineering</Link></li>
              <li><Link href="/services/enterprise-ai-strategy-roadmapping" className="hover:text-[#F2E6A7] transition-colors">Enterprise AI Strategy</Link></li>
              <li><Link href="/services/business-process-automation" className="hover:text-[#F2E6A7] transition-colors">Process Automation</Link></li>
              <li><Link href="/services" className="text-[#42CF9F] font-semibold hover:text-[#F2E6A7] transition-colors flex items-center gap-1 pt-1">Explore All 32 Services →</Link></li>
            </ul>
          </div>

          {/* Column: Industries */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#B4D9C4]">
              <li><Link href="/#industries" className="hover:text-[#F2E6A7] transition-colors">Healthcare &amp; Life Sciences</Link></li>
              <li><Link href="/industries/finance" className="hover:text-[#F2E6A7] text-[#33A685] font-semibold transition-colors">Fintech &amp; Banking</Link></li>
              <li><Link href="/#industries" className="hover:text-[#F2E6A7] transition-colors">Logistics &amp; Supply Chain</Link></li>
              <li><Link href="/#industries" className="hover:text-[#F2E6A7] transition-colors">E-commerce &amp; Retail</Link></li>
              <li><Link href="/#industries" className="hover:text-[#F2E6A7] transition-colors">EdTech Platforms</Link></li>
              <li><Link href="/#industries" className="hover:text-[#F2E6A7] transition-colors">Enterprise SaaS</Link></li>
            </ul>
          </div>

          {/* Column: Global Locations */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Global Offices
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#B4D9C4]">
              <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#33A685]" /> Bengaluru, India (HQ)</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#185c49] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B4D9C4]/80">
          <div>
            &copy; {new Date().getFullYear()} SpotXpert AI. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/contact" className="text-[#33A685] hover:text-[#F2E6A7] font-semibold transition-colors">Contact Us</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/security-compliance" className="hover:text-white transition-colors">Security &amp; Compliance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
