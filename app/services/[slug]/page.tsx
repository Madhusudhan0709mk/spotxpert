import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServices } from '@/src/data/services-data';
import ServicePageTemplate from '@/components/service/ServicePageTemplate';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Sparkles, ArrowRight, Layers } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | SpotXpert AI',
      description: 'The requested enterprise engineering service could not be found.',
    };
  }

  return {
    title: `${service.name} | SpotXpert AI Engineering`,
    description: service.hero.subheadline,
    openGraph: {
      title: `${service.name} | SpotXpert AI`,
      description: service.hero.subheadline,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  const services = getAllServices();
  const paths: { slug: string }[] = [];

  const legacyList = [
    'enterprise-ai-adoption-change-management',
    'enterprise-ai-adoption',
    'change-management',
    'cloud-devops-architecture',
    'digital-product-engineering',
    'legacy-modernization',
  ];

  services.forEach(s => {
    paths.push({ slug: s.slug });
    s.aliases.forEach(alias => {
      paths.push({ slug: alias });
    });
  });

  legacyList.forEach(slug => {
    paths.push({ slug });
  });

  return paths;
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    const allServices = getAllServices();
    return (
      <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032]">
        <Navbar onOpenConsultation={() => {}} />
        <section className="pt-36 pb-24 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#B4D9C4] text-xs font-semibold text-[#0E4032] mb-4">
            <Sparkles className="w-4 h-4 text-[#33A685]" />
            <span>Service Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0E4032] mb-4">
            Service Not Found
          </h1>
          <p className="text-sm sm:text-base text-[#0E4032]/80 mb-10 max-w-lg mx-auto">
            The service slug &ldquo;{slug}&rdquo; does not match an active route. Please select one of our enterprise engineering practices below:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {allServices.map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="p-5 rounded-2xl bg-white border border-[#B4D9C4] hover:border-[#33A685] hover:shadow-md transition-all group"
              >
                <div className="text-xs font-semibold text-[#33A685] uppercase tracking-wider mb-1">
                  {s.categoryTag}
                </div>
                <h3 className="font-bold text-base text-[#0E4032] group-hover:text-[#33A685] transition-colors flex items-center justify-between">
                  <span>{s.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#33A685] group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-xs text-[#0E4032]/70 mt-1 line-clamp-2">
                  {s.hero.subheadline}
                </p>
              </Link>
            ))}
          </div>
        </section>
        <Footer onOpenConsultation={() => {}} />
      </main>
    );
  }

  return <ServicePageTemplate service={service} />;
}
