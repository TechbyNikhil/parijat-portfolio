import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-14 ${centered ? 'text-center mx-auto' : ''} max-w-2xl ${className}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-cyan-300 mb-4 shadow-[0_0_15px_-3px_rgba(99,102,241,0.2)]`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className={`mt-5 flex items-center gap-1.5 ${centered ? 'justify-center' : ''}`}>
        <span className="h-1 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
        <span className="h-1 w-2 rounded-full bg-cyan-400" />
        <span className="h-1 w-1 rounded-full bg-indigo-500" />
      </div>
    </motion.div>
  );
};

export default SectionHeading;
