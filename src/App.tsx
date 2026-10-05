'use client';

import React, { useState } from 'react';
import { ThreeBackground } from './components/3d/ThreeBackground';
import { LightRay } from './components/3d/LightRay';
import { Header } from './components/layout/Header';
import { MenuDrawer } from './components/layout/MenuDrawer';
import { BookingModal } from './components/modals/BookingModal';
import { ShowreelModal } from './components/modals/ShowreelModal';

import { HeroSection } from './components/sections/HeroSection';
import { ShowcaseSection } from './components/sections/ShowcaseSection';
import { StatementSection } from './components/sections/StatementSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { TestimonialsBlurSection } from './components/sections/TestimonialsBlurSection';
import { CaseStudiesSection } from './components/sections/CaseStudiesSection';
import { AboutSection } from './components/sections/AboutSection';
import { PricingSection } from './components/sections/PricingSection';
import { ValuePillarsSection } from './components/sections/ValuePillarsSection';
import { FAQSection } from './components/sections/FAQSection';
import { ConnectSection } from './components/sections/ConnectSection';

export const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);

  return (
    <div className="relative min-h-screen selection:bg-orange-500 selection:text-white">
      {/* 1. Ambient WebGL Three.js Caustic Background */}
      <ThreeBackground />

      {/* 2. Soft upper-left light rays */}
      <LightRay />

      {/* 3. Subtle Film Grain Texture */}
      <div
        className="fixed inset-0 pointer-events-none z-2 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 4. Navigation Header */}
      <Header onOpenDrawer={() => setIsDrawerOpen(true)} />

      {/* 5. Fullscreen Staggered Menu Drawer */}
      <MenuDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Content Area: padding from left and right strictly 20-30px (24px) */}
      <main className="relative z-10 w-full px-6">
        {/* Hero Section with True 3D Badges matching Image 1 */}
        <HeroSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 3D Showcase / Showreel Container */}
        <ShowcaseSection onOpenShowreel={() => setIsShowreelOpen(true)} />

        {/* "Hello!" Statement with 6 Draggable Physics Chips matching Image 3 */}
        <StatementSection />

        {/* "Our Process, Explained" with Spaced Cards & Animated Doodle Scribble */}
        <ProcessSection />

        {/* Dual Testimonials with GPT Word-by-Word Blur Reveal */}
        <TestimonialsBlurSection />

        {/* 4 Case Studies with 3D Tablet Hardware Frames */}
        <CaseStudiesSection />

        {/* Buildora practice and service capabilities */}
        <AboutSection />

        {/* Freelance project scopes and deliverables */}
        <PricingSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 9 Value Pillars with Stroke Icons & Divider Rules */}
        <ValuePillarsSection />

        {/* FAQ with Spring Accordion & Thick Frosted Halo Contact Card matching Image 2 */}
        <FAQSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Project enquiry and integrated footer */}
        <ConnectSection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Modals */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ShowreelModal isOpen={isShowreelOpen} onClose={() => setIsShowreelOpen(false)} />
    </div>
  );
};

export default App;
