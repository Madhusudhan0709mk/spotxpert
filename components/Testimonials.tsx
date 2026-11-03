'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote:
        'Automate property management workflows, streamline maintenance requests, and improve operational visibility with AI-powered integrations.',
      author: 'Property Management',
      role: 'Industry Use Case',
      company: 'AppFolio Ecosystem',
      rating: 5,
    },
    {
      quote:
        'Connect legal intake, document processing, and matter management workflows to reduce repetitive administrative work.',
      author: 'Legal Technology',
      role: 'Industry Use Case',
      company: 'Clio Ecosystem',
      rating: 5,
    },
    {
      quote:
        'Improve construction project coordination with automated reporting, document workflows, and operational data integrations.',
      author: 'Construction Operations',
      role: 'Industry Use Case',
      company: 'Procore Ecosystem',
      rating: 5,
    },
    {
      quote:
        'Automate bookkeeping ledger reconciliation, transaction categorization, and financial reporting workflows with zero data discrepancy.',
      author: 'Accounting & Bookkeeping Operations',
      role: 'Industry Use Case',
      company: 'Bench Ecosystem',
      rating: 5,
    },
    {
      quote:
        'Streamline accounts payable, 2-way and 3-way invoice matching, and payment execution workflows with AI-driven compliance.',
      author: 'Financial Operations & AP',
      role: 'Industry Use Case',
      company: 'AvidXchange Ecosystem',
      rating: 5,
    },
    {
      quote:
        'Unify international customs documentation, automated multi-modal shipment tracking, and ocean/air freight operational visibility.',
      author: 'Global Logistics & Supply Chain',
      role: 'Industry Use Case',
      company: 'Flexport Ecosystem',
      rating: 5,
    },
  ];

  return (
    <section id="why-spotxpert" className="py-20 sm:py-28 bg-[#F2F2F2] border-t border-[#B4D9C4]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-[#33A685] mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#33A685] text-[#33A685]" />
            ))}
          </div>
          <h2 className="section-heading text-[#0E4032]">
            Loved by Engineering Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#B4D9C4] rounded-2xl p-7 flex flex-col justify-between shadow-md relative"
            >
              <div>
                <Quote className="w-8 h-8 text-[#33A685]/40 mb-4" />
                <p className="body-text text-[#0E4032]/85 italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#B4D9C4]/60">
                <div className="font-semibold text-[#0E4032] text-sm">{rev.author}</div>
                <div className="text-xs text-[#33A685] font-medium">{rev.role}</div>
                <div className="text-xs text-[#0E4032]/75 mt-0.5 font-normal">{rev.company}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
