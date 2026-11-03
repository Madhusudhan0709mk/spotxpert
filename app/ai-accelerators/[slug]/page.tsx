import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ACCELERATORS_DATA, getAcceleratorBySlug, getAllAccelerators } from '@/src/data/accelerators-data';
import AcceleratorDetailClient from './AcceleratorDetailClient';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, HelpCircle } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const allSlugs = Object.keys(ACCELERATORS_DATA);
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getAcceleratorBySlug(slug);

  if (!item) {
    return {
      title: 'AI Accelerators | SpotXpert AI',
      description: 'Production-grade AI engineering frameworks and toolkits.',
    };
  }

  return {
    title: `${item.name} | SpotXpert AI Frameworks`,
    description: item.hero.subheadline,
    openGraph: {
      title: `${item.name} | SpotXpert AI`,
      description: item.hero.subheadline,
      images: [{ url: item.heroImage.url, alt: item.heroImage.alt }],
    },
  };
}

export default async function AcceleratorSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getAcceleratorBySlug(slug);

  if (!item) {
    const all = getAllAccelerators();
    return (
      <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] flex flex-col justify-between">
        <Navbar onOpenConsultation={() => {}} />
        <div className="max-w-4xl mx-auto px-4 py-32 text-center">
          <div className="w-16 h-16 rounded-full bg-[#B4D9C4]/40 border border-[#33A685]/50 flex items-center justify-center text-[#33A685] mx-auto mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h1 className="hero-heading text-3xl font-bold mb-4">Accelerator Not Found</h1>
          <p className="body-text text-[#0E4032]/80 mb-8 text-base">
            The requested AI accelerator framework <code className="bg-white px-2 py-0.5 rounded border border-[#B4D9C4] font-mono text-xs">{slug}</code> is not found. Explore our available AI accelerators:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {all.map(a => (
              <Link
                key={a.slug}
                href={`/ai-accelerators/${a.slug}`}
                className="p-4 rounded-xl bg-white border border-[#B4D9C4] hover:border-[#33A685] transition-all flex items-center justify-between group"
              >
                <div>
                  <div className="text-xs font-bold text-[#0E4032] group-hover:text-[#33A685]">{a.name}</div>
                  <div className="text-[11px] text-[#0E4032]/70 mt-0.5">{a.category}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#33A685]" />
              </Link>
            ))}
          </div>
        </div>
        <Footer onOpenConsultation={() => {}} />
      </main>
    );
  }

  return <AcceleratorDetailClient item={item} />;
}
