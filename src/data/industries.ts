export interface IndustryImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface UseCaseChip {
  id: string;
  label: string;
  iconName: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ChallengeItem {
  title: string;
  description: string;
}

export interface SolutionItem {
  service: string;
  action: string;
  outcome: string;
}

export interface UseCaseScenario {
  title: string;
  before: string;
  withUs: string;
  result: string;
}

export interface OutcomeMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface IndustryItem {
  slug: string;
  aliases: string[];
  name: string;
  category: string;
  announcement: {
    badge: string;
    text: string;
    linkText: string;
  };
  useCaseChips: UseCaseChip[];
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  process: ProcessStep[];
  overview: {
    paragraph1: string;
    paragraph2: string;
  };
  challenges: ChallengeItem[];
  solutions: SolutionItem[];
  useCases: UseCaseScenario[];
  outcomes: OutcomeMetric[];
  integrations: string[];
  compliance: string[];
  faqs: FaqItem[];
  finalCta: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  images: {
    hero: IndustryImage;
    architecture: IndustryImage;
    operations: IndustryImage;
    showcase: IndustryImage;
  };
}

export const INDUSTRIES_DATA: Record<string, IndustryItem> = {
  'real-estate': {
    slug: 'real-estate',
    aliases: ['property-management'],
    name: 'Real Estate / Property Management',
    category: 'Real Estate & Built Environment',
    announcement: {
      badge: 'Platform Release',
      text: 'Unified property operations platform connecting leasing, maintenance, and owner reporting.',
      linkText: 'Explore architecture',
    },
    useCaseChips: [
      { id: 'leasing', label: 'Automated Leasing Ingestion', iconName: 'Key' },
      { id: 'screening', label: 'AI Tenant Screening', iconName: 'ShieldCheck' },
      { id: 'rent', label: 'Digital Rent Collection', iconName: 'CreditCard' },
      { id: 'maintenance', label: 'Smart Maintenance Triage', iconName: 'Wrench' },
      { id: 'reporting', label: 'Portfolio Analytics & Reporting', iconName: 'BarChart3' },
    ],
    hero: {
      headline: 'Maximize portfolio NOI with intelligent property operations software',
      subheadline:
        'We engineer custom property management platforms, automated tenant workflows, and data pipelines that connect Yardi, AppFolio, and your legacy tech stack into a single source of truth.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Audit your current property management systems, unit turnover bottlenecks, and accounting workflows.' },
      { step: '02', title: 'Design', description: 'Architect custom tenant portals, automated maintenance dispatch models, and multi-entity ledger sync.' },
      { step: '03', title: 'Build & Integrate', description: 'Engineer secure integrations with Yardi, AppFolio, RealPage, and smart building IoT sensors.' },
      { step: '04', title: 'Launch & Scale', description: 'Deploy role-based access for site managers, tenants, and owners with automated compliance checks.' },
    ],
    overview: {
      paragraph1:
        'Modern real estate and property management companies operate across fragmented portfolios, managing hundreds of vendor invoices, tenant inquiries, and inspection schedules simultaneously. Legacy software silos cause delayed lease conversions, uncollected utility re-bills, and slow maintenance turnaround.',
      paragraph2:
        'By building centralized operational platforms and automated workflows, property leaders unify tenant screening, dynamic rent pricing, and predictive maintenance dispatch. This reduces operational overhead while delivering high-touch resident experiences that drive renewals.',
    },
    challenges: [
      { title: 'Siloed Portfolio Data', description: 'Financials, occupancy data, and maintenance tickets trapped in disparate systems create blind spots for asset managers.' },
      { title: 'Leasing Pipeline Friction', description: 'Slow response times to inquiries and manual document gathering lead to prospect drop-off during peak leasing periods.' },
      { title: 'Maintenance Ticket Backlog', description: 'Manual contractor dispatch and emergency prioritization inflate repair costs and frustrate residents.' },
      { title: 'Owner Reporting Latency', description: 'Consolidating multi-property GAAP statements, rent rolls, and CapEx updates requires weeks of manual spreadsheet work.' },
    ],
    solutions: [
      { service: 'Digital Product Engineering', action: 'Build custom tenant and owner web/mobile portals with self-service payments, lease renewals, and document access.', outcome: 'Reduces property manager administrative phone calls by 40%.' },
      { service: 'Data Engineering & Analytics', action: 'Unify Yardi, AppFolio, and CRM data into an automated lakehouse with live occupancy and CapEx dashboards.', outcome: 'Delivers real-time portfolio NOI tracking across all asset classes.' },
      { service: 'Generative AI & Document Intelligence', action: 'Implement automated parsing for lease agreements, income verifications, and vendor invoices.', outcome: 'Accelerates lease application approvals from 3 days to under 4 hours.' },
      { service: 'Legacy Modernization', action: 'Migrate on-premise property databases to scalable AWS/Azure cloud architectures with automated disaster recovery.', outcome: 'Eliminates server downtime and ensures multi-region asset accessibility.' },
      { service: 'Custom IoT & Workflow Automation', action: 'Connect smart lock systems and HVAC telemetry to automated unit turnover checklists.', outcome: 'Decreases vacant unit turnover turnaround time by 30%.' },
    ],
    useCases: [
      {
        title: 'End-to-End Tenant Onboarding & Screening',
        before: 'Leasing agents manually emailed PDF applications, reviewed pay stubs by eye, and waited 48 hours for third-party background checks.',
        withUs: 'Deployed an automated digital onboarding engine that validates income via Plaid, performs automated Fair Housing-compliant screening, and generates digital e-leases.',
        result: 'Cut application-to-lease time by 65% while maintaining 100% compliance auditability.',
      },
      {
        title: 'Predictive HVAC & Facilities Maintenance',
        before: 'Equipment failures were addressed only after tenant complaints, resulting in expensive emergency contractor dispatch and tenant dissatisfaction.',
        withUs: 'Integrated smart thermostat telemetry with an automated work order engine that flags equipment stress before complete breakdown.',
        result: 'Reduced emergency repair expenditures by 28% and improved resident renewal rates.',
      },
      {
        title: 'Multi-Entity Automated Owner Statements',
        before: 'Accounting teams spent 10 business days each month reconciling property bank accounts and preparing custom investor reports.',
        withUs: 'Engineered an automated ledger reconciliation pipeline that pushes clean monthly investor packets and distribution statements.',
        result: 'Closed monthly books in 2 days instead of 10 with zero calculation discrepancies.',
      },
    ],
    outcomes: [
      { label: 'Turnover Velocity', value: '30–45% faster', subtext: 'Target reduction in vacant unit prep time' },
      { label: 'Admin Workload', value: '40–55% lower', subtext: 'Fewer repetitive manual back-office tasks' },
      { label: 'Fair Housing Compliance', value: '100% auditable', subtext: 'Objective rules applied to all applicant screening' },
      { label: 'Resident Retention', value: '15–25% higher', subtext: 'Improved renewal velocity via portal transparency' },
    ],
    integrations: ['Yardi Voyager', 'AppFolio', 'RealPage', 'Buildium', 'MRI Software', 'Salesforce CRM', 'Plaid Banking', 'DocuSign'],
    compliance: ['Fair Housing Act (FHA)', 'SOC 2 Type II', 'GLBA Financial Privacy', 'State Tenant Protection Acts', 'AML/KYC Entity Verification'],
    faqs: [
      { question: 'Can our existing Yardi or AppFolio database connect directly?', answer: 'Yes. We build bidirectional API integrations and webhook listeners that keep your core ERP synchronized with custom portals and analytics dashboards in real time.' },
      { question: 'How do you ensure tenant screening complies with Fair Housing laws?', answer: 'All screening workflows use strictly objective scoring rubrics with explicit exclusion of protected attributes, generating complete immutable audit logs for regulatory review.' },
      { question: 'Can we build custom investor portals with varying equity split views?', answer: 'Yes. We architect role-based portals that calculate LP/GP waterfall distributions, display property-level metrics, and securely deliver K-1 tax forms.' },
      { question: 'What is the typical timeline to launch a custom property platform?', answer: 'Initial MVP portals and automated integrations typically go live within 8 to 12 weeks, followed by iterative feature rollouts across property tiers.' },
      { question: 'Who owns the intellectual property and code developed?', answer: 'You retain 100% ownership of all source code, architecture diagrams, data pipelines, and intellectual property from day one.' },
    ],
    finalCta: {
      headline: 'Transform your property portfolio into a high-efficiency operating platform',
      subheadline: 'Eliminate manual leasing friction, accelerate repair dispatch, and give asset owners real-time visibility.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80',
        alt: 'Modern residential and commercial real estate portfolio architecture',
        caption: 'Enterprise property operations and portfolio asset management',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
        alt: 'High-rise commercial real estate development',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=80',
        alt: 'Modern residential property and leasing management',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
        alt: 'Property management operations control center',
      },
    },
  },

  'accounting': {
    slug: 'accounting',
    aliases: ['bookkeeping'],
    name: 'Accounting / Bookkeeping',
    category: 'Finance & Professional Practice',
    announcement: {
      badge: 'Workflow Automation',
      text: 'Automate client document intake, GL reconciliation, and month-end close schedules.',
      linkText: 'View practice solutions',
    },
    useCaseChips: [
      { id: 'onboarding', label: 'Client Document Intake', iconName: 'FileCheck' },
      { id: 'reconciliation', label: 'Multi-Bank Reconciliation', iconName: 'Scale' },
      { id: 'apar', label: 'AP/AR Automation', iconName: 'Receipt' },
      { id: 'monthend', label: 'Month-End Close Tracking', iconName: 'CalendarCheck' },
      { id: 'taxprep', label: 'Tax Season Workflow Orchestration', iconName: 'FileSpreadsheet' },
    ],
    hero: {
      headline: 'Scale billable client capacity without adding administrative headcount',
      subheadline:
        'We engineer automated accounting platforms, intelligent ledger reconciliation engines, and client intake portals that seamlessly integrate with QuickBooks, Xero, NetSuite, and Sage.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Analyze your practice workflows, client onboarding bottlenecks, and manual journal entry tasks.' },
      { step: '02', title: 'Design', description: 'Architect structured document parsing pipelines, automated GL mapping, and secure client review portals.' },
      { step: '03', title: 'Build & Integrate', description: 'Develop bidirectional integrations with QuickBooks, Xero, Karbon, and cloud banking APIs.' },
      { step: '04', title: 'Launch & Scale', description: 'Deploy role-based access for junior bookkeepers, CPAs, and clients with full audit trail compliance.' },
    ],
    overview: {
      paragraph1:
        'CPA firms and bookkeeping practices struggle during peak tax and audit seasons due to disorganized client document submissions, manual receipt categorization, and repetitive transaction reconciliations. Skilled accountants spend valuable billable hours chasing missing W-9s and receipts rather than providing strategic advisory services.',
      paragraph2:
        'By modernizing accounting tech stacks with automated intake portals, AI document extraction, and continuous reconciliation pipelines, practices compress month-end closing cycles and double their client-to-accountant ratios while eliminating data-entry fatigue.',
    },
    challenges: [
      { title: 'Tax Season Intake Chaos', description: 'Clients send tax forms in mixed formats via email, text, and physical copies, causing lost files and filing delays.' },
      { title: 'Manual GL Reconciliation', description: 'Matching credit card charges and bank statements against invoice line items is time-consuming and error-prone.' },
      { title: 'Month-End Close Latency', description: 'Unresolved uncategorized expenses prevent timely financial reporting for small business clients.' },
      { title: 'Staff Burnout & Capacity Caps', description: 'Administrative data entry limits the number of advisory retainers senior accountants can manage.' },
    ],
    solutions: [
      { service: 'Document Intelligence & OCR', action: 'Deploy automated parsing for receipts, bank statements, 1099s, and invoices directly into ledger formats.', outcome: 'Reduces manual receipt and invoice data entry time by up to 75%.' },
      { service: 'Digital Product Engineering', action: 'Build secure, white-labeled client portals with automated upload checklists and encrypted communication.', outcome: 'Accelerates tax document gathering from weeks to under 3 days.' },
      { service: 'Data Engineering & Ledger Sync', action: 'Architect continuous two-way synchronization between QuickBooks, Xero, Stripe, and banking APIs.', outcome: 'Achieves real-time daily cash reconciliation across multi-entity accounts.' },
      { service: 'Workflow Automation', action: 'Engineer rule-based AP approval routing with automated three-way matching between POs, receipts, and invoices.', outcome: 'Prevents duplicate payments and flags billing anomalies automatically.' },
      { service: 'Cloud & Security Governance', action: 'Implement zero-trust security architecture, SOC 2 controls, and encrypted data retention policies.', outcome: 'Safeguards sensitive client tax and banking data against unauthorized access.' },
    ],
    useCases: [
      {
        title: 'Automated Tax Season Document Collection',
        before: 'Accountants sent manual email reminders for 1099-B, W-2, and mortgage interest forms, causing last-minute filing bottlenecks.',
        withUs: 'Created an intelligent client portal that identifies missing schedules, sends automated SMS/email prompts, and validates PDF completeness.',
        result: 'Collected 88% of required tax documents 3 weeks ahead of deadline.',
      },
      {
        title: 'High-Volume Multi-Entity AP Automation',
        before: 'Bookkeepers spent 25 hours weekly entering vendor invoices and manually routing approvals through email threads.',
        withUs: 'Engineered an automated invoice ingestion engine with AI line-item extraction and multi-tier manager approval rules.',
        result: 'Compressed invoice processing cycle from 8 days to 24 hours with zero manual keying errors.',
      },
      {
        title: 'Continuous Daily Bank Reconciliation',
        before: 'Reconciliations occurred only at month-end, creating high stress and multi-day delays in delivering client management accounts.',
        withUs: 'Implemented automated nightly bank transaction feeds with smart categorization algorithms and discrepancy alerts.',
        result: 'Month-end close completed in 2 business days instead of 9.',
      },
    ],
    outcomes: [
      { label: 'Close Cycle Time', value: '50–70% faster', subtext: 'Target reduction in month-end close duration' },
      { label: 'Manual Entry Reduction', value: '60–80% lower', subtext: 'Direct digital ingestion from statements & receipts' },
      { label: 'Audit Compliance', value: '100% trace log', subtext: 'Complete immutable record of all journal adjustments' },
      { label: 'Client Capacity', value: '2x–3x increase', subtext: 'More business clients handled per accountant' },
    ],
    integrations: ['QuickBooks Online', 'Xero', 'Sage Intacct', 'Oracle NetSuite', 'Karbon', 'Canopy Tax', 'Plaid', 'Stripe Billing'],
    compliance: ['GAAP & IFRS Standards', 'SOC 2 Type II', 'GLBA Financial Privacy', 'IRS Publication 4557', 'State Board of Accountancy Rules'],
    faqs: [
      { question: 'Will these automations integrate with QuickBooks Online and Desktop?', answer: 'Yes. We support both QuickBooks Online modern REST APIs and QuickBooks Desktop via secure middleware sync services.' },
      { question: 'How do you handle ambiguous or uncategorized expenses?', answer: 'Our workflows automatically surface questionable transactions into a streamlined client inquiry view, allowing clients to tap and classify expenses directly on mobile.' },
      { question: 'Is client financial data encrypted both in transit and at rest?', answer: 'Yes. All data pipelines use AES-256 encryption at rest and TLS 1.3 in transit, backed by SOC 2 Type II certified infrastructure.' },
      { question: 'Can we white-label the client portal with our firm branding?', answer: 'Absolutely. All client-facing interfaces are fully branded with your firm domain, logo, color palette, and email templates.' },
      { question: 'How do you prevent duplicate invoice payments in automated AP?', answer: 'Our pipelines perform automated three-way matching against existing purchase orders, invoice numbers, and vendor EINs before staging payments.' },
    ],
    finalCta: {
      headline: 'Modernize your accounting workflows and eliminate tax season bottlenecks',
      subheadline: 'Give your accounting team automated tools that eliminate repetitive data entry and elevate client advisory.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&q=80',
        alt: 'Professional accountants analyzing corporate financial statements',
        caption: 'Enterprise financial reconciliation and automated bookkeeping workflows',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1600&q=80',
        alt: 'Digital financial analytics on desktop workstation',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
        alt: 'Financial reporting dashboard and balance sheet data',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=80',
        alt: 'Accountant consulting with enterprise corporate client',
      },
    },
  },

  'law-firms': {
    slug: 'law-firms',
    aliases: ['law', 'legal'],
    name: 'Law Firms',
    category: 'Legal & Professional Services',
    announcement: {
      badge: 'Legal Engineering',
      text: 'Accelerate matter intake, automated conflict checks, and contract intelligence.',
      linkText: 'Explore legal solutions',
    },
    useCaseChips: [
      { id: 'intake', label: 'Client Intake Automation', iconName: 'UserCheck' },
      { id: 'conflicts', label: 'Real-Time Conflict Checks', iconName: 'ShieldAlert' },
      { id: 'docreview', label: 'AI Document & Discovery Review', iconName: 'Search' },
      { id: 'contracts', label: 'Contract Clause Intelligence', iconName: 'FileText' },
      { id: 'billing', label: 'Matter Management & LEDES Billing', iconName: 'Briefcase' },
    ],
    hero: {
      headline: 'Win high-value matters and accelerate case delivery with legal technology',
      subheadline:
        'We engineer secure client intake portals, automated conflict-of-interest screening systems, and document intelligence workflows that integrate natively with Clio, iManage, and NetDocuments.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Assess practice intake workflows, document review bottlenecks, and attorney billable time leakage.' },
      { step: '02', title: 'Design', description: 'Architect encrypted client portals, automated conflict check logic, and document indexing pipelines.' },
      { step: '03', title: 'Build & Integrate', description: 'Integrate securely with Clio, iManage, NetDocuments, and court filing electronic portals.' },
      { step: '04', title: 'Launch & Scale', description: 'Deploy role-based privilege controls, automated audit logging, and partner matter dashboards.' },
    ],
    overview: {
      paragraph1:
        'Law firms face unprecedented pressure to deliver faster outcomes, manage soaring volumes of discovery documents, and maintain strict confidentiality standards. Manual intake processes cause high-value corporate and personal injury leads to look elsewhere when response times exceed a few hours.',
      paragraph2:
        'By modernizing firm operations with digital intake, semantic case search, and automated conflict verification, legal practices protect partner hours for trial prep and strategic negotiation while improving realization rates across every matter.',
    },
    challenges: [
      { title: 'Intake Lead Drop-Off', description: 'Slow qualification and manual conflict checks cause prospective clients to retain competing firms.' },
      { title: 'Unstructured Document Overload', description: 'Litigation teams spend hundreds of hours sifting through emails, PDFs, and medical records manually.' },
      { title: 'Manual Conflict Checks', description: 'Searching firm history across multiple practice groups manually risks ethical violations or missed matters.' },
      { title: 'Billing Discrepancies & LEDES Rejections', description: 'Non-compliant time entries result in fee write-downs from corporate legal departments.' },
    ],
    solutions: [
      { service: 'Digital Product Engineering', action: 'Build secure, responsive client intake portals that qualify matter criteria and capture e-signatures instantly.', outcome: 'Reduces intake qualification cycle from 48 hours to under 30 minutes.' },
      { service: 'Generative AI & Semantic Discovery', action: 'Deploy private, air-gapped vector search for rapid document discovery, deposition summarization, and key clause extraction.', outcome: 'Accelerates first-pass legal document review by up to 60%.' },
      { service: 'Data Engineering & Conflict Checking', action: 'Unify past matters, adverse parties, and client registries into an automated real-time conflict detection engine.', outcome: 'Eliminates ethical conflicts and delivers sub-second conflict verification.' },
      { service: 'Workflow Automation & LEDES Billing', action: 'Automate UTBMS coding validation on attorney time entries prior to invoice generation.', outcome: 'Reduces corporate client invoice rejections and write-downs by 45%.' },
      { service: 'Security & Privileged Data Governance', action: 'Engineer multi-factor zero-trust access, client matter ethical walls, and immutable audit logs.', outcome: 'Ensures full compliance with ABA Model Rules and client security audits.' },
    ],
    useCases: [
      {
        title: 'Personal Injury Rapid Lead Ingestion',
        before: 'Accident leads submitted forms online but waited up to 24 hours for intake staff calls, leading to a 40% loss of retainers.',
        withUs: 'Built an automated intake pipeline that validates accident facts, checks opposing parties, and dispatches digital retainers via SMS.',
        result: 'Increased signed retainer conversion by 52% on qualified inbound cases.',
      },
      {
        title: 'M&A Due Diligence Contract Extraction',
        before: 'Associates manually reviewed thousands of commercial leases and supplier contracts during short due diligence windows.',
        withUs: 'Deployed an internal document intelligence system that automatically flags change-of-control clauses, termination terms, and indemnities.',
        result: 'Cut due diligence document review time in half while flagging critical risk items.',
      },
      {
        title: 'Firm-Wide Automated Conflict Detection',
        before: 'Adverse party checks required emailing all partners across 5 offices, causing 2-day delays before sending engagement letters.',
        withUs: 'Integrated Clio and practice registries into a central searchable entity graph with fuzzy matching and corporate parent mapping.',
        result: 'Instant conflict clearance delivered in under 10 seconds with zero ethical breaches.',
      },
    ],
    outcomes: [
      { label: 'Intake Response', value: '70–85% faster', subtext: 'Target reduction in time from inquiry to partner review' },
      { label: 'Document Review', value: '40–60% speedup', subtext: 'Accelerated discovery and contract clause indexing' },
      { label: 'Conflict Accuracy', value: '100% verified', subtext: 'Comprehensive search across all historical parties' },
      { label: 'Realization Rate', value: '12–18% boost', subtext: 'Fewer billing rejections through automated LEDES rules' },
    ],
    integrations: ['Clio Manage', 'iManage Work', 'NetDocuments', 'PracticePanther', 'Filevine', 'Litify', 'DocuSign', 'LawPay'],
    compliance: ['ABA Model Rules of Professional Conduct', 'Attorney-Client Privilege Standards', 'SOC 2 Type II', 'GDPR & CCPA Privacy', 'HIPAA (Medical Evidence)'],
    faqs: [
      { question: 'How is client data protected when using AI for document review?', answer: 'We deploy private, dedicated cloud or on-premise models that never share or train on your firm data, adhering strictly to attorney-client privilege guidelines.' },
      { question: 'Can our existing practice management software like Clio or iManage sync?', answer: 'Yes. We build native bidirectional connectors with Clio, iManage, NetDocuments, and Filevine to sync matter documents, calendar dates, and contact cards.' },
      { question: 'Does your system support ethical walls between conflicting practice groups?', answer: 'Yes. Role-based access control enforces strict ethical walls, preventing unauthorized attorneys or staff from viewing restricted matters.' },
      { question: 'Can clients sign engagement agreements on their phones?', answer: 'Yes. Our intake workflows integrate DocuSign and Adobe Sign to deliver mobile-friendly engagement letters with instant PDF delivery to both parties.' },
      { question: 'How does the conflict check system handle variations in company names?', answer: 'Our entity resolution engine utilizes phonetic and fuzzy string matching alongside corporate parent/subsidiary hierarchies to detect hidden conflicts.' },
    ],
    finalCta: {
      headline: 'Empower your legal practice with secure, enterprise-grade technology',
      subheadline: 'Accelerate matter intake, streamline document review, and maintain absolute confidentiality.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80',
        alt: 'Modern law firm library and partner meeting room',
        caption: 'Enterprise legal technology, case management, and practice automation',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1453733190371-0a9bedd82893?w=1600&q=80',
        alt: 'Legal contracts and gavel on executive desk',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&q=80',
        alt: 'Attorneys reviewing litigation case briefs in conference room',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80',
        alt: 'Legal counsel signing corporate partnership agreement',
      },
    },
  },

  'recruiting': {
    slug: 'recruiting',
    aliases: ['staffing'],
    name: 'Recruiting / Staffing',
    category: 'Human Capital & Talent Ops',
    announcement: {
      badge: 'Talent Engineering',
      text: 'Accelerate candidate sourcing, automated resume matching, and placement velocity.',
      linkText: 'Explore staffing platforms',
    },
    useCaseChips: [
      { id: 'sourcing', label: 'Automated Candidate Sourcing', iconName: 'Search' },
      { id: 'screening', label: 'Resume & Skill Parsing', iconName: 'FileCheck' },
      { id: 'scheduling', label: 'Interview Calendar Sync', iconName: 'Calendar' },
      { id: 'engagement', label: 'Candidate Nurturing', iconName: 'MessageSquare' },
      { id: 'onboarding', label: 'Contractor Onboarding & Timesheets', iconName: 'Clock' },
    ],
    hero: {
      headline: 'Place top talent faster and scale placement revenue across staffing pipelines',
      subheadline:
        'We engineer modern applicant tracking platforms, automated candidate screening pipelines, and contractor management portals that integrate with Bullhorn, Greenhouse, and Lever.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Analyze your recruiting funnels, recruiter time allocation, and candidate drop-off metrics.' },
      { step: '02', title: 'Design', description: 'Architect automated resume parsing models, candidate engagement journeys, and ATS data sync.' },
      { step: '03', title: 'Build & Integrate', description: 'Develop robust connectors with Bullhorn, Greenhouse, LinkedIn Recruiter, and background-check APIs.' },
      { step: '04', title: 'Launch & Scale', description: 'Roll out recruiter dashboards, candidate self-scheduling, and placement analytics.' },
    ],
    overview: {
      paragraph1:
        'Staffing and executive search firms compete in high-velocity markets where candidate responsiveness determines placement fees. Recruiters lose hours every day toggling between job boards, copy-pasting resumes into ATS records, and sending back-and-forth scheduling emails.',
      paragraph2:
        'By automating resume skill matching, interview coordination, and contractor timesheet compliance, recruitment agencies double their placement velocity while delivering an engaging, professional candidate journey that drives referrals.',
    },
    challenges: [
      { title: 'Resume Sifting Bottlenecks', description: 'Recruiters spend hours manually reviewing unqualified applications instead of speaking with top candidates.' },
      { title: 'Scheduling Friction & Drop-Off', description: 'Coordinating multi-stage interviews across client hiring managers and candidates causes critical drop-offs.' },
      { title: 'Dormant Talent Database', description: 'Valuable past candidates sit un-mined in ATS databases because of poor search and stale contact data.' },
      { title: 'Contractor Compliance Lag', description: 'Managing timesheets, background checks, and I-9 verifications manually delays contract billing start dates.' },
    ],
    solutions: [
      { service: 'Generative AI & Semantic Matching', action: 'Deploy semantic candidate matching that evaluates resumes against job descriptions beyond basic keywords.', outcome: 'Cuts initial candidate screening time by up to 65%.' },
      { service: 'Digital Product Engineering', action: 'Build candidate self-service portals for instant interview scheduling, status tracking, and document submission.', outcome: 'Reduces interview coordination turnaround from 4 days to under 4 hours.' },
      { service: 'Data Engineering & ATS Enrichment', action: 'Unify Bullhorn, Greenhouse, and public talent signals into an automated talent rediscovery engine.', outcome: 'Reactivates 30% of dormant candidate profiles for active open requisitions.' },
      { service: 'Workflow Automation', action: 'Automate background check initiation, offer letter generation, and contractor onboarding checklists.', outcome: 'Accelerates contingent contractor placement starts by 5 days.' },
      { service: 'Quality Engineering & Compliance', action: 'Incorporate automated EEO compliance reporting and anonymized screening workflows.', outcome: 'Ensures equitable, auditable hiring practices across all placements.' },
    ],
    useCases: [
      {
        title: 'High-Volume Tech Staffing Screening',
        before: 'Recruiters received 400+ applications per developer role, taking 5 days to identify and contact top candidates.',
        withUs: 'Implemented automated resume parsing and skills verification that ranks top candidates and invites them to screen within minutes.',
        result: 'Decreased time-to-first-interview from 6 days to 24 hours.',
      },
      {
        title: 'Healthcare Travel Nurse Credentialing',
        before: 'Nurse placement coordinators manually validated licenses, certifications, and immunizations across state registries.',
        withUs: 'Built an automated credentialing portal with automated state board verification and expiration alerts.',
        result: 'Reduced onboarding compliance time by 70% with zero audit infractions.',
      },
      {
        title: 'Dormant ATS Database Re-engagement',
        before: 'Recruiters re-purchased expensive job board postings rather than searching through 50,000 existing resumes in their ATS.',
        withUs: 'Engineered an automated talent match engine that alerts recruiters when existing candidates match new client job orders.',
        result: 'Filled 26% of open orders using existing database candidates with zero external sourcing spend.',
      },
    ],
    outcomes: [
      { label: 'Time-to-Submit', value: '45–60% faster', subtext: 'Target reduction in candidate presentation timeline' },
      { label: 'Candidate Drop-off', value: '30–50% lower', subtext: 'Seamless mobile self-scheduling and instant updates' },
      { label: 'Recruiter Productivity', value: '1.8x–2.4x more', subtext: 'More candidate interviews conducted per recruiter' },
      { label: 'Compliance Adherence', value: '100% auditable', subtext: 'Automated EEO and background check recordkeeping' },
    ],
    integrations: ['Bullhorn ATS', 'Greenhouse', 'Lever', 'Workday HCM', 'LinkedIn Recruiter API', 'Checkr', 'DocuSign', 'QuickBooks Payroll'],
    compliance: ['EEOC Hiring Guidelines', 'FCRA Background Check Rules', 'GDPR & CCPA Data Privacy', 'State Pay Transparency Acts', 'SOC 2 Type II'],
    faqs: [
      { question: 'How do you ensure candidate matching avoids demographic bias?', answer: 'Our semantic parsing algorithms focus strictly on validated skills, work history, and certifications, with optional blind resume modes that conceal demographic indicators.' },
      { question: 'Can our recruiters continue working inside Bullhorn or Greenhouse?', answer: 'Yes. We build native embedded apps and bidirectional sync so recruiters work entirely within their familiar ATS interface.' },
      { question: 'Does the system support automated reference checks?', answer: 'Yes. Automated workflows prompt candidates for references and dispatch digital survey questionnaires with verified audit trails.' },
      { question: 'Can we build custom client submittal portals for hiring managers?', answer: 'Yes. We engineer branded client portals where hiring managers review candidate profiles, watch video intros, and approve interviews with one click.' },
      { question: 'How do you handle multi-state payroll and tax compliance for contract staff?', answer: 'Our onboarding pipelines validate state tax forms, I-9 documents, and insurance coverage before activating worker billing.' },
    ],
    finalCta: {
      headline: 'Accelerate your talent pipeline and outpace the competition',
      subheadline: 'Equip your recruiting teams with automated sourcing, instant screening, and frictionless candidate onboarding.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=80',
        alt: 'Professional recruiting team interviewing candidate in modern office',
        caption: 'Enterprise talent acquisition, applicant tracking, and recruitment operations',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80',
        alt: 'Diverse talent acquisition team collaborating on hiring strategy',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=80',
        alt: 'Recruiter conducting executive search interview',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80',
        alt: 'Hiring managers evaluating candidates on digital platform',
      },
    },
  },

  'construction': {
    slug: 'construction',
    aliases: [],
    name: 'Construction',
    category: 'Architecture, Engineering & Construction',
    announcement: {
      badge: 'Jobsite Platform',
      text: 'Unify bids, project schedules, subcontractor dispatch, and safety compliance.',
      linkText: 'Explore AEC solutions',
    },
    useCaseChips: [
      { id: 'bidding', label: 'Estimating & Bid Management', iconName: 'Calculator' },
      { id: 'scheduling', label: 'Critical Path Scheduling', iconName: 'Calendar' },
      { id: 'rfis', label: 'RFI & Submittal Tracking', iconName: 'FileCheck' },
      { id: 'safety', label: 'Site Safety & Incident Reporting', iconName: 'HardHat' },
      { id: 'subcontractor', label: 'Trade Contractor Coordination', iconName: 'Users' },
    ],
    hero: {
      headline: 'Deliver commercial projects on time and protect builder margins',
      subheadline:
        'We engineer cloud project management platforms, automated field reporting tools, and BIM integration pipelines that connect Procore, Autodesk Construction Cloud, and your jobsite teams.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Audit your field-to-office communication, change order cycles, and subcontractor scheduling pinch points.' },
      { step: '02', title: 'Design', description: 'Architect mobile field reporting apps, automated RFI routing, and live budget tracking models.' },
      { step: '03', title: 'Build & Integrate', description: 'Integrate jobsite data with Procore, Autodesk Build, Primavera P6, and ERP accounting systems.' },
      { step: '04', title: 'Launch & Scale', description: 'Deploy ruggedized mobile interfaces for superintendents and trade leads with automated safety checklists.' },
    ],
    overview: {
      paragraph1:
        'General contractors and commercial builders operate in an environment of volatile material pricing, tight labor supplies, and complex multi-subcontractor coordination. Delays in resolving Requests for Information (RFIs) or approving change orders trigger costly schedule slippage and margin erosion.',
      paragraph2:
        'By equipping field teams with real-time mobile reporting, automated RFI resolution pipelines, and centralized project controls, construction leaders bridge the gap between jobsite trailers and executive offices, keeping projects on schedule and within budget.',
    },
    challenges: [
      { title: 'Field-to-Office Disconnect', description: 'Jobsite logs and daily progress photos trapped in notebooks lead to unbilled change orders.' },
      { title: 'RFI & Submittal Delays', description: 'Architectural questions that sit unanswered in email threads stall active trades on the jobsite.' },
      { title: 'Trade Subcontractor Clashes', description: 'Misaligned schedules result in trades stacking up, site congestion, and wasted mobilization costs.' },
      { title: 'OSHA & Safety Recordkeeping', description: 'Paper-based toolbox talks and incident reports risk costly regulatory fines and insurance spikes.' },
    ],
    solutions: [
      { service: 'Digital Product Engineering', action: 'Build offline-capable mobile field apps for daily logs, progress photo tagging, and subcontractor sign-in.', outcome: 'Eliminates 2 hours of superintendent paperwork per day.' },
      { service: 'Workflow Automation & RFI Tracking', action: 'Automate RFI routing with intelligent drawing sheet linking and architect deadline reminders.', outcome: 'Cuts average RFI turnaround time from 9 days to under 48 hours.' },
      { service: 'Data Engineering & ERP Sync', action: 'Synchronize Procore project costs with Sage 300, Viewpoint, or QuickBooks in real time.', outcome: 'Delivers live job-cost forecasting and prevents unexpected budget overruns.' },
      { service: 'Computer Vision & Progress Tracking', action: 'Process 360-degree site photos against BIM models to verify completed work against schedule.', outcome: 'Identifies work deviations weeks before drywall closing.' },
      { service: 'Safety & Compliance Governance', action: 'Digitize OSHA safety inspection checklists, toolbox talk logs, and automated subcontractor lien waivers.', outcome: 'Achieves 100% jobsite safety compliance and faster bank draw releases.' },
    ],
    useCases: [
      {
        title: 'Commercial Tower Daily Field Log Automation',
        before: 'Superintendents spent 90 minutes each evening typing up daily logs, weather reports, and subcontractor headcounts in job trailers.',
        withUs: 'Deployed an intuitive mobile app that auto-captures weather data, voice-to-text notes, and geofenced trade contractor check-ins.',
        result: 'Saved 10 hours per superintendent weekly and provided real-time owner visibility.',
      },
      {
        title: 'Automated Subcontractor Lien Waiver Collection',
        before: 'Project accountants manually chased paper lien waivers before issuing progress payments, causing payment delays of 3 weeks.',
        withUs: 'Implemented automated digital lien waiver generation linked directly to subcontractor invoice approvals.',
        result: 'Accelerated progress payment release by 14 days and eliminated un-waived mechanic liens.',
      },
      {
        title: 'BIM-to-Field Change Order Verification',
        before: 'Discrepancies between field plumbing runs and architectural plans led to costly rework and contractor finger-pointing.',
        withUs: 'Integrated 3D BIM models on field tablets with automated change-order authorization and instant markups.',
        result: 'Reduced rework expenditures by 34% across a multi-phase hospital expansion.',
      },
    ],
    outcomes: [
      { label: 'RFI Turnaround', value: '40–60% faster', subtext: 'Target reduction in architect response timeline' },
      { label: 'Daily Log Efficiency', value: '75% time saved', subtext: 'Voice-enabled mobile field progress capture' },
      { label: 'Rework Reduction', value: '25–35% lower', subtext: 'Early detection of plan clashes on field tablets' },
      { label: 'Safety Compliance', value: '100% digital audit', subtext: 'Complete OSHA and subcontractor documentation' },
    ],
    integrations: ['Procore', 'Autodesk Construction Cloud', 'Trimble Viewpoint', 'Sage 300 Construction', 'Primavera P6', 'Buildertrend', 'PlanGrid', 'Bluebeam'],
    compliance: ['OSHA Safety Standards', 'Mechanics Lien Waiver Regulations', 'AIA Contract Document Standards', 'ISO 9001 Quality', 'LEED Certification Tracking'],
    faqs: [
      { question: 'Does the mobile application function without jobsite cellular reception?', answer: 'Yes. All mobile field reporting tools operate completely offline, caching logs, photos, and inspections locally and syncing automatically once reconnected.' },
      { question: 'Can our accounting team continue using Sage 300 or Viewpoint?', answer: 'Yes. We engineer bidirectional accounting connectors that sync committed costs, approved change orders, and vendor payments between field tools and your ERP.' },
      { question: 'How do subcontractors access the system without expensive software licenses?', answer: 'We build lightweight web portals where trade contractors submit daily headcounts, sign lien waivers, and view punch items without requiring enterprise seats.' },
      { question: 'Can we track drone footage and 360-degree jobsite progress photos?', answer: 'Yes. Our platform indexes and geotags jobsite imagery directly to corresponding architectural plan sheets and timeline milestones.' },
      { question: 'What measures are in place to document delays for weather or supply disruptions?', answer: 'The system automatically logs verified NOAA weather data and records delivery carrier delays, creating verifiable documentation for contract extension requests.' },
    ],
    finalCta: {
      headline: 'Build with confidence and protect your project margins',
      subheadline: 'Connect your jobsite superintendents, project managers, and trade contractors on one unified platform.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80',
        alt: 'Commercial construction project site with tower cranes and structural steel',
        caption: 'Enterprise construction management, project controls, and field operations',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?w=1600&q=80',
        alt: 'Construction engineers reviewing blueprints on jobsite tablet',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&q=80',
        alt: 'Project manager overseeing concrete pour on structural build',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=1600&q=80',
        alt: 'Modern commercial architectural structure under completion',
      },
    },
  },
};

