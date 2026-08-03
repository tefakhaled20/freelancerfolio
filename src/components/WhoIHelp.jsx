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
            <span>Targeted Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tailored Web Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Two Audiences</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you're an independent creator building a high-impact personal brand or a business scaling online operations, I deliver custom solutions built for results.
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
                  <h3 className="text-xl font-bold text-white">For Freelancers</h3>
                  <p className="text-xs text-slate-400">Designers, Consultants, Writers & Developers</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-emerald-300 text-xs font-mono font-medium">
                Personal Branding
              </span>
            </div>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Portfolio & personal brand sites designed to highlight your work, establish high authority, and convert casual visitors into high-paying client inquiries.
            </p>

            {/* Feature List */}
            <ul className="space-y-3 mb-8">
              {[
                { title: 'Case Study Showcases', desc: 'Present your past projects with rich narrative layouts.' },
                { title: 'Direct Booking Funnels', desc: 'Seamlessly integrate Calendly, SavvyCal, or custom booking forms.' },
                { title: 'Lightning-Fast Load Speeds', desc: 'Score 95+ on Google Lighthouse for maximum SEO and retention.' },
                { title: 'Clear Value Messaging', desc: 'Structured layouts designed to convert prospects immediately.' },
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
              <span className="text-xs text-slate-400 font-mono">Turnaround: 7 to 14 days</span>
              <button
                onClick={onBookCall}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-1 transition-all"
              >
                <span>Build Freelancer Site</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Column 2: For Businesses */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">For Businesses</h3>
                  <p className="text-xs text-slate-400">Agencies, Startups, Service Providers & Retail</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-cyan-300 text-xs font-mono font-medium">
                Business Systems
              </span>
            </div>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Custom websites, online booking & ordering portals, and admin management dashboards built specifically to integrate into your existing daily business workflow.
            </p>

            {/* Feature List */}
            <ul className="space-y-3 mb-8">
              {[
                { title: 'Custom Web Apps & Dashboards', desc: 'Track clients, orders, inventory, or internal tasks.' },
                { title: 'Online Ordering & Booking Engines', desc: 'Allow customers to pay, schedule, and request services seamlessly.' },
                { title: 'Modern API & CRM Integrations', desc: 'Connect Stripe, HubSpot, Supabase, Node APIs, and more.' },
                { title: 'Full Mobile & Desktop Responsiveness', desc: 'Perfect user experience on mobile phones, tablets, and desktops.' },
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
              <span className="text-xs text-slate-400 font-mono">Turnaround: 2 to 4 weeks</span>
              <button
                onClick={onBookCall}
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
              >
                <span>Build Business Solution</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
