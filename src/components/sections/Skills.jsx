import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Cpu, 
  Wrench, 
  Palette, 
  Terminal, 
  Sparkles, 
  Layers, 
  CheckCircle,
  FolderGit2,
  FileSpreadsheet,
  FileText
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { skillCategories } from '../../data/portfolioData';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-cyan-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-indigo-400" />;
      default: return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="TECHNICAL &amp; CREATIVE STACK"
          title="Skills &amp; Capabilities"
          subtitle="A comprehensive overview of programming paradigms, web technologies, CS foundations, and digital tools."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-[0_0_15px_-3px_rgba(99,102,241,0.5)] border border-indigo-400/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-[0_0_15px_-3px_rgba(99,102,241,0.5)] border border-indigo-400/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categorized Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, catIdx) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: catIdx * 0.05 }}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner">
                      {getCategoryIcon(category.icon)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-[11px] font-mono text-cyan-400">
                        {category.skills.length} Competencies
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills List / Tags */}
                  <div className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group/item p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-indigo-500/40 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm text-slate-200 group-hover/item:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-cyan-300 border border-indigo-500/20">
                            {skill.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          {skill.type}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Verified Knowledge</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400/80 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Clean Tech Tag Cloud Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 glass-card p-6 sm:p-8 rounded-2xl border border-white/5 text-center max-w-4xl mx-auto"
        >
          <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
            Curated Knowledge Tags (Without Arbitrary Percentages)
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              "C", "C++", "Java", "Python", "JavaScript", 
              "React.js", "HTML5", "CSS3", "DSA", 
              "Git", "GitHub", "Power BI", 
              "Microsoft Excel", "Microsoft Word", "Canva"
            ].map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-slate-900/90 text-xs sm:text-sm font-mono text-slate-300 border border-slate-800 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-200 hover:scale-105 shadow-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