// Import secondary and final datasets
import { MORE_INDUSTRIES_DATA } from './industries-more';
import { FINAL_INDUSTRIES_DATA } from './industries-final';

// Master unified dictionary
export const ALL_INDUSTRIES_MAP: Record<string, IndustryItem> = {
  ...INDUSTRIES_DATA,
  ...MORE_INDUSTRIES_DATA,
  ...FINAL_INDUSTRIES_DATA,
};

// Explicit Aliases Mapping as specified in Architecture requirements
const ALIAS_LOOKUP: Record<string, string> = {
  'property-management': 'real-estate',
  'bookkeeping': 'accounting',
  'staffing': 'recruiting',
  'healthcare-administration': 'healthcare',
  'health-admin': 'healthcare',
  'manufacturing-operations': 'manufacturing',
  'school-colleges': 'schools-colleges',
  'school-collages': 'schools-colleges',
  'higher-ed': 'schools-colleges',
  'ecommerce-operations': 'ecommerce',
  'finance': 'financial-services',
  'bfsi': 'financial-services',
  'fintech': 'financial-services',
  'law': 'law-firms',
  'legal': 'law-firms',
  'consulting': 'professional-services',
  'it-services': 'professional-services',
  'freight': 'logistics',
  'supply-chain': 'logistics',
  'insurtech': 'insurance',
  'industrial': 'manufacturing',
  'edtech': 'education',
  'online-learning': 'education',
  'e-learning': 'education',
  'hotels': 'hospitality',
  'restaurants': 'hospitality',
  'dealerships': 'automotive',
  'auto-repair': 'automotive',
  'retail': 'ecommerce',
  'd2c': 'ecommerce',
  'field-service-management': 'field-services',
  'hvac': 'field-services',
  'plumbing': 'field-services',
};

// Return matching industry or undefined
export function getIndustryBySlug(slug: string): IndustryItem | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  
  // Direct hit
  if (ALL_INDUSTRIES_MAP[normalized]) {
    return ALL_INDUSTRIES_MAP[normalized];
  }

  // Alias resolution
  const targetSlug = ALIAS_LOOKUP[normalized];
  if (targetSlug && ALL_INDUSTRIES_MAP[targetSlug]) {
    return ALL_INDUSTRIES_MAP[targetSlug];
  }

  // Check aliases array on each item
  return Object.values(ALL_INDUSTRIES_MAP).find(
    (item) => item.slug === normalized || item.aliases.includes(normalized)
  );
}

// Return unique list of all 17 primary industries
export function getAllIndustries(): IndustryItem[] {
  const seen = new Set<string>();
  const list: IndustryItem[] = [];
  
  for (const item of Object.values(ALL_INDUSTRIES_MAP)) {
    if (!seen.has(item.slug)) {
      seen.add(item.slug);
      list.push(item);
    }
  }
  
  return list;
}

