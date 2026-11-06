export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface ClientOverviewData {
  clientName: string;
  industry: string;
  companySize: string;
  product: string;
  location: string;
  description: string;
  dashboardImage: string;
}

export interface ChallengeCard {
  title: string;
  description: string;
}

export interface SolutionCard {
  title: string;
  description: string;
}

export interface ImpactCard {
  title: string;
  description: string;
  icon: 'clock' | 'users' | 'globe';
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface ContactLead {
  name: string;
  role: string;
  avatar: string;
  phone: string;
  description: string;
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  categoryTags: string[];
  offering: string;
  industry: string;
  image: string;
  heroBadge: string;
  heroSubheadline: string;
  metrics: CaseStudyMetric[];
  clientOverview: ClientOverviewData;
  challenges: {
    intro: string;
    cards: ChallengeCard[];
  };
  solution: {
    intro: string;
    cards: SolutionCard[];
  };
  businessImpact: {
    intro: string;
    cards: ImpactCard[];
  };
  testimonials: CaseStudyTestimonial[];
  relatedSlugs: string[];
  contactLead: ContactLead;
}

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: '3d-toy-manufacturer-scales-revenue-operations-saving-160-hours-a-month-with-claude',
    slug: '3d-toy-manufacturer-scales-revenue-operations-saving-160-hours-a-month-with-claude',
    title: '3D Toy Manufacturer Scales Revenue Operations, Saving 160 Hours a Month with Claude',
    excerpt:
      'Built a revenue operations app for a 3D toy manufacturer on Claude, qualifying inbound leads, routing them automatically, and generating delivery invoices while saving 160 hours monthly.',
    categoryTags: ['Manufacturing', 'Revenue Operations', 'Claude AI'],
    offering: 'AI/ML Engineering',
    industry: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    heroBadge: 'Manufacturing',
    heroSubheadline:
      'Built a revenue operations app for a 3D toy manufacturer. It qualifies inbound leads, routes them to the team, and generates invoices automatically after delivery, with human review built in.',
    metrics: [
      {
        value: '1,000+',
        label: 'Leads handled per month',
      },
      {
        value: '100+',
        label: 'Invoices automated per month',
      },
      {
        value: '160 hrs',
        label: 'Saved per month (~40 hrs every week)',
      },
    ],
    clientOverview: {
      clientName: 'Shadowfax 3D',
      industry: 'Manufacturing',
      companySize: '10–50 employees',
      product: 'Custom 3D-Printed Toy Design & Production',
      location: 'Bengaluru, India',
      description:
        'A high-growth 3D toy manufacturer specializing in bespoke articulated figures and rapid prototyping. Their operational constraint was not 3D printing throughput, but the manual paperwork surrounding inbound lead triage, customer quotation, and post-delivery invoicing.',
      dashboardImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    },
    challenges: {
      intro:
        "A growing toy manufacturer's biggest constraint was not production but the paperwork around it. For this 3D toy maker, the challenge was that every lead and invoice depended on a small team doing the work by hand, and growth only made it worse.",
      cards: [
        {
          title: 'Revenue operations ran on manual work',
          description:
            "Leads arrived from the website and were sorted, followed up, and recorded by hand. Invoices were created one at a time once an order shipped. Each step was manageable on its own. Together they took up a large part of the team's week and left little room for anything else.",
        },
        {
          title: 'The process could not scale',
          description:
            'Every new order or enquiry meant more manual effort. Growing sales meant hiring more people just to keep up with admin, and the cost of that grew as fast as revenue. A team of 10 to 50 could not afford to scale that way.',
        },
        {
          title: 'A small team became the bottleneck',
          description:
            'Lead qualification and invoicing sat with a few people. When they were busy, enquiries waited and invoices went out late. That slowed response times, delayed payments, and pulled the team away from operations and growth.',
        },
      ],
    },
    solution: {
      intro:
        "We built a multi-revenue operations app on Claude, integrated server-side through Anthropic's Python SDK. One system covers the full revenue cycle. It qualifies inbound leads from the web and, once a product is delivered, generates the invoice automatically. A shared layer underneath handles validation, review, and notifications, so the team only steps in where judgment is needed.",
      cards: [
        {
          title: 'Inbound lead qualification',
          description:
            'Prospects from the website are captured and read by Claude, which scores each lead on fit and intent and summarizes what they want. Qualified leads reach the team with context already attached. Low-fit enquiries are filtered out, so the team spends its time on real opportunities.',
        },
        {
          title: 'Automatic invoice generation',
          description:
            "When a client's order is delivered, the system creates the invoice from the order record, including items, quantities, pricing, and client details. No one re-enters data. Invoices are produced consistently and on time, which keeps cash moving.",
        },
        {
          title: 'Human review with in-app notifications',
          description:
            "Claude's output is not sent blindly. Leads or invoices that are unusual, incomplete, or above a set threshold are flagged for review, and the right person gets a notification in the app. They approve, edit, or reject in one place. Automation handles routine work and people handle exceptions.",
        },
        {
          title: 'One connected revenue system',
          description:
            'Leads, orders, deliveries, and invoices live in one app instead of scattered sheets and tools. Each stage feeds the next, so a qualified lead becomes an order, a delivered order becomes an invoice, and the team sees the whole pipeline in one view.',
        },
      ],
    },
    businessImpact: {
      intro:
        'With the system live, the manufacturer handles more than 1,000 leads and 100+ invoices a month without adding headcount. The team now spends its time on operations and growth instead of data entry.',
      cards: [
        {
          title: '160 hours saved every month',
          description:
            'Lead sorting and invoicing used to take about 40 hours a week. Automation now handles it, freeing around 160 hours a month. That time moved to operations, production planning, and customer relationships.',
          icon: 'clock',
        },
        {
          title: 'About $14,400 saved a year',
          description:
            'The time saved is worth roughly $1,200 (₹1 lakh) a month in cost, or about $14,400 (₹12 lakh) a year, and the saving grows as volume grows. Revenue can scale without a matching rise in admin cost.',
          icon: 'globe',
        },
        {
          title: 'Built to scale, with a roadmap',
          description:
            'The business can now take on more leads and orders without the process breaking. Next steps could include automated payment reminders, reorder prompts for repeat customers, revenue reporting dashboards, and extending the system to purchasing and supplier management.',
          icon: 'users',
        },
      ],
    },
    testimonials: [
      {
        quote:
          'We used to spend our week chasing leads and creating invoices. Now the system does the routine work and we step in only when it matters. We can finally focus on running and growing the business.',
        author: 'Vinay',
        role: 'Operations Lead',
        company: 'Shadowfax',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      },
    ],
    relatedSlugs: [
      'student-credit-platform-cuts-manual-transcript-entry-by-99-percent-with-claude',
      'global-inspection-company-automates-order-processing-for-9-business-lines-with-claude',
    ],
    contactLead: {
      name: 'Maddy',
      role: 'Principal AI Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (858) 529-5660',
      description: 'Creating a tech product roadmap and building scalable apps for your organization.',
    },
  },
  {
    id: 'cs-1',
    slug: 'real-estate-marketing-platform-turns-listing-data-into-case-studies-in-seconds-with-claude',
    title: 'Real estate marketing platform turns listing data into case studies in seconds with Claude',
    excerpt:
      'We helped a real estate marketing platform turn sold listings into publish-ready case studies and social posts, with more than 6,000 generated across 50+ brokerages.',
    categoryTags: ['Digital natives', 'AI/ML Engineering', 'Product Engineering'],
    offering: 'AI/ML Engineering',
    industry: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    heroBadge: 'Digital natives',
    heroSubheadline:
      'Built the AI capabilities behind KeyStory, turning a sold MLS listing into a written property case study, brand-matched design, and platform-ready social posts, with an in-app copilot that reads the live web.',
    metrics: [
      {
        value: '6,000+',
        label: 'Property case studies generated',
      },
      {
        value: '50+',
        label: 'Brokerages actively generating',
      },
      {
        value: '<40 seconds',
        label: 'Median time from MLS listing to publish-ready case study',
      },
    ],
    clientOverview: {
      clientName: 'Testimonial Tree, Inc.',
      industry: 'Real estate technology',
      companySize: 'Small',
      product: 'Claude Sonnet 4.6',
      location: 'Florida, United States',
      description:
        'Testimonial Tree builds reputation and marketing software for residential real estate agents, teams, and brokerages. Its KeyStory product turns closed deals and client reviews into ready-to-publish marketing, including property case studies, social posts, and embeddable review widgets.',
      dashboardImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1000&q=80',
    },
    challenges: {
      intro:
        "A real estate agent's strongest marketing assets are the homes they have sold and the clients behind those sales. For Testimonial Tree, the challenge was that turning those assets into marketing demanded more time and design skill than most agents could spare.",
      cards: [
        {
          title: 'Turning a sale into a story was slow, manual work',
          description:
            "Each case study meant pulling listing facts from the MLS, sourcing local market statistics, choosing photos, and writing several hundred words of copy styled to the agent's brand. Given that effort, most agents never wrote one, and their sales stayed as raw MLS records and one-line testimonials that did little to win new clients.",
        },
        {
          title: 'Every social network demanded its own version of the post',
          description:
            'Facebook favors a short teaser with one hero image, Instagram an energetic carousel with dense hashtags, and LinkedIn a professional, data-led tone. Agents rewrote every post for each network and also had to judge which photos would perform and where overlay text could sit without hiding key features of the home, which turned a routine post into design work.',
        },
        {
          title: "The assistant couldn't see the web",
          description:
            "Users needed guidance on the platform as well as help with live web content, such as summarizing a listing page or reviewing a brokerage's website. A conventional chatbot could only handle the first, which sent users to a search engine mid-task. Adding web access the usual way meant building and running crawling and scraping infrastructure alongside the product.",
        },
      ],
    },
    solution: {
      intro:
        "Simform built KeyStory's AI capabilities on Claude Sonnet 4.6 and integrated it server-side through Anthropic's Python SDK. One model writes the copy, reads the photos, extracts the brand, and powers the in-app assistant. A shared layer beneath all four handles the guardrails, keeps each tenant's data separate, and tracks cost per call. Because Claude reads the listing's actual photos alongside its facts, the writing describes the specific home that sold.",
      cards: [
        {
          title: 'Listing data and photos in one call',
          description:
            "When a real estate agent selects a sold listing, KeyStory pulls its details from the platform's own database and calls the MLS API only as a fallback, fetching photos, market statistics, and community data in parallel. Claude receives these facts, plus up to six property photos, in one call and writes each section in the agent's first-person voice. A companion call reads the agent's website or logo and extracts brand colors and typography, so the page matches their identity.",
        },
        {
          title: 'Exact-value rules with automatic retries',
          description:
            'Both prompts carry the listing\'s exact values, such as address, square footage, and year built, and prohibit placeholders like "N/A", so a published page never shows a figure the listing does not support. If a response isn\'t valid JSON, the service retries once with corrective instructions. Each job runs in the background with a trace ID the app uses to check progress, and every read and write stays inside that tenant\'s own section of the database.',
        },
        {
          title: 'A voice registry and vision-based photo ranking',
          description:
            "A central registry holds each network's voice, slide limits, and hashtag rules. Claude uses it to generate the caption, hashtags, and slide plan for Facebook, Instagram, and LinkedIn in one call, and agents can regenerate a single caption or slide on its own. In a separate vision call at zero temperature, Claude scores each listing photo, labels what it shows, and marks where overlay text can sit, producing the same ranking on every run.",
        },
        {
          title: 'Anthropic-hosted web search and fetch',
          description:
            'When a message contains a URL, the copilot routes it to Anthropic\'s server-side web search and web fetch tools, which run inside the same API call. Search stays within the domains the user referenced, and each tool is capped at three uses per message. If the web path fails, the copilot answers through its standard path instead. Out-of-scope questions, such as financial or legal advice, get a scripted reply that points the user to a KeyStory capability.',
        },
      ],
    },
    businessImpact: {
      intro:
        'With the Claude-powered capabilities live across more than 100 tenant organizations, a closed deal now becomes a case study, platform-ready social posts, and brand-matched widgets, without the manual work that kept most agents from starting.',
      cards: [
        {
          icon: 'clock',
          title: 'Case studies generated in seconds',
          description:
            "A multi-section case study, grounded in the listing's exact figures and its actual photos, now takes a median of under 40 seconds to generate. Agents have produced more than 6,000 of them, with 99.9% completing successfully, and every price, square footage, and year built comes straight from the listing record.",
        },
        {
          icon: 'users',
          title: 'A ready post for every network',
          description:
            'Agents get a caption, hashtags, and a slide plan for Facebook, Instagram, and LinkedIn in one step, each written the way that network rewards, with the strongest photos already chosen and the space for overlay text already marked. If a caption or a single slide misses, it can be redone on its own.',
        },
        {
          icon: 'globe',
          title: 'Web answers inside the platform',
          description:
            'When a question points to a web page, the copilot reads that page and answers from what it finds, so users stay inside KeyStory instead of breaking off to search. Testimonial Tree gained that capability without building or running its own crawler.',
        },
      ],
    },
    testimonials: [
      {
        quote:
          'After researching and qualifying several software development service options for the development of a cross-platform application, we fortunately selected Simform as our partner. This turned out to be a very good decision overall, as their performance has been outstanding. The complete engagement from the Simform staff is remarkable. Their team diligently assesses and executes in a very competent manner.',
        author: 'Sonny Cutwright',
        role: 'Operations Manager',
        company: 'Bon Appetit',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      },
      {
        quote:
          'Simform rearchitected and modernized our subscription management & billing platform as part of the multi-phase development initiative. The team quickly understood our business requirements and delivered a modern, modular architecture aligned with our scaling needs. Without disrupting our operational workflows, Simform handled complex data migration with precision and supported our legacy modernization journey with seamless ERP integrations.',
        author: 'Robel Yemane',
        role: 'Head of Engineering',
        company: 'Privilee',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      },
    ],
    relatedSlugs: [
      'student-credit-platform-cuts-manual-transcript-entry-by-99-percent-with-claude',
      'global-inspection-company-automates-order-processing-for-9-business-lines-with-claude',
    ],
    contactLead: {
      name: 'Hiren Dhaduk',
      role: 'Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (858) 529-5660',
      description: 'Creating a tech product roadmap and building scalable apps for your organization.',
    },
  },
  {
    id: 'cs-2',
    slug: 'global-inspection-company-automates-order-processing-for-9-business-lines-with-claude',
    title: 'Global Inspection Company Automates Order Processing for 9 Business Lines with Claude',
    excerpt:
      'We helped a global testing, inspection, and certification company automate request processing across nine lines of business and reduce manual effort in preparing ERP actions.',
    categoryTags: ['Digital natives', 'AI/ML Engineering', 'Data Engineering'],
    offering: 'AI/ML Engineering',
    industry: 'Testing & Inspection',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80',
    heroBadge: 'Digital natives',
    heroSubheadline:
      'Engineered an enterprise multimodal extraction and validation engine powered by Claude Sonnet, transforming unstructured client certification requests into validated ERP work orders in seconds.',
    metrics: [
      {
        value: '9',
        label: 'Business lines automated simultaneously',
      },
      {
        value: '84%',
        label: 'Reduction in order intake cycle time',
      },
      {
        value: '99.4%',
        label: 'Data extraction accuracy across formats',
      },
    ],
    clientOverview: {
      clientName: 'EuroLab Global Testing Services',
      industry: 'Testing, inspection & certification',
      companySize: 'Enterprise (10,000+ employees)',
      product: 'Claude 3.5 Sonnet & SAP ERP',
      location: 'Geneva, Switzerland',
      description:
        'EuroLab provides world-class quality verification, industrial audits, and materials certification across automotive, consumer electronics, chemical, and aerospace industries worldwide.',
      dashboardImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    },
    challenges: {
      intro:
        'Processing thousands of incoming industrial sample requests each month required manual entry of chemical compounds, legal standards, and batch IDs from complex multi-page PDFs and handwritten lab slips.',
      cards: [
        {
          title: 'Unstructured client test specifications',
          description:
            'Clients submitted test requests in dozens of disparate formats, ranging from scanned certificates to multi-tab spreadsheets. Clerks spent up to 45 minutes verifying each incoming shipment.',
        },
        {
          title: 'Strict ISO and regulatory compliance mandates',
          description:
            'A single mistyped parameter or chemical threshold could invalidate an entire certification process, leading to liability risks and costly re-testing procedures.',
        },
        {
          title: 'High workload peaks during global audit cycles',
          description:
            'Seasonal surges during automotive and aviation compliance deadlines led to backlog delays of over 10 business days, negatively impacting enterprise customer retention.',
        },
      ],
    },
    solution: {
      intro:
        'Simform designed a high-throughput document intelligence gateway with Claude Sonnet that automatically parses technical certificates, cross-validates testing methods with ISO libraries, and writes formatted actions directly into SAP ERP.',
      cards: [
        {
          title: 'Multimodal document digestion',
          description:
            'Claude processes complex tables, technical schematics, and chemical formulations in parallel, extracting over 70 parameters per document with strict schema constraints.',
        },
        {
          title: 'Automated compliance rule validation',
          description:
            'Extracted figures are cross-referenced with regional regulatory databases before ERP entry, highlighting deviations for supervisor approval in a single click.',
        },
        {
          title: 'Direct bidirectional ERP synchronization',
          description:
            'Automated SAP BAPI connections create work orders, issue sample tracking barcodes, and notify designated inspection labs automatically.',
        },
        {
          title: 'Audit-ready cryptographic logs',
          description:
            'Every model decision, bounding box coordinate, and validation checkpoint is logged to an immutable ledger for ISO 17025 audit compliance.',
        },
      ],
    },
    businessImpact: {
      intro:
        'The automated intake platform cut order entry times from 45 minutes to under 2 minutes, enabling EuroLab to scale processing capacity by 400% without adding headcount.',
      cards: [
        {
          icon: 'clock',
          title: 'Intake time dropped from 45m to 90s',
          description:
            'Orders are verified, mapped, and queued into the appropriate lab schedule in under 90 seconds, virtually eliminating sample processing backlogs.',
        },
        {
          icon: 'users',
          title: 'Zero manual transcription errors',
          description:
            'Validation rules caught over 1,400 client specification discrepancies before testing commenced, saving an estimated $3.2M in rework costs.',
        },
        {
          icon: 'globe',
          title: 'Global 24/7 continuous intake',
          description:
            'Regional operations across 14 countries now feed into a unified workflow, standardizing certification turnaround times globally.',
        },
      ],
    },
    testimonials: [
      {
        quote:
          'Simform delivered a game-changing AI pipeline for our global laboratory operations. The extraction precision and seamless SAP integration have exceeded our aggressive benchmarks and delight our industrial clients daily.',
        author: 'Dr. Marcus Weber',
        role: 'Global VP of Digital Operations',
        company: 'EuroLab Certification',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      },
    ],
    relatedSlugs: [
      'real-estate-marketing-platform-turns-listing-data-into-case-studies-in-seconds-with-claude',
      'vending-operations-provider-cuts-stockouts-30-percent-with-unified-data-platform-on-databricks',
    ],
    contactLead: {
      name: 'Hiren Dhaduk',
      role: 'Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (858) 529-5660',
      description: 'Creating a tech product roadmap and building scalable apps for your organization.',
    },
  },
  {
    id: 'cs-3',
    slug: 'sports-technology-company-accelerates-multi-tenant-saas-development-with-claude',
    title: 'Sports technology company accelerates multi-tenant SaaS development with Claude',
    excerpt:
      'We helped a sports technology company build a multi-tenant sports camp management platform with Claude embedded across the SDLC, accelerating feature delivery, reducing regression effort, and improving engineering productivity.',
    categoryTags: ['Digital natives', 'AI/ML Engineering', 'Product Engineering'],
    offering: 'Product Engineering',
    industry: 'Sports Technology',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80',
    heroBadge: 'Digital natives',
    heroSubheadline:
      'Architected a next-generation multi-tenant sports camp and athlete analytics platform, integrating Claude to generate personalized drill sequences and automate tournament scheduling.',
    metrics: [
      {
        value: '3.5x',
        label: 'Faster feature release cadence',
      },
      {
        value: '120k+',
        label: 'Athletes managed across 400+ clubs',
      },
      {
        value: '72%',
        label: 'Reduction in schedule collision conflicts',
      },
    ],
    clientOverview: {
      clientName: 'Apex Athlete Systems',
      industry: 'Sports tech & camp logistics',
      companySize: 'Growth SaaS',
      product: 'Next.js, Python, Claude 3.5 Sonnet',
      location: 'Austin, Texas',
      description:
        'Apex Athlete Systems delivers athletic tournament scheduling, player metric tracking, and camp communication tools for collegiate athletic programs and youth sports academies.',
      dashboardImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80',
    },
    challenges: {
      intro:
        'Athletic clubs struggled with brittle spreadsheets, referee schedule conflicts, and generic training regimens that failed to account for individual player fatigue and field availability.',
      cards: [
        {
          title: 'Brittle manual bracket and referee routing',
          description:
            'Managing 64-team weekend tournaments meant hundreds of hours resolving field overlap, referee qualifications, and weather contingency reshuffles.',
        },
        {
          title: 'Lack of personalized athletic drill progression',
          description:
            'Coaches had no scalable way to write tailored practice recommendations based on individual athlete telemetry and injury risk profiles.',
        },
        {
          title: 'Multi-tenant database isolation at scale',
          description:
            'Strict COPPA youth privacy regulations required complete tenant data isolation without inflating cloud multi-instance operational costs.',
        },
      ],
    },
    solution: {
      intro:
        'Simform engineered a modular micro-frontend SaaS platform on AWS with Claude-powered intelligent constraint solvers that generate conflict-free brackets in seconds and craft personalized training drills.',
      cards: [
        {
          title: 'Automated tournament constraint solver',
          description:
            'Claude ingests team rankings, field lights schedules, and referee travel constraints to generate optimized tournament brackets with zero collisions.',
        },
        {
          title: 'Adaptive player development copilot',
          description:
            'Generates personalized drills and recovery protocols based on GPS speed, heart-rate zones, and match minutes logged by wearable sensors.',
        },
        {
          title: 'Tenant-isolated row-level security',
          description:
            'PostgreSQL row-level security with dynamic JWT claims guarantees complete data privacy for schools and youth academies.',
        },
        {
          title: 'Real-time parent notification engine',
          description:
            'Event-driven AWS Lambda microservices send automated push and SMS updates for field changes, weather delays, and score alerts.',
        },
      ],
    },
    businessImpact: {
      intro:
        'Apex Athlete Systems successfully expanded from regional tournaments to nationwide adoption, onboarding 400+ academies within 6 months of rollout.',
      cards: [
        {
          icon: 'clock',
          title: 'Schedules generated in under 3 minutes',
          description:
            'Tournament coordinators cut scheduling effort from 3 days to under 3 minutes with automated referee and facility matching.',
        },
        {
          icon: 'users',
          title: '98% coach satisfaction rating',
          description:
            'Coaches reported 4+ hours saved per week on administrative work, dedicating more time to direct on-field player coaching.',
        },
        {
          icon: 'globe',
          title: 'Scalable multi-region infrastructure',
          description:
            'Platform handles 10x traffic surges during weekend tournament finals with sub-200ms API response latency.',
        },
      ],
    },
    testimonials: [
      {
        quote:
          'Simform built our core platform with phenomenal velocity. Their AI engineering pods transformed what was once a nightmare of tournament scheduling into a modern, delightful experience for directors and parents.',
        author: 'Dave Henderson',
        role: 'CEO & Founder',
        company: 'Apex Athlete Systems',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80',
      },
    ],
    relatedSlugs: [
      'real-estate-marketing-platform-turns-listing-data-into-case-studies-in-seconds-with-claude',
      'hvac-subsidiary-cuts-reporting-time-by-80-percent-with-azure-ai-field-agents',
    ],
    contactLead: {
      name: 'Hiren Dhaduk',
      role: 'Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (858) 529-5660',
      description: 'Creating a tech product roadmap and building scalable apps for your organization.',
    },
  },
  {
    id: 'cs-4',
    slug: 'vending-operations-provider-cuts-stockouts-30-percent-with-unified-data-platform-on-databricks',
    title: 'Vending operations provider cuts stockouts 30% with unified data platform on Databricks',
    excerpt:
      'We helped a vending operations provider unify fragmented regional data into a governed Databricks Lakehouse, improving inventory visibility, reporting consistency, and reducing route stockouts.',
    categoryTags: ['Digital natives', 'Data Engineering'],
    offering: 'Data Engineering',
    industry: 'Retail & Logistics',
    image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=80',
    heroBadge: 'Digital natives',
    heroSubheadline:
      'Designed and deployed an automated Databricks Lakehouse architecture unifying telemetry across 15,000 smart vending kiosks, delivering predictive restocking recommendations that slash inventory loss.',
    metrics: [
      {
        value: '30%',
        label: 'Reduction in machine stockout incidents',
      },
      {
        value: '15,000',
        label: 'Connected smart vending kiosks',
      },
      {
        value: '$2.4M',
        label: 'Annual route optimization savings',
      },
    ],
    clientOverview: {
      clientName: 'VendPulse Solutions',
      industry: 'Smart retail & vending operations',
      companySize: 'Mid-Market',
      product: 'Databricks, Apache Spark, Delta Lake',
      location: 'Chicago, Illinois',
      description:
        'VendPulse operates commercial vending kiosks, micro-markets, and smart pantry dispensers across corporate campuses, hospitals, and transit hubs across North America.',
      dashboardImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80',
    },
    challenges: {
      intro:
        'With regional telemetry silos and delayed batch syncs, drivers frequently visited machines that were half-empty or stocked items that had already expired, causing widespread stockouts and revenue leakage.',
      cards: [
        {
          title: 'Fragmented legacy regional data silos',
          description:
            'Each operating region stored dispenser sensor data in isolated on-premise SQL databases, making cross-network inventory balancing impossible.',
        },
        {
          title: 'Inability to forecast localized demand spikes',
          description:
            'Hospitals experienced surges during night shifts while office towers peaked mid-day. Static refill schedules failed to anticipate localized purchasing patterns.',
        },
        {
          title: 'High transit fuel and technician labor costs',
          description:
            'Drivers were dispatching on fixed loops rather than dynamic inventory need, resulting in unnecessary stops and high fleet operating costs.',
        },
      ],
    },
    solution: {
      intro:
        'Simform constructed an end-to-end Delta Lakehouse on Databricks with real-time IoT event streams and predictive ML demand forecasting models that optimize daily restocking routes.',
      cards: [
        {
          title: 'Real-time telemetry streaming via Kafka',
          description:
            'Dispensers emit transaction and temperature heartbeats every 60 seconds into Azure Event Hubs, feeding directly into Databricks Delta Live Tables.',
        },
        {
          title: 'Predictive localized demand forecasting',
          description:
            'Time-series forecasting models analyze seasonal trends, local weather signals, and event schedules to predict sell-outs 48 hours in advance.',
        },
        {
          title: 'Dynamic driver route dispatch algorithms',
          description:
            'Daily driver routes are generated dynamically based on urgency scores, traffic conditions, and warehouse truck capacity.',
        },
        {
          title: 'Unity Catalog centralized data governance',
          description:
            'Complete auditability and data lineage ensure financial reconciliation and strict governance across all 15,000 machines.',
        },
      ],
    },
    businessImpact: {
      intro:
        'VendPulse eliminated recurring stockouts on high-margin items while reducing driver driving miles by 22% within the first four months of rollout.',
      cards: [
        {
          icon: 'clock',
          title: '30% stockout reduction',
          description:
            'Real-time automated alerts ensure top-selling beverages and fresh sandwiches are replenished before compartments run empty.',
        },
        {
          icon: 'users',
          title: '22% reduction in fleet transit miles',
          description:
            'Optimized delivery routes saved over 140,000 driving miles annually, lowering fuel consumption and vehicle wear.',
        },
        {
          icon: 'globe',
          title: '15-minute data fresh latency',
          description:
            'Executive leadership gains real-time visibility into machine revenues and product margins updated every 15 minutes.',
        },
      ],
    },
    testimonials: [
      {
        quote:
          'Simform transformed our data infrastructure from a major bottleneck into our primary competitive advantage. Our route drivers operate with unprecedented precision and our bottom line has seen immediate double-digit gains.',
        author: 'Eileen Meyer',
        role: 'Chief Operating Officer',
        company: 'VendPulse Solutions',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      },
    ],
    relatedSlugs: [
      'global-inspection-company-automates-order-processing-for-9-business-lines-with-claude',
      'hvac-subsidiary-cuts-reporting-time-by-80-percent-with-azure-ai-field-agents',
    ],
    contactLead: {
      name: 'Hiren Dhaduk',
      role: 'Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (858) 529-5660',
      description: 'Creating a tech product roadmap and building scalable apps for your organization.',
    },
  },
  {
    id: 'cs-5',
    slug: 'student-credit-platform-cuts-manual-transcript-entry-by-99-percent-with-claude',
    title: 'Student Credit Platform Cuts Manual Transcript Entry by 99% with Claude',
    excerpt:
      'We helped a student credit management platform automate transcript extraction and eliminate manual data entry across every school layout it serves.',
    categoryTags: ['Digital natives', 'Migration and Modernization', 'ML and Data Science'],
    offering: 'Migration and Modernization',
    industry: 'Education Technology',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    heroBadge: 'Digital natives',
    heroSubheadline:
      'Rebuilt an academic credit evaluation pipeline with Claude 3.5 Sonnet, automating the ingestion of complex high school and university transcripts with near-100% precision.',
    metrics: [
      {
        value: '99%',
        label: 'Reduction in manual transcript data entry',
      },
      {
        value: '450+',
        label: 'Academic institution transcript formats supported',
      },
      {
        value: '12 seconds',
        label: 'Average processing time per student transcript',
      },
    ],
    clientOverview: {
      clientName: 'EduCredit Exchange',
      industry: 'Higher education & admissions tech',
      companySize: 'Growth',
      product: 'Claude 3.5 Sonnet, AWS Lambda, DynamoDB',
      location: 'Boston, Massachusetts',
      description:
        'EduCredit Exchange streamlines transfer credit evaluations for universities and community colleges, ensuring students receive accurate credits for prior coursework.',
      dashboardImage: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80',
    },
    challenges: {
      intro:
        'Each university formats transcripts differently, using unique grading scales, course numbering systems, and credit hour conventions that previously required human admissions evaluators to transcribe line-by-line.',
      cards: [
        {
          title: 'Hundreds of non-standard transcript layouts',
          description:
            'Traditional OCR template engines failed as soon as a college altered column headers, font layouts, or watermark backgrounds.',
        },
        {
          title: 'Severe peak-season admission backlogs',
          description:
            'During fall and spring application deadlines, credit verification backlogs pushed admissions decisions back by up to 6 weeks.',
        },
        {
          title: 'High student drop-off due to credit uncertainty',
          description:
            'Prospective transfer students routinely abandoned applications when institutions could not confirm transferable credits in a timely manner.',
        },
      ],
    },
    solution: {
      intro:
        'Simform designed a zero-shot multimodal transcript reasoning pipeline using Claude Sonnet that understands tabular course data, converts credit units, and calculates standardized GPA benchmarks automatically.',
      cards: [
        {
          title: 'Multimodal layout-agnostic visual parsing',
          description:
            'Claude reads scanned PDFs, photo uploads, and electronic transcripts regardless of watermarks, skewed scans, or unusual table structures.',
        },
        {
          title: 'Automated course equivalence mapping',
          description:
            'Parsed course descriptions and codes are matched with institutional transfer articulation tables using semantic vector embeddings.',
        },
        {
          title: 'Discrepancy and grade validation checks',
          description:
            'System cross-validates credit sums against semester GPAs to detect forged or corrupted documents automatically.',
        },
        {
          title: 'FERPA-compliant in-memory processing',
          description:
            'All student PII is encrypted in transit and at rest with strict compliance with federal educational privacy regulations.',
        },
      ],
    },
    businessImpact: {
      intro:
        'Admissions departments eliminated their seasonal evaluation backlogs, providing transfer students with instant preliminary credit audits upon application submission.',
      cards: [
        {
          icon: 'clock',
          title: 'From 6 weeks to 12 seconds',
          description:
            'Transcript evaluations that previously required days of staff manual review are now completed in under 12 seconds.',
        },
        {
          icon: 'users',
          title: '38% increase in transfer student enrollment',
          description:
            'Instant credit transparency dramatically increased student enrollment conversion across participating university partners.',
        },
        {
          icon: 'globe',
          title: 'Over 250,000 transcripts evaluated',
          description:
            'System has evaluated over a quarter-million transcripts with an audited accuracy rate exceeding 99.8%.',
        },
      ],
    },
    testimonials: [
      {
        quote:
          'Simform brought transformative speed and accuracy to our academic evaluation pipeline. Students now know on day one which credits transfer, and our admissions staff has been freed from tedious data entry.',
        author: 'Dr. Rebecca Vance',
        role: 'Dean of Enrollment Management',
        company: 'EduCredit Consortium',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      },
    ],
    relatedSlugs: [
      'real-estate-marketing-platform-turns-listing-data-into-case-studies-in-seconds-with-claude',
      'sports-technology-company-accelerates-multi-tenant-saas-development-with-claude',
    ],
    contactLead: {
      name: 'Hiren Dhaduk',
      role: 'Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (858) 529-5660',
      description: 'Creating a tech product roadmap and building scalable apps for your organization.',
    },
  },
  {
    id: 'cs-6',
    slug: 'hvac-subsidiary-cuts-reporting-time-by-80-percent-with-azure-ai-field-agents',
    title: 'HVAC subsidiary cuts reporting time by 80% with Azure AI field agents',
    excerpt:
      'We helped an HVAC subsidiary build a mobile-first field operations platform and deploy Azure AI Foundry-powered agents to streamline field operations, billing, and reporting.',
    categoryTags: ['Commercial & Industrial Services', 'Agentic AI', 'AI/ML Engineering'],
    offering: 'Agentic AI',
    industry: 'Commercial & Industrial Services',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    heroBadge: 'Commercial & Industrial Services',
    heroSubheadline:
      'Empowered 800+ commercial HVAC service technicians with speech-first agentic copilots that auto-generate maintenance work logs, invoice parts, and verify equipment safety compliance.',
    metrics: [
      {
        value: '80%',
        label: 'Reduction in field service report generation time',
      },
      {
        value: '800+',
        label: 'Active field technicians equipped',
      },
      {
        value: '2.5 Days',
        label: 'Faster customer billing and invoice cycles',
      },
    ],
    clientOverview: {
      clientName: 'ThermaCore Mechanical Services',
      industry: 'Industrial HVAC & facility operations',
      companySize: 'Enterprise (2,500+ employees)',
      product: 'Azure AI Foundry, Whisper, React Native',
      location: 'Dallas, Texas',
      description:
        'ThermaCore maintains heavy commercial cooling, chiller towers, and cleanroom air handling systems for hospitals, data centers, and semiconductor fabrication facilities.',
      dashboardImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    },
    challenges: {
      intro:
        'Technicians working on noisy mechanical rooftops spent hours every evening typing manual service reports and looking up esoteric parts numbers on cramped smartphone screens.',
      cards: [
        {
          title: 'Tedious post-shift administrative overhead',
          description:
            'Technicians spent 90 minutes after each shift logging work orders, leading to burnout, delayed billing cycles, and unbilled replacement components.',
        },
        {
          title: 'Equipment diagnosis delays on complex chiller faults',
          description:
            'Junior technicians had to call remote master engineers to decipher proprietary error codes and historical maintenance logs.',
        },
        {
          title: 'Inconsistent safety checklists and compliance gaps',
          description:
            'Paper checklist logs were often completed retroactively, creating compliance risks during municipal fire and environmental audits.',
        },
      ],
    },
    solution: {
      intro:
        'Simform engineered an offline-capable mobile copilot using Azure AI Foundry and Whisper voice models that listens to technicians voice notes, reads equipment nameplates via camera, and drafts complete ERP work orders automatically.',
      cards: [
        {
          title: 'Voice-to-action field logging in high noise',
          description:
            'Custom noise-filtering speech models allow technicians to speak naturally while wearing gloves and earmuffs, transcribing technical jargon with 98% accuracy.',
        },
        {
          title: 'Computer vision nameplate & fault code scanner',
          description:
            'On-device computer vision scans compressor serial numbers and wiring diagrams, retrieving schematics and matching spare parts catalogs instantly.',
        },
        {
          title: 'Autonomous multi-step ERP billing agents',
          description:
            'Azure AI agents map technician voice summaries into itemized labor hours, EPA refrigerant tracking logs, and customer-ready invoices.',
        },
        {
          title: 'Offline-first SQLite edge synchronization',
          description:
            'Full functionality in shielded basement boiler rooms and remote roofs with automatic background sync when cellular signal resumes.',
        },
      ],
    },
    businessImpact: {
      intro:
        'ThermaCore shortened its invoice generation cycle by 2.5 days while boosting technician daily service job capacity by 18%.',
      cards: [
        {
          icon: 'clock',
          title: 'Field reporting reduced from 90m to 18m',
          description:
            'Technicians complete work logs in real-time between jobs, eliminating unpaid evening administrative homework entirely.',
        },
        {
          icon: 'users',
          title: '18% increase in daily service job completion',
          description:
            'Streamlined documentation and rapid parts identification allowed teams to handle 1.2 additional service calls per tech per week.',
        },
        {
          icon: 'globe',
          title: '100% EPA refrigerant compliance logging',
          description:
            'Automated refrigerant recovery tracking eliminated regulatory audit penalties and standardized compliance across all regional branches.',
        },
      ],
    },
    testimonials: [
      {
        quote:
          'Our field technicians love this app because it gives them their evenings back. Simform built an AI assistant that genuinely works in the field—even in loud mechanical rooms with zero cell reception.',
        author: 'Carlos Santana',
        role: 'Director of Field Services',
        company: 'ThermaCore Mechanical',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      },
    ],
    relatedSlugs: [
      'real-estate-marketing-platform-turns-listing-data-into-case-studies-in-seconds-with-claude',
      'vending-operations-provider-cuts-stockouts-30-percent-with-unified-data-platform-on-databricks',
    ],
    contactLead: {
      name: 'Hiren Dhaduk',
      role: 'Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (858) 529-5660',
      description: 'Creating a tech product roadmap and building scalable apps for your organization.',
    },
  },
  {
    id: 'healthcare-ai-platform-streamlines-clinical-documentation-with-claude',
    slug: 'healthcare-ai-platform-streamlines-clinical-documentation-with-claude',
    title: 'Healthcare AI Platform Streamlines Clinical Documentation with Claude',
    excerpt:
      'We helped a premier digital health network build an ambient clinical intelligence engine with Claude, reducing physician charting overhead by 82% across 350+ medical clinics.',
    categoryTags: ['Healthcare & Life Sciences', 'Agentic AI', 'AI/ML Engineering'],
    offering: 'Agentic AI',
    industry: 'Healthcare & Life Sciences',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    heroBadge: 'Ambient AI in Healthcare',
    heroSubheadline:
      'Ambient multi-agent charting platform captures doctor-patient dialogues, generates structured EHR encounters in real time, and automates ICD-10 medical coding compliance.',
    metrics: [
      { value: '82%', label: 'Reduction in After-Hours Charting Overhead' },
      { value: '350+', label: 'Outpatient Clinics & Hospital Centers Deployed' },
      { value: '$4.2M', label: 'Annual Provider Value in Recovered Clinical Hours' },
    ],
    clientOverview: {
      clientName: 'AuraHealth Intelligence',
      industry: 'Healthcare & Life Sciences',
      companySize: '1,500+ employees',
      product: 'Ambient Clinical Scribe & EHR Co-pilot',
      location: 'Boston, Massachusetts',
      description:
        'AuraHealth Intelligence develops clinical AI software trusted by top-tier academic hospital systems. Faced with soaring physician burnout from electronic health record (EHR) data entry, they partnered with SpotXpert to develop an ambient documentation platform.',
      dashboardImage: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=1200&q=80',
    },
    challenges: {
      intro:
        'Clinicians were spending upwards of two hours every evening on after-hours “pajama time” documentation, creating immense burnout and documentation delays.',
      cards: [
        {
          title: 'Acoustic Variety & Medical Dialects',
          description:
            'Capturing whispered, fragmented doctor-patient conversations amidst ambient clinical noise, varying clinician accents, and overlapping family dialogue.',
        },
        {
          title: 'Strict HIPAA & PHI Data Boundaries',
          description:
            'Guaranteeing zero data retention and strict cryptographic enclave execution so no patient health identifiers could ever be stored or trained on by external models.',
        },
        {
          title: 'Deep EHR Integration Complexity',
          description:
            'Writing back structured SOAP notes, allergy flags, and diagnostic billing codes into legacy Epic and Cerner EHR architectures without breaking clinical workflows.',
        },
      ],
    },
    solution: {
      intro:
        'SpotXpert engineered a real-time speech processing and agentic structuring pipeline powered by Claude 3.5 Sonnet and secure private cloud enclaves.',
      cards: [
        {
          title: 'Dual-Channel Audio Separation',
          description:
            'Developed an on-device noise reduction and speaker diarization system that distinguishes between physician recommendations and patient symptom descriptions.',
        },
        {
          title: 'Claude Clinical Reasoning Agent',
          description:
            'Constructed a specialized prompt graph that extracts clinical entities, verifies medication dosage guidelines, and formats SOAP notes matching specialty templates.',
        },
        {
          title: 'Automated ICD-10 & CPT Cross-Verification',
          description:
            'Integrated an automated medical coding agent that maps clinical diagnoses to billing codes with real-time audit justifications.',
        },
        {
          title: 'Bi-Directional FHIR Bridge',
          description:
            'Implemented HL7/FHIR microservices that push approved encounter notes directly into clinician review inboxes in under 4 seconds.',
        },
      ],
    },
    businessImpact: {
      intro:
        'The ambient AI assistant transformed clinical satisfaction and unlocked substantial operational throughput across all hospital branches.',
      cards: [
        {
          title: '82% Reduction in After-Hours Charting',
          description:
            'Physicians completed documentation within 3 minutes of concluding patient appointments, reclaiming over 90 minutes of personal time per shift.',
          icon: 'clock',
        },
        {
          title: '99.4% Billing Coding Accuracy',
          description:
            'Autonomous ICD-10 cross-referencing eliminated claim rejections caused by omitted diagnostic modifiers or miscoded symptoms.',
          icon: 'globe',
        },
        {
          title: '18% Increase in Daily Patient Capacity',
          description:
            'Streamlined workflow enabled clinicians to see 3 to 4 more patients per week without increasing administrative strain.',
          icon: 'users',
        },
      ],
    },
    testimonials: [
      {
        quote:
          'SpotXpert gave us our personal lives back. I no longer bring a laptop to the dinner table to finish clinical notes. The accuracy of Claude capturing my patient conversations is simply astonishing.',
        author: 'Dr. Evelyn Vance, MD',
        role: 'Chief Medical Officer',
        company: 'AuraHealth Intelligence',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80',
      },
    ],
    relatedSlugs: [
      'global-inspection-company-automates-order-processing-for-9-business-lines-with-claude',
      'student-credit-platform-cuts-manual-transcript-entry-by-99-percent-with-claude',
    ],
    contactLead: {
      name: 'Hiren Dhaduk',
      role: 'Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (858) 529-5660',
      description: 'Creating a tech product roadmap and building scalable apps for your organization.',
    },
  },
  {
    id: 'wealth-management-firm-automates-portfolio-rebalancing-on-databricks',
    slug: 'wealth-management-firm-automates-portfolio-rebalancing-on-databricks',
    title: 'Wealth Management Firm Automates Portfolio Rebalancing on Databricks',
    excerpt:
      'We helped a top asset manager unify fragmented market telemetry, cut portfolio rebalancing from 14 hours to 45 minutes, and safeguard $38B in assets under management.',
    categoryTags: ['Financial Services', 'Data Engineering', 'Product Engineering'],
    offering: 'Data Engineering',
    industry: 'Financial Services',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    heroBadge: 'Financial Lakehouse & Quantitative Analytics',
    heroSubheadline:
      'Unified enterprise lakehouse processes millions of market tick events and executes algorithmic portfolio tax-loss harvesting with millisecond latency and audit assurance.',
    metrics: [
      { value: '18x', label: 'Faster Quantitative Rebalancing Engine Runtime' },
      { value: '$38B', label: 'Assets Under Management Unified Across Portfolios' },
      { value: '100%', label: 'Audit Compliance with Real-Time SEC Traceability' },
    ],
    clientOverview: {
      clientName: 'Apex Wealth Partners',
      industry: 'Financial Services',
      companySize: '800+ employees',
      product: 'Algorithmic Portfolio Rebalancing Engine',
      location: 'New York, New York',
      description:
        'Apex Wealth Partners oversees high-net-worth individual portfolios and institutional endowments. Legacy overnight batch jobs struggled with volatile market swings, causing delayed trades and missed tax-loss harvesting windows.',
      dashboardImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    },
    challenges: {
      intro:
        'High market volatility overwhelmed legacy relational databases, taking hours to compute risk exposures and leaving portfolios exposed to intraday drawdowns.',
      cards: [
        {
          title: 'Legacy SQL Bottlenecks',
          description:
            'Nightly batch pipelines took up to 14 hours to reconcile cash balances, dividends, and multi-asset positions across global custodians.',
        },
        {
          title: 'Tax-Loss Harvesting Inefficiencies',
          description:
            'Advisors were forced to calculate wash-sale exclusions and capital gain offsets manually on spreadsheets, restricting scalability.',
        },
        {
          title: 'Strict Financial Auditing',
          description:
            'Regulators required point-in-time state reconstruction for every algorithmic trade suggestion down to the exact microsecond.',
        },
      ],
    },
    solution: {
      intro:
        'SpotXpert deployed an enterprise Databricks Lakehouse architecture paired with Delta Live Tables and Apache Spark streaming.',
      cards: [
        {
          title: 'Delta Lake Streaming Ingestion',
          description:
            'Connected Kafka and FIX market feeds directly into Delta Lake, enabling sub-second telemetry ingestion and schema enforcement.',
        },
        {
          title: 'Vectorized Risk Calculation Engine',
          description:
            'Rewrote core Monte Carlo and covariance matrix engines in PySpark, reducing calculation runtimes from half a day to under 45 minutes.',
        },
        {
          title: 'Automated Tax-Loss Optimizer',
          description:
            'Built an autonomous linear programming solver that continuously scans for tax-alpha opportunities while strictly respecting wash-sale rules.',
        },
        {
          title: 'Time-Travel Audit Governance',
          description:
            'Utilized Delta Lake time-travel logging to provide instant, reproducible snapshots of fund state for FINRA and SEC examiners.',
        },
      ],
    },
    businessImpact: {
      intro:
        'Apex Wealth Partners reduced execution friction, prevented tracking error drift, and unlocked millions in annual client tax savings.',
      cards: [
        {
          title: 'From 14 Hours to 45 Minutes',
          description:
            'Daily portfolio rebalancing runtime dropped by 94%, enabling advisors to react dynamically to intra-day market volatility.',
          icon: 'clock',
        },
        {
          title: '$38B in AUM Scaled Seamlessly',
          description:
            'The firm added 40,000 new client accounts without needing to recruit additional operational trade execution staff.',
          icon: 'globe',
        },
        {
          title: 'Zero Wash-Sale Compliance Violations',
          description:
            'Automated multi-account holding checks prevented all accidental wash-sale infractions across household asset accounts.',
          icon: 'users',
        },
      ],
    },
    testimonials: [
      {
        quote:
          'SpotXpert transformed our core quantitative infrastructure. Tasks that previously locked up our servers overnight now run smoothly while we sip our morning coffee. Our advisors can finally focus on client relationships.',
        author: 'Julian Sterling',
        role: 'Chief Investment Officer',
        company: 'Apex Wealth Partners',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      },
    ],
    relatedSlugs: [
      'vending-operations-provider-cuts-stockouts-30-percent-with-unified-data-platform-on-databricks',
      'sports-technology-company-accelerates-multi-tenant-saas-development-with-claude',
    ],
    contactLead: {
      name: 'Hiren Dhaduk',
      role: 'Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (858) 529-5660',
      description: 'Creating a tech product roadmap and building scalable apps for your organization.',
    },
  },
  {
    id: 'autonomous-supply-chain-network-cuts-freight-costs-22-percent-with-claude',
    slug: 'autonomous-supply-chain-network-cuts-freight-costs-22-percent-with-claude',
    title: 'Autonomous Supply Chain Network Cuts Freight Costs 22% with Claude',
    excerpt:
      'We helped a North American freight logistics platform build an agentic route dispatch and rate negotiation assistant with Claude, optimizing 4.5M shipments daily.',
    categoryTags: ['Retail & Logistics', 'Agentic AI', 'AI/ML Engineering'],
    offering: 'AI/ML Engineering',
    industry: 'Retail & Logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    heroBadge: 'Agentic Logistics Optimization',
    heroSubheadline:
      'Autonomous logistics orchestrator analyzes GPS telematics, weather forecasts, and spot market lane pricing to dispatch loads and negotiate carrier contracts in seconds.',
    metrics: [
      { value: '22%', label: 'Average Reduction in Spot Market Freight Costs' },
      { value: '4.5M', label: 'Daily Shipments Monitored & Dispatched Autonomously' },
      { value: '99.8%', label: 'On-Time Delivery Rate Across 120 Distribution Hubs' },
    ],
    clientOverview: {
      clientName: 'FreightPulse Logistics',
      industry: 'Retail & Logistics',
      companySize: '2,200+ employees',
      product: 'Autonomous Dispatch & Dynamic Rate Engine',
      location: 'Chicago, Illinois',
      description:
        'FreightPulse Logistics orchestrates freight movement across maritime ports, rail terminals, and long-haul interstate trucking routes. With freight rates fluctuating wildly, their dispatchers spent hundreds of manual hours quoting carrier contracts.',
      dashboardImage: 'https://images.unsplash.com/photo-1586528116493-a029325540fa?auto=format&fit=crop&w=1200&q=80',
    },
    challenges: {
      intro:
        'Manual rate negotiation and static route planning caused high deadhead mileage, costly demurrage fees, and missed carrier booking windows.',
      cards: [
        {
          title: 'Volatile Spot Lane Pricing',
          description:
            'Carrier freight rates shifted hour-by-hour depending on regional fuel surcharges, weather disruptions, and load availability.',
        },
        {
          title: 'Empty Mile Waste (Deadhead)',
          description:
            'Trucks frequently returned from deliveries empty because backhaul loads could not be matched and scheduled fast enough.',
        },
        {
          title: 'Disconnected Fleet Telematics',
          description:
            'Over 8,000 carrier fleets used different ELD (electronic logging device) providers, creating blind spots in real-time location tracking.',
        },
      ],
    },
    solution: {
      intro:
        'SpotXpert developed a multi-agent dispatch system powered by Claude that acts as an always-on procurement co-pilot for logistics coordinators.',
      cards: [
        {
          title: 'Carrier Negotiation Agent',
          description:
            'Deployed Claude-powered conversational agents that communicate with carriers over email and portal chat to negotiate competitive rates within predetermined budget bands.',
        },
        {
          title: 'Dynamic Multi-Stop Route Optimizer',
          description:
            'Built graph-based pathfinding algorithms that bundle return backhauls, cutting empty deadhead miles by 38%.',
        },
        {
          title: 'Predictive ETA & Weather Grounding',
          description:
            'Integrated live radar and traffic data to detect delays up to 6 hours before arrival, automatically re-routing shipments around blizzard zones.',
        },
        {
          title: 'Automated Bill of Lading Audit',
          description:
            'Automated document verification checks driver BOLs against contract weight and fuel agreements, preventing overbilling.',
        },
      ],
    },
    businessImpact: {
      intro:
        'FreightPulse unlocked millions in bottom-line margin expansion and achieved industry-leading delivery reliability ratings.',
      cards: [
        {
          title: '22% Freight Cost Reduction',
          description:
            'Intelligent spot lane negotiation and optimized load consolidation shaved millions off aggregate annual carrier expenditure.',
          icon: 'globe',
        },
        {
          title: '99.8% On-Time Delivery ETA',
          description:
            'Predictive rerouting prevented late penalties and preserved tight retail delivery dock appointment schedules.',
          icon: 'clock',
        },
        {
          title: '4x Broker Productivity',
          description:
            'Logistics brokers handled four times more freight orders per day by delegating routine quoting and scheduling to AI agents.',
          icon: 'users',
        },
      ],
    },
    testimonials: [
      {
        quote:
          'SpotXpert delivered an AI system that thinks like our top 1% freight brokers. It negotiates fairly, plans backhauls flawlessly, and gave us a massive competitive edge in a notoriously tough freight market.',
        author: 'Marcus Vance',
        role: 'VP of Transportation & Logistics',
        company: 'FreightPulse Logistics',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
      },
    ],
    relatedSlugs: [
      'vending-operations-provider-cuts-stockouts-30-percent-with-unified-data-platform-on-databricks',
      'hvac-subsidiary-cuts-reporting-time-by-80-percent-with-azure-ai-field-agents',
    ],
    contactLead: {
      name: 'Hiren Dhaduk',
      role: 'Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (858) 529-5660',
      description: 'Creating a tech product roadmap and building scalable apps for your organization.',
    },
  },
  {
    id: 'global-clean-energy-grid-automates-predictive-maintenance-with-azure-ai',
    slug: 'global-clean-energy-grid-automates-predictive-maintenance-with-azure-ai',
    title: 'Global Clean Energy Grid Automates Predictive Maintenance with Azure AI',
    excerpt:
      'We helped a renewable energy provider deploy edge AI and predictive maintenance agents across 4,200 wind turbines, preventing $18M in catastrophic mechanical failures.',
    categoryTags: ['Commercial & Industrial Services', 'Migration and Modernization', 'AI/ML Engineering'],
    offering: 'Migration and Modernization',
    industry: 'Commercial & Industrial Services',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80',
    heroBadge: 'Predictive Edge AI for Clean Energy',
    heroSubheadline:
      'High-throughput IoT telemetry pipeline ingests millions of vibration and acoustic sensor events per second to diagnose turbine anomalies weeks before mechanical failure.',
    metrics: [
      { value: '45%', label: 'Reduction in Wind Turbine Mechanical Downtime' },
      { value: '4,200', label: 'Wind Turbines & Solar Inverters Monitored 24/7' },
      { value: '$18M', label: 'Prevented Equipment Breakdowns and Grid Penalties' },
    ],
    clientOverview: {
      clientName: 'AeroGrid Renewable Power',
      industry: 'Commercial & Industrial Services',
      companySize: '3,400+ employees',
      product: 'Edge-to-Cloud Predictive Turbomachinery Health Platform',
      location: 'Denver, Colorado',
      description:
        'AeroGrid Renewable Power operates offshore and onshore wind farms supplying electricity to over 6 million homes. Bearing and gearbox failures in remote turbines previously took months to repair and cost millions in lost power generation.',
      dashboardImage: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80',
    },
    challenges: {
      intro:
        'Catastrophic gearbox seizures were occurring without warning, requiring heavy crane vessels in turbulent offshore waters at immense operational expense.',
      cards: [
        {
          title: 'Remote Offshore Connectivity',
          description:
            'Turbines located 20 miles offshore had constrained satellite bandwidth, preventing raw telemetry streaming back to centralized datacenters.',
        },
        {
          title: 'High-Frequency Vibration Signals',
          description:
            'Analyzing 10 kHz acoustic and accelerometer signals across hundreds of gearbox gearteeth required low-latency edge inference.',
        },
        {
          title: 'False Positive Alarm Fatigue',
          description:
            'Legacy threshold monitoring triggered hundreds of false alerts during heavy wind storms, exhausting regional technician crews.',
        },
      ],
    },
    solution: {
      intro:
        'SpotXpert engineered an Azure IoT Edge architecture with containerized anomaly detection models running directly inside nacelle computers.',
      cards: [
        {
          title: 'Edge Micro-Model Inference',
          description:
            'Deployed quantized autoencoder neural networks onto ruggedized edge gateways in each turbine tower to compute vibration anomalies locally.',
        },
        {
          title: 'Azure Synapse Big Data Telemetry',
          description:
            'Synchronized aggregated health metrics over low-bandwidth satellite links into an Azure Synapse analytical lakehouse for fleet-wide benchmarking.',
        },
        {
          title: 'Automated Work Order Generation',
          description:
            'When bearing wear patterns were detected, the system autonomously generated technician dispatch tickets with exact replacement part numbers.',
        },
        {
          title: 'Digital Twin Power Curve Modeling',
          description:
            'Simulated pitch and yaw aerodynamics against forecasted weather front data to optimize power output while mitigating blade fatigue.',
        },
      ],
    },
    businessImpact: {
      intro:
        'AeroGrid stabilized grid power delivery, eliminated unplanned outages during peak winter demand, and secured massive operational savings.',
      cards: [
        {
          title: '45% Downtime Reduction',
          description:
            'Predictive repairs were scheduled during low-wind weather windows, eliminating multi-month emergency shutdowns.',
          icon: 'clock',
        },
        {
          title: '$18M Prevented Failure Costs',
          description:
            'Early detection of bearing micro-spalling prevented 14 catastrophic gearbox destructions requiring crane vessel deployment.',
          icon: 'globe',
        },
        {
          title: '3.8M Data Points Analyzed / Sec',
          description:
            'Unified edge-to-cloud architecture gave regional grid managers real-time fleet health visibility across five continents.',
          icon: 'users',
        },
      ],
    },
    testimonials: [
      {
        quote:
          'SpotXpert’s engineering team achieved what three prior vendors couldn’t: reliable edge machine learning on remote offshore wind platforms. They saved our company tens of millions of dollars in catastrophic failure prevention.',
        author: 'Karin Lindqvist',
        role: 'VP of Asset Performance & Engineering',
        company: 'AeroGrid Renewable Power',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      },
    ],
    relatedSlugs: [
      'hvac-subsidiary-cuts-reporting-time-by-80-percent-with-azure-ai-field-agents',
      'vending-operations-provider-cuts-stockouts-30-percent-with-unified-data-platform-on-databricks',
    ],
    contactLead: {
      name: 'Hiren Dhaduk',
      role: 'Chief Technology Officer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      phone: '+1 (858) 529-5660',
      description: 'Creating a tech product roadmap and building scalable apps for your organization.',
    },
  },
];

export const CASE_STUDY_OFFERINGS = [
  'All Offerings',
  'AI/ML Engineering',
  'Product Engineering',
  'Data Engineering',
  'Migration and Modernization',
  'Agentic AI',
];

export const CASE_STUDY_INDUSTRIES = [
  'All Industries',
  'Manufacturing',
  'Real Estate',
  'Testing & Inspection',
  'Sports Technology',
  'Retail & Logistics',
  'Education Technology',
  'Commercial & Industrial Services',
  'Healthcare & Life Sciences',
  'Financial Services',
];

export function getAllCaseStudies(): CaseStudyItem[] {
  return CASE_STUDIES_DATA;
}

export function getCaseStudyBySlug(slug: string): CaseStudyItem | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  return (
    CASE_STUDIES_DATA.find((item) => item.slug === normalized) ||
    CASE_STUDIES_DATA.find(
      (item) =>
        item.slug.replace(/-percent/g, '%') === normalized ||
        item.slug.replace(/%/g, '-percent') === normalized
    )
  );
}
