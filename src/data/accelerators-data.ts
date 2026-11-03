export interface AcceleratorItem {
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  category: 'LLM & Agent Toolkits' | 'Vision & Perception';
  hero: {
    headline: string;
    subheadline: string;
    metrics: { label: string; value: string; desc: string }[];
  };
  overview: {
    problem: string;
    solution: string;
    architectureSummary: string;
  };
  features: {
    title: string;
    description: string;
    icon: string;
    details: string[];
  }[];
  architectureSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  techStack: string[];
  benchmarks: {
    metric: string;
    traditional: string;
    spotxpert: string;
    improvement: string;
  }[];
  useCases: {
    industry: string;
    title: string;
    description: string;
    impact: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  heroImage: {
    url: string;
    alt: string;
  };
}

export const ACCELERATORS_DATA: Record<string, AcceleratorItem> = {
  'enterprise-rag-suite': {
    slug: 'enterprise-rag-suite',
    name: 'Enterprise RAG Suite',
    tagline: 'High-Precision Document Intelligence & Factual Retrieval Engine',
    badge: 'Proprietary Framework',
    category: 'LLM & Agent Toolkits',
    hero: {
      headline: 'Eliminate LLM Hallucinations with Enterprise-Grade Hybrid RAG',
      subheadline:
        'A battle-tested retrieval-augmented generation framework engineered for high-stakes enterprise compliance, combining dense/sparse semantic retrieval, recursive chunking, and verifiable source citations.',
      metrics: [
        { label: 'Factual Precision', value: '99.4%', desc: 'Verified zero-hallucination citation fidelity' },
        { label: 'P95 Latency', value: '<240ms', desc: 'Sub-second hybrid search and context retrieval' },
        { label: 'Time-to-Production', value: '60% Faster', desc: 'Pre-built vector connectors & chunking pipelines' },
        { label: 'Enterprise Formats', value: '50+ Formats', desc: 'PDF, DOCX, XLSX, SEC Filings & Scanned OCR' },
      ],
    },
    overview: {
      problem:
        'Off-the-shelf naive RAG pipelines fail in enterprise deployments due to loss of tabular structure in PDFs, semantic drift over millions of embeddings, high token costs, and catastrophic hallucinations when answering regulatory or financial questions.',
      solution:
        'SpotXpert Enterprise RAG Suite deploys hierarchical semantic chunking, dual dense-sparse vector hybrid indexing (BM25 + Cohere/BGE re-ranking), and deterministic context filters to guarantee citation verification before output generation.',
      architectureSummary:
        'Built on a modular decoupled architecture: Multi-modal ingestion → Structural parsing → Hybrid dense/sparse indexing → Cross-encoder re-ranking → Guardrailed LLM inference.',
    },
    features: [
      {
        title: 'Hybrid Dense & Sparse Search',
        description: 'Combines vector semantic similarity with exact keyword lexical search to capture both conceptual queries and exact product codes or legal statute citations.',
        icon: 'Layers',
        details: ['pgvector, Pinecone, and Qdrant support', 'Reciprocal Rank Fusion (RRF) algorithm', 'Dynamic alpha weighting based on query intent'],
      },
      {
        title: 'Table-Aware Structural Chunking',
        description: 'Preserves nested XML, markdown tables, and multi-column financial statements without fracturing context boundaries across chunk splits.',
        icon: 'Database',
        details: ['Vision-assisted OCR table boundary detection', 'Contextual chunk headers injection', 'Semantic document tree hierarchy'],
      },
      {
        title: 'Cross-Encoder Re-Ranking Pipeline',
        description: 'Filters top-50 candidate passages down to the 5 most informative context snippets using state-of-the-art re-ranking models.',
        icon: 'Sparkles',
        details: ['Cohere Rerank 3 & BGE-Reranker-Large', 'Token-budget optimizer to curb LLM context costs', 'Irrelevant context score pruning'],
      },
      {
        title: 'Deterministic Citation Verification',
        description: 'Every generated claim is mapped to an immutable byte-range and page number in the source document, preventing fabricated conclusions.',
        icon: 'ShieldCheck',
        details: ['Grounding score confidence thresholding', 'Fallback to human escalation if score < 0.90', 'Automated redlining diffs'],
      },
    ],
    architectureSteps: [
      { step: '01', title: 'Intelligent Ingestion', description: 'OCR parsing, table extraction, metadata enrichment, and structural chunking.' },
      { step: '02', title: 'Dual Indexing', description: 'Simultaneous embedding creation into vector stores and sparse lexical index.' },
      { step: '03', title: 'Context Re-ranking', description: 'Semantic retrieval followed by cross-encoder re-ranking to filter noise.' },
      { step: '04', title: 'Guardrailed Synthesis', description: 'Strict factual synthesis with verbatim source citation linking.' },
    ],
    techStack: ['Pinecone', 'Qdrant', 'pgvector', 'LangChain / LlamaIndex', 'Cohere Rerank', 'Redis Vector', 'FastAPI', 'Docker / K8s'],
    benchmarks: [
      { metric: 'Hallucination Rate', traditional: '14.2%', spotxpert: '0.6%', improvement: '95% Reduction' },
      { metric: 'Context Retrieval Speed', traditional: '1,450ms', spotxpert: '180ms', improvement: '8x Faster' },
      { metric: 'Table Query Accuracy', traditional: '42%', spotxpert: '96.8%', improvement: '+54.8% Gain' },
      { metric: 'Token Cost / Query', traditional: '$0.048', spotxpert: '$0.012', improvement: '75% Cost Savings' },
    ],
    useCases: [
      { industry: 'BFSI & Banking', title: 'SEC 10-K & Policy Audit', description: 'Instantly query 10 years of earnings reports and loan underwriting covenants.', impact: 'Auditing time reduced from 4 hours to 90 seconds.' },
      { industry: 'Legal Firms', title: 'Contract Due Diligence', description: 'Cross-examine 50,000 M&A discovery documents for indemnification risks.', impact: 'Discovered hidden risk clauses in 12 minutes.' },
      { industry: 'Healthcare', title: 'Clinical Trial Matching', description: 'Match patient genetic profiles against 250,000 active clinical trials.', impact: 'Matched qualified patients 3x faster with 100% HIPAA compliance.' },
    ],
    faqs: [
      { question: 'Can this run entirely in our private cloud (VPC)?', answer: 'Yes. Enterprise RAG Suite can be deployed 100% on-premise or within your AWS/Azure/GCP VPC, ensuring zero data egress to external vendors.' },
      { question: 'What vector databases are natively supported?', answer: 'We support Pinecone, Qdrant, Milvus, Weaviate, pgvector, and Elasticsearch, with built-in connection pooling and partition sharding.' },
      { question: 'How do you handle tables and complex multi-page charts?', answer: 'We use multimodal OCR parsers that render table structures into clean markdown and relational schemas before embedding, ensuring numbers are never severed from their row/column labels.' },
      { question: 'What is the licensing model?', answer: 'You own 100% of the deployed code with zero recurring vendor lock-in fees. SpotXpert AI handles architecture, customization, integration, and optional SLA maintenance.' },
    ],
    heroImage: {
      url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80',
      alt: 'Enterprise server hardware and interconnected cloud network cables',
    },
  },
  'agentic-workflow-engine': {
    slug: 'agentic-workflow-engine',
    name: 'Agentic Workflow Engine',
    tagline: 'Multi-Agent Autonomous Orchestration with Deterministic Guardrails',
    badge: 'Enterprise Engine',
    category: 'LLM & Agent Toolkits',
    hero: {
      headline: 'Autonomous Multi-Agent Teams Operating Real Business Workflows',
      subheadline:
        'Orchestrate goal-driven autonomous AI agents capable of planning, executing complex multi-step tools across ERPs and CRMs, self-reflecting, and escalating to humans when confidence drops.',
      metrics: [
        { label: 'Autonomous Task Completion', value: '94.2%', desc: 'Complex multi-step workflow success rate' },
        { label: 'Workflow Turnaround', value: '85% Faster', desc: 'Average cycle acceleration across workflows' },
        { label: 'Human Review Time', value: '-70%', desc: 'Reduces manual operational oversight' },
        { label: 'Integrated Connectors', value: '80+ Tools', desc: 'Native connectors to Salesforce, SAP, Jira & Slack' },
      ],
    },
    overview: {
      problem:
        'Single-turn LLMs cannot execute non-trivial business processes. Traditional hardcoded RPA scripts break when APIs or web UI changes. Companies need resilient agents that can adapt to changing conditions while respecting corporate governance rules.',
      solution:
        'SpotXpert Agentic Workflow Engine provides a graph-based state machine where specialized agent roles (Researcher, Critic, Tool Caller, Validator) collaborate with deterministic state rollbacks and mandatory human-in-the-loop checkpoints.',
      architectureSummary:
        'Hierarchical Multi-Agent Graph: Orchestrator agent delegates to domain-specialist worker agents, enforcing tool authorization tokens, loop termination guards, and comprehensive execution audit logs.',
    },
    features: [
      {
        title: 'Stateful Graph Orchestration',
        description: 'Deterministic state machine built on LangGraph paradigms that guarantees cycles terminate and allows instant time-travel debugging of agent reasoning.',
        icon: 'GitBranch',
        details: ['Cyclic graph execution with max-step clamps', 'Checkpoint persistence in Postgres/Redis', 'Parallel branch execution and map-reduce aggregation'],
      },
      {
        title: 'Human-in-the-Loop Interventions',
        description: 'High-risk actions (wire transfers, contract signing, client emails) trigger automated pause states requiring Slack/Teams manager sign-off.',
        icon: 'UserCheck',
        details: ['Interactive Slack and Microsoft Teams approval buttons', 'Audit trail of reviewer decisions', 'Configurable policy thresholds by dollar value or risk tier'],
      },
      {
        title: 'Model Context Protocol (MCP) & Tool Calling',
        description: 'Standardized tool-calling harness compatible with Anthropic MCP and OpenAPI specs for secure execution across SAP, NetSuite, and Salesforce.',
        icon: 'Zap',
        details: ['Strict JSON Schema argument validation', 'Rate-limiting and sandbox container isolation', 'Simulated dry-run validation before live writes'],
      },
      {
        title: 'Self-Reflection & Error Recovery',
        description: 'When an API throws a 404 or unexpected payload, the Critic agent inspects the stack trace and automatically refines the query parameters.',
        icon: 'RotateCcw',
        details: ['Automated retry with exponential backoff', 'Alternative tool pathway discovery', 'Semantic error summarization'],
      },
    ],
    architectureSteps: [
      { step: '01', title: 'Goal Deconstruction', description: 'Orchestrator breaks complex user goals into atomic tasks with explicit dependencies.' },
      { step: '02', title: 'Agent Delegation', description: 'Tasks dispatched to specialized agents with scoped permissions and tools.' },
      { step: '03', title: 'Tool Execution', description: 'Safe execution through sandbox API proxies with parameter validation.' },
      { step: '04', title: 'Review & Commit', description: 'Critic validation, human approval check, and deterministic transaction commit.' },
    ],
    techStack: ['LangGraph', 'Python 3.12', 'Temporal.io', 'Celery / Redis', 'PostgreSQL', 'Model Context Protocol (MCP)', 'OpenTelemetry'],
    benchmarks: [
      { metric: 'Task Success Rate', traditional: '58%', spotxpert: '94.2%', improvement: '+36.2% Reliability' },
      { metric: 'Execution Cost', traditional: '$1.40 / run', spotxpert: '$0.32 / run', improvement: '77% Cheaper' },
      { metric: 'Loop Runaway Protection', traditional: 'None', spotxpert: '100% Guarded', improvement: 'Zero Infinite Loops' },
      { metric: 'Average Recovery Time', traditional: 'Manual Fix', spotxpert: '<3 seconds', improvement: 'Self-Healing' },
    ],
    useCases: [
      { industry: 'SaaS Operations', title: 'Automated Customer Onboarding', description: 'Agent provisions tenant databases, configures SSO, generates API keys, and sends welcoming documentation.', impact: 'Onboarding time slashed from 3 days to 4 minutes.' },
      { industry: 'Supply Chain', title: 'Exception Resolution & Re-Routing', description: 'Detects delayed shipment, books secondary carrier, updates WMS schedule, and notifies receiving docks.', impact: 'Saved $420,000 in monthly detention penalties.' },
      { industry: 'Finance', title: 'Vendor Invoice 3-Way Matching', description: 'Pulls invoice from email, matches PO in NetSuite, confirms receipt in warehouse, and schedules payment.', impact: '8,000 monthly invoices processed with 99.8% zero-touch rate.' },
    ],
    faqs: [
      { question: 'How do you prevent agents from running into infinite loops?', answer: 'We implement hard recursion limits, deterministic graph checkpoints in Temporal, and token usage budgets that automatically suspend runaway loops.' },
      { question: 'What happens if an external API fails during a multi-step task?', answer: 'Our engine uses compensating transactions (Saga pattern) to roll back previously completed steps or alert the human on-call engineer with the exact failure state.' },
      { question: 'Can our existing developers build new tools for the agents?', answer: 'Yes. Any REST API with an OpenAPI specification or simple Python function decorated with our `@tool` wrapper can be registered into the agent registry in minutes.' },
      { question: 'Is agent reasoning explainable for compliance audits?', answer: 'Every thought, tool invocation, payload, and response is logged with OpenTelemetry spans and indexed into an immutable audit table.' },
    ],
    heroImage: {
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80',
      alt: 'Microprocessor board glowing with circuits and complex technological pathways',
    },
  },
  'llmops-governance': {
    slug: 'llmops-governance',
    name: 'LLMOps & Model Governance',
    tagline: 'Enterprise AI Observability, Latency Guardrails & PII Compliance',
    badge: 'Governance Suite',
    category: 'LLM & Agent Toolkits',
    hero: {
      headline: 'Full-Stack Observability, Cost Guardrails & PII Redaction for Enterprise GenAI',
      subheadline:
        'Operate generative AI models at enterprise scale with real-time prompt telemetry, semantic caching, automated red-teaming, PII masking, and multi-model failover routing.',
      metrics: [
        { label: 'Token Cost Reduction', value: '45–65%', desc: 'Through semantic caching & prompt pruning' },
        { label: 'PII Leakage Prevention', value: '100%', desc: 'Zero unredacted SSN/HIPAA data to external models' },
        { label: 'Uptime SLA', value: '99.99%', desc: 'Multi-provider fallback routing (OpenAI/Anthropic/Gemini)' },
        { label: 'Model Evaluation Speed', value: '10x Faster', desc: 'Automated continuous regression test suites' },
      ],
    },
    overview: {
      problem:
        'Enterprise teams deploying LLMs face unpredictable monthly billing spikes, compliance violations from accidental PII transmission, vendor rate limits, and silent model drift that degrades response quality without warning.',
      solution:
        'SpotXpert LLMOps & Model Governance platform installs an intelligent gateway proxying all model traffic with high-throughput semantic caching, regex & NER PII anonymization, automated cost caps, and model health evaluation.',
      architectureSummary:
        'Centralized AI Gateway: Client App → Ingress Gateway (PII Filter & Auth) → Semantic Cache (Redis) → Smart Router (Failover & Load Balancing) → Model Provider → Guardrail Validator → Client.',
    },
    features: [
      {
        title: 'Zero-Egress PII & DLP Masking',
        description: 'Bi-directional Named Entity Recognition (NER) anonymizes credit cards, health identifiers, and passwords before tokens leave your cloud perimeter.',
        icon: 'ShieldCheck',
        details: ['Presidio NER and custom regex dictionaries', 'Reversible tokenized mapping for response reconstruction', 'HIPAA, GDPR & PCI-DSS compliance certified'],
      },
      {
        title: 'Semantic Vector Caching',
        description: 'Caches semantically equivalent questions using embedding cosine similarity, answering repeat enterprise questions instantly without model token costs.',
        icon: 'Zap',
        details: ['Sub-15ms response latency from Redis', 'Configurable similarity threshold (e.g. 0.94)', 'Reduces monthly token consumption by up to 60%'],
      },
      {
        title: 'Multi-Model Fallback Router',
        description: 'Dynamically routes requests based on cost, latency, or provider status (e.g., fallback from Claude 3.5 to GPT-4o or Gemini 1.5 if rate-limited).',
        icon: 'Layers',
        details: ['Zero-downtime provider failover in 50ms', 'Cost-optimized routing: simple queries to lightweight models', 'Load balancing across multiple API keys'],
      },
      {
        title: 'Continuous Evaluation & LLM-as-a-Judge',
        description: 'Automated test benches that benchmark production outputs against reference datasets for hallucination, bias, tone, and toxicity.',
        icon: 'BarChart3',
        details: ['Ragas & TruLens benchmark scoreboards', 'Continuous model drift alerts via PagerDuty/Slack', 'A/B prompt testing harness in production'],
      },
    ],
    architectureSteps: [
      { step: '01', title: 'Inspection & Anonymization', description: 'Gateway intercepts prompts, validates auth tokens, and redacts sensitive PII.' },
      { step: '02', title: 'Semantic Cache Lookup', description: 'Check vector cache for previously computed high-confidence answers.' },
      { step: '03', title: 'Smart Provider Routing', description: 'Forward to optimal LLM provider with dynamic retries and rate limit protection.' },
      { step: '04', title: 'Guardrail & Output Audit', description: 'Inspect output for hallucination/toxicity, log metrics, and return sanitized payload.' },
    ],
    techStack: ['Portkey / LiteLLM Proxy', 'Redis Enterprise', 'Microsoft Presidio', 'OpenTelemetry', 'Prometheus & Grafana', 'PostgreSQL', 'Langfuse / Arize'],
    benchmarks: [
      { metric: 'Average Response Time', traditional: '2,200ms', spotxpert: '420ms', improvement: '5x Faster' },
      { metric: 'Monthly API Spend', traditional: '$42,000', spotxpert: '$16,500', improvement: '61% Savings' },
      { metric: 'Data Compliance Audits', traditional: 'Manual Review', spotxpert: '100% Automated', improvement: 'Zero Violations' },
      { metric: 'Provider Outage Impact', traditional: 'Downtime', spotxpert: 'Instant Fallback', improvement: '99.99% Uptime' },
    ],
    useCases: [
      { industry: 'Financial Services', title: 'Safe Internal Wealth Advisory AI', description: 'Financial advisors query investment policies without leaking client account numbers or balances.', impact: '100% SEC/FINRA compliance maintained across 1,200 advisors.' },
      { industry: 'Global Retail', title: 'Multilingual Customer Support Proxy', description: 'Routes simple FAQ questions to 15ms cache, saving $85,000 monthly in OpenAI API charges.', impact: 'Customer response time dropped to under 1 second.' },
      { industry: 'Healthcare Systems', title: 'Medical Records Translation & Summary', description: 'Redacts HIPAA protected identifiers before generating clinician discharge summaries.', impact: 'Zero PHI leaks across 2.4 million processed records.' },
    ],
    faqs: [
      { question: 'Does using a gateway add significant latency?', answer: 'No. The proxy inspection overhead is typically under 4ms, while semantic cache hits reduce latency from 2+ seconds down to under 20ms.' },
      { question: 'Can we define custom PII terms unique to our company?', answer: 'Yes. You can configure custom regex patterns, proprietary product codenames, and employee ID formats in our governance console.' },
      { question: 'How does multi-model fallback work if an API goes down?', answer: 'If provider A returns a 5xx error or exceeds a 3-second timeout, the gateway immediately re-dispatches the prompt to provider B with zero user-visible disruption.' },
      { question: 'Can this run in a multi-region deployment?', answer: 'Yes. We deploy geo-distributed gateways on AWS ECS or Kubernetes with synchronized Redis cluster state across US, Europe, and Asia.' },
    ],
    heroImage: {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
      alt: 'Data analytics charts, graphs, and metric dashboards on modern display',
    },
  },
  'vision-core': {
    slug: 'vision-core',
    name: 'SpotXpert Vision Core',
    tagline: 'Real-Time Edge Computer Vision & Industrial Defect Detection',
    badge: 'Perception Core',
    category: 'Vision & Perception',
    hero: {
      headline: 'Sub-Millimeter Optical Quality & High-Speed Vision Intelligence',
      subheadline:
        'Deploy high-frame-rate computer vision models capable of real-time surface defect detection, barcode/OCR deciphering, assembly verification, and safety hazard detection directly on factory edge hardware.',
      metrics: [
        { label: 'Defect Catch Rate', value: '99.8%', desc: 'Micron-level visual anomaly detection' },
        { label: 'Inference Speed', value: '<18ms', desc: 'Real-time processing at 60+ FPS' },
        { label: 'Edge Footprint', value: 'TensorRT', desc: 'Optimized for NVIDIA Jetson & industrial PCs' },
        { label: 'False Rejection', value: '<0.2%', desc: 'Prevents wasteful scrap of good parts' },
      ],
    },
    overview: {
      problem:
        'Human visual inspectors on high-speed manufacturing lines suffer fatigue, missing micro-cracks and misaligned labels. Cloud-based computer vision APIs introduce unacceptable latency and fail when internet connections flutter.',
      solution:
        'SpotXpert Vision Core packages customized neural networks (YOLOv10, Segment Anything Model, and Vision Transformers) into quantized edge binaries that execute directly adjacent to production cameras with sub-20ms latency.',
      architectureSummary:
        'Edge-to-Cloud Vision Loop: GigE/USB3 Industrial Cameras → Frame Grabber → TensorRT Inference Engine → PLC Trigger (Reject Arm) → Cloud Model Retraining Store.',
    },
    features: [
      {
        title: 'Micro-Defect Anomaly Detection',
        description: 'Trained on unsupervised reconstruction models to spot novel scratches, porosity, and discoloration without requiring thousands of labeled bad samples.',
        icon: 'Sparkles',
        details: ['PatchCore & Autoencoder anomaly backbones', 'Tolerant of ambient lighting variations', 'Multi-camera synchronized inspection'],
      },
      {
        title: 'Ultra-Low Latency TensorRT Optimization',
        description: 'Quantized INT8/FP16 models compiled for NVIDIA Jetson Orin and industrial GPUs, running up to 120 FPS on continuous conveyor lines.',
        icon: 'Zap',
        details: ['Zero memory copy frame buffers', 'Hardware-accelerated CUDA video decoding', 'Direct GPIO trigger integration with sorting gates'],
      },
      {
        title: 'Complex & Distorted OCR Reading',
        description: 'Deciphers laser-etched barcodes, dot-peen serial numbers, and crumpled labels on curved or reflective metallic surfaces.',
        icon: 'Database',
        details: ['DPM (Direct Part Marking) specialized algorithms', 'Handles glare and oil residue', 'Instant ERP inventory sync'],
      },
      {
        title: 'Automated Active Learning Pipeline',
        description: 'Edge devices stream low-confidence edge cases to cloud storage for automated labeling and weekly model retraining.',
        icon: 'RotateCcw',
        details: ['Continuous accuracy improvement loop', 'Over-the-air (OTA) model deployments', 'Versioned weight rollbacks'],
      },
    ],
    architectureSteps: [
      { step: '01', title: 'High-Speed Capture', description: 'Industrial cameras trigger synchronized strobe flashes and capture raw frames.' },
      { step: '02', title: 'Edge Neural Inference', description: 'TensorRT models segment parts, detect anomalies, and read serial numbers in 18ms.' },
      { step: '03', title: 'PLC Signal Dispatch', description: 'Immediate hardware signal to pneumatic ejector pins to reject defective parts.' },
      { step: '04', title: 'Traceability Archival', description: 'Annotated images indexed into quality database for warranty and compliance audits.' },
    ],
    techStack: ['PyTorch', 'TensorRT', 'OpenCV', 'YOLOv10 / SAM', 'NVIDIA DeepStream', 'Triton Inference Server', 'Docker Edge'],
    benchmarks: [
      { metric: 'Inspection Speed', traditional: '1.8 sec / part', spotxpert: '0.018 sec / part', improvement: '100x Faster' },
      { metric: 'Inspection Accuracy', traditional: '91.4%', spotxpert: '99.8%', improvement: '+8.4% Accuracy' },
      { metric: 'Equipment Footprint', traditional: '$150k machine', spotxpert: '$12k edge node', improvement: '90% CapEx Savings' },
      { metric: 'Setup & Tuning Time', traditional: '3 months', spotxpert: '2 weeks', improvement: '6x Faster Deploy' },
    ],
    useCases: [
      { industry: 'Automotive Stamping', title: 'Body Panel Surface Defect Detection', description: 'Detects dents, burrs, and oil spots on pressed automotive steel before paint shop entry.', impact: 'Reduced paint rework costs by $1.2M annually.' },
      { industry: 'Pharmaceuticals', title: 'Blister Pack Pill Verification', description: 'Inspects high-speed blister packaging for broken pills, color fidelity, and foil seal integrity.', impact: 'Achieved 100% FDA zero-defect regulatory standard.' },
      { industry: 'Logistics Warehousing', title: 'High-Speed Parcel Dimensioning & Barcode', description: 'Reads crumpled shipping labels on parcel conveyor moving at 3 meters per second.', impact: 'Eliminated manual barcode scan bottlenecks completely.' },
    ],
    faqs: [
      { question: 'What industrial cameras are supported?', answer: 'We support all standard Basler, FLIR, Cognex, IDS, and Hikrobot cameras communicating over GigE Vision, USB3 Vision, and RTSP protocols.' },
      { question: 'What happens if a part is slightly rotated on the conveyor?', answer: 'Our models incorporate spatial transformer networks that automatically normalize part rotation and orientation before running inspection algorithms.' },
      { question: 'Does Vision Core require an internet connection to inspect parts?', answer: 'No. The edge hardware runs 100% autonomously on your local plant network, continuing full inspection even during total internet blackouts.' },
      { question: 'How many samples are required to train a new part inspection model?', answer: 'Thanks to our few-shot anomaly detection architecture, we typically require only 50 to 100 normal samples to begin production trials.' },
    ],
    heroImage: {
      url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80',
      alt: 'Robotic precision arm and high-speed automated production line',
    },
  },
  'synthetic-data-generator': {
    slug: 'synthetic-data-generator',
    name: 'Synthetic Data Generator',
    tagline: 'Privacy-Preserving Data Generation for Cold-Start Model Bootstrapping',
    badge: 'Data Accelerator',
    category: 'Vision & Perception',
    hero: {
      headline: 'Bootstrap High-Accuracy AI Models Without Privacy Risks or Data Scarcity',
      subheadline:
        'Generate millions of statistically accurate, privacy-compliant tabular and unstructured synthetic data points to overcome extreme class imbalances, train vision models in photorealistic 3D, and satisfy strict privacy regulations.',
      metrics: [
        { label: 'Data Scarcity Reduction', value: '10x Faster', desc: 'Overcomes cold-start model training hurdles' },
        { label: 'Privacy Guarantee', value: 'ε-Differential', desc: 'Mathematical guarantee against re-identification' },
        { label: 'Class Balance Parity', value: '1:1 Ratio', desc: 'Simulate rare 0.01% fraud or defect anomalies' },
        { label: 'Cost vs Manual Labeling', value: '80% Savings', desc: 'Drastically cuts manual data tagging costs' },
      ],
    },
    overview: {
      problem:
        'Machine learning initiatives frequently stall because sensitive customer data cannot be shared with engineers due to HIPAA/GDPR, or because rare critical events (such as financial fraud or catastrophic machine failures) occur too infrequently in real logs.',
      solution:
        'SpotXpert Synthetic Data Generator utilizes Conditional GANs, Diffusion Models, and 3D simulation engines to produce statistically indistinguishable synthetic datasets that preserve complex multi-variate correlations without exposing a single real individual identity.',
      architectureSummary:
        'Generative Synthesis Engine: Real Data Profiling → Correlation Matrix Modeling → Differential Privacy Noise Injection → Diffusion/GAN Generation → Statistical Quality & Privacy Validation.',
    },
    features: [
      {
        title: 'Mathematically Proven Differential Privacy',
        description: 'Applies rigorous epsilon-differential privacy bounds, guaranteeing that no specific individual record can be reverse-engineered from the synthetic output.',
        icon: 'ShieldCheck',
        details: ['Rigorous ε and δ differential privacy parameter tuning', 'Membership inference attack resistance testing', '100% compliant with GDPR, HIPAA, and CCPA'],
      },
      {
        title: 'Rare Event & Anomaly Amplification',
        description: 'Artificially boosts rare edge cases (e.g. 1-in-10,000 credit card frauds or turbine cracks) to create perfectly balanced training sets.',
        icon: 'Sparkles',
        details: ['Conditional tabular generation (CTGAN)', 'Configurable class ratio oversampling', 'Maintains realistic feature co-dependencies'],
      },
      {
        title: 'Photorealistic 3D Vision Generation',
        description: 'Simulates industrial camera scenes with randomized lighting, textures, camera angles, and simulated physical scratches using Three.js and Blender.',
        icon: 'Layers',
        details: ['Domain randomization for robust computer vision', 'Automated pixel-perfect ground truth segmentation masks', 'Zero human annotator labeling required'],
      },
      {
        title: 'Statistical Fidelity Validation Suite',
        description: 'Comprehensive automated reports comparing synthetic data distributions, correlations, and predictive utility against genuine test sets.',
        icon: 'BarChart3',
        details: ['Wasserstein distance and Jensen-Shannon divergence metrics', 'Train-on-synthetic, test-on-real (TSTR) benchmarks', 'Automated PDF compliance audit documentation'],
      },
    ],
    architectureSteps: [
      { step: '01', title: 'Data Profiling', description: 'Analyze statistical distributions, categorical hierarchies, and mutual information.' },
      { step: '02', title: 'Generative Modeling', description: 'Train diffusion networks and GANs to learn high-dimensional latent manifolds.' },
      { step: '03', title: 'Differential Privacy', description: 'Inject calibrated mathematical noise to break identity memorization.' },
      { step: '04', title: 'Fidelity Validation', description: 'Execute statistical divergence tests and benchmark predictive utility on holdout sets.' },
    ],
    techStack: ['Synthetic Data Vault (SDV)', 'CTGAN', 'PyTorch Diffusion', 'Blender Python API', 'SciPy & NumPy', 'PostgreSQL', 'Airflow Pipelines'],
    benchmarks: [
      { metric: 'Model Cold-Start Time', traditional: '9 months', spotxpert: '3 weeks', improvement: '12x Faster' },
      { metric: 'Fraud Detection Recall', traditional: '71.2%', spotxpert: '92.6%', improvement: '+21.4% Better' },
      { metric: 'Annotation Cost', traditional: '$3.50 / sample', spotxpert: '$0.02 / sample', improvement: '99% Cheaper' },
      { metric: 'Data Privacy Compliance', traditional: 'Legal Risk', spotxpert: '100% Guaranteed', improvement: 'Zero Risk' },
    ],
    useCases: [
      { industry: 'Fintech & Lending', title: 'Credit Default Risk Modeling', description: 'Generated 2 million synthetic borrower profiles to train fair underwriting algorithms without bias.', impact: 'Approved 22% more qualified minority applicants safely.' },
      { industry: 'Autonomous Systems', title: 'Rare Adverse Weather Driving Simulation', description: 'Rendered 500,000 synthetic camera views of black ice and blinding blizzards for perception software.', impact: 'Cut real-world test fleet mileage requirements by 40%.' },
      { industry: 'Medical Devices', title: 'Rare Cardiac Arrhythmia ECG Synthesis', description: 'Synthesized 80,000 ECG waveform patterns for pediatric heart conditions too rare for clinical capture.', impact: 'Achieved FDA breakthrough device designation.' },
    ],
    faqs: [
      { question: 'Will models trained on synthetic data perform as well as models trained on real data?', answer: 'Yes. In our benchmark Train-on-Synthetic Test-on-Real (TSTR) evaluations, models trained on our high-fidelity synthetic data regularly achieve within 1.5% of real data accuracy, and often outperform real data on rare edge cases.' },
      { question: 'Can synthetic data be shared with offshore engineering teams?', answer: 'Yes! Because synthetic data contains no genuine personal records or PII, it can be freely distributed to international contractors and partners without violating cross-border data transfer laws.' },
      { question: 'What formats can you export synthetic datasets into?', answer: 'We export into SQL database dumps, CSV, Parquet, JSON, COCO format for vision annotations, and TFRecord streams.' },
      { question: 'Can the generator handle relational databases with multiple joined tables?', answer: 'Yes. Our relational engine preserves foreign key constraints and parent-child cardinality across multi-table enterprise schemas.' },
    ],
    heroImage: {
      url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1600&q=80',
      alt: 'Abstract mathematical geometries and luminous statistical data structures',
    },
  },
};

export function getAcceleratorBySlug(slug: string): AcceleratorItem | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  if (ACCELERATORS_DATA[normalized]) return ACCELERATORS_DATA[normalized];
  if (normalized === 'rag-suite') return ACCELERATORS_DATA['enterprise-rag-suite'];
  if (normalized === 'agentic-engine') return ACCELERATORS_DATA['agentic-workflow-engine'];
  if (normalized === 'llmops') return ACCELERATORS_DATA['llmops-governance'];
  if (normalized === 'vision') return ACCELERATORS_DATA['vision-core'];
  if (normalized === 'synthetic-data') return ACCELERATORS_DATA['synthetic-data-generator'];
  return undefined;
}

export function getAllAccelerators(): AcceleratorItem[] {
  return Object.values(ACCELERATORS_DATA);
}
