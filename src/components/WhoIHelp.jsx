import React from 'react';
import { User, Building, CheckCircle2, Sparkles, ArrowRight, Zap, Target, Layers, Shield } from 'lucide-react';

export default function WhoIHelp({ onBookCall }) {
  return (
    <section id="who-i-help" className="py-20 md:py-28 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Partner Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Support for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Freelancers & Agencies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Instead of managing client projects alone, leverage a dedicated software developer to build, improve, automate, and maintain technical solutions for you and your clients.
          </p>
        </div>

        {/* Two-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Column 1: For Freelancers */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">For Creative Freelancers</h3>
                  <p className="text-xs text-slate-400">Web Designers/Devs, UI/UX, Motion Designers & Marketers</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-emerald-300 text-xs font-mono font-medium">
                Solo Partner
              </span>
            </div>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Take on high-budget projects requiring complex backend development, APIs, or advanced functionality without turning clients away or spending weeks learning code.
            </p>

            {/* Feature List */}
            <ul className="space-y-3 mb-8">
              {[
                { title: 'Backend & Advanced Logic', desc: 'Add custom Node backends, database schemas, auth, and complex logic.' },
                { title: 'API & Platform Integration', desc: 'Seamlessly connect Stripe, CRMs, webhooks, and third-party tools.' },
                { title: 'Bug Fixing & Project Rescue', desc: 'Fix tricky code bugs and improve existing client websites.' },
                { title: 'White-Label Collaboration', desc: 'Work behind the scenes as your technical partner under your brand.' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-100">{item.title}</span>
                    <span className="text-slate-400"> — {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Behind-the-Scenes Partner</span>
              <button
                onClick={onBookCall}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1 transition-all"
              >
                <span>Partner on a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Column 2: For Agencies */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">For Digital & Creative Agencies</h3>
                  <p className="text-xs text-slate-400">Web, Marketing & Design Studios</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-cyan-300 text-xs font-mono font-medium">
                Agency Extension
              </span>
            </div>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Expand your agency's service offerings and technical capacity instantly without the high overhead and risk of hiring full-time software developers.
            </p>

            {/* Feature List */}
            <ul className="space-y-3 mb-8">
              {[
                { title: 'Full Client Web Apps & Sites', desc: 'Custom frontend and backend web applications built to your specs.' },
                { title: 'Workflow & Tool Automation', desc: 'Automate repetitive workflows and connect client platforms.' },
                { title: 'Reliable Technical Coverage', desc: 'Dedicated technical support when client projects become complex.' },
                { title: 'Scalable On-Demand Capacity', desc: 'White-label development partner for individual builds or retainers.' },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-100">{item.title}</span>
                    <span className="text-slate-400"> — {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">White-Label Engineering</span>
              <button
                onClick={onBookCall}
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
              >
                <span>Expand Agency Offerings</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
