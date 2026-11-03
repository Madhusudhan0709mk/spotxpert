'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Building2,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Send,
  FileText,
  Lock,
  Users,
  Award,
  Globe
} from 'lucide-react';

function ContactContent() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('type') === 'message' ? 'message' : 'consultation';
  const initialService = searchParams.get('service') || 'AI & Generative AI Solutions';

  const [activeTab, setActiveTab] = useState<'consultation' | 'message'>(initialTab);
  const [isConsultationSubmitted, setIsConsultationSubmitted] = useState(false);
  const [isMessageSubmitted, setIsMessageSubmitted] = useState(false);

  // Consultation form state
  const [consultationData, setConsultationData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceInterest: initialService,
    budget: '$50k - $150k',
    timeline: 'Within 2-4 weeks',
    selectedDate: 'Tomorrow (Oct 22)',
    selectedTime: '2:00 PM EST',
    timezone: 'US Eastern (EST)',
    description: '',
    needNda: true,
  });

  // Direct message form state
  const [messageData, setMessageData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: 'New Digital Product or AI Project',
    message: '',
    needNda: true,
  });

  // Interactive Date Slots for Consultation
  const availableDates = [
    { day: 'Tomorrow', date: 'Oct 22', label: 'Tomorrow (Oct 22)' },
    { day: 'Wednesday', date: 'Oct 23', label: 'Wednesday (Oct 23)' },
    { day: 'Thursday', date: 'Oct 24', label: 'Thursday (Oct 24)' },
    { day: 'Friday', date: 'Oct 25', label: 'Friday (Oct 25)' },
    { day: 'Next Monday', date: 'Oct 28', label: 'Monday (Oct 28)' },
  ];

  const availableTimes = [
    '10:00 AM',
    '11:30 AM',
    '2:00 PM',
    '3:30 PM',
    '5:00 PM',
  ];

  const serviceOptions = [
    'AI & Generative AI Solutions',
    'Enterprise AI Adoption & ATOM Framework',
    'Digital Product Engineering',
    'Cloud & DevOps Architecture',
    'Legacy Modernization (Microservices & Kafka)',
    'Dedicated Agile Pod Sizing',
    'Security, Compliance & Architecture Audit',
  ];

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Is the 30-minute architecture consultation really free?',
      a: 'Yes, completely free with zero sales pitch pressure. You will be speaking directly with a Principal Solutions Architect who will review your technical requirements, feasibility runway, and agile squad sizing.'
    },
    {
      q: 'Can we sign a Non-Disclosure Agreement (NDA) before the call?',
      a: 'Absolutely. We routinely sign bilateral mutual NDAs prior to strategy sessions. You can send us your standard enterprise NDA or request ours—our team executes them within 2 business hours.'
    },
    {
      q: 'Who will be attending the consultation call from SpotXpert?',
      a: 'You will meet with a practicing Senior or Principal Solutions Architect with deep domain expertise in your industry, accompanied by an Agile Delivery Lead. We do not field commissioned sales intermediaries.'
    },
    {
      q: 'How fast can a dedicated SpotXpert agile pod be spun up?',
      a: 'Following technical alignment and sprint zero onboarding, dedicated pods can kick off sprint delivery in as few as 5 to 10 business days, complete with lead architects, full-stack developers, and automated CI/CD.'
    },
    {
      q: 'Who owns the intellectual property (IP) and code created during engagements?',
      a: 'You do—100%. All architectural blueprints, repository commits, fine-tuned model checkpoints, and proprietary documentation belong exclusively to your organization with zero vendor lock-in.'
    }
  ];

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConsultationSubmitted(true);
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsMessageSubmitted(true);
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Breadcrumbs & Trust Badge */}
      <section className="pt-24 sm:pt-28 pb-4 bg-white border-b border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs text-[#0E4032]/70 font-medium">
            <Link href="/" className="hover:text-[#33A685]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#33A685]" />
            <span className="text-[#0E4032] font-semibold">Contact &amp; Consultation</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4D9C4]/30 border border-[#B4D9C4] text-[11px] font-semibold text-[#0E4032]">
            <Clock className="w-3.5 h-3.5 text-[#33A685]" />
            <span>Guaranteed Architect Response Within 2 Hours</span>
          </div>
        </div>
      </section>

      {/* 3. Hero Header */}
      <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-[#B4D9C4]/60 bg-gradient-to-b from-white via-[#F2F2F2] to-[#F2F2F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#33A685]" />
            Direct Technical Engagement
          </span>

          <h1 className="hero-heading text-3xl sm:text-5xl font-bold text-[#0E4032] tracking-tight leading-[1.14] mt-4 mb-4">
            Speak Directly With a Principal Solutions Architect
          </h1>

          <p className="body-text text-[#0E4032]/80 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-8 font-normal">
            Discuss your AI transformation, cloud modernization, or dedicated pod sizing. Book a guaranteed 30-minute technical session or send your engineering brief.
          </p>

          {/* Tab Selector Pills */}
          <div className="inline-flex items-center p-1.5 bg-white border border-[#B4D9C4] rounded-2xl shadow-sm gap-2">
            <button
              onClick={() => setActiveTab('consultation')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'consultation'
                  ? 'bg-[#0E4032] text-white shadow-md'
                  : 'text-[#0E4032]/80 hover:text-[#0E4032] hover:bg-[#B4D9C4]/20'
              }`}
            >
              <Calendar className="w-4 h-4 text-[#33A685]" />
              <span>Book Architecture Call</span>
            </button>

            <button
              onClick={() => setActiveTab('message')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'message'
                  ? 'bg-[#0E4032] text-white shadow-md'
                  : 'text-[#0E4032]/80 hover:text-[#0E4032] hover:bg-[#B4D9C4]/20'
              }`}
            >
              <Send className="w-4 h-4 text-[#33A685]" />
              <span>Send Enterprise RFP / Inquiry</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. Main Form & Sidebar Section */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Forms (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#B4D9C4] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
              
              {/* Decorative Brand Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0E4032] via-[#33A685] to-[#42CF9F]" />

              {activeTab === 'consultation' ? (
                /* ================= TAB 1: CONSULTATION BOOKING ================= */
                <div>
                  {isConsultationSubmitted ? (
                    <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                      <div className="w-20 h-20 bg-[#33A685]/15 border border-[#33A685]/40 text-[#33A685] rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>

                      <span className="text-xs font-bold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
                        Confirmed &amp; Dispatched
                      </span>

                      <h2 className="text-2xl sm:text-3xl font-bold text-[#0E4032]">
                        Consultation Session Reserved!
                      </h2>

                      <p className="text-sm sm:text-base text-[#0E4032]/80 max-w-lg mx-auto leading-relaxed">
                        Thank you, <span className="font-bold text-[#0E4032]">{consultationData.name}</span>. A calendar invitation with Google Meet link has been dispatched to <span className="font-bold text-[#33A685]">{consultationData.email}</span>.
                      </p>

                      {/* Confirmed Details Card */}
                      <div className="bg-[#F2F2F2] border border-[#B4D9C4] p-5 rounded-2xl max-w-md mx-auto text-left space-y-2.5 text-xs sm:text-sm text-[#0E4032]">
                        <div className="flex items-center justify-between border-b border-[#B4D9C4]/60 pb-2">
                          <span className="text-[#0E4032]/70 font-medium">Reserved Time:</span>
                          <span className="font-bold text-[#0E4032]">{consultationData.selectedDate} at {consultationData.selectedTime} ({consultationData.timezone})</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-[#B4D9C4]/60 pb-2">
                          <span className="text-[#0E4032]/70 font-medium">Focus Area:</span>
                          <span className="font-bold text-[#0E4032]">{consultationData.serviceInterest}</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-[#B4D9C4]/60 pb-2">
                          <span className="text-[#0E4032]/70 font-medium">Host:</span>
                          <span className="font-bold text-[#33A685]">Senior Solutions Architect Pod</span>
                        </div>
                        <div className="flex items-center justify-between pt-1">
                          <span className="text-[#0E4032]/70 font-medium">NDA Status:</span>
                          <span className="font-bold text-[#0E4032]">{consultationData.needNda ? 'Mutual NDA Requested & Executed' : 'Standard Confidentiality'}</span>
                        </div>
                      </div>

                      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                        <button
                          onClick={() => setIsConsultationSubmitted(false)}
                          className="bg-[#0E4032] hover:bg-[#155442] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all cursor-pointer shadow-sm"
                        >
                          Book Another Time Slot
                        </button>
                        <Link
                          href="/"
                          className="border border-[#B4D9C4] hover:border-[#33A685] text-[#0E4032] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all bg-white"
                        >
                          Return to Home
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E4032] mb-2">
                          Book a 30-Minute Architecture Session
                        </h2>
                        <p className="text-xs sm:text-sm text-[#0E4032]/75 leading-relaxed font-normal">
                          Select your preferred date, time slot, and engineering practice to instantly align our lead architects with your goals.
                        </p>
                      </div>

                      <form onSubmit={handleConsultationSubmit} className="space-y-6">
                        
                        {/* 1. Date Selector Cards */}
                        <div>
                          <label className="block text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-2.5">
                            1. Select Preferred Date *
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                            {availableDates.map((item) => {
                              const isSelected = consultationData.selectedDate === item.label;
                              return (
                                <button
                                  type="button"
                                  key={item.label}
                                  onClick={() => setConsultationData({ ...consultationData, selectedDate: item.label })}
                                  className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                                    isSelected
                                      ? 'bg-[#0E4032] text-white border-[#0E4032] shadow-sm'
                                      : 'bg-[#F2F2F2] border-[#B4D9C4] text-[#0E4032] hover:border-[#33A685]'
                                  }`}
                                >
                                  <span className={`text-[10px] font-semibold uppercase ${isSelected ? 'text-[#B4D9C4]' : 'text-[#0E4032]/60'}`}>
                                    {item.day}
                                  </span>
                                  <span className="text-sm font-extrabold mt-1">
                                    {item.date}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* 2. Time Slot & Timezone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-2">
                              2. Select Time Slot *
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                              {availableTimes.map((time) => {
                                const isSelected = consultationData.selectedTime.startsWith(time);
                                return (
                                  <button
                                    type="button"
                                    key={time}
                                    onClick={() => setConsultationData({ ...consultationData, selectedTime: `${time} EST` })}
                                    className={`py-2 px-2.5 rounded-xl text-center text-xs font-bold border transition-all cursor-pointer ${
                                      isSelected
                                        ? 'bg-[#33A685] text-white border-[#33A685] shadow-xs'
                                        : 'bg-white border-[#B4D9C4] text-[#0E4032] hover:border-[#33A685]'
                                    }`}
                                  >
                                    {time}
                                  </button>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-2">
                              Your Preferred Timezone *
                            </label>
                            <select
                              value={consultationData.timezone}
                              onChange={(e) => setConsultationData({ ...consultationData, timezone: e.target.value })}
                              className="w-full bg-[#F2F2F2] border border-[#B4D9C4] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-[#0E4032] font-medium focus:outline-none focus:border-[#33A685]"
                            >
                              <option value="US Eastern (EST)">US Eastern (EST / New York)</option>
                              <option value="US Central (CST)">US Central (CST / Chicago)</option>
                              <option value="US Pacific (PST)">US Pacific (PST / San Francisco)</option>
                              <option value="Europe (GMT / London)">Europe (GMT / London)</option>
                              <option value="Europe Central (CET)">Europe Central (CET / Berlin)</option>
                              <option value="India Standard (IST)">India Standard (IST / Bengaluru)</option>
                              <option value="Singapore (SGT)">Singapore (SGT)</option>
                            </select>
                          </div>
                        </div>

                        {/* 3. Name & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-1.5">
                              Your Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={consultationData.name}
                              onChange={(e) => setConsultationData({ ...consultationData, name: e.target.value })}
                              placeholder="e.g. David Vance"
                              className="w-full bg-[#F2F2F2] border border-[#B4D9C4] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#0E4032] placeholder-[#0E4032]/40 focus:outline-none focus:border-[#33A685] transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-1.5">
                              Work Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              value={consultationData.email}
                              onChange={(e) => setConsultationData({ ...consultationData, email: e.target.value })}
                              placeholder="david@company.com"
                              className="w-full bg-[#F2F2F2] border border-[#B4D9C4] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#0E4032] placeholder-[#0E4032]/40 focus:outline-none focus:border-[#33A685] transition-colors"
                            />
                          </div>
                        </div>

                        {/* 4. Company & Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-1.5">
                              Company / Organization *
                            </label>
                            <input
                              type="text"
                              required
                              value={consultationData.company}
                              onChange={(e) => setConsultationData({ ...consultationData, company: e.target.value })}
                              placeholder="e.g. Enterprise Logistics Corp"
                              className="w-full bg-[#F2F2F2] border border-[#B4D9C4] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#0E4032] placeholder-[#0E4032]/40 focus:outline-none focus:border-[#33A685] transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-1.5">
                              Direct Phone / WhatsApp
                            </label>
                            <input
                              type="tel"
                              value={consultationData.phone}
                              onChange={(e) => setConsultationData({ ...consultationData, phone: e.target.value })}
                              placeholder="+1 (555) 000-0000"
                              className="w-full bg-[#F2F2F2] border border-[#B4D9C4] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#0E4032] placeholder-[#0E4032]/40 focus:outline-none focus:border-[#33A685] transition-colors"
                            />
                          </div>
                        </div>

                        {/* 5. Service Practice & Budget */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-1.5">
                              Service Practice of Interest *
                            </label>
                            <select
                              value={consultationData.serviceInterest}
                              onChange={(e) => setConsultationData({ ...consultationData, serviceInterest: e.target.value })}
                              className="w-full bg-[#F2F2F2] border border-[#B4D9C4] rounded-xl px-3.5 py-3 text-xs sm:text-sm text-[#0E4032] font-medium focus:outline-none focus:border-[#33A685]"
                            >
                              {serviceOptions.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-1.5">
                              Estimated Project Budget
                            </label>
                            <select
                              value={consultationData.budget}
                              onChange={(e) => setConsultationData({ ...consultationData, budget: e.target.value })}
                              className="w-full bg-[#F2F2F2] border border-[#B4D9C4] rounded-xl px-3.5 py-3 text-xs sm:text-sm text-[#0E4032] font-medium focus:outline-none focus:border-[#33A685]"
                            >
                              <option value="$10K+">$10,000+</option>
                              <option value="$25k+">$25,000+</option>
                              <option value="<$50k">&lt; $50,000</option>
                              <option value="$50k - $150k">$50,000 – $150,000</option>
                              <option value="$150k - $500k">$150,000 – $500,000</option>
                              <option value="$500k+">$500,000+ (Multi-Pod Enterprise Scale)</option>
                            </select>
                          </div>
                        </div>

                        {/* 6. Project Brief */}
                        <div>
                          <label className="block text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-1.5">
                            Brief Overview of Goals / Challenge (Optional)
                          </label>
                          <textarea
                            rows={3}
                            value={consultationData.description}
                            onChange={(e) => setConsultationData({ ...consultationData, description: e.target.value })}
                            placeholder="Tell us about your system architecture, legacy constraints, or target deployment timeline..."
                            className="w-full bg-[#F2F2F2] border border-[#B4D9C4] rounded-xl p-3.5 text-xs sm:text-sm text-[#0E4032] placeholder-[#0E4032]/40 focus:outline-none focus:border-[#33A685] transition-colors"
                          />
                        </div>

                        {/* 7. Mutual NDA Checkbox */}
                        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#B4D9C4]/20 border border-[#B4D9C4]/60">
                          <input
                            type="checkbox"
                            id="needNda"
                            checked={consultationData.needNda}
                            onChange={(e) => setConsultationData({ ...consultationData, needNda: e.target.checked })}
                            className="w-4 h-4 text-[#33A685] rounded border-[#B4D9C4] focus:ring-[#33A685]"
                          />
                          <label htmlFor="needNda" className="text-xs text-[#0E4032] font-semibold cursor-pointer select-none">
                            Execute Mutual Non-Disclosure Agreement (NDA) before session
                          </label>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          className="w-full bg-[#0E4032] hover:bg-[#155442] text-white font-bold py-4 px-6 rounded-2xl text-sm sm:text-base transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                        >
                          <span>Confirm &amp; Book Technical Consultation</span>
                          <ArrowRight className="w-4 h-4 text-[#33A685]" />
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              ) : (
                /* ================= TAB 2: DIRECT MESSAGE / RFP ================= */
                <div>
                  {isMessageSubmitted ? (
                    <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                      <div className="w-20 h-20 bg-[#33A685]/15 border border-[#33A685]/40 text-[#33A685] rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>

                      <span className="text-xs font-bold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
                        Inquiry Received (Ticket #SPX-8924)
                      </span>

                      <h2 className="text-2xl sm:text-3xl font-bold text-[#0E4032]">
                        Thank You, Your Message Is With Our Team
                      </h2>

                      <p className="text-sm sm:text-base text-[#0E4032]/80 max-w-lg mx-auto leading-relaxed">
                        A dedicated technical lead has received your brief. We will review your architecture requirements and reach back to <span className="font-bold text-[#33A685]">{messageData.email}</span> within 2 business hours.
                      </p>

                      <div className="pt-4 flex items-center justify-center gap-3">
                        <button
                          onClick={() => setIsMessageSubmitted(false)}
                          className="bg-[#0E4032] hover:bg-[#155442] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all cursor-pointer shadow-sm"
                        >
                          Submit Another Inquiry
                        </button>
                        <Link
                          href="/resources/case-studies"
                          className="border border-[#B4D9C4] hover:border-[#33A685] text-[#0E4032] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all bg-white"
                        >
                          Explore Client Case Studies
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0E4032] mb-2">
                          Send Us Your Engineering RFP or Project Brief
                        </h2>
                        <p className="text-xs sm:text-sm text-[#0E4032]/75 leading-relaxed font-normal">
                          Have an architecture specification, RFP, or custom inquiry? Share the details and our engineering solutions directors will respond with a tailored assessment.
                        </p>
                      </div>

                      <form onSubmit={handleMessageSubmit} className="space-y-5">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-1.5">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={messageData.name}
                              onChange={(e) => setMessageData({ ...messageData, name: e.target.value })}
                              placeholder="e.g. Alex Mercer"
                              className="w-full bg-[#F2F2F2] border border-[#B4D9C4] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#0E4032] placeholder-[#0E4032]/40 focus:outline-none focus:border-[#33A685] transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-1.5">
                              Work Email *
                            </label>
                            <input
                              type="email"
                              required
                              value={messageData.email}
                              onChange={(e) => setMessageData({ ...messageData, email: e.target.value })}
                              placeholder="alex@enterprise.com"
                              className="w-full bg-[#F2F2F2] border border-[#B4D9C4] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#0E4032] placeholder-[#0E4032]/40 focus:outline-none focus:border-[#33A685] transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-1.5">
                              Company Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={messageData.company}
                              onChange={(e) => setMessageData({ ...messageData, company: e.target.value })}
                              placeholder="e.g. Acme Corporation"
                              className="w-full bg-[#F2F2F2] border border-[#B4D9C4] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#0E4032] placeholder-[#0E4032]/40 focus:outline-none focus:border-[#33A685] transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-1.5">
                              Inquiry Category
                            </label>
                            <select
                              value={messageData.inquiryType}
                              onChange={(e) => setMessageData({ ...messageData, inquiryType: e.target.value })}
                              className="w-full bg-[#F2F2F2] border border-[#B4D9C4] rounded-xl px-3.5 py-3 text-xs sm:text-sm text-[#0E4032] font-medium focus:outline-none focus:border-[#33A685]"
                            >
                              <option value="New Digital Product or AI Project">New Digital Product or AI Project</option>
                              <option value="Dedicated Agile Pod Engagement">Dedicated Agile Pod Engagement</option>
                              <option value="Architecture Review & Tech Due Diligence">Architecture Review &amp; Tech Due Diligence</option>
                              <option value="Strategic Partnership">Strategic Partnership</option>
                              <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-1.5">
                            Project Scope &amp; Message *
                          </label>
                          <textarea
                            rows={5}
                            required
                            value={messageData.message}
                            onChange={(e) => setMessageData({ ...messageData, message: e.target.value })}
                            placeholder="Describe your goals, tech stack preferences, current system bottlenecks, and timeline expectations..."
                            className="w-full bg-[#F2F2F2] border border-[#B4D9C4] rounded-xl p-3.5 text-xs sm:text-sm text-[#0E4032] placeholder-[#0E4032]/40 focus:outline-none focus:border-[#33A685] transition-colors"
                          />
                        </div>

                        <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#B4D9C4]/20 border border-[#B4D9C4]/60">
                          <input
                            type="checkbox"
                            id="msgNda"
                            checked={messageData.needNda}
                            onChange={(e) => setMessageData({ ...messageData, needNda: e.target.checked })}
                            className="w-4 h-4 text-[#33A685] rounded border-[#B4D9C4] focus:ring-[#33A685]"
                          />
                          <label htmlFor="msgNda" className="text-xs text-[#0E4032] font-semibold cursor-pointer select-none">
                            Execute Mutual Non-Disclosure Agreement (NDA) with our legal counsel
                          </label>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-[#0E4032] hover:bg-[#155442] text-white font-bold py-4 px-6 rounded-2xl text-sm sm:text-base transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4 text-[#33A685]" />
                          <span>Submit Enterprise Inquiry</span>
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Direct Channels & Enterprise Assurances (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Engineering Hotlines */}
            <div className="bg-[#0E4032] text-white border border-[#33A685]/40 rounded-3xl p-6 sm:p-8 shadow-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#F2E6A7] bg-white/10 px-2.5 py-1 rounded-full inline-block mb-3">
                Direct Channels
              </span>

              <h3 className="text-xl font-bold mb-4">
                Enterprise Engineering Desks
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href="mailto:architecture@spotxpert.ai"
                  className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <Mail className="w-5 h-5 text-[#33A685] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Architecture Inquiries</div>
                    <div className="text-[#B4D9C4] text-xs">architecture@spotxpert.ai</div>
                    <div className="text-[10px] text-white/60 mt-0.5">SLA: &lt; 2 business hours</div>
                  </div>
                </a>

                <a
                  href="tel:+15128872910"
                  className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <Phone className="w-5 h-5 text-[#33A685] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">United States Hotline</div>
                    <div className="text-[#B4D9C4] text-xs">+1 (512) 887-2910</div>
                    <div className="text-[10px] text-white/60 mt-0.5">Mon–Fri: 8:00 AM – 7:00 PM EST</div>
                  </div>
                </a>

                <a
                  href="mailto:partnerships@spotxpert.ai"
                  className="flex items-start gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <Globe className="w-5 h-5 text-[#33A685] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Alliances &amp; Cloud Partners</div>
                    <div className="text-[#B4D9C4] text-xs">partnerships@spotxpert.ai</div>
                  </div>
                </a>
              </div>

              {/* Global Engineering Hubs */}
              <div className="mt-8 pt-6 border-t border-white/15">
                <h4 className="text-xs font-semibold text-[#B4D9C4] uppercase tracking-wider mb-3">
                  Global Engineering Locations
                </h4>
                <div className="space-y-3 text-xs text-[#B4D9C4]/90">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#33A685] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Bengaluru, India (Global HQ &amp; Innovation Lab)</strong>
                      <p className="text-[11px] text-[#B4D9C4]/70">SpotXpert Tech Park, Outer Ring Road, Bengaluru 560103</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#33A685] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Austin, TX (US Regional Office)</strong>
                      <p className="text-[11px] text-[#B4D9C4]/70">111 Congress Ave, Suite 500, Austin, TX 78701</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Trust & Compliance Guarantees */}
            <div className="bg-white border border-[#B4D9C4] rounded-3xl p-6 sm:p-7 shadow-xs">
              <h4 className="text-xs font-bold text-[#0E4032] uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#33A685]" />
                SpotXpert Enterprise Engagement Standard
              </h4>

              <div className="space-y-3.5 text-xs text-[#0E4032]/85">
                <div className="flex items-start gap-2.5">
                  <Lock className="w-4 h-4 text-[#33A685] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0E4032]">100% IP &amp; Code Ownership</strong>
                    <p className="text-[11px] text-[#0E4032]/70 leading-normal">You own every line of code, Docker file, and architectural diagram. Zero vendor retention.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <FileText className="w-4 h-4 text-[#33A685] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0E4032]">Pre-Signed Mutual NDA</strong>
                    <p className="text-[11px] text-[#0E4032]/70 leading-normal">Your proprietary business logic and trade secrets are strictly protected before any technical disclosure.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#33A685] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0E4032]">Clutch 4.9 Score &amp; Verified Delivery</strong>
                    <p className="text-[11px] text-[#0E4032]/70 leading-normal">Consistent 5-star ratings across Fortune 500 and high-growth venture-backed tech platforms.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Client Logos Trust Bar */}
      <section className="py-12 bg-white border-y border-[#B4D9C4]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0E4032]/70 mb-6">
            Trusted by Engineering Leaders Across 17 Sectors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
            {['AppFolio', 'Clio', 'Procore', 'Bench', 'AvidXchange', 'Applied Systems', 'Flexport'].map((co) => (
              <span key={co} className="text-lg sm:text-xl font-bold tracking-tight text-[#0E4032]">
                {co}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#33A685] bg-[#33A685]/10 px-3 py-1 rounded-full">
            Frequently Asked Questions
          </span>
          <h2 className="section-heading text-[#0E4032] text-2xl sm:text-3xl font-bold mt-3">
            Everything You Need to Know Before Calling
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#B4D9C4] rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-[#0E4032] text-sm sm:text-base cursor-pointer hover:bg-[#F2F2F2]/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#33A685] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#0E4032]/80 leading-relaxed border-t border-[#B4D9C4]/40 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Footer */}
      <Footer />
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F2F2F2] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#33A685]" />
      </div>
    }>
      <ContactContent />
    </Suspense>
  );
}
