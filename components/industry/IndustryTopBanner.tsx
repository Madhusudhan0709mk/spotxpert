'use client';

import React from 'react';
import {
  Sparkles,
  Key,
  ShieldCheck,
  CreditCard,
  Wrench,
  BarChart3,
  FileCheck,
  Scale,
  Receipt,
  CalendarCheck,
  FileSpreadsheet,
  Search,
  FileText,
  Briefcase,
  UserCheck,
  ShieldAlert,
  Calendar,
  Clock,
  MessageSquare,
  Calculator,
  HardHat,
  Users,
  Truck,
  Compass,
  Box,
  AlertCircle,
  RefreshCw,
  AlertTriangle,
  DollarSign,
  CheckCircle,
  Cpu,
  Layers,
  Activity,
  GraduationCap,
  Video,
  Code,
  TrendingUp,
  Building,
  Smartphone,
  Utensils,
  Car,
  Grid,
  Package,
  RotateCcw,
  Camera
} from 'lucide-react';
import { UseCaseChip } from '@/src/data/industries';

interface IndustryTopBannerProps {
  announcement: {
    badge: string;
    text: string;
    linkText: string;
  };
  useCaseChips: UseCaseChip[];
  selectedChip: string;
  onSelectChip: (id: string) => void;
}

export default function IndustryTopBanner({
  announcement,
  useCaseChips,
  selectedChip,
  onSelectChip,
}: IndustryTopBannerProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Key': return <Key className="w-3.5 h-3.5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-3.5 h-3.5" />;
      case 'CreditCard': return <CreditCard className="w-3.5 h-3.5" />;
      case 'Wrench': return <Wrench className="w-3.5 h-3.5" />;
      case 'BarChart3': return <BarChart3 className="w-3.5 h-3.5" />;
      case 'FileCheck': return <FileCheck className="w-3.5 h-3.5" />;
      case 'Scale': return <Scale className="w-3.5 h-3.5" />;
      case 'Receipt': return <Receipt className="w-3.5 h-3.5" />;
      case 'CalendarCheck': return <CalendarCheck className="w-3.5 h-3.5" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-3.5 h-3.5" />;
      case 'Search': return <Search className="w-3.5 h-3.5" />;
      case 'FileText': return <FileText className="w-3.5 h-3.5" />;
      case 'Briefcase': return <Briefcase className="w-3.5 h-3.5" />;
      case 'UserCheck': return <UserCheck className="w-3.5 h-3.5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-3.5 h-3.5" />;
      case 'Calendar': return <Calendar className="w-3.5 h-3.5" />;
      case 'Clock': return <Clock className="w-3.5 h-3.5" />;
      case 'MessageSquare': return <MessageSquare className="w-3.5 h-3.5" />;
      case 'Calculator': return <Calculator className="w-3.5 h-3.5" />;
      case 'HardHat': return <HardHat className="w-3.5 h-3.5" />;
      case 'Users': return <Users className="w-3.5 h-3.5" />;
      case 'Truck': return <Truck className="w-3.5 h-3.5" />;
      case 'Compass': return <Compass className="w-3.5 h-3.5" />;
      case 'Box': return <Box className="w-3.5 h-3.5" />;
      case 'AlertCircle': return <AlertCircle className="w-3.5 h-3.5" />;
      case 'RefreshCw': return <RefreshCw className="w-3.5 h-3.5" />;
      case 'AlertTriangle': return <AlertTriangle className="w-3.5 h-3.5" />;
      case 'DollarSign': return <DollarSign className="w-3.5 h-3.5" />;
      case 'CheckCircle': return <CheckCircle className="w-3.5 h-3.5" />;
      case 'Cpu': return <Cpu className="w-3.5 h-3.5" />;
      case 'Layers': return <Layers className="w-3.5 h-3.5" />;
      case 'Activity': return <Activity className="w-3.5 h-3.5" />;
      case 'GraduationCap': return <GraduationCap className="w-3.5 h-3.5" />;
      case 'Video': return <Video className="w-3.5 h-3.5" />;
      case 'Code': return <Code className="w-3.5 h-3.5" />;
      case 'TrendingUp': return <TrendingUp className="w-3.5 h-3.5" />;
      case 'Building': return <Building className="w-3.5 h-3.5" />;
      case 'Smartphone': return <Smartphone className="w-3.5 h-3.5" />;
      case 'Utensils': return <Utensils className="w-3.5 h-3.5" />;
      case 'Car': return <Car className="w-3.5 h-3.5" />;
      case 'Grid': return <Grid className="w-3.5 h-3.5" />;
      case 'Package': return <Package className="w-3.5 h-3.5" />;
      case 'RotateCcw': return <RotateCcw className="w-3.5 h-3.5" />;
      case 'Camera': return <Camera className="w-3.5 h-3.5" />;
      default: return <Sparkles className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="w-full bg-[#F2F2F2] border-b border-[#B4D9C4]/50 pt-20 sm:pt-24 select-none">
      {/* Top Announcement Bar Pill */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#B4D9C4] text-[12px] sm:text-[13px] text-[#0E4032] shadow-xs hover:border-[#33A685] transition-all cursor-pointer">
          <span className="font-semibold text-[#33A685] bg-[#33A685]/10 px-2 py-0.5 rounded-full text-[11px] uppercase tracking-wider">
            {announcement.badge}
          </span>
          <span className="text-[#0E4032]/90 truncate max-w-xs sm:max-w-xl">
            {announcement.text}
          </span>
          <span className="text-[#33A685] font-semibold text-xs ml-1 flex items-center gap-0.5 hover:underline whitespace-nowrap">
            {announcement.linkText} &rarr;
          </span>
        </div>
      </div>

      {/* Sub-navbar Quick Chips Intent Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-start sm:justify-center gap-2 min-w-max pb-1">
          {useCaseChips.map((chip) => {
            const isSelected = selectedChip === chip.id;
            return (
              <button
                key={chip.id}
                onClick={() => onSelectChip(chip.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#0E4032] text-white border-[#0E4032] shadow-xs'
                    : 'bg-white text-[#0E4032]/85 border-[#B4D9C4]/80 hover:border-[#33A685] hover:bg-[#B4D9C4]/20'
                }`}
              >
                <span className={isSelected ? 'text-[#F2E6A7]' : 'text-[#33A685]'}>
                  {getIcon(chip.iconName)}
                </span>
                <span>{chip.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
