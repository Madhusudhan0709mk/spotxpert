'use client';

import React, { useState } from 'react';
import { 
  Landmark, 
  ShieldCheck, 
  CreditCard, 
  TrendingUp, 
  PiggyBank, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';

interface BFSICapabilitiesProps {
  onOpenConsultation: () => void;
}

export default function BFSICapabilities({ onOpenConsultation }: BFSICapabilitiesProps) {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      id: 'banking',
      title: 'Banking solutions',
      shortTitle: 'Core Banking',
      icon: Landmark,
      headline: 'Optimize core banking operations, from account opening to reconciliations and fraud prevention.',
      description:
        'We implement advanced ML algorithms for fraud detection, digital customer onboarding solutions with e-KYC capabilities, NLP-powered intelligent virtual assistants, and Open Banking API integrations for secure exchanges.',
      bullets: [
        'Advanced ML algorithms for real-time fraud detection & graph anomaly scoring',
        'Digital customer onboarding workflows with automated biometric e-KYC',
        'NLP-powered intelligent banking virtual assistants for 24/7 retail support',
        'Open Banking API integrations (PSD2, FDX, ISO 20022 compliant)',
        'Automated multi-bank reconciliations, balance sweeps, and transaction streaming',
      ],
      metrics: [
        { label: 'Fraud Detection Latency', value: '<50ms' },
        { label: 'e-KYC Verification Rate', value: '99.4%' },
        { label: 'Core Banking SLA', value: '99.999%' },
      ],
      technologies: ['Python / PyTorch', 'Apache Kafka', 'Open Banking API', 'Kubernetes', 'PostgreSQL', 'HashiCorp Vault'],
    },
    {
      id: 'insurtech',
      title: 'InsurTech solutions',
      shortTitle: 'InsurTech',
      icon: ShieldCheck,
      headline: 'Streamline underwriting, claims, policy management, and customer service for faster turnaround times.',
      description:
        'We engineer solutions such as automated claims processing systems using computer vision and ML models, digital insurance aggregators with real-time data analytics, usage-based insurance apps with IoT, and CRM integrations for personalized experiences.',
      bullets: [
        'Automated claims adjudication systems using computer vision damage assessment',
        'Digital insurance aggregators with real-time multi-carrier comparative analytics',
        'Usage-based insurance (UBI) mobile applications integrated with IoT vehicle telematics',
        'Policyholder CRM integrations for dynamic personalized actuarial risk scoring',
        'Instant First Notice of Loss (FNOL) digital triage pipelines',
      ],
      metrics: [
        { label: 'Claims Cycle Acceleration', value: '4x' },
        { label: 'Automated Damage Accuracy', value: '94%' },
        { label: 'Policyholder Retention', value: '+35%' },
      ],
      technologies: ['Computer Vision (CV)', 'FastAPI', 'AWS HealthLake & IoT', 'Snowflake', 'React Native', 'Redis'],
    },
    {
      id: 'payments',
      title: 'Payments systems',
      shortTitle: 'Payments Systems',
      icon: CreditCard,
      headline: 'Enable seamless, secure, and instant payments with transactions completed within 200ms on average.',
      description:
        'We craft contactless payment solutions with NFC technology, voice-enabled smart wallet with BLE integration and GATT profile setup for secure connection, and invoicing management platform integrating ERPs like QuickBooks, Xero, and Sage.',
      bullets: [
        'Contactless payment solutions with NFC tokenization & EMV standards',
        'Voice-enabled smart wallets with BLE integration and secure GATT profiles',
        'Enterprise invoicing platforms deeply integrated with QuickBooks, Xero, and Sage ERPs',
        'Sub-200ms clearing and instant settlement protocols across multi-rail networks',
        'Tokenized credit card vaults and biometric payment authentication',
      ],
      metrics: [
        { label: 'Average Settlement Time', value: '<200ms' },
        { label: 'Payment Processing SLA', value: '99.999%' },
        { label: 'Compliance Level', value: 'PCI-DSS L1' },
      ],
      technologies: ['Go (Golang)', 'NFC & BLE / GATT', 'QuickBooks / Xero APIs', 'Stripe & Adyen Core', 'AWS Nitro Enclaves'],
    },
    {
      id: 'lending',
      title: 'P2P lending and mortgage tech',
      shortTitle: 'Lending & Mortgage',
      icon: PiggyBank,
      headline: 'Expedite the entire loan lifecycle with loan management solutions, DMS like DocuSign, automated credit scoring and risk assessment with ML tools like TensorFlow.',
      description:
        'We develop peer-to-peer lending platforms powered by collaborative filtering algorithms, mortgage automation systems employing rule-based engines, buy-now-pay-later apps, and crowdfunding platforms.',
      bullets: [
        'Automated credit decisioning & risk assessment using TensorFlow machine learning',
        'End-to-end loan lifecycle management with DocuSign electronic document integration',
        'Peer-to-peer lending platforms powered by collaborative filtering algorithms',
        'Mortgage underwriting engines powered by deterministic rule-based algorithms',
        'Buy-Now-Pay-Later (BNPL) platforms with micro-installment scheduling and escrow ledgers',
      ],
      metrics: [
        { label: 'Origination Speedup', value: '60%' },
        { label: 'Risk Modeling Accuracy', value: '96.8%' },
        { label: 'Document Completion Rate', value: '98.5%' },
      ],
      technologies: ['TensorFlow', 'DocuSign API', 'Spring Boot', 'Next.js', 'Apache Flink', 'MongoDB'],
    },
    {
      id: 'wealth',
      title: 'Wealth management solutions',
      shortTitle: 'Wealth Management',
      icon: TrendingUp,
      headline: 'Develop robust digital solutions for investment management, portfolio tracking, risk management, and personalized financial advice.',
      description:
        'We build robo-advisors to automate investment strategies, portfolio optimization algorithms like Markowitz, stock market sentiment analysis using algorithms like squarified treemapping, and robust data engineering pipelines for auditing.',
      bullets: [
        'Algorithmic robo-advisors for automatic tax-loss harvesting and portfolio rebalancing',
        'Markowitz mean-variance modern portfolio theory optimization engines',
        'Financial market sentiment analysis using squarified treemapping and real-time NLP feeds',
        'Data engineering pipelines ensuring immutable audit logs and SEC compliance',
        'Multi-custodian asset aggregation with real-time NAV portfolio metrics',
      ],
      metrics: [
        { label: 'Portfolio Rebalance SLA', value: 'Real-time' },
        { label: 'Historical Data Ingestion', value: '1.8B ticks/day' },
        { label: 'Audit Trail Accuracy', value: '100%' },
      ],
      technologies: ['Python / NumPy', 'D3.js / Treemaps', 'Databricks', 'Apache Spark', 'GraphQL', 'AWS Redshift'],
    },
    {
      id: 'nextgen',
      title: 'Next-gen fintech solutions',
      shortTitle: 'Next-Gen Fintech',
      icon: Cpu,
      headline: 'Modernize operations and reduce costs with advanced technologies like Robotic Process Automation (RPA) to automate repetitive tasks or blockchain DeFi solutions.',
      description:
        'We help you deploy emerging tech, such as RegTech solutions like KYC/AML compliance platforms and regulatory reporting automation, cryptocurrency payment solutions, and more.',
      bullets: [
        'RegTech platforms for automated KYC/AML compliance and real-time sanctions screening',
        'Robotic Process Automation (RPA) reducing manual back-office tasks by 80%',
        'Cryptocurrency & digital asset payment rails with institutional custody integration',
        'Smart contract infrastructure with mathematical formal verification for DeFi systems',
        'Automated regulatory filing pipelines for FINRA, SEC, and international authorities',
      ],
      metrics: [
        { label: 'Manual Ops Reduction', value: '80%' },
        { label: 'Compliance Audit Time', value: '2 Hours' },
        { label: 'Smart Contract Audit SLA', value: 'Zero-Defect' },
      ],
      technologies: ['UiPath RPA', 'Ethereum / Solana Web3', 'Chainlink Oracles', 'Python RegTech', 'Zero-Knowledge Proofs'],
    },
  ];

  const current = capabilities[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section id="bfsi-capabilities" className="py-20 sm:py-28 bg-[#F2F2F2] relative border-b border-[#B4D9C4]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B4D9C4]/40 border border-[#33A685]/40 text-[#0E4032] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#33A685]" />
            Core BFSI Specialization
          </div>
          <h2 className="section-heading text-[#0E4032]">
            SpotXpert AI’s capabilities in <br className="hidden sm:inline" />
            <span className="text-[#33A685]">Financial &amp; BFSI Engineering</span>
          </h2>
          <p className="body-text text-[#0E4032]/80 mt-4 max-w-2xl mx-auto">
            From core banking modernization to sub-second payment settlement and automated RegTech pipelines, our specialized squads engineer resilient financial software.
          </p>
        </div>

        {/* Interactive Capability Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-10">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveTab(idx)}
                className={`flex flex-col items-center text-center p-3.5 sm:p-4 rounded-xl transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-[#33A685] text-white border-[#33A685] shadow-lg shadow-[#33A685]/25 scale-[1.02]'
                    : 'bg-white text-[#0E4032] border-[#B4D9C4] hover:bg-[#B4D9C4]/25'
                }`}
              >
                <Icon className={`w-5 h-5 mb-2 ${isActive ? 'text-white' : 'text-[#33A685]'}`} />
                <span className="text-xs sm:text-[13px] font-semibold leading-tight">{cap.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Capability Panel Card */}
        <div className="bg-white border border-[#B4D9C4] rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#B4D9C4]/40 border border-[#33A685]/40 flex items-center justify-center text-[#33A685]">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685]">
                  {current.title}
                </span>
              </div>

              <h3 className="card-heading text-[#0E4032] mb-3">
                {current.headline}
              </h3>

              <p className="body-text text-[#0E4032]/85 mb-7">
                {current.description}
              </p>

              {/* Verified Feature Checklist */}
              <div className="space-y-3 mb-8">
                {current.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#33A685] flex-shrink-0 mt-1" />
                    <span className="text-[14px] text-[#0E4032] font-normal leading-[1.6]">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-6 border-t border-[#B4D9C4]/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-[#0E4032]/70 uppercase tracking-wider mr-2">
                  Architecture Stack:
                </span>
                {current.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-[#F2F2F2] border border-[#B4D9C4] text-[#0E4032]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Metrics & Consultation Anchor */}
            <div className="lg:col-span-5 bg-[#0E4032] border border-[#1b6550] rounded-xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#185c49] mb-6">
                  <span className="text-xs font-semibold text-[#B4D9C4] uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-[#33A685]" />
                    Engineered Benchmarks
                  </span>
                  <span className="text-xs font-semibold text-[#0E4032] bg-[#F2E6A7] px-2 py-0.5 rounded shadow-xs">
                    Production Verified
                  </span>
                </div>
                
                <div className="space-y-4">
                  {current.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-[#082920] border border-[#185c49] p-4 rounded-xl">
                      <div className="text-2xl sm:text-3xl font-bold text-[#F2E6A7] tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-[13px] text-[#B4D9C4] font-normal mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#185c49]">
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-[#33A685] hover:bg-[#288f72] text-white btn-text py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <span>Consult an Architect on {current.shortTitle}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
