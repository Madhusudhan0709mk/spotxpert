export interface VideoSpeaker {
  name: string;
  role: string;
  avatar: string;
}

export interface VideoItem {
  id: string;
  title: string;
  embedUrl: string;
  directUrl: string;
  platform: 'Dailymotion' | 'YouTube' | 'Vimeo';
  duration: string;
  category: string;
  speaker: VideoSpeaker;
  description: string;
  keyTakeaways: string[];
  tags: string[];
  date: string;
  featured?: boolean;
}

export interface VideoLinkItem {
  id: string;
  title: string;
  embedUrl: string;
  directUrl: string;
  platform: 'Dailymotion' | 'YouTube' | 'Vimeo';
  category: string;
  duration: string;
}

/**
 * Dynamic Links List in File
 * Easily readable, extractable, and dynamic link registry.
 */
export const VIDEO_LINKS: VideoLinkItem[] = [
  {
    id: 'video-1',
    title: 'Enterprise AI Transformation & System Architecture Overview',
    embedUrl: 'https://www.dailymotion.com/embed/video/xbt21sa',
    directUrl: 'https://dai.ly/xbt21sa',
    platform: 'Dailymotion',
    category: 'Generative AI & LLMs',
    duration: '18:42',
  },
  {
    id: 'video-2',
    title: 'Enterprise AI Systems & Agentic Engineering Teardown',
    embedUrl: 'https://www.youtube.com/embed/iwPNLVmenJM?si=SsbVLz1Qy8vHdTwW',
    directUrl: 'https://www.youtube.com/watch?v=iwPNLVmenJM',
    platform: 'YouTube',
    category: 'Generative AI & LLMs',
    duration: '14:35',
  },
  {
    id: 'video-3',
    title: 'Building Autonomous Multi-Agent Workflows with LangGraph & CrewAI',
    embedUrl: 'https://www.youtube.com/embed/b-Q_b-A_WdM',
    directUrl: 'https://www.youtube.com/watch?v=b-Q_b-A_WdM',
    platform: 'YouTube',
    category: 'Generative AI & LLMs',
    duration: '24:15',
  },
  {
    id: 'video-4',
    title: 'Next-Gen Hybrid RAG: Combining Dense Vectors with BM25 Sparse Search',
    embedUrl: 'https://www.youtube.com/embed/2TJxpyO3ei4',
    directUrl: 'https://www.youtube.com/watch?v=2TJxpyO3ei4',
    platform: 'YouTube',
    category: 'Generative AI & LLMs',
    duration: '16:50',
  },
  {
    id: 'video-5',
    title: 'Microservices Modernization: Strangler Fig Pattern at 100M Requests/Day',
    embedUrl: 'https://www.youtube.com/embed/y8OnoxKotPQ',
    directUrl: 'https://www.youtube.com/watch?v=y8OnoxKotPQ',
    platform: 'YouTube',
    category: 'Enterprise Platforms',
    duration: '21:10',
  },
  {
    id: 'video-6',
    title: 'Zero-Trust Cloud Infrastructure on AWS & Kubernetes',
    embedUrl: 'https://www.youtube.com/embed/5a3vhwJd2k4',
    directUrl: 'https://www.youtube.com/watch?v=5a3vhwJd2k4',
    platform: 'YouTube',
    category: 'Cloud & DevOps',
    duration: '19:35',
  },
  {
    id: 'video-7',
    title: 'Real-Time Streaming Lakehouse with Apache Iceberg & Kafka',
    embedUrl: 'https://www.youtube.com/embed/Hau_7U8k4L8',
    directUrl: 'https://www.youtube.com/watch?v=Hau_7U8k4L8',
    platform: 'YouTube',
    category: 'Enterprise Platforms',
    duration: '28:10',
  },
  {
    id: 'video-8',
    title: 'FinOps: Slashing Enterprise Cloud & GPU Spend by 45%',
    embedUrl: 'https://www.youtube.com/embed/9Z9e5Kq7p2A',
    directUrl: 'https://www.youtube.com/watch?v=9Z9e5Kq7p2A',
    platform: 'YouTube',
    category: 'Cloud & DevOps',
    duration: '15:20',
  },
  {
    id: 'video-9',
    title: 'Automated CI/CD for AI Models: Drift Detection & Canary Rollouts',
    embedUrl: 'https://www.youtube.com/embed/x1QhO54s9Qc',
    directUrl: 'https://www.youtube.com/watch?v=x1QhO54s9Qc',
    platform: 'YouTube',
    category: 'Security & SRE',
    duration: '22:45',
  },
  {
    id: 'video-10',
    title: 'Healthcare AI Case Study: HIPAA-Compliant Clinical Summarization',
    embedUrl: 'https://www.youtube.com/embed/3Wf2c6-d44o',
    directUrl: 'https://www.youtube.com/watch?v=3Wf2c6-d44o',
    platform: 'YouTube',
    category: 'Client Case Spotlights',
    duration: '20:15',
  },
  {
    id: 'video-11',
    title: 'Full-Stack GraphQL Federation for Unified Enterprise APIs',
    embedUrl: 'https://www.youtube.com/embed/4b333y45G3s',
    directUrl: 'https://www.youtube.com/watch?v=4b333y45G3s',
    platform: 'YouTube',
    category: 'Enterprise Platforms',
    duration: '17:30',
  },
  {
    id: 'video-12',
    title: 'High-Throughput Vector Databases: Milvus vs Qdrant vs pgvector Benchmarks',
    embedUrl: 'https://www.youtube.com/embed/Q0P30X0v-q0',
    directUrl: 'https://www.youtube.com/watch?v=Q0P30X0v-q0',
    platform: 'YouTube',
    category: 'Generative AI & LLMs',
    duration: '26:00',
  },
  {
    id: 'video-13',
    title: 'Fintech Fraud Prevention: Real-Time Graph Neural Networks (GNN)',
    embedUrl: 'https://www.youtube.com/embed/7X8mJzX1j9g',
    directUrl: 'https://www.youtube.com/watch?v=7X8mJzX1j9g',
    platform: 'YouTube',
    category: 'Client Case Spotlights',
    duration: '23:40',
  },
  {
    id: 'video-14',
    title: 'Chaos Engineering for Cloud Resilience: Breaking Production Safely',
    embedUrl: 'https://www.youtube.com/embed/P6yS1xJ43v4',
    directUrl: 'https://www.youtube.com/watch?v=P6yS1xJ43v4',
    platform: 'YouTube',
    category: 'Security & SRE',
    duration: '18:55',
  },
  {
    id: 'video-15',
    title: 'Fine-Tuning vs RAG vs In-Context Learning: The Decision Framework',
    embedUrl: 'https://www.youtube.com/embed/d3q48_0vN9k',
    directUrl: 'https://www.youtube.com/watch?v=d3q48_0vN9k',
    platform: 'YouTube',
    category: 'Generative AI & LLMs',
    duration: '27:15',
  },
  {
    id: 'video-16',
    title: 'Event-Driven Architectures with Apache Kafka & AWS EventBridge',
    embedUrl: 'https://www.youtube.com/embed/c0J7d5a57_U',
    directUrl: 'https://www.youtube.com/watch?v=c0J7d5a57_U',
    platform: 'YouTube',
    category: 'Enterprise Platforms',
    duration: '21:05',
  },
  {
    id: 'video-17',
    title: 'Securing LLM Applications: OWASP Top 10 for GenAI Deep Dive',
    embedUrl: 'https://www.youtube.com/embed/jZ_v_e6p09Y',
    directUrl: 'https://www.youtube.com/watch?v=jZ_v_e6p09Y',
    platform: 'YouTube',
    category: 'Security & SRE',
    duration: '19:40',
  },
  {
    id: 'video-18',
    title: 'Serverless at Scale: AWS Lambda, Step Functions & DynamoDB Global Tables',
    embedUrl: 'https://www.youtube.com/embed/hB5d_gTzE9E',
    directUrl: 'https://www.youtube.com/watch?v=hB5d_gTzE9E',
    platform: 'YouTube',
    category: 'Cloud & DevOps',
    duration: '16:15',
  },
  {
    id: 'video-19',
    title: 'Supply Chain AI: Demand Forecasting & Automated Replenishment',
    embedUrl: 'https://www.youtube.com/embed/Z0oQ9d0E4sY',
    directUrl: 'https://www.youtube.com/watch?v=Z0oQ9d0E4sY',
    platform: 'YouTube',
    category: 'Client Case Spotlights',
    duration: '25:30',
  },
  {
    id: 'video-20',
    title: 'Next.js 15 & React Server Components in Enterprise Web Portals',
    embedUrl: 'https://www.youtube.com/embed/wm5gMKuwSYk',
    directUrl: 'https://www.youtube.com/watch?v=wm5gMKuwSYk',
    platform: 'YouTube',
    category: 'Enterprise Platforms',
    duration: '18:10',
  },
  {
    id: 'video-21',
    title: 'Edge AI Deployment: Quantization & ONNX Runtime on Industrial Gateways',
    embedUrl: 'https://www.youtube.com/embed/2zXz9t8p5hM',
    directUrl: 'https://www.youtube.com/watch?v=2zXz9t8p5hM',
    platform: 'YouTube',
    category: 'Cloud & DevOps',
    duration: '22:15',
  },
];

