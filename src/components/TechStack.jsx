import React from 'react';
import { Sparkles, MessageCircle, Clock, ShieldCheck, Cpu, Code2, Database, GitBranch, Layers, Server } from 'lucide-react';

export default function TechStack() {
  const techBadges = [
    { name: 'React 19', desc: 'Component Architecture', icon: Code2, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { name: 'Node.js', desc: 'Backend Engineering', icon: Server, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { name: 'Express.js', desc: 'RESTful API Services', icon: Layers, color: 'text-slate-300', bg: 'bg-slate-800' },
    { name: 'MongoDB', desc: 'Database Schemas', icon: Database, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { name: 'Git & GitHub', desc: 'Version Control', icon: GitBranch, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { name: 'Tailwind CSS v4', desc: 'Utility Styling System', icon: Cpu, color: 'text-teal-400', bg: 'bg-teal-500/10' },
  ];

  return (
    <section id="tech-stack" className="py-20 md:py-28 relative bg-slate-950/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Tech Badges Grid */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Modern Stack</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Tech Stack & Engineering Core
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Production-grade technologies chosen for speed, security, maintainability, and clean user experiences.
              </p>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {techBadges.map((tech, idx) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={idx}
                    className="glass-panel p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
                  >
                    <div className={`w-8 h-8 rounded-lg ${tech.bg} flex items-center justify-center ${tech.color} mb-3`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{tech.name}</div>
                      <div className="text-[11px] text-slate-400 font-mono">{tech.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Why Work With Me (Communication, Speed, Reliability) */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 bg-slate-900/80">
              
              <h3 className="text-xl font-bold text-white pb-3 border-b border-slate-800">
                Why Partner With Me?
              </h3>

              {/* Backend & API Expertise */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Backend & API Expertise</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Take on complex functional requirements, custom Node APIs, third-party integrations, and automated workflows with total confidence — expanding what you can offer clients.
                  </p>
                </div>
              </div>

              {/* White-Label & Agency Ready */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">White-Label & Agency Ready</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Work behind the scenes as your silent technical partner or alongside your team under your agency brand. Complete confidentiality and zero client friction guaranteed.
                  </p>
                </div>
              </div>

              {/* Rapid & Reliable Delivery */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Rapid & Reliable Delivery</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Avoid expensive dev hires and project delays. Fast turnarounds, clean modular code, transparent milestone updates, and rapid communication guaranteed within 24 hours.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
