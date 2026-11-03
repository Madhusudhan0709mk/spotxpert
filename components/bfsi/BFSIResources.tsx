'use client';

import React, { useState } from 'react';
import { BookOpen, ArrowUpRight, Download, FileText, Sparkles, User, Calendar } from 'lucide-react';
import BFSIResourceModal, { ResourceData } from './BFSIResourceModal';

interface BFSIResourcesProps {
  onOpenConsultation: () => void;
}

export default function BFSIResources({ onOpenConsultation }: BFSIResourcesProps) {
  const [selectedResource, setSelectedResource] = useState<ResourceData | null>(null);

  const resources: ResourceData[] = [
    {
      id: 'ai-in-fintech',
      category: 'AI/ML Development',
      title: 'AI in Fintech: Top Use Cases and Applications with Examples',
      description:
        'Explore the transformative impact of AI across banking, insurance, investment, and discover how to harness its power for your financial services business.',
      author: 'By Hiren Dhaduk',
      date: '10 Apr, 2024',
      type: 'article',
      readTime: '7 min read',
      outline: [
        'Real-time fraud scoring models and sub-50ms inference pipelines',
        'Generative AI for automated compliance summarization and reporting',
        'Customer onboarding and NLP banking agent architectures',
        'Algorithmic trading sentiment analysis with treemapping visual feeds',
      ],
    },
    {
      id: 'modernizing-legacy-systems',
      category: 'Application Modernization',
      title: 'A Guide to Modernizing Legacy Systems in Financial & Regulated Sectors',
      description:
        'Discover the reasons for modernizing legacy systems, its tangible operational benefits, regulatory challenges involved, and the architectural steps for a seamless transformation.',
      author: 'By Hiren Dhaduk',
      date: '23 Feb, 2026',
      type: 'article',
      readTime: '9 min read',
      outline: [
        'Strangler fig pattern for zero-downtime core banking migration',
        'Managing legacy database schema synchronization and data integrity',
        'Security guardrails for PCI-DSS, SOC-2, and GDPR audit compliance',
        'Containerization and microservices roadmap with Kubernetes',
      ],
    },
    {
      id: 'bfsi-launch-checklist',
      category: 'Technical Ebook',
      title: 'The Ultimate BFSI Software Architecture & Security Checklist',
      description:
        'Critical architectural and security milestones that engineering leadership should verify before releasing high-concurrency payment and banking applications.',
      type: 'ebook',
      readTime: '24 Pages PDF',
      outline: [
        'Zero-Trust network architecture and mutual TLS 1.3 verification',
        'Sub-second payment clearing latency benchmarks and load testing',
        'Automated database reconciliation and rollback protocols',
        'Disaster recovery, multi-region failover, and RPO/RTO SLAs',
      ],
    },
    {
      id: 'custom-fleet-software',
      category: 'Enterprise Whitepaper',
      title: 'Building Custom Fleet & Financial Asset Management Software',
      description:
        'Understand real-time financial inventory synchronization, automated ledger reconciliation, and emerging IoT asset tracking architectures.',
      type: 'ebook',
      readTime: '32 Pages PDF',
      outline: [
        'Asset lifecycle ledgering with automated depreciation schedules',
        'IoT device telemetry ingestion at sub-second frequency',
        'Enterprise ERP integration with QuickBooks, Xero, and Sage',
        'Field-rep mobile workflows with offline-first synchronization',
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F2F2F2] border-b border-[#B4D9C4]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B4D9C4]/40 border border-[#33A685]/40 text-[#0E4032] text-xs font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#33A685]" />
              Industry Insights
            </div>
            <h2 className="section-heading text-[#0E4032]">
              From Our Experts
            </h2>
            <p className="body-text text-[#0E4032]/80 mt-2 max-w-xl">
              Architectural blueprints, whitepapers, and guides authored by our financial engineering directors and principal consultants.
            </p>
          </div>

          <div className="hidden sm:block">
            <span className="text-xs font-semibold text-[#0E4032] bg-[#B4D9C4]/30 border border-[#B4D9C4] px-3.5 py-1.5 rounded-lg">
              Updated Regularly by Engineering Leads
            </span>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#B4D9C4] rounded-2xl p-6 flex flex-col justify-between hover:border-[#33A685] transition-all duration-300 hover:-translate-y-1 group shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold text-[#0E4032] uppercase tracking-wider bg-[#B4D9C4]/35 px-2.5 py-0.5 rounded border border-[#B4D9C4]">
                    {item.category}
                  </span>
                  {item.type === 'ebook' ? (
                    <Download className="w-4 h-4 text-[#33A685]" />
                  ) : (
                    <FileText className="w-4 h-4 text-[#33A685]" />
                  )}
                </div>

                <h3 className="card-heading text-[#0E4032] group-hover:text-[#33A685] transition-colors mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#0E4032]/80 leading-[1.65] font-normal mb-6 line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div>
                {item.author && (
                  <div className="pt-3 border-t border-[#B4D9C4]/60 text-[11px] text-[#0E4032]/75 mb-3 flex items-center justify-between">
                    <span>{item.author}</span>
                    <span>{item.date}</span>
                  </div>
                )}

                <button
                  onClick={() => setSelectedResource(item)}
                  className="w-full bg-[#08241c] hover:bg-[#155442] text-white btn-text py-2.5 px-4 rounded-lg flex items-center justify-between transition-colors cursor-pointer text-xs"
                >
                  <span>{item.type === 'ebook' ? 'Download Guide' : 'Read Publication'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#33A685]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for Reading / Downloading Resource */}
        <BFSIResourceModal
          resource={selectedResource}
          onClose={() => setSelectedResource(null)}
          onOpenConsultation={onOpenConsultation}
        />

      </div>
    </section>
  );
}
