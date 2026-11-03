'use client';

import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, ShieldCheck, Sparkles, Clock, ArrowRight, User } from 'lucide-react';

export default function BFSILetsTalk() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: 'Banking solutions',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0E4032] text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,#175b47_0%,transparent_60%)] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Expert Advisor Card & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33A685]/20 border border-[#33A685]/50 text-[#F2E6A7] text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#33A685]" />
                Direct Architect Consultation
              </div>
              <h2 className="section-heading text-white">
                Let&apos;s talk
              </h2>
              <p className="body-text text-[#B4D9C4] mt-3">
                Speak directly with an enterprise technology leader to architect and accelerate your next-gen financial software.
              </p>
            </div>

            {/* Hiren Dhaduk Feature Card */}
            <div className="bg-[#08241c] border border-[#1b6550] rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                {/* Professional Avatar with Initials & Badge */}
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-[#145341] to-[#33A685] border-2 border-[#F2E6A7] flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <span className="text-xl font-bold tracking-tight">HD</span>
                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-[#33A685] border-2 border-[#08241c]" />
                </div>
                <div>
                  <h3 className="card-heading text-white">
                    Hiren Dhaduk
                  </h3>
                  <div className="text-xs font-semibold text-[#33A685]">
                    Principal Financial Technology &amp; AI Architect
                  </div>
                  <div className="text-[11px] text-[#B4D9C4] mt-0.5">
                    SpotXpert AI Engineering Leadership
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#B4D9C4] leading-[1.65] font-normal mb-6">
                &ldquo;Creating a tech product roadmap and building scalable apps for your organization.&rdquo;
              </p>

              {/* Direct Phone Action Button */}
              <a
                href="tel:13212372727"
                className="w-full bg-[#33A685] hover:bg-[#288f72] active:bg-[#208064] text-white btn-text py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 shadow-lg transition-all duration-200 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Us Now: +1 (321) 237-2727</span>
              </a>
            </div>

            {/* Direct Guarantees */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-[#B4D9C4]">
                <Clock className="w-4 h-4 text-[#33A685] flex-shrink-0" />
                <span>Guaranteed architect response within 2 business hours.</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#B4D9C4]">
                <ShieldCheck className="w-4 h-4 text-[#F2E6A7] flex-shrink-0" />
                <span>Strict mutual NDA signed prior to architectural discussion.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Engineering Request Form */}
          <div className="lg:col-span-7 bg-[#08241c] border border-[#33A685]/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#33A685]/20 border border-[#33A685]/60 text-[#33A685] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="card-heading text-white">
                  Technical Strategy Session Requested!
                </h3>
                <p className="body-text text-[#B4D9C4] max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. Hiren Dhaduk and our senior BFSI architects have received your requirements and will reach out at <span className="text-[#F2E6A7] font-semibold">{formData.email}</span> within 2 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        serviceInterest: 'Banking solutions',
                        message: '',
                      });
                    }}
                    className="bg-[#33A685] hover:bg-[#288f72] text-white btn-text px-8 py-3 rounded-lg shadow-md transition-all cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-2">
                  <h3 className="card-heading text-white">
                    Request an Architectural Roadmap
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B4D9C4] mt-1 font-normal">
                    Fill in your project context to discuss team sizing, compliance SLAs, and timelines.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#B4D9C4] uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rachel Adams"
                      className="w-full bg-[#0E4032] border border-[#1b6550] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#33A685]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#B4D9C4] uppercase tracking-wider mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rachel@fintech.com"
                      className="w-full bg-[#0E4032] border border-[#1b6550] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#33A685]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#B4D9C4] uppercase tracking-wider mb-1.5">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Apex Financial Systems"
                      className="w-full bg-[#0E4032] border border-[#1b6550] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#33A685]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#B4D9C4] uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#0E4032] border border-[#1b6550] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#33A685]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#B4D9C4] uppercase tracking-wider mb-1.5">
                    BFSI Area of Interest
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full bg-[#0E4032] border border-[#1b6550] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#33A685]"
                  >
                    <option value="Banking solutions">Banking solutions (Core banking, e-KYC, fraud detection)</option>
                    <option value="InsurTech solutions">InsurTech solutions (Underwriting, automated claims)</option>
                    <option value="Payments systems">Payments systems (NFC, BLE smart wallets, instant settlement)</option>
                    <option value="P2P lending and mortgage tech">P2P lending &amp; mortgage tech (Credit scoring, DocuSign)</option>
                    <option value="Wealth management solutions">Wealth management (Robo-advisors, portfolio modeling)</option>
                    <option value="Next-gen fintech solutions">Next-gen fintech (RPA, RegTech, crypto / Web3)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#B4D9C4] uppercase tracking-wider mb-1.5">
                    Technical Scope &amp; Deliverables
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your existing architecture, target timeline, or cloud migration goals..."
                    className="w-full bg-[#0E4032] border border-[#1b6550] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#33A685]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#B4D9C4] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#F2E6A7]" />
                    <span>Protected by enterprise NDA. 100% confidential.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#33A685] hover:bg-[#288f72] text-white btn-text px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#33A685]/30 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Strategic Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
