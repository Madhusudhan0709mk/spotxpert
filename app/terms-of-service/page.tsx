'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import {
  FileText,
  Scale,
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
  Code2,
  Users,
  Award,
  RefreshCw,
  Clock,
  Mail,
  Building
} from 'lucide-react';

export default function TermsOfServicePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const sections = [
    { id: 'agreement-scope', label: '1. Agreement & Master Services' },
    { id: 'pod-engagement', label: '2. Dedicated Pods & SOW Structure' },
    { id: 'ip-ownership', label: '3. Intellectual Property Rights (100% Client)' },
    { id: 'fees-payment', label: '4. Invoicing, Rates & Sprint Terms' },
    { id: 'slas-quality', label: '5. SLAs & Code Quality Guarantees' },
    { id: 'confidentiality', label: '6. Confidentiality & Non-Disclosure' },
    { id: 'warranties', label: '7. Warranties & Disclaimers' },
    { id: 'liability', label: '8. Limitation of Liability' },
    { id: 'term-termination', label: '9. Term, Termination & Handover' },
    { id: 'governing-law', label: '10. Governing Law & Dispute Resolution' },
  ];

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* 2. Breadcrumbs & Hero Header */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-[#0E4032] text-white relative overflow-hidden border-b border-[#33A685]/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#175C48]/40 via-[#0E4032] to-[#082820] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#B4D9C4] font-medium mb-6">
            <Link href="/" className="hover:text-[#F2E6A7] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#33A685]" />
            <span className="text-white font-semibold">Terms of Service</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33A685]/20 border border-[#33A685]/50 text-xs font-semibold text-[#42CF9F] uppercase tracking-wide mb-4 shadow-xs">
              <Scale className="w-3.5 h-3.5 text-[#33A685]" />
              Master Services Agreement &amp; Client Terms
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              Terms of Service
            </h1>

            <p className="text-base sm:text-lg text-[#B4D9C4] leading-relaxed mb-6 font-normal">
              Standard commercial terms governing enterprise agile pod engagements, custom software engineering, cloud architecture, and ongoing technical advisory services.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#B4D9C4]/80">
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-[#33A685]" />
                Last Updated: October 2026
              </span>
              <span>•</span>
              <span>Standard Enterprise Terms v4.1</span>
              <span>•</span>
              <span className="bg-[#33A685]/30 text-[#42CF9F] px-2.5 py-0.5 rounded-md font-sans font-semibold">
                Client 100% IP Ownership
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Policy Content Layout */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Sticky Left Sidebar: Table of Contents */}
          <aside className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="bg-white border border-[#B4D9C4] rounded-2xl p-6 shadow-xs">
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#0E4032] mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#33A685]" />
                Terms Navigation
              </h2>
              <nav className="space-y-1.5">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block text-xs sm:text-[13px] text-[#0E4032]/80 hover:text-[#33A685] hover:bg-[#F2F2F2] px-2.5 py-1.5 rounded-lg transition-colors font-medium"
                  >
                    {sec.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contract Questions Card */}
            <div className="bg-[#0E4032] text-white border border-[#33A685]/40 rounded-2xl p-6 shadow-xs">
              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#33A685]" />
                Custom Enterprise MSA
              </h3>
              <p className="text-xs text-[#B4D9C4] mb-4 leading-relaxed font-normal">
                Need enterprise paper, custom liability caps, or specific vendor onboarding addendums?
              </p>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="inline-flex items-center justify-center w-full bg-[#33A685] hover:bg-[#299576] text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
              >
                Talk to Legal Operations
              </button>
            </div>
          </aside>

          {/* Right Main Column: Full Terms Content */}
          <div className="lg:col-span-8 bg-white border border-[#B4D9C4] rounded-3xl p-6 sm:p-12 shadow-xs space-y-12">
            
            {/* 1. Agreement & Master Services */}
            <div id="agreement-scope" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                1. Agreement &amp; Master Services Structure
              </h2>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a binding legal agreement between SpotXpert AI Technologies Inc. (&ldquo;SpotXpert,&rdquo; &ldquo;Company,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;) and the enterprise client or individual entity (&ldquo;Client,&rdquo; &ldquo;Customer,&rdquo; or &ldquo;you&rdquo;) ordering or using our engineering services, technical accelerators, or web platform.
              </p>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                Specific projects and engineering pod staffing are executed via mutually agreed <strong>Statements of Work (SOWs)</strong>. Each SOW references and incorporates these Master Terms. In the event of any conflict between an individual SOW and these Terms, the SOW shall govern for that specific project scope.
              </p>
            </div>

            {/* 2. Dedicated Pods & SOW Structure */}
            <div id="pod-engagement" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                2. Dedicated Pods &amp; SOW Engagement Model
              </h2>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                SpotXpert delivers engineering services through autonomous, vetted, cross-functional squads (&ldquo;Agile Pods&rdquo;) consisting of Senior Tech Leads, Fullstack Engineers, DevOps Architects, and QA Specialists:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#F2F2F2] border border-[#B4D9C4]/60">
                  <div className="text-xs font-bold uppercase text-[#33A685] mb-1">Time Zone Overlap</div>
                  <div className="text-xs sm:text-sm text-[#0E4032]/80 font-normal">
                    Pods guarantee a minimum of 4 to 6 hours of daily working overlap with your local engineering hours (US Eastern, Central, Pacific, or UK/CET) for real-time standups and pair programming.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#F2F2F2] border border-[#B4D9C4]/60">
                  <div className="text-xs font-bold uppercase text-[#33A685] mb-1">48-Hour Talent Guarantee</div>
                  <div className="text-xs sm:text-sm text-[#0E4032]/80 font-normal">
                    If an engineer does not meet performance benchmarks, SpotXpert replaces that individual with an equally qualified engineer within 48 business hours with zero onboarding charge for the handover duration.
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#F2F2F2] border border-[#B4D9C4]/60">
                  <div className="text-xs font-bold uppercase text-[#33A685] mb-1">Flexible Sprint Scaling</div>
                  <div className="text-xs sm:text-sm text-[#0E4032]/80 font-normal">
                    Clients may scale pod headcount up or down upon 14 calendar days written notice, preventing long-term employment drag while providing agile burst capacity.
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Intellectual Property Rights - 100% Client Ownership */}
            <div id="ip-ownership" className="scroll-mt-32 space-y-4">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0E4032] text-white border border-[#33A685]/50 shadow-md">
                <div className="flex items-center gap-2 text-[#42CF9F] text-xs font-bold uppercase tracking-wider mb-2">
                  <Code2 className="w-4 h-4 text-[#33A685]" />
                  Work-for-Hire Guarantee
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  3. Intellectual Property Rights (100% Client Ownership)
                </h2>
                <p className="text-sm text-[#B4D9C4] leading-relaxed mb-4 font-normal">
                  All work product generated by SpotXpert pods belongs exclusively to the client:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#33A685] flex-shrink-0 mt-0.5" />
                    <span><strong>Full Assignment:</strong> All custom code, software architectures, algorithms, automated scripts, designs, documentation, and database schemas created under an SOW constitute &ldquo;work made for hire&rdquo; and are fully assigned to the Client upon payment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#33A685] flex-shrink-0 mt-0.5" />
                    <span><strong>Pre-Existing Background IP:</strong> To the extent SpotXpert embeds reusable open-source tooling, libraries, or pre-built AI accelerators, SpotXpert grants the Client an irrevocable, perpetual, royalty-free, worldwide license to exploit and modify such components.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#33A685] flex-shrink-0 mt-0.5" />
                    <span><strong>No Vendor Lock-In:</strong> Code is maintained directly in Client-owned Git repositories (e.g. GitHub Enterprise, GitLab), following standard industry build conventions.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Invoicing, Rates & Sprint Terms */}
            <div id="fees-payment" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                4. Fees, Billing &amp; Sprint Terms
              </h2>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                Engineering services are billed either on a sprint-based dedicated pod retainer or a fixed-scope milestone model as defined in each SOW:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal">
                <li><strong>Payment Terms:</strong> Invoices are issued bi-weekly or monthly in advance with Net 15 or Net 30 payment terms via ACH, Wire Transfer, or enterprise corporate billing.</li>
                <li><strong>Expenses:</strong> Third-party cloud computing expenses (AWS, GCP, Azure, OpenAI API token fees) are paid directly by the Client or passed through without markup.</li>
                <li><strong>Taxes:</strong> All fees are exclusive of applicable federal, state, local, or value-added taxes (VAT/GST), which will be itemized where mandated by law.</li>
              </ul>
            </div>

            {/* 5. SLAs & Code Quality Guarantees */}
            <div id="slas-quality" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                5. Service Level Commitments &amp; Engineering Standards
              </h2>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                SpotXpert adheres to rigorous production-grade engineering principles:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-[#B4D9C4] bg-[#F2F2F2]">
                  <div className="font-bold text-xs uppercase text-[#33A685] mb-1">Unit &amp; E2E Test Coverage</div>
                  <div className="text-xs text-[#0E4032]/80">Minimum &gt;85% automated test coverage threshold enforced via automated CI pull-request checks.</div>
                </div>
                <div className="p-4 rounded-xl border border-[#B4D9C4] bg-[#F2F2F2]">
                  <div className="font-bold text-xs uppercase text-[#33A685] mb-1">Static Code Analysis</div>
                  <div className="text-xs text-[#0E4032]/80">Zero critical or high-severity vulnerabilities (SonarQube/Snyk) permitted into production mainlines.</div>
                </div>
                <div className="p-4 rounded-xl border border-[#B4D9C4] bg-[#F2F2F2]">
                  <div className="font-bold text-xs uppercase text-[#33A685] mb-1">99.99% Architecture SLA</div>
                  <div className="text-xs text-[#0E4032]/80">Cloud infrastructures engineered for multi-AZ high availability and automated failover.</div>
                </div>
                <div className="p-4 rounded-xl border border-[#B4D9C4] bg-[#F2F2F2]">
                  <div className="font-bold text-xs uppercase text-[#33A685] mb-1">Sprint Demos &amp; Burn-downs</div>
                  <div className="text-xs text-[#0E4032]/80">Bi-weekly sprint reviews, transparent Jira/Linear task tracking, and demonstrable working increments.</div>
                </div>
              </div>
            </div>

            {/* 6. Confidentiality */}
            <div id="confidentiality" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                6. Confidentiality &amp; Non-Disclosure
              </h2>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                Each party agrees to safeguard the other&rsquo;s Proprietary and Confidential Information with the same degree of care it exercises with its own sensitive materials (no less than reasonable care). Confidential information includes client algorithms, strategic roadmaps, source code, staging credentials, customer records, and financial terms.
              </p>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                All SpotXpert engineers and architects sign binding, audited Non-Disclosure Agreements (NDAs) and intellectual property assignment covenants prior to being staffed onto any client pod.
              </p>
            </div>

            {/* 7. Warranties & Disclaimers */}
            <div id="warranties" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                7. Warranties &amp; Disclaimers
              </h2>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                SpotXpert warrants that services will be performed in a professional, workmanlike manner consistent with recognized industry standards and in compliance with all applicable cyber-security and employment statutes.
              </p>
              <p className="text-xs sm:text-sm text-[#0E4032]/75 leading-relaxed font-normal">
                EXCEPT AS EXPRESSLY SET FORTH HEREIN, SERVICES ARE PROVIDED &ldquo;AS IS,&rdquo; AND SPOTXPERT DISCLAIMS ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </div>

            {/* 8. Limitation of Liability */}
            <div id="liability" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                8. Limitation of Liability
              </h2>
              <div className="p-4 rounded-xl bg-[#F2F2F2] border border-[#B4D9C4]/60 space-y-2 text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal">
                <p>
                  NEITHER PARTY SHALL BE LIABLE TO THE OTHER FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, LOSS OF REVENUE, OR BUSINESS INTERRUPTION) ARISING OUT OF OR IN CONNECTION WITH THESE TERMS.
                </p>
                <p>
                  EACH PARTY&rsquo;S TOTAL AGGREGATE LIABILITY UNDER ANY SOW SHALL NOT EXCEED THE TOTAL SUMS PAID OR PAYABLE BY CLIENT UNDER THAT SPECIFIC SOW DURING THE TWELVE (12) MONTH PERIOD PRECEDING THE CLAIM.
                </p>
              </div>
            </div>

            {/* 9. Term, Termination & Handover */}
            <div id="term-termination" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                9. Term, Termination &amp; Transition Assistance
              </h2>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                Either party may terminate an active SOW or Master Agreement for cause if the other party breaches a material term and fails to cure such breach within thirty (30) days of receiving written notice.
              </p>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                Upon termination for convenience or expiration, SpotXpert provides up to thirty (30) days of structured transition assistance, including comprehensive technical knowledge transfer, architecture handover sessions, and credential revocation confirmation.
              </p>
            </div>

            {/* 10. Governing Law & Dispute Resolution */}
            <div id="governing-law" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                10. Governing Law &amp; Dispute Resolution
              </h2>
              <div className="bg-[#F2F2F2] border border-[#B4D9C4] rounded-2xl p-6 text-xs sm:text-sm space-y-3">
                <p className="text-[#0E4032]/85 leading-relaxed font-normal">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware (for North American contracts) or the laws of England and Wales (for European/UK engagements), without regard to conflict of law principles.
                </p>
                <p className="text-[#0E4032]/85 leading-relaxed font-normal">
                  Any dispute, controversy, or claim arising under or relating to this Agreement shall be resolved through confidential binding arbitration administered by the American Arbitration Association (AAA) or JAMS in accordance with its commercial arbitration rules.
                </p>
                <div className="pt-2 border-t border-[#B4D9C4]/50 flex items-center gap-2 text-[#0E4032]/80">
                  <Mail className="w-4 h-4 text-[#33A685]" />
                  <span>Legal Notices: <a href="mailto:legal@spotxpert.ai" className="text-[#33A685] font-semibold">legal@spotxpert.ai</a></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Global Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </main>
  );
}
