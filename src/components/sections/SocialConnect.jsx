import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Facebook, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles,
  Share2
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { personalInfo } from '../../data/portfolioData';

const SocialConnect = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopyLink = (e, url, index) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getPlatformIcon = (name) => {
    switch (name) {
      case 'GitHub':
        return <Github className="w-7 h-7 text-cyan-400 group-hover:scale-110 transition-transform" />;
      case 'LinkedIn':
        return <Linkedin className="w-7 h-7 text-indigo-400 group-hover:scale-110 transition-transform" />;
      case 'Instagram':
        return <Instagram className="w-7 h-7 text-pink-400 group-hover:scale-110 transition-transform" />;
      case 'Facebook':
        return <Facebook className="w-7 h-7 text-blue-400 group-hover:scale-110 transition-transform" />;
      default:
        return <Share2 className="w-7 h-7 text-cyan-400" />;
    }
  };

  return (
    <section id="connect" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="DIGITAL FOOTPRINT"
          title="Connect With Me"
          subtitle="Stay in touch across social platforms for professional networking, open-source code, and creative discussions."
        />

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.socials.map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 cursor-pointer ${social.accent}`}
            >
              <div>
                {/* Platform Icon & Action Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner group-hover:border-white/20 transition-colors">
                    {getPlatformIcon(social.name)}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={(e) => handleCopyLink(e, social.url, idx)}
                      title="Copy link"
                      className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <div className="p-2 rounded-xl bg-slate-900/80 group-hover:bg-indigo-600/30 text-slate-400 group-hover:text-cyan-300 border border-slate-800 group-hover:border-indigo-500/30 transition-all">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Platform Title & Handle */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {social.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mt-0.5">
                  {social.username}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  {social.description}
                </p>
              </div>

              {/* Bottom Connect Pill */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                <span>Visit Profile</span>
                <span className="text-cyan-400 font-mono group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialConnect;
