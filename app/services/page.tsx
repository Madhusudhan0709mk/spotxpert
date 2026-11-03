'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { getAllServices } from '@/src/data/services-data';
import { SERVICE_CATEGORIES } from '@/src/data/services-categories';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Database,
  Cloud,
  Code2,
  Layers,
  ChevronRight,
  CheckCircle2,
  Search,
  Filter,
  Video,
} from 'lucide-react';

export default function ServicesDirectoryPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allServices = useMemo(() => getAllServices(), []);

  const filteredServices = useMemo(() => {
    return allServices.filter((service) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        service.categoryTag.toLowerCase().includes(selectedCategory.toLowerCase());

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        service.name.toLowerCase().includes(query) ||
        service.hero.subheadline.toLowerCase().includes(query) ||
        service.categoryTag.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [allServices, selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* 2. Header & Hero */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 bg-[#0E4032] text-white border-b border-[#33A685]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#19634e]/40 via-[#0E4032] to-[#082820] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33A685]/20 border border-[#33A685]/50 text-xs font-semibold text-[#42CF9F] uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4 text-[#F2E6A7]" />
            <span>Complete Enterprise Services Catalogue</span>
          </div>

          <h1 className="hero-heading text-3xl sm:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.12] max-w-4xl mx-auto mb-6">
            AI-Native Engineering &amp; Enterprise Solutions
          </h1>

          <p className="body-text text-base sm:text-lg text-[#B4D9C4] max-w-2xl mx-auto leading-relaxed mb-8">
            Build, integrate and scale intelligent digital solutions with AI-native engineering across 6 strategic practices and 32 specialized service offerings.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#33A685] hover:bg-[#299576] active:bg-[#208064] text-white font-semibold px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer text-sm"
            >
              Book An Architecture Consultation
            </Link>
            <Link
              href="/services/video-services"
              className="bg-[#082a20] hover:bg-[#124b3b] text-[#F2E6A7] border border-[#33A685]/70 font-semibold px-6 py-3.5 rounded-lg transition-all text-sm inline-flex items-center gap-2"
            >
              <Video className="w-4 h-4 text-[#42CF9F]" />
              <span>Watch Video Services &amp; Demos</span>
            </Link>
            <a
              href="#services-catalog"
              className="bg-transparent hover:bg-white/10 text-white border border-[#33A685]/60 font-semibold px-6 py-3.5 rounded-lg transition-all text-sm"
            >
              Explore All 32 Services
            </a>
          </div>
        </div>
      </section>

      {/* 3. Filter Bar & Search */}
      <section id="services-catalog" className="pt-12 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Spotlight: Video Services Callout Banner */}
        <div className="mb-8 p-5 sm:p-6 bg-[#0E4032] text-white rounded-2xl border border-[#33A685]/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#082820] border border-[#33A685]/60 flex items-center justify-center flex-shrink-0 text-[#F2E6A7]">
              <Video className="w-6 h-6 text-[#42CF9F]" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#42CF9F] mb-1">
                <span>Featured Video Series</span>
                <span className="bg-[#F2E6A7] text-[#0E4032] text-[10px] px-2 py-0.5 rounded-full font-bold">New</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Technical Architecture Walkthroughs &amp; Systems Teardowns
              </h3>
              <p className="text-xs sm:text-sm text-[#B4D9C4] mt-1 max-w-2xl leading-relaxed">
                Watch 20+ in-depth video blueprints covering autonomous agent workflows, hybrid RAG, zero-trust Kubernetes, and real-time streaming lakehouses.
              </p>
            </div>
          </div>
          <Link
            href="/services/video-services"
            className="bg-[#33A685] hover:bg-[#288f72] text-white text-xs font-semibold px-5 py-3 rounded-xl whitespace-nowrap transition-all shadow-md inline-flex items-center gap-2 flex-shrink-0"
          >
            <span>Explore Video Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[#B4D9C4]/60">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#0E4032]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 32 services by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#B4D9C4] bg-white text-sm text-[#0E4032] placeholder-[#0E4032]/50 focus:outline-none focus:ring-2 focus:ring-[#33A685]/50 shadow-xs"
            />
          </div>

          {/* Result Count Indicator */}
          <div className="text-xs font-medium text-[#0E4032]/70">
            Showing <span className="font-bold text-[#0E4032]">{filteredServices.length}</span> of {allServices.length} enterprise services
          </div>
        </div>

        {/* Practice Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#0E4032] text-white shadow-sm'
                : 'bg-white border border-[#B4D9C4] text-[#0E4032]/80 hover:bg-[#E8F5F0]'
            }`}
          >
            All Services ({allServices.length})
          </button>

          {SERVICE_CATEGORIES.map((cat) => {
            const isSelected =
              selectedCategory.toLowerCase() === cat.title.toLowerCase() ||
              selectedCategory.toLowerCase() === cat.shortTitle.toLowerCase();
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.shortTitle)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0E4032] text-white shadow-sm'
                    : 'bg-white border border-[#B4D9C4] text-[#0E4032]/80 hover:bg-[#E8F5F0]'
                }`}
              >
                {cat.title} ({cat.services.length})
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. Services Grid */}
      <section className="py-8 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#B4D9C4] p-8 max-w-lg mx-auto">
            <Filter className="w-10 h-10 text-[#33A685] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0E4032] mb-1">No services match your search</h3>
            <p className="text-sm text-[#0E4032]/70 mb-4">Try clearing your filters or search keywords.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold bg-[#33A685] text-white px-4 py-2 rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white border border-[#B4D9C4] rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-[#33A685] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#33A685] bg-[#E8F5F0] px-2.5 py-1 rounded-md">
                      {service.categoryTag}
                    </span>
                    <span className="text-[10px] font-mono text-[#0E4032]/50">
                      14-Day Sprint
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0E4032] group-hover:text-[#33A685] transition-colors mb-2.5 leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-sm text-[#0E4032]/80 leading-relaxed line-clamp-3 mb-6 font-normal">
                    {service.hero.subheadline}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#B4D9C4]/40 flex items-center justify-between text-xs font-semibold text-[#33A685] group-hover:text-[#299576]">
                  <span>Explore Architecture Blueprint</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Global Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

     
    </main>
  );
}
