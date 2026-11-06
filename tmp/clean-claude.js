const fs = require('fs');
const path = '/app/applet/src/data/case-studies-data.ts';

let content = fs.readFileSync(path, 'utf8');

const replacements = [
  // IDs & Slugs & Related Slugs
  ['3d-toy-manufacturer-scales-revenue-operations-saving-160-hours-a-month-with-claude', '3d-toy-manufacturer-scales-revenue-operations-saving-160-hours-a-month'],
  ['real-estate-marketing-platform-turns-listing-data-into-case-studies-in-seconds-with-claude', 'real-estate-marketing-platform-turns-listing-data-into-case-studies-in-seconds'],
  ['global-inspection-company-automates-order-processing-for-9-business-lines-with-claude', 'global-inspection-company-automates-order-processing-for-9-business-lines'],
  ['sports-technology-company-accelerates-multi-tenant-saas-development-with-claude', 'sports-technology-company-accelerates-multi-tenant-saas-development'],
  ['student-credit-platform-cuts-manual-transcript-entry-by-99-percent-with-claude', 'student-credit-platform-cuts-manual-transcript-entry-by-99-percent'],
  ['healthcare-ai-platform-streamlines-clinical-documentation-with-claude', 'healthcare-ai-platform-streamlines-clinical-documentation'],
  ['autonomous-supply-chain-network-cuts-freight-costs-22-percent-with-claude', 'autonomous-supply-chain-network-cuts-freight-costs-22-percent'],

  // Titles
  ['3D Toy Manufacturer Scales Revenue Operations, Saving 160 Hours a Month with Claude', '3D Toy Manufacturer Scales Revenue Operations, Saving 160 Hours a Month'],
  ['Real estate marketing platform turns listing data into case studies in seconds with Claude', 'Real estate marketing platform turns listing data into case studies in seconds'],
  ['Global Inspection Company Automates Order Processing for 9 Business Lines with Claude', 'Global Inspection Company Automates Order Processing for 9 Business Lines'],
  ['Sports technology company accelerates multi-tenant SaaS development with Claude', 'Sports technology company accelerates multi-tenant SaaS development'],
  ['Student Credit Platform Cuts Manual Transcript Entry by 99% with Claude', 'Student Credit Platform Cuts Manual Transcript Entry by 99%'],
  ['Healthcare AI Platform Streamlines Clinical Documentation with Claude', 'Healthcare AI Platform Streamlines Clinical Documentation'],
  ['Autonomous Supply Chain Network Cuts Freight Costs 22% with Claude', 'Autonomous Supply Chain Network Cuts Freight Costs 22%'],

  // Case Study 1 specifics (Toy manufacturer)
  ["Built a revenue operations app for a 3D toy manufacturer on Claude, qualifying inbound leads, routing them automatically, and generating delivery invoices while saving 160 hours monthly.", "Built an automated revenue operations platform for a 3D toy manufacturer, qualifying inbound leads, routing them automatically, and generating delivery invoices while saving 160 hours monthly."],
  ["categoryTags: ['Manufacturing', 'Revenue Operations', 'Claude AI']", "categoryTags: ['Manufacturing', 'Revenue Operations', 'Agentic AI']"],
  ["We built a multi-revenue operations app on Claude, integrated server-side through Anthropic's Python SDK.", "We built an enterprise multi-revenue operations platform, integrated server-side through high-performance Python services."],
  ["Prospects from the website are captured and read by Claude, which scores each lead on fit and intent and summarizes what they want.", "Prospects from the website are captured and analyzed by intelligent agents, which score each lead on fit and intent and summarize what they want."],
  ["Claude's output is not sent blindly.", "AI generated output is not sent blindly."],

  // Case Study 2 specifics (Real estate)
  ["product: 'Claude Sonnet 4.6'", "product: 'Multimodal Foundation Models & Vision AI'"],
  ["Simform built KeyStory's AI capabilities on Claude Sonnet 4.6 and integrated it server-side through Anthropic's Python SDK.", "Simform built KeyStory's AI capabilities on multimodal foundation models and integrated them server-side through resilient microservices."],
  ["Because Claude reads the listing's actual photos alongside its facts, the writing describes the specific home that sold.", "Because the multimodal models analyze the listing's actual photos alongside its facts, the writing describes the specific home that sold."],
  ["Claude receives these facts, plus up to six property photos, in one call and writes each section in the agent's first-person voice.", "The multimodal engine receives these facts, plus up to six property photos, in one call and writes each section in the agent's first-person voice."],
  ["Claude uses it to generate the caption, hashtags, and slide plan for Facebook, Instagram, and LinkedIn in one call, and agents can regenerate a single caption or slide on its own. In a separate vision call at zero temperature, Claude scores each listing photo, labels what it shows, and marks where overlay text can sit, producing the same ranking on every run.", "The AI engine uses it to generate the caption, hashtags, and slide plan for Facebook, Instagram, and LinkedIn in one call, and agents can regenerate a single caption or slide on its own. In a separate vision step at zero temperature, the multimodal model scores each listing photo, labels what it shows, and marks where overlay text can sit, producing the same ranking on every run."],
  ["With the Claude-powered capabilities live across more than 100 tenant organizations", "With AI-powered capabilities live across more than 100 tenant organizations"],

  // Case Study 3 specifics (Global inspection)
  ["Engineered an enterprise multimodal extraction and validation engine powered by Claude Sonnet, transforming unstructured client certification requests into validated ERP work orders in seconds.", "Engineered an enterprise multimodal extraction and validation engine, transforming unstructured client certification requests into validated ERP work orders in seconds."],
  ["product: 'Claude 3.5 Sonnet & SAP ERP'", "product: 'Multimodal Document AI & SAP ERP'"],
  ["Simform designed a high-throughput document intelligence gateway with Claude Sonnet that automatically parses technical certificates, cross-validates testing methods with ISO libraries, and writes formatted actions directly into SAP ERP.", "Simform designed a high-throughput document intelligence gateway with multimodal AI that automatically parses technical certificates, cross-validates testing methods with ISO libraries, and writes formatted actions directly into SAP ERP."],
  ["Claude processes complex tables, technical schematics, and chemical formulations in parallel, extracting over 70 parameters per document with strict schema constraints.", "Multimodal Document AI processes complex tables, technical schematics, and chemical formulations in parallel, extracting over 70 parameters per document with strict schema constraints."],

  // Case Study 4 specifics (Sports tech)
  ["We helped a sports technology company build a multi-tenant sports camp management platform with Claude embedded across the SDLC, accelerating feature delivery, reducing regression effort, and improving engineering productivity.", "We helped a sports technology company build a multi-tenant sports camp management platform with AI embedded across the SDLC, accelerating feature delivery, reducing regression effort, and improving engineering productivity."],
  ["Architected a next-generation multi-tenant sports camp and athlete analytics platform, integrating Claude to generate personalized drill sequences and automate tournament scheduling.", "Architected a next-generation multi-tenant sports camp and athlete analytics platform, integrating AI constraint engines to generate personalized drill sequences and automate tournament scheduling."],
  ["product: 'Next.js, Python, Claude 3.5 Sonnet'", "product: 'Next.js, Python, Intelligent AI Solvers'"],
  ["Simform engineered a modular micro-frontend SaaS platform on AWS with Claude-powered intelligent constraint solvers that generate conflict-free brackets in seconds and craft personalized training drills.", "Simform engineered a modular micro-frontend SaaS platform on AWS with intelligent constraint solvers that generate conflict-free brackets in seconds and craft personalized training drills."],
  ["Claude ingests team rankings, field lights schedules, and referee travel constraints to generate optimized tournament brackets with zero collisions.", "The constraint engine ingests team rankings, field lights schedules, and referee travel constraints to generate optimized tournament brackets with zero collisions."],

  // Case Study 5 specifics (Student credit)
  ["Rebuilt an academic credit evaluation pipeline with Claude 3.5 Sonnet, automating the ingestion of complex high school and university transcripts with near-100% precision.", "Rebuilt an academic credit evaluation pipeline with multimodal Document AI, automating the ingestion of complex high school and university transcripts with near-100% precision."],
  ["product: 'Claude 3.5 Sonnet, AWS Lambda, DynamoDB'", "product: 'Multimodal Document AI, AWS Lambda, DynamoDB'"],
  ["Simform designed a zero-shot multimodal transcript reasoning pipeline using Claude Sonnet that understands tabular course data, converts credit units, and calculates standardized GPA benchmarks automatically.", "Simform designed a zero-shot multimodal transcript reasoning pipeline using Document AI that understands tabular course data, converts credit units, and calculates standardized GPA benchmarks automatically."],
  ["Claude reads scanned PDFs, photo uploads, and electronic transcripts regardless of watermarks, skewed scans, or unusual table structures.", "Multimodal vision models read scanned PDFs, photo uploads, and electronic transcripts regardless of watermarks, skewed scans, or unusual table structures."],

  // Case Study 6 specifics (Healthcare)
  ["We helped a premier digital health network build an ambient clinical intelligence engine with Claude, reducing physician charting overhead by 82% across 350+ medical clinics.", "We helped a premier digital health network build an ambient clinical intelligence engine, reducing physician charting overhead by 82% across 350+ medical clinics."],
  ["SpotXpert engineered a real-time speech processing and agentic structuring pipeline powered by Claude 3.5 Sonnet and secure private cloud enclaves.", "SpotXpert engineered a real-time speech processing and agentic structuring pipeline powered by enterprise clinical foundation models and secure private cloud enclaves."],
  ["title: 'Claude Clinical Reasoning Agent'", "title: 'Clinical Reasoning Agent'"],
  ["The accuracy of Claude capturing my patient conversations is simply astonishing.", "The accuracy of the ambient AI capturing my patient conversations is simply astonishing."],

  // Case Study 7 specifics (Autonomous supply chain)
  ["We helped a North American freight logistics platform build an agentic route dispatch and rate negotiation assistant with Claude, optimizing 4.5M shipments daily.", "We helped a North American freight logistics platform build an agentic route dispatch and rate negotiation assistant, optimizing 4.5M shipments daily."],
  ["SpotXpert developed a multi-agent dispatch system powered by Claude that acts as an always-on procurement co-pilot for logistics coordinators.", "SpotXpert developed a multi-agent dispatch system that acts as an always-on procurement co-pilot for logistics coordinators."],
  ["Deployed Claude-powered conversational agents that communicate with carriers over email and portal chat to negotiate competitive rates within predetermined budget bands.", "Deployed autonomous conversational agents that communicate with carriers over email and portal chat to negotiate competitive rates within predetermined budget bands."]
];

let notFound = 0;
for (const [from, to] of replacements) {
  if (!content.includes(from)) {
    console.error('NOT FOUND:', from.slice(0, 50));
    notFound++;
  } else {
    content = content.split(from).join(to);
  }
}

console.log('Replacements completed. Not found count:', notFound);

const remaining = [...content.matchAll(/.{0,40}claude.{0,40}/gi)];
console.log('Remaining claude occurrences:', remaining.length);
remaining.forEach(r => console.log('Remaining:', r[0]));

if (remaining.length === 0) {
  fs.writeFileSync(path, content, 'utf8');
  console.log('Successfully updated src/data/case-studies-data.ts without any claude references!');
} else {
  console.log('Please resolve remaining before writing to disk.');
}
