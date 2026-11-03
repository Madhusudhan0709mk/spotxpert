'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { JOB_OPENINGS_DATA } from '@/src/data/about-us-data';
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  Heart,
  Laptop,
  GraduationCap,
  Globe
} from 'lucide-react';

export default function CareersPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [activeJobId, setActiveJobId] = useState<string | null>(null);

  const departments = ['All', 'AI & Data Engineering', 'Cloud Platform Engineering', 'Digital Product Engineering', 'Quality Engineering'];

  const filteredJobs = selectedDept === 'All'
    ? JOB_OPENINGS_DATA
    : JOB_OPENINGS_DATA.filter(j => j.department === selectedDept);

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* 2. Breadcrumbs & Header */}
      <section className="pt-24 sm:pt-28 pb-4 bg-white border-b border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs text-[#0E4032]/70 font-medium">
            <Link href="/" className="hover:text-[#33A685]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#33A685]" />
            <Link href="/about-us" className="hover:text-[#33A685]">About Us</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#33A685]" />
            <span className="text-[#0E4032] font-semibold">Careers &amp; Open Roles</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4D9C4]/30 border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032]">
            <Briefcase className="w-3.5 h-3.5 text-[#33A685]" />
            <span>Join 1,000+ Passionate Engineers</span>
          </div>
        </div>
      </section>

      {/* 3. Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 border-b border-[#B4D9C4]/60 bg-gradient-to-b from-white via-[#F2F2F2] to-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
            Engineering Careers at SpotXpert AI
          </span>

          <h1 className="hero-heading text-3xl sm:text-5xl font-bold text-[#0E4032] tracking-tight leading-[1.14] mt-4 mb-5 max-w-3xl mx-auto">
            Build Systems That Matter with Top-Tier Engineering Pods
          </h1>

          <p className="body-text text-[#0E4032]/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
            Work alongside elite principal architects, contribute to cutting-edge AI accelerators, and solve mission-critical distributed systems challenges with a remote-first global collective.
          </p>

          {/* Department Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap max-w-4xl mx-auto">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedDept === dept
                    ? 'bg-[#0E4032] text-white shadow-xs'
                    : 'bg-white text-[#0E4032]/80 border border-[#B4D9C4] hover:border-[#33A685]'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Join SpotXpert Perks */}
      <section className="py-16 bg-white border-b border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F2F2F2] border border-[#B4D9C4]">
              <Globe className="w-8 h-8 text-[#33A685] mb-3" />
              <h3 className="card-heading text-base font-bold text-[#0E4032] mb-1">Remote-First Culture</h3>
              <p className="text-xs text-[#0E4032]/80 font-normal">
                Work from anywhere with flexible hours and synchronous collaboration windows.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F2F2F2] border border-[#B4D9C4]">
              <GraduationCap className="w-8 h-8 text-[#33A685] mb-3" />
              <h3 className="card-heading text-base font-bold text-[#0E4032] mb-1">$3,000 Learning Budget</h3>
              <p className="text-xs text-[#0E4032]/80 font-normal">
                Annual stipend for cloud certifications, technical books, and international AI conferences.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F2F2F2] border border-[#B4D9C4]">
              <Laptop className="w-8 h-8 text-[#33A685] mb-3" />
              <h3 className="card-heading text-base font-bold text-[#0E4032] mb-1">High-End Hardware</h3>
              <p className="text-xs text-[#0E4032]/80 font-normal">
                Top-spec Apple Silicon MacBook Pro, 4K monitors, and ergonomic home office setup grant.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F2F2F2] border border-[#B4D9C4]">
              <Heart className="w-8 h-8 text-[#33A685] mb-3" />
              <h3 className="card-heading text-base font-bold text-[#0E4032] mb-1">Comprehensive Health</h3>
              <p className="text-xs text-[#0E4032]/80 font-normal">
                Premium medical, dental, and vision insurance with full dependent and family coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Open Roles Listings */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
            Active Openings ({filteredJobs.length})
          </span>
          <h2 className="section-heading text-[#0E4032] text-2xl sm:text-4xl font-bold mt-2">
            Current Engineering Opportunities
          </h2>
        </div>

        <div className="space-y-6">
          {filteredJobs.map((job) => {
            const isSelected = activeJobId === job.id;
            return (
              <div
                key={job.id}
                className="bg-white border border-[#B4D9C4] rounded-3xl p-6 sm:p-8 shadow-xs hover:border-[#33A685] transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-bold text-[#33A685] uppercase tracking-wider">
                      {job.department}
                    </span>
                    <h3 className="card-heading text-xl font-bold text-[#0E4032] mt-1">
                      {job.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-[#0E4032]/70 flex-wrap">
                    <span className="flex items-center gap-1 bg-[#F2F2F2] px-3 py-1 rounded-full border border-[#B4D9C4]">
                      <MapPin className="w-3.5 h-3.5 text-[#33A685]" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1 bg-[#F2F2F2] px-3 py-1 rounded-full border border-[#B4D9C4]">
                      <Clock className="w-3.5 h-3.5 text-[#33A685]" />
                      {job.type} ({job.experience})
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed font-normal mb-6">
                  {job.description}
                </p>

                {/* Responsibilities & Requirements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-2xl bg-[#F2F2F2] border border-[#B4D9C4]/70 mb-6">
                  <div>
                    <h4 className="text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-2">Key Responsibilities</h4>
                    <ul className="space-y-1.5 text-xs text-[#0E4032]/85">
                      {job.responsibilities.map((r, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#33A685] flex-shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-2">Requirements</h4>
                    <ul className="space-y-1.5 text-xs text-[#0E4032]/85">
                      {job.requirements.map((req, reqIdx) => (
                        <li key={reqIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#33A685] flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#B4D9C4]/60 flex items-center justify-between">
                  <span className="text-xs text-[#0E4032]/60">
                    Application review turnaround: 48 business hours
                  </span>

                  <button
                    onClick={() => setIsConsultationOpen(true)}
                    className="bg-[#0E4032] hover:bg-[#155442] text-white btn-text px-6 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Apply for Position</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#33A685]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Footer & Modals */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
     
    </main>
  );
}
