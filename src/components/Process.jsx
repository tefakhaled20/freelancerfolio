import React from 'react';
import { Search, Palette, Code, Rocket, Sparkles, MessageSquareCheck, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Scope',
      icon: Search,
      badge: 'Step 1',
      desc: 'We map out your audience goals, key features, wireframes, and technical requirements in a 15-min call.',
      deliverable: 'Clear timeline & flat project quote',
    },
    {
      number: '02',
      title: 'Design & Prototype',
      icon: Palette,
      badge: 'Step 2',
      desc: 'I create modern UI/UX mockups with responsive layouts, curated color palettes, and clear call-to-actions.',
      deliverable: 'Interactive visual design approval',
    },
    {
      number: '03',
      title: 'Build & Optimize',
      icon: Code,
      badge: 'Step 3',
      desc: 'Clean modular React code development with Tailwind CSS, speed tuning, mobile testing, and backend APIs.',
      deliverable: 'Staging preview link for your review',
    },
    {
      number: '04',
      title: 'Launch & Handover',
      icon: Rocket,
      badge: 'Step 4',
      desc: 'Domain setup, SSL configuration, Google indexing, training video, and 30 days of included post-launch support.',
      deliverable: 'Live production site & source code',
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Simple 4-Step Process From Idea to Launch
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            No endless back-and-forth. A clear, transparent road map engineered for quick turnaround and zero friction.
          </p>
        </div>

        {/* 4-Step Horizontal Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-6 relative flex flex-col justify-between border border-slate-800 group"
              >
                <div>
                  
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold text-slate-700 group-hover:text-emerald-400 transition-colors font-mono">
                      {step.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all">
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {step.desc}
                  </p>

                </div>

                <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-300 font-mono flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{step.deliverable}</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note on working closely with clients */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900/90 to-cyan-950/40 border border-emerald-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
            <MessageSquareCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white mb-1">
              Close Collaboration Guarantee
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              You will work directly with me — the developer building your site. No account managers, no game of phone tag. Enjoy async Loom video progress updates, direct Slack or email access, and honest turnaround commitments.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
