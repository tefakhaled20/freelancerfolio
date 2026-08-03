import React from 'react';
import { Code2, Mail, ArrowUp, Zap } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-slate-950 font-bold">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                DevStudio<span className="text-emerald-400">.</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Full-stack web engineering studio building speed-optimized, high-converting websites for freelancers and custom platforms for growing businesses.
            </p>
            
            {/* Trust Badge Line */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[11px]">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>⚡ Guaranteed response within 24 hours</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] font-mono">Navigation</div>
            <ul className="space-y-2">
              <li><a href="#who-i-help" className="hover:text-emerald-400 transition-colors">Who I Help</a></li>
              <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Portfolio & Work</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services & Pricing</a></li>
              <li><a href="#process" className="hover:text-emerald-400 transition-colors">4-Step Process</a></li>
              <li><a href="#tech-stack" className="hover:text-emerald-400 transition-colors">Tech Stack</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact / Book Call</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] font-mono">Connect & Code</div>
            <div className="flex flex-col space-y-2.5">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <svg className="w-4 h-4 fill-emerald-400" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn Profile</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <svg className="w-4 h-4 fill-cyan-400" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub Repositories</span>
              </a>

              <a
                href="mailto:alex@devstudio.app"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>alex@devstudio.app</span>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <svg className="w-4 h-4 fill-sky-400" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>Twitter / X</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} DevStudio. All rights reserved. Built with React & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
