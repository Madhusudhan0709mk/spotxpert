export interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface Partner {
  name: string;
  tier: string;
  category: string;
  description: string;
  competencies: string[];
  logoText: string;
}

export interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const LEADERSHIP_TEAM: Leader[] = [
  {
    name: 'Hiren Dhaduk',
    role: 'Chief Technology Officer & Co-Founder',
    bio: '20+ years driving enterprise digital transformation, cloud architecture, and AI engineering. Leads technical strategy and engineering excellence across our 1,000+ developer workforce.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
  },
  {
    name: 'Saurabh Patel',
    role: 'Chief Executive Officer',
    bio: 'Pioneered the Agile Pods delivery model. Has guided SpotXpert AI from a boutique engineering squad to a global software partner trusted by 900+ high-growth and Fortune 500 companies.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80',
  },
  {
    name: 'Pooja Vora',
    role: 'VP of AI & Data Engineering',
    bio: 'Former senior machine learning researcher specializing in GenAI, high-precision RAG systems, and distributed model fine-tuning. Oversees the SpotXpert AI Labs accelerator portfolio.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
  },
  {
    name: 'Marcus Vance',
    role: 'Head of Global Client Solutions (North America)',
    bio: 'Based in San Francisco. Advises enterprise CTOs on modern software stack migration, cost optimization, and building cohesive nearshore-offshore pod topologies.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80',
  },
];

export const CORE_CULTURE_VALUES = [
  {
    title: 'Craftsmanship Mindset',
    description: 'We do not ship "good enough" code. We write maintainable, self-documenting software with rigorous automated test coverage that stands the test of time.',
    icon: 'Sparkles',
  },
  {
    title: 'Radical Transparency',
    description: 'Direct communication without bureaucratic hierarchy. We share the hard truths early, proactively address technical debt, and celebrate shared client triumphs.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Customer Value Obsession',
    description: 'Technology is only as good as the business outcome it creates. Every sprint ticket is mapped directly to measurable revenue, cost, or customer experience impact.',
    icon: 'Target',
  },
  {
    title: 'Continuous Compounding Learning',
    description: 'Technology moves at breakneck speed. Every engineer receives dedicated weekly learning hours, conference sponsorship, and hands-on cloud certifications.',
    icon: 'BookOpen',
  },
];

export const PARTNERSHIPS_LIST: Partner[] = [
  {
    name: 'Amazon Web Services (AWS)',
    tier: 'AWS Premier Tier Services Partner',
    category: 'Cloud Infrastructure & DevOps',
    description: 'Top-tier partnership with certified competencies in DevOps, Migration, Data & Analytics, and Generative AI.',
    competencies: ['AWS Generative AI Competency', 'DevOps Competency', 'Migration Services Competency', 'Well-Architected Review Partner'],
    logoText: 'AWS Premier Partner',
  },
  {
    name: 'Microsoft Azure',
    tier: 'Microsoft Solutions Partner',
    category: 'Enterprise Cloud & AI',
    description: 'Recognized for deep capability in Digital & App Innovation and Azure OpenAI enterprise integrations.',
    competencies: ['Azure OpenAI Solutions Partner', 'Kubernetes on Azure', 'Data & Analytics Specialization', 'Enterprise Cloud Modernization'],
    logoText: 'Microsoft Solutions Partner',
  },
  {
    name: 'Google Cloud Platform',
    tier: 'Google Cloud Premier Partner',
    category: 'AI & Data Modernization',
    description: 'Deep expertise deploying Gemini, Vertex AI, BigQuery, and scalable Kubernetes engine (GKE) clusters.',
    competencies: ['Vertex AI Deployment Specialist', 'BigQuery Modernization', 'Google Kubernetes Engine (GKE)', 'Apigee API Management'],
    logoText: 'Google Cloud Partner',
  },
  {
    name: 'Snowflake',
    tier: 'Snowflake Select Services Partner',
    category: 'Data Cloud & Warehousing',
    description: 'Architecting zero-maintenance enterprise data lakes, Snowpark pipelines, and real-time analytical warehouses.',
    competencies: ['Snowpark for Python', 'Data Clean Rooms', 'Enterprise Warehouse Migrations'],
    logoText: 'Snowflake Partner',
  },
  {
    name: 'Databricks',
    tier: 'Databricks Registered Partner',
    category: 'Lakehouse & ML Engineering',
    description: 'Engineering unified data analytics, Delta Lake storage backbones, and MLflow operational model pipelines.',
    competencies: ['Delta Lake Architecture', 'MLflow LLM Pipelines', 'Distributed Spark Optimization'],
    logoText: 'Databricks Partner',
  },
  {
    name: 'Pinecone Alliance',
    tier: 'Pinecone Premier Solution Partner',
    category: 'Vector Database & Search',
    description: 'Co-engineering production-scale vector search, semantic embeddings, and low-latency RAG architectures.',
    competencies: ['High-Throughput Vector Indexing', 'Multi-tenant RAG Pods', 'Enterprise Metadata Filtering'],
    logoText: 'Pinecone Alliance',
  },
];

