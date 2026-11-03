'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Server,
  Globe,
  CheckCircle2,
  ChevronRight,
  Mail,
  Building,
  RefreshCw
} from 'lucide-react';

export default function PrivacyPolicyPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const sections = [
    { id: 'introduction', label: '1. Introduction & Scope' },
    { id: 'data-collected', label: '2. Information We Collect' },
    { id: 'ai-training', label: '3. AI Models & IP Protection' },
    { id: 'how-we-use', label: '4. How We Use Information' },
    { id: 'data-sharing', label: '5. Sub-processors & Disclosure' },
    { id: 'international', label: '6. International Transfers' },
    { id: 'data-retention', label: '7. Retention & Disposal' },
    { id: 'security-measures', label: '8. Security Safeguards' },
    { id: 'user-rights', label: '9. Your Rights (GDPR / CCPA)' },
    { id: 'contact-us', label: '10. Contact & DPO' },
  ];

  const subProcessors = [
    { name: 'Amazon Web Services (AWS)', purpose: 'Cloud Infrastructure & VPC Hosting', location: 'United States & Global Regions' },
    { name: 'Google Cloud Platform (GCP)', purpose: 'Vertex AI, BigQuery & Cloud Analytics', location: 'United States & EU' },
    { name: 'Cloudflare', purpose: 'DDoS Protection, Edge CDN & WAF', location: 'Global Edge Network' },
    { name: 'Datadog', purpose: 'Infrastructure Telemetry & Log Monitoring', location: 'United States' },
    { name: 'GitHub Enterprise', purpose: 'Source Code Hosting & CI/CD Pipelines', location: 'United States' },
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
            <span className="text-white font-semibold">Privacy Policy</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33A685]/20 border border-[#33A685]/50 text-xs font-semibold text-[#42CF9F] uppercase tracking-wide mb-4 shadow-xs">
              <Shield className="w-3.5 h-3.5 text-[#33A685]" />
              Enterprise Privacy &amp; Data Governance
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              Privacy Policy
            </h1>

            <p className="text-base sm:text-lg text-[#B4D9C4] leading-relaxed mb-6 font-normal">
              How SpotXpert AI collects, handles, safeguards, and respects enterprise data, client source code, proprietary models, and end-user personal information.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#B4D9C4]/80">
              <span className="flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-[#33A685]" />
                Effective Date: October 2026
              </span>
              <span>•</span>
              <span>Version: 3.2</span>
              <span>•</span>
              <span className="bg-[#33A685]/30 text-[#42CF9F] px-2.5 py-0.5 rounded-md font-sans font-semibold">
                SOC-2 &amp; GDPR Compliant
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
                Table of Contents
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

            {/* Quick Contact Card */}
            <div className="bg-[#0E4032] text-white border border-[#33A685]/40 rounded-2xl p-6 shadow-xs">
              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#33A685]" />
                Privacy &amp; DPO Inquiries
              </h3>
              <p className="text-xs text-[#B4D9C4] mb-4 leading-relaxed font-normal">
                Have specific questions about data residency, DPA execution, or compliance audits?
              </p>
              <a
                href="mailto:privacy@spotxpert.ai"
                className="inline-flex items-center justify-center w-full bg-[#33A685] hover:bg-[#299576] text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-colors"
              >
                privacy@spotxpert.ai
              </a>
            </div>
          </aside>

          {/* Right Main Column: Full Legal Documentation */}
          <div className="lg:col-span-8 bg-white border border-[#B4D9C4] rounded-3xl p-6 sm:p-12 shadow-xs space-y-12">
            
            {/* 1. Introduction & Scope */}
            <div id="introduction" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                1. Introduction &amp; Scope
              </h2>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                SpotXpert AI (&ldquo;SpotXpert,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides high-velocity AI-native software engineering pods, custom AI model architectures, and digital product delivery services. This Privacy Policy governs the manner in which SpotXpert collects, uses, maintains, and discloses information gathered from visitors, enterprise clients, and authorized users of our website, client portals, and engineering services.
              </p>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                When enterprise clients engage our dedicated engineering pods, our handling of client data is additionally governed by a formal <strong>Data Processing Addendum (DPA)</strong> and <strong>Master Services Agreement (MSA)</strong>, which supersede this public policy in the event of any conflict.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div id="data-collected" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                2. Information We Collect
              </h2>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                We collect information across three categories:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#F2F2F2] border border-[#B4D9C4]/60">
                  <h3 className="text-sm font-bold text-[#0E4032] mb-1">A. Information Provided Directly to Us</h3>
                  <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal">
                    When you book a consultation call, complete our advisory form, or engage our engineering services, we collect your name, corporate email address, phone number, company name, technical architecture specifications, and project budget requirements.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F2F2F2] border border-[#B4D9C4]/60">
                  <h3 className="text-sm font-bold text-[#0E4032] mb-1">B. Enterprise Client Project Artifacts</h3>
                  <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal">
                    During client engagements, our dedicated pods access client repositories, schema definitions, API documentation, and staging data strictly within client-designated VPCs or access-controlled staging environments.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F2F2F2] border border-[#B4D9C4]/60">
                  <h3 className="text-sm font-bold text-[#0E4032] mb-1">C. Technical &amp; Operational Telemetry</h3>
                  <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal">
                    Standard web server logs, IP addresses, browser types, referral URLs, device identifiers, and aggregated interaction telemetry to monitor site availability and thwart malicious traffic.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. AI Models & IP Protection - Crucial Enterprise Guarantee */}
            <div id="ai-training" className="scroll-mt-32 space-y-4">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0E4032] text-white border border-[#33A685]/50 shadow-md">
                <div className="flex items-center gap-2 text-[#42CF9F] text-xs font-bold uppercase tracking-wider mb-2">
                  <Lock className="w-4 h-4 text-[#33A685]" />
                  Zero AI Model Training Guarantee
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  3. AI Models &amp; Client Intellectual Property Protection
                </h2>
                <p className="text-sm text-[#B4D9C4] leading-relaxed mb-4 font-normal">
                  SpotXpert AI enforces strict contractual boundaries regarding generative AI and foundation models:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#33A685] flex-shrink-0 mt-0.5" />
                    <span><strong>No Public Training:</strong> We never submit client confidential data, codebase, proprietary prompts, or embeddings to train public models or third-party foundation models.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#33A685] flex-shrink-0 mt-0.5" />
                    <span><strong>Zero Data Retention SLAs:</strong> All commercial LLM API integrations (e.g., Azure OpenAI, AWS Bedrock, Google Vertex AI) utilize zero-retention enterprise tiers where data is not logged or cached by the model vendor.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#33A685] flex-shrink-0 mt-0.5" />
                    <span><strong>Client Ownership:</strong> 100% of fine-tuned weights, embeddings, RAG indexing pipelines, and custom agents engineered by our pods remain the exclusive intellectual property of the client.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. How We Use Information */}
            <div id="how-we-use" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                4. How We Use Information
              </h2>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                We process collected information under the lawful bases of contract performance, legitimate enterprise business interests, and compliance with legal mandates:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal">
                <li>Deploying, managing, and staffing dedicated agile engineering squads tailored to your tech stack.</li>
                <li>Executing architectural assessments, code reviews, and technical project proposals.</li>
                <li>Ensuring security compliance, detecting intrusion attempts, and verifying access permissions.</li>
                <li>Fulfilling statutory tax, audit, and SOC-2 Type II audit logging requirements.</li>
              </ul>
            </div>

            {/* 5. Sub-processors & Disclosure */}
            <div id="data-sharing" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                5. Third-Party Sub-processors &amp; Disclosure
              </h2>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                SpotXpert never sells, rents, or commercializes enterprise or individual personal information. We share data only with audited third-party service providers bound by strict confidentiality and security terms:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-[#B4D9C4] rounded-xl overflow-hidden">
                  <thead className="bg-[#0E4032] text-white">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Sub-processor</th>
                      <th className="py-3 px-4 font-semibold">Service Provided</th>
                      <th className="py-3 px-4 font-semibold">Data Location</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#B4D9C4]/60 bg-[#F2F2F2]">
                    {subProcessors.map((sp, idx) => (
                      <tr key={idx} className="hover:bg-white/80 transition-colors">
                        <td className="py-2.5 px-4 font-bold text-[#0E4032]">{sp.name}</td>
                        <td className="py-2.5 px-4 text-[#0E4032]/80">{sp.purpose}</td>
                        <td className="py-2.5 px-4 text-[#0E4032]/75 font-mono">{sp.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6. International Transfers */}
            <div id="international" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                6. International Data Transfers
              </h2>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                SpotXpert operates a global delivery model with development centers in the United States, Canada, the United Kingdom, and India. When personal data is transferred across international borders, we implement <strong>Standard Contractual Clauses (SCCs)</strong> approved by the European Commission, UK International Data Transfer Agreements (IDTAs), and robust cryptographic controls to guarantee equivalent levels of protection.
              </p>
            </div>

            {/* 7. Data Retention & Disposal */}
            <div id="data-retention" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                7. Data Retention &amp; Disposal
              </h2>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                We retain client deliverables, configuration files, and consultation submissions only as long as necessary to fulfill contractual engagements or satisfy regulatory retention rules. Upon contract conclusion or upon verified request, client artifacts are securely sanitized using <strong>NIST SP 800-88 Rev. 1</strong> media sanitization standards, and credentials are decommissioned within 30 calendar days.
              </p>
            </div>

            {/* 8. Security Safeguards */}
            <div id="security-measures" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                8. Security Safeguards
              </h2>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                We maintain an enterprise-grade Information Security Program incorporating:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-[#B4D9C4] bg-[#F2F2F2]">
                  <div className="font-bold text-xs uppercase text-[#33A685] mb-1">Encryption Standards</div>
                  <div className="text-xs text-[#0E4032]/80">TLS 1.3 for all data in transit; AES-256 for all at-rest storage and backups.</div>
                </div>
                <div className="p-4 rounded-xl border border-[#B4D9C4] bg-[#F2F2F2]">
                  <div className="font-bold text-xs uppercase text-[#33A685] mb-1">Access Governance</div>
                  <div className="text-xs text-[#0E4032]/80">Strict Role-Based Access Control (RBAC), mandatory FIDO2 hardware MFA, and least-privilege principles.</div>
                </div>
                <div className="p-4 rounded-xl border border-[#B4D9C4] bg-[#F2F2F2]">
                  <div className="font-bold text-xs uppercase text-[#33A685] mb-1">SOC 2 Type II Audited</div>
                  <div className="text-xs text-[#0E4032]/80">Annual third-party independent audits covering Security, Availability, and Confidentiality.</div>
                </div>
                <div className="p-4 rounded-xl border border-[#B4D9C4] bg-[#F2F2F2]">
                  <div className="font-bold text-xs uppercase text-[#33A685] mb-1">Clean Pod Isolation</div>
                  <div className="text-xs text-[#0E4032]/80">Dedicated engineers operate on client-provided hardware or secure MDM-managed Virtual Desktops (VDI).</div>
                </div>
              </div>
            </div>

            {/* 9. Your Rights */}
            <div id="user-rights" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                9. Your Rights (GDPR, CCPA/CPRA)
              </h2>
              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                Depending on your geographical jurisdiction, you possess statutory rights regarding your personal information, including:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#0E4032]/85 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#33A685]" /> Right of Access &amp; Portability</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#33A685]" /> Right to Rectification</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#33A685]" /> Right to Erasure (&ldquo;Right to be Forgotten&rdquo;)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#33A685]" /> Right to Restrict Processing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#33A685]" /> Right to Opt-Out of Automated Profiling</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#33A685]" /> Right to Non-Discrimination</li>
              </ul>
              <p className="text-xs text-[#0E4032]/75 mt-3">
                To exercise any of these rights, submit your request to <a href="mailto:privacy@spotxpert.ai" className="text-[#33A685] font-semibold underline">privacy@spotxpert.ai</a>. We respond to all verified requests within 30 days.
              </p>
            </div>

            {/* 10. Contact Us & DPO */}
            <div id="contact-us" className="scroll-mt-32 space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] pb-2 border-b border-[#B4D9C4]/60">
                10. Contact Us &amp; Data Protection Officer
              </h2>
              <div className="bg-[#F2F2F2] border border-[#B4D9C4] rounded-2xl p-6 text-xs sm:text-sm space-y-3">
                <div className="font-bold text-[#0E4032] text-base">SpotXpert AI Technologies Inc.</div>
                <div className="flex items-center gap-2 text-[#0E4032]/80">
                  <Building className="w-4 h-4 text-[#33A685]" />
                  <span>Headquarters: Bengaluru, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-2 text-[#0E4032]/80">
                  <Mail className="w-4 h-4 text-[#33A685]" />
                  <span>Data Protection Officer: <a href="mailto:dpo@spotxpert.ai" className="text-[#33A685] font-semibold">dpo@spotxpert.ai</a></span>
                </div>
                <div className="flex items-center gap-2 text-[#0E4032]/80">
                  <Globe className="w-4 h-4 text-[#33A685]" />
                  <span>Global Legal Counsel: <a href="mailto:legal@spotxpert.ai" className="text-[#33A685] font-semibold">legal@spotxpert.ai</a></span>
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
