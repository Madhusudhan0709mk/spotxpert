import { IndustryItem } from './industries';

export const MORE_INDUSTRIES_DATA: Record<string, IndustryItem> = {
  'logistics': {
    slug: 'logistics',
    aliases: ['freight', 'supply-chain'],
    name: 'Logistics / Supply Chain',
    category: 'Transportation & Freight',
    announcement: {
      badge: 'Control Tower',
      text: 'Real-time multi-carrier visibility, predictive dispatch, and automated freight settlement.',
      linkText: 'Explore logistics tech',
    },
    useCaseChips: [
      { id: 'tracking', label: 'Multi-Modal Shipment Tracking', iconName: 'Truck' },
      { id: 'dispatch', label: 'Dynamic Route & Load Optimization', iconName: 'Compass' },
      { id: 'pod', label: 'Automated Proof of Delivery', iconName: 'CheckSquare' },
      { id: 'warehouse', label: 'Warehouse WMS Synchronization', iconName: 'Box' },
      { id: 'invoicing', label: 'Freight Audit & Billing Settlement', iconName: 'FileSpreadsheet' },
    ],
    hero: {
      headline: 'Eliminate blind spots across your freight networks and reduce cost per ton-mile',
      subheadline:
        'We engineer cloud logistics control towers, automated dispatch optimization engines, and real-time telematics pipelines that integrate with SAP TM, Oracle WMS, project44, and Samsara.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Analyze your freight lane costs, carrier communication bottlenecks, and warehouse detention dwell times.' },
      { step: '02', title: 'Design', description: 'Architect unified shipper/carrier portals, automated geofence check-ins, and dynamic load-matching models.' },
      { step: '03', title: 'Build & Integrate', description: 'Connect IoT telematics, EDI 204/214/210 feeds, and enterprise ERPs into an event-driven data bus.' },
      { step: '04', title: 'Launch & Scale', description: 'Roll out mobile driver apps, automated freight invoice audits, and predictive exception alerting.' },
    ],
    overview: {
      paragraph1:
        'Third-party logistics providers (3PLs), freight brokers, and fleet operators face compounding pressures from unpredictable fuel surcharges, driver shortages, and strict dock appointment windows. Disconnected spreadsheets and manual check-calls cause prolonged dwell times and billing reconciliation disputes.',
      paragraph2:
        'By building custom logistics visibility platforms, real-time EDI ingestion pipelines, and automated freight auditing, supply chain leaders achieve end-to-end transparency across road, rail, and maritime freight while eliminating avoidable detention and accessorial penalties.',
    },
    challenges: [
      { title: 'In-Transit Blind Spots', description: 'Shippers and dispatchers lack real-time visibility into load status, leading to constant manual phone check-calls.' },
      { title: 'Dock Appointment & Dwell Delays', description: 'Uncoordinated arrival schedules create warehouse congestion, driver detention fees, and missed delivery SLAs.' },
      { title: 'Paper Proof-of-Delivery Bottlenecks', description: 'Waiting for drivers to physical mail or scan paper bills of lading delays invoicing cycles by weeks.' },
      { title: 'Freight Audit Invoicing Discrepancies', description: 'Mismatched accessorial fees, detention charges, and fuel surcharges trigger persistent payment disputes.' },
    ],
    solutions: [
      { service: 'Data Engineering & Telematics Pipelines', action: 'Unify GPS feeds from Samsara, project44, and Geotab into an automated real-time tracking control tower.', outcome: 'Achieves sub-minute ETA predictions and eliminates 80% of manual check-calls.' },
      { service: 'Digital Product Engineering', action: 'Build mobile driver applications with automated OCR bill-of-lading capture and instant digital proof of delivery.', outcome: 'Accelerates shipper invoicing from 14 days down to under 2 hours post-delivery.' },
      { service: 'Workflow Automation & Load Matching', action: 'Implement algorithmic dispatch that matches backhaul capacity with available spot-market freight.', outcome: 'Reduces empty deadhead miles by 18% across contracted carrier lanes.' },
      { service: 'Legacy Modernization & EDI Integration', action: 'Replace brittle legacy batch EDI with modern API-wrapped microservices for EDI 204, 214, and 210.', outcome: 'Eliminates EDI transaction drop-offs and guarantees 99.9% transmission uptime.' },
      { service: 'Cloud & Telematics Scalability', action: 'Deploy high-throughput cloud streaming architectures capable of ingesting millions of telemetry pings per minute.', outcome: 'Provides resilient carrier operations across nationwide logistics networks.' },
    ],
    useCases: [
      {
        title: 'Real-Time Multi-Carrier Geofence Dispatch',
        before: 'Dispatchers called 250 drivers twice daily to verify location and confirm scheduled dock arrivals at distribution centers.',
        withUs: 'Engineered an automated telematics pipeline that triggers automated status updates upon entering and exiting geofenced customer facilities.',
        result: 'Decreased detention charges by 38% and freed dispatchers to focus on exceptions.',
      },
      {
        title: 'Instant Mobile Digital Proof-of-Delivery',
        before: 'Drivers submitted paper BOLs at the end of each week, delaying customer freight invoicing and carrier settlements.',
        withUs: 'Deployed an offline-capable mobile driver app that extracts signatures, timestamps delivery coordinates, and pushes instant PDF confirmations.',
        result: 'Reduced Days Sales Outstanding (DSO) by 12 days across national accounts.',
      },
      {
        title: 'Automated Freight Invoice & Accessorial Audit',
        before: 'Accounting clerks manually audited 15,000 carrier invoices per month, with unspotted billing errors costing hundreds of thousands annually.',
        withUs: 'Built an automated rate-engine validator that matches invoice line items against original rate confirmations and GPS detention timestamps.',
        result: 'Saved $420,000 in duplicate accessorial charges within the first 6 months.',
      },
    ],
    outcomes: [
      { label: 'Detention Fees', value: '30–45% reduction', subtext: 'Target savings through automated dock scheduling' },
      { label: 'Invoicing Speed', value: '85% faster', subtext: 'Digital proof-of-delivery ingestion' },
      { label: 'Deadhead Miles', value: '15–20% decrease', subtext: 'Intelligent backhaul capacity matching' },
      { label: 'Carrier Satisfaction', value: '98% on-time pay', subtext: 'Automated error-free freight settlements' },
    ],
    integrations: ['SAP TM', 'Oracle WMS', 'project44', 'Samsara Telematics', 'FourKites', 'Trimble Transportation', 'McLeod Software', 'MercuryGate'],
    compliance: ['DOT & FMCSA Regulations', 'Electronic Logging Device (ELD) Mandate', 'Customs-Trade Partnership (C-TPAT)', 'E-Way Bill Compliance', 'SOC 2 Type II'],
    faqs: [
      { question: 'Can the platform integrate with mixed telematics devices across brokered carriers?', answer: 'Yes. We ingest data from major telematics providers including Samsara, Geotab, KeepTruckin/Motive, as well as aggregator APIs like project44 and FourKites.' },
      { question: 'Does the driver mobile app support multi-stop LTL routes?', answer: 'Yes. The driver app supports complex multi-stop pickup and drop-off sequences with individual signatures, photo documentation, and piece counts for each stop.' },
      { question: 'How do you handle freight rate adjustments for unexpected accessorials?', answer: 'Our workflows automatically cross-reference detention timestamps and driver lumper receipts against contract rules, auto-approving valid fees and flagging discrepancies.' },
      { question: 'Can customers track their high-value shipments without logging into our TMS?', answer: 'Yes. We generate secure, branded live tracking links with real-time map positions, ETA countdowns, and customizable delivery notification preferences.' },
      { question: 'How is data maintained during network dead zones on rural routes?', answer: 'Mobile apps capture GPS timestamps, signatures, and photos locally with cryptographic tamper seals, synchronizing immediately when connectivity returns.' },
    ],
    finalCta: {
      headline: 'Transform your supply chain into a resilient, real-time operating network',
      subheadline: 'Eliminate freight blind spots, accelerate carrier settlements, and deliver predictable logistics.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80',
        alt: 'High-tech logistics distribution warehouse with automated inventory handling',
        caption: 'Enterprise supply chain control tower, fleet tracking, and warehouse orchestration',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=1600&q=80',
        alt: 'Modern commercial freight trucks on highway logistics corridor',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1600&q=80',
        alt: 'Warehouse logistics operators managing automated storage and retrieval systems',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80',
        alt: 'Intermodal shipping container freight terminal',
      },
    },
  },

  'insurance': {
    slug: 'insurance',
    aliases: ['insurtech'],
    name: 'Insurance',
    category: 'Insurance & Risk Management',
    announcement: {
      badge: 'InsurTech Engine',
      text: 'Accelerate digital underwriting, automated FNOL claims intake, and policy servicing.',
      linkText: 'Explore insurance platforms',
    },
    useCaseChips: [
      { id: 'quoting', label: 'Instant Underwriting & Quoting', iconName: 'Calculator' },
      { id: 'fnol', label: 'First Notice of Loss (FNOL)', iconName: 'AlertCircle' },
      { id: 'fraud', label: 'AI Fraud & Anomaly Detection', iconName: 'ShieldAlert' },
      { id: 'policy', label: 'Self-Service Policy Endorsements', iconName: 'FileCheck' },
      { id: 'renewals', label: 'Automated Renewal Workflows', iconName: 'RefreshCw' },
    ],
    hero: {
      headline: 'Modernize core insurance systems and settle claims in hours, not weeks',
      subheadline:
        'We engineer digital insurance platforms, automated claims triage pipelines, and broker self-service portals that integrate with Guidewire, Duck Creek, Applied Epic, and Salesforce FSC.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Analyze your policy underwriting bottlenecks, claims adjudication latency, and broker friction points.' },
      { step: '02', title: 'Design', description: 'Architect digital FNOL submission flows, automated underwriting scorecards, and multi-line policy portals.' },
      { step: '03', title: 'Build & Integrate', description: 'Integrate securely with Guidewire, Duck Creek, credit bureaus, telematics, and payment gateways.' },
      { step: '04', title: 'Launch & Scale', description: 'Deploy policyholder self-service, fraud anomaly dashboards, and automated reinsurance reporting.' },
    ],
    overview: {
      paragraph1:
        'Insurers and MGAs struggle with legacy policy administration systems that require weeks to introduce new coverage endorsements or process routine claim payments. Manual first notice of loss (FNOL) intake and fragmented claim documentation lead to bloated loss adjustment expense (LAE) ratios.',
      paragraph2:
        'By deploying modern digital insurance portals, automated claims intake pipelines, and predictive risk scoring engines, carriers reduce cycle times from weeks to minutes while empowering adjusters to detect fraud early and delight policyholders.',
    },
    challenges: [
      { title: 'Sluggish Claims Cycle Times', description: 'Policyholders wait weeks for paper estimates and physical checks, inflating operational LAE and lowering retention.' },
      { title: 'Rigid Policy Admin Legacy Systems', description: 'Introducing new endorsements or updating rating tables in legacy mainframes requires months of development.' },
      { title: 'Sophisticated Fraud Losses', description: 'Organized claims fraud and inflated repair estimates slip through manual sampling reviews.' },
      { title: 'Broker Channel Friction', description: 'Independent agents abandon quoting portals that require duplicate data entry across rating engines.' },
    ],
    solutions: [
      { service: 'Digital Product Engineering', action: 'Build mobile-first policyholder portals with self-service claims submission, photo damage upload, and instant status tracking.', outcome: 'Cuts routine claim inquiry calls to customer service by 50%.' },
      { service: 'Machine Learning & Fraud Analytics', action: 'Deploy anomaly detection models that score claims at FNOL against historical fraud patterns and image metadata.', outcome: 'Flags suspicious claims within 60 seconds with an 85% validation accuracy.' },
      { service: 'Workflow Automation & Straight-Through Processing', action: 'Automate low-complexity, low-limit claim approvals and instant digital debit card payouts.', outcome: 'Enables straight-through settlement for 35% of routine property and auto claims.' },
      { service: 'Data Engineering & Core System Sync', action: 'Unify disparate underwriting, claims, and reinsurance ledgers into a single Guidewire or Duck Creek data lakehouse.', outcome: 'Delivers real-time combined ratio and loss reserve analytics.' },
      { service: 'Regulatory & Privacy Governance', action: 'Implement immutable claims audit trails, PCI-DSS payment compliance, and strict state insurance regulatory reporting.', outcome: 'Ensures zero non-compliance penalties during market conduct examinations.' },
    ],
    useCases: [
      {
        title: 'Digital Auto Collision FNOL & Instant Estimate',
        before: 'Accident victims waited on hold for 30 minutes, then waited 5 days for a field adjuster to visit the auto body repair shop.',
        withUs: 'Built an intuitive mobile FNOL flow where policyholders upload damage photos, receive AI repair cost estimates, and select approved repair shops.',
        result: 'Reduced first contact to appraisal time from 5 days to 4 hours.',
      },
      {
        title: 'Commercial Property Straight-Through Quoting',
        before: 'Commercial brokers waited 7 to 10 days for underwriters to manually review building risk parameters and loss runs.',
        withUs: 'Integrated public property data, satellite imagery, and risk algorithms into a broker portal that auto-quotes 70% of standard commercial risks.',
        result: 'Boosted broker quote submission volume by 3x and increased bind rates.',
      },
      {
        title: 'Automated Subrogation & Salvage Recovery',
        before: 'Subrogation claims against third-party insurers were managed in spreadsheets, leaving millions in uncollected recoveries.',
        withUs: 'Engineered an automated recovery tracker that monitors third-party carrier response deadlines and stages automated demands.',
        result: 'Recovered $1.8M in subrogation balances within the first year of deployment.',
      },
    ],
    outcomes: [
      { label: 'FNOL Cycle Time', value: '60–80% faster', subtext: 'Target reduction from incident to claim assignment' },
      { label: 'LAE Reduction', value: '20–30% savings', subtext: 'Lower loss adjustment operational expenses' },
      { label: 'Straight-Through Settlement', value: '30–45% of claims', subtext: 'Low-limit routine claims resolved automatically' },
      { label: 'Retention Rate', value: '15% improvement', subtext: 'Policyholders who experience fast digital claims' },
    ],
    integrations: ['Guidewire PolicyCenter', 'Duck Creek Suite', 'Applied Epic', 'Salesforce Financial Services Cloud', 'Vertafore AMS360', 'Snapsheet', 'LexisNexis Risk Solutions', 'Stripe Payments'],
    compliance: ['NAIC & State Insurance Regulations', 'PCI-DSS Payment Standards', 'SOC 2 Type II', 'GLBA Financial Privacy', 'Insurance Fraud Bureau Standards'],
    faqs: [
      { question: 'Can the digital portal connect with on-premise Guidewire or legacy AS400 cores?', answer: 'Yes. We architect secure enterprise API adapters and microservices that interface with both modern cloud Guidewire instances and legacy on-premise policy engines.' },
      { question: 'How do you prevent fraudulent photo manipulation in digital claims?', answer: 'Our intake pipelines inspect image EXIF metadata, timestamp validity, geofence coordinates, and run reverse-image searches to detect reused or edited photos.' },
      { question: 'Can policyholders receive claim settlements via instant bank transfer or debit push?', answer: 'Yes. We integrate push-to-card and instant ACH rails, allowing approved policyholders to receive claim payments in their accounts within minutes.' },
      { question: 'Does your solution support independent broker quoting portals?', answer: 'Yes. We develop frictionless single-sign-on broker portals that pull multi-carrier rates, validate business eligibility, and generate bindable quote proposals.' },
      { question: 'How do you maintain compliance across differing state insurance mandates?', answer: 'Our underwriting and claims rule engines are configurable by jurisdiction, automatically enforcing state-specific policy language, cancellation notices, and disclosure laws.' },
    ],
    finalCta: {
      headline: 'Empower policyholders and brokers with modern digital insurance operations',
      subheadline: 'Accelerate underwriting, settle claims in hours, and lower loss adjustment operational costs.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1600&q=80',
        alt: 'Insurance underwriters evaluating portfolio risk and policy coverage',
        caption: 'Enterprise InsurTech platforms, automated claims triage, and policy lifecycle operations',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
        alt: 'Insurance risk analyst reviewing actuarial models on tablet',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1556742049-0a67e5577ffc?w=1600&q=80',
        alt: 'Claims specialist processing digital settlement verification',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
        alt: 'Global commercial insurance headquarters',
      },
    },
  },

  'healthcare': {
    slug: 'healthcare',
    aliases: ['healthcare-administration', 'health-admin'],
    name: 'Healthcare Administration',
    category: 'Healthcare & Clinical Operations',
    announcement: {
      badge: 'Healthcare Ops',
      text: 'HIPAA-compliant patient scheduling, automated prior authorization, and denial management.',
      linkText: 'Explore healthcare ops',
    },
    useCaseChips: [
      { id: 'scheduling', label: 'Patient Self-Scheduling', iconName: 'Calendar' },
      { id: 'eligibility', label: 'Real-Time Insurance Eligibility', iconName: 'CreditCard' },
      { id: 'priorauth', label: 'Automated Prior Authorization', iconName: 'FileCheck' },
      { id: 'denials', label: 'Claims & Denial Management', iconName: 'AlertTriangle' },
      { id: 'revenue', label: 'Revenue Cycle Optimization (RCM)', iconName: 'DollarSign' },
    ],
    hero: {
      headline: 'Streamline administrative workflows and accelerate healthcare revenue cycles',
      subheadline:
        'We engineer HIPAA-compliant patient intake platforms, automated insurance eligibility verification engines, and prior authorization workflows that integrate with Epic, Cerner/Oracle Health, athenahealth, and Kareo.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Map patient intake bottlenecks, high-volume claim denial codes, and clinic scheduling gaps.' },
      { step: '02', title: 'Design', description: 'Architect frictionless patient self-service, EDI 270/271 eligibility pipelines, and denial resolution workflows.' },
      { step: '03', title: 'Build & Integrate', description: 'Connect HL7/FHIR APIs with Epic, Cerner, athenahealth, and national payer clearinghouses.' },
      { step: '04', title: 'Launch & Scale', description: 'Deploy role-based clinical staff portals, patient check-in kiosks, and automated RCM dashboards.' },
    ],
    overview: {
      paragraph1:
        'Hospitals, ambulatory surgery centers, and specialty medical groups lose billions annually to administrative inefficiencies, claims denials, and manual prior authorization delays. Front-desk staff spend up to 40% of their workday on payer phone holds verifying patient insurance coverage.',
      paragraph2:
        'By modernizing healthcare administrative operations with automated insurance verification, digital check-in, and algorithmic denial tracking, healthcare organizations protect clinical revenue, reduce staff burnout, and deliver transparent patient care journeys without medical compromise.',
    },
    challenges: [
      { title: 'Prior Authorization Delays', description: 'Lengthy payer approval cycles delay critical diagnostic procedures and frustrate patients and physicians.' },
      { title: 'High Claim Denial Rates', description: 'Inaccurate demographic data or missed eligibility terms lead to rejected claims that require costly rework.' },
      { title: 'Patient Scheduling No-Shows', description: 'Complex phone scheduling systems cause appointment drop-offs and leave expensive diagnostic equipment underutilized.' },
      { title: 'Administrative Staff Burnout', description: 'Exhaustive data entry across disconnected electronic health records (EHRs) causes high staff turnover.' },
    ],
    solutions: [
      { service: 'FHIR & Health Data Integration', action: 'Build bidirectional FHIR and HL7 interfaces that sync patient demographics, appointments, and insurance cards with Epic and Cerner.', outcome: 'Eliminates dual-data entry and guarantees 100% EHR synchronization.' },
      { service: 'Digital Product Engineering', action: 'Create white-labeled patient self-service portals with digital consent signing, copay payment, and appointment scheduling.', outcome: 'Reduces front-desk check-in registration times from 15 minutes to under 2 minutes.' },
      { service: 'Workflow Automation & Prior Authorization', action: 'Automate prior authorization clinical documentation packaging and electronic submission via EDI 278.', outcome: 'Cuts prior authorization turnaround time from 6 days to under 24 hours.' },
      { service: 'Data Engineering & RCM Analytics', action: 'Aggregate historical 835 remittance data into predictive denial dashboards that highlight recurring payer rejection patterns.', outcome: 'Reduces first-pass claim denial rates by up to 35%.' },
      { service: 'HIPAA & Zero-Trust Security Architecture', action: 'Deploy SOC 2 Type II and HIPAA-compliant cloud hosting with end-to-end PHI encryption and BAA backing.', outcome: 'Maintains 100% regulatory data protection across all patient touchpoints.' },
    ],
    useCases: [
      {
        title: 'Multi-Clinic Real-Time Insurance Eligibility Check',
        before: 'Front-desk coordinators manually verified insurance cards via phone or payer portals on the day of patient visits, causing long wait times.',
        withUs: 'Implemented automated nightly batch EDI 270/271 eligibility verification that flags expired coverage and deductible balances 48 hours prior.',
        result: 'Reduced day-of-visit check-in delays by 65% and boosted copay point-of-sale collections.',
      },
      {
        title: 'Diagnostic Imaging Prior Authorization Engine',
        before: 'MRI and CT authorization requests sat in queue for up to 9 business days, causing procedure reschedules and patient anxiety.',
        withUs: 'Engineered an automated rule engine that extracts physician notes, attaches required clinical indicators, and submits via payer portals.',
        result: 'Accelerated prior authorization approvals by 70%, keeping imaging scanners at 94% capacity.',
      },
      {
        title: 'Predictive Claims Denial Prevention Workflow',
        before: 'A 200-physician group experienced a 14% initial claims rejection rate, requiring $40 per claim in manual appeal costs.',
        withUs: 'Integrated pre-submission claim scrubbing algorithms that validate CPT/ICD-10 cross-walks and medical necessity rules before billing.',
        result: 'Reduced first-pass claim denials to 4.2%, recovering $2.4M in annual operating cash flow.',
      },
    ],
    outcomes: [
      { label: 'Check-In Speed', value: '70–80% faster', subtext: 'Target reduction in front-desk patient registration' },
      { label: 'Claim Denial Rate', value: '30–45% decrease', subtext: 'Automated pre-billing claim scrubbing' },
      { label: 'Prior Auth Turnaround', value: '50–70% speedup', subtext: 'Electronic clinical document compilation' },
      { label: 'HIPAA Compliance', value: '100% certified', subtext: 'Zero PHI exposure with immutable access logging' },
    ],
    integrations: ['Epic Systems (FHIR)', 'Cerner / Oracle Health', 'athenahealth', 'Kareo / Tebra', 'NextGen Healthcare', 'eClinicalWorks', 'Change Healthcare / Optum', 'Waystar RCM'],
    compliance: ['HIPAA & HITECH Acts', 'SOC 2 Type II', 'HL7 FHIR Interoperability Standards', 'ABDM (Ayushman Bharat Digital Mission)', 'PCI-DSS (Copayments)'],
    faqs: [
      { question: 'Do you make medical diagnoses or clinical recommendations?', answer: 'No. Our software is strictly non-clinical administrative technology designed solely to optimize scheduling, insurance verification, billing, and practice operations.' },
      { question: 'Can our hospital connect directly via SMART on FHIR APIs?', answer: 'Yes. We support standard SMART on FHIR and HL7 V2/V3 protocols, enabling seamless integration into existing Epic, Cerner, and athenahealth environments.' },
      { question: 'Do you sign Business Associate Agreements (BAAs)?', answer: 'Yes. We execute formal BAAs with all healthcare clients, ensuring end-to-end legal and technical compliance with HIPAA privacy and security rules.' },
      { question: 'How do you handle copayment and patient balance collection?', answer: 'Our patient portals integrate with healthcare-compliant payment processors, allowing patients to securely pay copays, view estimates, or set up installment plans.' },
      { question: 'Can the system automate appeals for denied insurance claims?', answer: 'Yes. Our RCM workflows automatically categorize denial reason codes (CARCs/RARCs) and generate structured appeal packets with the required clinical documentation.' },
    ],
    finalCta: {
      headline: 'Transform your healthcare administrative operations into a frictionless experience',
      subheadline: 'Eliminate front-desk bottlenecks, reduce claim denials, and accelerate revenue recovery.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80',
        alt: 'Modern hospital administrative center and healthcare reception',
        caption: 'Enterprise healthcare administration, patient access, and revenue cycle management',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1600&q=80',
        alt: 'Healthcare administrator reviewing digital health records on terminal',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80',
        alt: 'Clinic team reviewing scheduling and patient flow analytics',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1600&q=80',
        alt: 'Hospital medical center building and patient care facilities',
      },
    },
  },

  'professional-services': {
    slug: 'professional-services',
    aliases: ['consulting', 'it-services'],
    name: 'Professional Services',
    category: 'Consulting, Agencies & Advisory',
    announcement: {
      badge: 'Agency Engine',
      text: 'Optimize billable utilization, project delivery milestones, and client retainers.',
      linkText: 'Explore consulting tech',
    },
    useCaseChips: [
      { id: 'proposals', label: 'Proposal & Scope Builder', iconName: 'FileText' },
      { id: 'utilization', label: 'Resource Utilization Tracking', iconName: 'Users' },
      { id: 'delivery', label: 'Agile Project Delivery Controls', iconName: 'CheckCircle' },
      { id: 'timesheets', label: 'Automated Timesheet Logging', iconName: 'Clock' },
      { id: 'retainers', label: 'Client Retainer & Milestone Billing', iconName: 'DollarSign' },
    ],
    hero: {
      headline: 'Maximize partner realization and scale client delivery without margin drift',
      subheadline:
        'We engineer professional services automation (PSA) platforms, resource management engines, and client collaboration portals that integrate with Salesforce, HubSpot, Jira, Kantata, and Harvest.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Analyze your proposal pipeline, unbilled project scope creep, and resource allocation blind spots.' },
      { step: '02', title: 'Design', description: 'Architect unified client portals, capacity forecasting models, and automated milestone billing triggers.' },
      { step: '03', title: 'Build & Integrate', description: 'Connect CRM, project tracking (Jira/Asana), timesheets, and accounting systems into a single hub.' },
      { step: '04', title: 'Launch & Scale', description: 'Deploy partner profitability dashboards, automated client deliverables review, and SLA alerts.' },
    ],
    overview: {
      paragraph1:
        'Management consultancies, digital agencies, and engineering services firms face constant threats from untracked scope creep, bench under-utilization, and delayed client milestone sign-offs. Fragmented project tools lead to billing leakage and misaligned resource forecasts.',
      paragraph2:
        'By implementing unified professional services automation platforms, automated time tracking, and real-time project profitability analytics, advisory leaders maintain 80%+ billable utilization while delivering transparent client experiences that drive retainer renewals.',
    },
    challenges: [
      { title: 'Scope Creep & Margin Erosion', description: 'Unbudgeted client change requests go un-billed because project leads lack real-time budget tracking.' },
      { title: 'Sub-Optimal Bench Utilization', description: 'Siloed staffing schedules leave valuable senior consultants on the bench between active client engagements.' },
      { title: 'Delayed Milestone Invoicing', description: 'Client review bottlenecks stall formal acceptance sign-offs and delay milestone revenue recognition.' },
      { title: 'Fragmented Client Communication', description: 'Deliverables shared over email and chat channels create version-control chaos and NDA audit risks.' },
    ],
    solutions: [
      { service: 'Digital Product Engineering', action: 'Build bespoke client collaboration portals with milestone tracking, deliverable sign-offs, and file repositories.', outcome: 'Compresses client deliverable approval cycles from 10 days to under 48 hours.' },
      { service: 'Data Engineering & PSA Analytics', action: 'Unify Jira, Harvest, and Salesforce data into real-time partner utilization and gross margin dashboards.', outcome: 'Provides daily visibility into project budget health and consultant capacity.' },
      { service: 'Workflow Automation & Scoping', action: 'Automate statement-of-work (SOW) generation with standardized rate cards and multi-tier partner approvals.', outcome: 'Accelerates proposal turnaround time from 2 weeks to 2 business days.' },
      { service: 'Generative AI & Knowledge Management', action: 'Deploy internal semantic search over past deliverables, proposals, and case benchmarks.', outcome: 'Cuts proposal preparation and desk research time by up to 50%.' },
      { service: 'Security & Client Confidentiality', action: 'Implement granular project-level role permissions, data segregation, and automated client NDA enforcement.', outcome: 'Guarantees compliance with strict Fortune 500 client security master service agreements.' },
    ],
    useCases: [
      {
        title: 'Global Advisory Practice Resource Optimization',
        before: 'Staffing directors used static spreadsheets to allocate 350 consultants across 60 active international client engagements.',
        withUs: 'Engineered an automated capacity planning platform that matches consultant skills and availability against pipeline opportunities.',
        result: 'Boosted overall billable utilization by 9% across the firm, generating $3.2M in annual revenue.',
      },
      {
        title: 'Client Deliverable Approval & Retainer Burn Portal',
        before: 'Clients disputed monthly retainer invoices because they lacked visibility into active sprint progress and hours logged.',
        withUs: 'Built a branded client portal with transparent real-time sprint burndown, deliverable previews, and 1-click digital sign-offs.',
        result: 'Reduced invoice disputes by 75% and accelerated client payment turnaround.',
      },
      {
        title: 'Automated Timesheet Compliance & Billing Run',
        before: 'Billing specialists spent 4 days each month chasing missing consultant timesheets before generating client invoices.',
        withUs: 'Integrated automated calendar and code-commit activity scrapers with smart reminders that auto-stage draft timesheets.',
        result: 'Achieved 97% on-time timesheet submission and closed client billing in 24 hours.',
      },
    ],
    outcomes: [
      { label: 'Billable Utilization', value: '8–12% increase', subtext: 'Target improvement in billable consultant capacity' },
      { label: 'Proposal Turnaround', value: '60–75% faster', subtext: 'Accelerated SOW generation and pricing review' },
      { label: 'Billing Leakage', value: '70% reduction', subtext: 'Automated tracking of out-of-scope change requests' },
      { label: 'Client Retention', value: '20% higher', subtext: 'Greater project transparency and faster milestone delivery' },
    ],
    integrations: ['Salesforce CRM', 'HubSpot Enterprise', 'Jira Software', 'Kantata (Mavenlink)', 'Harvest', 'Asana', 'NetSuite OpenAir', 'Stripe Invoicing'],
    compliance: ['SOC 2 Type II', 'ISO 27001 Security', 'GDPR & Privacy Standards', 'Client Confidentiality & NDA Rules', 'GAAP Revenue Recognition (ASC 606)'],
    faqs: [
      { question: 'Can the client portal restrict access by project or engagement tier?', answer: 'Yes. Our portals feature granular role-based permissions, allowing clients to see only their assigned projects, deliverables, and billing statements.' },
      { question: 'How do you handle revenue recognition under ASC 606 standards?', answer: 'Our pipelines calculate percentage-of-completion and milestone completion dates automatically, feeding structured revenue schedules into your accounting ERP.' },
      { question: 'Can the system suggest staff allocations based on required technical skillsets?', answer: 'Yes. Our resource matching algorithm evaluates consultant past project experience, certifications, and availability to recommend ideal project staffing.' },
      { question: 'Will our consultants have to log time in multiple systems?', answer: 'No. We provide single-entry timesheet logging that automatically syncs across Jira, your PSA tool, and your accounting software simultaneously.' },
      { question: 'How are client NDAs and confidential data segregated?', answer: 'We enforce strict multi-tenant or dedicated data partitions with cryptographic isolation, ensuring project assets are never accessible across unauthorized teams.' },
    ],
    finalCta: {
      headline: 'Elevate your firm profitability and deliver exceptional client outcomes',
      subheadline: 'Eliminate billing leakage, optimize consultant utilization, and streamline client milestone delivery.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80',
        alt: 'Executive consulting leadership team collaborating in modern conference room',
        caption: 'Enterprise professional services automation, utilization management, and client delivery',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80',
        alt: 'Advisory consultants presenting strategic digital roadmap to client',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=1600&q=80',
        alt: 'Product delivery lead reviewing agile sprint burndown chart',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=80',
        alt: 'Modern global professional services corporate boardroom',
      },
    },
  },
};
