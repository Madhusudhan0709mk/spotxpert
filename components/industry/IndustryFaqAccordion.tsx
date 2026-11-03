'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle, ArrowUpRight } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface IndustryFaqAccordionProps {
  faqs: FaqItem[];
  industryName: string;
  onOpenConsultation: () => void;
}

export default function IndustryFaqAccordion({
  faqs,
  industryName,
  onOpenConsultation,
}: IndustryFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F2F2F2] border-b border-[#B4D9C4]/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Frames 69s - 71s) */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032] mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#33A685]" />
            Architecture &amp; Security FAQs
          </div>
          <h2 className="section-heading text-[#0E4032]">
            Frequently asked questions
          </h2>
          <p className="body-text text-[#0E4032]/80 mt-3 text-sm sm:text-base">
            Everything your engineering and operations teams need to know about partnering with SpotXpert AI on {industryName} solutions.
          </p>
        </div>

        {/* Accordion Stack (Frames 72s - 75s) */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#B4D9C4] rounded-2xl overflow-hidden shadow-xs transition-all duration-200 hover:border-[#33A685]"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="card-heading text-[#0E4032] text-sm sm:text-base font-bold pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[#0E4032] text-white'
                        : 'bg-[#B4D9C4]/40 text-[#0E4032]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed border-t border-[#B4D9C4]/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-[#B4D9C4] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-[#0E4032]">
              Have a custom architecture or compliance inquiry?
            </div>
            <div className="text-xs text-[#0E4032]/75 mt-0.5">
              Our principal software architects can review your existing ERP, data retention, and custom software requirements.
            </div>
          </div>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#33A685] hover:text-[#288f72] transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>Speak with an engineer</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
