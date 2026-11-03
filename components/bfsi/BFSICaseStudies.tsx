'use client';

import React, { useState } from 'react';
import { TrendingUp, ArrowUpRight, Award, ArrowRight } from 'lucide-react';
import BFSICaseStudyModal, { CaseStudyData } from './BFSICaseStudyModal';

interface BFSICaseStudiesProps {
  onOpenConsultation: () => void;
}

export default function BFSICaseStudies({ onOpenConsultation }: BFSICaseStudiesProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'cloud' | 'data' | 'ai'>('all');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudyData | null>(null);

  const caseStudies: CaseStudyData[] = [
    {
      id: 'quote-time-70',
      category: 'Cloud and DevOps engineering',
      title: 'Manufacturer Cuts Quote Time 70% with Cloud Integration',
      summary:
        'Automated inventory verification process, seamless migration of legacy RFQ system to cloud and integrated the new platform with multiple ERP systems of manufacturers. Provided a unified view of the quotation process to key stakeholders spread across the world.',
      impactMetric: '70% Reduction',
      impactLabel: 'Turnaround time to generate quotations cut by 70% via Azure database automation',
      challenge:
        'Disparate global manufacturing facilities suffered from slow RFQ turnaround, manual spreadsheet verification, and disconnected legacy ERP systems.',
      solution:
        'Modernized legacy RFQ system into a centralized cloud database architecture on Azure with automated ERP synchronization across global partners.',
      technologies: ['Azure SQL', 'DevOps CI/CD', 'ERP APIs', 'Microservices', 'REST'],
    },
    {
      id: 'automotive-cdxp',
      category: 'Data Engineering & Product Engineering',
      title: 'Automotive Improves Data Accuracy 80% with Data Platform',
      summary:
        'Built a Consumer Data & Experience Platform (CDXP™), a cloud-based solution designed to consolidate customer data and power personalized marketing strategies. Implemented advanced data engineering and marketing automation practices.',
      impactMetric: '80% Data Accuracy',
      impactLabel: 'Serving over 1,000+ dealerships to maximize customer lifecycle ROI',
      challenge:
        'Customer records and purchase histories were fragmented across dealership silos, causing inaccurate targeting and low conversion rates.',
      solution:
        'Engineered an enterprise Customer Data Platform (CDXP™) consolidating data streams into a unified customer profile with real-time marketing automation.',
      technologies: ['Apache Spark', 'Snowflake', 'Python ETL', 'Customer Data Platform', 'Node.js'],
    },
    {
      id: 'semiconductor-automation',
      category: 'Cloud & Managed Services',
      title: 'Semiconductor Manufacturer Boosts Data Accuracy 80% with Automation',
      summary:
        'Built an enterprise application that eliminates hours of manual spreadsheet work. Solution processes thousands of daily orders through various sales channels and gives real-time visibility of inventory levels.',
      impactMetric: '70% Faster Fulfillment',
      impactLabel: 'Real-time inventory visibility across 200+ partners and 5,000+ product SKUs',
      challenge:
        'Complex supply chain operations relied on manual spreadsheet tracking, creating multi-day inventory delays and order fulfillment backlogs.',
      solution:
        'Engineered an automated cloud fulfillment platform providing live inventory tracking across 200+ global partner channels.',
      technologies: ['Kubernetes', 'Golang', 'PostgreSQL', 'Redis Cache', 'Event-Driven Architecture'],
    },
    {
      id: 'auction-zero-downtime',
      category: 'Migration and Modernization',
      title: 'Global Auction Platform Achieves Zero Downtime with DevOps Pipeline',
      summary:
        'Built during COVID crisis to transform the way auction houses run operations digitally. It is a platform to manage real-time live auctions operations such as bidding, payments, escrow, inventory management, CRM, invoicing etc.',
      impactMetric: 'Zero Downtime',
      impactLabel: 'Used to sell 7M lots by 3,900 auction houses across 165 countries',
      challenge:
        'Traditional auction houses faced sudden shutdown and needed instant transition to live digital bidding with high-concurrency payment and escrow security.',
      solution:
        'Architected a resilient white-labeled digital auction infrastructure handling real-time WebRTC bidding, instant payments, and escrow reconciliation.',
      technologies: ['WebRTC', 'Kubernetes', 'Terraform', 'Payment Gateways', 'Docker', 'AWS'],
    },
    {
      id: 'water-treatment-iot',
      category: 'Managed Services & Product Engineering',
      title: 'Water Treatment Giant Achieved Zero-Crash Performance',
      summary:
        'Built IoT solution for consumers and professionals that helped them manage the entire fleet of smart devices of Pentair. Solution involved building a mobile application using component-based development, intuitive UI and CI/CD pipeline.',
      impactMetric: 'Zero-Crash SLA',
      impactLabel: 'Integrated hundreds of hardware IoT devices via intuitive mobile apps',
      challenge:
        'Managing diverse physical IoT water hardware devices required a unified, low-latency mobile and backend telemetry platform without application crashes.',
      solution:
        'Designed component-based mobile applications and IoT cloud broker connections with automated CI/CD automated test verification.',
      technologies: ['IoT MQTT', 'React Native', 'AWS IoT Core', 'CI/CD Pipeline', 'Node.js'],
    },
    {
      id: 'ai-psychology-research',
      category: 'ML and Data Science',
      title: 'AI Boosts Psychology Research Efficiency For 150K+ Users',
      summary:
        'Gen AI solution for psychology researchers for fast and efficient retrieval of information using LLMs. It streamlines content discovery and engages in dynamic, context-aware conversations, offering personalized guidance through research repository.',
      impactMetric: '20X Faster Search',
      impactLabel: 'Multi-turn context-aware guidance serving 150,000+ researchers globally',
      challenge:
        'Academic researchers spent countless hours searching through dense clinical literature repositories without semantic or contextual understanding.',
      solution:
        'Implemented an enterprise Generative AI RAG architecture with vector embeddings, domain-specific prompt engineering, and conversational retrieval.',
      technologies: ['Generative AI / LLMs', 'Vector Databases', 'Python', 'LangChain', 'FastAPI'],
    },
    {
      id: 'sports-brand-cdp',
      category: 'Data Engineering',
      title: 'Sports Brand Boosts ROI 40% with Customer Data Platform',
      summary:
        'Built a unified customer data platform that consolidates fragmented sales, events, and loyalty data into complete customer profiles. Solution powers real-time segmentation and personalized campaigns across eCommerce and 1,000+ annual events worldwide.',
      impactMetric: '40% ROI Boost',
      impactLabel: 'Future-ready 360-degree customer view spanning eCommerce and 1,000+ annual events',
      challenge:
        'Fragmented data from physical endurance events, online stores, and loyalty programs prevented cohesive marketing and personalized customer journeys.',
      solution:
        'Engineered an event-driven customer data platform with automated segmentation pipelines, triggering targeted campaigns across all buyer touchpoints.',
      technologies: ['Customer Data Platform', 'Shopify Plus API', 'Snowflake', 'Segment', 'dbt'],
    },
  ];

  const filtered = caseStudies.filter((study) => {
    if (activeFilter === 'cloud') return study.category.toLowerCase().includes('cloud') || study.category.toLowerCase().includes('devops');
    if (activeFilter === 'data') return study.category.toLowerCase().includes('data');
    if (activeFilter === 'ai') return study.category.toLowerCase().includes('ml') || study.category.toLowerCase().includes('ai');
    return true;
  });

  return (
    <section className="py-20 sm:py-28 bg-[#F2F2F2] relative border-b border-[#B4D9C4]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B4D9C4]/40 border border-[#33A685]/40 text-[#0E4032] text-xs font-semibold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-[#33A685]" />
              Proven Case Studies
            </div>
            <h2 className="section-heading text-[#0E4032]">
              Case Studies in Engineering Excellence
            </h2>
            <p className="body-text text-[#0E4032]/80 mt-2 max-w-xl">
              Discover the many ways in which our clients have embraced the benefits of the SpotXpert AI way of engineering.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Case Studies (7)' },
              { id: 'cloud', label: 'Cloud & Modernization' },
              { id: 'data', label: 'Data Engineering' },
              { id: 'ai', label: 'AI & Machine Learning' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#33A685] text-white shadow-xs'
                    : 'bg-white border border-[#B4D9C4] text-[#0E4032] hover:bg-[#B4D9C4]/25'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((study) => (
            <div
              key={study.id}
              className="bg-white border border-[#B4D9C4] rounded-2xl p-7 flex flex-col justify-between hover:border-[#33A685] transition-all duration-300 hover:-translate-y-1 group shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold text-[#0E4032] uppercase tracking-wider bg-[#B4D9C4]/35 px-2.5 py-1 rounded-md border border-[#B4D9C4]">
                    {study.category}
                  </span>
                </div>

                <h3 className="card-heading text-[#0E4032] group-hover:text-[#33A685] transition-colors mb-4 line-clamp-2">
                  {study.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#0E4032]/80 leading-[1.65] mb-5 font-normal line-clamp-3">
                  {study.summary}
                </p>

                {/* Outcome Badge in #0E4032 */}
                <div className="bg-[#0E4032] border border-[#1b6550] rounded-xl p-4 mb-5 text-white shadow-xs">
                  <div className="flex items-center gap-2 text-[#F2E6A7] font-bold text-xl tracking-tight">
                    <TrendingUp className="w-4 h-4 text-[#33A685]" />
                    <span>{study.impactMetric}</span>
                  </div>
                  <div className="text-[11px] text-[#B4D9C4] mt-1 font-normal leading-normal">
                    {study.impactLabel}
                  </div>
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#B4D9C4]/60 mb-4">
                  {study.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono font-normal text-[#0E4032] bg-[#F2F2F2] border border-[#B4D9C4] px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.technologies.length > 3 && (
                    <span className="text-[11px] font-mono font-medium text-[#33A685] bg-[#F2F2F2] px-1.5 py-0.5">
                      +{study.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Read More Trigger Button */}
                <button
                  onClick={() => setSelectedStudy(study)}
                  className="w-full flex items-center justify-between text-xs font-semibold text-[#33A685] group-hover:text-[#0E4032] transition-colors pt-2 cursor-pointer"
                >
                  <span>Read Technical Architecture</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for In-depth Case Study */}
        <BFSICaseStudyModal
          study={selectedStudy}
          onClose={() => setSelectedStudy(null)}
          onOpenConsultation={onOpenConsultation}
        />

      </div>
    </section>
  );
}
