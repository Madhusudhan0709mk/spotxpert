'use client';

import React from 'react';
import { 
  Briefcase, 
  Cloud, 
  ShieldCheck, 
  Users, 
  Smartphone, 
  Workflow, 
  Award, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface BFSIAdvantagesProps {
  onOpenConsultation: () => void;
}

export default function BFSIAdvantages({ onOpenConsultation }: BFSIAdvantagesProps) {
  const advantages = [
    {
      icon: Briefcase,
      title: 'Domain experience',
      tag: 'Sector Depth',
      description:
        'Our extensive experience working with financial services customers helps us understand the sector’s specific challenges and complexities, enabling us to develop tailored solutions.',
      highlights: ['Deep regulatory familiarity', 'Banking legacy system triage', 'Fintech architectural patterns'],
    },
    {
      icon: Cloud,
      title: 'Cloud & AI engineering excellence',
      tag: 'Hyperscale Cloud',
      description:
        'Excelling in enterprise cloud engineering, microservices, and AI models, SpotXpert AI leverages modern distributed infrastructure to offer unmatched scalability, flexibility, and security for the financial services industry.',
      highlights: ['Containerized microservices', 'Low-latency cloud networks', 'Automated FinOps governance'],
    },
    {
      icon: ShieldCheck,
      title: 'Secure and compliant',
      tag: 'Zero-Trust DNA',
      description:
        'At SpotXpert AI, we prioritize the security of your financial data, implementing stringent measures and ensuring compliance with GDPR, KYC/AML, PCI DSS, SOC-2 Type II, and other relevant regulations.',
      highlights: ['PCI-DSS Level 1 compliance', 'Immutable audit ledgers', 'End-to-end data encryption'],
    },
    {
      icon: Users,
      title: 'Scalable teams',
      tag: 'Agile Velocity',
      description:
        'We are big enough to scale and small enough to care. Our flexible teams grow with you to enable rapid adjustments to project needs, ensuring timely delivery without compromising quality.',
      highlights: ['48-hour pod ramp-up', 'Dedicated technical leads', 'Overlapping global time zones'],
    },
    {
      icon: Smartphone,
      title: 'Omnichannel experience',
      tag: 'Unified Journeys',
      description:
        'We develop solutions that integrate seamlessly across different channels (mobile, web, in-branch) and allow customers to easily switch between channels without disruption.',
      highlights: ['Cross-platform consistency', 'Persistent session state', 'Offline-first sync protocols'],
    },
    {
      icon: Workflow,
      title: 'End-to-end services',
      tag: 'Full Lifecycle',
      description:
        'We offer full-cycle development services, from initial design to maintenance, leveraging CI/CD, containerization, and DevOps for seamless feedback integration and faster deployments.',
      highlights: ['Automated CI/CD pipelines', 'Zero-downtime rolling deploys', '24/7 SRE reliability support'],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0E4032] text-white relative border-b border-[#185c49] overflow-hidden">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#175b47_0%,transparent_60%)] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33A685]/20 border border-[#33A685]/50 text-[#F2E6A7] text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-[#33A685]" />
            Enterprise Strategic Advantage
          </div>
          <h2 className="section-heading text-white">
            Your edge in <span className="text-[#33A685]">BFSI innovation</span>
          </h2>
          <p className="body-text text-[#B4D9C4] mt-4 max-w-2xl mx-auto">
            SpotXpert AI has comprehensive engineering experience that spans across diverse segments of the financial services industry, helping businesses navigate complex challenges and capitalize on opportunities for growth and innovation.
          </p>
        </div>

        {/* 6 Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="bg-[#08241c] border border-[#1b6550] rounded-2xl p-7 flex flex-col justify-between hover:border-[#33A685] transition-all duration-300 hover:-translate-y-1 group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0E4032] border border-[#33A685]/60 flex items-center justify-center text-[#33A685] group-hover:scale-105 group-hover:border-[#F2E6A7] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#0E4032] bg-[#F2E6A7] px-2.5 py-0.5 rounded shadow-xs">
                      {adv.tag}
                    </span>
                  </div>

                  <h3 className="card-heading text-white mb-3 group-hover:text-[#F2E6A7] transition-colors">
                    {adv.title}
                  </h3>

                  <p className="text-sm text-[#B4D9C4] leading-[1.65] font-normal mb-6">
                    {adv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#185c49] space-y-2">
                  {adv.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-[#B4D9C4]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#33A685] flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#08241c] via-[#124d3c] to-[#08241c] border border-[#33A685]/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-lg font-semibold text-white">
              Ready to evaluate your BFSI technical roadmap?
            </h4>
            <p className="text-sm text-[#B4D9C4] mt-1">
              Speak with our senior financial systems architects to outline architecture, compliance, and velocity.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="flex-shrink-0 bg-[#33A685] hover:bg-[#288f72] text-white btn-text px-7 py-3.5 rounded-xl transition-all cursor-pointer shadow-lg"
          >
            <span>Request Technical Blueprint</span>
          </button>
        </div>

      </div>
    </section>
  );
}
