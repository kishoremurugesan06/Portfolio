import React, { useState, useEffect } from 'react';
import ScrollProgress from './components/ScrollProgress';
import ThreeBackground from './components/ThreeBackground';
import Splash from './components/Splash';
import Header from './components/Header';
import NavDrawer from './components/NavDrawer';
import SocialRail from './components/SocialRail';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import PrintableResume from './components/PrintableResume';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    // Intercept smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || href === '#') return;
      
      const elem = document.querySelector(href);
      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="relative min-h-screen text-ink selection:bg-red-600 selection:text-white">
      {/* Scroll indicator line at the very top */}
      <ScrollProgress />

      {/* 3D Cinematic Coding Background (Three.js with binary rain, rotating icosahedron, code symbols, lights) */}
      <ThreeBackground />

      {/* Splash Screen */}
      {showSplash && <Splash onFinish={() => setShowSplash(false)} />}

      {/* Fixed Site Header */}
      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Floating Vertical Social Rail (WhatsApp, LinkedIn, GitHub, Gmail) */}
      <SocialRail />

      {/* Navigation Drawer */}
      <NavDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About onOpenResume={() => setIsResumeModalOpen(true)} />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Document Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Printable Resume Element for window.print() */}
      <PrintableResume />
    </div>
  );
}
