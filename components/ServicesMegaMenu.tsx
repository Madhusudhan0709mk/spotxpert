'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  SERVICE_CATEGORIES,
  ServiceCategory,
} from '@/src/data/services-categories';
import {
  Sparkles,
  Bot,
  Brain,
  Database,
  Search,
  CheckCircle,
  Cpu,
  Code2,
  Globe,
  Network,
  RefreshCw,
  Compass,
  Cloud,
  Layers,
  Terminal,
  Zap,
  Boxes,
  LineChart,
  ClipboardCheck,
  ShieldCheck,
  Workflow,
  Sparkle,
  ArrowRightLeft,
  Settings,
  FileText,
  GitBranch,
  FileCode,
  Activity,
  Radio,
  Server,
  Binary,
  LifeBuoy,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Bot,
  Brain,
  Database,
  Search,
  CheckCircle,
  Cpu,
  Code2,
  Globe,
  Network,
  RefreshCw,
  Compass,
  Cloud,
  Layers,
  Terminal,
  Zap,
  Boxes,
  LineChart,
  ClipboardCheck,
  ShieldCheck,
  Workflow,
  Sparkle,
  ArrowRightLeft,
  Settings,
  FileText,
  GitBranch,
  FileCode,
  Activity,
  Radio,
  Server,
  Binary,
  LifeBuoy,
};

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

export default function ServicesMegaMenu({
  isOpen,
  onClose,
  onOpenConsultation: _onOpenConsultation,
}: ServicesMegaMenuProps) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const activeCategory: ServiceCategory =
    SERVICE_CATEGORIES[activeCategoryIndex] || SERVICE_CATEGORIES[0];

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[780px] xl:w-[860px] z-50 animate-in fade-in zoom-in-95 duration-150"
    >
      <div className="bg-[#0E4032] border border-[#33A685]/40 rounded-2xl shadow-2xl backdrop-blur-xl ring-1 ring-white/10 overflow-hidden">
        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-12 min-h-[420px]">
          {/* Column 1: Six Service Categories */}
          <div className="col-span-5 bg-[#082a20]/40 p-4 border-r border-[#33A685]/30">
            <div className="space-y-1.5">
              {SERVICE_CATEGORIES.map((category, idx) => {
                const isActive = activeCategoryIndex === idx;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategoryIndex(idx)}
                    className={`w-full text-left px-3.5 py-3 rounded-xl transition-all cursor-pointer flex items-center justify-between group ${
                      isActive
                        ? 'bg-[#155442] text-white border border-[#33A685]/60 shadow-md'
                        : 'text-[#B4D9C4] hover:text-white hover:bg-[#124b3b]/60'
                    }`}
                  >
                    <div className="pr-2">
                      <div className="text-[13px] font-semibold group-hover:text-white transition-colors flex items-center gap-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-colors ${
                            isActive ? 'bg-[#F2E6A7]' : 'bg-[#33A685]/60'
                          }`}
                        />
                        <span>{category.title}</span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 flex-shrink-0 transition-transform ${
                        isActive
                          ? 'text-[#F2E6A7] translate-x-1'
                          : 'text-white/40 group-hover:text-white group-hover:translate-x-0.5'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 2: Services belonging to active category */}
          <div className="col-span-7 p-4 sm:p-5 bg-[#0E4032]">
            <div className="space-y-1">
              {activeCategory.services.map((service) => {
                const Icon = ICON_MAP[service.iconName] || Sparkles;
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={onClose}
                    className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#155442] transition-colors border border-transparent hover:border-[#33A685]/40"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#082a20] border border-[#33A685]/50 flex items-center justify-center flex-shrink-0 group-hover:border-[#F2E6A7] group-hover:bg-[#0d3b2e] transition-colors mt-0.5">
                      <Icon className="w-4 h-4 text-[#42CF9F] group-hover:text-[#F2E6A7]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[13px] font-semibold text-white group-hover:text-[#F2E6A7] transition-colors flex items-center gap-1 leading-snug">
                        <span className="truncate">{service.title}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 text-[#F2E6A7]" />
                      </div>
                      <div className="text-[11px] text-[#B4D9C4]/85 leading-tight font-normal line-clamp-1 mt-0.5">
                        {service.shortDesc}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
