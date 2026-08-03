import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, Building, User } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Independent Brand Strategist',
      category: 'Freelancer Client',
      typeIcon: User,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      quote: 'Delivered my brand portfolio site in just 6 days! The case study layout instantly elevated my perceived value — I landed two high-budget client retainer contracts within 3 weeks of launching.',
      metrics: '3.4x Increase in Direct Leads',
    },
    {
      id: 2,
      name: 'Marcus Vance',
      role: 'Operations Director, Apex Fleet Logistics',
      category: 'Business Client',
      typeIcon: Building,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      quote: 'Our custom dispatch booking platform was built flawlessly. Our staff handles order entries 70% faster now and zero orders were dropped during peak season. Incredible engineering speed and communication.',
      metrics: '70% Faster Booking Processing',
    },
    {
      id: 3,
      name: 'Elena Rostova',
      role: 'Founder, Verve Beauty & Salon',
      category: 'Business Client',
      typeIcon: Building,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      quote: 'Our previous website took 6 seconds to load and cost us customers. The new React app built here loads under 1 second and salon appointment bookings surged by 45% in the first month!',
      metrics: '98 Lighthouse Score / +45% Bookings',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What Freelancers & Businesses Say
            </h2>
            <p className="text-slate-400 text-base mt-2 max-w-xl">
              Real feedback from real client projects. Verified speed, reliability, and code quality.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Card Grid / Carousel Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => {
            const TypeIcon = t.typeIcon;
            return (
              <div
                key={t.id}
                className={`glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between border transition-all ${
                  idx === currentIndex ? 'border-emerald-500/50 bg-slate-900/90 shadow-xl' : 'border-slate-800/80'
                }`}
              >
                <div>
                  
                  {/* Category Pill & Stars */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 text-[11px] font-mono text-slate-300">
                      <TypeIcon className="w-3 h-3 text-emerald-400" />
                      <span>{t.category}</span>
                    </span>

                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, rIdx) => (
                        <Star key={rIdx} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote text */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-emerald-500/20 absolute -top-3 -left-2 -z-10" />
                    <p className="text-slate-200 text-sm leading-relaxed italic">
                      "{t.quote}"
                    </p>
                  </div>

                </div>

                {/* Profile Footer */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/30"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{t.name}</h4>
                      <p className="text-[11px] text-slate-400 truncate max-w-[170px]">{t.role}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold">
                      {t.metrics}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
