import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HeroVideoSection from '@/components/HeroVideoSection';
import ClientLogos from '@/components/ClientLogos';
import Capabilities from '@/components/Capabilities';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <main className="min-h-screen bg-[#F2F2F2] text-[#0E4032] selection:bg-[#33A685] selection:text-white">
      {/* Primary Navigation Bar */}
      <Navbar />

      {/* Hero Section - Exact Clone of Reference Image */}
      <Hero />

      {/* Hero Video Section - Interactive 4K Architectural Walkthrough */}
      <HeroVideoSection />

      {/* Client Logos Carousel */}
      <ClientLogos />

      {/* Core Engineering Capabilities & AI Services */}
      <Capabilities />

     

      {/* Global Enterprise Footer */}
      <Footer />
    </main>
  );
}
