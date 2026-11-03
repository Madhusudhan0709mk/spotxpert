'use client';

import React, { useState } from 'react';
import { Sparkles, Code2, Cloud, Database, Users, CheckCircle2 } from 'lucide-react';

interface CapabilitiesProps {
  onOpenConsultation?: () => void;
}

export default function Capabilities({ onOpenConsultation: _onOpenConsultation }: CapabilitiesProps) {
  const [activeTab, setActiveTab] = useState(0);

  const capabilities = [
    {
      id: 'generative-ai',
      icon: Sparkles,
      title: 'AI & Generative AI Solutions',
      tagline: 'From Custom Foundation Models to Enterprise Agentic Workflows',
      description:
        'Transform complex enterprise workflows into autonomous, intelligent systems with production-grade RAG, fine-tuned LLMs, and multi-agent systems designed for speed, safety, and verifiable accuracy.',
      metrics: [
        { label: 'Latency Reduction', value: '65%' },
        { label: 'Token Cost Optimization', value: '4.2x' },
        { label: 'Deployment Velocity', value: '3 weeks' },
      ],
      features: [
        'Private Enterprise RAG & Hybrid Vector Search',
        'Fine-Tuned Domain Models (Llama 3, Claude, Gemini)',
        'Multi-Agent Autonomous Orchestration & Tool Calling',
        'Guardrails, Red-Teaming, & Continuous Evaluation',
      ],
      technologies: ['LangChain', 'LlamaIndex', 'Pinecone', 'vLLM', 'PyTorch', 'Gemini Pro'],
    },
    {
      id: 'product-engineering',
      icon: Code2,
      title: 'Digital Product Engineering',
      tagline: 'End-to-End Full-Lifecycle Software Products That Scale to Millions',
      description:
        'We architect resilient, beautiful digital products with modern TypeScript, micro-frontends, event-driven backends, and fault-tolerant cloud backbones built for hyperscale growth.',
      metrics: [
        { label: 'Uptime Reliability', value: '99.99%' },
        { label: 'Sprint Velocity Increase', value: '+40%' },
        { label: 'Test Coverage SLA', value: '>92%' },
      ],
      features: [
        'Microservices & Event-Driven Distributed Systems',
        'Next-Gen Web & Mobile Apps (Next.js, React Native)',
        'API First & GraphQL Enterprise Integration',
        'Design Systems & Human-Centered UX Architecture',
      ],
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'Go', 'React Native', 'GraphQL'],
    },
    {
      id: 'cloud-devops',
      icon: Cloud,
      title: 'Cloud & DevOps Architecture',
      tagline: 'AWS Premier Tier Partner Delivering Resilient Infrastructure',
      description:
        'Modernize legacy monolithic workloads into cloud-native architectures with automated CI/CD pipelines, Kubernetes orchestration, FinOps optimization, and zero-trust security postures.',
      metrics: [
        { label: 'Infrastructure Savings', value: '38%' },
        { label: 'Deployment Frequency', value: '25x/day' },
        { label: 'MTTR Recovery Time', value: '<5 mins' },
      ],
      features: [
        'Kubernetes (EKS/GKE) & Microservices Containerization',
        'Infrastructure as Code (Terraform, Pulumi, AWS CDK)',
        'Zero-Trust Identity, SOC2 Type II & HIPAA Compliance',
        'FinOps Cloud Cost Governance & Auto-scaling',
      ],
      technologies: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'Datadog', 'ArgoCD'],
    },
    {
      id: 'data-engineering',
      icon: Database,
      title: 'Data & Analytics Modernization',
      tagline: 'Unify Fragmented Silos Into High-Performance Real-Time Pipelines',
      description:
        'Build real-time streaming architectures, high-performance data lakehouses, and analytics pipelines that feed operational dashboards and real-time machine learning inference engines.',
      metrics: [
        { label: 'Pipeline Throughput', value: '1.2B rows/day' },
        { label: 'Query Speedup', value: '12x' },
        { label: 'Data Freshness SLA', value: '<30s' },
      ],
      features: [
        'Streaming Ingestion (Apache Kafka, Flink, Kinesis)',
        'Modern Lakehouse Platforms (Snowflake, Databricks, BigQuery)',
        'dbt Semantic Modeling & Data Quality Governance',
        'Real-Time Operational Dashboards & Embedded BI',
      ],
      technologies: ['Snowflake', 'Databricks', 'Apache Kafka', 'dbt', 'BigQuery', 'Apache Spark'],
    },
    {
      id: 'agile-pods',
      icon: Users,
      title: 'Dedicated Agile Engineering Teams',
      tagline: 'Top 1% Vetted Talent Operating as a Frictionless Extension of Your Team',
      description:
        'Spin up battle-tested cross-functional squads—complete with Senior Tech Leads, Fullstack Engineers, QA Automation Specialists, and Scrum Masters—onboarded in under 48 hours.',
      metrics: [
        { label: 'Time-to-Deploy Pod', value: '48 Hours' },
        { label: 'Talent Retention Rate', value: '96%' },
        { label: 'Time Zone Overlap', value: '4-6 Hours' },
      ],
      features: [
        'Rigorous Multi-Stage Engineering Vetting (Top 1%)',
        'Daily Standups, Transparent Jira/Git Sprint Cadence',
        'Flexible Scaling with Zero Long-Term Hiring Drag',
        'Dedicated Delivery Managers and Technical Architects',
      ],
      technologies: ['Jira Agile', 'GitHub Enterprise', 'Slack', 'Linear', 'Confluence'],
    },
  ];

  const current = capabilities[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F2F2F2] relative border-b border-[#B4D9C4]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B4D9C4]/40 border border-[#33A685]/40 text-[#0E4032] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#33A685]" />
            Engineering Capabilities
          </div>
          <h2 className="section-heading text-[#0E4032]">
            Architecting the Future of <br className="hidden sm:inline" />
            <span className="text-[#33A685]">
              AI-Native Software
            </span>
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl btn-text transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#33A685] text-white shadow-lg shadow-[#33A685]/25 scale-[1.02]'
                    : 'bg-white text-[#0E4032] border border-[#B4D9C4] hover:bg-[#B4D9C4]/30'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#33A685]'}`} />
                <span>{cap.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Detail Card */}
        <div className="bg-white border border-[#B4D9C4] rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
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
                {current.tagline}
              </h3>

              <p className="body-text text-[#0E4032]/85 mb-7">
                {current.description}
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#33A685] flex-shrink-0 mt-0.5" />
                    <span className="text-[14px] text-[#0E4032] font-normal leading-[1.6]">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Metrics Panel - Dark visual anchor in 25% #0E4032 */}
            <div className="lg:col-span-5 bg-[#0E4032] border border-[#1b6550] rounded-xl p-6 sm:p-8 text-white flex flex-col justify-between shadow-lg">
              <div>
                <h4 className="text-xs font-semibold text-[#B4D9C4] uppercase tracking-wider mb-6">
                  Proven Enterprise Benchmarks
                </h4>
                
                <div className="space-y-4">
                  {current.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-[#082920] border border-[#185c49] p-4 rounded-xl">
                      <div className="text-3xl sm:text-4xl font-bold text-[#F2E6A7] tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-[13px] text-[#B4D9C4] font-normal mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
