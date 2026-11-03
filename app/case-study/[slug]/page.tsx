import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  getAllCaseStudies,
  getCaseStudyBySlug,
  CaseStudyItem,
} from '@/src/data/case-studies-data';
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Users,
  Globe,
  CheckCircle2,
  Phone,
  Send,
  Building2,
  Laptop,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  ChevronLeft,
} from 'lucide-react';
import CaseStudyContactForm from './CaseStudyContactForm';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: 'Case Study Not Found | SpotXpert AI',
      description: 'The requested enterprise case study could not be found.',
    };
  }

  return {
    title: `${study.title} | SpotXpert AI Case Studies`,
    description: study.heroSubheadline,
    openGraph: {
      title: `${study.title} | SpotXpert AI`,
      description: study.heroSubheadline,
      type: 'article',
      images: [study.image],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  // Find related case studies
  const allStudies = getAllCaseStudies();
  const relatedStudies = study.relatedSlugs
    .map((s) => getCaseStudyBySlug(s))
    .filter((s): s is CaseStudyItem => Boolean(s));

  // Fallback related studies if none matched
  const finalRelatedStudies =
    relatedStudies.length > 0
      ? relatedStudies
      : allStudies.filter((s) => s.slug !== study.slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* Global Navigation Bar */}
      <Navbar />

      {/* 1. Hero Section matching structure with SpotXpert Brand Palette */}
      <section className="pt-32 sm:pt-40 pb-0 bg-[#0E4032] text-white relative overflow-hidden">
        {/* Subtle radial emerald glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#175b47]/50 via-[#0E4032] to-[#082820] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#B4D9C4] mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#33A685]" />
            <Link href="/case-study" className="hover:text-white transition-colors">
              Case Studies
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#33A685]" />
            <span className="text-[#F2E6A7] font-semibold truncate max-w-xs sm:max-w-md">
              {study.clientOverview.clientName}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-14">
            {/* Left Column: Heading and pitch */}
            <div className="lg:col-span-7">
              {/* Tag Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#082820]/90 border border-[#33A685]/60 text-xs font-semibold text-[#F2E6A7] mb-5 shadow-xs">
                {study.heroBadge}
              </div>

              {/* Huge Bold Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.15] mb-6">
                {study.title}
              </h1>

              {/* Subheadline description */}
              <p className="text-base sm:text-lg text-[#B4D9C4] leading-relaxed font-normal max-w-2xl">
                {study.heroSubheadline}
              </p>
            </div>

            {/* Right Column: Hero photograph matching structure */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#33A685]/30 ring-1 ring-[#33A685]/20">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3-Metric Band matching structure with SpotXpert colors */}
        <div className="bg-[#082820] border-t border-[#33A685]/30 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#33A685]/30">
              {study.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-8' : ''}`}
                >
                  <div className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#F2E6A7] font-sans tracking-tight mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[#B4D9C4] font-normal leading-snug">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Client Overview Section */}
      <section className="py-16 sm:py-24 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Metadata list & narrative */}
            <div className="lg:col-span-6">
              <h2 className="text-3xl font-extrabold text-[#0E4032] mb-6">
                Client Overview
              </h2>

              <div className="space-y-3 mb-6 text-sm text-[#0E4032]">
                <div className="flex items-start">
                  <span className="font-bold text-[#0E4032] w-32 flex-shrink-0">Client:</span>
                  <span className="text-[#0E4032]/80 font-medium">{study.clientOverview.clientName}</span>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-[#0E4032] w-32 flex-shrink-0">Industry:</span>
                  <span className="text-[#0E4032]/80 font-medium">{study.clientOverview.industry}</span>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-[#0E4032] w-32 flex-shrink-0">Company size:</span>
                  <span className="text-[#0E4032]/80 font-medium">{study.clientOverview.companySize}</span>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-[#0E4032] w-32 flex-shrink-0">Product:</span>
                  <span className="text-[#0E4032]/80 font-medium">{study.clientOverview.product}</span>
                </div>
                <div className="flex items-start">
                  <span className="font-bold text-[#0E4032] w-32 flex-shrink-0">Location:</span>
                  <span className="text-[#0E4032]/80 font-medium">{study.clientOverview.location}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#0E4032]/85 leading-relaxed font-normal">
                {study.clientOverview.description}
              </p>
            </div>

            {/* Right: Dashboard Mockup Image */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-white shadow-xl border border-[#B4D9C4]">
                <Image
                  src={study.clientOverview.dashboardImage}
                  alt={`${study.clientOverview.clientName} product overview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Challenges Section */}
      <section className="py-16 sm:py-24 bg-[#0E4032] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Challenges
          </h2>

          <p className="text-sm sm:text-base text-[#B4D9C4] max-w-4xl leading-relaxed mb-12 font-normal">
            {study.challenges.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {study.challenges.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-[#082820] border border-[#33A685]/40 hover:border-[#33A685] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl transition-all"
              >
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B4D9C4] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Solution Section */}
      <section className="py-16 sm:py-24 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E4032] mb-4">
            Solution
          </h2>

          <p className="text-sm sm:text-base text-[#0E4032]/80 max-w-4xl leading-relaxed mb-12 font-normal">
            {study.solution.intro}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {study.solution.cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#B4D9C4] hover:border-[#33A685] hover:shadow-lg rounded-2xl p-6 shadow-xs flex flex-col justify-between transition-all"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0E4032] mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#0E4032]/80 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Business Impact Section */}
      <section className="py-16 sm:py-24 bg-[#0E4032] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Business Impact
          </h2>

          <p className="text-sm sm:text-base text-[#B4D9C4] max-w-4xl leading-relaxed mb-12 font-normal">
            {study.businessImpact.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {study.businessImpact.cards.map((card, idx) => {
              const Icon =
                card.icon === 'clock'
                  ? Clock
                  : card.icon === 'users'
                  ? Users
                  : Globe;

              return (
                <div
                  key={idx}
                  className="bg-[#082820] border border-[#33A685]/40 hover:border-[#33A685] rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#33A685]/20 border border-[#33A685]/50 flex items-center justify-center text-[#F2E6A7] mb-4">
                      <Icon className="w-5 h-5 text-[#F2E6A7]" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B4D9C4] leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Trusted by the World's Leading Companies */}
      <section className="py-16 sm:py-24 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E4032] text-center mb-10">
            Trusted by the World&apos;s Leading Companies
          </h2>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-12">
            {[
              { name: 'Bank of America', label: 'BANK OF AMERICA' },
              { name: 'American Airlines', label: 'American' },
              { name: 'Mitsubishi Electric', label: 'MITSUBISHI ELECTRIC' },
              { name: 'Renesas', label: 'RENESAS' },
              { name: 'Fujifilm', label: 'FUJIFILM' },
              { name: 'Hyundai Glovis', label: 'HYUNDAI GLOVIS' },
            ].map((company) => (
              <div
                key={company.name}
                className="bg-white border border-[#B4D9C4] rounded-xl h-16 flex items-center justify-center p-3 text-center shadow-2xs hover:border-[#33A685] transition-colors"
              >
                <span className="font-bold text-xs tracking-wider text-[#0E4032] uppercase">
                  {company.label}
                </span>
              </div>
            ))}
          </div>

          {/* Testimonial Cards Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {study.testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#B4D9C4] rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-[#0E4032]/90 leading-relaxed italic mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-[#B4D9C4]/50">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#E8F5F0] border border-[#33A685]/30 flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      sizes="40px"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0E4032]">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-[#33A685] font-semibold">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Related Case Studies */}
      <section className="py-16 sm:py-24 bg-[#082820] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Related Case Studies
            </h2>
            <Link
              href="/case-study"
              className="text-xs sm:text-sm font-semibold text-[#B4D9C4] hover:text-[#F2E6A7] inline-flex items-center gap-1 transition-colors"
            >
              <span>View All Studies</span>
              <ArrowRight className="w-4 h-4 text-[#33A685]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {finalRelatedStudies.map((relStudy) => (
              <article
                key={relStudy.id}
                className="bg-white text-[#0E4032] border border-[#B4D9C4] hover:border-[#33A685] rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <Link
                    href={`/case-study/${relStudy.slug}`}
                    className="block relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-[#E8F5F0] shadow-sm group-hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={relStudy.image}
                      alt={relStudy.title}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      referrerPolicy="no-referrer"
                    />
                  </Link>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {relStudy.categoryTags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#E8F5F0] border border-[#B4D9C4] text-[#0E4032] text-[11px] font-semibold px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0E4032] group-hover:text-[#33A685] transition-colors mb-3 leading-snug">
                    <Link href={`/case-study/${relStudy.slug}`}>
                      {relStudy.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#0E4032]/80 leading-relaxed mb-6 font-normal">
                    {relStudy.excerpt}
                  </p>
                </div>

                <div className="pt-2 flex items-center">
                  <Link
                    href={`/case-study/${relStudy.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#33A685] group-hover:text-[#0E4032] transition-colors"
                  >
                    <span>Read More</span>
                    <span className="w-6 h-6 rounded-full bg-[#E8F5F0] group-hover:bg-[#33A685] group-hover:text-white transition-colors flex items-center justify-center text-xs shadow-2xs">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. "Let's talk" Consultation Lead Section */}
      <section className="py-16 sm:py-24 bg-[#F2F2F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudyContactForm contactLead={study.contactLead} />
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
