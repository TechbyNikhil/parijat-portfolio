import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Users2, 
  Mic2, 
  Flame, 
  CheckCircle2, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Compass, 
  Target, 
  HeartHandshake, 
  Cpu 
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { personalInfo, aboutHighlights } from '../../data/portfolioData';
import parijatPhoto from '../../assets/parijat-photo.jpg';

const About = () => {
  const getHighlightIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case 'Users2': return <Users2 className="w-5 h-5 text-cyan-400" />;
      case 'Mic2': return <Mic2 className="w-5 h-5 text-indigo-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-cyan-400" />;
      default: return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ABOUT ME"
          title="A Little About Me"
          subtitle="Discover my story, mindset, professional experience, and technical drive."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Profile Card & Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Visual Glass Profile Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group">
              <div className="flex items-center gap-5 pb-6 border-b border-slate-800">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-indigo-500/40 bg-slate-900 shrink-0 shadow-lg">
                  <img
                    src={parijatPhoto}
                    alt="Mayur Yadav Profile"
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                  <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {personalInfo.preferredName}
                  </h3>
                  <p className="text-xs font-mono text-cyan-300">
                    ({personalInfo.name})
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    BCA AI Student &amp; Professional
                  </p>
                </div>
              </div>

              {/* Personal Fast Facts */}
              <div className="py-6 space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500 font-mono flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-indigo-400" /> Education
                  </span>
                  <span className="font-medium text-white text-right">BCA in AI (2025–2028)</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500 font-mono flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" /> University
                  </span>
                  <span className="font-medium text-white">Invertis University</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500 font-mono flex items-center gap-2">
                    <Target className="w-4 h-4 text-indigo-400" /> Focus Areas
                  </span>
                  <span className="font-medium text-cyan-300">AI, Web Dev &amp; CRM</span>
                </div>

                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-slate-500 font-mono flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4 text-cyan-400" /> Experience
                  </span>
                  <span className="font-medium text-white">Sales &amp; Admission Counseling</span>
                </div>
              </div>

              {/* Quote / Philosophy Pill */}
              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200 italic leading-relaxed">
                “I believe in continuous learning, taking on new challenges, and growing both personally and professionally.”
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl border border-white/5 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 font-mono">
                  BCA (AI)
                </p>
                <p className="text-xs text-slate-400 mt-1 font-mono">Major Degree</p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-white/5 text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400 font-mono">
                  2+
                </p>
                <p className="text-xs text-slate-400 mt-1 font-mono">Roles in CRM &amp; Sales</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Full Narrative & Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Biography Narrative Container */}
            <div className="glass-card rounded-3xl p-6 sm:p-9 border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" /> Personal Narrative
              </div>

              <p className="text-lg sm:text-xl font-bold text-white leading-snug">
                Hi, I’m Mayur Yadav!
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a passionate, creative, and self-motivated individual with experience in{' '}
                <span className="text-white font-medium">Sales, Marketing, Customer Relationship Management, Media, and Event Hosting</span>.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I have worked as a <span className="text-cyan-300 font-medium">Sales Executive at Dining Bar</span> and as an{' '}
                <span className="text-cyan-300 font-medium">Admission Counsellor at Invertis University</span>, where I developed strong communication, interpersonal, problem-solving, and client-handling skills.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I enjoy connecting with people, exploring new opportunities, learning new technologies, and turning creative ideas into reality. I also have an interest in web development, digital creativity, and personal branding.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I believe in continuous learning, taking on new challenges, and growing both personally and professionally. My goal is to build meaningful professional relationships and contribute positively to every organization I work with.
              </p>

              <div className="pt-3 border-t border-slate-800">
                <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                  Let’s connect and create something amazing together!
                </p>
              </div>
            </div>

            {/* 4 Professional Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutHighlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover p-5 rounded-2xl border border-white/5 space-y-2.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner">
                    {getHighlightIcon(item.icon)}
                  </div>
                  <h4 className="font-bold text-white text-base">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
