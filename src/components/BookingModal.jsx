import React, { useState } from 'react';
import { Calendar, Clock, X, CheckCircle2, User, Mail, Sparkles } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 2:00 PM');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', note: '' });

  if (!isOpen) return null;

  const dates = [
    { day: 'Tomorrow', time: '10:00 AM EST' },
    { day: 'Tomorrow', time: '2:00 PM EST' },
    { day: 'Friday', time: '11:30 AM EST' },
    { day: 'Friday', time: '4:00 PM EST' },
    { day: 'Monday', time: '1:00 PM EST' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl glass-panel border border-slate-800 bg-slate-900/90 p-6 sm:p-8 shadow-2xl shadow-emerald-950/20">
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm mb-2">
              <Sparkles className="w-4 h-4" />
              <span>15-Minute Discovery Call</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Book a Strategy Session</h3>
            <p className="text-slate-400 text-sm mb-6">
              Let's discuss your project goals, timeline, and exact scope. Free consultation with no obligations.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Select an Available Slot
                </label>
                <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto pr-1">
                  {dates.map((slot, idx) => {
                    const label = `${slot.day}, ${slot.time}`;
                    const isSelected = selectedDate === label;
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setSelectedDate(label)}
                        className={`flex items-center justify-between p-3 rounded-xl border text-sm transition-all ${
                          isSelected 
                            ? 'bg-emerald-500/10 border-emerald-500 text-emerald-300' 
                            : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:border-slate-600 hover:bg-slate-800/80'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-emerald-400" />
                          <span>{slot.day}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{slot.time}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs text-slate-300 font-medium mb-1">Your Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                    <input
                      required
                      type="text"
                      placeholder="Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 font-medium mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                    <input
                      required
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 font-medium mb-1">What are you building? (Optional)</label>
                <textarea
                  rows="2"
                  placeholder="E.g., Freelancer portfolio site or SaaS booking system..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-lg shadow-emerald-500/20"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">You're Booked!</h3>
            <p className="text-slate-300 text-sm mb-4">
              Calendar invite sent to <span className="text-emerald-400 font-medium">{formData.email}</span> for <span className="text-white font-medium">{selectedDate}</span>.
            </p>
            <p className="text-xs text-slate-500 mb-6">
              I look forward to speaking with you and bringing your project to life!
            </p>
            <button
              onClick={() => { setStep(1); onClose(); }}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
