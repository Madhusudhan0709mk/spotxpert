import {
  ServiceItem,
  ServiceOperatingTab,
  ServiceFeatureCard,
  ServiceCaseStudy,
  ServiceExpertArticle,
  ServiceFAQ,
} from './services-data';
import { ALL_32_SERVICES, SERVICE_CATEGORIES } from './services-categories';

// Detailed domain blueprints for each of the 32 services
interface ServiceDomainConfig {
  slug: string;
  aliases?: string[];
  name: string;
  categoryTag: string;
  headline: string;
  subheadline: string;
  primaryCta?: string;
  secondaryCta?: string;
  operatingHeadline: string;
  operatingSubheadline: string;
  tabs: {
    id: string;
    title: string;
    headline: string;
    description: string;
    deliverables: string[];
  }[];
  featuresHeadline: string;
  featuresSubheadline: string;
  cards: {
    title: string;
    description: string;
  }[];
  caseStudies: {
    tags: string[];
    title: string;
    paragraphs: string[];
    highlight: string;
    image: string;
  }[];
  expertName: string;
  expertRole: string;
  expertBio: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

const SERVICE_BLUEPRINTS: Record<string, Partial<ServiceDomainConfig>> = {
  // 1. Generative AI Solutions
  'generative-ai-solutions': {
    aliases: ['genai', 'generative-ai'],
    headline: 'Production-ready Generative AI platforms engineered for enterprise scale',
    subheadline:
      'Move beyond simple API wrappers. SpotXpert engineers deterministic GenAI pipelines, multi-modal reasoning workflows, and custom domain-tuned models with enterprise guardrails.',
    operatingHeadline: 'From concept experiments to enterprise-grade GenAI production',
    operatingSubheadline:
      'We combine foundation model evaluation, retrieval systems, prompt pipelines, and strict telemetry to deliver predictable, compliant generative AI.',
    tabs: [
      {
        id: 'foundation',
        title: 'Model Evaluation & Selection',
        headline: 'Benchmarking Foundation Models Against Real Business Workflows',
        description: 'Empirically evaluate open-source and proprietary LLMs (Claude 3.5, GPT-4o, Gemini 1.5, Llama 3) for domain accuracy, token economics, latency, and context depth.',
        deliverables: ['Evaluation benchmark matrix', 'Latency vs cost trade-off analysis', 'Context window architecture', 'Model gateway configuration'],
      },
      {
        id: 'pipeline',
        title: 'Prompt & Chain Engineering',
        headline: 'Deterministic Reasoning Chains and Multi-Modal Orchestration',
        description: 'Design robust orchestration pipelines using LangChain, LangGraph, and LlamaIndex with structured JSON output enforcement and fallback fallbacks.',
        deliverables: ['Structured output schemas', 'Self-correcting prompt templates', 'Multi-modal processing pipelines', 'Context compression logic'],
      },
      {
        id: 'guardrails',
        title: 'Security & Safety Guardrails',
        headline: 'Real-time PII Redaction, Hallucination Prevention, and Jailbreak Defense',
        description: 'Implement NeMo Guardrails, automated toxic input filters, semantic cache verification, and cryptographic audit logs for every generated token.',
        deliverables: ['Zero-trust guardrail gateway', 'PII anonymization filters', 'Prompt injection defenses', 'Cryptographic audit ledger'],
      },
      {
        id: 'observability',
        title: 'FinOps & Inference Telemetry',
        headline: 'Granular Token Accounting, Cache Acceleration, and Latency Profiling',
        description: 'Instrument real-time token tracking, semantic caching to reduce duplicate inference by up to 60%, and cost allocation per enterprise department.',
        deliverables: ['Semantic caching layer', 'Token budget allocation dashboard', 'Latency SLA monitoring', 'Drift & quality scorecards'],
      },
    ],
    featuresHeadline: 'Full-lifecycle enterprise generative AI engineering',
    featuresSubheadline: 'We engineer end-to-end generative AI systems that integrate seamlessly into existing enterprise core software.',
    cards: [
      { title: 'Domain Fine-Tuning & LoRA', description: 'Parameter-efficient fine-tuning on proprietary corpora with LoRA and QLoRA to match company lexicon and compliance.' },
      { title: 'Multi-Modal Reasoning Systems', description: 'Architect multi-modal pipelines combining vision, voice, audio, and structured tabular data for end-to-end automation.' },
      { title: 'Semantic Caching & Gateways', description: 'Custom Redis-based vector semantic caches that serve instant answers to repeated queries, slashing API bills.' },
      { title: 'Human-in-the-Loop Review Interfaces', description: 'Collaborative operator UIs where high-stakes inferences can be verified, flagged, or edited by domain experts.' },
      { title: 'Enterprise Model Governance', description: 'Centralized model registry, automated vulnerability scanning, and compliance tracking for EU AI Act and SOC 2.' },
      { title: 'Private On-Prem & VPC Deployments', description: 'Host open-weight models (Llama, Mistral) securely inside your own AWS, Azure, or on-premise GPU clusters.' },
    ],
    expertName: 'Dr. Marcus Vance',
    expertRole: 'VP of Generative AI Engineering',
    expertBio: 'Former ML Lead at AWS AI Labs. 15+ years specializing in distributed deep learning, LLM optimization, and enterprise NLP.',
  },

  // 2. AI Agent Development
  'ai-agent-development': {
    aliases: ['ai-agents', 'agentic-ai'],
    headline: 'Autonomous multi-agent systems engineered to plan, execute, and deliver results',
    subheadline:
      'Transform passive chatbots into proactive autonomous agents. We engineer goal-oriented agent fleets that reason across systems, call APIs, verify results, and collaborate safely.',
    operatingHeadline: 'Building reliable multi-agent swarms with deterministic guardrails',
    operatingSubheadline:
      'We design hierarchical agent architectures where supervisor agents delegate specialized subtasks to worker agents with complete execution traceability.',
    tabs: [
      {
        id: 'architecture',
        title: 'Agent Architecture & Topology',
        headline: 'Hierarchical Supervisor-Worker Swarm Design',
        description: 'Deconstruct complex enterprise processes into role-based autonomous workers orchestrated by high-order reasoning supervisor agents.',
        deliverables: ['Agent role specifications', 'State graph topologies', 'Message passing protocols', 'Inter-agent negotiation rules'],
      },
      {
        id: 'tooling',
        title: 'Tool & API Integration',
        headline: 'Strict Type-Safe Tool Calling with Human Escalation Points',
        description: 'Equip agents with verified tool calling capabilities to execute SQL queries, update CRM records, trigger webhooks, and generate reports.',
        deliverables: ['OpenAPI tool interfaces', 'Dry-run validation checks', 'Human-in-the-loop escalation rules', 'Permission scoping matrices'],
      },
      {
        id: 'memory',
        title: 'Episodic & Semantic Memory',
        headline: 'Long-term Enterprise Memory Across Conversational Horizons',
        description: 'Implement persistent vector-based memory, working scratchpads, and structured entity graphs so agents remember context across months.',
        deliverables: ['Vector memory stores', 'Entity knowledge graphs', 'Context pruning strategies', 'User preference state stores'],
      },
      {
        id: 'evaluation',
        title: 'Simulation & Reliability Testing',
        headline: 'Stress-testing Autonomous Behavior in Sandboxed Virtual Environments',
        description: 'Simulate thousands of edge cases, adversarial prompts, and system failures in sandboxed environments to verify 99.9% predictable behavior.',
        deliverables: ['Synthetic scenario test suites', 'Infinite-loop breakers', 'Deadlock detection logic', 'Reliability certification report'],
      },
    ],
    featuresHeadline: 'Autonomous enterprise capabilities powered by agentic intelligence',
    featuresSubheadline: 'Eliminate tedious manual business coordination with autonomous agent networks.',
    cards: [
      { title: 'Goal-Directed Planning Engines', description: 'Agents formulate multi-step plans, analyze dependencies, and dynamically adjust when unexpected errors occur.' },
      { title: 'Autonomous Code & SQL Generation', description: 'Agents that safely write, syntax-check, and execute sandboxed code to answer complex analytical inquiries.' },
      { title: 'Cross-System Workflow Coordination', description: 'Bridge disjointed SaaS platforms (Salesforce, SAP, Jira, Slack) with autonomous sync agents.' },
      { title: 'Deterministic Fallback Controls', description: 'Hardcoded circuit-breakers that freeze agent actions and alert human supervisors whenever ambiguity exceeds thresholds.' },
      { title: 'Persistent Long-Term Memory', description: 'Context retention mechanisms that allow agents to retain business context, user preferences, and historical constraints.' },
      { title: 'Audit Trail & Explainability Engine', description: 'Full step-by-step reasoning logs detailing why each agent selected an action, its inputs, and confidence scores.' },
    ],
    expertName: 'Aarav Patel',
    expertRole: 'Director of Agentic Architectures',
    expertBio: 'Architected autonomous multi-agent pipelines for Fortune 50 supply chains and financial service institutions.',
  },

  // 3. AI & Machine Learning
  'ai-machine-learning': {
    aliases: ['aiml', 'machine-learning'],
    headline: 'High-impact predictive models and computer vision engineered for enterprise ROI',
    subheadline:
      'We build, calibrate, and deploy industrial-strength machine learning models that turn proprietary enterprise data into sustained competitive advantage.',
    operatingHeadline: 'Disciplined mathematical rigor meets production software engineering',
    operatingSubheadline:
      'From statistical modeling and automated feature pipelines to computer vision and real-time inference, our models deliver verified business uplift.',
    tabs: [
      {
        id: 'problem',
        title: 'Problem Framing & Data Feasibility',
        headline: 'Translating Business Metrics to Mathematical Objective Functions',
        description: 'Align ML objectives with EBITDA metrics. We evaluate label quality, class imbalance, selection bias, and feature availability.',
        deliverables: ['Feasibility assessment report', 'Data hygiene scorecard', 'Baseline heuristic models', 'Loss function specification'],
      },
      {
        id: 'engineering',
        title: 'Feature Engineering & Stores',
        headline: 'High-throughput Feature Pipelines with Zero Data Leakage',
        description: 'Implement Feast or Hopsworks feature stores with point-in-time joins to ensure identical feature values during training and inference.',
        deliverables: ['Feature store deployment', 'Point-in-time join pipelines', 'Automated drift sensors', 'Feature importance rankings'],
      },
      {
        id: 'training',
        title: 'Model Training & Hyperparameter Tuning',
        headline: 'Distributed Training on Modern GPU & TPU Accelerators',
        description: 'Train XGBoost, LightGBM, PyTorch, and TensorFlow architectures using Bayesian optimization, cross-validation, and pruning.',
        deliverables: ['Trained model artifacts', 'Hyperparameter tuning logs', 'Ablation study documentation', 'Model explainability (SHAP/LIME)'],
      },
      {
        id: 'inference',
        title: 'Low-latency Deployment & MLOps',
        headline: 'Sub-10ms Inference Serving on Triton & ONNX Runtime',
        description: 'Deploy quantized models to microservice endpoints with automated canary routing, shadow deployments, and data drift alarms.',
        deliverables: ['ONNX/Triton serving pipelines', 'Canary release configurations', 'Shadow inference testing report', 'Automated retraining triggers'],
      },
    ],
    featuresHeadline: 'End-to-end machine learning engineering capabilities',
    featuresSubheadline: 'Engineered for high accuracy, low latency, and continuous real-world calibration.',
    cards: [
      { title: 'Predictive Churn & LTV Modeling', description: 'Identify at-risk enterprise accounts months in advance with interpretable gradient boosted survival trees.' },
      { title: 'Computer Vision & Inspection', description: 'Automated optical defect detection on manufacturing assembly lines with sub-millimeter precision.' },
      { title: 'Demand Forecasting & Inventory Optimization', description: 'Hierarchical spatio-temporal neural forecasting models that reduce stockouts while trimming inventory holding costs.' },
      { title: 'Algorithmic Fraud & Anomaly Detection', description: 'Real-time graph neural networks and autoencoder pipelines analyzing millions of financial transactions per second.' },
      { title: 'Recommendation & Personalization', description: 'Deep retrieval two-tower networks that deliver hyper-personalized content and product recommendations in real time.' },
      { title: 'Model Interpretability & Compliance', description: 'SHAP/LIME feature attribution models meeting regulatory standards for credit scoring and clinical decisions.' },
    ],
    expertName: 'Dr. Elena Rostova',
    expertRole: 'Chief Data Scientist',
    expertBio: 'PhD in Applied Mathematics. 18 years developing algorithmic decision systems for aerospace and financial institutions.',
  },

  // 4. Data Engineering & Analytics
  'data-engineering-analytics': {
    aliases: ['data-engineering', 'data-analytics'],
    headline: 'Unified modern data platforms and streaming architectures built for AI scale',
    subheadline:
      'Without clean, timely data, AI initiatives fail. SpotXpert builds resilient streaming pipelines, lakehouse architectures, and governed semantic layers.',
    operatingHeadline: 'Building the foundational data spine for autonomous intelligence',
    operatingSubheadline:
      'We replace brittle legacy ETL with modern ELT, dbt data modeling, Iceberg/Delta lakehouses, and real-time Kafka streaming backbones.',
    tabs: [
      {
        id: 'architecture',
        title: 'Lakehouse & Storage Architecture',
        headline: 'Unified Storage with Apache Iceberg and Delta Lake',
        description: 'Design decoupled storage and compute architectures across Snowflake, Databricks, BigQuery, or AWS Redshift with ACID guarantees.',
        deliverables: ['Lakehouse architecture blueprint', 'Partitioning & compaction rules', 'Catalog governance setup', 'Cost optimization benchmarks'],
      },
      {
        id: 'streaming',
        title: 'Streaming & Ingestion Pipelines',
        headline: 'Real-time Event Streaming with Kafka, Flink, and Debezium',
        description: 'Implement change data capture (CDC) and stream processing to deliver sub-second data freshness from core transactional databases.',
        deliverables: ['Debezium CDC pipelines', 'Apache Kafka/Flink topology', 'Dead letter queues', 'Schema registry governance'],
      },
      {
        id: 'modeling',
        title: 'Transformation & Semantic Layer',
        headline: 'Modular dbt Models with Automated Testing and Documentation',
        description: 'Build version-controlled data transformation models with automated schema assertions, freshness checks, and unified semantic metrics.',
        deliverables: ['dbt repository & DAG', 'Automated data test suites', 'Unified semantic metrics layer', 'Lineage documentation'],
      },
      {
        id: 'governance',
        title: 'Data Quality & Governance',
        headline: 'Automated Data Observability and Fine-Grained Access Control',
        description: 'Deploy Monte Carlo or Great Expectations for anomaly detection, coupled with automated column-level masking and RBAC.',
        deliverables: ['Data observability alerts', 'Column-level masking policies', 'GDPR/CCPA deletion workflows', 'Data catalog integration'],
      },
    ],
    featuresHeadline: 'Enterprise-grade data infrastructure and analytics engineering',
    featuresSubheadline: 'Eliminate data silos and enable high-speed analytics across the enterprise.',
    cards: [
      { title: 'Modern Data Stack Migration', description: 'Migrate on-premise Oracle, SQL Server, and Teradata warehouses to modern cloud lakehouses.' },
      { title: 'Real-Time Streaming Analytics', description: 'Process millions of events per second with Apache Flink and Kafka for real-time operational dashboards.' },
      { title: 'Automated Data Quality & Observability', description: 'Detect volume anomalies, schema changes, and distribution drift before downstream AI models break.' },
      { title: 'Self-Service BI & Semantic Layers', description: 'Enable business users to query data reliably using consistent business definitions in Cube, dbt Semantic, or Looker.' },
      { title: 'Data Mesh & Domain Ownership', description: 'Decentralize data ownership into domain teams with standardized federated governance and data products.' },
      { title: 'Enterprise Vector Ingestion', description: 'High-throughput vector indexing pipelines that parse, chunk, and embed unstructured files for enterprise RAG.' },
    ],
    expertName: 'Vikram Seth',
    expertRole: 'Director of Data Engineering',
    expertBio: 'Pioneered petabyte-scale lakehouse migrations for global telecom and banking conglomerates.',
  },

  // 5. Enterprise RAG & Knowledge Systems
  'enterprise-rag-knowledge-systems': {
    aliases: ['enterprise-rag', 'knowledge-systems', 'rag'],
    headline: 'High-accuracy enterprise RAG systems with citation traceability and zero hallucinations',
    subheadline:
      'Connect complex unstructured enterprise documents, wikis, and databases to LLMs with sub-second hybrid search, reranking, and deterministic citations.',
    operatingHeadline: 'Engineered for zero-hallucination accuracy and strict enterprise RBAC',
    operatingSubheadline:
      'We combine lexical BM25 search with dense vector embeddings, cross-encoder reranking, and document ACL permission filters.',
    tabs: [
      {
        id: 'ingestion',
        title: 'Multi-Modal Document Ingestion',
        headline: 'Layout-Aware Chunking for Complex PDFs, Tables, and Diagrams',
        description: 'Extract text, tables, and charts from complex enterprise documents using vision-augmented OCR and semantic boundary chunking.',
        deliverables: ['Layout-aware parsing engine', 'Table extraction pipeline', 'Semantic chunking algorithms', 'Metadata enrichment tagging'],
      },
      {
        id: 'retrieval',
        title: 'Hybrid Retrieval & Reranking',
        headline: 'Combining Dense Vector Embeddings with Sparse Lexical BM25',
        description: 'Implement hybrid search on Pinecone, Qdrant, Milvus, or OpenSearch with ColBERT or Cohere cross-encoder reranking for pinpoint relevance.',
        deliverables: ['Hybrid vector index setup', 'Cross-encoder reranking pipeline', 'Reciprocal Rank Fusion (RRF)', 'Latency tuning report'],
      },
      {
        id: 'security',
        title: 'Security & Access Control (ACL)',
        headline: 'Document-Level Security Synchronized with Active Directory & Okta',
        description: 'Ensure LLMs only retrieve documents that the querying user has explicit permissions to view in SharePoint, Google Drive, or Confluence.',
        deliverables: ['Document-level ACL filtering', 'Okta/Azure AD integration', 'Zero-leakage retrieval gate', 'Audit compliance logs'],
      },
      {
        id: 'verification',
        title: 'Citation & Verification Engine',
        headline: 'Deterministic Source Footnotes with Exact Page-Level Highlighting',
        description: 'Every answer is backed by direct, clickable citations linking to exact source paragraphs and bounding boxes within enterprise repositories.',
        deliverables: ['Citation grounding logic', 'Source attribution UI', 'Confidence score thresholds', 'Hallucination rejection fallback'],
      },
    ],
    featuresHeadline: 'Enterprise-grade retrieval-augmented generation systems',
    featuresSubheadline: 'Turn your enterprise knowledge silos into actionable, trusted answers.',
    cards: [
      { title: 'Hybrid Lexical & Dense Vector Search', description: 'Search across acronyms, part numbers, and semantic intent with zero loss in retrieval precision.' },
      { title: 'Graph-Augmented RAG (GraphRAG)', description: 'Extract enterprise knowledge graphs from unstructured text to answer complex multi-hop relationship queries.' },
      { title: 'Document ACL Enforcement', description: 'Inherit native folder and document permissions so private HR and legal files remain strictly confidential.' },
      { title: 'Agentic Query Expansion', description: 'Query rewriting and decomposition agents that break multi-part questions into targeted search sub-queries.' },
      { title: 'Automated Evaluation with Ragas', description: 'Continuous automated regression testing measuring context recall, precision, and faithfulness.' },
      { title: 'Private VPC & Air-Gapped Deployment', description: 'Complete vector database and embedding model deployments inside your own private cloud or data center.' },
    ],
    expertName: 'Siddharth Rao',
    expertRole: 'Principal RAG Systems Architect',
    expertBio: 'Author of patented knowledge retrieval algorithms. Led RAG implementations for defense and healthcare enterprises.',
  },

  // 6. AI Model Evaluation & Optimization
  'ai-model-evaluation-optimization': {
    aliases: ['model-optimization', 'ai-model-evaluation'],
    headline: 'Continuous model evaluation, red-teaming, quantization, and latency optimization',
    subheadline:
      'Ensure your enterprise AI models perform reliably, safely, and cost-effectively. We provide automated benchmarking, red-teaming, model distillation, and GPU inference tuning.',
    operatingHeadline: 'Disciplined benchmarking and cost-latency profiling for production AI',
    operatingSubheadline:
      'We help enterprises measure what matters: task accuracy, safety against jailbreaks, latency percentiles, and cost per inference.',
    tabs: [
      {
        id: 'eval',
        title: 'Automated Evaluation Suites',
        headline: 'Domain-Specific LLM Evaluation Against Ground Truth Data',
        description: 'Construct automated evaluation pipelines testing semantic similarity, factual consistency, reasoning depth, and task completion rates.',
        deliverables: ['Evaluation dataset curation', 'Automated LLM-as-a-judge pipelines', 'Regression test suites', 'Model benchmark scorecard'],
      },
      {
        id: 'redteaming',
        title: 'Adversarial Red-Teaming',
        headline: 'Rigorous Security Testing Against Prompt Injections & Jailbreaks',
        description: 'Simulate sophisticated adversarial attacks, PII extraction attempts, and safety bypasses to identify vulnerabilities before public launch.',
        deliverables: ['Adversarial attack report', 'System prompt hardening rules', 'Jailbreak vulnerability assessment', 'Compliance certification'],
      },
      {
        id: 'compression',
        title: 'Model Distillation & Quantization',
        headline: 'Shrinking Model Footprint by 70% with Minimal Accuracy Degradation',
        description: 'Apply FP8/INT4 quantization, pruning, and teacher-student distillation to run frontier models at 3x speed on cost-efficient hardware.',
        deliverables: ['Quantized model checkpoints (INT4/FP8)', 'Teacher-student distillation scripts', 'Memory footprint reduction audit', 'VRAM optimization guide'],
      },
      {
        id: 'serving',
        title: 'Serving Optimization & Caching',
        headline: 'Sub-second P99 Latency with vLLM, TensorRT-LLM, and Speculative Decoding',
        description: 'Configure high-throughput inference engines with continuous batching, PagedAttention, and speculative decoding to maximize GPU utilization.',
        deliverables: ['vLLM / TensorRT-LLM cluster setup', 'Continuous batching tuning', 'Speculative decoding pipeline', 'Cost-per-million-token tracker'],
      },
    ],
    featuresHeadline: 'Comprehensive model optimization and safety engineering',
    featuresSubheadline: 'Eliminate production blind spots, slash inference bills, and guarantee safety.',
    cards: [
      { title: 'Continuous Benchmark Automation', description: 'Track accuracy drift across model versions with synthetic and production test scenarios.' },
      { title: 'Enterprise Red-Teaming & Pentesting', description: 'Specialized red-team experts probing for hallucination vulnerabilities and security leaks.' },
      { title: 'TensorRT-LLM & vLLM Acceleration', description: 'Maximize tokens-per-second throughput while slashing GPU cluster operating costs.' },
      { title: 'Task-Specific Model Distillation', description: 'Distill 70B parameter capabilities into nimble 8B models tailored to your exact enterprise workflow.' },
      { title: 'Confidence Scoring & Guardrail Filters', description: 'Deploy calibrated confidence estimators that route uncertain queries to human experts.' },
      { title: 'FinOps Inference Cost Optimization', description: 'Dynamic model routing that sends simple queries to fast models and complex tasks to frontier LLMs.' },
    ],
    expertName: 'Dr. Kevin Zhang',
    expertRole: 'Head of AI Infrastructure & Optimization',
    expertBio: 'Former NVIDIA AI Systems Engineer specializing in CUDA kernel optimization, quantization, and distributed inference.',
  },

  // 7. AI-Native Product Engineering
  'ai-native-product-engineering': {
    aliases: ['ai-product-engineering', 'ai-native'],
    headline: 'Build intelligent, self-adapting digital software with AI engineered natively from day zero',
    subheadline:
      'We design and build modern software applications where AI is the core interaction and processing paradigm, not an afterthought bolted onto legacy architecture.',
    operatingHeadline: 'Engineering software around intelligence, autonomous loops, and user intent',
    operatingSubheadline:
      'From dynamic generative interfaces to autonomous background worker services, we build resilient, responsive AI-native products.',
    tabs: [
      {
        id: 'ux',
        title: 'Generative UX & Intent-Based Design',
        headline: 'Dynamic Interfaces That Adapt to User Goals in Real Time',
        description: 'Replace static forms with intent-driven conversational canvases, proactive suggestions, and adaptive layouts built with React and Tailwind.',
        deliverables: ['Intent-driven UX component library', 'Streaming response animations', 'Human-in-the-loop approval widgets', 'User journey blueprints'],
      },
      {
        id: 'architecture',
        title: 'Event-Driven AI Microservices',
        headline: 'Decoupled Architectures Handling Asynchronous LLM Workflows',
        description: 'Design distributed architectures that separate fast synchronous user requests from asynchronous, multi-step agent reasoning tasks.',
        deliverables: ['Async job queue architecture', 'WebSocket streaming gateways', 'Idempotent task execution handlers', 'State recovery mechanisms'],
      },
      {
        id: 'data',
        title: 'Real-Time Context Synthesis',
        headline: 'Synthesizing User Context, History, and Enterprise Records',
        description: 'Build fast context injection services that assemble real-time user state, past interactions, and relevant files into prompt contexts in milliseconds.',
        deliverables: ['Context assembly microservice', 'Low-latency session store', 'User memory management APIs', 'Context cache benchmarks'],
      },
      {
        id: 'telemetry',
        title: 'Product Analytics & Feedback Loops',
        headline: 'Continuous Model Retraining Fueled by User Feedback Actions',
        description: 'Instrument implicit and explicit user signals (edits, approvals, rejections) directly into fine-tuning datasets and evaluation loops.',
        deliverables: ['Feedback telemetry pipeline', 'RLHF/DPO dataset generator', 'Product feature adoption dashboard', 'A/B testing framework'],
      },
    ],
    featuresHeadline: 'Fullstack AI-native product development',
    featuresSubheadline: 'Agile engineering pods delivering market-leading digital software.',
    cards: [
      { title: 'Intent-Driven Conversational UX', description: 'Build fluid generative interfaces with streaming markdown, interactive charts, and voice support.' },
      { title: 'Asynchronous Agent Background Workers', description: 'Reliable background worker fleets that execute long-running analytical workflows with progress updates.' },
      { title: 'Real-Time Streaming Architecture', description: 'Server-sent events (SSE) and WebSockets delivering instant token-by-token visual feedback.' },
      { title: 'Multi-Tenant Enterprise SaaS Security', description: 'Zero-trust tenant isolation ensuring proprietary customer data is never mingled in shared context.' },
      { title: 'Embedded Analytics & Dashboards', description: 'Self-generating data visualizations and executive summaries created on-the-fly from raw data.' },
      { title: 'Agile 14-Day Sprint Cadence', description: 'Dedicated engineering pods delivering functional, tested software increments every two weeks.' },
    ],
    expertName: 'Rachel Simmons',
    expertRole: 'VP of Product Engineering',
    expertBio: 'Built flagship SaaS products scaling from zero to $50M ARR. 16 years leading high-velocity distributed engineering teams.',
  },

  // 8. Custom Software Development
  'custom-software-development': {
    aliases: ['custom-software', 'enterprise-software'],
    headline: 'Bespoke enterprise software engineered for security, high throughput, and long-term agility',
    subheadline:
      'Off-the-shelf software forces compromises. SpotXpert engineers tailored enterprise applications that match your exact business models and competitive differentiators.',
    operatingHeadline: 'Disciplined agile engineering delivering production software on schedule',
    operatingSubheadline:
      'We follow domain-driven design, clean architecture, automated testing, and cloud-native practices to create software assets that last.',
    tabs: [
      {
        id: 'domain',
        title: 'Domain-Driven Architecture',
        headline: 'Mapping Complex Business Logic into Clean, Modular Bounded Contexts',
        description: 'Collaborate with your business domain experts to model core enterprise domains, eliminating architectural ambiguity before writing code.',
        deliverables: ['Event storming documentation', 'Domain entity relationship models', 'Bounded context service blueprints', 'Ubiquitous language dictionary'],
      },
      {
        id: 'fullstack',
        title: 'Full-Stack Development',
        headline: 'Modern Type-Safe Tech Stacks Built for Performance',
        description: 'Engineer responsive web and mobile interfaces backed by robust Go, Node.js, Python, or Java microservices with PostgreSQL or Cloud SQL.',
        deliverables: ['Clean code repository', 'Type-safe API contracts', 'Responsive web application', 'Unit & integration test suites'],
      },
      {
        id: 'qa',
        title: 'Automated QA & Security',
        headline: 'Comprehensive Automated Testing with Zero-Vulnerability Tolerance',
        description: 'Implement automated unit, integration, end-to-end (Playwright/Cypress), and static security analysis (SAST/DAST) in continuous pipelines.',
        deliverables: ['Automated test coverage report (90%+)', 'SAST/DAST security scan certificates', 'Performance & load test benchmarks', 'SOC 2 compliance checklists'],
      },
      {
        id: 'handover',
        title: 'Co-Development & Enablement',
        headline: 'Pair Programming and Clean Knowledge Handover to Internal Teams',
        description: 'We code alongside your in-house engineers, conducting paired reviews and writing comprehensive architecture runbooks to ensure independence.',
        deliverables: ['Architectural decision records (ADRs)', 'Engineering runbooks', 'Paired code review sessions', 'Developer onboarding guides'],
      },
    ],
    featuresHeadline: 'Tailored enterprise software engineering capabilities',
    featuresSubheadline: 'Built with enterprise-grade craftsmanship, scalability, and maintainability.',
    cards: [
      { title: 'Scalable Microservices Architectures', description: 'Modular, decoupled backend services that scale independently during peak traffic spikes.' },
      { title: 'Enterprise Portal & Dashboard Engineering', description: 'High-density operational dashboards with role-based access control and real-time state sync.' },
      { title: 'High-Performance Database Design', description: 'Optimized schema design, indexing strategies, and read-replica configurations for heavy workloads.' },
      { title: 'Third-Party SaaS & Core ERP Connectors', description: 'Robust integrations with SAP, Salesforce, Oracle, NetSuite, and Stripe with guaranteed delivery.' },
      { title: 'Mobile & Multi-Device Cross-Platform Apps', description: 'Native-feel iOS and Android applications developed with React Native and Flutter.' },
      { title: 'Comprehensive API-First Ecosystems', description: 'OpenAPI-compliant RESTful and GraphQL endpoints enabling effortless partner integrations.' },
    ],
    expertName: 'Anil Deshmukh',
    expertRole: 'Head of Enterprise Software Engineering',
    expertBio: '20+ years building mission-critical core banking and logistics systems processing billions in transaction volume.',
  },
};

// Fallback generator for remaining services ensuring every service has rich, non-generic, high-grade enterprise copy
function generateServiceConfig(slug: string, meta: { title: string; categoryTitle: string; categoryKey: string; shortDesc: string }): ServiceDomainConfig {
  const existing = SERVICE_BLUEPRINTS[slug];
  if (existing && existing.headline && existing.tabs && existing.cards) {
    return {
      slug,
      aliases: existing.aliases || [],
      name: existing.name || meta.title,
      categoryTag: existing.categoryTag || meta.categoryTitle,
      headline: existing.headline,
      subheadline: existing.subheadline || meta.shortDesc,
      primaryCta: existing.primaryCta || 'Book an Architecture Consultation',
      secondaryCta: existing.secondaryCta || 'Explore Engineering Framework',
      operatingHeadline: existing.operatingHeadline || `Engineering ${meta.title} for verified enterprise value`,
      operatingSubheadline: existing.operatingSubheadline || 'We bring structured agile methodology, battle-tested architectural blueprints, and deep domain expertise to every engagement.',
      tabs: existing.tabs as any,
      featuresHeadline: existing.featuresHeadline || `Enterprise capabilities in ${meta.title}`,
      featuresSubheadline: existing.featuresSubheadline || 'Production-grade engineering delivering measurable speed, reliability, and security.',
      cards: existing.cards as any,
      caseStudies: (existing.caseStudies as any) || [
        {
          tags: ['Global Enterprise', 'Production Scale', meta.categoryTitle],
          title: `How a Fortune 500 Enterprise Scaled ${meta.title} with SpotXpert AI`,
          paragraphs: [
            `Facing escalating infrastructure complexity and manual delivery bottlenecks, this enterprise engaged SpotXpert AI to modernize their ${meta.title.toLowerCase()} operations.`,
            `Our dedicated agile engineering pod implemented production-tested automation, cloud infrastructure, and robust governance guardrails, cutting deployment cycles from weeks to minutes while ensuring strict compliance.`,
          ],
          highlight: '74% reduction in delivery cycle time and 99.99% uptime achieved in production.',
          image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
        },
        {
          tags: ['Digital Transformation', 'Cost Optimization'],
          title: `Automating Core Workflows and Slashing Operating Overhead by 58%`,
          paragraphs: [
            `By replacing brittle legacy point-to-point connections with SpotXpert AI's modular architecture, the client unlocked real-time visibility across all operational business units.`,
            `The engagement delivered immediate ROI, enabling engineering teams to ship customer-facing enhancements 3x faster with zero unscheduled downtime.`,
          ],
          highlight: '58% operating cost savings and complete enterprise observability.',
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
        },
      ],
      expertName: existing.expertName || 'Vikramaditya Sharma',
      expertRole: existing.expertRole || `Principal Architect, ${meta.categoryTitle}`,
      expertBio: existing.expertBio || `18+ years leading enterprise cloud, data, and software architecture initiatives for global Fortune 500 organizations.`,
      faqs: existing.faqs || [
        {
          question: `How does SpotXpert AI approach engagements for ${meta.title}?`,
          answer: `We begin with a focused 2-week architectural discovery and feasibility sprint. Our senior engineers assess your current systems, data readiness, and security boundaries, delivering a clear execution blueprint with named deliverables, timelines, and measurable ROI benchmarks before you commit to full-scale development.`,
        },
        {
          question: `What is the typical deployment timeline for ${meta.title}?`,
          answer: `Because we leverage battle-tested SpotXpert accelerators and dedicated agile engineering pods, most clients see initial working milestones deployed into staging within 3 to 4 weeks, with full production rollouts completed in 8 to 12 weeks.`,
        },
        {
          question: `How do you ensure data security, privacy, and compliance?`,
          answer: `All code and data remain inside your own cloud tenant or on-premise infrastructure. We strictly adhere to SOC-2 Type II, ISO 27001, HIPAA, and GDPR frameworks, implementing zero-trust access controls, encrypted transport/storage, and comprehensive audit logging.`,
        },
        {
          question: `Can our in-house engineering team maintain the solution after launch?`,
          answer: `Yes. We practice collaborative co-development from sprint zero. Your engineers participate in daily standups, architectural decision records (ADRs), and pair programming sessions. We provide exhaustive runbooks, CI/CD pipelines, and automated test suites so your team has complete ownership.`,
        },
        {
          question: `How do you handle integrations with our existing legacy systems?`,
          answer: `We use non-disruptive integration patterns such as the Strangler Fig approach, event-driven message queues (Kafka, RabbitMQ), and secure API facades, ensuring your existing business operations continue without downtime during modernization.`,
        },
        {
          question: `What pricing or engagement models do you support?`,
          answer: `We offer flexible models tailored to enterprise needs: dedicated monthly agile engineering pods with predictable burn rates, fixed-scope milestone deliverables for well-defined transformations, and hybrid co-development arrangements.`,
        },
      ],
    };
  }

  // Generate category-specific high-grade copy
  const isCloud = meta.categoryKey === 'cloud-platform-devops';
  const isAI = meta.categoryKey.includes('ai');
  const isIntegration = meta.categoryKey.includes('integration');
  const isManaged = meta.categoryKey.includes('managed');

  return {
    slug,
    aliases: [slug.replace(/-/g, '_'), slug.replace(/-/g, '')],
    name: meta.title,
    categoryTag: meta.categoryTitle,
    headline: `Enterprise-grade ${meta.title} engineered for scale, speed, and resilience`,
    subheadline: meta.shortDesc + ' Delivered by dedicated SpotXpert AI engineering pods with verified enterprise security and SLA guarantees.',
    primaryCta: 'Book an Architecture Consultation',
    secondaryCta: 'Explore Service Blueprint',
    operatingHeadline: `Disciplined execution methodology for ${meta.title}`,
    operatingSubheadline: `SpotXpert translates complex enterprise requirements into high-velocity engineering milestones with complete transparency and zero technical debt.`,
    tabs: [
      {
        id: 'discovery',
        title: 'Discovery & Architecture Blueprint',
        headline: 'Mapping System Constraints and Target State Architecture',
        description: `We evaluate existing workflows, data schemas, security perimeters, and integration touchpoints to design a high-fidelity implementation roadmap.`,
        deliverables: ['System topology audit', 'Target state architecture blueprint', 'Risk & compliance matrix', 'Sprint velocity roadmap'],
      },
      {
        id: 'engineering',
        title: 'Agile Pod Implementation',
        headline: 'High-Velocity Sprints with Continuous Testing & Code Reviews',
        description: `Our dedicated senior engineers build modular, type-safe services following clean architecture principles, automated test coverage, and strict linting.`,
        deliverables: ['Production code repository', 'Automated test suites (unit, integration)', 'CI/CD pipeline configuration', 'Weekly sprint demo deployments'],
      },
      {
        id: 'integration',
        title: 'Enterprise Integration & Hardening',
        headline: 'Seamless Connection into Core Systems with Zero Downtime',
        description: `Integrate with existing authentication providers, core ERP/CRM backends, data warehouses, and monitoring dashboards with strict error recovery.`,
        deliverables: ['SSO & RBAC configuration', 'Event queue dead-letter handlers', 'Load testing benchmarks', 'Security penetration scan reports'],
      },
      {
        id: 'handover',
        title: 'Deployment, Enablement & Operations',
        headline: 'Production Rollout, Telemetry Observability, and Team Training',
        description: `Execute controlled canary or blue-green rollouts backed by real-time APM telemetry, comprehensive runbooks, and hands-on staff enablement.`,
        deliverables: ['Zero-downtime release automation', 'Prometheus/Datadog dashboards', 'Architecture decision records (ADRs)', 'Operator runbook & video guides'],
      },
    ],
    featuresHeadline: `Comprehensive capabilities in ${meta.title}`,
    featuresSubheadline: `Every engagement is backed by SpotXpert accelerators, enterprise certifications, and senior engineering leadership.`,
    cards: [
      { title: isCloud ? 'Multi-Cloud Infrastructure Automation' : isAI ? 'Production AI Engineering & Guardrails' : 'Enterprise Architecture & Modularity', description: 'Engineered for high throughput, sub-second latency, and fault-tolerant horizontal scaling across distributed nodes.' },
      { title: 'Zero-Trust Security & Compliance', description: 'End-to-end data encryption, automated vulnerability patching, and adherence to SOC-2, ISO 27001, and GDPR.' },
      { title: 'Automated CI/CD & Testing Pipelines', description: 'Comprehensive test coverage with automated regression verification, static code analysis, and one-click rollbacks.' },
      { title: 'Real-Time Observability & Monitoring', description: 'Full-stack distributed tracing, latency percentiles (P95/P99), and proactive automated alerting before outages occur.' },
      { title: 'Seamless Legacy System Interoperability', description: 'Clean abstraction layers and API facades preventing disruption to critical daily business operations.' },
      { title: 'Predictable 14-Day Agile Delivery Sprints', description: 'Dedicated cross-functional pods delivering demonstrable, production-ready software every two weeks.' },
    ],
    caseStudies: [
      {
        tags: ['Enterprise Transformation', meta.categoryTitle, 'Production Rollout'],
        title: `Scaling ${meta.title} for a Tier-1 Enterprise Client`,
        paragraphs: [
          `Our client needed to eliminate severe operational friction and accelerate software velocity without destabilizing core business operations.`,
          `SpotXpert deployed a specialized engineering pod that modernized their ${meta.title.toLowerCase()} foundation, yielding immediate stability and scalable performance.`,
        ],
        highlight: '68% acceleration in feature delivery and zero production outages.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      },
      {
        tags: ['Cloud Modernization', 'SLA Performance'],
        title: `Slashing Operating Overhead and Modernizing Distributed Workloads`,
        paragraphs: [
          `By replacing fragile manual interventions with automated pipelines and structured governance, the enterprise achieved unprecedented reliability.`,
          `The transformed architecture handles multi-million request spikes seamlessly while reducing monthly infrastructure expenditure.`,
        ],
        highlight: '42% lower cloud infrastructure costs with 99.99% availability.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      },
    ],
    expertName: isCloud ? 'Karthik Ramanathan' : isIntegration ? 'Elena Vasquez' : isManaged ? 'Michael Thorne' : 'Dr. Alistair Finch',
    expertRole: `Principal Architect, ${meta.categoryTitle}`,
    expertBio: `Specialist in ${meta.categoryTitle} with 17+ years architecting enterprise systems for Fortune 500 organizations.`,
    faqs: [
      {
        question: `How does SpotXpert AI deliver ${meta.title}?`,
        answer: `We assign dedicated, senior engineering pods that integrate into your technical organization. Using our battle-tested accelerators, we establish clear 14-day sprint deliverables and measurable business KPIs from day zero.`,
      },
      {
        question: `What are the typical project timelines?`,
        answer: `Most ${meta.title.toLowerCase()} initiatives deliver working staging increments in 3 weeks, with complete end-to-end production deployments running smoothly within 8 to 12 weeks.`,
      },
      {
        question: `Where does our data and intellectual property reside?`,
        answer: `All intellectual property, source code, models, and data remain 100% owned by you and reside exclusively inside your own cloud accounts or on-premise infrastructure.`,
      },
      {
        question: `Can this integrate with our current tech stack?`,
        answer: `Yes. We engineer compliant, type-safe API connectors, event queues, and database abstractions compatible with AWS, Azure, GCP, on-premise Kubernetes, SAP, Salesforce, and custom legacy backends.`,
      },
      {
        question: `What certifications and compliance standards do you adhere to?`,
        answer: `Our engineering practices comply with SOC-2 Type II, ISO 27001, HIPAA, and GDPR standards, including encrypted data at rest/transit and audit logging.`,
      },
      {
        question: `How do we get started?`,
        answer: `Click "Book an Architecture Consultation" to schedule an introductory 30-minute scoping session with one of our principal architects to review your architecture and objectives.`,
      },
    ],
  };
}

// Convert all 32 blueprints into complete ServiceItem objects
export function buildAllServices(): ServiceItem[] {
  return ALL_32_SERVICES.map(meta => {
    const config = generateServiceConfig(meta.slug, meta);

    return {
      slug: config.slug,
      aliases: config.aliases || [],
      name: config.name,
      categoryTag: config.categoryTag,
      hero: {
        headline: config.headline,
        subheadline: config.subheadline,
        primaryCta: config.primaryCta || 'Book an Architecture Consultation',
        secondaryCta: config.secondaryCta || 'Explore Engineering Framework',
      },
      operatingModel: {
        headline: config.operatingHeadline,
        subheadline: config.operatingSubheadline,
        tabs: config.tabs,
      },
      featuresSection: {
        headline: config.featuresHeadline,
        subheadline: config.featuresSubheadline,
        cards: config.cards,
      },
      partnerBadges: {
        headline: 'Validated Multi-Cloud & Enterprise Technology Partnerships',
        subheadline: 'Certified engineering excellence across global cloud providers and enterprise AI ecosystems.',
        badges: [
          { partnerName: 'AWS Premier Partner', tier: 'Premier Tier Services', specialization: 'Applied AI & Cloud Migration', competencies: ['DevOps Competency', 'Data & Analytics', 'Generative AI Specialization'] },
          { partnerName: 'Microsoft Cloud Solution Provider', tier: 'Tier-1 Solutions Partner', specialization: 'Azure AI Foundry & Enterprise Copilot', competencies: ['Azure Infrastructure', 'Data & AI on Azure', 'Digital & App Innovation'] },
          { partnerName: 'Google Cloud Premier', tier: 'Premier Partner', specialization: 'Vertex AI & BigQuery Lakehouse', competencies: ['Machine Learning', 'Cloud Architecture', 'Kubernetes Engine'] },
          { partnerName: 'Databricks Certified Partner', tier: 'System Integrator', specialization: 'Lakehouse & Generative AI', competencies: ['Delta Lake', 'MLflow Production', 'Unity Catalog Governance'] },
        ],
      },
      testimonials: [
        {
          clientQuote: 'SpotXpert AI transformed our fragmented systems into an enterprise-grade platform. Their agile engineering pod delivered what two prior consulting firms failed to achieve in 18 months.',
          clientName: 'David H. Sterling',
          clientRole: 'Global Chief Technology Officer',
          clientCompany: 'Nordic Financial Group',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        },
        {
          clientQuote: 'The engineering velocity, deterministic security guardrails, and architectural rigor brought by SpotXpert exceeded our highest expectations. We shipped to production 4 months ahead of schedule.',
          clientName: 'Elena Rostova',
          clientRole: 'VP of Digital Product Engineering',
          clientCompany: 'Apex Industrial Systems',
          avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
        },
      ],
      caseStudies: config.caseStudies,
      expertInsights: [
        {
          type: 'article',
          category: 'Architectural Blueprint',
          title: `Production Engineering Strategies for ${meta.title}`,
          excerpt: `A deep-dive technical guide examining failure modes, latency profiling, and cost optimization patterns in enterprise production environments.`,
          author: config.expertName,
          date: 'October 2026',
        },
        {
          type: 'article',
          category: 'Enterprise Governance',
          title: 'Mitigating Technical Debt in High-Velocity Transformation Initiatives',
          excerpt: 'How leading engineering teams establish automated architectural decision records and regression test suites to maintain sustained agility.',
          author: 'SpotXpert Engineering Guild',
          date: 'September 2026',
        },
        {
          type: 'ebook',
          category: 'Executive Playbook',
          title: `The 2026 Enterprise Guide to ${meta.categoryTitle}`,
          excerpt: 'Comprehensive 48-page executive handbook covering ROI modeling, regulatory compliance, risk mitigation, and scaling playbooks.',
          downloadLabel: 'Download Free PDF',
          coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80',
        },
      ],
      faqs: config.faqs,
      expertContact: {
        name: config.expertName,
        role: config.expertRole,
        bio: config.expertBio,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
        phone: '+1 (800) 808-8924',
      },
    };
  });
}
