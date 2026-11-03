export interface QuickChip {
  id: string;
  label: string;
  iconName: string;
}

export interface DemoAgent {
  id: string;
  name: string;
  role: string;
  tag: string;
  scenario: string;
  transcript: {
    speaker: 'agent' | 'user';
    text: string;
    time: string;
  }[];
}

export interface AudioSample {
  id: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  speaker: string;
  accent: string;
  audioSimText: string;
}

export interface IndustryData {
  slug: string;
  name: string;
  category: string;
  bannerAnnouncement: string;
  heroHeadline: string;
  heroSubheadline: string;
  quickChips: QuickChip[];
  partnerLogos: { name: string; tag: string }[];
  quote: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
  demoAgents: DemoAgent[];
  buildFast: {
    title: string;
    description: string;
    samplePrompt: string;
    tags: string[];
  };
  workflows: {
    title: string;
    description: string;
    entryNode: string;
    branches: {
      condition: string;
      action: string;
      badgeColor: string;
    }[];
  };
  goals: {
    title: string;
    description: string;
    sharedGoal: string;
    steps: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  naturalFlow: {
    title: string;
    description: string;
    agentInstructions: string;
  };
  liveActions: {
    title: string;
    description: string;
    systemName: string;
    webhookEndpoint: string;
    samplePayload: string;
  };
  callInsights: {
    title: string;
    description: string;
    metrics: { label: string; value: string; subtext: string }[];
  };
  audioSamples: AudioSample[];
  faqs: { question: string; answer: string }[];
}

export const INDUSTRIES_MAP: Record<string, IndustryData> = {
  'real-estate': {
    slug: 'real-estate',
    name: 'Real estate / property management',
    category: 'Real Estate & Property',
    bannerAnnouncement: 'Introducing RealVoice V4: Autonomous tenant leasing & maintenance dispatch agents.',
    heroHeadline: 'Voice agents that qualify buyers and handle tenant calls 24/7',
    heroSubheadline:
      'One platform to build, launch and scale voice agents that schedule home tours, triage emergency repair calls, and follow up with property buyers automatically.',
    quickChips: [
      { id: 'tours', label: 'Property Tour Booking', iconName: 'Calendar' },
      { id: 'maintenance', label: 'Emergency Maintenance Dispatch', iconName: 'Wrench' },
      { id: 'leads', label: 'Buyer Pre-Qualification', iconName: 'Search' },
      { id: 'rent', label: 'Lease Renewal & Rent Reminders', iconName: 'BadgePercent' },
      { id: 'vacancies', label: 'Vacancy Inquiries', iconName: 'Home' },
    ],
    partnerLogos: [
      { name: 'CBRE Partners', tag: 'Commercial Portfolio' },
      { name: 'Greystar Living', tag: 'Residential PM' },
      { name: 'Cushman & Wakefield', tag: 'Brokerage Ops' },
      { name: 'JLL Tech', tag: 'Asset Management' },
      { name: 'Compass Realty', tag: 'Residential Group' },
      { name: 'Zillow Premier', tag: 'Lead Routing' },
    ],
    quote: {
      text: 'Our after-hours leasing inquiries used to get lost in voicemail. With SpotXpert AI voice agents, 92% of prospective tenants book a guided tour on their first call.',
      author: 'Evelyn Miller',
      role: 'VP of Property Operations',
      company: 'Greystar Residential Network',
    },
    demoAgents: [
      {
        id: 'tour-booking',
        name: 'Apartment Tour Booking',
        role: 'Leasing Assistant',
        tag: 'Inbound Leasing',
        scenario: 'Tenant calling about 2-bedroom availability and weekend open house',
        transcript: [
          { speaker: 'agent', text: 'Hi, thanks for calling The Grandview Residences! Are you inquiring about our available 1 or 2-bedroom floor plans?', time: '0:02' },
          { speaker: 'user', text: 'Hi, yes! I saw the 2-bedroom listing online. Do you have any showings available this Saturday afternoon?', time: '0:07' },
          { speaker: 'agent', text: 'We do! We have slots open at 1:30 PM and 3:00 PM with our leasing director. Would 1:30 PM work for you?', time: '0:14' },
          { speaker: 'user', text: '1:30 PM is perfect. Does the unit include in-unit laundry and covered parking?', time: '0:20' },
          { speaker: 'agent', text: 'Yes, all 2-bedroom units include in-unit washer/dryer and one assigned covered garage stall. I have booked you for Saturday at 1:30 PM and sent the confirmation to your cell.', time: '0:29' },
        ],
      },
      {
        id: 'maintenance-emergency',
        name: 'HVAC & Plumbing Dispatch',
        role: 'Resident Support',
        tag: 'Emergency Triage',
        scenario: 'Resident reporting a water pipe leak at 11:30 PM',
        transcript: [
          { speaker: 'agent', text: 'Emergency Resident Dispatch. I am an AI assistant for PropertyCare. Are you experiencing an active water leak, gas smell, or heating outage?', time: '0:03' },
          { speaker: 'user', text: 'My kitchen sink pipe just burst under the cabinet, water is spreading fast across the wood floor!', time: '0:09' },
          { speaker: 'agent', text: 'Please turn the shutoff valve clockwise under the sink immediately if accessible. I have dispatched emergency on-call plumbing technician Marco. He is ETA 22 minutes.', time: '0:18' },
        ],
      },
      {
        id: 'lead-buyer',
        name: 'Homebuyer Pre-Qualification',
        role: 'Sales Representative',
        tag: 'Inbound Buyer Lead',
        scenario: 'Prospective buyer checking mortgage pre-approval and open house address',
        transcript: [
          { speaker: 'agent', text: 'Hello! You recently requested information on the Oakwood Hills development. Are you looking to buy within the next 30 to 90 days?', time: '0:03' },
          { speaker: 'user', text: 'Yes, looking to relocate in July. Budget is around 750k and we already have pre-approval.', time: '0:10' },
          { speaker: 'agent', text: 'Wonderful! We have three 4-bedroom homes within that range. Let me connect you with our senior broker or schedule a private preview tomorrow at 11 AM.', time: '0:19' },
        ],
      },
      {
        id: 'rent-followup',
        name: 'Lease Renewal Nudge',
        role: 'Tenant Retention',
        tag: 'Outbound Care',
        scenario: 'Courteous reminder for upcoming lease expiration with incentive offer',
        transcript: [
          { speaker: 'agent', text: 'Hi David, calling on behalf of Skyline Heights. Your current lease is up on August 31st and we would love for you to stay with us.', time: '0:04' },
          { speaker: 'user', text: 'Hey! I was thinking about it, but wanted to know if rent is going up?', time: '0:10' },
          { speaker: 'agent', text: 'If you renew for 12 months by this Friday, your rate stays locked with zero increase, plus a complimentary carpet cleaning. Would you like me to send the digital renewal agreement?', time: '0:21' },
        ],
      },
    ],
    buildFast: {
      title: 'From leasing idea to live phone agents in minutes',
      description: 'Describe your property portfolio, pet policies, and calendar slots. SpotXpert AI handles scheduling, renter questions, and CRM syncing automatically.',
      samplePrompt: 'Create a bilingual leasing agent for a 450-unit community. Collect move-in dates, budget, pet size, and sync booked tours directly to Yardi & Google Calendar.',
      tags: ['Leasing Tour Booking', 'Emergency Maintenance', 'Rent Collection Nudge', 'Security Deposit FAQs'],
    },
    workflows: {
      title: 'Build the path every tenant and buyer call should take',
      description: 'Shape branching logic that inspects unit availability, confirms emergency thresholds, and alerts your on-call team instantly.',
      entryNode: 'Tenant answers & states maintenance problem',
      branches: [
        { condition: 'Active Water/Gas Emergency', action: 'Page on-call contractor & SMS tenant shutoff steps', badgeColor: '#ff5e57' },
        { condition: 'Routine Appliance Repair', action: 'Log ticket in AppFolio/Yardi & confirm 48h slot', badgeColor: '#33A685' },
        { condition: 'Rent or Billing Inquiry', action: 'Authenticate tenant PIN & recite current balance', badgeColor: '#F2E6A7' },
      ],
    },
    goals: {
      title: 'One goal. Every call converted.',
      description: 'Whether qualifying a multi-million-dollar commercial prospect or assisting a resident, every dialogue drives toward a confirmed outcome.',
      sharedGoal: 'Qualify the caller, answer unit specifics, and secure the tour date',
      steps: [
        { num: '1', title: 'Capture Criteria', desc: 'Bedrooms, budget, move-in window & pets' },
        { num: '2', title: 'Resolve Questions', desc: 'Parking, utility caps, amenities & fees' },
        { num: '3', title: 'Lock Appointment', desc: 'Insert into broker calendar and send SMS invite' },
      ],
    },
    naturalFlow: {
      title: 'Handles interruptions, background dog barks, and changing mindsets naturally',
      description: 'Built for callers who jump between lease terms, ask about neighborhood schools mid-sentence, and need gentle conversational pauses.',
      agentInstructions:
        'You are Sarah, a leasing concierge for Highland Properties. Speak warmly with natural 250ms cadence. If the caller mentions a pet, check breed restrictions politely before confirming showing.',
    },
    liveActions: {
      title: 'Connect your property management software live',
      description: 'Integrates natively with Yardi Voyager, RealPage, AppFolio, Entrata, and Buildium to query live unit inventory.',
      systemName: 'Yardi / AppFolio API Gateway',
      webhookEndpoint: 'POST https://api.spotxpert.ai/v1/property/tours/schedule',
      samplePayload: '{\n  "unit_id": "APT-402",\n  "prospect_name": "Marcus Vance",\n  "tour_slot": "2026-06-20T13:30:00Z",\n  "lead_source": "Zillow Inbound Voice"\n}',
    },
    callInsights: {
      title: 'Turn every leasing call into structured pipeline data',
      description: 'Real-time metrics, audio sentiment, and automatic CRM field updates on every prospective renter.',
      metrics: [
        { label: 'After-Hours Answer Rate', value: '100%', subtext: 'Zero dropped leasing leads' },
        { label: 'Booking Conversion', value: '44%', subtext: 'Calls resulting in tour' },
        { label: 'Average Response Time', value: '<350ms', subtext: 'Human-like dialogue speed' },
        { label: 'Emergency Dispatch SLA', value: '<2 mins', subtext: 'From call to contractor SMS' },
      ],
    },
    audioSamples: [
      {
        id: 're-sample-1',
        category: 'Inbound Leasing',
        title: 'Penthouse Showing Scheduling',
        description: 'Qualifies income bracket, preferred move date, and books Sunday viewing.',
        duration: '0:42',
        speaker: 'Sarah (US English)',
        accent: 'Warm & Professional',
        audioSimText: 'Thank you for calling The Grandview Residences! I have private penthouse tours open this Sunday at 2 PM. Would you like me to reserve that slot for you?',
      },
      {
        id: 're-sample-2',
        category: 'Emergency Maintenance',
        title: 'Midnight Pipe Leak Triage',
        description: 'Instructs tenant on water shutoff valve and pages on-call plumber.',
        duration: '0:35',
        speaker: 'Alex (US English)',
        accent: 'Calm & Urgent',
        audioSimText: 'I understand water is pooling under the sink. Please locate the oval valve under the cabinet and turn it clockwise. I have already dispatched our emergency plumber Marco.',
      },
      {
        id: 're-sample-3',
        category: 'Commercial Brokerage',
        title: 'Office Space Square Footage Inquiry',
        description: 'Explains triple-net lease terms and sends digital spec sheet.',
        duration: '0:50',
        speaker: 'Elena (UK English)',
        accent: 'Refined Executive',
        audioSimText: 'The 4th floor suite offers 8,200 rentable square feet with fiber redundancy and 14 executive offices. I am texting the architectural floor plan to your phone right now.',
      },
    ],
    faqs: [
      { question: 'Can the voice agent integrate with Yardi, AppFolio, and RealPage?', answer: 'Yes. SpotXpert AI connects via bidirectional REST APIs and webhooks to verify real-time unit availability, log maintenance work orders, and create prospective tenant CRM cards.' },
      { question: 'What happens when a tenant has a true life-safety emergency?', answer: 'Voice agents immediately recognize keywords like smoke, fire, active flooding, or gas smell. The agent gives immediate safety instructions and simultaneously bridges the call to 911 or pages on-call staff via SMS/robocall.' },
      { question: 'Can it speak multiple languages like Spanish or French?', answer: 'Yes, our agents automatically detect caller language in real time and converse fluently in English, Spanish, French, Hindi, and over 40 other languages.' },
      { question: 'How do agents prevent hallucinating false rent prices?', answer: 'Agents are strictly grounded in your active API database. They only state prices, deposits, and terms pulled directly from your property management software.' },
    ],
  },

  'accounting': {
    slug: 'accounting',
    name: 'Accounting / bookkeeping',
    category: 'Finance & Accounting',
    bannerAnnouncement: 'Announcing TaxVoice V4: Autonomous tax season intake & invoice reconciliation agents.',
    heroHeadline: 'Voice agents that collect tax docs and chase unpaid invoices on time',
    heroSubheadline:
      'Automate client intake, tax checklist reminders, payment follow-ups, and scheduling for CPAs, bookkeeping practices, and accounting firms.',
    quickChips: [
      { id: 'tax-intake', label: 'Tax Season Client Intake', iconName: 'FileText' },
      { id: 'ar-chase', label: 'Overdue Invoice Follow-Up', iconName: 'DollarSign' },
      { id: 'cpa-booking', label: 'CPA Consultation Booking', iconName: 'Calendar' },
      { id: 'w9-w2', label: 'W-9 & 1099 Document Gathering', iconName: 'CheckSquare' },
      { id: 'payroll', label: 'Payroll Deadline Reminders', iconName: 'Clock' },
    ],
    partnerLogos: [
      { name: 'QuickBooks Pro', tag: 'ERP Integration' },
      { name: 'Xero Accounting', tag: 'Cloud Ledger' },
      { name: 'Sage Intacct', tag: 'Enterprise Finance' },
      { name: 'Thomson Reuters', tag: 'Tax Software' },
      { name: 'Wolters Kluwer', tag: 'CCH Axcess' },
      { name: 'Gusto Payroll', tag: 'Payroll Platform' },
    ],
    quote: {
      text: 'Tax season used to drown our administrative staff in document chasing. SpotXpert AI voice agents collected 84% of missing W-2s and 1099s without our CPAs making a single manual call.',
      author: 'Jonathan Sterling, CPA',
      role: 'Managing Partner',
      company: 'Sterling & Croft Associates',
    },
    demoAgents: [
      {
        id: 'tax-gather',
        name: 'Missing Tax Documents Chaser',
        role: 'Tax Prep Assistant',
        tag: 'Client Intake',
        scenario: 'Reminding client about pending 1099-B brokerage statement',
        transcript: [
          { speaker: 'agent', text: 'Hi Robert, calling from Sterling Tax Partners. Our CPA team is finalizing your 2025 federal return, but we are still missing your Schwab 1099 brokerage statement.', time: '0:03' },
          { speaker: 'user', text: 'Oh right! I downloaded that yesterday. Where should I upload it?', time: '0:09' },
          { speaker: 'agent', text: 'I am sending a secure encrypted upload link to your mobile number now. Once uploaded, CPA Miller will finalize your filing within 48 hours.', time: '0:18' },
        ],
      },
      {
        id: 'invoice-reconcile',
        name: 'Overdue AR Collections',
        role: 'Billing Concierge',
        tag: 'Accounts Receivable',
        scenario: 'Polite reminder on 45-day overdue advisory invoice',
        transcript: [
          { speaker: 'agent', text: 'Good morning, calling regarding invoice 8492 for quarterly bookkeeping services for $2,400, which reached 30 days past due.', time: '0:04' },
          { speaker: 'user', text: 'Yes, our accounts payable run is this Thursday. Can I pay via ACH directly right now?', time: '0:11' },
          { speaker: 'agent', text: 'Certainly! I can send our direct Stripe ACH authorization to your email or take the routing number securely right now.', time: '0:20' },
        ],
      },
      {
        id: 'cpa-calendar',
        name: 'Advisory Session Booking',
        role: 'CPA Scheduler',
        tag: 'Inbound Scheduling',
        scenario: 'Business owner looking for tax planning consultation',
        transcript: [
          { speaker: 'agent', text: 'Thanks for calling Apex Accounting Group. Would you like to schedule an S-Corp election advisory or corporate tax filing session?', time: '0:03' },
          { speaker: 'user', text: 'Looking for an S-Corp tax optimization review for our LLC.', time: '0:08' },
          { speaker: 'agent', text: 'Partner Sarah Jenkins has availability this Tuesday at 10 AM or Thursday at 2 PM EST via Zoom. Which would you prefer?', time: '0:16' },
        ],
      },
      {
        id: 'payroll-audit',
        name: 'Quarterly Payroll Triage',
        role: 'Payroll Operations',
        tag: 'Payroll Compliance',
        scenario: 'Checking payroll variance before Friday cutoff',
        transcript: [
          { speaker: 'agent', text: 'Hi Maria, this is an automated prompt from your payroll support pod. We detected 3 unapproved timecards for the week ending June 14th.', time: '0:03' },
          { speaker: 'user', text: 'I just approved them in Gusto five minutes ago.', time: '0:07' },
          { speaker: 'agent', text: 'Verified! The sync just cleared. Your payroll batch is scheduled for direct deposit without delays.', time: '0:15' },
        ],
      },
    ],
    buildFast: {
      title: 'From bookkeeping workflows to live voice agents in minutes',
      description: 'Connect QuickBooks, Xero, or Karbon CRM. Your voice agent authenticates client identities, answers tax deadline questions, and triggers payment links.',
      samplePrompt: 'Create a polite accounts receivable agent that calls clients with invoices over 30 days old, offers split ACH payment, and updates QuickBooks invoice status.',
      tags: ['Missing 1099 Intake', 'Overdue AR Follow-up', 'Audit Document Tracker', 'CPA Calendar Booking'],
    },
    workflows: {
      title: 'Structured financial dialogue workflows that respect client relationships',
      description: 'Automate delicate conversations around overdue balances, tax compliance deadlines, and retainer agreements.',
      entryNode: 'Client answers AR or tax intake call',
      branches: [
        { condition: 'Ready to pay full balance', action: 'Send 1-click Stripe/QuickBooks payment SMS', badgeColor: '#33A685' },
        { condition: 'Disputing invoice line-item', action: 'Route transcript & request detail to partner desk', badgeColor: '#F2E6A7' },
        { condition: 'Needs 2-installment plan', action: 'Execute automated bi-weekly ACH schedule', badgeColor: '#33A685' },
      ],
    },
    goals: {
      title: 'Drive timely filings and zero bad-debt write-offs',
      description: 'Every interaction keeps your CPA staff billable while voice agents manage administrative follow-up.',
      sharedGoal: 'Confirm tax documents or secure payment authorization without CPA friction',
      steps: [
        { num: '1', title: 'Verify Identity', desc: 'Secure DOB or EIN authentication' },
        { num: '2', title: 'State Requirement', desc: 'Explain exact missing schedule or past-due balance' },
        { num: '3', title: 'Execute Action', desc: 'Send secure portal link or process payment' },
      ],
    },
    naturalFlow: {
      title: 'Understands financial terms, tax schedules, and accounting nuances',
      description: 'Never trips over terms like 1099-NEC, K-1 distributions, depreciation schedules, or quarterly estimated tax deadlines.',
      agentInstructions:
        'You are James, senior intake coordinator for Sterling & Croft. Be courteous, highly discrete, and ensure all client tax details remain confidential.',
    },
    liveActions: {
      title: 'Integrate directly with QuickBooks, Xero, and tax practice management tools',
      description: 'Live read/write capabilities across QuickBooks Online, Xero, Karbon, Canopy, and CCH Axcess.',
      systemName: 'QuickBooks & Xero Ledger Sync',
      webhookEndpoint: 'POST https://api.spotxpert.ai/v1/accounting/invoices/remind',
      samplePayload: '{\n  "invoice_id": "INV-2026-904",\n  "client_email": "r.chen@zenith.io",\n  "amount_due": 3450.00,\n  "days_overdue": 32\n}',
    },
    callInsights: {
      title: 'Full visibility over client collection velocity and intake turnaround',
      description: 'Track how quickly clients submit documentation and how many past-due invoices are collected automatically.',
      metrics: [
        { label: 'AR Recovery Rate', value: '78%', subtext: 'Collected without legal escalation' },
        { label: 'Doc Intake Velocity', value: '3.1 days', subtext: 'Down from 18 days average' },
        { label: 'CPA Hours Saved', value: '14 hrs/wk', subtext: 'Per senior accountant' },
        { label: 'Client Satisfaction', value: '4.9/5', subtext: 'Polite, non-intrusive calls' },
      ],
    },
    audioSamples: [
      {
        id: 'acc-sample-1',
        category: 'Tax Prep Intake',
        title: 'Missing K-1 Partnership Schedule Follow-Up',
        description: 'Politely alerts business owner that corporate return cannot file without K-1 schedule.',
        duration: '0:38',
        speaker: 'Julian (US English)',
        accent: 'Professional CPA Tone',
        audioSimText: 'Hello Jennifer, calling from Apex Tax Partners. Our team is ready to complete your 1120-S corporate return, but we are waiting on your K-1 schedule from the LLC.',
      },
      {
        id: 'acc-sample-2',
        category: 'Accounts Receivable',
        title: 'Net-30 Invoice Courteous Reminder',
        description: 'Verifies receipt of invoice and offers one-click digital ACH link.',
        duration: '0:44',
        speaker: 'Chloe (US English)',
        accent: 'Friendly & Diplomatic',
        audioSimText: 'Hi Marcus, just touching base regarding invoice 4182 for last month’s payroll advisory. I can send a quick link for payment, or would you like me to flag this for your Thursday check run?',
      },
    ],
    faqs: [
      { question: 'Is client financial data secure and SOC-2 compliant?', answer: 'Yes. All calls, transcripts, and integrations comply with SOC-2 Type II, ISO 27001, and GLBA financial confidentiality requirements with end-to-end encryption.' },
      { question: 'Can clients pay directly on the phone call?', answer: 'Yes. We support PCI-DSS tokenized card payments and automated ACH authorizations directly over the call without storing plain card data.' },
      { question: 'Can it connect to our tax portal like Canopy or Karbon?', answer: 'Yes, our agents automatically create client tasks, verify checklist completeness, and update status in your practice management system.' },
    ],
  },

  'law-firms': {
    slug: 'law-firms',
    name: 'Law firms',
    category: 'Legal & Professional',
    bannerAnnouncement: 'LegalVoice V4: 24/7 client intake & emergency retainer triage for law practices.',
    heroHeadline: 'Voice agents that qualify legal cases and sign retainers 24/7',
    heroSubheadline:
      'Never lose another high-value personal injury, corporate, or litigation lead to voicemail. Immediate intake, conflict checks, and consultation booking.',
    quickChips: [
      { id: 'pi-intake', label: 'Personal Injury Intake', iconName: 'Activity' },
      { id: 'consult-book', label: 'Attorney Consultation Booking', iconName: 'Calendar' },
      { id: 'case-status', label: 'Case Status Inquiries', iconName: 'FileCheck' },
      { id: 'retainer-send', label: 'Digital Retainer Dispatch', iconName: 'PenTool' },
      { id: 'court-date', label: 'Hearing & Court Date Reminders', iconName: 'Clock' },
    ],
    partnerLogos: [
      { name: 'Clio Manage', tag: 'Legal Practice CRM' },
      { name: 'Filevine', tag: 'Case Management' },
      { name: 'MyCase', tag: 'Legal Software' },
      { name: 'Litify', tag: 'Enterprise Legal' },
      { name: 'Smokeball', tag: 'Productivity' },
      { name: 'LawPay', tag: 'Legal Payments' },
    ],
    quote: {
      text: 'In personal injury law, the first firm that answers the phone signs the client. SpotXpert AI voice agents reduced our intake response time from 45 minutes to 4 seconds flat.',
      author: 'Dominic Sterling, Esq.',
      role: 'Managing Partner',
      company: 'Sterling Litigation Group',
    },
    demoAgents: [
      {
        id: 'pi-accident',
        name: 'Auto Accident Case Intake',
        role: 'Legal Intake Specialist',
        tag: 'High-Value Intake',
        scenario: 'Caller involved in a multi-vehicle accident on the highway',
        transcript: [
          { speaker: 'agent', text: 'Thank you for calling Sterling Law Group. I am an intake assistant. Are you or a loved one calling regarding a recent motor vehicle accident?', time: '0:03' },
          { speaker: 'user', text: 'Yes, my car was rear-ended by a commercial truck this morning on I-95. I was taken to urgent care with neck injuries.', time: '0:10' },
          { speaker: 'agent', text: 'I am so sorry to hear that, and I am glad you received medical care. Were you the driver, and did police file an official accident report at the scene?', time: '0:19' },
          { speaker: 'user', text: 'Yes, I was driving, and the state trooper filed report number 44819.', time: '0:25' },
          { speaker: 'agent', text: 'Thank you. You qualify for an immediate consultation with partner attorney David Vance. I have sent an intake text to your phone and can connect you live right now.', time: '0:36' },
        ],
      },
      {
        id: 'family-law',
        name: 'Family Law Consultation',
        role: 'Client Intake Specialist',
        tag: 'Inbound Inquiries',
        scenario: 'Caller inquiring about child custody and mediation counsel',
        transcript: [
          { speaker: 'agent', text: 'Welcome to Morrison & Clark Family Law. Are you seeking counsel regarding divorce, child custody, or estate planning?', time: '0:03' },
          { speaker: 'user', text: 'Looking for a consultation regarding child custody and parenting plan modifications.', time: '0:09' },
          { speaker: 'agent', text: 'We have specialist family law partners available. Our initial 45-minute confidential case review is available tomorrow at 3:00 PM. Would that work?', time: '0:18' },
        ],
      },
      {
        id: 'hearing-reminder',
        name: 'Court Hearing Prep',
        role: 'Legal Support Agent',
        tag: 'Client Reminders',
        scenario: 'Court appearance reminder with courthouse parking and attire guidance',
        transcript: [
          { speaker: 'agent', text: 'Hello Marcus, this is a courtesy reminder from Apex Defense regarding your preliminary hearing this Thursday at 9:00 AM in Municipal Courtroom 3B.', time: '0:04' },
          { speaker: 'user', text: 'Thanks! Does attorney Davis want me there early?', time: '0:08' },
          { speaker: 'agent', text: 'Yes, attorney Davis requests you arrive by 8:30 AM to review testimony notes. Remember to bring your photo ID and park in the West lot.', time: '0:18' },
        ],
      },
      {
        id: 'retainer-intake',
        name: 'Retainer Agreement Dispatch',
        role: 'Retainer Coordinator',
        tag: 'Retainer Signing',
        scenario: 'Guiding qualified client through digital signature for representation',
        transcript: [
          { speaker: 'agent', text: 'Hi Sarah, partner attorney Reynolds has reviewed your commercial lease dispute and approved your case. Are you ready to receive the digital retainer agreement?', time: '0:04' },
          { speaker: 'user', text: 'Yes, ready to move forward immediately.', time: '0:08' },
          { speaker: 'agent', text: 'I have delivered the DocuSign link to your email. You can sign directly on your phone, and our team will file the initial injunction tomorrow morning.', time: '0:19' },
        ],
      },
    ],
    buildFast: {
      title: 'From practice intake requirements to live legal voice agents in minutes',
      description: 'Define your firm practice areas, qualifying criteria, conflict check parameters, and partner calendars. SpotXpert AI handles the rest.',
      samplePrompt: 'Build a 24/7 personal injury intake agent that collects accident date, injury type, insurance info, checks statute of limitations, and alerts the on-duty partner.',
      tags: ['Personal Injury Intake', 'Criminal Defense Triage', 'Family Law Scheduling', 'Estate Planning Intake'],
    },
    workflows: {
      title: 'Case qualification flows that separate premier cases from non-starters',
      description: 'Ensure callers meet threshold requirements (fault, injury, timeline) before booking precious attorney time.',
      entryNode: 'Prospective client describes legal issue',
      branches: [
        { condition: 'Catastrophic Injury / High Value', action: 'Immediate live bridge to on-duty attorney cell', badgeColor: '#ff5e57' },
        { condition: 'Qualified Practice Area', action: 'Collect medical details & book intake Zoom slot', badgeColor: '#33A685' },
        { condition: 'Out of Jurisdiction or Non-Fit', action: 'Politely refer to state bar association registry', badgeColor: '#F2E6A7' },
      ],
    },
    goals: {
      title: 'Sign cases before the competition answers',
      description: 'The faster your law firm connects with an injured caller, the higher the retainer signature rate.',
      sharedGoal: 'Qualify liability, verify medical treatment, and secure consultation commitment',
      steps: [
        { num: '1', title: 'Triage Accident', desc: 'Identify date, liability, and injuries' },
        { num: '2', title: 'Conflict Screen', desc: 'Check opposing parties against firm database' },
        { num: '3', title: 'Secure Retainer', desc: 'Book priority calendar slot and dispatch DocuSign' },
      ],
    },
    naturalFlow: {
      title: 'Empathetic, calm, and strictly compliant with attorney-client privilege guidelines',
      description: 'Understands distressed callers, legal terminology (statute of limitations, tort, depositions), and maintains confidentiality disclaimers.',
      agentInstructions:
        'You are Jessica, senior legal intake concierge for Sterling Litigation. Speak with empathy and confidence. Always state that initial intake does not formally constitute an attorney-client relationship until the retainer is executed.',
    },
    liveActions: {
      title: 'Direct bidirectional sync with Clio, Filevine, and LawPay',
      description: 'Automatically creates matter files, populates intake fields, checks conflicts, and logs recorded audio transcripts.',
      systemName: 'Clio Manage & Filevine API',
      webhookEndpoint: 'POST https://api.spotxpert.ai/v1/legal/intake/case',
      samplePayload: '{\n  "matter_type": "Personal Injury - Auto",\n  "client_name": "Marcus Vance",\n  "incident_date": "2026-06-15",\n  "police_report": "44819",\n  "lead_attorney": "David Vance, Esq."\n}',
    },
    callInsights: {
      title: 'Real-time visibility over firm lead capture and retainer conversion',
      description: 'Monitor intake speed, call sources (Google Ads, Referral, LSA), and signed retainer velocity.',
      metrics: [
        { label: 'Intake Answer Speed', value: '<4 secs', subtext: '24/7/365 coverage' },
        { label: 'Retainer Conversion', value: '38%', subtext: 'From qualified inbound lead' },
        { label: 'After-Hours Capture', value: '62%', subtext: 'Signed outside business hours' },
        { label: 'Clio Sync Latency', value: '<1 sec', subtext: 'Instant matter creation' },
      ],
    },
    audioSamples: [
      {
        id: 'law-sample-1',
        category: 'Personal Injury',
        title: 'Commercial Truck Accident Intake',
        description: 'Empathetically collects accident facts, injury status, and routes to trial partner.',
        duration: '0:45',
        speaker: 'Amanda (US English)',
        accent: 'Compassionate & Crisp',
        audioSimText: 'I understand you were injured in an accident with a delivery truck. Let me gather the basic details so attorney Vance can evaluate your claim right away.',
      },
      {
        id: 'law-sample-2',
        category: 'Corporate Defense',
        title: 'Subpoena Response Consultation',
        description: 'Gathers jurisdiction details, deadline dates, and books partner strategy session.',
        duration: '0:40',
        speaker: 'Richard (US English)',
        accent: 'Authoritative & Calm',
        audioSimText: 'Thank you for calling Reynolds Corporate Defense. I understand your firm received a regulatory inquiry. What is the return date noted on the subpoena?',
      },
    ],
    faqs: [
      { question: 'Does using an AI voice agent violate legal ethics rules?', answer: 'No. The agent functions strictly as an intake coordinator, collecting facts and scheduling appointments under clear disclaimers that it does not provide legal advice.' },
      { question: 'Can it screen opposing parties for conflicts of interest?', answer: 'Yes. The voice agent queries your firm practice management software (Clio, Filevine, Litify) in real time to ensure opposing names do not trigger conflict flags.' },
      { question: 'Can it dispatch retainer agreements via SMS while on the call?', answer: 'Yes. Once a caller qualifies, the agent triggers DocuSign or LawPay SMS links, allowing clients to sign retainer agreements before hanging up.' },
    ],
  },

  'recruiting': {
    slug: 'recruiting',
    name: 'Recruiting',
    category: 'HR & Staffing',
    bannerAnnouncement: 'TalentVoice V4: Autonomous candidate phone screening & interview scheduling.',
    heroHeadline: 'Voice agents that screen candidates and schedule interviews in hours',
    heroSubheadline:
      'Eliminate recruiter phone tag. Automate candidate pre-screening, resume checks, salary expectations, and calendar scheduling across high-volume hiring pipelines.',
    quickChips: [
      { id: 'screen', label: 'Candidate Phone Screening', iconName: 'PhoneCall' },
      { id: 'schedule', label: 'Interview Calendar Booking', iconName: 'Calendar' },
      { id: 'salary', label: 'Comp & Availability Check', iconName: 'DollarSign' },
      { id: 'referral', label: 'Reference Check Calls', iconName: 'CheckCircle' },
      { id: 'onboarding', label: 'First-Day Orientation Check-In', iconName: 'UserCheck' },
    ],
    partnerLogos: [
      { name: 'Greenhouse ATS', tag: 'Talent Software' },
      { name: 'Lever ATS', tag: 'Modern Hiring' },
      { name: 'Workday HCM', tag: 'Enterprise HR' },
      { name: 'Bullhorn', tag: 'Staffing Agency' },
      { name: 'Jobvite', tag: 'Talent Acquisition' },
      { name: 'iCIMS', tag: 'Talent Cloud' },
    ],
    quote: {
      text: 'Our recruiters used to spend 25 hours a week just doing repetitive initial phone screens. SpotXpert AI voice agents screened 1,200 applicants in 48 hours and pushed qualified shortlists directly into Greenhouse.',
      author: 'Maya Lin',
      role: 'Head of Global Talent Acquisition',
      company: 'OmniTech Staffing Solutions',
    },
    demoAgents: [
      {
        id: 'software-screen',
        name: 'Fullstack Engineer Screen',
        role: 'Technical Recruiter',
        tag: 'Engineering Hiring',
        scenario: 'Screening applicant for Senior TypeScript / Cloud role',
        transcript: [
          { speaker: 'agent', text: 'Hi Alex, calling from SpotXpert Talent. You applied for our Senior Fullstack Engineer role. Do you have 4 minutes for a quick introductory screening?', time: '0:03' },
          { speaker: 'user', text: 'Sure, I have a few minutes now!', time: '0:07' },
          { speaker: 'agent', text: 'Great! The role requires heavy experience with Next.js, Node, and Kubernetes. How many years have you been architecting production systems with TypeScript and cloud infrastructure?', time: '0:16' },
          { speaker: 'user', text: 'I have about 6 years with TypeScript and React, and the last 3 years heavily deploying containerized services on AWS EKS.', time: '0:25' },
          { speaker: 'agent', text: 'Excellent. The target compensation is $160,000 to $185,000 base with equity. Does that align with your expectations, and what is your current notice period?', time: '0:35' },
        ],
      },
      {
        id: 'nurse-staffing',
        name: 'Healthcare Staffing Intake',
        role: 'Healthcare Recruiter',
        tag: 'Clinical Staffing',
        scenario: 'Screening RN travel nurse for immediate ICU shift placement',
        transcript: [
          { speaker: 'agent', text: 'Hello Danielle, calling from MedicalStaff Network. We have an immediate 13-week ICU travel contract in Denver paying $3,200 weekly. Are you currently compact-state licensed?', time: '0:04' },
          { speaker: 'user', text: 'Yes, compact RN license active, BLS and ACLS certified through 2027.', time: '0:11' },
          { speaker: 'agent', text: 'Perfect. Would you be available to start orientation on Monday, July 7th? I can submit your credential packet directly to the nurse manager right now.', time: '0:20' },
        ],
      },
      {
        id: 'reference-check',
        name: 'Automated Reference Check',
        role: 'Credentialing Specialist',
        tag: 'Verification',
        scenario: 'Verifying past employment and team performance with previous manager',
        transcript: [
          { speaker: 'agent', text: 'Hello Mr. Harrison, calling on behalf of Apex Talent. Jordan Smith listed you as a former supervisor. Do you have 3 minutes to confirm their dates of employment and performance?', time: '0:04' },
          { speaker: 'user', text: 'Yes, Jordan reported to me as Lead Analyst from 2022 until last December. Outstanding performance.', time: '0:12' },
          { speaker: 'agent', text: 'Thank you! On a scale of 1 to 5, how would you rate their reliability and would you re-hire them in the future?', time: '0:19' },
        ],
      },
      {
        id: 'interview-reschedule',
        name: 'Interview Rescheduling Concierge',
        role: 'Recruiting Coordinator',
        tag: 'Calendar Coordination',
        scenario: 'Helping applicant reschedule onsite interview due to travel conflict',
        transcript: [
          { speaker: 'agent', text: 'Hi Carlos, we received your message regarding a flight conflict for Thursday’s onsite panel. We have alternate slots with the VP of Engineering on Friday at 1 PM or Monday at 10 AM.', time: '0:04' },
          { speaker: 'user', text: 'Friday at 1 PM works much better for me.', time: '0:08' },
          { speaker: 'agent', text: 'Done! I have updated your calendar invite and notified the interview panel. Good luck on Friday!', time: '0:16' },
        ],
      },
    ],
    buildFast: {
      title: 'From job requisition to phone screening in minutes',
      description: 'Upload your job description and qualification rubric. SpotXpert AI dials applicants, evaluates must-haves, and schedules hiring manager interviews.',
      samplePrompt: 'Create a high-volume screening agent for warehouse shift supervisors. Check forklift license, weekend availability, salary range, and log scores to Bullhorn.',
      tags: ['Technical Engineering Screen', 'Hourly Volume Screening', 'Automated Reference Verification', 'Executive Search Intake'],
    },
    workflows: {
      title: 'Candidate qualification paths that elevate top talent',
      description: 'Ensure candidates meet critical qualifications before passing to hiring managers.',
      entryNode: 'Candidate answers screening call',
      branches: [
        { condition: 'Meets skills & comp expectations', action: 'Directly offer and book hiring manager calendar slot', badgeColor: '#33A685' },
        { condition: 'Missing required credentials/license', action: 'Politely inform candidate & save to future talent pool', badgeColor: '#F2E6A7' },
        { condition: 'Salary expectations out of band', action: 'Flag recruiter with recorded variance for manual review', badgeColor: '#ff5e57' },
      ],
    },
    goals: {
      title: 'Slash time-to-hire by 70%',
      description: 'Engage candidates while their application is fresh rather than waiting days for a recruiter email.',
      sharedGoal: 'Verify core qualifications, comp expectations, and schedule hiring manager interview',
      steps: [
        { num: '1', title: 'Verify Experience', desc: 'Ask role-specific questions and assess answers' },
        { num: '2', title: 'Check Logistics', desc: 'Confirm start date, salary, and work authorization' },
        { num: '3', title: 'Book Next Step', desc: 'Insert interview directly into team calendar' },
      ],
    },
    naturalFlow: {
      title: 'Conversational, encouraging, and natural for job seekers',
      description: 'Handles nervous candidates, provides clarification on role responsibilities, and answers benefits questions smoothly.',
      agentInstructions:
        'You are Taylor, recruiting coordinator at SpotXpert Talent. Speak encouragingly and professionally. Make the candidate feel valued while accurately validating prerequisites.',
    },
    liveActions: {
      title: 'Native integration with Greenhouse, Lever, Bullhorn, and Workday',
      description: 'Reads candidate resumes, updates stage status, logs transcripts, and creates calendar events.',
      systemName: 'Greenhouse & Lever ATS Webhooks',
      webhookEndpoint: 'POST https://api.spotxpert.ai/v1/recruiting/candidates/screen',
      samplePayload: '{\n  "candidate_id": "CAND-9482",\n  "role": "Senior Fullstack Engineer",\n  "screen_score": 94,\n  "next_step": "Booked Hiring Manager Interview"\n}',
    },
    callInsights: {
      title: 'Holistic analytics across your recruitment pipeline',
      description: 'Gain transparency into candidate drop-off, salary expectation trends, and candidate sentiment.',
      metrics: [
        { label: 'Time to Screen', value: '<2 hours', subtext: 'From application submission' },
        { label: 'Interview Show Rate', value: '96%', subtext: 'Automated SMS reminders' },
        { label: 'Recruiter Time Saved', value: '65%', subtext: 'More time for sourcing & closing' },
        { label: 'ATS Sync Accuracy', value: '100%', subtext: 'Structured evaluation rubrics' },
      ],
    },
    audioSamples: [
      {
        id: 'rec-sample-1',
        category: 'Tech Screening',
        title: 'Backend Engineer Preliminary Screen',
        description: 'Assesses Go/Kubernetes experience, compensation band, and location preference.',
        duration: '0:48',
        speaker: 'Chloe (US English)',
        accent: 'Energetic & Professional',
        audioSimText: 'Hi Jordan, thanks for speaking with me! To kick things off, can you tell me about a recent distributed system you built using Go and cloud infrastructure?',
      },
      {
        id: 'rec-sample-2',
        category: 'Executive Search',
        title: 'VP of Sales Confidential Sourcing',
        description: 'Politely initiates confidential dialogue with passive candidate.',
        duration: '0:42',
        speaker: 'David (US English)',
        accent: 'Discreet & Executive',
        audioSimText: 'Good afternoon Arthur, calling confidentially regarding an enterprise CRO opportunity with a high-growth AI infrastructure firm. Do you have a moment to connect?',
      },
    ],
    faqs: [
      { question: 'Will candidates know they are speaking with an AI agent?', answer: 'Yes, agents politely disclose their AI status upfront, which candidates love due to the zero-wait immediate screening experience.' },
      { question: 'Can the agent score answers according to a custom rubric?', answer: 'Yes. You define key parameters (years of experience, technical stack, certifications), and the agent objectively scores the response in your ATS.' },
      { question: 'Does it support automated reference checks?', answer: 'Yes, agents can dial candidate references, verify past titles and dates, ask qualitative performance questions, and generate executive summaries.' },
    ],
  },
};

// Generate full industry data for the remaining 13 industries with rich tailored parameters
const ADDITIONAL_INDUSTRIES: {
  slug: string;
  name: string;
  category: string;
  headline: string;
  subheadline: string;
  chips: string[];
  partners: string[];
  quote: { text: string; author: string; role: string; company: string };
  sampleTitle: string;
}[] = [
  {
    slug: 'construction',
    name: 'Construction',
    category: 'Industrial & Contracting',
    headline: 'Voice agents that dispatch sub-contractors and log site safety reports',
    subheadline: 'Eliminate job site phone chaos. Automate sub-contractor scheduling, material delivery verification, change order approvals, and safety incident reporting.',
    chips: ['Sub-Contractor Dispatch', 'Equipment Rental Coordination', 'Material Delivery Confirmation', 'Site Safety Incident Log', 'Change Order Approvals'],
    partners: ['Procore Technologies', 'Autodesk Build', 'Trimble Viewpoint', 'PlanGrid', 'Buildertrend', 'Caterpillar Fleet'],
    quote: {
      text: 'Our project managers used to spend 3 hours every morning calling concrete, framing, and electrical subs. SpotXpert AI automated confirmation of 40 trades across 6 active job sites before 6:30 AM.',
      author: 'Frank Castiglione',
      role: 'VP of Field Operations',
      company: 'Pinnacle Commercial Builders',
    },
    sampleTitle: 'Sub-Contractor Concrete Pour Confirmation',
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    category: 'Supply Chain & Freight',
    headline: 'Voice agents that track freight shipments and dispatch drivers 24/7',
    subheadline: 'Keep your fleet moving. Automate check calls, dock appointment scheduling, driver ETA updates, breakdown reporting, and proof-of-delivery logging.',
    chips: ['Driver Check Calls', 'Dock Appointment Booking', 'Breakdown & Emergency Dispatch', 'POD Document Collection', 'Rate Confirmation & Booking'],
    partners: ['McLeod Software', 'project44', 'Samsara Telematics', 'FourKites', 'Trimble Transportation', 'C.H. Robinson API'],
    quote: {
      text: 'Track-and-trace phone calls were consuming 50% of our dispatch staff time. SpotXpert AI handles over 3,000 automated driver check calls daily with zero driver friction.',
      author: 'Marcus Vance',
      role: 'Director of Carrier Operations',
      company: 'TransGlobal Freightways',
    },
    sampleTitle: 'Driver In-Transit Check Call & ETA Update',
  },
  {
    slug: 'insurance',
    name: 'Insurance',
    category: 'Insurance & InsurTech',
    headline: 'Voice agents that triage FNOL claims and process policy endorsements',
    subheadline: 'Slash claim cycle times. Automate First Notice of Loss (FNOL), policyholder status inquiries, roadside assistance dispatch, and premium payment reminders.',
    chips: ['FNOL Claim Intake', 'Policy Endorsement & Updates', 'Roadside Assistance Dispatch', 'Claim Status Inquiries', 'Renewal & Premium Notices'],
    partners: ['Guidewire Software', 'Duck Creek Technologies', 'Applied Systems', 'Vertafore', 'Salesforce Financial Services', 'Snapsheet'],
    quote: {
      text: 'During severe storm surges, our claim phone lines used to see 40-minute hold times. SpotXpert AI voice agents answer 100% of calls within 2 rings, gathering photos and triage info flawlessly.',
      author: 'Claire Thornton',
      role: 'Chief Claims Officer',
      company: 'Heritage Mutual Insurance',
    },
    sampleTitle: 'Auto Collision First Notice of Loss (FNOL)',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare administration',
    category: 'Healthcare & Clinical',
    headline: 'HIPAA-compliant voice agents that schedule patients and triage refills',
    subheadline: 'Protect clinical staff from phone burnout. Automate patient appointment booking, prescription refill requests, pre-op prep instructions, and insurance eligibility checks.',
    chips: ['Patient Appointment Scheduling', 'Rx Prescription Refill Requests', 'Post-Op Follow-Up Calls', 'Insurance Eligibility Verification', 'Physician Referral Intake'],
    partners: ['Epic Systems', 'Cerner Health', 'athenahealth', 'eClinicalWorks', 'NextGen Healthcare', 'CareCloud'],
    quote: {
      text: 'Patient no-shows dropped by 34% after deploying SpotXpert AI conversational reminders. Patients can reschedule or ask pre-visit questions naturally without waiting on hold.',
      author: 'Dr. Rebecca Stern, MD',
      role: 'Chief Medical Officer',
      company: 'Summit Ambulatory Health Network',
    },
    sampleTitle: 'Post-Procedure Recovery Check-In & Medication Review',
  },
  {
    slug: 'professional-services',
    name: 'Professional services',
    category: 'Consulting & Advisory',
    headline: 'Voice agents that qualify enterprise prospects and manage client retainers',
    subheadline: 'Turn incoming advisory inquiries into billed engagements. Automate consultant booking, project scope intake, NDA dispatch, and retainer milestone check-ins.',
    chips: ['Advisory Scope Intake', 'Partner Consultation Booking', 'Retainer Balance Inquiries', 'Confidential NDA Dispatch', 'Executive Survey Follow-Up'],
    partners: ['Salesforce Cloud', 'HubSpot Enterprise', 'Asana Consulting', 'Microsoft Dynamics', 'NetSuite OpenAir', 'Stripe Invoicing'],
    quote: {
      text: 'High-value enterprise prospects expect immediate responsiveness. SpotXpert AI ensures every executive caller is greeted by an intelligent concierge that books partner calendars on the spot.',
      author: 'Harrison Blake',
      role: 'Managing Principal',
      company: 'Vanguard Strategy Partners',
    },
    sampleTitle: 'Enterprise Digital Strategy Consultation Booking',
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing operations',
    category: 'Industrial Manufacturing',
    headline: 'Voice agents that coordinate supply orders and report plant downtime',
    subheadline: 'Connect your factory floor to enterprise ERP. Automate raw material order inquiries, maintenance dispatch, supplier delivery updates, and shift schedule coordination.',
    chips: ['Supplier Delivery Tracking', 'Equipment Downtime Triage', 'MRO Parts Replenishment', 'Plant Shift Coverage', 'Quality Audit Logging'],
    partners: ['SAP S/4HANA', 'Oracle NetSuite', 'Siemens MindSphere', 'Rockwell Automation', 'Plex Systems', 'Infor CloudSuite'],
    quote: {
      text: 'When a production line goes down, every minute costs $10,000. SpotXpert AI voice agents page technicians and order replacement actuators within 45 seconds of machine fault reporting.',
      author: 'Klaus Lindner',
      role: 'VP of Manufacturing Engineering',
      company: 'Precision Industrial Components',
    },
    sampleTitle: 'Hydraulic Press Fault Alert & Parts Dispatch',
  },
  {
    slug: 'schools-colleges',
    name: 'school/collages',
    category: 'Higher Education & K-12',
    headline: 'Voice agents that guide student admissions and handle campus inquiries',
    subheadline: 'Support students and parents 24/7. Automate admissions application help, campus tour scheduling, financial aid FAQS, registrar document requests, and weather alerts.',
    chips: ['Admissions Application Help', 'Campus Tour Scheduling', 'Financial Aid & FAFSA FAQs', 'Registrar Transcript Orders', 'Campus Emergency Notifications'],
    partners: ['Ellucian Banner', 'Blackbaud Higher Ed', 'Canvas LMS', 'PowerSchool', 'Salesforce Education Cloud', 'Workday Student'],
    quote: {
      text: 'During enrollment deadlines, our admissions lines were overwhelmed. SpotXpert AI handled 18,000 student queries in 3 weeks, explaining financial aid and application steps with zero wait.',
      author: 'Dr. Linda Vasquez',
      role: 'Dean of Enrollment Management',
      company: 'Metropolitan State College',
    },
    sampleTitle: 'FAFSA Deadline & Scholarship Verification',
  },
  {
    slug: 'education',
    name: 'Education',
    category: 'EdTech & Learning',
    headline: 'Voice agents that support online learners and boost course completion',
    subheadline: 'Empower student success at scale. Automate student onboarding, tutoring session booking, fee installment reminders, certification verification, and tech support.',
    chips: ['Course Enrollment Guidance', 'Tutor Session Booking', 'Certificate Verification', 'LMS Login Assistance', 'Tuition Installment Reminders'],
    partners: ['Canvas LMS', 'Blackboard', 'Moodle Enterprise', 'Coursera for Campus', 'Stripe Billing', 'Zoom Education'],
    quote: {
      text: 'Online course drop-off dropped by 28% when our voice agent began conducting proactive week-2 check-ins with struggling students.',
      author: 'Nathaniel Cole',
      role: 'Head of Student Experience',
      company: 'Apex Learning Global',
    },
    sampleTitle: 'Coding Bootcamp Onboarding & Tech Setup Help',
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    category: 'Hotels, Dining & Travel',
    headline: 'Voice agents that book reservations and fulfill guest requests 24/7',
    subheadline: 'Deliver 5-star concierge service on every call. Automate room reservations, table bookings, room service orders, spa appointments, and concierge recommendations.',
    chips: ['Room Reservation Booking', 'Restaurant Table Booking', 'In-Room Service Ordering', 'Late Checkout Inquiries', 'Airport Shuttle Dispatch'],
    partners: ['Amadeus Hospitality', 'Oracle OPERA Cloud', 'SevenRooms', 'OpenTable API', 'Sabre SynXis', 'Duetto RMS'],
    quote: {
      text: 'Guest call abandonment plummeted from 32% to 0%. SpotXpert AI handles room service, booking modifications, and late checkouts in 12 languages simultaneously.',
      author: 'Giancarlo Rossi',
      role: 'Managing Director',
      company: 'Belvedere Luxury Resorts Group',
    },
    sampleTitle: 'Suite Booking & Dining Reservation Concierge',
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    category: 'Dealerships & Repair',
    headline: 'Voice agents that book service bays and qualify car buyers on the phone',
    subheadline: 'Maximize service absorption and drive sales. Automate service maintenance booking, recall notices, test drive scheduling, and trade-in value estimates.',
    chips: ['Service Bay Appointment', 'Test Drive Scheduling', 'Trade-In Valuation Intake', 'Recall Notification Follow-Up', 'Parts Department Ordering'],
    partners: ['CDK Global', 'Reynolds and Reynolds', 'Dealertrack DMS', 'DealerSocket CRM', 'Cox Automotive', 'Tekion Cloud'],
    quote: {
      text: 'Our dealerships generate an extra $42,000 a month in service bay revenue because SpotXpert AI voice agents never leave an incoming service call unanswered.',
      author: 'Brad Gallagher',
      role: 'Fixed Operations Director',
      company: 'Prestige Automotive Group (14 Rooftops)',
    },
    sampleTitle: '100,000-Mile Transmission Service Appointment',
  },
  {
    slug: 'ecommerce',
    name: 'Ecommerce operations',
    category: 'Retail & Direct-to-Consumer',
    headline: 'Voice agents that recover abandoned carts and solve order inquiries instantly',
    subheadline: 'Drive higher lifetime value and lower support tickets. Automate order tracking, exchange & return authorizations, cart abandonment recovery, and loyalty balance checks.',
    chips: ['Where Is My Order (WISMO)', 'Abandoned Cart Recovery Call', 'Return & Exchange Authorizations', 'Product Sizing Guidance', 'Subscription Skip or Modify'],
    partners: ['Shopify Plus', 'Salesforce Commerce Cloud', 'Gorgias Helpdesk', 'Zendesk Talk', 'Klaviyo', 'ReCharge Subscriptions'],
    quote: {
      text: 'Our cart recovery voice agent converts 22% of high-ticket cart abandoners within 15 minutes of abandonment by answering shipping and discount questions on the phone.',
      author: 'Siddharth Roy',
      role: 'VP of Growth & E-commerce',
      company: 'Aura Lifestyle Brands',
    },
    sampleTitle: 'VIP Abandoned Cart Nudge with Complimentary Express Shipping',
  },
  
  {
    slug: 'finance',
    name: 'Financial services',
    category: 'BFSI & Fintech',
    headline: 'Voice agents for secure banking, instant payments, and loan origination',
    subheadline: 'Bespoke BFSI voice solutions engineered for sub-200ms transaction speed, e-KYC compliance, automated collections, and zero-trust banking security.',
    chips: ['Core Banking Account Inquiries', 'Credit Card Fraud Verification', 'Instant Loan Pre-Qualification', 'Payment Gateway Status', 'Wealth Advisory Booking'],
    partners: ['Plaid Financial', 'Fiserv Core', 'FIS Global', 'Stripe Core', 'Jack Henry', 'AWS Financial Services'],
    quote: {
      text: 'SpotXpert AI voice agents lowered our fraud verification resolution time from 8 minutes to 45 seconds, all while maintaining strict PCI-DSS and SOC-2 compliance.',
      author: 'Arjun Mehta',
      role: 'Chief Technology Officer',
      company: 'Zenith Digital Bank',
    },
    sampleTitle: 'Suspicious Foreign Transaction Security Verification',
  },
];

// Populate the remaining industries
ADDITIONAL_INDUSTRIES.forEach((ind) => {
  if (!INDUSTRIES_MAP[ind.slug]) {
    INDUSTRIES_MAP[ind.slug] = {
      slug: ind.slug,
      name: ind.name,
      category: ind.category,
      bannerAnnouncement: `Introducing ${ind.name} Voice V4: Real-time autonomous AI agents built for high-volume enterprise operations.`,
      heroHeadline: ind.headline,
      heroSubheadline: ind.subheadline,
      quickChips: ind.chips.map((label, i) => ({
        id: `chip-${i}`,
        label,
        iconName: ['Calendar', 'PhoneCall', 'CheckCircle', 'Clock', 'Activity'][i % 5],
      })),
      partnerLogos: ind.partners.map((name, i) => ({
        name,
        tag: ['Enterprise Core', 'Cloud Platform' , 'Certified Partner'][i % 4],
      })),
      quote: ind.quote,
      demoAgents: [
        {
          id: `${ind.slug}-agent-1`,
          name: ind.sampleTitle,
          role: 'Primary AI Concierge',
          tag: 'High Priority',
          scenario: `Handling ${ind.name} customer request with live verification`,
          transcript: [
            { speaker: 'agent', text: `Hello, thanks for calling! I am an AI voice specialist for ${ind.name}. How can I assist you today?`, time: '0:02' },
            { speaker: 'user', text: `Hi! I need to urgently confirm our appointment and verify the details before tomorrow morning.`, time: '0:08' },
            { speaker: 'agent', text: `I can certainly help with that right away. I have located your account on file. Your scheduled window is 10:00 AM to 12:00 PM. Would you like me to confirm this?`, time: '0:18' },
            { speaker: 'user', text: `Yes please, that works perfectly. Can you send a confirmation text?`, time: '0:23' },
            { speaker: 'agent', text: `Confirmation SMS has been sent to your mobile phone. Is there anything else I can take care of for you today?`, time: '0:31' },
          ],
        },
        {
          id: `${ind.slug}-agent-2`,
          name: 'Emergency Status & Escalation',
          role: 'Urgent Response Agent',
          tag: 'Priority Routing',
          scenario: 'High urgency inquiry requiring immediate triage and on-call notification',
          transcript: [
            { speaker: 'agent', text: `Priority Dispatch. Are you experiencing an active disruption or urgent issue?`, time: '0:02' },
            { speaker: 'user', text: `Yes, we have an unexpected service stoppage and need a supervisor immediately.`, time: '0:07' },
            { speaker: 'agent', text: `I have logged the critical ticket and triggered an instant SMS alert to our on-call operations lead. They are reviewing your telemetry now.`, time: '0:16' },
          ],
        },
      ],
      buildFast: {
        title: `From idea to live ${ind.name} voice agents in minutes`,
        description: `Describe your operating workflows and CRM systems. SpotXpert AI handles scheduling, customer questions, and tool integrations automatically.`,
        samplePrompt: `Create an autonomous 24/7 assistant for ${ind.name}. Triage inbound calls, verify customer accounts, resolve FAQs, and route escalations to on-call managers.`,
        tags: ind.chips.slice(0, 4),
      },
      workflows: {
        title: `Build the path every ${ind.name} call should take`,
        description: `Shape branching call flows that verify eligibility, query enterprise databases, and execute immediate actions.`,
        entryNode: `Caller connects to ${ind.name} voice line`,
        branches: [
          { condition: 'Confirmed Standard Request', action: 'Process booking/order in enterprise ERP & send confirmation', badgeColor: '#33A685' },
          { condition: 'Needs Custom Reschedule / Change', action: 'Offer available time windows & update central schedule', badgeColor: '#F2E6A7' },
          { condition: 'Complex Case or Escalation', action: 'Perform warm transfer with full call context to senior agent', badgeColor: '#ff5e57' },
        ],
      },
      goals: {
        title: 'One goal. Every call converted.',
        description: `Whether booking an appointment, closing an order, or resolving a technical inquiry, every call drives toward business outcomes.`,
        sharedGoal: `Help the customer complete the next step in their ${ind.name} journey without hold times`,
        steps: [
          { num: '1', title: 'Identify Intent', desc: 'Accurately determine the caller objective in seconds' },
          { num: '2', title: 'Verify Data', desc: 'Authenticate credentials and query central system records' },
          { num: '3', title: 'Execute Outcome', desc: 'Commit updates, dispatch confirmations, and close call' },
        ],
      },
      naturalFlow: {
        title: `Made for conversations that don't follow a script`,
        description: `Respond to interruptions, background sounds, accents, and unexpected questions with human-like cadence and conversational grace.`,
        agentInstructions: `You are an expert voice concierge for ${ind.name}. Speak warmly with a crisp 280ms cadence. Answer questions concisely, confirm all inputs before saving, and prioritize customer convenience.`,
      },
      liveActions: {
        title: `Agents with all the right context`,
        description: `Connect directly to your CRM, ERP, and scheduling software to fetch caller history and update records in real time.`,
        systemName: `${ind.name} Enterprise API Gateway`,
        webhookEndpoint: `POST https://api.spotxpert.ai/v1/${ind.slug}/action`,
        samplePayload: `{\n  "industry": "${ind.slug}",\n  "caller_id": "+15550192831",\n  "intent": "${ind.chips[0]}",\n  "status": "Confirmed & Synced"\n}`,
      },
      callInsights: {
        title: 'Turn every conversation into intelligence',
        description: 'Detailed call analytics, sentiment tracking, automated transcriptions, and quality evaluations on every call.',
        metrics: [
          { label: 'Answer Rate', value: '100%', subtext: 'Zero missed calls' },
          { label: 'Resolution Rate', value: '89%', subtext: 'Resolved on first call' },
          { label: 'Latency (p95)', value: '<320ms', subtext: 'Human-parity speed' },
          { label: 'Cost Reduction', value: '72%', subtext: 'Compared to manual call center' },
        ],
      },
      audioSamples: [
        {
          id: `${ind.slug}-sample-1`,
          category: 'Inbound Customer Service',
          title: ind.sampleTitle,
          description: `Handles scheduling, answers common questions, and confirms booking.`,
          duration: '0:42',
          speaker: 'Sarah (US English)',
          accent: 'Warm & Professional',
          audioSimText: `Thank you for calling! I have verified your account and confirmed your scheduled request. You will receive a summary SMS shortly.`,
        },
        {
          id: `${ind.slug}-sample-2`,
          category: 'Urgent Dispatch',
          title: 'Emergency Service Triage & Notification',
          description: `Collects critical details and alerts the on-call specialist immediately.`,
          duration: '0:36',
          speaker: 'Marcus (US English)',
          accent: 'Calm & Direct',
          audioSimText: `I understand this is urgent. I have logged your request with highest priority and notified our field team. An expert is on their way.`,
        },
      ],
      faqs: [
        { question: `How quickly can we deploy a voice agent for ${ind.name}?`, answer: `Most organizations deploy their first voice agent within 48 to 72 hours using our pre-built domain templates and native CRM webhooks.` },
        { question: `How does the voice agent handle difficult or frustrated callers?`, answer: `The agent detects negative sentiment, tone shifts, and repeated requests, de-escalating calmly or executing a warm transfer to human supervisors with full transcript context.` },
        { question: `Can the agent integrate with our existing phone numbers and telephony?`, answer: `Yes. We provide native SIP trunking, Twilio/Vonage integration, and call forwarding from your existing business lines with zero downtime.` },
        { question: `What are the data privacy and recording compliance standards?`, answer: `All voice infrastructure is ISO 27001 and SOC 2 Type II certified. Transcripts and recordings are encrypted end-to-end with customizable data retention policies.` },
      ],
    };
  }
});

// Slug aliases for flexible route resolution
INDUSTRIES_MAP['financial-services'] = INDUSTRIES_MAP['finance'];
INDUSTRIES_MAP['healthcare-administration'] = INDUSTRIES_MAP['healthcare'];
INDUSTRIES_MAP['manufacturing-operations'] = INDUSTRIES_MAP['manufacturing'];
INDUSTRIES_MAP['schools-colleges'] = INDUSTRIES_MAP['schools-colleges'];
INDUSTRIES_MAP['school-colleges'] = INDUSTRIES_MAP['schools-colleges'];
INDUSTRIES_MAP['school-collages'] = INDUSTRIES_MAP['schools-colleges'];
INDUSTRIES_MAP['ecommerce-operations'] = INDUSTRIES_MAP['ecommerce'];
INDUSTRIES_MAP['property-management'] = INDUSTRIES_MAP['real-estate'];
INDUSTRIES_MAP['bookkeeping'] = INDUSTRIES_MAP['accounting'];
INDUSTRIES_MAP['staffing'] = INDUSTRIES_MAP['recruiting'];

export const ALL_INDUSTRIES_LIST = Object.values(INDUSTRIES_MAP).filter(
  (ind, index, self) => index === self.findIndex((t) => t.slug === ind.slug)
);
