'use client';

import React from 'react';

export default function ClientLogos() {
   const clients = [
    { name: 'AppFolio', tag: 'Real Estate & Property Management' },
    { name: 'Bench', tag: 'Accounting & Bookkeeping' },
    { name: 'Clio', tag: 'Legal Practice Management' },
    { name: 'AvidXchange', tag: 'Financial Operations Automation' },
    { name: 'Applied Systems', tag: 'Insurance Operations Software' },
    { name: 'Procore', tag: 'Construction Project Operations' },
    { name: 'Flexport', tag: 'Logistics & Freight Operations' },
  ];

  return (
    <section className="bg-[#F2F2F2] py-12 border-y border-[#B4D9C4]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-[13px] font-semibold uppercase tracking-widest text-[#0E4032]/75 mb-8">
          Trusted by Diverse Sectors
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-90">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center transition-all duration-300 hover:opacity-100 cursor-pointer"
            >
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0E4032] group-hover:text-[#33A685] transition-colors">
                {client.name}
              </span>
              <span className="text-[10px] text-[#33A685] font-medium uppercase tracking-wider mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {client.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
