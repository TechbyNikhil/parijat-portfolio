import React from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  Heart, 
  Code2, 
  ArrowUp 
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

const Footer = ({ onOpenResume }) => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Connect', href: '#connect' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/80 pt-16 pb-12 overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="inline-flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md">
                <div className="w-full h-full bg-[#080B14] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-xs text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                    P
                  </span>
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center">
                PARIJAT<span className="text-cyan-400 font-mono text-2xl leading-none">.</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              BCA Artificial Intelligence student at Invertis University, aspiring developer, and creative thinker with experience in sales, CRM, and event hosting.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="hover:text-cyan-300 transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-indigo-500" />
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Profiles & Resume (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Connect &amp; Documents
            </h4>
            
            <div className="flex items-center gap-2">
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
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 transition-all hover:scale-105"
                  >
                    {getIcon()}
                  </a>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/40 transition-colors"
              >
                <span>View Full Resume</span>
                <span className="text-cyan-400">&rarr;</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Credit Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Parijat Yadav. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with React, Vite &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
