import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import SocialConnect from './components/sections/SocialConnect';
import Contact from './components/sections/Contact';
import BackgroundCanvas from './components/common/BackgroundCanvas';
import CustomCursor from './components/common/CustomCursor';
import ScrollToTop from './components/common/ScrollToTop';
import ResumeModal from './components/common/ResumeModal';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#080B14] text-[#F8FAFC] selection:bg-indigo-500/30 selection:text-cyan-300">
      {/* Background Interactive Ambient Canvas */}
      <BackgroundCanvas />

      {/* Smooth Spring Desktop Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <SocialConnect />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Floating Scroll To Top with Progress Ring */}
      <ScrollToTop />

      {/* Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
