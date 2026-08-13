import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function AvailabilityBanner({ onBookCall }) {
  return (
    <section className="py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl glass-panel border border-emerald-500/30 bg-gradient-to-r from-slate-900/90 via-emerald-950/40 to-slate-900/90 p-4 sm:p-6 shadow-xl shadow-emerald-950/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Status Dot + Text */}
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Currently accepting 1-2 new freelancer or agency technical partnerships</span>
                <span className="hidden md:inline font-mono text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                  Accepting Q3 Partner Slots
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Reserve developer bandwidth early to expand your capabilities or build your next client project.
              </p>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onBookCall}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20 hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            <span>Secure Your Slot</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

        </div>
      </div>
    </section>
  );
}
