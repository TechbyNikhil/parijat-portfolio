import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, UserCheck, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { experienceTimeline } from '../../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="CAREER MILESTONES"
          title="Professional Experience"
          subtitle="Real-world industry exposure in client relations, student guidance, and communication."
        />

        {/* Vertical Timeline Container */}
        <div className="relative mt-12">
          {/* Central Glowing Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-cyan-400 to-indigo-900 opacity-30 pointer-events-none" />

          <div className="space-y-12">
            {experienceTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Milestone Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] flex items-center justify-center z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Spacer for Desktop Alignment */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isEven ? 'md:pr-12' : 'md:pl-12'
                    } w-full`}
                  >
                    <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 relative group">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-cyan-300 border border-indigo-500/20">
                          {item.type}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          {item.location}
                        </span>
                      </div>

                      {/* Position & Organization */}
                      <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {item.position}
                      </h3>
                      
                      <div className="flex items-center gap-2 mt-1 text-sm font-medium text-indigo-400">
                        <Building2 className="w-4 h-4 text-cyan-400" />
                        <span>{item.organization}</span>
                      </div>

                      {/* Primary Description */}
                      <p className="text-slate-300 text-sm leading-relaxed mt-4">
                        {item.description}
                      </p>

                      {/* Actionable Highlights */}
                      <div className="mt-5 space-y-2 pt-4 border-t border-slate-800">
                        <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                          Key Responsibilities &amp; Impact
                        </p>
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Learned Badges */}
                      <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                        {item.skillsLearned.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
