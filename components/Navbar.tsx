'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Sparkles, 
  Code2, 
  Cloud, 
  Database, 
  Layers, 
  ShieldCheck, 
  Briefcase, 
  BookOpen, 
  // Award, 
  ArrowRight,
  // Bot,
  Brain,
  // Zap,
  Globe,
  Building2,
  Stethoscope,
  Landmark,
  ShoppingCart,
  Truck,
  GraduationCap,
  Scale,
  Calculator,
  Wrench,
  HardHat,
  Factory,
  Car,
  Hotel,
  Video,
  UserCheck
} from 'lucide-react';

import dynamic from 'next/dynamic';
import { SERVICE_CATEGORIES } from '@/src/data/services-categories';

// Load the heavier services menu only when the Navbar needs to render it.
const ServicesMegaMenu = dynamic(() => import('@/components/ServicesMegaMenu'), {
  loading: () => null,
});

// Static navigation data is defined once instead of being recreated on every render.
const navItems = [
  {
    label: 'Services',
    id: 'services',
    featured: {
      title: 'AI-Native Product Engineering',
      desc: 'Accelerate digital transformation with high-velocity agile engineering pods.',
      tag: 'Popular'
    },
    columns: [
      {
        title: 'AI & Data Engineering',
        links: [
          { name: 'Enterprise AI Adoption', desc: 'ATOM framework, strategy & change management', icon: Sparkles, href: '/services/enterprise-ai-adoption-change-management' },
          { name: 'Generative AI Solutions', desc: 'Custom LLMs, RAG & Agentic workflows', icon: Sparkles, href: '/services/generative-ai-solutions' },
          { name: 'AI & Machine Learning', desc: 'Predictive models & computer vision', icon: Brain, href: '/services/ai-machine-learning' },
          { name: 'Data Engineering & Analytics', desc: 'Modern data stack & lakehouses', icon: Database, href: '/services/data-engineering-analytics' },
        ]
      },
      {
        title: 'Software & Cloud',
        links: [
          { name: 'Digital Product Engineering', desc: 'End-to-end fullstack development', icon: Code2, href: '/services/digital-product-engineering' },
          { name: 'Cloud & DevOps Architecture', desc: 'AWS Premier & Multi-cloud scale', icon: Cloud, href: '/services/cloud-devops-architecture' },
          { name: 'Video Services & Demos', desc: 'Architecture walkthroughs & video teardowns', icon: Video, href: '/services/video-services' },
          { name: 'View All Practices', desc: 'Explore all engineering services', icon: Globe, href: '/services' },
        ]
      }
    ]
  },
  {
    label: 'Industries',
    id: 'industries',
    featured: {
      title: 'Engineering for 17 Sectors',
      desc: 'Domain-specialized agile pods delivering custom software, AI pipelines, and cloud platforms.',
      tag: 'Enterprise Pods'
    },
    columns: [
      {
        title: 'Property, Legal & Finance',
        links: [
          { name: 'Real estate / property management', desc: 'Leasing, maintenance & reporting', icon: Building2, href: '/industries/real-estate' },
          { name: 'Accounting / bookkeeping', desc: 'Client intake & reconciliation', icon: Calculator, href: '/industries/accounting' },
          { name: 'Law firms', desc: 'Intake, conflicts & discovery', icon: Scale, href: '/industries/law-firms' },
          { name: 'Financial services', desc: 'Core banking & loan origination', icon: Landmark, href: '/industries/financial-services' },
          { name: 'Insurance', desc: 'Underwriting & claims operations', icon: ShieldCheck, href: '/industries/insurance' },
          { name: 'Professional services', desc: 'PSA, utilization & milestones', icon: Briefcase, href: '/industries/professional-services' },
        ]
      },
      {
        title: 'Operations, Logistics & Trade',
        links: [
          { name: 'Construction', desc: 'Project controls, RFIs & BIM', icon: HardHat, href: '/industries/construction' },
          { name: 'Logistics', desc: 'Control towers & freight tracking', icon: Truck, href: '/industries/logistics' },
          { name: 'Manufacturing operations', desc: 'Predictive maintenance & OEE', icon: Factory, href: '/industries/manufacturing' },
          { name: 'Healthcare administration', desc: 'Intake, eligibility & prior auth', icon: Stethoscope, href: '/industries/healthcare' },
          { name: 'Automotive', desc: 'Digital retailing & service bays', icon: Car, href: '/industries/automotive' },
          { name: 'Ecommerce operations', desc: 'Headless commerce & inventory', icon: ShoppingCart, href: '/industries/ecommerce' },
        ]
      },
      {
        title: 'Healthcare, Education & Hospitality',
        links: [
           { name: 'Recruiting', desc: 'ATS matching & onboarding', icon: UserCheck, href: '/industries/recruiting' },
          { name: 'school/collages', desc: 'Enrollment & SIS operations', icon: GraduationCap, href: '/industries/schools-colleges' },
          { name: 'Education', desc: 'Adaptive learning & video labs', icon: BookOpen, href: '/industries/education' },
          { name: 'Hospitality', desc: 'Direct booking & contactless tech', icon: Hotel, href: '/industries/hospitality' },
           
        ]
      }
    ]
  },
  /*
  {
    label: 'AI Accelerators',
    id: 'ai-accelerators',
    featured: {
      title: 'SpotXpert AI Frameworks',
      desc: 'Pre-built production blocks that cut AI time-to-market by 60%.',
      tag: 'Proprietary'
    },
    columns: [
      {
        title: 'LLM & Agent Toolkits',
        links: [
          { name: 'Enterprise RAG Suite', desc: 'High-precision document intelligence', icon: Bot, href: '/ai-accelerators/enterprise-rag-suite' },
          { name: 'Agentic Workflow Engine', desc: 'Multi-agent orchestration systems', icon: Zap, href: '/ai-accelerators/agentic-workflow-engine' },
          { name: 'LLMOps & Model Governance', desc: 'Evaluation, latency & cost guardrails', icon: ShieldCheck, href: '/ai-accelerators/llmops-governance' },
        ]
      },
      {
        title: 'Vision & Perception',
        links: [
          { name: 'SpotXpert Vision Core', desc: 'Real-time object detection & OCR', icon: Cpu, href: '/ai-accelerators/vision-core' },
          { name: 'Synthetic Data Generator', desc: 'Cold-start model bootstrapping', icon: Sparkles, href: '/ai-accelerators/synthetic-data-generator' },
        ]
      }
    ]
  },
  */

  /*
  {
    label: 'Why SpotXpert AI',
    id: 'why-spotxpert',
    featured: {
      title: 'Agile in Mind, Spirit & Speed',
      desc: 'Top 1% vetted engineering talent operating in your time zone.',
      tag: 'Differentiator'
    },
    columns: [
      {
        title: 'The SpotXpert Advantage',
        links: [
          { name: 'Our Agile Pods Model', desc: 'Self-organizing dedicated sprint teams', icon: Users, href: '/why-spotxpert/agile-pods-model' },
          { name: 'Quality & Security DNA', desc: 'SOC2 Type II & ISO 27001 certified', icon: ShieldCheck, href: '/why-spotxpert/quality-security-dna' },
          { name: 'Global Delivery Network', desc: 'US, UK, Canada & India presence', icon: Globe, href: '/why-spotxpert/global-delivery-network' },
        ]
      }
    ]
  },
 
  {
    label: 'About Us',
    id: 'about-us',
    featured: {
      title: '15+ Years of Engineering',
      desc: 'Empowering over 900+ companies from startups to Fortune 500.',
      tag: 'Our Story'
    },
    columns: [
      {
        title: 'Company',
        links: [
          { name: 'Leadership & Culture', desc: 'Meet our executive leadership team', icon: Users, href: '/about-us/leadership-culture' },
          // { name: 'Partnerships & Alliances', desc: 'AWS Premier & Microsoft Gold Partners', icon: Award, href: '/about-us/partnerships-alliances' },
          // { name: 'Careers & Open Roles', desc: 'Join 1,000+ passionate engineers', icon: Briefcase, href: '/about-us/careers' },
        ]
      }
    ]
  } */
];

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>('ai-data-engineering');
  const desktopNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown on outside click and Escape key
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDropdown]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0E4032] border-b border-[#33A685]/30 ${
        isScrolled
          ? 'bg-[#0E4032]/98 backdrop-blur-md shadow-lg py-3.5'
          : 'bg-[#0E4032] py-4 sm:py-5 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Updated to Theme Palette */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus:outline-none select-none"
          >
            {/* Origami Isometric Logo */}
          <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg">
  <img
    src="/images/logo-round.png"
    alt="SpotXpert AI"
    className="h-full w-full rotate-0 rounded-lg object-contain transition-transform duration-200 group-hover:scale-105"
  />
</div>

            {/* SpotXpert AI Wordmark */}
            <span className="font-bold text-[22px] tracking-tight font-sans antialiased inline-flex items-center">
              <span className="text-[#33A685]">Spot</span>
              <span className="text-white">X</span>
              <span className="text-[#33A685]">pert</span>
              <span className="text-white ml-1.5">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation Links - Click to open/close only */}
          <nav ref={desktopNavRef} className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(prev => prev === item.id ? null : item.id)}
                  aria-expanded={activeDropdown === item.id}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 text-[14px] font-medium transition-colors duration-200 rounded-md cursor-pointer ${
                    activeDropdown === item.id
                      ? 'text-[#F2E6A7] bg-white/5'
                      : 'text-white/90 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 text-white/80 ${
                      activeDropdown === item.id ? 'transform rotate-180 text-[#33A685]' : ''
                    }`}
                  />
                </button>

                {/* Mega Menu Dropdown */}
                {activeDropdown === item.id && (
                  item.id === 'services' ? (
                    <ServicesMegaMenu
                      isOpen={true}
                      onClose={() => setActiveDropdown(null)}
                      onOpenConsultation={onOpenConsultation}
                    />
                  ) : (
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 ${
                      item.id === 'industries'
                        ? 'w-[920px] xl:w-[980px]'
                        : item.columns.length > 1
                        ? 'w-[560px] xl:w-[620px]'
                        : 'w-[320px] sm:w-[360px]'
                    } z-50 animate-in fade-in zoom-in-95 duration-150`}>
                      <div className="bg-[#0E4032] border border-[#33A685]/40 rounded-2xl p-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/10">
                        <div className={`grid gap-6 ${
                          item.id === 'industries'
                            ? 'grid-cols-1 sm:grid-cols-3'
                            : item.columns.length > 1
                            ? 'grid-cols-1 sm:grid-cols-2'
                            : 'grid-cols-1'
                        }`}>
                          {item.columns.map((col, idx) => (
                            <div key={idx} className="space-y-3">
                              {col.title && item.id !== 'industries' && (
                                <h4 className="text-[11px] font-semibold text-[#B4D9C4] uppercase tracking-wider">
                                  {col.title}
                                </h4>
                              )}
                              <div className="space-y-1">
                                {col.links.map((link, lIdx) => {
                                  const Icon = link.icon;
                                  const targetHref = (link as any).href || `/#${item.id}`;
                                  return (
                                    <a
                                      key={lIdx}
                                      href={targetHref}
                                      onClick={() => setActiveDropdown(null)}
                                      className="group flex items-start gap-2.5 p-1.5 rounded-xl hover:bg-[#155442] transition-colors"
                                    >
                                      <div className="w-7 h-7 rounded-lg bg-[#082a20] border border-[#33A685]/50 flex items-center justify-center flex-shrink-0 group-hover:border-[#F2E6A7] transition-colors mt-0.5">
                                        <Icon className="w-3.5 h-3.5 text-[#33A685] group-hover:text-[#F2E6A7]" />
                                      </div>
                                      <div>
                                        <div className="text-[13px] font-medium text-white group-hover:text-[#F2E6A7] transition-colors flex items-center gap-1 leading-snug">
                                          {link.name}
                                        </div>
                                        <div className="text-[11px] text-[#B4D9C4]/85 leading-tight font-normal">
                                          {link.desc}
                                        </div>
                                      </div>
                                    </a>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ))}

            {/* Direct Case Studies Link */}
            <Link
              href="/case-study"
              className="inline-flex items-center px-3 py-2 text-[14px] font-medium text-white/90 hover:text-[#F2E6A7] hover:bg-white/5 transition-colors duration-200 rounded-md cursor-pointer"
            >
              Case Studies
            </Link>
          </nav>

          {/* Right Action Button - Contact Us */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center bg-[#33A685] hover:bg-[#299576] active:bg-[#208064] text-white font-semibold text-[14px] px-5 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#33A685]/30 cursor-pointer"
            >
              Contact Us
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white/90 hover:text-white hover:bg-[#155442] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0E4032] border-b border-[#33A685]/40 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-4">
            {navItems.map((item) => (
              <div key={item.id} className="border-b border-[#33A685]/20 pb-3">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                  className="flex items-center justify-between w-full text-left text-[15px] font-medium text-white py-2"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#B4D9C4] transition-transform ${
                      activeDropdown === item.id ? 'rotate-180 text-[#33A685]' : ''
                    }`}
                  />
                </button>
                {activeDropdown === item.id && (
                  item.id === 'services' ? (
                    <div className="pl-2 mt-3 space-y-2.5 border-l-2 border-[#33A685]/50">
                      <div className="text-[11px] font-bold text-[#F2E6A7] uppercase tracking-wider px-1">
                        6 Practices • 32 Services
                      </div>
                      <Link
                        href="/services/video-services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between text-[13px] font-semibold text-[#B4D9C4] hover:text-[#F2E6A7] p-2.5 rounded-xl bg-[#082a20]/60 border border-[#33A685]/30 transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <Video className="w-4 h-4 text-[#42CF9F]" />
                          <span>Video Services</span>
                        </span>
                        <ChevronRight className="w-4 h-4 text-[#B4D9C4]" />
                      </Link>
                      {SERVICE_CATEGORIES.map((cat) => {
                        const isCatOpen = mobileCategoryOpen === cat.key;
                        return (
                          <div
                            key={cat.id}
                            className="bg-[#082a20]/80 rounded-xl p-2.5 border border-[#33A685]/30 transition-all"
                          >
                            <button
                              type="button"
                              onClick={() => setMobileCategoryOpen(isCatOpen ? null : cat.key)}
                              className="flex items-center justify-between w-full text-left text-[13px] font-semibold text-white py-0.5 cursor-pointer"
                            >
                              <span className="flex items-center gap-1.5">
                                <span className={`w-1.5 h-1.5 rounded-full ${isCatOpen ? 'bg-[#F2E6A7]' : 'bg-[#42CF9F]'}`} />
                                <span>{cat.title}</span>
                              </span>
                              <ChevronDown
                                className={`w-3.5 h-3.5 text-[#B4D9C4] transition-transform ${
                                  isCatOpen ? 'rotate-180 text-[#F2E6A7]' : ''
                                }`}
                              />
                            </button>

                            {isCatOpen && (
                              <div className="pt-2.5 pl-2.5 space-y-2 border-t border-[#33A685]/20 mt-2">
                                {cat.services.map((svc) => (
                                  <Link
                                    key={svc.slug}
                                    href={`/services/${svc.slug}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block group py-1"
                                  >
                                    <div className="text-[13px] font-medium text-white group-hover:text-[#F2E6A7] flex items-center justify-between">
                                      <span>{svc.title}</span>
                                      <ArrowRight className="w-3 h-3 text-[#33A685] group-hover:text-[#F2E6A7]" />
                                    </div>
                                    <div className="text-[11px] text-[#B4D9C4]/70 line-clamp-1 mt-0.5">
                                      {svc.shortDesc}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                      <Link
                        href="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-[13px] font-semibold text-[#42CF9F] hover:text-[#F2E6A7] pt-2 px-1"
                      >
                        Explore All 32 Services Catalog →
                      </Link>
                    </div>
                  ) : (
                    <div className="pl-3 mt-2 space-y-2 border-l-2 border-[#33A685]/50">
                      {item.columns.flatMap(c => c.links).map((link, idx) => {
                        const targetHref = (link as any).href || `/#${item.id}`;
                        return (
                          <a
                            key={idx}
                            href={targetHref}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[14px] font-normal text-[#B4D9C4] hover:text-[#F2E6A7] py-1"
                          >
                            {link.name}
                          </a>
                        );
                      })}
                      <a
                        href={`/${item.id === 'why-spotxpert' ? 'why-spotxpert' : item.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-[13px] font-semibold text-[#33A685] hover:text-[#F2E6A7] pt-1.5"
                      >
                        Explore {item.label} Overview →
                      </a>
                    </div>
                  )
                )}
              </div>
            ))}
            <div className="border-b border-[#33A685]/20 pb-3">
              <Link
                href="/case-study"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between w-full text-left text-[15px] font-medium text-white py-2"
              >
                <span>Case Studies</span>
                <ArrowRight className="w-4 h-4 text-[#33A685]" />
              </Link>
            </div>
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-[#33A685] hover:bg-[#299576] text-white font-semibold text-[14px] py-3 rounded-lg text-center cursor-pointer shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
