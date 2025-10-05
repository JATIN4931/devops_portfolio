'use client';

import { useState, useEffect } from 'react';
import LandingPage from '@/components/LandingPage';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
// import StatsSection from '@/components/StatsSection';
// import CertificatesSection from '@/components/CertificatesSection';
// import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavigateToPortfolioAction = () => {
    setShowLanding(false);
  };

  const handleBackToLandingAction = () => {
    setShowLanding(true);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {showLanding ? (
        <LandingPage onNavigateToPortfolioAction={handleNavigateToPortfolioAction} />
      ) : (
        <>
          <Navigation onBackToLandingAction={handleBackToLandingAction} />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          {/* <StatsSection /> */}
          {/* <CertificatesSection /> */}
          {/* <BlogSection /> */}
          <ContactSection />
        </>
      )}
    </>
  );
}
    