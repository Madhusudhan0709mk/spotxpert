import { IndustryItem } from './industries';

export const FINAL_INDUSTRIES_DATA: Record<string, IndustryItem> = {
  'manufacturing': {
    slug: 'manufacturing',
    aliases: ['manufacturing-operations', 'industrial'],
    name: 'Manufacturing Operations',
    category: 'Industrial Manufacturing & Operations',
    announcement: {
      badge: 'Smart Factory',
      text: 'Predictive machine maintenance, shop-floor quality vision, and real-time ERP sync.',
      linkText: 'Explore plant tech',
    },
    useCaseChips: [
      { id: 'planning', label: 'Production Scheduling & MRP', iconName: 'Calendar' },
      { id: 'maintenance', label: 'Predictive Equipment Maintenance', iconName: 'Cpu' },
      { id: 'quality', label: 'Automated Vision Quality Inspection', iconName: 'CheckCircle' },
      { id: 'inventory', label: 'Raw Material Inventory Sync', iconName: 'Layers' },
      { id: 'shopfloor', label: 'Shop-Floor Telemetry & OEE', iconName: 'Activity' },
    ],
    hero: {
      headline: 'Maximize overall equipment effectiveness (OEE) and eliminate unplanned plant downtime',
      subheadline:
        'We engineer smart manufacturing platforms, IoT sensor telemetry pipelines, and computer vision quality inspection systems that integrate with SAP S/4HANA, Siemens MES, and Oracle.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Analyze your plant bottlenecks, machine downtime metrics, and manual quality inspection logs.' },
      { step: '02', title: 'Design', description: 'Architect edge-to-cloud IoT data pipelines, predictive maintenance algorithms, and shop-floor operator tablets.' },
      { step: '03', title: 'Build & Integrate', description: 'Connect industrial PLCs, SCADA systems, and enterprise ERPs via secure MQTT/OPC-UA protocols.' },
      { step: '04', title: 'Launch & Scale', description: 'Deploy real-time OEE dashboards, automated scrap alerts, and supplier replenishment triggers.' },
    ],
    overview: {
      paragraph1:
        'Modern manufacturing plants and discrete assembly operations face intense pressure from supply chain disruptions, tight production margins, and strict defect tolerance. When a critical production line stops unexpectedly, every minute can cost thousands of dollars in wasted operator labor and delayed shipments.',
      paragraph2:
        'By deploying edge IoT telemetry, computer vision quality gates, and automated ERP work order dispatch, manufacturing leaders transform raw sensor data into predictive insights, keeping production lines humming at peak efficiency and zero defect rates.',
    },
    challenges: [
      { title: 'Costly Unplanned Downtime', description: 'Critical pumps, CNC spindles, and presses fail without warning because maintenance relies on reactive schedules.' },
      { title: 'Manual Quality Inspection Escapes', description: 'Human visual inspection on high-speed lines leads to micro-defects slipping through to finished goods.' },
      { title: 'Shop-Floor Data Silos', description: 'Legacy PLCs and machine controllers do not communicate with central SAP or Oracle ERP software.' },
      { title: 'Raw Material Stockouts', description: 'Mismatched inventory counts between physical stock and ERP records cause last-minute production halts.' },
    ],
    solutions: [
      { service: 'IoT Edge & Telemetry Pipelines', action: 'Ingest high-frequency vibration, temperature, and current sensors over industrial MQTT/OPC-UA protocols.', outcome: 'Detects equipment anomalies up to 14 days before catastrophic failure.' },
      { service: 'Computer Vision & Automated Inspection', action: 'Deploy high-resolution optical cameras with neural vision models at production line inspection gates.', outcome: 'Catches surface scratches and dimensional flaws in under 50 milliseconds.' },
      { service: 'Data Engineering & OEE Analytics', action: 'Unify machine telemetry and operator logs into real-time Overall Equipment Effectiveness (OEE) dashboards.', outcome: 'Increases factory-wide line availability by up to 12%.' },
      { service: 'Legacy Modernization & MES Integration', action: 'Build modern API layers over legacy Siemens, Rockwell, and Wonderware SCADA systems.', outcome: 'Enables bidirectional synchronization between plant machines and SAP S/4HANA.' },
      { service: 'Quality & Industrial Safety Compliance', action: 'Digitize ISO 9001 quality audits, OSHA compliance checks, and automated machine guard interlocks.', outcome: 'Provides 100% auditable traceability for every manufactured serial number.' },
    ],
    useCases: [
      {
        title: 'Predictive Spindle Maintenance in Automotive Parts',
        before: 'CNC spindle bearings failed unpredictably twice a month, shutting down an entire engine block machining line for 18 hours.',
        withUs: 'Installed high-frequency acoustic and vibration sensors linked to an edge anomaly model that alerts technicians to wear patterns.',
        result: 'Eliminated 92% of unplanned spindle downtime, saving $680,000 annually.',
      },
      {
        title: 'High-Speed Automated Vision Quality Inspection',
        before: 'Three human inspectors attempted to visually inspect 120 stamped metal brackets per minute, missing 2.5% of critical micro-cracks.',
        withUs: 'Deployed an industrial computer vision station that inspects dimensions and surface finish with 99.8% precision.',
        result: 'Reduced customer quality returns to zero and cut inspection labor costs by 60%.',
      },
      {
        title: 'Automated Shop-Floor Inventory Replenishment',
        before: 'Assembly workers manually logged low fastener bins, often discovering shortages only after production lines ran dry.',
        withUs: 'Implemented smart weight-sensor bins connected directly to the central ERP supplier automated reordering pipeline.',
        result: 'Zero production stoppages caused by component stockouts across 4 plant facilities.',
      },
    ],
    outcomes: [
      { label: 'Unplanned Downtime', value: '30–50% reduction', subtext: 'Target decrease through predictive IoT vibration monitoring' },
      { label: 'Defect Escape Rate', value: '75–90% lower', subtext: 'Automated computer vision quality gates' },
      { label: 'OEE Improvement', value: '8–14% increase', subtext: 'Optimized production line availability and cycle speed' },
      { label: 'Audit Traceability', value: '100% digital history', subtext: 'Complete batch genealogy from raw materials to shipment' },
    ],
    integrations: ['SAP S/4HANA', 'Oracle Manufacturing Cloud', 'Siemens Opcenter MES', 'Rockwell Automation FactoryTalk', 'Microsoft Dynamics 365 Supply Chain', 'Infor CloudSuite Industrial', 'AVEVA Wonderware', 'PTC ThingWorx'],
    compliance: ['ISO 9001 (Quality Management)', 'ISO 14001 (Environmental)', 'IATF 16949 (Automotive Quality)', 'OSHA Machine Safety Regulations', 'SOC 2 Type II'],
    faqs: [
      { question: 'Can you extract data from older legacy machines without modern network cards?', answer: 'Yes. We deploy non-invasive IoT edge gateways with current clamps, vibration accelerometers, and optical sensors that require zero modifications to machine PLC logic.' },
      { question: 'Does the computer vision inspection system require cloud connectivity?', answer: 'No. All vision inference runs locally on industrial edge hardware (NVIDIA Jetson / IPCs) with sub-100ms response times, syncing summaries to the cloud asynchronously.' },
      { question: 'How do you handle cybersecurity between the factory OT network and enterprise IT?', answer: 'We follow ISA/IEC 62443 industrial security standards, utilizing unidirectional data diodes, DMZ network segmentation, and zero-trust certificates to ensure complete OT isolation.' },
      { question: 'Can our plant managers view real-time production numbers on their phones?', answer: 'Yes. We build responsive mobile web applications with live line speeds, scrap tallies, shift targets, and critical downtime push notifications.' },
      { question: 'How quickly can a predictive maintenance pilot be deployed on a single production line?', answer: 'A targeted pilot on 3–5 high-criticality assets typically goes live within 4 to 6 weeks, providing measurable baseline telemetry and anomaly detection.' },
    ],
    finalCta: {
      headline: 'Build a resilient, data-driven factory that runs at peak efficiency',
      subheadline: 'Eliminate surprise downtime, catch quality defects early, and connect your shop floor to the cloud.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80',
        alt: 'Smart automated manufacturing facility with industrial robotic arms',
        caption: 'Enterprise manufacturing execution systems, IoT telemetry, and industrial automation',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1600&q=80',
        alt: 'Industrial engineer monitoring assembly line production controls',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?w=1600&q=80',
        alt: 'High-precision metal fabrication and manufacturing machinery',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=1600&q=80',
        alt: 'Plant operations manager reviewing factory floor metrics on tablet',
      },
    },
  },

  'schools-colleges': {
    slug: 'schools-colleges',
    aliases: ['school-colleges', 'school-collages', 'higher-ed'],
    name: 'Schools & Colleges',
    category: 'Higher Education & Institutional Campus',
    announcement: {
      badge: 'Campus Operations',
      text: 'Unified student admissions, automated fee billing, and accreditation reporting.',
      linkText: 'Explore campus systems',
    },
    useCaseChips: [
      { id: 'admissions', label: 'Admissions & Enrollment Ingestion', iconName: 'GraduationCap' },
      { id: 'fees', label: 'Digital Fee Collection & Installments', iconName: 'CreditCard' },
      { id: 'timetables', label: 'Automated Timetable Generation', iconName: 'Calendar' },
      { id: 'attendance', label: 'Smart Campus Attendance', iconName: 'UserCheck' },
      { id: 'accreditation', label: 'Accreditation & Compliance Reports', iconName: 'FileCheck' },
    ],
    hero: {
      headline: 'Modernize institutional campus administration and empower student success',
      subheadline:
        'We engineer student information system (SIS) platforms, automated enrollment portals, and institutional analytics engines that integrate with Ellucian Banner, PowerSchool, Blackbaud, and Canvas.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Analyze your admissions pipeline, registrar bottlenecks, and fee collection reconciliation cycles.' },
      { step: '02', title: 'Design', description: 'Architect self-service student/parent portals, automated timetable scheduling, and degree audit models.' },
      { step: '03', title: 'Build & Integrate', description: 'Integrate securely with Ellucian, PowerSchool, Canvas, payment gateways, and state reporting APIs.' },
      { step: '04', title: 'Launch & Scale', description: 'Roll out student mobile apps, faculty grading portals, and automated accreditation compliance dashboards.' },
    ],
    overview: {
      paragraph1:
        'Universities, colleges, and K-12 school districts manage thousands of student records, financial aid applications, and complex academic schedules across fragmented legacy databases. Slow admissions processing and manual transcript evaluations lead prospective students to enroll at competing institutions.',
      paragraph2:
        'By modernizing campus technology with unified student information portals, automated fee collection pipelines, and centralized accreditation reporting, educational institutions cut administrative overhead, boost enrollment yields, and provide a digital-first student experience.',
    },
    challenges: [
      { title: 'Admissions Funnel Drop-Off', description: 'Manual transcript evaluation and disjointed financial aid forms lead to applicant attrition.' },
      { title: 'Delinquent Fee Collection', description: 'Complex tuition installment tracking and paper fee notices result in overdue institutional accounts.' },
      { title: 'Complex Academic Scheduling Clashes', description: 'Building course timetables across room capacities, faculty availability, and prerequisites takes weeks.' },
      { title: 'Burdensome Accreditation Data Gathering', description: 'Faculty spend hundreds of hours pulling manual reports for NAAC, NBA, ABET, or regional accreditation bodies.' },
    ],
    solutions: [
      { service: 'Digital Product Engineering', action: 'Build mobile-first student and parent portals for registration, fee payments, grades, and campus notices.', outcome: 'Reduces registrar desk inquiries and phone queues by up to 60%.' },
      { service: 'Workflow Automation & Admissions Processing', action: 'Automate high school transcript parsing, prerequisite checking, and digital acceptance letter delivery.', outcome: 'Accelerates admissions evaluation from 3 weeks to under 48 hours.' },
      { service: 'Data Engineering & Institutional Analytics', action: 'Aggregate attendance, LMS engagement, and grade books into early-warning student retention dashboards.', outcome: 'Identifies at-risk students weeks before midterms to trigger academic support.' },
      { service: 'Legacy Modernization & SIS Integration', action: 'Modernize legacy on-premise Ellucian or custom SQL student databases into cloud-native microservices.', outcome: 'Guarantees 100% availability during peak registration traffic spikes.' },
      { service: 'FERPA & Child Data Protection Compliance', action: 'Enforce strict role-based data segregation, student consent tracking, and encrypted audit logging.', outcome: 'Maintains complete regulatory compliance with FERPA and national educational laws.' },
    ],
    useCases: [
      {
        title: 'Multi-Campus Automated Admissions & Credit Transfer',
        before: 'Admissions staff manually reviewed 12,000 transfer applicant transcripts, causing a 4-week backlog and missed enrollment deadlines.',
        withUs: 'Deployed an automated document parsing engine that maps transfer course credits against academic catalogs with 98% accuracy.',
        result: 'Decreased credit evaluation turnaround time by 80% and boosted enrollment yield.',
      },
      {
        title: 'Digital Tuition Installment & Scholarship Engine',
        before: 'Bursar office mailed paper tuition reminders, resulting in 22% overdue student accounts each semester.',
        withUs: 'Integrated flexible digital payment plans with automated SMS/email payment links and instant scholarship disbursement tracking.',
        result: 'Reduced delinquent tuition balances by 45% and improved student persistence.',
      },
      {
        title: 'Algorithmic Course Timetable & Room Optimization',
        before: 'Academic deans spent 3 weeks every term resolving classroom space conflicts and faculty schedule overlaps in spreadsheets.',
        withUs: 'Engineered a constraint-satisfaction timetable generator that optimizes room capacities, lab equipment, and faculty preferences.',
        result: 'Generated conflict-free semester schedules in 2 hours with 15% better classroom utilization.',
      },
    ],
    outcomes: [
      { label: 'Admissions Speed', value: '65–80% faster', subtext: 'Target reduction in transcript evaluation and offer issuance' },
      { label: 'Fee Collection', value: '35–50% decrease', subtext: 'Fewer overdue balances through self-service installment plans' },
      { label: 'Registrar Overhead', value: '50% time saved', subtext: 'Self-service student enrollment and document requests' },
      { label: 'Accreditation Prep', value: '75% faster', subtext: 'One-click automated institutional compliance reports' },
    ],
    integrations: ['Ellucian Banner / Colleague', 'PowerSchool SIS', 'Blackbaud Education', 'Canvas LMS', 'Blackboard Learn', 'Workday Student', 'Stripe Billing', 'Salesforce Education Cloud'],
    compliance: ['FERPA (Family Educational Rights and Privacy Act)', 'COPPA (Children\'s Online Privacy Protection)', 'NAAC / NBA Accreditation Standards', 'SOC 2 Type II', 'Title IV Financial Aid Rules'],
    faqs: [
      { question: 'Can your platform connect with legacy Ellucian Banner or Colleague systems?', answer: 'Yes. We build secure Ethos API connectors and database middleware that synchronize student records, grades, and billing without disrupting existing core systems.' },
      { question: 'How do you ensure student educational records remain confidential?', answer: 'All architectures comply strictly with FERPA guidelines, enforcing granular role-based permissions, data encryption at rest and in transit, and immutable access logging.' },
      { question: 'Can students access course registration and fee payments on mobile phones?', answer: 'Yes. Our responsive student web apps and portals are optimized for mobile, allowing students to register for courses, pay fees, and view grades easily on iOS and Android.' },
      { question: 'Does the system support alumni relationship and donation tracking?', answer: 'Yes. We engineer alumni portals and donor management pipelines that integrate with institutional advancement CRMs like Blackbaud Raiser\'s Edge.' },
      { question: 'Can the timetable generator accommodate complex lab equipment and faculty availability constraints?', answer: 'Yes. Our constraint-optimization engine factors in specialized room equipment, travel times between campus buildings, and faculty contract requirements.' },
    ],
    finalCta: {
      headline: 'Transform your campus administration into a modern digital institution',
      subheadline: 'Accelerate student admissions, automate fee collection, and give faculty more time to teach.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80',
        alt: 'Historic university campus building and academic quad',
        caption: 'Enterprise campus management, student information systems, and academic operations',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80',
        alt: 'University students studying in modern academic library',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80',
        alt: 'Campus administrative offices and university conference room',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1600&q=80',
        alt: 'Academic graduation commencement ceremony on university campus',
      },
    },
  },

  'education': {
    slug: 'education',
    aliases: ['edtech', 'online-learning', 'e-learning'],
    name: 'Education (EdTech & Online Learning)',
    category: 'EdTech & Digital Learning Platforms',
    announcement: {
      badge: 'EdTech Engine',
      text: 'Adaptive learning paths, automated grading pipelines, and learner retention analytics.',
      linkText: 'Explore EdTech solutions',
    },
    useCaseChips: [
      { id: 'course', label: 'Course Creation & Video Streaming', iconName: 'Video' },
      { id: 'adaptive', label: 'Adaptive Personalized Learning Paths', iconName: 'Compass' },
      { id: 'assessments', label: 'Automated Grading & Coding Labs', iconName: 'Code' },
      { id: 'retention', label: 'Learner Drop-off Prediction', iconName: 'TrendingUp' },
      { id: 'b2b', label: 'Enterprise B2B Upskilling Portals', iconName: 'Building' },
    ],
    hero: {
      headline: 'Scale digital learning completion rates and deliver engaging learner journeys',
      subheadline:
        'We engineer cloud LMS platforms, adaptive assessment engines, and video streaming pipelines that integrate with Canvas, Moodle, Zoom, and enterprise HRIS systems.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Analyze your learner engagement drop-off points, course authoring bottlenecks, and B2B client requirements.' },
      { step: '02', title: 'Design', description: 'Architect interactive video learning UI, adaptive assessment logic, and enterprise team analytics.' },
      { step: '03', title: 'Build & Integrate', description: 'Connect low-latency video CDNs, automated code-sandbox runners, Stripe billing, and LMS APIs.' },
      { step: '04', title: 'Launch & Scale', description: 'Roll out gamified learner streaks, automated certificate verification, and corporate manager dashboards.' },
    ],
    overview: {
      paragraph1:
        'EdTech startups, online certification providers, and enterprise corporate training academies face a critical challenge: traditional digital courses suffer from low completion rates (often under 15%) due to static video playback, unengaging quizzes, and lack of personalized pacing.',
      paragraph2:
        'By building custom interactive learning platforms with adaptive skill assessments, gamified milestone tracking, and automated learner check-ins, modern education companies boost course completion to 60%+ while scaling B2B enterprise training contracts seamlessly.',
    },
    challenges: [
      { title: 'Severe Learner Drop-Off', description: 'Students lose momentum within the first two weeks of asynchronous online courses without interactive nudges.' },
      { title: 'Manual Assessment & Feedback Lag', description: 'Grading open-ended assignments or coding exercises manually delays learner feedback by days.' },
      { title: 'Video Streaming Latency & Costs', description: 'High bandwidth costs and buffering in global regions frustrate international learners on mobile devices.' },
      { title: 'B2B Corporate Reporting Demands', description: 'Enterprise clients demand real-time team skill progression dashboards that basic consumer LMSs cannot deliver.' },
    ],
    solutions: [
      { service: 'Digital Product Engineering', action: 'Build interactive, responsive web and mobile learning applications with offline video playback and note-taking.', outcome: 'Boosts weekly active learner engagement by up to 45%.' },
      { service: 'Generative AI & Adaptive Learning', action: 'Implement adaptive learning engines that dynamically adjust quiz difficulty and recommend targeted refresher modules.', outcome: 'Improves concept mastery and assessment pass rates by 30%.' },
      { service: 'Cloud & Media Streaming Architecture', action: 'Deploy global multi-CDN adaptive bitrate video streaming with automated transcription and multi-language captions.', outcome: 'Cuts video delivery latency and streaming bandwidth costs by 35%.' },
      { service: 'Workflow Automation & Assessments', action: 'Build automated sandbox runners for coding labs, instant quizzes, and verifiable digital credential badges.', outcome: 'Delivers instant feedback on student assignments in seconds.' },
      { service: 'Accessibility & Privacy Governance', action: 'Engineer WCAG 2.1 AA accessibility compliance, screen reader compatibility, and strict COPPA/GDPR data protection.', outcome: 'Ensures equitable access for all learners and institutional compliance.' },
    ],
    useCases: [
      {
        title: 'Interactive Tech Bootcamp Coding Sandbox',
        before: 'Software engineering students struggled with local development setup, spending the first 2 weeks troubleshooting environment errors.',
        withUs: 'Engineered a browser-based, containerized coding lab environment with instant automated test feedback and hints.',
        result: 'Decreased week-1 student dropout by 55% and accelerated project submission turnaround.',
      },
      {
        title: 'Enterprise B2B Upskilling Portal',
        before: 'A B2B training provider managed enterprise corporate clients via CSV progress reports emailed monthly.',
        withUs: 'Built a multi-tenant enterprise portal where corporate HR managers track employee skill benchmarks and certification status live.',
        result: 'Attracted 18 new enterprise clients and expanded annual contract values by 40%.',
      },
      {
        title: 'Adaptive Learning Path Optimization in Healthcare Certifications',
        before: 'Medical practitioners reviewed entire 40-hour modules even when they only needed refresher training on specific regulatory updates.',
        withUs: 'Implemented a diagnostic pre-assessment that automatically maps a custom, abbreviated curriculum tailored to individual knowledge gaps.',
        result: 'Cut average time-to-certification by 35% while increasing exam pass rates to 96%.',
      },
    ],
    outcomes: [
      { label: 'Course Completion', value: '3x–4x higher', subtext: 'Target increase in certificate completion rates' },
      { label: 'Assessment Feedback', value: '<5 seconds', subtext: 'Instant automated grading and feedback on assignments' },
      { label: 'Streaming Cost', value: '30–40% savings', subtext: 'Adaptive bitrate video caching across global CDNs' },
      { label: 'Accessibility', value: 'WCAG 2.1 AA', subtext: 'Full screen-reader, closed-caption, and keyboard navigation' },
    ],
    integrations: ['Canvas LMS (LTI 1.3)', 'Moodle Enterprise', 'Teachable / Thinkific', 'Zoom Education API', 'Stripe Subscriptions', 'Credly Badges', 'Vimeo Enterprise', 'Workday Learning'],
    compliance: ['COPPA (Children\'s Privacy)', 'GDPR & CCPA Data Privacy', 'WCAG 2.1 AA Accessibility', 'LTI 1.3 Interoperability Standards', 'SOC 2 Type II'],
    faqs: [
      { question: 'How is this different from your Schools & Colleges offering?', answer: 'Schools & Colleges focuses on institutional campus operations (SIS, admissions, fee billing, dorms, and timetabling). Education focuses on digital learning platforms, online courses, adaptive assessments, and corporate upskilling.' },
      { question: 'Does your video player support offline downloads on mobile apps?', answer: 'Yes. We engineer encrypted local DRM video storage on iOS and Android, allowing learners to download course modules and study without internet access.' },
      { question: 'Can the platform integrate with our corporate clients\' Single Sign-On (SSO)?', answer: 'Yes. We support SAML 2.0, Okta, Azure AD, and Google Workspace SSO, allowing B2B corporate employees to authenticate with their corporate credentials.' },
      { question: 'Do you support LTI 1.3 standards to embed modules into third-party LMSs?', answer: 'Yes. Our learning tools comply with 1EdTech LTI 1.3 and Advantage specifications, allowing your courses to be plugged directly into client Canvas or Blackboard portals.' },
      { question: 'How do you prevent credential fraud and certificate forgery?', answer: 'We issue cryptographically verifiable credentials backed by digital signatures and QR-code verification registries.' },
    ],
    finalCta: {
      headline: 'Build an engaging digital learning platform that turns learners into graduates',
      subheadline: 'Boost course completion rates, deliver instant feedback, and scale enterprise training contracts.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1600&q=80',
        alt: 'Student learning online using digital educational platform and laptop',
        caption: 'Enterprise EdTech platforms, adaptive learning paths, and digital course delivery',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80',
        alt: 'Modern online learner engaging with interactive coding lab',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&q=80',
        alt: 'Professional taking notes while studying digital certification curriculum',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80',
        alt: 'Collaborative team completing online corporate upskilling workshop',
      },
    },
  },

  'hospitality': {
    slug: 'hospitality',
    aliases: ['hotels', 'restaurants', 'travel'],
    name: 'Hospitality',
    category: 'Hotels, Dining & Luxury Travel',
    announcement: {
      badge: 'Guest Platform',
      text: 'Unified property management, contactless mobile check-in, and guest experience analytics.',
      linkText: 'Explore hospitality tech',
    },
    useCaseChips: [
      { id: 'reservations', label: 'Direct Booking Engine', iconName: 'Calendar' },
      { id: 'checkin', label: 'Contactless Mobile Check-In', iconName: 'Smartphone' },
      { id: 'housekeeping', label: 'Housekeeping & Room Triage', iconName: 'Home' },
      { id: 'fnb', label: 'F&B POS & Table Management', iconName: 'Utensils' },
      { id: 'revenue', label: 'Dynamic Revenue Management (RMS)', iconName: 'TrendingUp' },
    ],
    hero: {
      headline: 'Maximize RevPAR and deliver personalized guest experiences across your portfolio',
      subheadline:
        'We engineer cloud property management platforms, contactless guest web apps, and dynamic revenue optimization engines that integrate with Oracle OPERA, Mews, Cloudbeds, and SevenRooms.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Analyze your OTA commission leakage, front-desk check-in queues, and housekeeping turnaround bottlenecks.' },
      { step: '02', title: 'Design', description: 'Architect frictionless direct-booking engines, mobile digital room keys, and automated guest preference profiles.' },
      { step: '03', title: 'Build & Integrate', description: 'Integrate securely with Oracle OPERA, Mews, channel managers, smart door locks, and POS systems.' },
      { step: '04', title: 'Launch & Scale', description: 'Roll out automated pre-arrival upselling, housekeeping mobile trackers, and portfolio RevPAR dashboards.' },
    ],
    overview: {
      paragraph1:
        'Hotels, luxury resorts, and multi-concept restaurant groups navigate razor-thin margins driven by exorbitant Online Travel Agency (OTA) commissions, front-desk labor shortages, and rising guest expectations. Delays in room turnover and impersonal guest service directly harm online review scores and repeat bookings.',
      paragraph2:
        'By investing in direct-booking web applications, mobile check-in with digital key integration, and automated housekeeping dispatch, hospitality operators reclaim high OTA commissions while delivering 5-star personalized guest journeys that drive loyalty.',
    },
    challenges: [
      { title: 'High OTA Commission Dependency', description: 'Third-party booking sites take 15–25% of room revenue because direct hotel websites fail to convert visitors.' },
      { title: 'Front-Desk Arrival Bottlenecks', description: 'Long check-in lines during peak arrival windows cause immediate negative guest impressions.' },
      { title: 'Housekeeping Turnaround Lags', description: 'Miscommunication between front desk and cleaning staff delays room readiness for early-arriving guests.' },
      { title: 'Missed Ancillary Revenue', description: 'F&B promotions, spa packages, and room upgrades are rarely presented to guests at the right moment.' },
    ],
    solutions: [
      { service: 'Digital Product Engineering', action: 'Build high-converting direct booking web apps with live room previews, add-on bundling, and frictionless Apple/Google Pay.', outcome: 'Increases direct booking share by up to 35%, cutting OTA commissions.' },
      { service: 'Mobile Key & Contactless Operations', action: 'Deploy web-based check-in with identity verification and smart lock digital key dispatch directly to mobile wallets.', outcome: 'Eliminates front-desk check-in lines for 60% of arriving guests.' },
      { service: 'Data Engineering & Revenue Management', action: 'Unify competitor pricing feeds, local event calendars, and historical occupancy into dynamic pricing models.', outcome: 'Increases Revenue Per Available Room (RevPAR) by 8–15%.' },
      { service: 'Workflow Automation & Housekeeping', action: 'Create real-time housekeeping mobile dispatch that reprioritizes room cleaning based on guest arrival ETAs.', outcome: 'Accelerates clean room availability by 45 minutes on peak turnover days.' },
      { service: 'PCI-DSS & Guest Data Privacy', action: 'Implement tokenized credit card vaults and secure guest data segregation compliant with hospitality privacy standards.', outcome: 'Guarantees zero payment card data exposure across all hotel POS terminals.' },
    ],
    useCases: [
      {
        title: 'Boutique Hotel Direct Booking & Pre-Arrival Upsell',
        before: 'A 180-room luxury hotel relied on Booking.com for 70% of bookings and offered upgrades only verbally at check-in.',
        withUs: 'Engineered a modern, story-driven direct booking engine with automated pre-arrival SMS links for spa and suite upgrades.',
        result: 'Shifted 42% of bookings to direct channels and generated $180,000 in ancillary upgrade revenue.',
      },
      {
        title: 'Contactless Mobile Check-In & Smart Lock Access',
        before: 'Guests arriving on late evening flights waited up to 25 minutes for solo night-audit staff to manually check IDs and create keycards.',
        withUs: 'Implemented web-based digital check-in that verifies passports, captures credit card authorizations, and issues Apple Wallet room keys.',
        result: 'Reduced check-in wait time to zero for enrolled guests and boosted guest review scores by 0.6 stars.',
      },
      {
        title: 'Multi-Venue F&B Table & Kitchen Synchronization',
        before: 'Hotel guests charged dining to rooms manually on paper receipts, causing $30,000 in unbilled restaurant charges annually.',
        withUs: 'Integrated restaurant POS systems with the central PMS for real-time room folio verification and instant digital tip posting.',
        result: 'Completely eliminated unbilled dining charges and cut checkout dispute resolution time.',
      },
    ],
    outcomes: [
      { label: 'Direct Bookings', value: '25–40% increase', subtext: 'Target shift from high-commission OTA channels' },
      { label: 'Check-In Wait Time', value: '80% reduction', subtext: 'Contactless mobile check-in and digital room keys' },
      { label: 'RevPAR Growth', value: '8–14% boost', subtext: 'Dynamic revenue pricing based on real-time market demand' },
      { label: 'Room Turnover', value: '45 mins faster', subtext: 'Intelligent housekeeping dispatch mapped to guest arrivals' },
    ],
    integrations: ['Oracle OPERA Cloud', 'Mews PMS', 'Cloudbeds', 'SiteMinder Channel Manager', 'SevenRooms Table Management', 'Toast POS', 'Assa Abloy Smart Locks', 'Stripe Terminal'],
    compliance: ['PCI-DSS Level 1 (Card Payments)', 'GDPR & CCPA Guest Data Privacy', 'State Lodging Tax Regulations', 'SOC 2 Type II', 'ADA Accessible Web Standards'],
    faqs: [
      { question: 'Can the contactless check-in system work without guests downloading an app?', answer: 'Yes. Our check-in experience runs entirely in standard mobile browsers via web links, allowing guests to complete check-in without app store friction.' },
      { question: 'Will it integrate with our existing Oracle OPERA or Mews PMS?', answer: 'Yes. We utilize official OPERA OHIP APIs and Mews Open APIs to read and write room reservations, guest folios, and housekeeping statuses in real time.' },
      { question: 'How do you prevent guest identity fraud during contactless check-in?', answer: 'Our intake workflows incorporate automated government ID scanning with selfie biometric liveness checks before issuing digital room access.' },
      { question: 'Can the dynamic pricing engine update rates across all our OTA channels?', answer: 'Yes. Rates calculated by the revenue management system push directly to your channel manager (e.g., SiteMinder), updating all OTAs in seconds.' },
      { question: 'Can restaurant tabs and spa charges be billed directly to the guest room folio?', answer: 'Yes. POS terminals query the live PMS database to verify guest room numbers and credit authorization before posting charges instantly.' },
    ],
    finalCta: {
      headline: 'Elevate your guest experience and maximize property profitability',
      subheadline: 'Reclaim direct booking commissions, eliminate check-in queues, and streamline hotel operations.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
        alt: 'Luxury boutique hotel lobby and concierge reception lounge',
        caption: 'Enterprise hospitality management, guest experience technology, and PMS integration',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80',
        alt: 'Luxury resort guest suite overlooking scenic view',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1600&q=80',
        alt: 'Hotel concierge welcoming executive guests at reception',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80',
        alt: 'Upscale hotel dining room and fine dining restaurant setting',
      },
    },
  },

  'automotive': {
    slug: 'automotive',
    aliases: ['dealerships', 'auto-repair'],
    name: 'Automotive',
    category: 'Dealerships, Service Centers & OEM Suppliers',
    announcement: {
      badge: 'Auto Platform',
      text: 'Unified dealership lead management, service bay scheduling, and parts inventory sync.',
      linkText: 'Explore automotive tech',
    },
    useCaseChips: [
      { id: 'leads', label: 'Inbound Vehicle Lead Routing', iconName: 'Car' },
      { id: 'service', label: 'Service Bay Scheduling & Triage', iconName: 'Wrench' },
      { id: 'tradein', label: 'Instant Trade-In Valuation', iconName: 'Calculator' },
      { id: 'financing', label: 'Digital Credit & Finance App', iconName: 'CreditCard' },
      { id: 'parts', label: 'Parts Inventory & Warranty Claims', iconName: 'Box' },
    ],
    hero: {
      headline: 'Maximize service absorption and drive vehicle sales across dealer rooftops',
      subheadline:
        'We engineer automotive dealership platforms, automated service bay scheduling engines, and digital retailing portals that integrate with CDK Global, Reynolds & Reynolds, DealerSocket, and Tekion.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Analyze your BDC response times, service bay unutilized capacity, and parts inventory turnover.' },
      { step: '02', title: 'Design', description: 'Architect digital vehicle storefronts, online service appointment booking, and automated trade appraisal models.' },
      { step: '03', title: 'Build & Integrate', description: 'Connect DMS systems (CDK, Reynolds), OEM inventory feeds, and finance credit bureaus into a unified API hub.' },
      { step: '04', title: 'Launch & Scale', description: 'Deploy service advisor mobile check-in tablets, automated recall alerts, and multi-rooftop executive dashboards.' },
    ],
    overview: {
      paragraph1:
        'Automotive dealership groups and multi-location service centers face shifting consumer expectations toward digital car buying, rising inventory floor-plan interest rates, and fierce competition for profitable customer-pay service work. Slow BDC response to online inquiries leads buyers to visit competing dealerships.',
      paragraph2:
        'By modernizing automotive retail with transparent digital finance pre-qualifications, 24/7 online service bay appointment booking, and automated OEM recall campaigns, dealership groups protect fixed operations margins and accelerate inventory turns.',
    },
    challenges: [
      { title: 'BDC Lead Response Latency', description: 'Inbound vehicle inquiries take hours to route, allowing competing dealer groups to capture the sale.' },
      { title: 'Service Bay Scheduling Idle Time', description: 'Phone-based service scheduling leads to uneven technician workloads and unutilized lift hours.' },
      { title: 'Friction in Digital Car Buying', description: 'Customers abandon online buying journeys that require manual credit applications and unverified trade valuations.' },
      { title: 'Warranty Claims Disallowances', description: 'Missing technician notes or delayed OEM warranty submissions lead to costly manufacturer chargebacks.' },
    ],
    solutions: [
      { service: 'Digital Product Engineering', action: 'Build omni-channel vehicle digital retailing portals with real-time inventory filters, payment calculators, and test-drive scheduling.', outcome: 'Increases online lead-to-showroom visit conversion by 30%.' },
      { service: 'Workflow Automation & Service Bay Dispatch', action: 'Deploy self-service service booking that checks technician skill tiers and parts availability in real time.', outcome: 'Boosts fixed operations service bay utilization by up to 22%.' },
      { service: 'Data Engineering & DMS Synchronization', action: 'Integrate vehicle inventory, customer repair orders, and parts catalog data between CDK/Reynolds and CRM.', outcome: 'Eliminates inventory double-entry across dealership portals and aggregator sites.' },
      { service: 'Computer Vision & Trade Appraisal', action: 'Process customer trade-in vehicle photos through damage-detection algorithms to generate fair market offers.', outcome: 'Speeds up trade appraisal turnaround from 1 hour to under 5 minutes.' },
      { service: 'Consumer Finance & Regulatory Compliance', action: 'Enforce FCRA credit disclosure rules, FTC Safeguards cybersecurity standards, and encrypted deal vaults.', outcome: 'Achieves 100% compliance during state automotive dealer board audits.' },
    ],
    useCases: [
      {
        title: 'Multi-Rooftop Online Service Bay Scheduler',
        before: 'A 14-dealership auto group received 400 service calls daily, resulting in 28% abandoned calls and empty service bays on Tuesdays.',
        withUs: 'Engineered an intuitive mobile service scheduler that suggests open lift slots, pre-orders routine maintenance parts, and sends calendar invites.',
        result: 'Captured 4,200 additional service appointments in the first 90 days, generating $380,000 in customer-pay labor.',
      },
      {
        title: 'Instant Online Trade-In & Digital Credit Pre-Qualification',
        before: 'Car shoppers spent 2.5 hours in the dealership showroom waiting for finance managers to appraise trades and review credit scores.',
        withUs: 'Deployed an online digital retailing tool where buyers upload trade photos, view estimated monthly payments, and receive soft-pull credit approval.',
        result: 'Cut showroom transaction time to 45 minutes and boosted vehicle closing rates.',
      },
      {
        title: 'Automated OEM Recall Campaign Outreach',
        before: 'Service teams manually matched VIN lists against vehicle registries for airbag and software recalls, reaching less than 15% of owners.',
        withUs: 'Built an automated recall engine that identifies affected vehicles in the dealer market, sends personalized booking links, and reserves parts.',
        result: 'Increased warranty recall completion by 48% with zero parts supply delays.',
      },
    ],
    outcomes: [
      { label: 'Service Bay Utilization', value: '18–25% increase', subtext: 'Target improvement in billable technician hours' },
      { label: 'Lead Response Speed', value: '<5 minutes', subtext: 'Automated CRM routing and instant customer text response' },
      { label: 'Trade-In Conversion', value: '35% higher', subtext: 'Transparent digital trade-in valuation flow' },
      { label: 'FTC Compliance', value: '100% certified', subtext: 'Strict compliance with FTC Safeguards cybersecurity rules' },
    ],
    integrations: ['CDK Global DMS', 'Reynolds & Reynolds', 'DealerSocket CRM', 'Tekion Cloud', 'Cox Automotive (vAuto)', 'Carfax API', 'RouteOne Financing', 'Dealertrack'],
    compliance: ['FTC Safeguards Rule', 'Fair Credit Reporting Act (FCRA)', 'Gramm-Leach-Bliley Act (GLBA)', 'Truth in Lending Act (TILA)', 'SOC 2 Type II'],
    faqs: [
      { question: 'Can the software integrate with CDK Global or Reynolds & Reynolds?', answer: 'Yes. We integrate via certified third-party developer programs and secure API gateways to read repair orders, inventory VINs, and customer records.' },
      { question: 'Does online service booking check whether replacement parts are currently in stock?', answer: 'Yes. The scheduling engine cross-references required parts against your DMS parts inventory, ensuring appointments are only confirmed when parts are available.' },
      { question: 'How do you handle customer credit applications securely under FTC Safeguards?', answer: 'All financial data is stored in isolated, encrypted cloud vaults with strict multi-factor authentication, satisfying FTC Safeguards cybersecurity requirements.' },
      { question: 'Can service advisors check in customers using mobile tablets on the service drive?', answer: 'Yes. We provide mobile advisor apps that scan VIN barcodes, walk around the vehicle for photo inspection, and capture customer digital signatures on the drive.' },
      { question: 'Can the system calculate exact vehicle lease and loan payments with local taxes?', answer: 'Yes. Our pricing engine integrates with OEM incentive feeds, lender rate sheets, and state/county tax tables to calculate penny-perfect payment terms.' },
    ],
    finalCta: {
      headline: 'Accelerate vehicle sales and maximize fixed operations revenue',
      subheadline: 'Connect your showroom, service drive, and DMS into a unified, high-performance platform.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80',
        alt: 'Modern automotive dealership showroom with luxury vehicles on display',
        caption: 'Enterprise automotive dealership technology, digital retailing, and service bay operations',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1600&q=80',
        alt: 'Automotive diagnostic service bay with technician inspecting vehicle',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1600&q=80',
        alt: 'Customer consulting with automotive advisor in showroom lounge',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=1600&q=80',
        alt: 'High-performance sports car parked outside modern automotive architecture',
      },
    },
  },

  'ecommerce': {
    slug: 'ecommerce',
    aliases: ['ecommerce-operations', 'retail', 'd2c'],
    name: 'Ecommerce Operations',
    category: 'Retail, Direct-to-Consumer & Marketplaces',
    announcement: {
      badge: 'Commerce Engine',
      text: 'Unified multi-channel catalog, automated returns, and real-time inventory synchronization.',
      linkText: 'Explore commerce ops',
    },
    useCaseChips: [
      { id: 'catalog', label: 'Multi-Channel Catalog Sync', iconName: 'Grid' },
      { id: 'orders', label: 'Distributed Order Management (DOM)', iconName: 'Package' },
      { id: 'returns', label: 'Self-Service Returns & Exchanges', iconName: 'RotateCcw' },
      { id: 'wismo', label: 'Where Is My Order (WISMO) Tracking', iconName: 'Search' },
      { id: 'forecasting', label: 'Inventory & Demand Forecasting', iconName: 'TrendingUp' },
    ],
    hero: {
      headline: 'Scale direct-to-consumer order velocity and eliminate inventory stockouts',
      subheadline:
        'We engineer headless commerce platforms, automated returns management systems, and distributed inventory pipelines that integrate with Shopify Plus, Magento, Amazon Seller Central, and ERPs.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Analyze your multi-channel order flow, warehouse fulfillment bottlenecks, and return processing costs.' },
      { step: '02', title: 'Design', description: 'Architect headless storefronts, distributed order routing logic, and self-service customer returns portals.' },
      { step: '03', title: 'Build & Integrate', description: 'Connect Shopify Plus, Amazon, 3PL warehouse WMSs, ERP inventory, and Zendesk/Gorgias support.' },
      { step: '04', title: 'Launch & Scale', description: 'Deploy real-time stock sync, automated exchange recommendations, and fulfillment SLA alerts.' },
    ],
    overview: {
      paragraph1:
        'Fast-growing eCommerce brands and omnichannel retailers operate across multiple marketplaces (Shopify, Amazon, Walmart, TikTok Shop), facing relentless challenges in inventory synchronization, fulfillment delays, and soaring return rates. Overselling out-of-stock items leads to marketplace penalties and frustrated shoppers.',
      paragraph2:
        'By building custom distributed order management (DOM) pipelines, self-service return and exchange portals, and automated stock reconciliation engines, retail leaders protect operating margins while delivering fast, transparent delivery journeys that drive customer lifetime value.',
    },
    challenges: [
      { title: 'Inventory Overselling & Desync', description: 'Lagging stock synchronization between Shopify, Amazon, and warehouse WMS causes cancelled orders.' },
      { title: 'High Return Processing Costs', description: 'Manual return authorizations and physical inspections turn returns into major profit drainers.' },
      { title: 'Customer Support WISMO Overload', description: '"Where is my order?" tickets flood customer support desks, inflating support headcount costs.' },
      { title: 'Marketplace Channel Inefficiency', description: 'Managing product listings, pricing updates, and promotions separately across channels creates data errors.' },
    ],
    solutions: [
      { service: 'Digital Product Engineering', action: 'Build high-performance headless eCommerce storefronts and branded self-service returns/exchange portals.', outcome: 'Converts 35% of return requests into product exchanges rather than cash refunds.' },
      { service: 'Data Engineering & Inventory Sync', action: 'Architect sub-second inventory synchronization across Shopify, Amazon, ERP, and 3PL warehouses.', outcome: 'Eliminates overselling and reduces stockout cancellations by 95%.' },
      { service: 'Workflow Automation & WISMO Tracking', action: 'Deploy real-time shipment milestone webhooks with proactive SMS delivery updates and interactive tracking pages.', outcome: 'Reduces "where is my order" support tickets by up to 60%.' },
      { service: 'Generative AI & Catalog Management', action: 'Automate product categorization, multi-channel attribute mapping, and SEO-optimized product copy generation.', outcome: 'Accelerates new SKU catalog launch velocity by 4x.' },
      { service: 'PCI-DSS & Security Architecture', action: 'Implement tokenized checkout, fraud scoring integration, and GDPR/CCPA consumer data compliance.', outcome: 'Protects customer payment information with zero security breaches.' },
    ],
    useCases: [
      {
        title: 'Multi-Channel Real-Time Inventory Harmonization',
        before: 'An apparel brand selling on Shopify and Amazon oversold 300 popular jacket units during Black Friday due to 30-minute sync delays.',
        withUs: 'Built an event-driven inventory middleware that updates stock levels across all sales channels within 800 milliseconds of every purchase.',
        result: 'Achieved 100% inventory accuracy during peak holiday volume with zero overselling cancellations.',
      },
      {
        title: 'Self-Service Smart Return & Exchange Flow',
        before: 'Customers emailed support to request return shipping labels, taking 48 hours and costing $12 in support time per return.',
        withUs: 'Deployed an automated returns portal that generates prepaid QR return labels and offers instant store credit incentives for exchanges.',
        result: 'Retained $540,000 in gross merchandise value through automated exchange suggestions.',
      },
      {
        title: 'Automated 3PL Distributed Order Routing (DOM)',
        before: 'Orders were manually split and assigned to 3 regional fulfillment centers, resulting in high shipping zone costs and split deliveries.',
        withUs: 'Engineered an algorithmic order routing engine that factors in inventory location, carrier transit times, and packaging fees.',
        result: 'Cut average shipping cost per order by $2.10 while accelerating 2-day delivery coverage.',
      },
    ],
    outcomes: [
      { label: 'WISMO Ticket Volume', value: '50–65% reduction', subtext: 'Target decrease in order tracking support inquiries' },
      { label: 'Return Retention', value: '30–40% saved', subtext: 'Exchanges retained instead of full cash refunds' },
      { label: 'Inventory Sync Speed', value: '<1 second', subtext: 'Real-time multi-channel stock level propagation' },
      { label: 'Catalog Time-to-Market', value: '70% faster', subtext: 'Automated product attribute and SKU mapping' },
    ],
    integrations: ['Shopify Plus', 'Adobe Commerce (Magento)', 'BigCommerce', 'Amazon Seller Central', 'Walmart Marketplace', 'Klaviyo', 'Gorgias Helpdesk', 'ShipBob WMS'],
    compliance: ['PCI-DSS Level 1 (Checkout Security)', 'Consumer Privacy Acts (GDPR & CCPA)', 'FTC Mail and Telephone Order Merchandise Rule', 'SOC 2 Type II', 'ADA Accessibility Standards'],
    faqs: [
      { question: 'Can the platform integrate with our existing Shopify Plus and Amazon Seller accounts?', answer: 'Yes. We build native API connections to Shopify Plus and Amazon SP-API, synchronizing orders, inventory counts, and fulfillment tracking numbers automatically.' },
      { question: 'How do you incentivize customers to choose an exchange over a refund?', answer: 'Our returns workflows can offer dynamic incentives, such as bonus store credit or free expedited shipping on replacement items, retaining revenue.' },
      { question: 'Can the system route orders across multiple 3PL warehouses and retail stores?', answer: 'Yes. Our distributed order management logic evaluates inventory availability and shipping costs to route each order to the optimal fulfillment node.' },
      { question: 'Does your solution support international shipping and customs tax calculations?', answer: 'Yes. We integrate with cross-border shipping and tax engines to display landed costs, duty fees, and multi-currency pricing at checkout.' },
      { question: 'How do you handle peak holiday traffic surges like Black Friday / Cyber Monday?', answer: 'Our cloud architectures utilize auto-scaling serverless microservices and distributed caching, easily handling traffic spikes exceeding 50,000 requests per minute.' },
    ],
    finalCta: {
      headline: 'Scale your eCommerce operations into an agile, high-margin fulfillment machine',
      subheadline: 'Eliminate inventory overselling, turn returns into exchanges, and automate multi-channel fulfillment.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1556742049-0a67e5577ffc?w=1600&q=80',
        alt: 'Modern eCommerce fulfillment warehouse with workers packing digital orders',
        caption: 'Enterprise eCommerce operations, distributed order management, and multi-channel fulfillment',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?w=1600&q=80',
        alt: 'High-speed automated retail parcel sorting and conveyor facility',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1600&q=80',
        alt: 'Digital retail storefront management on laptop workstation',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1600&q=80',
        alt: 'E-commerce parcels ready for express last-mile dispatch',
      },
    },
  },

  'field-services': {
    slug: 'field-services',
    aliases: ['field-service-management', 'hvac', 'plumbing', 'electrical'],
    name: 'Field Services',
    category: 'Home & Commercial Field Services',
    announcement: {
      badge: 'Field Ops Engine',
      text: 'Intelligent technician dispatch, mobile work orders, and same-day invoice collection.',
      linkText: 'Explore field tech',
    },
    useCaseChips: [
      { id: 'workorders', label: 'Digital Work Order Dispatch', iconName: 'FileText' },
      { id: 'scheduling', label: 'Technician Route & Schedule Optimization', iconName: 'Compass' },
      { id: 'reporting', label: 'Mobile Jobsite Diagnostics & Photos', iconName: 'Camera' },
      { id: 'invoicing', label: 'On-Site Digital Invoicing & Payment', iconName: 'CreditCard' },
      { id: 'agreements', label: 'Annual Service Agreement Tracking', iconName: 'ShieldCheck' },
    ],
    hero: {
      headline: 'Increase daily completed jobs per technician and eliminate paper work orders',
      subheadline:
        'We engineer field service management platforms, mobile technician apps, and automated dispatch routing engines that integrate with ServiceTitan, Salesforce Field Service, Jobber, and QuickBooks.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Analyze your technician windshield drive times, emergency dispatch bottlenecks, and uncollected invoices.' },
      { step: '02', title: 'Design', description: 'Architect offline mobile technician apps, dynamic GPS dispatch boards, and customer ETA alert models.' },
      { step: '03', title: 'Build & Integrate', description: 'Integrate ServiceTitan, Jobber, parts supplier inventory, and accounting software into a unified hub.' },
      { step: '04', title: 'Launch & Scale', description: 'Deploy mobile payment card readers, automated customer review requests, and technician performance scorecards.' },
    ],
    overview: {
      paragraph1:
        'Commercial and residential field service contractors (HVAC, plumbing, electrical, commercial refrigeration) operate in high-demand environments where inefficient driving routes and lost paper invoices severely compress margins. Customers expect real-time technician arrival ETAs, transparent digital estimates, and on-the-spot credit card payments.',
      paragraph2:
        'By modernizing field operations with algorithmic technician dispatch, mobile diagnostics checklists, and instant mobile invoicing, contractors add an extra completed job per technician daily while eliminating uncollected receivables.',
    },
    challenges: [
      { title: 'Excessive Windshield Drive Time', description: 'Unoptimized scheduling sends technicians crisscrossing town, wasting hours in traffic every day.' },
      { title: 'Delayed On-Site Invoicing', description: 'Waiting for paper job sheets to reach the office delays customer billing and increases bad debt.' },
      { title: 'Emergency Service Dispatch Delays', description: 'Urgent calls during extreme weather get lost in dispatch queues, losing high-value commercial jobs.' },
      { title: 'Low Maintenance Agreement Renewals', description: 'Recurring maintenance contracts lapse without automated customer renewal notices and scheduling links.' },
    ],
    solutions: [
      { service: 'Digital Product Engineering', action: 'Build rugged, offline-capable mobile technician apps with equipment serial lookup, photo markup, and digital signatures.', outcome: 'Saves technicians 45 minutes of paperwork per job.' },
      { service: 'Workflow Automation & Route Optimization', action: 'Implement algorithmic dispatch that factors in technician trade certifications, traffic, and spare parts inventory.', outcome: 'Reduces total vehicle windshield drive time by up to 25%.' },
      { service: 'Data Engineering & Inventory Sync', action: 'Synchronize van truck-stock inventory with central warehouse catalogs and QuickBooks/Sage accounting.', outcome: 'Eliminates unbilled parts and prevents secondary trips for missing equipment.' },
      { service: 'Customer Experience & Telematics Alerting', action: 'Deploy real-time "technician on the way" SMS alerts with live Uber-style GPS map tracking and technician bio.', outcome: 'Reduces customer missed-appointment lockouts to near zero.' },
      { service: 'Payment & Licensing Governance', action: 'Integrate PCI-compliant mobile card readers and digital financing options directly on technician tablets.', outcome: 'Achieves 85% same-day on-site payment collection on completed jobs.' },
    ],
    useCases: [
      {
        title: 'Commercial HVAC Automated Emergency Dispatch',
        before: 'Facility managers calling with frozen grocery refrigeration emergencies waited 4 hours for dispatchers to locate an on-duty technician.',
        withUs: 'Built an emergency dispatch routing engine that alerts the nearest qualified technician with the required equipment on truck.',
        result: 'Decreased emergency arrival SLA from 4 hours to 45 minutes, winning key commercial accounts.',
      },
      {
        title: 'On-Site Digital Good/Better/Best Quoting System',
        before: 'Technicians quoted repairs on carbon-copy paper forms, rarely offering tiered replacement options or financing.',
        withUs: 'Deployed an interactive mobile quoting tool with visual Good/Better/Best system tiers and instant digital financing pre-approval.',
        result: 'Increased average ticket size by 32% across 60 residential service technicians.',
      },
      {
        title: 'Automated Preventive Maintenance Agreement Renewal',
        before: 'Office staff manually called 3,000 commercial maintenance agreement holders to renew contracts, losing 30% to expiration.',
        withUs: 'Integrated automated recurring credit card billing and self-service online tune-up appointment scheduling.',
        result: 'Boosted agreement retention rate to 92% and stabilized winter baseline revenue.',
      },
    ],
    outcomes: [
      { label: 'Jobs per Technician', value: '+1 job/day', subtext: 'Target increase in completed revenue-generating service calls' },
      { label: 'Windshield Drive Time', value: '20–30% reduction', subtext: 'Optimized geographic technician dispatch routing' },
      { label: 'Same-Day Collections', value: '85% collected on-site', subtext: 'Mobile credit card, ACH, and digital financing payments' },
      { label: 'Customer Satisfaction', value: '4.9/5 stars', subtext: 'Real-time GPS tracking and transparent digital estimates' },
    ],
    integrations: ['ServiceTitan', 'Salesforce Field Service', 'Jobber', 'ServiceMax', 'Housecall Pro', 'QuickBooks Online', 'Stripe Terminal', 'Fleetmatics / Verizon Connect'],
    compliance: ['EPA Refrigerant Tracking (Section 608)', 'State Contractor Licensing Mandates', 'OSHA Safety Inspection Standards', 'PCI-DSS Payment Compliance', 'SOC 2 Type II'],
    faqs: [
      { question: 'Does the mobile application function in basements or areas without cell service?', answer: 'Yes. All mobile technician apps operate 100% offline, allowing technicians to review past equipment service history, capture photos, and collect signatures without reception.' },
      { question: 'Can customers track when the technician is driving to their property?', answer: 'Yes. When the technician taps "Dispatch", the customer receives an automated text message with a live tracking map and technician photo.' },
      { question: 'Will the mobile app integrate with ServiceTitan or Jobber?', answer: 'Yes. We utilize official ServiceTitan and Jobber APIs to sync customer work orders, equipment serial numbers, and pricebook items seamlessly.' },
      { question: 'Can technicians offer customer financing options directly on their mobile tablet?', answer: 'Yes. We integrate digital lending partners, allowing homeowners to apply and receive loan pre-approval for major HVAC replacements in under 60 seconds.' },
      { question: 'How do you handle truck-stock parts replenishment?', answer: 'When a technician adds a part to a work order, it is deducted from their specific van inventory and staged on the warehouse morning restock list.' },
    ],
    finalCta: {
      headline: 'Empower your technicians and maximize your daily completed service calls',
      subheadline: 'Eliminate windshield drive time, collect payments on-site, and scale your contracting business.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=80',
        alt: 'Professional field service technician inspecting commercial HVAC unit',
        caption: 'Enterprise field service management, technician dispatch, and mobile work order automation',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80',
        alt: 'Technician reviewing digital maintenance checklist on mobile tablet',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80',
        alt: 'Field engineer performing equipment maintenance and testing',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1600&q=80',
        alt: 'Service technician conferring with customer at property entrance',
      },
    },
  },

  'financial-services': {
    slug: 'financial-services',
    aliases: ['finance', 'bfsi', 'fintech'],
    name: 'Financial Services',
    category: 'Banking, NBFCs & Wealth Management',
    announcement: {
      badge: 'Fintech Engine',
      text: 'Sub-200ms transaction pipelines, automated e-KYC onboarding, and AML fraud monitoring.',
      linkText: 'Explore BFSI engineering',
    },
    useCaseChips: [
      { id: 'kyc', label: 'Automated e-KYC & Digital Onboarding', iconName: 'UserCheck' },
      { id: 'origination', label: 'Loan Origination & Underwriting', iconName: 'FileText' },
      { id: 'fraud', label: 'Real-Time Fraud & Anomaly Triage', iconName: 'ShieldAlert' },
      { id: 'payments', label: 'Instant Payment Settlement (ISO 20022)', iconName: 'CreditCard' },
      { id: 'regulatory', label: 'Automated Regulatory Reporting', iconName: 'Scale' },
    ],
    hero: {
      headline: 'Engineer resilient core banking systems and accelerate digital financial products',
      subheadline:
        'We engineer zero-trust banking platforms, automated loan origination engines, and real-time fraud monitoring pipelines that integrate with Temenos, Finacle, FIS, and Salesforce FSC.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'See how it works',
    },
    process: [
      { step: '01', title: 'Discover', description: 'Analyze your legacy core banking bottlenecks, loan processing cycle times, and compliance reporting gaps.' },
      { step: '02', title: 'Design', description: 'Architect sub-second transaction APIs, automated KYC verification models, and zero-trust security postures.' },
      { step: '03', title: 'Build & Integrate', description: 'Connect Temenos, Finacle, credit bureaus, FedNow/RTP payment rails, and core accounting ledgers.' },
      { step: '04', title: 'Launch & Scale', description: 'Deploy customer mobile banking apps, fraud monitoring consoles, and automated regulatory reporting.' },
    ],
    overview: {
      paragraph1:
        'Banks, non-banking financial companies (NBFCs), digital lenders, and wealth managers navigate unprecedented challenges from legacy mainframe technical debt, increasing cyber-fraud sophistication, and stringent capital reserve regulations. Friction in customer onboarding leads prospective depositors and borrowers to fintech alternatives.',
      paragraph2:
        'By modernizing core banking architectures with cloud-native microservices, automated biometric e-KYC, and real-time transaction monitoring, financial institutions launch competitive lending products in weeks while safeguarding customer trust and regulatory compliance.',
    },
    challenges: [
      { title: 'Rigid Core Banking Mainframes', description: 'Legacy core systems make launching new deposit or loan products a slow, multi-month endeavor.' },
      { title: 'Customer Onboarding Abandonment', description: 'Complex manual identity verification and branch visit requirements cause up to 60% applicant abandonment.' },
      { title: 'Sophisticated Synthetic Identity Fraud', description: 'Traditional rule-based fraud filters fail to detect coordinated synthetic identity rings and payment tampering.' },
      { title: 'Burdensome Regulatory Auditing', description: 'Assembling manual reports for central banks (RBI, Fed, OCC) requires weeks of painful ledger reconciliation.' },
    ],
    solutions: [
      { service: 'Core Modernization & Microservices', action: 'Build cloud-native API abstraction layers over legacy Temenos, Finacle, and FIS core ledgers.', outcome: 'Accelerates new loan and account product time-to-market by 4x.' },
      { service: 'Digital Product Engineering', action: 'Create intuitive, secure consumer and commercial mobile banking applications with biometric authentication.', outcome: 'Increases digital account opening completion rates by up to 55%.' },
      { service: 'Machine Learning & Fraud Intelligence', action: 'Deploy real-time transaction anomaly detection scoring millions of transactions in under 20 milliseconds.', outcome: 'Reduces card and ACH payment fraud losses by up to 40%.' },
      { service: 'Workflow Automation & Loan Origination', action: 'Automate financial statement extraction, credit scoring, and digital promissory note execution.', outcome: 'Compresses commercial loan origination cycle from 18 days to 48 hours.' },
      { service: 'Zero-Trust Security & PCI Compliance', action: 'Implement end-to-end HSM key encryption, tokenized card vaults, and immutable blockchain ledger logs.', outcome: 'Maintains 100% compliance during central bank and external financial audits.' },
    ],
    useCases: [
      {
        title: 'Commercial SME Loan Origination Platform',
        before: 'Business loan applicants waited 3 weeks for credit committees to manually review tax returns and bank statements.',
        withUs: 'Built an automated digital loan origination system that pulls live banking data via Plaid, runs cash-flow algorithms, and generates pre-approvals.',
        result: 'Decreased loan funding time from 21 days to under 48 hours, doubling loan book growth.',
      },
      {
        title: 'Real-Time Payment Fraud Prevention Engine',
        before: 'Rule-based fraud filters caused false-positive card declines for 8% of legitimate international travelers while missing account takeover attacks.',
        withUs: 'Deployed an event-driven behavioral machine learning model that evaluates device fingerprinting and velocity in real time.',
        result: 'Cut false-positive payment declines by 65% and prevented $3.4M in unauthorized account takeover losses.',
      },
      {
        title: 'Automated Central Bank Regulatory Reporting',
        before: 'Compliance teams spent 12 business days each quarter manually extracting and formatting risk data across 8 disconnected systems.',
        withUs: 'Engineered an automated data pipeline that continuously aggregates loan-to-value, liquidity ratios, and capital reserves.',
        result: 'Delivered one-click regulatory reporting with full audit lineage, saving 500 hours annually.',
      },
    ],
    outcomes: [
      { label: 'Loan Funding Speed', value: '70–85% faster', subtext: 'Target reduction in commercial loan origination cycle' },
      { label: 'Onboarding Conversion', value: '45–60% higher', subtext: 'Frictionless digital e-KYC and identity verification' },
      { label: 'Fraud Loss Prevention', value: '35–45% savings', subtext: 'Sub-20ms behavioral anomaly detection on all payments' },
      { label: 'Audit Compliance', value: '100% certified', subtext: 'Strict adherence to central bank, SOC 2, and PCI-DSS rules' },
    ],
    integrations: ['Temenos Core', 'Finacle (Infosys)', 'FIS Global', 'Salesforce Financial Services Cloud', 'Plaid Financial', 'Experian / Equifax APIs', 'Stripe Core', 'Mambu Cloud Banking'],
    compliance: ['Central Bank Regulations (RBI, Fed, OCC)', 'PCI-DSS Level 1', 'AML / KYC Financial Rules', 'SOC 2 Type II & ISO 27001', 'GLBA Financial Privacy'],
    faqs: [
      { question: 'Can you integrate with on-premise core banking systems like Temenos or Finacle?', answer: 'Yes. We engineer secure API orchestration middleware and enterprise message queues that connect seamlessly with both on-premise mainframes and modern cloud banking cores.' },
      { question: 'How do you guarantee sub-second latency for payment transactions?', answer: 'Our payment processing pipelines leverage in-memory data grids, asynchronous event streaming (Kafka), and geographically distributed cloud nodes, consistently executing in under 200 milliseconds.' },
      { question: 'What security standards are enforced for customer banking credentials?', answer: 'We implement zero-trust security postures with Hardware Security Module (HSM) encryption, biometric multi-factor authentication, and strict PCI-DSS Level 1 compliance.' },
      { question: 'Does the loan origination system support automated credit scoring models?', answer: 'Yes. We incorporate custom risk models that combine traditional bureau scores with real-time open banking cash-flow metrics to assess borrower capacity accurately.' },
      { question: 'How is data maintained during high-volume end-of-month transaction surges?', answer: 'Our cloud architectures auto-scale dynamically across multiple availability zones, ensuring 99.999% uptime and zero transaction drops during peak payroll and holiday runs.' },
    ],
    finalCta: {
      headline: 'Build a secure, modern financial institution engineered for the digital era',
      subheadline: 'Accelerate loan origination, eliminate onboarding friction, and safeguard customer assets.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Schedule architecture review',
    },
    images: {
      hero: {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
        alt: 'Global financial district corporate headquarters and banking tower',
        caption: 'Enterprise financial services, core banking modernization, and fintech architecture',
      },
      architecture: {
        url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1600&q=80',
        alt: 'Financial portfolio analyst reviewing algorithmic market models',
      },
      operations: {
        url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1600&q=80',
        alt: 'Corporate investment banker consulting with enterprise client',
      },
      showcase: {
        url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80',
        alt: 'Financial risk and loan underwriting review session',
      },
    },
  },
};
