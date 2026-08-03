import React from 'react';
import { ArrowRight, Calendar, Sparkles, Zap, ShieldCheck, UserCheck, Building2, ExternalLink } from 'lucide-react';

export default function Hero({ onBookCall }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 backdrop-blur-md shadow-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-slate-200">Full-Stack Development</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 font-mono">2-3 Week Typical Delivery</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Websites for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">freelancers</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">businesses</span> who need reliable, fast delivery.
            </h1>

            {/* Subheadline Clarifying the Two Services */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              I build custom high-converting personal brand platforms for independent professionals and tailored web apps, booking engines, and admin tools for growing businesses.
            </p>

            {/* Two CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onBookCall}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base transition-all shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a call</span>
              </button>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-semibold text-sm sm:text-base transition-all hover:border-slate-600"
              >
                <span>See my work</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Quick Metrics / Trust Highlights */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80 max-w-xl mx-auto lg:mx-0">
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">100%</div>
                <div className="text-xs text-slate-400">On-Time Delivery</div>
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">&lt;24h</div>
                <div className="text-xs text-slate-400">Communication Response</div>
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">15+</div>
                <div className="text-xs text-slate-400">Projects Shipped</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Dual-Audience Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card with Glassmorphism */}
              <div className="glass-panel rounded-2xl p-6 shadow-2xl relative z-10 border border-slate-800/90 bg-slate-900/80">
                
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <span className="text-xs font-mono text-slate-400">devstudio.app // solutions</span>
                </div>

                {/* Audience 1: Freelancer Card */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-emerald-500/20 mb-4 hover:border-emerald-500/50 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">For Freelancers & Creators</h4>
                        <p className="text-xs text-slate-400">High-Converting Portfolio Sites</p>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">Fast Launch</span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-emerald-400" />
                      <span>Speed-Optimized Showcase</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      <span>Integrated Lead Funnels</span>
                    </div>
                  </div>
                </div>

                {/* Audience 2: Business Card */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">For Businesses & Agencies</h4>
                        <p className="text-xs text-slate-400">Custom Web Apps & Admin Tools</p>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">Scalable Stack</span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-cyan-400" />
                      <span>Custom Booking / Portals</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3 h-3 text-cyan-400" />
                      <span>Full Workflow Automation</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Tech Tags */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-[11px]">Powered by React & Node</span>
                  <a href="#who-i-help" className="text-emerald-400 hover:underline flex items-center gap-1 text-xs">
                    <span>Explore tracks</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>

              {/* Decorative Back Backdrop Glow */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-emerald-500/10 rounded-2xl -z-10 blur-xl"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
