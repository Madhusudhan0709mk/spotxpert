'use client';

import React, { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  CASE_STUDIES_DATA,
  CASE_STUDY_OFFERINGS,
  CASE_STUDY_INDUSTRIES,
  CaseStudyItem,
} from '@/src/data/case-studies-data';
import {
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Filter,
  Search,
} from 'lucide-react';

const ITEMS_PER_PAGE = 4;

export default function CaseStudiesListingPage() {
  const [selectedOffering, setSelectedOffering] = useState<string>('All Offerings');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('All Industries');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const catalogRef = useRef<HTMLDivElement>(null);

  // Dynamic filter
  const filteredStudies = useMemo(() => {
    return CASE_STUDIES_DATA.filter((item) => {
      const matchesOffering =
        selectedOffering === 'All Offerings' ||
        item.offering.toLowerCase() === selectedOffering.toLowerCase() ||
        item.categoryTags.some((tag) =>
          tag.toLowerCase().includes(selectedOffering.toLowerCase())
        );

      const matchesIndustry =
        selectedIndustry === 'All Industries' ||
        item.industry.toLowerCase() === selectedIndustry.toLowerCase();

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query) ||
        item.categoryTags.some((tag) => tag.toLowerCase().includes(query));

      return matchesOffering && matchesIndustry && matchesQuery;
    });
  }, [selectedOffering, selectedIndustry, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredStudies.length / ITEMS_PER_PAGE));

  const paginatedStudies = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredStudies.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredStudies, currentPage]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredStudies.length);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      if (catalogRef.current) {
        catalogRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Top Header & Filters Section matching Image 1 */}
      <section ref={catalogRef} className="pt-32 sm:pt-40 pb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#B4D9C4]/60">
          {/* Main Title matching Image 1 */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0E4032] tracking-tight leading-tight">
              Case Studies
            </h1>
            <p className="text-sm sm:text-base text-[#0E4032]/80 mt-2 max-w-xl font-normal">
              Explore how we engineer transformative AI solutions, modern data stacks, and enterprise cloud platforms that deliver measurable ROI.
            </p>
          </div>

          {/* Filter Dropdowns matching Image 1 */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Offering Dropdown */}
            <div className="w-full sm:w-56">
              <label className="block text-[11px] font-semibold text-[#0E4032] mb-1.5 ml-1 uppercase tracking-wider">
                Offerings
              </label>
              <div className="relative">
                <select
                  value={selectedOffering}
                  onChange={(e) => {
                    setSelectedOffering(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full appearance-none bg-white border border-[#B4D9C4] text-[#0E4032] text-xs font-semibold py-2.5 pl-3.5 pr-8 rounded-lg shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#33A685]/40 cursor-pointer"
                >
                  {CASE_STUDY_OFFERINGS.map((offering) => (
                    <option key={offering} value={offering}>
                      {offering === 'All Offerings' ? 'Select Option' : offering}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#33A685] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Industry Dropdown */}
            <div className="w-full sm:w-56">
              <label className="block text-[11px] font-semibold text-[#0E4032] mb-1.5 ml-1 uppercase tracking-wider">
                Industry
              </label>
              <div className="relative">
                <select
                  value={selectedIndustry}
                  onChange={(e) => {
                    setSelectedIndustry(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full appearance-none bg-white border border-[#B4D9C4] text-[#0E4032] text-xs font-semibold py-2.5 pl-3.5 pr-8 rounded-lg shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#33A685]/40 cursor-pointer"
                >
                  {CASE_STUDY_INDUSTRIES.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry === 'All Industries' ? 'Select Option' : industry}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-[#33A685] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Results Counter Sub-bar */}
        <div className="flex items-center justify-between pt-4 text-xs font-medium text-[#0E4032]/70">
          <div>
            Showing <span className="font-bold text-[#0E4032]">{filteredStudies.length > 0 ? startIndex + 1 : 0}</span>–<span className="font-bold text-[#0E4032]">{endIndex}</span> of <span className="font-bold text-[#0E4032]">{filteredStudies.length}</span> case studies
          </div>
          {totalPages > 1 && (
            <div>
              Page <span className="font-bold text-[#0E4032]">{currentPage}</span> of <span className="font-bold text-[#0E4032]">{totalPages}</span>
            </div>
          )}
        </div>
      </section>

      {/* 3. Case Studies 2-Column Grid matching Image 1 */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {paginatedStudies.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#B4D9C4] p-8 max-w-lg mx-auto shadow-sm">
            <Filter className="w-10 h-10 text-[#33A685] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0E4032] mb-1">No case studies match your selection</h3>
            <p className="text-sm text-[#0E4032]/80 mb-4">
              Try adjusting your offering or industry filter.
            </p>
            <button
              onClick={() => {
                setSelectedOffering('All Offerings');
                setSelectedIndustry('All Industries');
                setSearchQuery('');
                setCurrentPage(1);
              }}
              className="text-xs font-semibold bg-[#33A685] hover:bg-[#299576] text-white px-5 py-2.5 rounded-lg transition-colors cursor-pointer shadow-md"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {paginatedStudies.map((study) => (
              <article
                key={study.id}
                className="bg-white border border-[#B4D9C4] hover:border-[#33A685] rounded-3xl p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image matching Image 1 */}
                  <Link
                    href={`/case-study/${study.slug}`}
                    className="block relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-[#E8F5F0] shadow-sm group-hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      referrerPolicy="no-referrer"
                    />
                  </Link>

                  {/* Category Tags matching Image 1 */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {study.categoryTags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#E8F5F0] border border-[#B4D9C4] text-[#0E4032] text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title matching Image 1 */}
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0E4032] group-hover:text-[#33A685] transition-colors mb-3 leading-snug">
                    <Link href={`/case-study/${study.slug}`}>
                      {study.title}
                    </Link>
                  </h2>

                  {/* Excerpt matching Image 1 */}
                  <p className="text-sm sm:text-base text-[#0E4032]/80 leading-relaxed mb-6 font-normal">
                    {study.excerpt}
                  </p>
                </div>

                {/* Read More Link matching Image 1 */}
                <div className="pt-2 flex items-center">
                  <Link
                    href={`/case-study/${study.slug}`}
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
        )}

        {/* 4. Active Pagination matching structure (e.g. [ < ] [ 1 ] [ 2 ] [ 3 ] [ > ]) */}
        {totalPages > 1 && (
          <div className="mt-16 pt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous Page"
              className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-semibold transition-all ${
                currentPage === 1
                  ? 'opacity-30 cursor-not-allowed text-[#0E4032]/40 bg-white border border-[#B4D9C4]'
                  : 'bg-white border border-[#B4D9C4] text-[#0E4032] hover:bg-[#E8F5F0] cursor-pointer shadow-xs'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
              const isActive = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-9 h-9 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0E4032] text-[#F2E6A7] shadow-md ring-1 ring-[#33A685]/40'
                      : 'bg-white border border-[#B4D9C4] text-[#0E4032] hover:bg-[#E8F5F0]'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next Page"
              className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-semibold transition-all ${
                currentPage === totalPages
                  ? 'opacity-30 cursor-not-allowed text-[#0E4032]/40 bg-white border border-[#B4D9C4]'
                  : 'bg-white border border-[#B4D9C4] text-[#0E4032] hover:bg-[#E8F5F0] cursor-pointer shadow-xs'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

      {/* 5. Global Footer */}
      <Footer />
    </main>
  );
}