export const VIDEO_CATALOG: VideoItem[] = [
  {
    id: 'video-1',
    title: 'Enterprise AI Transformation & System Architecture Overview',
    embedUrl: 'https://www.dailymotion.com/embed/video/xbt21sa',
    directUrl: 'https://dai.ly/xbt21sa',
    platform: 'Dailymotion',
    duration: '18:42',
    category: 'Generative AI & LLMs',
    speaker: {
      name: 'Dr. Elena Vance',
      role: 'Chief AI Architect & VP of Engineering',
      avatar: 'EV',
    },
    description:
      'A comprehensive technical teardown of enterprise AI deployment blueprints, high-concurrency model routing pipelines, vector indexing architectures, and zero-trust security barriers for Fortune 500 ecosystems.',
    keyTakeaways: [
      'Dual-tier model routing between low-latency SLMs and high-reasoning frontier models',
      'Vector cache indexing cutting recurring inference spend by 68%',
      'Multi-tenant enterprise zero-trust guardrails & PII filtering in memory',
    ],
    tags: ['LLM Orchestration', 'Multi-Agent', 'Vector Search', 'Enterprise Security'],
    date: 'Nov 2026',
    featured: true,
  },
  {
    id: 'video-2',
    title: 'Enterprise AI Systems & Agentic Engineering Teardown',
    embedUrl: 'https://www.youtube.com/embed/iwPNLVmenJM?si=SsbVLz1Qy8vHdTwW',
    directUrl: 'https://www.youtube.com/watch?v=iwPNLVmenJM',
    platform: 'YouTube',
    duration: '14:35',
    category: 'Generative AI & LLMs',
    speaker: {
      name: 'Alex Vance',
      role: 'Principal Systems Architect',
      avatar: 'AV',
    },
    description:
      'In-depth engineering teardown on autonomous multi-agent pipelines, prompt orchestration, real-time streaming interfaces, and production reliability safeguards for full-stack AI applications.',
    keyTakeaways: [
      'Production-grade full-stack AI integration patterns and error handling',
      'Real-time streaming response handling and state synchronization',
      'Scalable cloud deployment with automated fallback and guardrail boundaries',
    ],
    tags: ['Full-Stack AI', 'YouTube Embed', 'Agentic Systems', 'Cloud Scale'],
    date: 'Nov 2026',
  },
  {
    id: 'video-3',
    title: 'Building Autonomous Multi-Agent Workflows with LangGraph & CrewAI',
    embedUrl: 'https://www.youtube.com/embed/b-Q_b-A_WdM',
    directUrl: 'https://www.youtube.com/watch?v=b-Q_b-A_WdM',
    platform: 'YouTube',
    duration: '24:15',
    category: 'Generative AI & LLMs',
    speaker: {
      name: 'Marcus Sterling',
      role: 'Principal Agentic Systems Architect',
      avatar: 'MS',
    },
    description:
      'Deep dive into event-driven agent architectures, cyclic execution graphs, automated human-in-the-loop escalation checkpoints, and persistent memory stores across complex multi-step workflows.',
    keyTakeaways: [
      'Cyclic graph topologies with deterministic state validation',
      'Autonomous tool error recovery & self-correcting prompt retries',
      'Full distributed agent telemetry using OpenTelemetry standards',
    ],
    tags: ['Autonomous Agents', 'LangGraph', 'Event-Driven', 'RAG'],
    date: 'Oct 2026',
  },
  {
    id: 'video-4',
    title: 'Next-Gen Hybrid RAG: Combining Dense Vectors with BM25 Sparse Search',
    embedUrl: 'https://www.youtube.com/embed/2TJxpyO3ei4',
    directUrl: 'https://www.youtube.com/watch?v=2TJxpyO3ei4',
    platform: 'YouTube',
    duration: '16:50',
    category: 'Generative AI & LLMs',
    speaker: {
      name: 'Siddharth Rao',
      role: 'Head of Data Platforms',
      avatar: 'SR',
    },
    description:
      'Why naive semantic vector search degrades in enterprise codebases and regulatory filings, and how Reciprocal Rank Fusion (RRF) with hybrid sparse-dense indexes delivers 94% retrieval accuracy.',
    keyTakeaways: [
      'Reciprocal Rank Fusion (RRF) algorithm implementation in Python',
      'Semantic boundary chunking vs fixed-token sliding windows',
      'Cross-encoder re-ranking pipelines without latency bloat',
    ],
    tags: ['Hybrid RAG', 'Vector DB', 'BM25', 'Information Retrieval'],
    date: 'Oct 2026',
  },
  {
    id: 'video-5',
    title: 'Microservices Modernization: Strangler Fig Pattern at 100M Requests/Day',
    embedUrl: 'https://www.youtube.com/embed/y8OnoxKotPQ',
    directUrl: 'https://www.youtube.com/watch?v=y8OnoxKotPQ',
    platform: 'YouTube',
    duration: '21:10',
    category: 'Enterprise Platforms',
    speaker: {
      name: 'Jessica Chen',
      role: 'VP of Platform Engineering',
      avatar: 'JC',
    },
    description:
      'A detailed technical retrospective on decomposing a 15-year-old monolithic enterprise core into domain-driven microservices without a single minute of customer downtime.',
    keyTakeaways: [
      'Zero-downtime dark launching and traffic shadowing patterns',
      'CDC (Change Data Capture) synchronization using Debezium and Kafka',
      'Service mesh canary routing and circuit breaking with Istio',
    ],
    tags: ['Microservices', 'Legacy Modernization', 'Istio', 'Kafka CDC'],
    date: 'Sep 2026',
  },
  {
    id: 'video-6',
    title: 'Zero-Trust Cloud Infrastructure on AWS & Kubernetes',
    embedUrl: 'https://www.youtube.com/embed/5a3vhwJd2k4',
    directUrl: 'https://www.youtube.com/watch?v=5a3vhwJd2k4',
    platform: 'YouTube',
    duration: '19:35',
    category: 'Cloud & DevOps',
    speaker: {
      name: 'David Okafor',
      role: 'Cloud Infrastructure Director',
      avatar: 'DO',
    },
    description:
      'Production Terraform blueprints, SPIFFE/SPIRE workload identities, and automated compliance policy-as-code enforcement with Open Policy Agent (OPA) Gatekeeper.',
    keyTakeaways: [
      'Short-lived ephemeral pod credentials replacing static AWS keys',
      'Pre-commit policy validation with OPA and Kyverno',
      'Multi-AZ active-active failover topologies with Route53 health checks',
    ],
    tags: ['Kubernetes', 'AWS', 'Zero-Trust', 'Terraform'],
    date: 'Sep 2026',
  },
  {
    id: 'video-7',
    title: 'Real-Time Streaming Lakehouse with Apache Iceberg & Kafka',
    embedUrl: 'https://www.youtube.com/embed/Hau_7U8k4L8',
    directUrl: 'https://www.youtube.com/watch?v=Hau_7U8k4L8',
    platform: 'YouTube',
    duration: '28:10',
    category: 'Enterprise Platforms',
    speaker: {
      name: 'Ananya Deshmukh',
      role: 'Lead Streaming Data Engineer',
      avatar: 'AD',
    },
    description:
      'Ingesting 50,000 events/sec into open table format Iceberg with instant ACID transactional guarantees, time-travel queries, and sub-second analytics dashboards.',
    keyTakeaways: [
      'Compaction and snapshot maintenance strategies avoiding small file bloat',
      'Zero-downtime schema evolution without pipeline breaking changes',
      '50% cloud cost reduction compared to proprietary data warehouses',
    ],
    tags: ['Apache Iceberg', 'Apache Kafka', 'Data Lakehouse', 'Real-Time'],
    date: 'Aug 2026',
  },
  {
    id: 'video-8',
    title: 'FinOps: Slashing Enterprise Cloud & GPU Spend by 45%',
    embedUrl: 'https://www.youtube.com/embed/9Z9e5Kq7p2A',
    directUrl: 'https://www.youtube.com/watch?v=9Z9e5Kq7p2A',
    platform: 'YouTube',
    duration: '15:20',
    category: 'Cloud & DevOps',
    speaker: {
      name: 'Liam O’Connor',
      role: 'FinOps & Cloud Economics Lead',
      avatar: 'LO',
    },
    description:
      'Dynamic spot GPU cluster orchestration, preemptible instance fallbacks, and automated model quantizations (FP8/INT4) for high-scale enterprise workloads.',
    keyTakeaways: [
      'vLLM inference batching & PagedAttention memory optimization',
      'Automated cluster spin-down on idle detection via custom Prometheus metrics',
      'Cost tagging taxonomies enforcing departmental budget boundaries',
    ],
    tags: ['FinOps', 'GPU Optimization', 'vLLM', 'Cost Governance'],
    date: 'Aug 2026',
  },
  {
    id: 'video-9',
    title: 'Automated CI/CD for AI Models: Drift Detection & Canary Rollouts',
    embedUrl: 'https://www.youtube.com/embed/x1QhO54s9Qc',
    directUrl: 'https://www.youtube.com/watch?v=x1QhO54s9Qc',
    platform: 'YouTube',
    duration: '22:45',
    category: 'Security & SRE',
    speaker: {
      name: 'Sophia Martinez',
      role: 'MLOps & SRE Practice Lead',
      avatar: 'SM',
    },
    description:
      'How to safely release updated foundation models and prompt pipelines with automated LLM-as-a-judge regression test suites and statistical drift monitors.',
    keyTakeaways: [
      'Automated synthetic test suites verifying output consistency',
      '1% traffic canary rollouts with automated rollbacks on hallucination spikes',
      'Production embedding drift alerting before user escalation',
    ],
    tags: ['MLOps', 'CI/CD', 'Drift Detection', 'Canary Releases'],
    date: 'Jul 2026',
  },
  {
    id: 'video-10',
    title: 'Healthcare AI Case Study: HIPAA-Compliant Clinical Summarization',
    embedUrl: 'https://www.youtube.com/embed/3Wf2c6-d44o',
    directUrl: 'https://www.youtube.com/watch?v=3Wf2c6-d44o',
    platform: 'YouTube',
    duration: '20:15',
    category: 'Client Case Spotlights',
    speaker: {
      name: 'Dr. Aris Thorne',
      role: 'Healthcare AI Solutions Director',
      avatar: 'AT',
    },
    description:
      'Architecting an ambient clinical documentation pipeline that strips PHI in-memory, integrates with Epic EHR via FHIR, and reduces physician charting burden by 65%.',
    keyTakeaways: [
      'In-memory PHI token de-identification before model context insertion',
      'FHIR API real-time bidirectional synchronization with EHR tables',
      'Immutable cryptographic audit logging and SOC 2 Type II validation',
    ],
    tags: ['Healthcare', 'HIPAA', 'EHR Integration', 'Clinical AI'],
    date: 'Jul 2026',
  },
  {
    id: 'video-11',
    title: 'Full-Stack GraphQL Federation for Unified Enterprise APIs',
    embedUrl: 'https://www.youtube.com/embed/4b333y45G3s',
    directUrl: 'https://www.youtube.com/watch?v=4b333y45G3s',
    platform: 'YouTube',
    duration: '17:30',
    category: 'Enterprise Platforms',
    speaker: {
      name: 'Tariq Al-Mansoor',
      role: 'Staff API Gateway Engineer',
      avatar: 'TM',
    },
    description:
      'Unifying 24 disparate microservice schemas into a single, high-performance subgraph gateway using Apollo Router compiled in Rust.',
    keyTakeaways: [
      'Sub-millisecond query planning and execution in Rust',
      'Distributed subgraph response caching with Redis Cluster',
      'Automated schema contract testing preventing breaking client changes',
    ],
    tags: ['GraphQL', 'API Gateway', 'Federation', 'Rust Router'],
    date: 'Jun 2026',
  },
  {
    id: 'video-12',
    title: 'High-Throughput Vector Databases: Milvus vs Qdrant vs pgvector Benchmarks',
    embedUrl: 'https://www.youtube.com/embed/Q0P30X0v-q0',
    directUrl: 'https://www.youtube.com/watch?v=Q0P30X0v-q0',
    platform: 'YouTube',
    duration: '26:00',
    category: 'Generative AI & LLMs',
    speaker: {
      name: 'Vikram Joshi',
      role: 'Database Infrastructure Architect',
      avatar: 'VJ',
    },
    description:
      'Benchmarking 50M embeddings with HNSW, IVFFlat, and scalar quantization across recall accuracy, latency under 10k QPS, and memory footprint.',
    keyTakeaways: [
      'HNSW vs IVF index performance trade-offs under high query velocity',
      'DiskANN deployment strategies for memory-constrained instances',
      'Partitioned pgvector indexing techniques for multi-tenant SaaS tables',
    ],
    tags: ['Vector Databases', 'pgvector', 'Milvus', 'Performance Benchmarks'],
    date: 'Jun 2026',
  },
  {
    id: 'video-13',
    title: 'Fintech Fraud Prevention: Real-Time Graph Neural Networks (GNN)',
    embedUrl: 'https://www.youtube.com/embed/7X8mJzX1j9g',
    directUrl: 'https://www.youtube.com/watch?v=7X8mJzX1j9g',
    platform: 'YouTube',
    duration: '23:40',
    category: 'Client Case Spotlights',
    speaker: {
      name: 'Kavita Patel',
      role: 'Financial Services AI Lead',
      avatar: 'KP',
    },
    description:
      'Detecting synthetic identity rings and money laundering patterns across transaction topologies using PyTorch Geometric and Neo4j graph databases.',
    keyTakeaways: [
      'Sub-50ms inference within payment gateway authorization SLAs',
      'Dynamic temporal graph updates without full network retraining',
      'Transparent attribution and explainable AI alerts for compliance teams',
    ],
    tags: ['Fintech', 'Graph Neural Networks', 'Fraud Detection', 'Neo4j'],
    date: 'May 2026',
  },
  {
    id: 'video-14',
    title: 'Chaos Engineering for Cloud Resilience: Breaking Production Safely',
    embedUrl: 'https://www.youtube.com/embed/P6yS1xJ43v4',
    directUrl: 'https://www.youtube.com/watch?v=P6yS1xJ43v4',
    platform: 'YouTube',
    duration: '18:55',
    category: 'Security & SRE',
    speaker: {
      name: 'Henrik Lindqvist',
      role: 'Site Reliability Engineering Lead',
      avatar: 'HL',
    },
    description:
      'Simulating cross-region network partitions, DNS degradation, and datastore latency spikes using LitmusChaos on enterprise Kubernetes clusters.',
    keyTakeaways: [
      'Automated steady-state verification before triggering chaos scenarios',
      'Blast radius containment strategies that prevent user disruption',
      'Production game day runbooks that eliminated Sev-1 downtime incidents',
    ],
    tags: ['Chaos Engineering', 'Kubernetes', 'SRE', 'High Availability'],
    date: 'May 2026',
  },
  {
    id: 'video-15',
    title: 'Fine-Tuning vs RAG vs In-Context Learning: The Decision Framework',
    embedUrl: 'https://www.youtube.com/embed/d3q48_0vN9k',
    directUrl: 'https://www.youtube.com/watch?v=d3q48_0vN9k',
    platform: 'YouTube',
    duration: '27:15',
    category: 'Generative AI & LLMs',
    speaker: {
      name: 'Dr. Elena Vance',
      role: 'Chief AI Architect & VP of Engineering',
      avatar: 'EV',
    },
    description:
      'A pragmatic decision tree for enterprise CTOs: when parameter-efficient fine-tuning (LoRA) beats prompting, how to mix instruction tuning with retrieval, and cost modeling.',
    keyTakeaways: [
      'Resource sizing guidelines for LoRA and QLoRA fine-tuning',
      'Adapting models to custom proprietary industry vocabularies',
      'Hybrid Retrieval-Augmented Fine-Tuning (RAFT) architectures',
    ],
    tags: ['Model Fine-Tuning', 'LoRA', 'Decision Framework', 'Architecture'],
    date: 'Apr 2026',
  },
  {
    id: 'video-16',
    title: 'Event-Driven Architectures with Apache Kafka & AWS EventBridge',
    embedUrl: 'https://www.youtube.com/embed/c0J7d5a57_U',
    directUrl: 'https://www.youtube.com/watch?v=c0J7d5a57_U',
    platform: 'YouTube',
    duration: '21:05',
    category: 'Enterprise Platforms',
    speaker: {
      name: 'Oliver Grant',
      role: 'Distributed Systems Architect',
      avatar: 'OG',
    },
    description:
      'Proven patterns for transactional outbox, idempotent event consumers, dead-letter queue replaying, and schema registry contract enforcement.',
    keyTakeaways: [
      'Transactional outbox pattern with Kafka Connect and PostgreSQL',
      'Enforcing exactly-once semantics across distributed boundaries',
      'Backpressure management preventing cascading microservice failures',
    ],
    tags: ['Apache Kafka', 'Event-Driven', 'Microservices', 'Distributed Systems'],
    date: 'Apr 2026',
  },
  {
    id: 'video-17',
    title: 'Securing LLM Applications: OWASP Top 10 for GenAI Deep Dive',
    embedUrl: 'https://www.youtube.com/embed/jZ_v_e6p09Y',
    directUrl: 'https://www.youtube.com/watch?v=jZ_v_e6p09Y',
    platform: 'YouTube',
    duration: '19:40',
    category: 'Security & SRE',
    speaker: {
      name: 'Maya Lin',
      role: 'AppSec & AI Safety Architect',
      avatar: 'ML',
    },
    description:
      'Defending against prompt injections, indirect data poisoning, insecure output handling, and unbounded token exhaustion in production agent deployments.',
    keyTakeaways: [
      'Multi-layered input sanitization and semantic prompt firewalls',
      'Strict sandboxed container execution for autonomous tool calls',
      'Automated red teaming pipelines continuously probing model guardrails',
    ],
    tags: ['AI Security', 'OWASP GenAI', 'Prompt Injection', 'Safety Guardrails'],
    date: 'Mar 2026',
  },
  {
    id: 'video-18',
    title: 'Serverless at Scale: AWS Lambda, Step Functions & DynamoDB Global Tables',
    embedUrl: 'https://www.youtube.com/embed/hB5d_gTzE9E',
    directUrl: 'https://www.youtube.com/watch?v=hB5d_gTzE9E',
    platform: 'YouTube',
    duration: '16:15',
    category: 'Cloud & DevOps',
    speaker: {
      name: 'Lucas Rossi',
      role: 'Principal Cloud Architect',
      avatar: 'LR',
    },
    description:
      'Scaling an enterprise processing pipeline to 250M monthly invocations while keeping cold starts under 120ms with AWS SnapStart and Rust runtimes.',
    keyTakeaways: [
      'Rust Lambda vs Node.js execution latency and memory cost comparison',
      'DynamoDB single-table design best practices for complex relational models',
      'Orchestrating high-scale parallel batches using Step Functions Distributed Map',
    ],
    tags: ['Serverless', 'AWS Lambda', 'DynamoDB', 'Cloud Architecture'],
    date: 'Mar 2026',
  },
  {
    id: 'video-19',
    title: 'Supply Chain AI: Demand Forecasting & Automated Replenishment',
    embedUrl: 'https://www.youtube.com/embed/Z0oQ9d0E4sY',
    directUrl: 'https://www.youtube.com/watch?v=Z0oQ9d0E4sY',
    platform: 'YouTube',
    duration: '25:30',
    category: 'Client Case Spotlights',
    speaker: {
      name: 'Claire Dubois',
      role: 'Enterprise Logistics Practice Lead',
      avatar: 'CD',
    },
    description:
      'How a multinational distributor cut stockouts by 34% and excess inventory by $12M using multi-horizon temporal fusion transformers and real-time ERP sync.',
    keyTakeaways: [
      'Temporal Fusion Transformers (TFT) modeling seasonal and macro demand curves',
      'Real-time ingestion of shipping port congestion and weather indices',
      'Automated purchase order drafting with multi-tier approval workflows',
    ],
    tags: ['Supply Chain', 'Predictive AI', 'Forecasting', 'Enterprise Case'],
    date: 'Feb 2026',
  },
  {
    id: 'video-20',
    title: 'Next.js 15 & React Server Components in Enterprise Web Portals',
    embedUrl: 'https://www.youtube.com/embed/wm5gMKuwSYk',
    directUrl: 'https://www.youtube.com/watch?v=wm5gMKuwSYk',
    platform: 'YouTube',
    duration: '18:10',
    category: 'Enterprise Platforms',
    speaker: {
      name: 'Daniel Kim',
      role: 'Frontend Architecture Director',
      avatar: 'DK',
    },
    description:
      'Modern streaming SSR, partial prerendering, zero-bundle-size server components, and enterprise design system integration with strict accessibility standards.',
    keyTakeaways: [
      'Streaming UI with Suspense boundaries for zero perceived loading delay',
      'Optimistic state updates for multi-user collaborative portals',
      'Achieving Core Web Vitals 99+ mobile performance ratings consistently',
    ],
    tags: ['Next.js', 'React Server Components', 'Frontend Architecture', 'Web Vitals'],
    date: 'Feb 2026',
  },
  {
    id: 'video-21',
    title: 'Edge AI Deployment: Quantization & ONNX Runtime on Industrial Gateways',
    embedUrl: 'https://www.youtube.com/embed/2zXz9t8p5hM',
    directUrl: 'https://www.youtube.com/watch?v=2zXz9t8p5hM',
    platform: 'YouTube',
    duration: '22:15',
    category: 'Cloud & DevOps',
    speaker: {
      name: 'Bernhard Weber',
      role: 'IoT & Edge Computing Architect',
      avatar: 'BW',
    },
    description:
      'Deploying computer vision defect inspection on NVIDIA Jetson and x86 edge nodes with sub-10ms frame inference using TensorRT and ONNX runtime.',
    keyTakeaways: [
      'Post-training quantization (PTQ) to INT8 with negligible precision loss',
      'Over-the-air (OTA) encrypted model synchronization over cellular LTE',
      'Edge telemetry, heartbeat monitoring, and automated safe fallbacks',
    ],
    tags: ['Edge AI', 'IoT', 'TensorRT', 'Computer Vision'],
    date: 'Jan 2026',
  },
];

export const CATEGORIES = [
  'All Videos',
  'Generative AI & LLMs',
  'Enterprise Platforms',
  'Cloud & DevOps',
  'Security & SRE',
  'Client Case Spotlights',
];

export function getAllVideos(): VideoItem[] {
  return VIDEO_CATALOG;
}

export function getVideoById(id: string): VideoItem | undefined {
  return VIDEO_CATALOG.find((v) => v.id === id);
}

export function getVideoLinksList(): VideoLinkItem[] {
  return VIDEO_LINKS;
}
