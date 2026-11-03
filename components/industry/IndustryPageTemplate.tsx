'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';

import IndustryTopBanner from '@/components/industry/IndustryTopBanner';
import IndustryHeroScroll from '@/components/industry/IndustryHeroScroll';
import IndustryTrustedSection from '@/components/industry/IndustryTrustedSection';
import IndustryFeatureTabs from '@/components/industry/IndustryFeatureTabs';
import IndustryFaqAccordion from '@/components/industry/IndustryFaqAccordion';
import IndustryCtaSection from '@/components/industry/IndustryCtaSection';
import { IndustryItem } from '@/src/data/industries';

interface IndustryPageTemplateProps {
  data: IndustryItem;
}

export default function IndustryPageTemplate({ data }: IndustryPageTemplateProps) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [selectedChip, setSelectedChip] = useState(data.useCaseChips[0]?.id || '');

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* 2. Top Announcement Pill & Quick Chips Row */}
      <IndustryTopBanner
        announcement={data.announcement}
        useCaseChips={data.useCaseChips}
        selectedChip={selectedChip}
        onSelectChip={(id) => setSelectedChip(id)}
      />

      {/* 3. Scroll-Driven Hero Section with Engagement Steps */}
      <IndustryHeroScroll
        headline={data.hero.headline}
        subheadline={data.hero.subheadline}
        primaryCta={data.hero.primaryCta}
        secondaryCta={data.hero.secondaryCta}
        process={data.process}
        heroImage={data.images.hero}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* 4. Industry Overview, Integrations & Compliance */}
      <IndustryTrustedSection
        overview={data.overview}
        integrations={data.integrations}
        compliance={data.compliance}
        architectureImage={data.images.architecture}
        industryName={data.name}
      />

      {/* 5. Sticky Tabbed Feature Section */}
      <IndustryFeatureTabs
        industry={data}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* 6. Frequently Asked Questions */}
      <IndustryFaqAccordion
        faqs={data.faqs}
        industryName={data.name}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* 7. Final Call to Action Banner */}
      <IndustryCtaSection
        finalCta={data.finalCta}
        compliance={data.compliance}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* 8. Global Enterprise Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
 
    </main>
  );
}
