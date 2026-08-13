import React, { useState } from 'react';
import { Send, Calendar, Sparkles, CheckCircle2, Mail, User, DollarSign, MessageSquare, Clock, ArrowRight } from 'lucide-react';

export default function Contact({ onBookCall }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Freelancer Technical Co-Development',
    budget: '$1,000 - $2,500',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-950/80 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Calendly Alternative & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Technical Partnership</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build & Scale Together
              </h2>
              <p className="text-slate-400 text-base mt-2">
                Have a client project, custom backend requirement, or white-label build in mind? Send a message or schedule a 15-minute strategy call.
              </p>
            </div>

            {/* Direct Calendly Link Block */}
            <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 via-emerald-950/20 to-slate-900 relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Schedule a Consultation</h3>
                  <p className="text-xs text-slate-300">Book a 15-Minute Strategy Call</p>
                </div>
              </div>
              
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Discuss your client requirements, technical stack, timeline, and white-label preferences live on Zoom.
              </p>

              <button
                onClick={onBookCall}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 group-hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Call on Calendly</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-4 rounded-xl glass-panel border border-slate-800 text-slate-300">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400 font-mono">DIRECT EMAIL</div>
                  <a href="mailto:alex@devstudio.app" className="text-sm font-semibold text-white hover:text-emerald-400">
                    alex@devstudio.app
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl glass-panel border border-slate-800 text-slate-300">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400 font-mono">RESPONSE TIME</div>
                  <div className="text-sm font-semibold text-white">Guaranteed within 24 hours</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/90 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mb-2">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out, <span className="text-emerald-400 font-semibold">{formData.name}</span>. I have received your project details and will reply to <span className="text-white font-medium">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white pb-3 border-b border-slate-800">
                    Send a Partnership Inquiry
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Full Name <span className="text-emerald-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                        <input
                          required
                          type="text"
                          placeholder="Jordan Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                        <input
                          required
                          type="email"
                          placeholder="jordan@agency.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Project Type Dropdown */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Inquiry Type <span className="text-emerald-400">*</span>
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                      >
                        <option value="Freelancer Technical Co-Development">Freelancer Co-Dev (Backend / APIs)</option>
                        <option value="Agency White-Label Build">Agency White-Label Build (Web Apps & Sites)</option>
                        <option value="Workflow Automation & APIs">Workflow Automation & API Integration</option>
                        <option value="Bug Fixes & Maintenance">Bug Fixes & Code Support</option>
                        <option value="Ongoing Technical Retainer">Ongoing Technical Retainer</option>
                        <option value="Other Technical Partnership">Other Technical Inquiry</option>
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Estimated Budget Range
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                        >
                          <option value="< $1,000">&lt; $1,000 (Starter Portfolio)</option>
                          <option value="$1,000 - $2,500">$1,000 - $2,500 (Standard Site)</option>
                          <option value="$2,500 - $5,000">$2,500 - $5,000 (Custom Web App)</option>
                          <option value="$5,000+">$5,000+ (Full Platform / Enterprise)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Details / Goals <span className="text-emerald-400">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                      <textarea
                        required
                        rows="4"
                        placeholder="Tell me about your goals, desired launch date, or current site pain points..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Request</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400 font-mono">
                    ⚡ Response within 24 hours. Your information is 100% confidential.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
