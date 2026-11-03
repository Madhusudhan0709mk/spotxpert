import { ServiceItem } from './types';

export const CATEGORY_A_SERVICES: ServiceItem[] = [
  {
    title: 'Generative AI Solutions',
    slug: 'generative-ai-solutions',
    category: 'AI & Data Engineering',
    categoryId: 'ai-data',
    iconName: 'Sparkles',
    shortDescription: 'Custom LLM architectures, private fine-tuning, and enterprise generative AI workflows.',
    heroEyebrow: 'Generative AI & LLM Systems',
    heroHeadline: 'Architect high-accuracy, private generative AI workflows for enterprise scale',
    heroDescription:
      'Transform complex unstructured enterprise knowledge into intelligent, conversational systems with private foundation model deployment, domain-adapted fine-tuning, and deterministic guardrails engineered for sub-second execution.',
    primaryCTA: 'Book a Consultation',
    secondaryCTA: 'Explore Our Services',
    businessChallenges: [
      {
        title: 'Sensitive Intellectual Property & Data Exposure Risk',
        description: 'Commercial cloud APIs risk data leakage and regulatory violations across regulated financial, health, and legal operations.'
      },
      {
        title: 'Hallucination & Inconsistent Factual Accuracy',
        description: 'Off-the-shelf generative models generate persuasive falsehoods without rigorous grounding in verified enterprise facts.'
      },
      {
        title: 'Runaway Token Consumption & High Inference Latency',
        description: 'Unoptimized LLM calls introduce unpredictable monthly cloud bills and high p99 response latencies that degrade user experience.'
      },
      {
        title: 'Disjointed Enterprise Workflow Integration',
        description: 'Standalone chatbots fail to integrate with transactional core systems (ERP, CRM, databases), leaving manual handoffs intact.'
      }
    ],
    capabilities: [
      {
        title: 'Private Foundation Model Deployment',
        description: 'Deploy open-weight models (Llama 3, Mistral, DeepSeek) inside your private VPC with zero data logging or vendor training retention.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Domain Model Fine-Tuning (PEFT / LoRA)',
        description: 'Adapt base foundation weights to industry-specific vocabulary, underwriting guidelines, and regulatory schemas with parameter-efficient fine-tuning.',
        iconName: 'Cpu'
      },
      {
        title: 'Deterministic Guardrail Gateways',
        description: 'Intercept prompt injection, jailbreaks, and PII leaks in real time with high-speed proxy validation layers before model inference.',
        iconName: 'Lock'
      },
      {
        title: 'High-Throughput vLLM Inference Optimization',
        description: 'Implement continuous batching, PagedAttention, and FP8 quantization to achieve up to 4x higher throughput on dedicated GPU clusters.',
        iconName: 'Zap'
      },
      {
        title: 'Enterprise Context Engineering',
        description: 'Structure prompt templates, dynamic memory management, and semantic caching layers that cut token overhead by up to 60%.',
        iconName: 'Layers'
      },
      {
        title: 'Multi-Modal Document & Vision Processing',
        description: 'Synthesize complex PDFs, technical blueprints, and tabular spreadsheets into unified structured JSON for downstream systems.',
        iconName: 'FileText'
      }
    ],
    useCases: [
      {
        title: 'Automated Financial Underwriting & Synthesis',
        description: 'Ingest multi-hundred page annual reports, tax returns, and audited statements to synthesize standardized credit memo briefs.',
        outcome: 'Reduced analysis turnaround from 3 days to under 15 minutes with complete auditability.'
      },
      {
        title: 'Enterprise Knowledge Assistant for Support',
        description: 'Connect internal engineering documentation and historical Jira tickets to provide tier-1 and tier-2 staff with exact resolution paths.',
        outcome: 'Decreased average handle time by 48% and improved first-contact resolution.'
      },
      {
        title: 'Regulatory Compliance & Contract Comparison',
        description: 'Extract covenants, termination clauses, and indemnity stipulations across tens of thousands of vendor supplier contracts.',
        outcome: 'Flagged non-standard liabilities with 99.4% precision against legal playbooks.'
      }
    ],
    deliveryApproach: [
      {
        step: 1,
        title: 'Discovery & Feasibility Audit',
        description: 'Assess proprietary enterprise datasets, governance restrictions, target latency SLAs, and high-impact operational use cases.'
      },
      {
        step: 2,
        title: 'Architecture Blueprint & Guardrail Design',
        description: 'Design the private VPC topology, model selection matrix, embedding strategy, and real-time security boundaries.'
      },
      {
        step: 3,
        title: 'Pipeline Engineering & Fine-Tuning',
        description: 'Cleanse training corpora, fine-tune domain model weights, build vector ingestion pipelines, and configure vLLM serving.'
      },
      {
        step: 4,
        title: 'Red-Teaming & Benchmark Validation',
        description: 'Execute synthetic stress tests, jailbreak attempts, latency profiling, and blind comparative evaluation against baseline standards.'
      },
      {
        step: 5,
        title: 'Production Cutover & Observability',
        description: 'Deploy canary routing, configure token FinOps dashboards, and activate continuous drift monitoring.'
      }
    ],
    relevantIndustries: ['Financial Services', 'Healthcare & Life Sciences', 'Insurance', 'Legal & Professional Services', 'Retail & E-commerce'],
    technologyAreas: ['Llama 3', 'Mistral', 'vLLM', 'LangChain', 'NeMo Guardrails', 'Hugging Face', 'PyTorch', 'NVIDIA TensorRT-LLM'],
    benefits: [
      { title: 'Zero Data Leakage', metric: '100% Sovereign', description: 'Air-gapped VPC deployment ensures zero corporate data is shared externally.' },
      { title: 'Latency Optimization', metric: 'sub-250ms', description: 'Optimized quantization enables near-instantaneous streaming token generation.' },
      { title: 'Token FinOps Control', metric: 'Up to 60% Savings', description: 'Semantic caching and model routing prevent wasteful cloud API spending.' },
      { title: 'Audit Compliance', metric: 'SOC 2 Ready', description: 'Complete audit logging of all prompt-response pairs with lineage tracking.' }
    ],
    relatedServices: [
      { title: 'AI Agent Development', slug: 'ai-agent-development', category: 'AI & Data Engineering' },
      { title: 'Enterprise RAG & Knowledge Systems', slug: 'enterprise-rag-knowledge-systems', category: 'AI & Data Engineering' },
      { title: 'AI Model Evaluation & Optimization', slug: 'ai-model-evaluation-optimization', category: 'AI & Data Engineering' },
      { title: 'Enterprise AI Strategy & Roadmapping', slug: 'enterprise-ai-strategy-roadmapping', category: 'AI Strategy & Advisory' }
    ],
    faqs: [
      {
        question: 'How do you ensure our corporate data is never used to train public commercial models?',
        answer: 'We deploy open-weight foundation models directly inside your sovereign cloud virtual private cloud (AWS, Azure, GCP) or on-premise Kubernetes cluster. No inference data or prompts are transmitted to public commercial APIs.'
      },
      {
        question: 'When should we fine-tune a model versus using prompt engineering or RAG?',
        answer: 'RAG is optimal for dynamic, evolving facts and citations. Fine-tuning is required when you need the model to consistently adhere to rigid formatting, specialized domain nomenclature, or unique internal reasoning paths.'
      },
      {
        question: 'What infrastructure is required to host private enterprise models?',
        answer: 'Depending on model size (8B to 70B parameters) and concurrency, we architect clusters utilizing NVIDIA A10G, L40S, or H100 GPUs orchestrated with Kubernetes and optimized with vLLM continuous batching.'
      },
      {
        question: 'How do you prevent hallucinations in mission-critical workflows?',
        answer: 'We employ multi-layer defenses: strict temperature calibration, retrieval-augmented grounding, deterministic output schema validation with Pydantic/Zod, and automated secondary verification models.'
      }
    ],
    seoTitle: 'Generative AI Solutions & Custom LLMs | SpotXpert AI',
    seoDescription: 'Architect enterprise-grade generative AI, private fine-tuned LLMs, and deterministic guardrails with SpotXpert AI engineering squads.'
  },
  {
    title: 'AI Agent Development',
    slug: 'ai-agent-development',
    category: 'AI & Data Engineering',
    categoryId: 'ai-data',
    iconName: 'Bot',
    shortDescription: 'Autonomous multi-agent systems, tool execution, and goal-directed task orchestration.',
    heroEyebrow: 'Autonomous Agent Engineering',
    heroHeadline: 'Deploy resilient autonomous agents that plan, execute tools, and solve complex workflows',
    heroDescription:
      'Move beyond passive conversational chatbots to goal-directed autonomous agents. We engineer multi-agent systems equipped with deterministic tool interfaces, persistent state memory, dynamic error recovery, and robust human-in-the-loop oversight.',
    primaryCTA: 'Book a Consultation',
    secondaryCTA: 'Explore Our Services',
    businessChallenges: [
      {
        title: 'Unreliable Multi-Step Execution in Complex Workflows',
        description: 'Basic LLM chains fail when encountering multi-step dependencies, external API errors, or unexpected edge cases.'
      },
      {
        title: 'Lack of Deterministic Tool Validation & Safety Bounds',
        description: 'Autonomous agents can trigger destructive database writes or unauthorized external actions without strict guardrail validation.'
      },
      {
        title: 'Context Loss Across Long-Running Business Processes',
        description: 'Agents without structured state machines and persistent memory scratchpads lose context and fail to reach terminal business goals.'
      },
      {
        title: 'Absence of Controlled Human-in-the-Loop Escalation',
        description: 'Unsupervised agents operate as a black box without clear thresholds for escalating ambiguous decisions to human supervisors.'
      }
    ],
    capabilities: [
      {
        title: 'State Machine & Multi-Agent Graph Orchestration',
        description: 'Design directed acyclic graph (DAG) agent networks using LangGraph and custom state machines where specialized agents collaborate.',
        iconName: 'Network'
      },
      {
        title: 'Deterministic Tool Calling & API Interfaces',
        description: 'Equip agents with verified tool-calling contracts that validate parameters against strict schemas before executing writes.',
        iconName: 'Wrench'
      },
      {
        title: 'Persistent Memory & Context Scratchpads',
        description: 'Implement short-term working memory, episodic vector storage, and long-term entity databases for multi-session continuity.',
        iconName: 'Database'
      },
      {
        title: 'Self-Correction & Automated Error Recovery',
        description: 'Enable agents to inspect compiler errors, API failure responses, and self-correct their reasoning without crashing pipelines.',
        iconName: 'RefreshCw'
      },
      {
        title: 'Human-in-the-Loop Approval Workflows',
        description: 'Configure automated approval gates that pause execution and prompt human managers whenever confidence thresholds drop.',
        iconName: 'UserCheck'
      },
      {
        title: 'Agentic Observability & Step-Level Tracing',
        description: 'Instrument every reasoning step, tool call, latency hop, and token budget with OpenTelemetry and Langfuse tracing.',
        iconName: 'Activity'
      }
    ],
    useCases: [
      {
        title: 'Autonomous IT Incident Triaging & Remediation',
        description: 'Agents inspect alert streams, query Datadog logs, inspect git diffs, and generate pre-validated hotfix pull requests.',
        outcome: 'Reduced Mean Time to Resolution (MTTR) by 54% for recurring infrastructure incidents.'
      },
      {
        title: 'Automated Logistics Dispatch & Carrier Coordination',
        description: 'Agents negotiate rate confirmations, verify carrier insurance credentials, and book freight across TMS endpoints.',
        outcome: 'Automated 70% of routine spot-freight carrier booking with zero operational human error.'
      },
      {
        title: 'Multi-System Employee Onboarding Orchestrator',
        description: 'Agents provision Okta identities, configure cloud permissions, and schedule calendar orientations automatically.',
        outcome: 'Compressed onboarding cycle from 4 business days to under 45 minutes.'
      }
    ],
    deliveryApproach: [
      {
        step: 1,
        title: 'Task Decomposition & Agent Boundary Definition',
        description: 'Map manual enterprise workflows into discrete, bounded agent personas with explicit input/output contracts.'
      },
      {
        step: 2,
        title: 'Tool Interface & Environment Mocking',
        description: 'Build type-safe API adapters, sandbox testing environments, and authentication bridges for enterprise systems.'
      },
      {
        step: 3,
        title: 'Agent Graph & State Logic Engineering',
        description: 'Implement agent coordination logic, planning prompts, error recovery branches, and human-in-the-loop escalation gates.'
      },
      {
        step: 4,
        title: 'Adversarial & Edge-Case Evaluation',
        description: 'Simulate high-volume failure injection, timeout scenarios, and unexpected user inputs to verify stability.'
      },
      {
        step: 5,
        title: 'Staged Production Rollout & Telemetry',
        description: 'Deploy agents in shadow-execution mode before granting autonomous write permissions with full step tracing.'
      }
    ],
    relevantIndustries: ['Logistics & Supply Chain', 'Financial Services', 'Technology & B2B SaaS', 'Healthcare Administration', 'Manufacturing'],
    technologyAreas: ['LangGraph', 'CrewAI', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker', 'OpenTelemetry', 'Python'],
    benefits: [
      { title: 'Cycle Time Compression', metric: '60-80% Faster', description: 'Complex multi-step processes execute autonomously within seconds.' },
      { title: 'Tool Execution Safety', metric: 'Deterministic', description: 'Zero uncontrolled database mutations via schema-validated interfaces.' },
      { title: 'Operational Resilience', metric: 'Self-Healing', description: 'Automatic retries and alternative reasoning paths on external API failures.' },
      { title: 'Complete Traceability', metric: '100% Auditable', description: 'Every intermediate thought and tool execution recorded for compliance.' }
    ],
    relatedServices: [
      { title: 'Generative AI Solutions', slug: 'generative-ai-solutions', category: 'AI & Data Engineering' },
      { title: 'Enterprise AI Workflow Automation', slug: 'enterprise-ai-workflow-automation', category: 'Enterprise Integration & Automation' },
      { title: 'Enterprise RAG & Knowledge Systems', slug: 'enterprise-rag-knowledge-systems', category: 'AI & Data Engineering' },
      { title: 'AI Model Deployment & MLOps', slug: 'ai-model-deployment-mlops', category: 'Managed AI & Engineering Services' }
    ],
    faqs: [
      {
        question: 'How do you prevent autonomous agents from getting stuck in infinite loops?',
        answer: 'We configure strict recursion limits, execution timeout budgets, and acyclic state graphs. If an agent fails to make progress after predetermined attempts, it triggers a clean fallback path or human escalation.'
      },
      {
        question: 'Can agents interact with legacy systems that do not possess modern REST APIs?',
        answer: 'Yes. We build headless RPA adapters, message queue consumers, and database-level connectors that allow agents to interface securely with older systems of record.'
      },
      {
        question: 'How are human supervisors involved in agent decisions?',
        answer: 'We configure human-in-the-loop (HITL) checkpoints. For high-risk actions (e.g. fund transfers, vendor contract approvals), the agent generates a structured preview and pauses execution until approved via Slack, email, or web portal.'
      },
      {
        question: 'What frameworks do you use for building production agent swarms?',
        answer: 'We build on top of resilient open-source foundations like LangGraph, custom Python state machines, and Redis distributed locks to ensure idempotency and state persistence.'
      }
    ],
    seoTitle: 'AI Agent Development & Multi-Agent Orchestration | SpotXpert AI',
    seoDescription: 'Build production-ready autonomous AI agents with deterministic tool execution, state memory, and human-in-the-loop controls.'
  },
  {
    title: 'AI & Machine Learning',
    slug: 'ai-machine-learning',
    category: 'AI & Data Engineering',
    categoryId: 'ai-data',
    iconName: 'Brain',
    shortDescription: 'Predictive models, classification, forecasting, and computer vision systems at scale.',
    heroEyebrow: 'Predictive AI & Deep Learning',
    heroHeadline: 'Deploy enterprise-grade predictive models and computer vision pipelines that drive decisions',
    heroDescription:
      'We engineer custom deep learning architectures, time-series forecasting engines, and edge-optimized computer vision systems that solve high-stakes operational forecasting, classification, and real-time anomaly detection challenges.',
    primaryCTA: 'Book a Consultation',
    secondaryCTA: 'Explore Our Services',
    businessChallenges: [
      {
        title: 'Sub-Optimal Accuracy in Traditional Statistical Models',
        description: 'Legacy regression models fail to capture non-linear relationships and multi-variate interactions across large datasets.'
      },
      {
        title: 'Silent Concept Drift Degrading Model Performance',
        description: 'Models deployed into production degrade silently as real-world market conditions and consumer behaviors evolve.'
      },
      {
        title: 'High Latency Bottlenecks in Real-Time Inference',
        description: 'Heavy deep learning architectures struggle to deliver predictions within sub-50ms windows required by real-time systems.'
      },
      {
        title: 'Lack of Explainability for Regulatory Compliance',
        description: 'Black-box algorithms face rejection from credit committees, medical boards, and risk officers requiring transparent rationale.'
      }
    ],
    capabilities: [
      {
        title: 'Custom Deep Learning & Ensembles',
        description: 'Architect PyTorch and XGBoost ensemble pipelines tailored for high-dimensional tabular, audio, and visual classification.',
        iconName: 'Cpu'
      },
      {
        title: 'Hierarchical Time-Series Forecasting',
        description: 'Forecast demand curves across hundreds of thousands of SKUs incorporating macro-economic indicators and seasonality.',
        iconName: 'TrendingUp'
      },
      {
        title: 'Real-Time Edge Computer Vision',
        description: 'Quantize transformer vision models to run with INT8 precision on edge gateways (NVIDIA Jetson) at 60 FPS.',
        iconName: 'Eye'
      },
      {
        title: 'Real-Time Fraud & Anomaly Detection',
        description: 'Detect anomalous transactional patterns and telemetry deviations in sub-20ms with isolation forests and graph neural nets.',
        iconName: 'ShieldAlert'
      },
      {
        title: 'Explainable AI (SHAP & LIME)',
        description: 'Implement feature attribution scoring to provide transparent decision audit trails for regulatory compliance.',
        iconName: 'FileCheck'
      },
      {
        title: 'Continuous Drift Detection & Retraining',
        description: 'Continuously benchmark production distributions against training baselines to trigger automated retraining pipelines.',
        iconName: 'RefreshCw'
      }
    ],
    useCases: [
      {
        title: 'Automated Manufacturing Defect Detection',
        description: 'Deploy multi-camera edge vision models on production conveyor lines to spot micro-fractures in industrial components.',
        outcome: 'Achieved 99.7% defect recall and reduced manual quality assurance inspection costs by 62%.'
      },
      {
        title: 'Dynamic Retail Inventory & Demand Forecasting',
        description: 'Train hierarchical time-series models across 1,200 retail stores predicting localized replenishment needs.',
        outcome: 'Decreased stockouts by 35% while slashing excess holding inventory by $4.2M.'
      },
      {
        title: 'Real-Time Card Payment Fraud Interception',
        description: 'Score millions of transactional events per second against fraud feature stores before payment gateway authorization.',
        outcome: 'Prevented $5.8M in annualized fraudulent chargebacks with under 18ms inference latency.'
      }
    ],
    deliveryApproach: [
      {
        step: 1,
        title: 'Exploratory Data Analysis & Feasibility Study',
        description: 'Cleanse raw historical data, identify class imbalances, establish baseline accuracy benchmarks, and verify signal strength.'
      },
      {
        step: 2,
        title: 'Feature Engineering & Store Architecture',
        description: 'Design robust feature transformations and centralized feature stores ensuring zero training-serving data skew.'
      },
      {
        step: 3,
        title: 'Model Training & Hyperparameter Tuning',
        description: 'Train candidate algorithms, optimize hyperparameters with Bayesian search, and validate cross-fold generalization.'
      },
      {
        step: 4,
        title: 'Quantization & Inference Serving',
        description: 'Compile models with ONNX Runtime or TensorRT for low-latency serving on scalable cloud or edge clusters.'
      },
      {
        step: 5,
        title: 'Monitoring, Drift Alarms & Governance',
        description: 'Integrate automated monitoring dashboards for covariate shift, concept drift, and SLA compliance.'
      }
    ],
    relevantIndustries: ['Manufacturing & Industrial', 'Financial Services', 'Retail & E-commerce', 'Healthcare', 'Automotive'],
    technologyAreas: ['PyTorch', 'TensorFlow', 'XGBoost', 'LightGBM', 'Scikit-learn', 'NVIDIA TensorRT', 'ONNX Runtime', 'MLflow'],
    benefits: [
      { title: 'Prediction Precision', metric: '99%+ Recall', description: 'Highly calibrated domain models minimize false positives and negatives.' },
      { title: 'Sub-Millisecond Inference', metric: 'sub-25ms', description: 'Hardware-optimized compilation for real-time edge and API serving.' },
      { title: 'Eliminate Concept Drift', metric: 'Automated', description: 'Proactive alarms and automated retraining pipelines keep models fresh.' },
      { title: 'Regulatory Explainability', metric: '100% Transparent', description: 'SHAP value scorecards justify every credit, risk, or medical decision.' }
    ],
    relatedServices: [
      { title: 'Data Engineering & Analytics', slug: 'data-engineering-analytics', category: 'AI & Data Engineering' },
      { title: 'AI Model Deployment & MLOps', slug: 'ai-model-deployment-mlops', category: 'Managed AI & Engineering Services' },
      { title: 'AI Model Evaluation & Optimization', slug: 'ai-model-evaluation-optimization', category: 'AI & Data Engineering' },
      { title: 'Generative AI Solutions', slug: 'generative-ai-solutions', category: 'AI & Data Engineering' }
    ],
    faqs: [
      {
        question: 'Do we need massive historical datasets before beginning a machine learning project?',
        answer: 'Not necessarily. While data volume helps, data quality and signal density are paramount. We also utilize transfer learning, synthetic data generation, and semi-supervised techniques to build robust models from modest starting datasets.'
      },
      {
        question: 'How do you prevent data leakage between training and testing environments?',
        answer: 'We enforce strict temporal split validation, isolated feature engineering pipelines, and centralized feature stores that guarantee point-in-time correctness.'
      },
      {
        question: 'Can your models operate offline on edge hardware without cloud connectivity?',
        answer: 'Yes. We regularly compile and quantize deep neural networks for NVIDIA Jetson, Raspberry Pi, and embedded microcontrollers that run completely disconnected from the internet.'
      },
      {
        question: 'What is the typical timeline to take an ML model from proof-of-concept to production?',
        answer: 'Our agile pods typically complete data preparation and feasibility baseline benchmarking in 2 to 3 weeks, followed by 3 to 4 weeks of model training, quantization, and API serving cutover.'
      }
    ],
    seoTitle: 'AI & Machine Learning Engineering | SpotXpert AI',
    seoDescription: 'Deploy high-accuracy predictive models, time-series forecasting, and computer vision systems with SpotXpert AI engineering pods.'
  },
  {
    title: 'Data Engineering & Analytics',
    slug: 'data-engineering-analytics',
    category: 'AI & Data Engineering',
    categoryId: 'ai-data',
    iconName: 'Database',
    shortDescription: 'Modern data lakehouses, streaming pipelines, dbt transformations, and governed analytics.',
    heroEyebrow: 'Modern Data Stack & Lakehouses',
    heroHeadline: 'Unify fragmented enterprise data into scalable, real-time analytics lakehouses',
    heroDescription:
      'Eliminate brittle overnight ETL jobs and conflicting spreadsheet numbers. We engineer resilient modern data platforms on Databricks, Snowflake, and Microsoft Fabric that turn raw transaction logs into governed, queryable enterprise assets.',
    primaryCTA: 'Book a Consultation',
    secondaryCTA: 'Explore Our Services',
    businessChallenges: [
      {
        title: 'Fragmented Silos & Inconsistent Business Metrics',
        description: 'Finance, marketing, and operations report conflicting KPI numbers due to uncoordinated database extracts and duplicate logic.'
      },
      {
        title: 'Failing Overnight Batch Jobs & Stale Dashboards',
        description: 'Legacy ETL stored procedures take hours to execute, fail silently, and deliver yesterday’s numbers to operational teams.'
      },
      {
        title: 'Poor Data Quality & Incomplete Schema Governance',
        description: 'Corrupt entries, missing values, and upstream schema migrations break downstream reporting without prior warning.'
      },
      {
        title: 'Runaway Warehouse Compute Costs',
        description: 'Unoptimized queries and non-partitioned warehouse tables cause monthly Snowflake or Databricks invoices to spike unpredictably.'
      }
    ],
    capabilities: [
      {
        title: 'Medallion Data Lakehouse Architecture',
        description: 'Structure Bronze, Silver, and Gold storage layers using Delta Lake and Apache Iceberg for lightning-fast ACID analytics.',
        iconName: 'Layers'
      },
      {
        title: 'Real-Time Streaming Pipelines (Kafka & Flink)',
        description: 'Ingest millions of high-throughput transactional events per second with sub-second end-to-end processing guarantees.',
        iconName: 'Zap'
      },
      {
        title: 'dbt Analytics Engineering & Transformation',
        description: 'Bring modern software engineering rigor—version control, automated CI/CD testing, and documentation—to your SQL modeling.',
        iconName: 'Code2'
      },
      {
        title: 'Zero-Downtime Change Data Capture (CDC)',
        description: 'Replicate changes from production PostgreSQL, MySQL, and Oracle databases in real time without impacting transactional performance.',
        iconName: 'RefreshCw'
      },
      {
        title: 'Enterprise Data Governance & Lineage',
        description: 'Implement Unity Catalog and Purview for column-level access masking, PII tokenization, and comprehensive audit lineage.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'FinOps Warehouse Cost Optimization',
        description: 'Configure automated warehouse suspension, clustering keys, and query concurrency limits to reduce compute spend by 30-50%.',
        iconName: 'BarChart3'
      }
    ],
    useCases: [
      {
        title: 'Unified Customer 360 & Lifetime Value Lakehouse',
        description: 'Consolidate CRM, e-commerce, and mobile app event streams into a single source of truth for marketing segmentation.',
        outcome: 'Reduced data sync lag from 24 hours to 3 minutes, unlocking real-time personalized campaign triggers.'
      },
      {
        title: 'Automated Financial Month-End Reconciliation',
        description: 'Automate transaction reconciliation across payment gateways, bank feeds, and ERP general ledger tables.',
        outcome: 'Compressed month-end close timeline from 14 business days down to 4 hours with 100% audit compliance.'
      },
      {
        title: 'Supply Chain Inventory & Telemetry Monitoring',
        description: 'Stream RFID scans, warehouse movements, and freight carrier GPS data into real-time operational executive dashboards.',
        outcome: 'Eliminated stock discrepancies across 40 regional fulfillment hubs.'
      }
    ],
    deliveryApproach: [
      {
        step: 1,
        title: 'Source Assessment & Data Topology Mapping',
        description: 'Audit existing database sources, API feeds, schema stability, security constraints, and consumption requirements.'
      },
      {
        step: 2,
        title: 'Lakehouse & Storage Layer Architecture',
        description: 'Design storage partitioning, Delta Lake table formats, access boundaries, and network landing zones.'
      },
      {
        step: 3,
        title: 'Pipeline Ingestion & Transformation Modeling',
        description: 'Implement CDC ingestion, configure dbt transformation models, and embed automated data quality checks.'
      },
      {
        step: 4,
        title: 'Data Quality Testing & Reconciliation',
        description: 'Run automated Great Expectations suites against production extracts to verify mathematical integrity.'
      },
      {
        step: 5,
        title: 'BI Semantic Layer & Production Handover',
        description: 'Publish certified semantic layers for Power BI, Tableau, and ad-hoc SQL analysts with full documentation.'
      }
    ],
    relevantIndustries: ['Financial Services', 'Retail & E-commerce', 'Healthcare', 'Logistics', 'Manufacturing'],
    technologyAreas: ['Databricks', 'Snowflake', 'dbt', 'Apache Kafka', 'Apache Spark', 'Delta Lake', 'PostgreSQL', 'Airflow'],
    benefits: [
      { title: 'Real-Time Insights', metric: 'sub-minute', description: 'Transition from stale overnight batch jobs to continuous streaming updates.' },
      { title: 'Verified Accuracy', metric: '100% Tested', description: 'Automated dbt quality gates stop anomalous records before they reach BI reports.' },
      { title: 'Compute Cost Reduction', metric: '30-50% Savings', description: 'Optimized partitioning and warehouse auto-scaling eliminate cloud waste.' },
      { title: 'Data Lineage & Privacy', metric: 'SOC 2 & HIPAA', description: 'Dynamic masking and end-to-end lineage tracking ensure full compliance.' }
    ],
    relatedServices: [
      { title: 'AI & Machine Learning', slug: 'ai-machine-learning', category: 'AI & Data Engineering' },
      { title: 'Enterprise RAG & Knowledge Systems', slug: 'enterprise-rag-knowledge-systems', category: 'AI & Data Engineering' },
      { title: 'Cloud Architecture & Migration', slug: 'cloud-architecture-migration', category: 'Cloud, Platform & DevOps' },
      { title: 'Managed AI Operations (AIOps)', slug: 'managed-ai-operations', category: 'Managed AI & Engineering Services' }
    ],
    faqs: [
      {
        question: 'Which platform should our company choose: Databricks, Snowflake, or Microsoft Fabric?',
        answer: 'The ideal platform depends on your primary workloads. Databricks excels in advanced machine learning, PySpark data science, and streaming. Snowflake is the gold standard for SQL analytics and frictionless data sharing. Microsoft Fabric provides cohesive integration for Azure and Power BI enterprise estates. We evaluate your workload requirements during Sprint 0 to recommend the optimal architecture.'
      },
      {
        question: 'How do you handle schema changes from upstream production applications?',
        answer: 'We implement schema evolution rules and dead-letter queues. When an unexpected field is added or types shift, the pipeline isolates the anomalous record without halting the entire pipeline, notifying engineering immediately.'
      },
      {
        question: 'Can you migrate our legacy on-premise SQL Server or Oracle database to the cloud without downtime?',
        answer: 'Yes. We use Change Data Capture (CDC) replication to synchronize transactions continuously between on-premise databases and your cloud lakehouse, enabling a smooth, risk-free final cutover.'
      },
      {
        question: 'How do you prevent duplicate records in high-throughput streaming pipelines?',
        answer: 'We implement idempotent writes and deduplication logic using unique transaction IDs and Delta Lake merge operations with exactly-once processing semantics.'
      }
    ],
    seoTitle: 'Data Engineering & Analytics Lakehouse Architecture | SpotXpert AI',
    seoDescription: 'Build modern data lakehouses, streaming pipelines, and dbt analytics engineering on Databricks, Snowflake, and Microsoft Fabric.'
  },
  {
    title: 'Enterprise RAG & Knowledge Systems',
    slug: 'enterprise-rag-knowledge-systems',
    category: 'AI & Data Engineering',
    categoryId: 'ai-data',
    iconName: 'Search',
    shortDescription: 'Permissions-aware semantic search, hybrid vector retrieval, and grounded knowledge systems.',
    heroEyebrow: 'Retrieval-Augmented Generation',
    heroHeadline: 'Connect unstructured enterprise knowledge to generative AI with sub-100ms accuracy',
    heroDescription:
      'Empower your workforce with high-precision retrieval systems that search petabytes of internal documents, codebases, and ERP data. We engineer hybrid dense-sparse vector architectures with permission-aware filtering and deterministic citations.',
    primaryCTA: 'Book a Consultation',
    secondaryCTA: 'Explore Our Services',
    businessChallenges: [
      {
        title: 'Information Silos Across Disparate Enterprise Tools',
        description: 'Crucial company knowledge is scattered across Confluence, Google Drive, SharePoint, Salesforce, and local PDFs.'
      },
      {
        title: 'Permission Leaks & Unauthorized Data Exposure',
        description: 'Naive vector search exposes sensitive executive compensation or confidential client records to unauthorized staff.'
      },
      {
        title: 'Low Retrieval Accuracy in Dense Unstructured Text',
        description: 'Standard vector embeddings fail on specific technical jargon, part numbers, and complex tabular financials.'
      },
      {
        title: 'Stale Knowledge Indexes Out of Sync with Source Data',
        description: 'Manual document uploads mean staff receive outdated answers based on deprecated corporate policies.'
      }
    ],
    capabilities: [
      {
        title: 'Hybrid Dense-Sparse Vector Search',
        description: 'Combine BM25 keyword matching with dense semantic embeddings (Cohere, OpenAI) to achieve 98.4% retrieval recall.',
        iconName: 'Search'
      },
      {
        title: 'Permissions-Aware ACL Filtering',
        description: 'Enforce document-level access control lists directly within vector queries, ensuring users only retrieve content they have rights to see.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Hierarchical Chunking & Semantic Parsing',
        description: 'Parse multi-page PDFs, tables, and blueprints with layout-aware chunking that preserves context and header hierarchy.',
        iconName: 'FileText'
      },
      {
        title: 'Contextual Reranking (Cohere / BGE)',
        description: 'Reorder top retrieval candidates using neural cross-encoder rerankers before injecting context into the generative LLM prompt.',
        iconName: 'Layers'
      },
      {
        title: 'Real-Time Enterprise Connectors',
        description: 'Automate real-time incremental document syncing from SharePoint, Google Drive, Jira, Salesforce, and SQL databases.',
        iconName: 'RefreshCw'
      },
      {
        title: 'Verifiable Footnote & Citation Attribution',
        description: 'Every generated claim includes direct, clickable links to exact source document pages and paragraph excerpts.',
        iconName: 'CheckCircle2'
      }
    ],
    useCases: [
      {
        title: 'Legal Contract Intelligence & Due Diligence',
        description: 'Search tens of thousands of past merger agreements to identify precedent clauses, indemnity caps, and non-standard covenants.',
        outcome: 'Decreased contract review timeline by 72% while eliminating missed liabilities.'
      },
      {
        title: 'Field Service Technical Troubleshooting Assistant',
        description: 'Provide field technicians with instant answers extracted from thousands of equipment manuals and engineering schematics.',
        outcome: 'Improved first-time fix rate by 38% across complex industrial machinery.'
      },
      {
        title: 'Medical Protocol & Clinical Trials Search',
        description: 'Allow medical researchers to query research studies and patient eligibility criteria with strict citation attribution.',
        outcome: 'Accelerated trial cohort identification from weeks to minutes.'
      }
    ],
    deliveryApproach: [
      {
        step: 1,
        title: 'Corpus Audit & Permission Architecture',
        description: 'Index document repositories, identify file formats (PDF, DOCX, audio), and map identity access management (IAM) permission trees.'
      },
      {
        step: 2,
        title: 'Parsing & Chunking Pipeline Engineering',
        description: 'Build layout-aware document parsers that extract tables, clean metadata, and generate optimal hierarchical chunks.'
      },
      {
        step: 3,
        title: 'Vector Lakehouse & Reranker Indexing',
        description: 'Deploy Qdrant, Pinecone, or pgvector clusters, generate domain embeddings, and configure cross-encoder reranking.'
      },
      {
        step: 4,
        title: 'Accuracy Benchmarking & RAG Triad Evaluation',
        description: 'Benchmark context relevance, groundedness, and answer relevance using automated synthetic test suites (Ragas / TruLens).'
      },
      {
        step: 5,
        title: 'UI Integration & Continuous Sync Deployment',
        description: 'Deploy user interface with inline source previews and configure automated incremental sync webhooks.'
      }
    ],
    relevantIndustries: ['Legal & Professional Services', 'Financial Services', 'Healthcare & Life Sciences', 'Manufacturing', 'Technology'],
    technologyAreas: ['Pinecone', 'Qdrant', 'pgvector', 'OpenSearch', 'Cohere Rerank', 'LangChain', 'LlamaIndex', 'Unstructured.io'],
    benefits: [
      { title: 'Zero Hallucinations', metric: '100% Grounded', description: 'Every sentence backed by direct citation to internal source material.' },
      { title: 'Strict Enterprise Security', metric: 'RBAC Enforced', description: 'Zero permission leakage across user roles and departments.' },
      { title: 'Real-Time Sync', metric: 'Automated', description: 'Instant indexing when documents are modified in SharePoint or Google Drive.' },
      { title: 'Search Precision', metric: '98%+ Recall', description: 'Hybrid search catches both exact part numbers and conceptual queries.' }
    ],
    relatedServices: [
      { title: 'Generative AI Solutions', slug: 'generative-ai-solutions', category: 'AI & Data Engineering' },
      { title: 'AI Agent Development', slug: 'ai-agent-development', category: 'AI & Data Engineering' },
      { title: 'Intelligent Document Processing', slug: 'intelligent-document-processing', category: 'Enterprise Integration & Automation' },
      { title: 'Enterprise Application Integration', slug: 'enterprise-application-integration', category: 'Enterprise Integration & Automation' }
    ],
    faqs: [
      {
        question: 'How do you prevent employees from seeing confidential documents through RAG?',
        answer: 'We embed enterprise Role-Based Access Control (RBAC) and metadata filters directly into every vector query. Before the vector index returns candidates, it evaluates the user’s authenticated Entra ID / Okta group permissions.'
      },
      {
        question: 'Why is basic vector search not enough for enterprise documents?',
        answer: 'Naive vector search struggles with keyword precision (e.g. searching for error codes or part numbers), multi-page tables, and cross-document reasoning. We implement hybrid dense-sparse retrieval paired with cross-encoder neural rerankers to solve this.'
      },
      {
        question: 'Which vector database do you recommend for enterprise deployments?',
        answer: 'We select based on your infrastructure: pgvector for teams invested in PostgreSQL, Qdrant or Pinecone for dedicated high-scale vector indexing, and OpenSearch for hybrid lexical-semantic workloads.'
      },
      {
        question: 'How do you measure whether the RAG system is actually accurate?',
        answer: 'We evaluate every production query across the RAG Triad: Context Relevance (did we retrieve the right snippet?), Groundedness (is the answer fully supported by the snippet?), and Answer Relevance (did we answer the user’s question?).'
      }
    ],
    seoTitle: 'Enterprise RAG & Knowledge Systems Architecture | SpotXpert AI',
    seoDescription: 'Build permissions-aware enterprise RAG with hybrid vector search, neural rerankers, and verifiable citations with SpotXpert AI.'
  },
  {
    title: 'AI Model Evaluation & Optimization',
    slug: 'ai-model-evaluation-optimization',
    category: 'AI & Data Engineering',
    categoryId: 'ai-data',
    iconName: 'Gauge',
    shortDescription: 'Evaluation datasets, synthetic testing, latency tuning, token FinOps, and model benchmarking.',
    heroEyebrow: 'Model Benchmarking & FinOps',
    heroHeadline: 'Rigorously evaluate, benchmark, and optimize enterprise AI models for production reliability',
    heroDescription:
      'Eliminate guesswork in model selection and deployment. We engineer automated synthetic evaluation harnesses, golden test datasets, latency optimization pipelines, and token FinOps monitoring to ensure models run with maximum accuracy at minimum compute cost.',
    primaryCTA: 'Book a Consultation',
    secondaryCTA: 'Explore Our Services',
    businessChallenges: [
      {
        title: 'Subjective & Inconsistent Model Testing',
        description: 'Engineering teams rely on anecdotal manual testing rather than systematic, statistically sound benchmark evaluation suites.'
      },
      {
        title: 'Silent Regressions in Production Prompts & Weights',
        description: 'Updating a system prompt or foundation model version silently breaks downstream edge cases and formatting expectations.'
      },
      {
        title: 'Unoptimized GPU Latency & High Hosting Costs',
        description: 'Models run with excessive floating-point precision, consuming expensive GPU capacity without delivering noticeable quality gains.'
      },
      {
        title: 'Unclear Cost-to-Performance Tradeoffs',
        description: 'Organizations overpay for frontier commercial models for simple tasks that could be handled faster by lightweight, fine-tuned models.'
      }
    ],
    capabilities: [
      {
        title: 'Golden Dataset Curation & Synthetic Testing',
        description: 'Curate comprehensive golden datasets representing edge cases, adversarial inputs, and domain-specific terminology.',
        iconName: 'Database'
      },
      {
        title: 'Automated CI/CD Model Evaluation Gates',
        description: 'Execute automated regression test harnesses on every pull request to catch accuracy dips and hallucination spikes before release.',
        iconName: 'ShieldCheck'
      },
      {
        title: 'Model Quantization (FP8 / INT4 / AWQ)',
        description: 'Quantize large weights into low-bit representations with near-zero loss in precision, slashing GPU VRAM requirements by 50%.',
        iconName: 'Cpu'
      },
      {
        title: 'Intelligent Model Routing & Cascading',
        description: 'Route simple queries to lightning-fast lightweight models and escalate complex multi-step reasoning to frontier models dynamically.',
        iconName: 'Network'
      },
      {
        title: 'Token Economics & FinOps Governance',
        description: 'Implement real-time token tracking, budget limits per department, and prompt compression techniques to reduce recurring spend.',
        iconName: 'BarChart3'
      },
      {
        title: 'Latency Profiling & Speculative Decoding',
        description: 'Optimize time-to-first-token (TTFT) and throughput using speculative decoding and optimized CUDA kernels.',
        iconName: 'Zap'
      }
    ],
    useCases: [
      {
        title: 'Enterprise LLM Cost Reduction via Model Routing',
        description: 'Implement an intelligent router that directs 75% of customer service queries to a self-hosted 8B model instead of frontier commercial APIs.',
        outcome: 'Reduced monthly LLM inference invoice by 68% while improving median response time from 1.8s to 280ms.'
      },
      {
        title: 'Automated Compliance Evaluation for Healthcare RAG',
        description: 'Build continuous evaluation gates scoring medical RAG responses against clinician-approved golden answer baselines.',
        outcome: 'Achieved 99.8% compliance adherence with zero ungrounded clinical claims reaching end users.'
      },
      {
        title: 'Low-Latency Financial Trading Sentiment Model',
        description: 'Quantize and optimize a financial BERT sentiment pipeline for edge deployment on low-latency trading servers.',
        outcome: 'Compressed inference latency from 45ms to 3.8ms with zero degradation in signal accuracy.'
      }
    ],
    deliveryApproach: [
      {
        step: 1,
        title: 'Evaluation Framework & Metric Definition',
        description: 'Define domain-specific metrics (accuracy, latency SLAs, toxicity thresholds, cost per thousand tokens) and baseline current performance.'
      },
      {
        step: 2,
        title: 'Golden Benchmark Dataset Assembly',
        description: 'Collect historical production traces, engineer synthetic adversarial scenarios, and validate ground-truth annotations with experts.'
      },
      {
        step: 3,
        title: 'Optimization & Quantization Pipeline',
        description: 'Apply post-training quantization (AWQ/GPTQ), configure continuous batching serving, and implement dynamic routing logic.'
      },
      {
        step: 4,
        title: 'Automated CI/CD Evaluation Integration',
        description: 'Embed evaluation runs into GitHub Actions pipelines to block pull requests that cause performance or accuracy regressions.'
      },
      {
        step: 5,
        title: 'Production FinOps & Continuous Benchmarking',
        description: 'Deploy real-time token consumption dashboards, latency telemetry, and drift detection alerts.'
      }
    ],
    relevantIndustries: ['Technology & B2B SaaS', 'Financial Services', 'Healthcare', 'Insurance', 'Retail & E-commerce'],
    technologyAreas: ['Ragas', 'TruLens', 'vLLM', 'TensorRT-LLM', 'AutoAWQ', 'Langfuse', 'Promptfoo', 'Weights & Biases'],
    benefits: [
      { title: 'Inference Cost Reduction', metric: '50-70% Lower', description: 'Intelligent routing and quantization slash cloud GPU spend.' },
      { title: 'Latency Acceleration', metric: 'Up to 4x Faster', description: 'Speculative decoding and kernel optimization speed up response times.' },
      { title: 'Guaranteed Quality', metric: 'Automated CI/CD', description: 'Zero regression releases through comprehensive golden test suites.' },
      { title: 'Cost Predictability', metric: 'Complete FinOps', description: 'Granular budget controls and token tracking per department and feature.' }
    ],
    relatedServices: [
      { title: 'Generative AI Solutions', slug: 'generative-ai-solutions', category: 'AI & Data Engineering' },
      { title: 'AI Model Deployment & MLOps', slug: 'ai-model-deployment-mlops', category: 'Managed AI & Engineering Services' },
      { title: 'AI Application Monitoring & Observability', slug: 'ai-application-monitoring-observability', category: 'Managed AI & Engineering Services' },
      { title: 'AI Governance, Risk & Responsible AI', slug: 'ai-governance-risk-responsible-ai', category: 'AI Strategy & Advisory' }
    ],
    faqs: [
      {
        question: 'How do you evaluate model outputs without relying entirely on human annotators?',
        answer: 'We employ LLM-as-a-Judge frameworks with strictly calibrated evaluation rubrics, combined with deterministic syntactic checks, schema validators, and ground-truth embedding comparisons.'
      },
      {
        question: 'Does model quantization reduce the intelligence or accuracy of an LLM?',
        answer: 'Modern techniques like AWQ (Activation-aware Weight Quantization) and FP8 preserve over 99% of original model performance while cutting memory footprint and latency in half.'
      },
      {
        question: 'What is speculative decoding and how does it improve inference speed?',
        answer: 'Speculative decoding uses a tiny, ultra-fast draft model to predict tokens in parallel, which are then validated in a single pass by the larger model. This increases token generation speeds by 2x to 3x with zero loss in output quality.'
      },
      {
        question: 'How does model routing work in production architectures?',
        answer: 'Incoming requests pass through a lightweight semantic classifier that evaluates query complexity. Straightforward informational queries are fulfilled by inexpensive small models, while multi-step logical challenges route to larger foundation models.'
      }
    ],
    seoTitle: 'AI Model Evaluation, FinOps & Latency Optimization | SpotXpert AI',
    seoDescription: 'Benchmark, evaluate, and optimize AI models for enterprise reliability, sub-second latency, and dramatic inference cost reduction.'
  }
];
