export interface WhySpotxpertItem {
  slug: string;
  title: string;
  heroHeadline: string;
  heroSubheadline: string;
  badge: string;
  metrics: { value: string; label: string; desc: string }[];
  corePillars: {
    title: string;
    description: string;
    icon: string;
    points?: string[];
    details?: string[];
  }[];
  comparisonTable?: {
    feature: string;
    spotxpert: string;
    traditionalOutsourcing: string;
    inHouseHiring: string;
  }[];
  processSteps?: {
    step: string;
    name: string;
    description: string;
  }[];
  testimonials: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  image: {
    url: string;
    alt: string;
  };
}

export const WHY_SPOTXPERT_DATA: Record<string, WhySpotxpertItem> = {
  'agile-pods-model': {
    slug: 'agile-pods-model',
    title: 'Our Agile Pods Model',
    heroHeadline: 'Dedicated, Self-Organizing Agile Pods Engineered for Extreme Velocity',
    heroSubheadline:
      'Eliminate the friction of staff augmentation and slow recruitment. SpotXpert deploys battle-tested, cross-functional engineering pods that integrate into your sprint cycles from Day 1.',
    badge: 'Core Delivery Engine',
    metrics: [
      { value: '2 Weeks', label: 'Time to First Sprint', desc: 'Pre-assembled pods hit the ground running immediately' },
      { value: '3.2x', label: 'Faster Time-to-Market', desc: 'Compared to standard in-house hiring ramp-ups' },
      { value: '95%', label: 'Team Retention Rate', desc: 'Zero mid-sprint developer turnover disruptions' },
      { value: '100%', label: 'IP Ownership', desc: 'All code, tests, and documentation belong to your company' },
    ],
    corePillars: [
      {
        title: 'Cross-Functional Squad Composition',
        description: 'Every pod is a balanced, cohesive delivery unit equipped with all competencies needed to build, test, and release production software.',
        icon: 'Users',
        points: [
          'Principal Solution Architect (Technical governance & design)',
          'Senior Fullstack & Cloud Engineers (8+ years average experience)',
          'QA Automation Engineer (Continuous CI/CD regression suites)',
          'Agile Delivery Lead / Scrum Master (Sprint planning & blocker clearing)',
        ],
      },
      {
        title: 'Tight Timezone Synchronicity',
        description: 'We guarantee a minimum of 4–5 hours of active daily overlap with your US, UK, or European product team.',
        icon: 'Clock',
        points: [
          'Live video daily standups and sprint retrospectives',
          'Shared Slack / Teams channels for real-time pairing',
          'Continuous code reviews with sub-2 hour turnaround',
          'Follow-the-sun overnight deployment runs',
        ],
      },
      {
        title: 'Radical Engineering Transparency',
        description: 'No black-box agency handoffs. You have direct access to every engineer, GitHub repo, Jira board, and CI/CD pipeline.',
        icon: 'ShieldCheck',
        points: [
          'Commits pushed directly to your corporate repositories',
          'Real-time sprint velocity and burndown visibility',
          'Weekly working software demonstrations (no slide decks)',
          'Flexible pod scaling up or down with 30-day notice',
        ],
      },
    ],
    comparisonTable: [
      {
        feature: 'Ramp-up Time',
        spotxpert: '1 to 2 Weeks (Pre-assembled)',
        traditionalOutsourcing: '2 to 3 Months (Sourcing resumes)',
        inHouseHiring: '3 to 6 Months (Recruiting + notice periods)',
      },
      {
        feature: 'Team Cohesion',
        spotxpert: 'Engineers have delivered together on past projects',
        traditionalOutsourcing: 'Random contractors assembled ad-hoc',
        inHouseHiring: 'Must build team chemistry from scratch',
      },
      {
        feature: 'Accountability',
        spotxpert: 'Sprint delivery SLAs & architectural governance',
        traditionalOutsourcing: 'Hours billed regardless of velocity',
        inHouseHiring: 'Internal management overhead & severance risk',
      },
      {
        feature: 'Tech Stack Fluency',
        spotxpert: 'Pre-vetted in Next.js, Python, AWS, and GenAI',
        traditionalOutsourcing: 'Generic legacy developers needing retraining',
        inHouseHiring: 'High salaries ($180k+) with competing equity offers',
      },
    ],
    processSteps: [
      { step: '01', name: 'Discovery & Pod Sizing', description: 'We evaluate your product backlog, architectural runway, and target release date to size the exact pod composition.' },
      { step: '02', name: 'Environment Setup (Week 1)', description: 'Pod members obtain repository access, set up local containers, configure CI/CD pipelines, and attend initial architecture walkthroughs.' },
      { step: '03', name: 'Sprint Zero & Velocity Run (Week 2)', description: 'Ship the first production feature or spike, establishing baseline velocity and calibration.' },
      { step: '04', name: 'Continuous Release Rhythm', description: 'Bi-weekly sprint planning, daily standups, and Friday demo releases to production staging.' },
    ],
    testimonials: [
      {
        quote: 'SpotXpert Agile Pod felt like an organic extension of our core San Francisco team. Within 3 weeks, their pod shipped the core GraphQL APIs that allowed us to launch our Series B product on schedule.',
        author: 'David Kingsley',
        role: 'Chief Technology Officer',
        company: 'NovaPay Global',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      },
    ],
    faqs: [
      { question: 'Can we interview the engineers before they join our pod?', answer: 'Absolutely. We share complete technical profiles and facilitate technical chemistry sessions between your tech leads and our pod engineers.' },
      { question: 'What tools do the pods work in?', answer: 'We work inside your toolchain: your GitHub/GitLab, your Jira/Linear, your Slack/Teams, and your AWS/GCP accounts. No proprietary SpotXpert walled gardens.' },
      { question: 'What is the minimum engagement duration for a pod?', answer: 'Our pods typically operate in 3-month, 6-month, or multi-year continuous delivery cycles, with flexible 30-day adjustment terms.' },
      { question: 'Can we convert pod members to full-time employees?', answer: 'Yes. We offer flexible contract-to-hire options for long-term partners who wish to internalize key engineers after an initial project phase.' },
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
      alt: 'Engaged agile software engineering pod collaborating in modern tech office',
    },
  },
  'quality-security-dna': {
    slug: 'quality-security-dna',
    title: 'Quality & Security DNA',
    heroHeadline: 'Zero-Trust Architecture, Rigorous Compliance & Shift-Left Security',
    heroSubheadline:
      'We build software meant to withstand nation-state audits and millions of transactions. Certified in SOC 2 Type II, ISO 27001, HIPAA, and PCI-DSS, our security controls are embedded in every line of code.',
    badge: 'Enterprise Compliance',
    metrics: [
      { value: 'SOC 2', label: 'Type II Certified', desc: 'Independently audited operational security' },
      { value: 'ISO 27001', label: 'Certified Information Security', desc: 'Global information security standard' },
      { value: '92%+', label: 'Automated Test Coverage', desc: 'Mandatory unit, integration, and e2e suites' },
      { value: 'Zero', label: 'Critical Vulnerabilities at Release', desc: 'Automated blocking SAST/DAST CI gates' },
    ],
    corePillars: [
      {
        title: 'Shift-Left Security & Automated SAST/DAST',
        description: 'Vulnerabilities are caught at pull-request creation, not post-deployment. Every code commit triggers automated security scans.',
        icon: 'ShieldCheck',
        details: [
          'Snyk & SonarQube automated dependency vulnerability scanning',
          'Secret leak prevention (TruffleHog & git-secrets hooks)',
          'Container image vulnerability scanning with Trivy',
          'Automated OWASP Top 10 API penetration tests',
        ],
      },
      {
        title: 'Zero-Trust Cloud Architecture',
        description: 'We follow the principle of least privilege across every IAM role, microservice connection, and database query.',
        icon: 'Lock',
        details: [
          'Mutual TLS (mTLS) encryption for inter-service communication',
          'Ephemeral AWS IAM roles and HashiCorp Vault secrets rotation',
          'Strict network VPC isolation and private link databases',
          'Biometric and FIDO2 multi-factor enforcement for all team access',
        ],
      },
      {
        title: 'Continuous Quality Assurance & Test Engineering',
        description: 'Quality is not an afterthought in our delivery. Dedicated QA engineers write automated tests alongside feature development.',
        icon: 'CheckCircle2',
        details: [
          'Playwright & Cypress end-to-end user journey automation',
          'Jest / Vitest unit test suites running in under 90 seconds',
          'K6 distributed load testing to simulate 50,000 concurrent users',
          'Automated visual regression testing on chromatic & percy',
        ],
      },
    ],
    testimonials: [
      {
        quote: 'SpotXpert security posture passed our banking partner 3-month vendor security audit with flying colors on the very first round. Their attention to SOC 2 and encrypted data segregation is unmatched.',
        author: 'Sarah Jenkins',
        role: 'Chief Information Security Officer',
        company: 'Vanguard Digital Lending',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      },
    ],
    faqs: [
      { question: 'Do you sign Business Associate Agreements (BAAs) for HIPAA compliance?', answer: 'Yes. We sign BAAs with healthcare clients and ensure all developers working on PHI are HIPAA-certified with dedicated isolated hardware environments.' },
      { question: 'Who owns the intellectual property and code security keys?', answer: 'You own 100% of all intellectual property, source code, patents, and test artifacts. Code is written directly in your repositories, and all secrets remain in your KMS/Vault.' },
      { question: 'How often do you conduct third-party penetration testing?', answer: 'We undergo annual third-party SOC 2 Type II audits and ISO 27001 surveillance audits, as well as bi-annual penetration tests conducted by independent CREST-certified ethical hackers.' },
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&q=80',
      alt: 'Cybersecurity lock and encrypted digital data shields',
    },
  },
  'global-delivery-network': {
    slug: 'global-delivery-network',
    title: 'Global Delivery Network',
    heroHeadline: 'Strategic Delivery Hubs Across 4 Continents: Speed, Scale & Local Presence',
    heroSubheadline:
      'Experience the best of both worlds: local onshore executive leadership and client success directors combined with deep technical delivery pods located in premier global engineering centers.',
    badge: 'Worldwide Presence',
    metrics: [
      { value: '5 Hubs', label: 'Strategic Global Offices', desc: 'US, UK, Canada & India engineering hubs' },
      { value: '1,000+', label: 'Full-Time Engineers', desc: 'Top 1% vetted developers and architects' },
      { value: '24/7', label: 'Follow-The-Sun Ops', desc: 'Round-the-clock development and cloud monitoring' },
      { value: '900+', label: 'Clients Worldwide', desc: 'From seed-stage startups to Fortune 500 enterprises' },
    ],
    corePillars: [
      {
        title: 'Onshore Leadership, Offshore Scale',
        description: 'Your project is spearheaded by local Client Partners and Principal Architects who meet in your office or time zone, backed by dedicated pods.',
        icon: 'Globe',
        details: [
          'United States: San Francisco, New York, Chicago',
          'United Kingdom: London Tech City',
          'Canada: Toronto Innovation Hub',
          'India: Bengaluru & Ahmedabad Advanced AI Centers',
        ],
      },
      {
        title: 'Top 1% Technical Vetting Rigor',
        description: 'We receive over 45,000 engineering applications annually and accept fewer than 1.2%, testing for architectural design, live coding, and English fluency.',
        icon: 'Award',
        details: [
          'Rigorous 5-stage technical evaluation process',
          'Live architectural whiteboard and system design defense',
          'Comprehensive English business communication testing',
          'Continuous mandatory upskilling in GenAI, AWS, and modern stacks',
        ],
      },
      {
        title: 'Follow-The-Sun 24/7 Delivery Cadence',
        description: 'By coordinating hand-offs between Western and Eastern time zones, your development velocity effectively doubles without burning out developers.',
        icon: 'Clock',
        details: [
          'US/UK teams specify tickets and clarify questions during morning overlap',
          'Engineering pods build and push commits through their core day',
          'Continuous automated CI pipelines run tests overnight',
          'Working builds ready for review when you wake up',
        ],
      },
    ],
    testimonials: [
      {
        quote: 'Having our Client Success Director in London while our dedicated engineering squad worked in Bengaluru gave us unbelievable velocity. Bug turnaround was literally overnight.',
        author: 'Arthur Pendelton',
        role: 'VP of Product',
        company: 'FinTrack UK',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      },
    ],
    faqs: [
      { question: 'Where are your engineering centers located?', answer: 'Our primary advanced engineering centers are located in Bengaluru and Ahmedabad, India, supported by regional leadership offices in San Francisco, London, and Toronto.' },
      { question: 'What happens during local holidays?', answer: 'We operate on a unified global calendar aligned with our clients local holidays, ensuring zero unexpected downtime for your sprint releases.' },
      { question: 'Can our leadership team visit the global engineering hubs?', answer: 'Yes! We frequently host our client executive teams at our development centers for week-long architecture kickoffs and team-bonding hackathons.' },
    ],
    image: {
      url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
      alt: 'Global communications network view of illuminated world continents',
    },
  },
};

export function getWhySpotxpertBySlug(slug: string): WhySpotxpertItem | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  if (WHY_SPOTXPERT_DATA[normalized]) return WHY_SPOTXPERT_DATA[normalized];
  if (normalized === 'agile-pods' || normalized === 'pods') return WHY_SPOTXPERT_DATA['agile-pods-model'];
  if (normalized === 'security' || normalized === 'quality') return WHY_SPOTXPERT_DATA['quality-security-dna'];
  if (normalized === 'global' || normalized === 'delivery-network') return WHY_SPOTXPERT_DATA['global-delivery-network'];
  return undefined;
}
