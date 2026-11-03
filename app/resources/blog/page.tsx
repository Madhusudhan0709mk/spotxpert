'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';
import { BLOG_POSTS_DATA } from '@/src/data/resources-data';
import {
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Clock,
  BookOpen
} from 'lucide-react';

export default function EngineeringBlogPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const POSTS_PER_PAGE = 4;
  const categories = ['All', 'AI & Machine Learning', 'Cloud & Infrastructure', 'Autonomous Agents', 'Cloud Modernization'];

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS_DATA
    : BLOG_POSTS_DATA.filter(p => p.category === selectedCategory);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const validCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (validCurrentPage - 1) * POSTS_PER_PAGE;
  const endIndex = Math.min(startIndex + POSTS_PER_PAGE, filteredPosts.length);
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const el = document.getElementById('articles-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

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
            <Link href="/resources" className="hover:text-[#33A685]">Resources</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#33A685]" />
            <span className="text-[#0E4032] font-semibold">Engineering Blog</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4D9C4]/30 border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032]">
            <BookOpen className="w-3.5 h-3.5 text-[#33A685]" />
            <span>Technical Deep Dives</span>
          </div>
        </div>
      </section>

      {/* 3. Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 border-b border-[#B4D9C4]/60 bg-gradient-to-b from-white via-[#F2F2F2] to-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
            SpotXpert Engineering Insights
          </span>

          <h1 className="hero-heading text-3xl sm:text-5xl font-bold text-[#0E4032] tracking-tight leading-[1.14] mt-4 mb-5 max-w-3xl mx-auto">
            Practical Software Architecture, LLMOps &amp; Cloud Modernization
          </h1>

          <p className="body-text text-[#0E4032]/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
            Written by practicing architects and pod leads shipping real software in production. Zero marketing fluff—only real benchmarks, code patterns, and distributed system trade-offs.
          </p>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap max-w-3xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0E4032] text-white shadow-xs'
                    : 'bg-white text-[#0E4032]/80 border border-[#B4D9C4] hover:border-[#33A685]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Articles Grid with Pagination */}
      <section id="articles-grid" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {paginatedPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-[#B4D9C4] rounded-3xl overflow-hidden shadow-xs hover:border-[#33A685] transition-all flex flex-col justify-between group"
            >
              {/* Card Image Banner */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={post.image.url}
                  alt={post.image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-[#0E4032] shadow-xs">
                  {post.category}
                </div>
                <div className="absolute top-4 right-4 bg-[#0E4032]/90 text-white px-3 py-1 rounded-full text-[11px] font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#33A685]" />
                  <span>{post.readingTime}</span>
                </div>
              </div>

              {/* Card Body - Clean Layout without Date Row or Author/Highlights Footer */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="card-heading text-xl sm:text-2xl font-bold text-[#0E4032] mb-3 group-hover:text-[#33A685] transition-colors">
                    {post.title}
                  </h2>

                  <p className="body-text text-[#0E4032]/80 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {post.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium bg-[#B4D9C4]/25 text-[#0E4032] px-2.5 py-0.5 rounded-full border border-[#B4D9C4]"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 bg-white border border-[#B4D9C4] rounded-3xl p-8">
            <BookOpen className="w-12 h-12 text-[#33A685] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-[#0E4032]">No articles found</h3>
            <p className="text-xs sm:text-sm text-[#0E4032]/70 mt-1 mb-4">
              There are currently no articles in the &ldquo;{selectedCategory}&rdquo; category.
            </p>
            <button
              onClick={() => handleCategorySelect('All')}
              className="text-xs font-semibold text-white bg-[#0E4032] hover:bg-[#155442] px-4 py-2 rounded-full transition-colors cursor-pointer"
            >
              View all articles
            </button>
          </div>
        )}

        {/* 5. Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-14 pt-8 border-t border-[#B4D9C4]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Range Counter */}
            <div className="text-xs sm:text-sm text-[#0E4032]/75 font-medium">
              Showing <span className="font-bold text-[#0E4032]">{startIndex + 1}–{endIndex}</span> of <span className="font-bold text-[#0E4032]">{filteredPosts.length}</span> articles
            </div>

            {/* Pagination Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(validCurrentPage - 1)}
                disabled={validCurrentPage === 1}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  validCurrentPage === 1
                    ? 'bg-[#E5E7EB]/40 border-transparent text-[#9CA3AF] cursor-not-allowed'
                    : 'bg-white border-[#B4D9C4] text-[#0E4032] hover:border-[#33A685] hover:bg-[#B4D9C4]/20 cursor-pointer shadow-xs'
                }`}
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isActive = validCurrentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-9 h-9 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center ${
                        isActive
                          ? 'bg-[#0E4032] text-white shadow-xs'
                          : 'bg-white border border-[#B4D9C4] text-[#0E4032] hover:border-[#33A685] hover:bg-[#B4D9C4]/20'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handlePageChange(validCurrentPage + 1)}
                disabled={validCurrentPage === totalPages}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  validCurrentPage === totalPages
                    ? 'bg-[#E5E7EB]/40 border-transparent text-[#9CA3AF] cursor-not-allowed'
                    : 'bg-white border-[#B4D9C4] text-[#0E4032] hover:border-[#33A685] hover:bg-[#B4D9C4]/20 cursor-pointer shadow-xs'
                }`}
                aria-label="Next Page"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 6. Footer & Modals */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </main>
  );
}
