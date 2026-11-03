export interface ServiceBusinessChallenge {
  title: string;
  description: string;
}

export interface ServiceCapability {
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceUseCase {
  title: string;
  description: string;
  outcome: string;
}

export interface ServiceDeliveryStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  metric?: string;
  description: string;
}

export interface ServiceRelatedLink {
  title: string;
  slug: string;
  category: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  title: string;
  slug: string;
  category: string;
  categoryId: 'ai-data' | 'digital-product' | 'cloud-devops' | 'ai-strategy' | 'integration-automation' | 'managed-services';
  iconName: string;
  shortDescription: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroDescription: string;
  primaryCTA: string;
  secondaryCTA: string;
  businessChallenges: ServiceBusinessChallenge[];
  capabilities: ServiceCapability[];
  useCases: ServiceUseCase[];
  deliveryApproach: ServiceDeliveryStep[];
  relevantIndustries: string[];
  technologyAreas: string[];
  benefits: ServiceBenefit[];
  relatedServices: ServiceRelatedLink[];
  faqs: ServiceFAQ[];
  seoTitle: string;
  seoDescription: string;
  aliases?: string[];
}

export interface ServiceCategoryMeta {
  id: 'ai-data' | 'digital-product' | 'cloud-devops' | 'ai-strategy' | 'integration-automation' | 'managed-services';
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  featuredTitle: string;
  featuredDesc: string;
  featuredTag: string;
  featuredSlug: string;
}
