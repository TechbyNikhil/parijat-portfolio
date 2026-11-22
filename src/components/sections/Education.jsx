import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Calendar, 
  Building2, 
  BrainCircuit, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Compass, 
  Binary, 
  Sparkles 
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { educationInfo } from '../../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ACADEMIC BACKGROUND"
          title="Education"
          subtitle="Formal academic grounding in Artificial Intelligence, computing systems, and software engineering."
        />

        {/* Education Hero Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden group shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]"
        >
          {/* Subtle AI Grid & Radial Accents */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Degree & Institutional Credentials */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  {educationInfo.status}
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  {educationInfo.duration}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  {educationInfo.degree}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-base font-semibold text-indigo-400">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                  <span>{educationInfo.university}</span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {educationInfo.institutionDetails}
              </p>

              {/* Core Program Pillars */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Binary className="w-4 h-4 text-cyan-400" /> Core Program Curriculum
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {educationInfo.focusAreas.map((area, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: AI Visual Emblem */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-slate-900/90 border border-white/10 p-6 flex flex-col items-center justify-center text-center shadow-2xl overflow-hidden group-hover:border-cyan-400/40 transition-all duration-500">
                
                {/* Circuit Grid BG */}
                <div className="absolute inset-0 bg-[radial-gradient(#6366F1_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
                
                {/* Glowing AI Icon */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-tr from-indigo-600/30 to-cyan-400/30 border border-cyan-400/40 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                  <BrainCircuit className="w-12 h-12 text-cyan-300 animate-pulse-slow" />
                </div>

                <div className="relative z-10">
                  <span className="font-mono text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-300 uppercase tracking-widest">
                    ARTIFICIAL INTELLIGENCE
                  </span>
                  <p className="text-xs text-slate-400 mt-1 max-w-[200px]">
                    Neural Networks • Algorithmic Logic • Modern Computing
                  </p>
                </div>

                {/* Status Dot */}
                <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-slate-400 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Graduation Target: 2028</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
