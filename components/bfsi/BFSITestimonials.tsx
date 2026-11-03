'use client';

import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function BFSITestimonials() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'billing' | 'modernization' | 'data'>('all');
  const [currentPage, setCurrentPage] = useState(0);

  const testimonials = [
    {
      id: 'privilee',
      category: 'billing',
      categoryLabel: 'Billing & Subscription Architecture',
      quote:
        'SpotXpert AI rearchitected and modernized our subscription management & billing platform as part of the multi-phase development initiative. The team quickly understood our business requirements and delivered a modern, modular architecture aligned with our scaling needs. Without disrupting our operational workflows, SpotXpert AI handled complex data migration with precision and supported our legacy modernization journey with seamless ERP integrations.',
      author: 'Robel Yemane',
      role: 'Head of Engineering',
      company: 'Privilee',
      rating: 5,
    },
    {
      id: 'datamark',
      category: 'modernization',
      categoryLabel: 'System Modernization & Cloud',
      quote:
        'SpotXpert AI was an invaluable partner in our system modernization, moving beyond analysis to deliver true product engineering advisory. They analyzed complex legacy workflows into clear, validated, developer-ready user stories. The clarity and strategic consistency they introduced was foundational, directly influencing our cloud architecture and product design. Their work effectively accelerated our discovery phase and time to market.',
      author: 'Director of Engineering',
      role: 'Enterprise Technology Lead',
      company: 'Datamark',
      rating: 5,
    },
    {
      id: 'bon-appetit',
      category: 'modernization',
      categoryLabel: 'Cross-Platform App Development',
      quote:
        'After researching and qualifying several software development service options for the development of a cross-platform application, we fortunately selected SpotXpert AI as our partner. This turned out to be a very good decision overall, as their performance has been outstanding. The complete engagement from the SpotXpert AI staff is remarkable. Their team diligently assesses and executes in a very competent manner.',
      author: 'Sonny Cutwright',
      role: 'Operations Manager',
      company: 'Bon Appetit',
      rating: 5,
    },
    {
      id: 'preclinical',
      category: 'data',
      categoryLabel: 'Data Extraction & Analytics',
      quote:
        'We partnered with SpotXpert AI to centralize our preclinical research data. They understood technical data challenges and scientific workflows. They helped us build a platform for data ingestion, OCR-based extraction, standardization, analysis, and visualization. Our researchers can use natural language or a visual query builder to analyze complex datasets, while real-time charts and statistical outputs speed up discovery. We liked the ability of the team at SpotXpert AI to combine strong data engineering capabilities with practical analytics experience.',
      author: 'Data and Analytics Manager',
      role: 'Analytics Operations Lead',
      company: 'Preclinical Research Analytics Platform',
      rating: 5,
    },
    {
      id: 'evergen',
      category: 'billing',
      categoryLabel: 'Field Operations & Invoicing',
      quote:
        'We’re very satisfied with SpotXpert AI as our engineering partner. We wanted a platform to support the full lifecycle of our field inventory and ease operations for field reps, hospitals and analysts. They translated our complex requirements into an easy-to-use solution and handled development from UI/UX to backend and DevOps. The app works seamlessly across user groups and has a first-class, consistent and simple interface.',
      author: 'Brad Spataro',
      role: 'Commercial Operations Manager',
      company: 'Evergen',
      rating: 5,
    },
    {
      id: 'eye-recommend',
      category: 'modernization',
      categoryLabel: 'Digital Infrastructure Overhaul',
      quote:
        'SpotXpert AI led the discovery phase for our digital infrastructure overhaul, bringing a mix of deep technical expertise and a truly collaborative spirit. They took our complex requirements and turned them into a solid product blueprint and a clear, prioritized roadmap. Everything stayed on track thanks to their structured project management. The level of strategy and architecture they brought to the table gave us the certainty we needed to take the next steps.',
      author: 'Department Manager',
      role: 'Product Strategy Lead',
      company: 'Eye Recommend',
      rating: 5,
    },
    {
      id: 'community-services',
      category: 'modernization',
      categoryLabel: 'Cloud Migration & Resiliency',
      quote:
        'The cloud migration was a great success. Very satisfactory, seamless and increased our productivity. The most impressive part about SpotXpert AI is their dynamic and well-versed team. Anytime there was a concern, we were able to communicate and have it rectified immediately.',
      author: 'Jim deVarennes',
      role: 'President',
      company: 'Trusted Community Services Organization',
      rating: 5,
    },
    {
      id: 'patient-data',
      category: 'data',
      categoryLabel: 'Data Pipeline & Cloud Storage',
      quote:
        'Our overall experience with SpotXpert AI was very positive. They worked as an end-to-end technology partner and integrated well with our engineering and operations teams. This was not just about building a mobile app; it also required careful thinking around data quality, workflows, and long-term system design. SpotXpert AI brought a practical, product-minded approach and designed an Azure Data Factory pipeline to clean and organize data before it reached the app and admin dashboard.',
      author: 'Marketing & Digital Manager',
      role: 'Digital Platform Lead',
      company: 'Patient-Facing Digital Application & Data Platform',
      rating: 5,
    },
  ];

  const filtered = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const currentItems = filtered.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handleCategoryChange = (cat: 'all' | 'billing' | 'modernization' | 'data') => {
    setActiveCategory(cat);
    setCurrentPage(0);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F2F2F2] border-b border-[#B4D9C4]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[#33A685] mb-2.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#33A685] text-[#33A685]" />
              ))}
              <span className="text-xs font-semibold text-[#0E4032] ml-2">Verified Client Reviews</span>
            </div>
            <h2 className="section-heading text-[#0E4032]">
              What Enterprise Leaders Say About Our Delivery
            </h2>
            <p className="body-text text-[#0E4032]/80 mt-2 max-w-xl">
              Authentic feedback from heads of engineering, product managers, and executive leaders who rely on our squads.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Reviews (8)' },
              { id: 'billing', label: 'Billing & Fintech' },
              { id: 'modernization', label: 'Modernization' },
              { id: 'data', label: 'Data & Analytics' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleCategoryChange(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#33A685] text-white shadow-xs'
                    : 'bg-white border border-[#B4D9C4] text-[#0E4032] hover:bg-[#B4D9C4]/25'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 min-h-[380px]">
          {currentItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#B4D9C4] rounded-2xl p-7 flex flex-col justify-between shadow-md relative group hover:border-[#33A685] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold text-[#0E4032] bg-[#B4D9C4]/35 px-2.5 py-0.5 rounded border border-[#B4D9C4] uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                  <div className="flex items-center gap-0.5 text-[#F2E6A7]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#33A685] text-[#33A685]" />
                    ))}
                  </div>
                </div>

                <Quote className="w-7 h-7 text-[#33A685]/35 mb-3" />
                
                <p className="text-sm text-[#0E4032]/85 leading-[1.7] italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#B4D9C4]/60">
                <div className="font-semibold text-[#0E4032] text-sm">{item.author}</div>
                <div className="text-xs text-[#33A685] font-medium">{item.role}</div>
                <div className="text-xs text-[#0E4032]/75 mt-0.5 font-normal">{item.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#B4D9C4]/60">
            <div className="text-xs text-[#0E4032]/75 font-medium">
              Showing {currentPage * itemsPerPage + 1} to {Math.min((currentPage + 1) * itemsPerPage, filtered.length)} of {filtered.length} reviews
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                disabled={currentPage === 0}
                className="p-2 rounded-lg bg-white border border-[#B4D9C4] text-[#0E4032] disabled:opacity-40 hover:bg-[#B4D9C4]/30 cursor-pointer transition-all"
                aria-label="Previous reviews page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="text-xs font-semibold px-2 text-[#0E4032]">
                Page {currentPage + 1} of {totalPages}
              </div>

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
                disabled={currentPage === totalPages - 1}
                className="p-2 rounded-lg bg-white border border-[#B4D9C4] text-[#0E4032] disabled:opacity-40 hover:bg-[#B4D9C4]/30 cursor-pointer transition-all"
                aria-label="Next reviews page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
