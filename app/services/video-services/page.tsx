'use client';

import React, { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  VIDEO_CATALOG,
  CATEGORIES,
  VIDEO_LINKS,
  VideoItem,
  VideoLinkItem,
} from '@/src/data/video-services-data';
import {
  Video,
  Play,
  Share2,
  Check,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Search,
  Filter,
  Clock,
  User,
  ArrowRight,
  Maximize2,
  X,
  ExternalLink,
  Layers,
  Cpu,
  ShieldCheck,
  Code2,
  Calendar,
  CheckCircle2,
  List,
  Copy,
} from 'lucide-react';

const ITEMS_PER_PAGE = 10;

export default function VideoServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Videos');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTheaterVideo, setActiveTheaterVideo] = useState<VideoItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showLinksIndex, setShowLinksIndex] = useState(false);

  const catalogRef = useRef<HTMLDivElement>(null);

  // Dynamic filter for videos based on category and search query
  const filteredVideos = useMemo(() => {
    return VIDEO_CATALOG.filter((video) => {
      const matchesCategory =
        selectedCategory === 'All Videos' || video.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        video.title.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query) ||
        video.speaker.name.toLowerCase().includes(query) ||
        video.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Dynamic calculation for pagination
  const totalPages = Math.max(1, Math.ceil(filteredVideos.length / ITEMS_PER_PAGE));

  // Current page items (Strictly 10 per page as requested)
  const paginatedVideos = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredVideos.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredVideos, currentPage]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      if (catalogRef.current) {
        catalogRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2200);
  };

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar />

      {/* 2. Hero Header Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 bg-[#0E4032] text-white border-b border-[#33A685]/30 relative overflow-hidden">
        {/* Subtle radial backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#19634e]/40 via-[#0E4032] to-[#082820] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#B4D9C4]/80 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#33A685]" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#33A685]" />
            <span className="text-[#F2E6A7] font-semibold">Video Services</span>
          </nav>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33A685]/20 border border-[#33A685]/50 text-xs font-semibold text-[#42CF9F] uppercase tracking-wider mb-5">
              <Video className="w-4 h-4 text-[#F2E6A7]" />
              <span>Enterprise Video Services &amp; Architecture Demos</span>
            </div>

            <h1 className="hero-heading text-3xl sm:text-5xl lg:text-[50px] font-bold text-white tracking-tight leading-[1.14] mb-6">
              Technical Architecture Walkthroughs &amp; Systems Teardowns
            </h1>

            <p className="body-text text-base sm:text-lg text-[#B4D9C4] max-w-2xl mx-auto leading-relaxed mb-8">
              Watch our principal AI architects, platform engineers, and SRE leads break down real production architectures, multi-agent frameworks, hybrid RAG pipelines, and cloud migrations.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-4 border-t border-[#33A685]/30 text-left">
              <div className="bg-[#082a20]/60 border border-[#33A685]/30 rounded-xl p-3.5">
                <div className="text-2xl font-bold text-white font-mono">{VIDEO_CATALOG.length}</div>
                <div className="text-xs text-[#B4D9C4]">Architecture Teardowns</div>
              </div>
              <div className="bg-[#082a20]/60 border border-[#33A685]/30 rounded-xl p-3.5">
                <div className="text-2xl font-bold text-[#F2E6A7] font-mono">10/page</div>
                <div className="text-xs text-[#B4D9C4]">Paginated Catalog</div>
              </div>
              <div className="bg-[#082a20]/60 border border-[#33A685]/30 rounded-xl p-3.5">
                <div className="text-2xl font-bold text-white font-mono">100%</div>
                <div className="text-xs text-[#B4D9C4]">Production Blueprints</div>
              </div>
              <div className="bg-[#082a20]/60 border border-[#33A685]/30 rounded-xl p-3.5">
                <div className="text-2xl font-bold text-[#42CF9F] font-mono">Zero</div>
                <div className="text-xs text-[#B4D9C4]">Sales Fluff / Pure Code</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Masterclass (Spotlighting Video 1 on Page 1) */}
      {currentPage === 1 && selectedCategory === 'All Videos' && !searchQuery && (
        <section className="pt-10 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#082820] text-white border border-[#33A685]/50 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#33A685]/20 border border-[#33A685]/40 text-xs font-semibold text-[#F2E6A7] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#F2E6A7]" />
              <span>Featured Masterclass &bull; Video #1</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Direct Dailymotion Video Embed */}
              <div className="lg:col-span-7">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-2xl border border-[#33A685]/40 ring-1 ring-white/10 group">
                  <iframe
                    src="https://www.dailymotion.com/embed/video/xbt21sa"
                    title="Enterprise AI Transformation & System Architecture Overview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                <div className="flex items-center justify-between mt-3 text-xs text-[#B4D9C4]/70 px-1">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#33A685]" /> Duration: 18:42
                  </span>
                  <a
                    href="https://dai.ly/xbt21sa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#42CF9F] hover:text-[#F2E6A7] transition-colors"
                  >
                    Open on Dailymotion <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Right Column: Masterclass Context & Takeaways */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[#185c49] border border-[#33A685] flex items-center justify-center font-bold text-xs text-[#F2E6A7]">
                      EV
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Dr. Elena Vance</div>
                      <div className="text-xs text-[#B4D9C4]/80">Chief AI Architect &amp; VP of Engineering</div>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                    Enterprise AI Transformation &amp; System Architecture Overview
                  </h2>

                  <p className="text-sm text-[#B4D9C4] leading-relaxed mb-5">
                    An end-to-end teardown of enterprise AI orchestration, model routing between low-latency SLMs and high-reasoning frontier models, vector indexing strategies, and multi-tenant security barriers.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#F2E6A7]">
                      Architectural Blueprint Highlights:
                    </div>
                    {[
                      'Dual-tier model routing between low-latency SLMs and high-reasoning models',
                      'Vector cache indexing cutting recurring inference spend by 68%',
                      'Multi-tenant enterprise zero-trust guardrails & PII filtering in memory',
                    ].map((takeaway, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#33A685] flex-shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#33A685]/30">
                  <Link
                    href="/contact"
                    className="bg-[#33A685] hover:bg-[#288f72] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all inline-flex items-center gap-1.5"
                  >
                    <span>Request Architecture Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    onClick={() => handleCopyLink(VIDEO_CATALOG[0].directUrl, 'video-1')}
                    className="bg-transparent hover:bg-white/10 text-[#B4D9C4] hover:text-white border border-[#33A685]/50 text-xs font-semibold px-3 py-2.5 rounded-lg transition-all inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    {copiedId === 'video-1' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#42CF9F]" />
                        <span>Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Share Video</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Filter & Search Controls */}
      <section ref={catalogRef} id="video-catalog" className="pt-10 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[#B4D9C4]/60">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#0E4032]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search ${VIDEO_CATALOG.length} video walkthroughs by tech or speaker...`}
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#B4D9C4] bg-white text-sm text-[#0E4032] placeholder-[#0E4032]/50 focus:outline-none focus:ring-2 focus:ring-[#33A685]/50 shadow-xs"
            />
          </div>

          {/* Result Count and Action Buttons */}
          <div className="flex items-center justify-between sm:justify-end gap-3 text-xs font-medium text-[#0E4032]/70">
            <div>
              Showing <span className="font-bold text-[#0E4032]">{filteredVideos.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0}</span>
              &ndash;
              <span className="font-bold text-[#0E4032]">
                {Math.min(currentPage * ITEMS_PER_PAGE, filteredVideos.length)}
              </span>{' '}
              of <span className="font-bold text-[#0E4032]">{filteredVideos.length}</span> videos
              <span className="text-[#33A685] font-semibold bg-[#E8F5F0] px-2 py-0.5 rounded-md ml-2">
                (10 per page)
              </span>
            </div>

            {/* Dynamic Link Registry Toggle Button */}
            <button
              onClick={() => setShowLinksIndex(!showLinksIndex)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#33A685] text-[#0E4032] bg-white hover:bg-[#E8F5F0] transition-colors font-semibold cursor-pointer text-xs"
            >
              <List className="w-3.5 h-3.5 text-[#33A685]" />
              <span>{showLinksIndex ? 'Hide Links Index' : 'View Links Index'}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Links List in File Drawer */}
        {showLinksIndex && (
          <div className="mt-4 p-5 bg-white rounded-2xl border border-[#33A685]/50 shadow-md animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-[#B4D9C4]/40 mb-3">
              <div>
                <h4 className="text-sm font-bold text-[#0E4032] flex items-center gap-2">
                  <List className="w-4 h-4 text-[#33A685]" />
                  <span>Dynamic Video Links Registry (List Format from Data File)</span>
                </h4>
                <p className="text-xs text-[#0E4032]/70 mt-0.5">
                  Extracted dynamically from <code className="text-[#33A685] bg-[#E8F5F0] px-1 py-0.5 rounded font-mono">src/data/video-services-data.ts</code>
                </p>
              </div>
              <span className="text-xs font-semibold bg-[#0E4032] text-white px-2.5 py-1 rounded-md">
                {VIDEO_LINKS.length} Links
              </span>
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              {VIDEO_LINKS.map((item, idx) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-2.5 rounded-xl bg-[#F8FAF9] border border-[#B4D9C4]/40 text-xs"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="font-mono text-[#33A685] font-bold text-[11px] w-6">
                      #{idx + 1}
                    </span>
                    <span className="font-semibold text-[#0E4032] truncate max-w-xs md:max-w-md">
                      {item.title}
                    </span>
                    <span className="text-[10px] bg-white border border-[#B4D9C4] px-1.5 py-0.5 rounded text-[#0E4032]/60">
                      {item.platform} &bull; {item.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
                    <code className="text-[11px] font-mono text-[#0E4032]/70 bg-white px-2 py-0.5 rounded border border-[#B4D9C4]/50 max-w-[180px] truncate">
                      {item.embedUrl}
                    </code>
                    <button
                      onClick={() => handleCopyLink(item.directUrl, item.id)}
                      title="Copy Link"
                      className="text-[#33A685] hover:text-[#0E4032] p-1 rounded hover:bg-white transition-colors cursor-pointer"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-3.5 h-3.5 text-[#33A685]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <a
                      href={item.directUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0E4032]/70 hover:text-[#33A685] p-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
          {CATEGORIES.map((category) => {
            const count =
              category === 'All Videos'
                ? VIDEO_CATALOG.length
                : VIDEO_CATALOG.filter((v) => v.category === category).length;
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0E4032] text-white shadow-sm'
                    : 'bg-white border border-[#B4D9C4] text-[#0E4032]/80 hover:bg-[#E8F5F0]'
                }`}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* 5. Video Listing Grid (Exactly 10 items displayed per page) */}
      <section className="py-6 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {paginatedVideos.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#B4D9C4] p-8 max-w-lg mx-auto">
            <Filter className="w-10 h-10 text-[#33A685] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[#0E4032] mb-1">No videos match your criteria</h3>
            <p className="text-sm text-[#0E4032]/70 mb-4">
              Try adjusting your search terms or selecting a different category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Videos');
                setSearchQuery('');
                setCurrentPage(1);
              }}
              className="text-xs font-semibold bg-[#33A685] text-white px-4 py-2 rounded-lg hover:bg-[#288f72] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {paginatedVideos.map((video, index) => {
              const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + index + 1;
              return (
                <article
                  key={video.id}
                  className="bg-white border border-[#B4D9C4] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#33A685] transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Video Embed Header */}
                  <div>
                    <div className="relative w-full aspect-video bg-black overflow-hidden group">
                      <iframe
                        src={video.embedUrl}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full border-0"
                      />

                      {/* Top Badges overlay on player */}
                      <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
                        <span className="bg-[#0E4032]/90 backdrop-blur-md text-[#F2E6A7] text-[11px] font-semibold px-2.5 py-0.5 rounded-md border border-[#33A685]/50">
                          #{globalIndex} &bull; {video.platform}
                        </span>
                        <span className="bg-[#082820]/80 backdrop-blur-md text-white text-[11px] font-mono px-2 py-0.5 rounded-md flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#33A685]" /> {video.duration}
                        </span>
                      </div>

                      {/* Expand in Theater Mode Button */}
                      <button
                        onClick={() => setActiveTheaterVideo(video)}
                        title="Open in Theater Mode"
                        className="absolute top-3 right-3 bg-[#082820]/80 hover:bg-[#0E4032] text-white p-2 rounded-lg border border-white/20 transition-all opacity-90 hover:opacity-100 cursor-pointer shadow-md"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Content Body */}
                    <div className="p-5 sm:p-6">
                      {/* Category & Speaker row */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#33A685] bg-[#E8F5F0] px-2.5 py-1 rounded-md">
                          {video.category}
                        </span>
                        <span className="text-xs text-[#0E4032]/60 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {video.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-[#0E4032] group-hover:text-[#33A685] transition-colors mb-2 leading-snug">
                        {video.title}
                      </h3>

                      {/* Speaker Badge */}
                      <div className="flex items-center gap-2.5 mb-3 text-xs text-[#0E4032]/80">
                        <div className="w-6 h-6 rounded-full bg-[#185c49] text-white font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                          {video.speaker.avatar}
                        </div>
                        <div>
                          <span className="font-semibold text-[#0E4032]">{video.speaker.name}</span>
                          <span className="text-[#0E4032]/60 ml-1.5 font-normal">
                            &bull; {video.speaker.role}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#0E4032]/75 leading-relaxed line-clamp-3 mb-4">
                        {video.description}
                      </p>

                      {/* Key Takeaways list */}
                      <div className="bg-[#F8FAF9] border border-[#B4D9C4]/40 rounded-xl p-3 mb-4">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#0E4032]/70 mb-1.5">
                          Key Architecture Insights:
                        </div>
                        <ul className="space-y-1">
                          {video.keyTakeaways.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-[11px] text-[#0E4032]/85 leading-normal">
                              <span className="text-[#33A685] font-bold">&bull;</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {video.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono bg-white border border-[#B4D9C4] text-[#0E4032]/70 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-5 sm:p-6 pt-0 border-t border-[#B4D9C4]/30 mt-4 flex items-center justify-between text-xs font-semibold">
                    <button
                      onClick={() => setActiveTheaterVideo(video)}
                      className="text-[#33A685] hover:text-[#288f72] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Expand Theater View</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopyLink(video.directUrl, video.id)}
                        title="Copy direct video link"
                        className="text-[#0E4032]/70 hover:text-[#0E4032] p-1.5 rounded-md hover:bg-[#E8F5F0] transition-colors cursor-pointer"
                      >
                        {copiedId === video.id ? (
                          <Check className="w-4 h-4 text-[#33A685]" />
                        ) : (
                          <Share2 className="w-4 h-4" />
                        )}
                      </button>

                      <a
                        href={video.directUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open external source"
                        className="text-[#0E4032]/70 hover:text-[#33A685] p-1.5 rounded-md hover:bg-[#E8F5F0] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* 6. Pagination Controls (Strict 10 items per page) */}
        {totalPages > 1 && (
          <div className="mt-12 pt-8 border-t border-[#B4D9C4]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#0E4032]/70">
              Page <span className="font-bold text-[#0E4032]">{currentPage}</span> of{' '}
              <span className="font-bold text-[#0E4032]">{totalPages}</span> &bull; 10 videos per page
            </div>

            <div className="flex items-center gap-1.5">
              {/* Previous Button */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold inline-flex items-center gap-1 transition-all ${
                  currentPage === 1
                    ? 'opacity-40 cursor-not-allowed bg-white border border-[#B4D9C4] text-[#0E4032]/50'
                    : 'bg-white border border-[#B4D9C4] text-[#0E4032] hover:bg-[#E8F5F0] hover:border-[#33A685] cursor-pointer shadow-xs'
                }`}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              {/* Numbered Page Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-9 h-9 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#0E4032] text-white shadow-md'
                        : 'bg-white border border-[#B4D9C4] text-[#0E4032] hover:bg-[#E8F5F0]'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              {/* Next Button */}
              <button
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold inline-flex items-center gap-1 transition-all ${
                  currentPage === totalPages
                    ? 'opacity-40 cursor-not-allowed bg-white border border-[#B4D9C4] text-[#0E4032]/50'
                    : 'bg-white border border-[#B4D9C4] text-[#0E4032] hover:bg-[#E8F5F0] hover:border-[#33A685] cursor-pointer shadow-xs'
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 7. Bottom Architecture Consultation CTA Section */}
      <section className="py-16 bg-[#0E4032] text-white border-t border-[#33A685]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#33A685]/20 border border-[#33A685]/50 text-xs font-semibold text-[#42CF9F] uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-[#F2E6A7]" />
            <span>Interactive Technical Briefings</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Need a Custom Architecture Walkthrough for Your Leadership Team?
          </h2>

          <p className="text-sm sm:text-base text-[#B4D9C4] max-w-2xl mx-auto mb-8 leading-relaxed">
            Our principal architects conduct private 45-minute technical teardowns customized for your enterprise stack, data compliance requirements, and business objectives.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#33A685] hover:bg-[#288f72] text-white font-semibold px-8 py-3.5 rounded-xl shadow-xl hover:shadow-[#33A685]/30 transition-all text-sm inline-flex items-center gap-2"
            >
              <span>Schedule Architecture Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="bg-transparent hover:bg-white/10 text-white border border-[#33A685]/60 font-semibold px-6 py-3.5 rounded-xl transition-all text-sm"
            >
              Explore All 32 Engineering Services
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Global Footer */}
      <Footer />

      {/* 9. Theater View Modal for Full Screen Watching */}
      {activeTheaterVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveTheaterVideo(null)}
        >
          <div
            className="bg-[#082820] border border-[#33A685]/50 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#33A685]/30 flex items-center justify-between bg-[#0E4032]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#42CF9F] bg-[#185c49] px-2.5 py-1 rounded">
                  {activeTheaterVideo.category}
                </span>
                <span className="text-xs text-[#B4D9C4]/80">
                  {activeTheaterVideo.duration} &bull; {activeTheaterVideo.platform}
                </span>
              </div>

              <button
                onClick={() => setActiveTheaterVideo(null)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video Player */}
            <div className="w-full aspect-video bg-black">
              <iframe
                src={activeTheaterVideo.embedUrl}
                title={activeTheaterVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 bg-[#082820] max-h-[30vh] overflow-y-auto">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {activeTheaterVideo.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#B4D9C4] leading-relaxed mb-4">
                {activeTheaterVideo.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-[#33A685]/30 text-xs">
                <div className="text-white/80">
                  Presented by{' '}
                  <span className="font-semibold text-[#F2E6A7]">
                    {activeTheaterVideo.speaker.name}
                  </span>{' '}
                  ({activeTheaterVideo.speaker.role})
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleCopyLink(activeTheaterVideo.directUrl, activeTheaterVideo.id)}
                    className="text-[#42CF9F] hover:text-[#F2E6A7] transition-colors inline-flex items-center gap-1 cursor-pointer font-semibold"
                  >
                    {copiedId === activeTheaterVideo.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" /> Link Copied
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" /> Share
                      </>
                    )}
                  </button>
                  <a
                    href={activeTheaterVideo.directUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B4D9C4] hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    Source <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
