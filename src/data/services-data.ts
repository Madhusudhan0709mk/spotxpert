export interface ServiceOperatingTab {
  id: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
}

export interface ServiceFeatureCard {
  title: string;
  description: string;
}

export interface ServiceCaseStudy {
  tags: string[];
  title: string;
  paragraphs: string[];
  highlight: string;
  image: string;
  readMoreLink?: string;
}

export interface ServiceExpertArticle {
  type: 'article' | 'ebook';
  category: string;
  title: string;
  excerpt: string;
  author?: string;
  date?: string;
  downloadLabel?: string;
  coverImage?: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  aliases: string[];
  name: string;
  categoryTag: string;
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta?: string;
  };
  operatingModel: {
    headline: string;
    subheadline: string;
    tabs: ServiceOperatingTab[];
  };
  featuresSection: {
    headline: string;
    subheadline: string;
    cards: ServiceFeatureCard[];
  };
  partnerBadges: {
    headline: string;
    subheadline: string;
    badges: {
      partnerName: string;
      tier: string;
      specialization: string;
      competencies: string[];
    }[];
  };
  testimonials: {
    clientQuote: string;
    clientName: string;
    clientRole: string;
    clientCompany: string;
    avatar: string;
  }[];
  caseStudies: ServiceCaseStudy[];
  expertInsights: ServiceExpertArticle[];
  faqs: ServiceFAQ[];
  expertContact: {
    name: string;
    role: string;
    bio: string;
    avatar: string;
    phone: string;
  };
}

import { buildAllServices } from './services-catalog';

export const SERVICES_DATA: ServiceItem[] = buildAllServices();

// Map of aliases for backwards compatibility with legacy routes
const LEGACY_ALIASES: Record<string, string> = {
  'enterprise-ai-adoption-change-management': 'ai-operating-model-adoption',
  'enterprise-ai-adoption': 'ai-operating-model-adoption',
  'change-management': 'ai-operating-model-adoption',
  'cloud-devops-architecture': 'cloud-devops-engineering',
  'digital-product-engineering': 'ai-native-product-engineering',
  'legacy-modernization': 'legacy-system-modernization',
};

// Helper to look up service by slug or alias
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();

  // Check direct slug match
  const direct = SERVICES_DATA.find(s => s.slug === normalized);
  if (direct) return direct;

  // Check alias list inside each service
  const byAlias = SERVICES_DATA.find(s => s.aliases && s.aliases.includes(normalized));
  if (byAlias) return byAlias;

  // Check legacy aliases map
  const targetSlug = LEGACY_ALIASES[normalized];
  if (targetSlug) {
    return SERVICES_DATA.find(s => s.slug === targetSlug);
  }

  return undefined;
}

// Get all service items
export function getAllServices(): ServiceItem[] {
  return SERVICES_DATA;
}
