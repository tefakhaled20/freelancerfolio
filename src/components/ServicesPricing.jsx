import React, { useState } from 'react';
import { Check, Sparkles, User, Building, ArrowRight, Clock, ShieldCheck, Zap } from 'lucide-react';

export default function ServicesPricing({ onBookCall }) {
  const [track, setTrack] = useState('freelancer'); // 'freelancer' | 'agency'

  const freelancerPackages = [
    {
      name: 'Backend & API Integration',
      tagline: 'Ideal for designers & creative freelancers needing backend logic, API connections, or bug fixes for client projects.',
      price: '$750',
      period: 'starting price',
      turnaround: '3 - 5 Days',
      popular: false,
      features: [
        'Custom REST API & database schema setup',
        'Third-party API integrations (Stripe, CRMs, Webhooks)',
        'Authentication & user management logic',
        'Bug fixing & performance tuning for existing builds',
        'White-label code delivery & technical docs',
        '30-Day post-launch bug fix warranty',
      ],
      ctaText: 'Get Backend Support',
    },
    {
      name: 'Full Technical Co-Development',
      tagline: 'Complete full-stack engineering for client builds that exceed traditional frontend or no-code limits.',
      price: '$1,450',
      period: 'starting price',
      turnaround: '7 - 10 Days',
      popular: true,
      features: [
        'Full React + Node.js custom web application build',
        'Custom client portal or interactive app functionality',
        'Automated workflow & multi-platform connection',
        'Speed & SEO-optimized production architecture',
        'Behind-the-scenes white-label developer option',
        '3 Months priority technical support & updates',
      ],
      ctaText: 'Co-Develop a Project',
    },
  ];

  const agencyPackages = [
    {
      name: 'White-Label Client Build',
      tagline: 'Turnkey technical development for agency websites, web applications, and client platforms.',
      price: '$1,850',
      period: 'starting price',
      turnaround: '2 Weeks',
      popular: false,
      features: [
        'Full-stack web application built to agency Figma specs',
        'Custom backend logic, database architecture & APIs',
        'Multi-platform integrations & workflow automation',
        'Thorough QA testing across mobile, tablet & desktop',
        'White-label code handoff with video walkthrough',
        '1 Month post-launch maintenance included',
      ],
      ctaText: 'Order White-Label Build',
    },
    {
      name: 'Custom Backend & Automation Hub',
      tagline: 'Advanced web platforms, client portals, and automated operations hubs for agency clients.',
      price: '$2,950',
      period: 'starting price',
      turnaround: '3 - 4 Weeks',
      popular: true,
      features: [
        'Custom client portal, SaaS MVP, or internal dashboard',
        'Complex API mesh (Stripe, HubSpot, Supabase, webhooks)',
        'Automated operations & repetitive workflow reduction',
        'Security hardening, database schemas & admin controls',
        'Dedicated technical documentation & team training',
        '3 Months priority maintenance & SLA',
      ],
      ctaText: 'Build Automation Hub',
    },
    {
      name: 'Dedicated Tech Partner Retainer',
      tagline: 'On-call engineering capacity, code updates, urgent bug fixes, and technical support for your agency.',
      price: '$450',
      period: 'per month',
      turnaround: 'Continuous Support',
      popular: false,
      features: [
        'Monthly developer hours dedicated to agency client accounts',
        'Urgent bug fixing & rapid technical troubleshooting',
        'Platform & API maintenance across active agency clients',
        'Priority 4-hour SLA response for critical issues',
        'Direct integration into agency Slack & management tools',
        'Flexible month-to-month commitment with zero contracts',
      ],
      ctaText: 'Subscribe to Retainer',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative bg-slate-950/80 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Partner Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Services & Partnership Packages
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Fair project rates and retainer options. Clean code, white-label delivery, and dependable developer support.
          </p>

          {/* Pricing Track Toggle */}
          <div className="pt-4 inline-flex items-center p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
            <button
              onClick={() => setTrack('freelancer')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                track === 'freelancer'
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Freelancer Partner Track</span>
            </button>
            <button
              onClick={() => setTrack('agency')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                track === 'agency'
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building className="w-4 h-4" />
              <span>Agency Partner Track</span>
            </button>
          </div>
        </div>

        {/* Package Grid */}
        <div className={`grid grid-cols-1 ${
          track === 'freelancer' ? 'md:grid-cols-2 max-w-4xl' : 'md:grid-cols-3'
        } mx-auto gap-8`}>
          
          {(track === 'freelancer' ? freelancerPackages : agencyPackages).map((pkg, idx) => (
            <div
              key={idx}
              className={`glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative border ${
                pkg.popular 
                  ? 'border-emerald-500/60 bg-slate-900/90 shadow-2xl shadow-emerald-500/10' 
                  : 'border-slate-800'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-[11px] uppercase tracking-wider shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                    <Clock className="w-3 h-3 text-emerald-400" />
                    <span>{pkg.turnaround}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {pkg.tagline}
                </p>

                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">{pkg.price}</span>
                    <span className="text-xs text-slate-400">{pkg.period}</span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 mb-8">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">What's Included:</div>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Package CTA */}
              <button
                onClick={onBookCall}
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs transition-all shadow-md ${
                  pkg.popular
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20'
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}

        </div>

        {/* Custom Quote Note */}
        <div className="mt-12 text-center p-6 rounded-2xl glass-panel border border-slate-800 max-w-2xl mx-auto">
          <p className="text-slate-300 text-xs sm:text-sm">
            Need a custom enterprise scope, multi-system integration, or specialized API work?{' '}
            <button onClick={onBookCall} className="text-emerald-400 underline font-semibold hover:text-emerald-300">
              Request a custom quote or book a discovery call.
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
