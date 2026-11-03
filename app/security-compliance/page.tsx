'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import {
  ShieldCheck,
  Lock,
  Server,
  FileCheck2,
  CheckCircle2,
  ChevronRight,
  Download,
  AlertTriangle,
  Cpu,
  KeyRound,
  Eye,
  RefreshCw,
  Mail,
  ShieldAlert,
  Terminal,
  Activity
} from 'lucide-react';

export default function SecurityCompliancePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const complianceStandards = [
    {
      badge: 'Audited Annually',
      title: 'SOC 2 Type II',
      description: 'Independent third-party AICPA audit verifying Security, Availability, and Confidentiality trust service criteria across all pod operations.',
      features: ['Continuous automated compliance telemetry', 'Audited by top-tier global accounting firms', 'Full SOC 2 report available under NDA']
    },
    {
      badge: 'Certified',
      title: 'ISO/IEC 27001:2022',
      description: 'Global standard for Information Security Management Systems (ISMS), covering threat assessment, risk treatment, and continuous governance.',
      features: ['Formal risk treatment methodology', 'Asset & cryptographic key management', 'Comprehensive physical & logical perimeter controls']
    },
    {
      badge: 'Compliant',
      title: 'HIPAA & HITECH',
      description: 'Rigorous electronic Protected Health Information (ePHI) controls for digital health architectures and clinical software platforms.',
      features: ['Business Associate Agreements (BAAs) executed', 'Strict minimum-necessary access controls', 'End-to-end audit logging & encryption']
    },
    {
      badge: 'Compliant',
      title: 'GDPR & CCPA/CPRA',
      description: 'Comprehensive data privacy frameworks protecting personal data rights, international transfer mechanisms, and user consent.',
      features: ['Standard Contractual Clauses (SCCs) in place', 'Automated data subject request (DSR) workflows', 'Zero telemetry monetization guarantee']
    },
  ];

  const securityPillars = [
    {
      icon: Lock,
      title: 'Zero-Trust Infrastructure',
      points: [
        'All client resources gated by strict mutual TLS (mTLS) and hardware MFA (FIDO2/WebAuthn).',
        'Strict network segmentation, private VPC peering, and zero public database exposures.',
        'Continuous identity evaluation with automated session timeouts.'
      ]
    },
    {
      icon: KeyRound,
      title: 'Cryptographic Security',
      points: [
        'Data in transit encrypted with TLS 1.3 using modern forward-secret cipher suites.',
        'Data at rest encrypted via AES-256 with Customer-Managed Encryption Keys (CMEK / KMS).',
        'Secrets and tokens managed via HashiCorp Vault and AWS Secrets Manager with automatic rotation.'
      ]
    },
    {
      icon: Cpu,
      title: 'AI Safety & Governance',
      points: [
        'Dedicated private model endpoints isolated inside client VPC boundaries.',
        'Deterministic semantic guardrails defending against prompt injections and jailbreaks.',
        'Zero training on customer IP: LLM API calls utilize enterprise zero-data-retention tiers.'
      ]
    },
    {
      icon: Terminal,
      title: 'DevSecOps & Code Hardening',
      points: [
        'Automated SAST & DAST scans executed on every pull request before merge.',
        'Container image scanning with Trivy and Snyk to block CVE vulnerabilities.',
        'Mandatory peer review by Senior Tech Leads and 100% CI automated test passes.'
      ]
    },
    {
      icon: Activity,
      title: '24/7 Incident Response',
      points: [
        'Centralized SIEM monitoring with Datadog and AWS GuardDuty behavioral anomaly detection.',
        'SLA of <15 minutes response time for Severity-1 security incidents.',
        'Annual disaster recovery failover simulations with RPO <15m and RTO <1h.'
      ]
    },
    {
      icon: Eye,
      title: 'Independent Penetration Tests',
      points: [
        'Biannual grey-box and black-box penetration testing conducted by CREST-accredited firms.',
        'Continuous vulnerability disclosure policy and bug bounty engagement.',
        'Comprehensive remediation SLAs enforced against CVSS score thresholds.'
      ]
    },
  ];

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* 2. Breadcrumbs & Hero Header */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-[#0E4032] text-white relative overflow-hidden border-b border-[#33A685]/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#175C48]/40 via-[#0E4032] to-[#082820] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-[#B4D9C4] font-medium mb-6">
            <Link href="/" className="hover:text-[#F2E6A7] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#33A685]" />
            <span className="text-white font-semibold">Security &amp; Compliance</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33A685]/20 border border-[#33A685]/50 text-xs font-semibold text-[#42CF9F] uppercase tracking-wide mb-4 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#33A685]" />
              Enterprise Trust &amp; Governance Center
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              Security &amp; Compliance
            </h1>

            <p className="text-base sm:text-lg text-[#B4D9C4] leading-relaxed mb-8 font-normal">
              Built on zero-trust principles. We safeguard high-stakes enterprise architectures with SOC 2 Type II assurance, ISO 27001 controls, and private AI isolation.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="bg-[#33A685] hover:bg-[#299576] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Request SOC 2 Report &amp; Security Packet</span>
              </button>
              <a
                href="#compliance-matrix"
                className="bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-xl transition-colors"
              >
                View Certifications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Four Core Certifications Matrix */}
      <section id="compliance-matrix" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#B4D9C4]/60">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
            Independently Verified
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#0E4032] mt-3 tracking-tight">
            Compliance &amp; Regulatory Certifications
          </h2>
          <p className="text-sm sm:text-base text-[#0E4032]/80 mt-2 font-normal">
            Audited against world-class security benchmarks to support enterprise deployments in fintech, healthcare, and critical infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {complianceStandards.map((std, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#B4D9C4] rounded-3xl p-6 sm:p-8 shadow-xs hover:border-[#33A685] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
                    {std.badge}
                  </span>
                  <ShieldCheck className="w-6 h-6 text-[#33A685]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0E4032] mb-3">
                  {std.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed mb-6 font-normal">
                  {std.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-[#B4D9C4]/50">
                  {std.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-[#0E4032]/90 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#33A685] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Six Pillars of Security */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
              Defense in Depth
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#0E4032] mt-3 tracking-tight">
              Enterprise Security Architecture
            </h2>
            <p className="text-sm sm:text-base text-[#0E4032]/80 mt-2 font-normal">
              How our dedicated pods and infrastructure engineers defend your code, data, and models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {securityPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F2F2F2] border border-[#B4D9C4] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#0E4032] text-[#F2E6A7] flex items-center justify-center mb-4 shadow-xs">
                      <Icon className="w-5 h-5 text-[#33A685]" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#0E4032] mb-3">
                      {pillar.title}
                    </h3>

                    <ul className="space-y-2">
                      {pillar.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-xs text-[#0E4032]/80 leading-relaxed flex items-start gap-2 font-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#33A685] flex-shrink-0 mt-1.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Vulnerability Disclosure & SecOps Contact */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0E4032] text-white border border-[#33A685]/50 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#42CF9F] mb-4">
              <AlertTriangle className="w-3.5 h-3.5 text-[#33A685]" />
              Responsible Disclosure
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
              Security Vulnerability Disclosure Program
            </h2>
            <p className="text-xs sm:text-sm text-[#B4D9C4] leading-relaxed mb-6 font-normal">
              We welcome security researchers and ethical hackers to responsibly disclose potential vulnerabilities. If you discover a security vulnerability in any SpotXpert AI asset, please contact our Security Operations team immediately. We do not pursue legal action against researchers acting in good faith.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <a
                href="mailto:security@spotxpert.ai"
                className="bg-[#33A685] hover:bg-[#299576] text-white font-semibold py-2.5 px-5 rounded-xl transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>security@spotxpert.ai</span>
              </a>
              <span className="text-[#B4D9C4]/80">PGP Key ID: 0x4F8A9B12 (Available on request)</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Global Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </main>
  );
}
