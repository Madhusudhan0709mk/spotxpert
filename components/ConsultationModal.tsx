'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, Sparkles, Send, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: 'AI & Generative AI Solutions',
    budget: '$50k - $100k',
    timeline: 'Within 2-4 weeks',
    description: '',
    selectedDate: 'Tomorrow, 2:00 PM EST',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#0E4032] border border-[#33A685]/50 rounded-2xl shadow-2xl p-6 sm:p-8 text-white max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 text-[#B4D9C4] hover:text-white p-2 rounded-lg hover:bg-[#155442] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-[#33A685]/20 border border-[#33A685]/50 text-[#33A685] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="card-heading text-white">
              Consultation Scheduled!
            </h3>
            <p className="text-[#B4D9C4] text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-white">{formData.name}</span>. A Senior AI Solutions Architect from SpotXpert AI has been assigned to your request and sent a calendar invite to <span className="font-semibold text-[#F2E6A7]">{formData.email}</span>.
            </p>
            <div className="bg-[#082920] border border-[#185c49] p-4 rounded-xl max-w-md mx-auto text-left text-xs space-y-1.5 text-[#B4D9C4]">
              <div><strong className="text-white font-semibold">Service:</strong> {formData.serviceInterest}</div>
              <div><strong className="text-white font-semibold">Confirmed Slot:</strong> {formData.selectedDate}</div>
              <div><strong className="text-white font-semibold">SLA:</strong> Direct architect response within 2 hours</div>
            </div>
            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="bg-[#33A685] hover:bg-[#288f72] text-white btn-text px-8 py-3 rounded-lg transition-all cursor-pointer shadow-md"
              >
                Close &amp; Back to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0E4032] bg-[#F2E6A7] px-2.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-2 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0E4032]" />
                Direct Technical Strategy Session
              </span>
              <h2 className="card-heading text-white">
                Book A Consultation Call
              </h2>
              <p className="text-xs sm:text-sm text-[#B4D9C4] mt-1 leading-relaxed">
                Speak directly with an enterprise architect to discuss requirements, feasibility, and agile squad sizing.
              </p>
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs text-[#F2E6A7] hover:underline font-semibold mt-2"
              >
                <span>Or open full dedicated consultation booking page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#B4D9C4] uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full bg-[#082920] border border-[#1b6550] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#33A685]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#B4D9C4] uppercase tracking-wider mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@company.com"
                    className="w-full bg-[#082920] border border-[#1b6550] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#33A685]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#B4D9C4] uppercase tracking-wider mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Corp"
                    className="w-full bg-[#082920] border border-[#1b6550] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#33A685]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#B4D9C4] uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#082920] border border-[#1b6550] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#33A685]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#B4D9C4] uppercase tracking-wider mb-1.5">
                    Area of Interest
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full bg-[#082920] border border-[#1b6550] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#33A685]"
                  >
                    <option>AI &amp; Generative AI Solutions</option>
                    <option>Digital Product Engineering</option>
                    <option>Cloud Migration &amp; DevOps</option>
                    <option>Dedicated Agile Pod Staffing</option>
                    <option>Enterprise Modernization</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#B4D9C4] uppercase tracking-wider mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-[#082920] border border-[#1b6550] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#33A685]"
                  >
                    <option>$25k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k - $250k</option>
                    <option>$250k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#B4D9C4] uppercase tracking-wider mb-1.5">
                  Select Preferred Consultation Time
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    'Tomorrow, 10:00 AM EST',
                    'Tomorrow, 2:00 PM EST',
                    'Thursday, 11:30 AM EST',
                  ].map((slot, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFormData({ ...formData, selectedDate: slot })}
                      className={`text-xs py-2 px-3 rounded-lg border text-center transition-colors cursor-pointer ${
                        formData.selectedDate === slot
                          ? 'border-[#33A685] bg-[#33A685]/25 text-[#F2E6A7] font-bold'
                          : 'border-[#1b6550] bg-[#082920] text-[#B4D9C4] hover:text-white'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#B4D9C4] uppercase tracking-wider mb-1.5">
                  Brief Project Overview (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Share any key deliverables, tech stack preferences, or goals..."
                  className="w-full bg-[#082920] border border-[#1b6550] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#33A685]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#B4D9C4]">
                  <ShieldCheck className="w-4 h-4 text-[#F2E6A7]" />
                  <span>NDA signed upon request. 100% confidential.</span>
                </div>

                <button
                  type="submit"
                  className="bg-[#33A685] hover:bg-[#288f72] text-white btn-text px-7 py-3 rounded-lg flex items-center gap-2 shadow-lg shadow-[#33A685]/30 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Consultation</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
