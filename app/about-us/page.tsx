'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { LEADERSHIP_TEAM, CORE_CULTURE_VALUES, PARTNERSHIPS_LIST } from '@/src/data/about-us-data';
import {
  Sparkles,
  ArrowRight,
  Users,
  Award,
  Briefcase,
  Globe,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Building2,
  HeartHandshake
} from 'lucide-react';

export default function AboutUsIndexPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* 2. Hero Section */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-24 overflow-hidden border-b border-[#B4D9C4]/60 bg-gradient-to-b from-white via-[#F2F2F2] to-[#F2F2F2]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#B4D9C4]/35 via-[#33A685]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#B4D9C4] text-xs font-semibold text-[#0E4032] mb-6 shadow-xs">
            <Sparkles className="w-4 h-4 text-[#33A685]" />
            <span>15+ Years of Engineering Craftsmanship</span>
          </div>

          <h1 className="hero-heading text-3xl sm:text-5xl lg:text-[54px] font-bold text-[#0E4032] tracking-tight leading-[1.12] max-w-4xl mx-auto">
            Architecting the Future of Enterprise AI &amp; Digital Software
          </h1>

          <p className="body-text text-[#0E4032]/80 mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-[1.65]">
            From our founding over a decade ago, SpotXpert AI has grown into a global engineering team of 1,000+ architects, developers, and data specialists helping forward-thinking enterprises engineer software that matters.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="bg-[#0E4032] hover:bg-[#155442] active:bg-[#082820] text-white btn-text px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
            >
              <span>Connect with Our Leadership</span>
              <ArrowRight className="w-4 h-4 text-[#33A685]" />
            </button>
            <Link
              href="/about-us/careers"
              className="bg-white hover:bg-[#B4D9C4]/20 border border-[#B4D9C4] text-[#0E4032] btn-text px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer shadow-xs"
            >
              Explore Open Roles
            </Link>
          </div>

          {/* Key Stats Bar */}
          <div className="mt-14 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white border border-[#B4D9C4] rounded-2xl p-4 text-center shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0E4032]">15+</div>
              <div className="text-xs text-[#0E4032]/75 font-medium mt-1">Years in Business</div>
            </div>
            <div className="bg-white border border-[#B4D9C4] rounded-2xl p-4 text-center shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#33A685]">1,000+</div>
              <div className="text-xs text-[#0E4032]/75 font-medium mt-1">Global Engineers</div>
            </div>
            <div className="bg-white border border-[#B4D9C4] rounded-2xl p-4 text-center shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#0E4032]">900+</div>
              <div className="text-xs text-[#0E4032]/75 font-medium mt-1">Client Deployments</div>
            </div>
            <div className="bg-white border border-[#B4D9C4] rounded-2xl p-4 text-center shadow-xs">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#33A685]">5</div>
              <div className="text-xs text-[#0E4032]/75 font-medium mt-1">Global Delivery Hubs</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Main Sub-Hub Navigation Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#B4D9C4]/60">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
            Our Organization
          </span>
          <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold mt-2">
            Get to Know SpotXpert AI
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            href="/about-us/leadership-culture"
            className="p-8 rounded-3xl bg-white border border-[#B4D9C4] hover:border-[#33A685] transition-all shadow-xs group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0E4032] text-[#F2E6A7] flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="card-heading text-xl font-bold text-[#0E4032] group-hover:text-[#33A685] transition-colors mb-3">
                Leadership &amp; Culture
              </h3>
              <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed mb-6 font-normal">
                Meet our executive technical leadership team and learn about our engineering core values: craftsmanship, radical transparency, and customer obsession.
              </p>
            </div>
            <div className="pt-4 border-t border-[#B4D9C4]/50 flex items-center justify-between text-xs font-bold text-[#33A685]">
              <span>Meet the Leadership Team</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/about-us/partnerships-alliances"
            className="p-8 rounded-3xl bg-white border border-[#B4D9C4] hover:border-[#33A685] transition-all shadow-xs group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0E4032] text-[#F2E6A7] flex items-center justify-center mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="card-heading text-xl font-bold text-[#0E4032] group-hover:text-[#33A685] transition-colors mb-3">
                Partnerships &amp; Alliances
              </h3>
              <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed mb-6 font-normal">
                Strategic technology alliances with AWS (Premier Tier), Microsoft Azure, Google Cloud, Snowflake, Databricks, and Pinecone.
              </p>
            </div>
            <div className="pt-4 border-t border-[#B4D9C4]/50 flex items-center justify-between text-xs font-bold text-[#33A685]">
              <span>Explore Strategic Alliances</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/about-us/careers"
            className="p-8 rounded-3xl bg-white border border-[#B4D9C4] hover:border-[#33A685] transition-all shadow-xs group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0E4032] text-[#F2E6A7] flex items-center justify-center mb-5">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="card-heading text-xl font-bold text-[#0E4032] group-hover:text-[#33A685] transition-colors mb-3">
                Careers &amp; Open Roles
              </h3>
              <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed mb-6 font-normal">
                Join our remote-first global engineering collective. We are actively hiring Lead AI Architects, Cloud Principals, and Fullstack Tech Leads.
              </p>
            </div>
            <div className="pt-4 border-t border-[#B4D9C4]/50 flex items-center justify-between text-xs font-bold text-[#33A685]">
              <span>View Active Openings</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* 4. Company Journey Timeline */}
      <section className="py-20 bg-white border-b border-[#B4D9C4]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
              Our Journey
            </span>
            <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold mt-2">
              From Boutique Squad to Enterprise Powerhouse
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#F2F2F2] border border-[#B4D9C4] flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0E4032] text-[#F2E6A7] font-bold text-sm flex items-center justify-center flex-shrink-0">
                2010
              </div>
              <div>
                <h4 className="card-heading text-base font-bold text-[#0E4032]">Founding &amp; Agile DNA</h4>
                <p className="text-xs sm:text-sm text-[#0E4032]/80 mt-1 font-normal leading-relaxed">
                  Founded with a vision to eliminate the slow, bureaucratic handoffs of traditional outsourcing through autonomous, dedicated developer squads.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F2F2F2] border border-[#B4D9C4] flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0E4032] text-[#F2E6A7] font-bold text-sm flex items-center justify-center flex-shrink-0">
                2016
              </div>
              <div>
                <h4 className="card-heading text-base font-bold text-[#0E4032]">Cloud Scale &amp; AWS Premier Tier</h4>
                <p className="text-xs sm:text-sm text-[#0E4032]/80 mt-1 font-normal leading-relaxed">
                  Scaled cloud modernization and DevOps practices, achieving AWS Premier Tier partnership status with certified competencies in microservices and migration.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F2F2F2] border border-[#B4D9C4] flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0E4032] text-[#F2E6A7] font-bold text-sm flex items-center justify-center flex-shrink-0">
                2022
              </div>
              <div>
                <h4 className="card-heading text-base font-bold text-[#0E4032]">SpotXpert AI Labs Inception</h4>
                <p className="text-xs sm:text-sm text-[#0E4032]/80 mt-1 font-normal leading-relaxed">
                  Launched our dedicated AI research lab, building pre-engineered accelerators for Enterprise RAG, computer vision, and autonomous agent orchestration.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#F2F2F2] border border-[#B4D9C4] flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0E4032] text-[#F2E6A7] font-bold text-sm flex items-center justify-center flex-shrink-0">
                Today
              </div>
              <div>
                <h4 className="card-heading text-base font-bold text-[#0E4032]">1,000+ Strong Global Engineering Force</h4>
                <p className="text-xs sm:text-sm text-[#0E4032]/80 mt-1 font-normal leading-relaxed">
                  Trusted by 900+ enterprises across 17 industry sectors, delivering production-grade AI platforms, zero-trust cloud architectures, and dedicated agile pods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer & Modals */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
   
    </main>
  );
}
