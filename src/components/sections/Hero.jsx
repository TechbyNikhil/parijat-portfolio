import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowDown, 
  Send, 
  Download, 
  Compass, 
  Sparkles, 
  Code2, 
  BrainCircuit, 
  Cpu, 
  Flame, 
  Users, 
  Layers, 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook,
  ShieldCheck
} from 'lucide-react';
import { personalInfo, rotatingKeywords } from '../../data/portfolioData';
import parijatPhoto from '../../assets/parijat-photo.jpg';

const Hero = ({ onOpenResume }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingKeywords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Hero Presentation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-[0_0_20px_-3px_rgba(99,102,241,0.25)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-300">
                BCA (AI) • Invertis University • 2025–2028
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I’m{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300 drop-shadow-[0_0_35px_rgba(99,102,241,0.4)]">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-mono text-cyan-400/90 font-medium">
                Also known as <span className="text-white font-semibold">{personalInfo.preferredName}</span>
              </p>
            </div>

            {/* Subtitle with Rotating Interest */}
            <div className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span>BCA (AI) Student</span>
              <span className="text-indigo-500">•</span>
              <span>Aspiring Developer</span>
              <span className="text-indigo-500">•</span>
              <div className="inline-flex items-center px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-cyan-300 min-h-[36px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-sm sm:text-base font-bold"
                  >
                    {rotatingKeywords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {personalInfo.heroDescription}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 shadow-[0_0_25px_-5px_rgba(99,102,241,0.5)] border border-indigo-400/30 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Compass className="w-4 h-4 text-cyan-200" />
                <span>Explore My Journey</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 hover:text-white border border-slate-700/80 hover:border-cyan-400/40 shadow-md backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
              >
                <Send className="w-4 h-4 text-cyan-400" />
                <span>Let’s Connect</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-transparent hover:bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Media Quick Links */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-slate-400">
              <span className="text-xs font-mono text-slate-500">Find me on:</span>
              <div className="flex items-center gap-2.5">
                {personalInfo.socials.map((social) => {
                  const getIcon = () => {
                    switch (social.name) {
                      case 'GitHub': return <Github className="w-4 h-4" />;
                      case 'LinkedIn': return <Linkedin className="w-4 h-4" />;
                      case 'Instagram': return <Instagram className="w-4 h-4" />;
                      case 'Facebook': return <Facebook className="w-4 h-4" />;
                      default: return null;
                    }
                  };
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="p-2.5 rounded-lg bg-slate-900/70 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-cyan-300 transition-all duration-200 hover:scale-110 shadow-sm"
                    >
                      {getIcon()}
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Profile Visual with Parijat's Real Studio Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-[300px] h-[390px] sm:w-[380px] sm:h-[480px] md:w-[410px] md:h-[510px]">
              
              {/* Outer Glowing Orbital Rings & Ambient Blurs */}
              <div className="absolute inset-0 rounded-[32px] border border-indigo-500/30 animate-pulse-slow pointer-events-none" />
              <div className="absolute -inset-4 rounded-[36px] border border-cyan-400/20 pointer-events-none" />
              <div className="absolute -inset-6 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-400/20 blur-2xl pointer-events-none" />

              {/* Main Photo Card Frame */}
              <div className="relative w-full h-full rounded-[30px] overflow-hidden glass-card p-2 sm:p-2.5 border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] group">
                <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-slate-950">
                  <img
                    src={parijatPhoto}
                    alt="Parijat Yadav"
                    className="w-full h-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-transparent to-black/10 opacity-70 pointer-events-none" />
                  
                  {/* Bottom Interactive Glass Banner */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-slate-950/85 border border-white/10 backdrop-blur-md flex items-center justify-between shadow-lg">
                    <div>
                      <p className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>Parijat Yadav</span>
                        <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      </p>
                      <p className="text-[11px] font-mono text-cyan-300">
                        BCA (AI) • Tech &amp; CRM Enthusiast
                      </p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#34D399]" title="Open to Opportunities" />
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: AI / Neural (Top Left) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-4 sm:-top-5 sm:-left-6 px-3.5 py-2 rounded-2xl bg-slate-900/95 border border-indigo-500/40 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.8)] backdrop-blur-md flex items-center gap-2.5 z-20"
              >
                <div className="p-1.5 rounded-lg bg-indigo-500/20 text-cyan-300">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400">Specialization</p>
                  <p className="text-xs font-bold text-white">BCA (AI)</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Modern Web / React (Bottom Right) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -right-4 sm:-bottom-5 sm:-right-6 px-3.5 py-2 rounded-2xl bg-slate-900/95 border border-cyan-400/40 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.8)] backdrop-blur-md flex items-center gap-2.5 z-20"
              >
                <div className="p-1.5 rounded-lg bg-cyan-400/20 text-cyan-300">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-400">Tech Stack</p>
                  <p className="text-xs font-bold text-white">React &amp; Algorithms</p>
                </div>
              </motion.div>

              {/* Floating Badge 3: CRM / Communication (Top Right) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="hidden sm:flex absolute top-12 -right-8 px-3.5 py-2 rounded-xl bg-slate-900/95 border border-white/15 shadow-lg backdrop-blur-md items-center gap-2 z-20"
              >
                <Users className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-xs font-mono font-medium text-slate-200">Sales &amp; CRM</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
