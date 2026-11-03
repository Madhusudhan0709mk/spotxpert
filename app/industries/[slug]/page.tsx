import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getIndustryBySlug, getAllIndustries, ALL_INDUSTRIES_MAP } from '@/src/data/industries';
import IndustryPageTemplate from '@/components/industry/IndustryPageTemplate';
import { ArrowRight, Sparkles, Building2, HelpCircle } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const allSlugs = Object.keys(ALL_INDUSTRIES_MAP);
  return allSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getIndustryBySlug(slug);

  if (!data) {
    return {
      title: 'Industry Solutions | SpotXpert AI',
      description: 'Enterprise AI engineering, custom software, and digital product modernization.',
    };
  }

  return {
    title: `${data.name} Solutions & Engineering | SpotXpert AI`,
    description: data.hero.subheadline,
    openGraph: {
      title: `${data.name} Solutions & Engineering | SpotXpert AI`,
      description: data.hero.subheadline,
      images: [
        {
          url: data.images.hero.url,
          alt: data.images.hero.alt,
        },
      ],
    },
  };
}

export default async function IndustryPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const data = getIndustryBySlug(slug);

  // If unknown slug: show graceful "Not Found" state with direct links to all 17 industries
  if (!data) {
    const allIndustries = getAllIndustries();
    return (
      <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] flex flex-col justify-between">
        <Navbar onOpenConsultation={() => {}} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="w-16 h-16 rounded-full bg-[#B4D9C4]/40 border border-[#33A685]/50 flex items-center justify-center text-[#33A685] mx-auto mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>

          <h1 className="hero-heading text-3xl sm:text-5xl font-bold text-[#0E4032] mb-4">
            Industry Page Not Found
          </h1>

          <p className="body-text text-[#0E4032]/80 max-w-xl mx-auto mb-10 text-base">
            The requested sector route <code className="bg-white px-2 py-0.5 rounded border border-[#B4D9C4] font-mono text-xs">{slug}</code> could not be found. Explore our 17 dedicated enterprise industry solutions below:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-left max-w-4xl mx-auto">
            {allIndustries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="p-4 rounded-xl bg-white border border-[#B4D9C4] hover:border-[#33A685] transition-all flex items-center justify-between group shadow-xs"
              >
                <div>
                  <div className="text-xs font-bold text-[#0E4032] group-hover:text-[#33A685] transition-colors">
                    {ind.name}
                  </div>
                  <div className="text-[11px] text-[#0E4032]/70 mt-0.5">
                    {ind.category}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#33A685] transform group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 bg-[#0E4032] text-white px-6 py-3 rounded-full text-xs font-semibold hover:bg-[#155442] transition-colors shadow-sm"
            >
              <span>View complete industry directory</span>
              <ArrowRight className="w-4 h-4 text-[#33A685]" />
            </Link>
          </div>
        </div>

        <Footer onOpenConsultation={() => {}} />
      </main>
    );
  }

  return <IndustryPageTemplate data={data} />;
}
