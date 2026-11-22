import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, Phone, MapPin, ExternalLink, Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { personalInfo, experienceTimeline, educationInfo, skillCategories } from '../../data/portfolioData';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generates a clean text/markdown resume file
    const content = `===========================================================
${personalInfo.name.toUpperCase()} (also known as ${personalInfo.preferredName})
${personalInfo.title}
===========================================================
Email: ${personalInfo.email}
Phone: ${personalInfo.phone}
Location: ${personalInfo.location}
GitHub: https://github.com/parijatyadav
LinkedIn: https://www.linkedin.com/in/parijat-yadav-71769139a

PROFESSIONAL SUMMARY
--------------------
${personalInfo.heroDescription}

EDUCATION
---------
${educationInfo.degree}
${educationInfo.university} | ${educationInfo.duration}
Status: ${educationInfo.status}
Focus: ${educationInfo.focusAreas.join(', ')}

PROFESSIONAL EXPERIENCE
-----------------------
${experienceTimeline.map(exp => `
Position: ${exp.position}
Organization: ${exp.organization}
Description: ${exp.description}
Key Skills: ${exp.skillsLearned.join(', ')}
`).join('\n')}

TECHNICAL & PROFESSIONAL SKILLS
-------------------------------
${skillCategories.map(cat => `${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')}
===========================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Resume_Parijat_Yadav.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/60 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-mono text-sm text-slate-300 font-semibold tracking-wide">
                RESUME PREVIEW // PARIJAT YADAV
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Document Content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200">
            {/* Candidate Header */}
            <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {personalInfo.name}{' '}
                  <span className="text-sm font-normal text-cyan-400 font-mono">
                    (also known as {personalInfo.preferredName})
                  </span>
                </h1>
                <p className="text-indigo-400 font-medium text-sm sm:text-base mt-1">
                  {personalInfo.title}
                </p>
              </div>

              <div className="flex flex-col gap-1.5 text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs uppercase tracking-widest font-mono text-cyan-400 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Professional Summary
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                {personalInfo.heroDescription}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs uppercase tracking-widest font-mono text-cyan-400 mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-cyan-400" /> Education
              </h2>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">
                    {educationInfo.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {educationInfo.university}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {educationInfo.duration} • {educationInfo.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-xs uppercase tracking-widest font-mono text-cyan-400 mb-3 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-cyan-400" /> Professional Experience
              </h2>
              <div className="space-y-4">
                {experienceTimeline.map((exp, idx) => (
                  <div key={idx} className="bg-slate-900/50 p-4 sm:p-5 rounded-xl border border-slate-800/60 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-bold text-white text-sm sm:text-base">
                        {exp.position}
                      </h3>
                      <span className="text-xs font-mono text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40 self-start sm:self-auto">
                        {exp.organization}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.skillsLearned.map((s, sIdx) => (
                        <span key={sIdx} className="text-[11px] px-2 py-0.5 rounded bg-slate-800/80 text-slate-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Matrix */}
            <div>
              <h2 className="text-xs uppercase tracking-widest font-mono text-cyan-400 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-cyan-400" /> Key Skills & Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skillCategories.map((cat) => (
                  <div key={cat.id} className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60">
                    <h4 className="text-xs font-mono font-semibold text-slate-300 mb-2">
                      {cat.title}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700/50">
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center text-xs text-slate-500 pt-2 font-mono">
              Note: This is an authentic summary profile generated for Parijat Yadav. References & full records available upon request.
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
