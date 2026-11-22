import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Sparkles, 
  Github, 
  Terminal, 
  ExternalLink, 
  Code2, 
  Layers, 
  Radio, 
  Hourglass,
  Cpu
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { personalInfo } from '../../data/portfolioData';

// When projects become available, simply add objects to this array!
// STRICT COMPLIANCE: Empty array for now as per instructions.
export const projectsList = [];

const Projects = () => {
  const hasProjects = projectsList.length > 0;

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="PORTFOLIO LAB"
          title="Featured Projects"
          subtitle="Explore software experiments, algorithmic tools, and web development prototypes."
        />

        {!hasProjects ? (
          /* Sleek Interactive Laboratory Empty State */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8 sm:p-14 border border-white/10 text-center relative overflow-hidden max-w-3xl mx-auto shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]"
          >
            {/* Ambient Accent Light */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Futuristic Radar / Lab Icon */}
            <div className="relative mx-auto w-24 h-24 mb-6 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-indigo-500/30 animate-ping opacity-25" />
              <div className="absolute inset-2 rounded-full border border-cyan-400/40 animate-spin-slow" />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600/30 to-cyan-400/30 border border-cyan-400/40 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.3)] backdrop-blur-md">
                <Radio className="w-8 h-8 text-cyan-300 animate-pulse" />
              </div>
            </div>

            {/* Required Empty State Message */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              New ideas are in progress.
            </h3>
            
            <p className="text-base sm:text-lg text-cyan-300 font-semibold mb-6">
              Exciting projects coming soon!
            </p>

            <p className="text-sm text-slate-400 max-w-lg mx-auto leading-relaxed mb-8">
              Currently engineering prototypes in Artificial Intelligence, modern frontend interfaces, and algorithmic problem-solving. Stay tuned as new builds are published to GitHub!
            </p>

            {/* Development Pipeline Indicator */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/80 border border-slate-800 max-w-md mx-auto mb-8 text-left">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Terminal className="w-3.5 h-3.5" /> Pipeline Status
                </span>
                <span className="text-emerald-400 font-semibold">Active Sprint</span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-mono">
                <div className="p-2 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">
                  1. Ideate
                </div>
                <div className="p-2 rounded bg-indigo-500/20 text-cyan-300 border border-cyan-500/30 font-semibold">
                  2. Build
                </div>
                <div className="p-2 rounded bg-slate-800 text-slate-300">
                  3. Test
                </div>
                <div className="p-2 rounded bg-slate-800 text-slate-300">
                  4. Deploy
                </div>
              </div>
            </div>

            {/* GitHub Action Button */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://github.com/parijatyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/50 shadow-lg hover:shadow-[0_0_20px_-3px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-105"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>Follow on GitHub (@parijatyadav)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

          </motion.div>
        ) : (
          /* Ready template for future projects */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsList.map((proj, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/10">
                {/* Future project item template */}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;