export const JOB_OPENINGS_DATA: JobRole[] = [
  {
    id: 'job-1',
    title: 'Lead Generative AI Solutions Architect',
    department: 'AI & Data Engineering',
    location: 'Remote (US, Canada or India)',
    type: 'Full-Time',
    experience: '8+ Years',
    description: 'Lead the design and production rollout of Enterprise RAG systems, multi-agent autonomous graphs, and fine-tuned open-source model pipelines for Fortune 500 clients.',
    responsibilities: [
      'Architect robust multi-modal GenAI pipelines with LangChain, LangGraph, and vector databases.',
      'Partner with client CTOs to define AI strategy, latency SLAs, and data security postures.',
      'Mentor senior engineers in LLMOps, semantic caching, and guardrail validation frameworks.',
      'Champion engineering best practices in Python 3.12, Docker, and Kubernetes.',
    ],
    requirements: [
      'Proven track record deploying production GenAI systems serving real user traffic.',
      'Deep fluency with vector databases (Pinecone, Qdrant, pgvector) and embedding models.',
      'Strong background in distributed cloud architecture on AWS or Azure.',
      'Exceptional client-facing verbal and written communication skills.',
    ],
  },
  {
    id: 'job-2',
    title: 'Principal Cloud & DevOps Architect (AWS/Kube)',
    department: 'Cloud Platform Engineering',
    location: 'Remote (Global)',
    type: 'Full-Time',
    experience: '10+ Years',
    description: 'Own enterprise cloud architecture, infrastructure-as-code with Terraform, Kubernetes cluster operations, and zero-downtime microservices migrations.',
    responsibilities: [
      'Design fault-tolerant, multi-region AWS and Azure architectures.',
      'Build automated CI/CD pipelines with GitHub Actions, ArgoCD, and Helm.',
      'Lead SOC 2 Type II and ISO 27001 infrastructure security audits.',
      'Optimize multi-tenant cloud spend utilizing FinOps frameworks and spot instances.',
    ],
    requirements: [
      'Active AWS Solutions Architect Professional or CKA certification.',
      'Expertise in Terraform, Kubernetes, Kafka, and distributed networking.',
      'Experience leading legacy monolithic decompositions into microservices.',
    ],
  },
  {
    id: 'job-3',
    title: 'Senior Fullstack Tech Lead (Next.js & TypeScript)',
    department: 'Digital Product Engineering',
    location: 'Remote (US or India)',
    type: 'Full-Time',
    experience: '6+ Years',
    description: 'Drive high-velocity development of scalable, responsive enterprise web applications using Next.js 15, React 19, TypeScript, and modern headless APIs.',
    responsibilities: [
      'Architect modular frontend design systems using Tailwind CSS and React Server Components.',
      'Ensure sub-second Core Web Vitals, accessibility standards (WCAG 2.1), and responsive polish.',
      'Conduct rigorous code reviews and foster a culture of craftsmanship in agile pods.',
      'Collaborate with product designers and backend engineers on clean GraphQL and REST schemas.',
    ],
    requirements: [
      'Expert-level mastery of Next.js, React, TypeScript, and state management.',
      'Deep understanding of server-side rendering, streaming, and edge caching.',
      'Passionate about clean component hierarchies and zero-defect code quality.',
    ],
  },
  {
    id: 'job-4',
    title: 'Staff QA Automation Engineer (Playwright & K6)',
    department: 'Quality Engineering',
    location: 'Remote (Global)',
    type: 'Full-Time',
    experience: '5+ Years',
    description: 'Build enterprise-grade test automation harnesses covering UI end-to-end, API contracts, load/stress performance, and visual regressions.',
    responsibilities: [
      'Develop robust Playwright and Cypress test suites running in CI pipelines.',
      'Design distributed load and stress testing scripts using K6 and JMeter.',
      'Integrate SonarQube and automated security checks into pull-request gates.',
      'Collaborate with developers to achieve 90%+ automated regression coverage.',
    ],
    requirements: [
      'Strong programming proficiency in TypeScript or Python.',
      'Hands-on experience with Playwright, Jest/Vitest, and Docker.',
      'Familiarity with performance profiling and API contract testing.',
    ],
  },
];
