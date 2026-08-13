import React, { useState } from 'react';
import { ExternalLink, Sparkles, ArrowUpRight, Code, CheckCircle, TrendingUp, Layers } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'proj-1',
      category: 'freelancers',
      title: 'Nexus UI/UX Studio — Freelancer Co-Build',
      audienceTag: 'Freelancer Partner',
      type: 'Custom Backend & API Development',
      imageBg: 'from-emerald-900/40 to-slate-900',
      mockupHeader: 'nexusstudio.design / backend-core',
      problem: 'Freelance UI designer landed a $12k client project requiring complex Node.js backend logic and authentication beyond their stack.',
      solution: 'Worked behind the scenes as technical developer, building secure REST APIs, database schemas, and Stripe payment integration.',
      result: 'Designer shipped 100% on schedule under their brand and secured an ongoing $1,500/mo client retainer.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API'],
      liveUrl: 'https://example.com/freelancer-demo',
      githubUrl: 'https://github.com/example/freelancer-portfolio',
    },
    {
      id: 'proj-2',
      category: 'agencies',
      title: 'Kreativ Digital — Agency White-Label Web Portal',
      audienceTag: 'Agency White-Label',
      type: 'Custom Client Portal & Admin Dashboard',
      imageBg: 'from-cyan-900/40 to-slate-900',
      mockupHeader: 'portal.kreativdigital.com',
      problem: 'Digital marketing agency needed to deliver a custom client portal for an enterprise account, but lacked internal dev bandwidth.',
      solution: 'Engineered a white-label React + Node dashboard integrating Stripe and HubSpot CRM APIs with role-based access control.',
      result: 'Agency expanded their service offerings and increased client account lifetime value by 2.5x without hiring full-time devs.',
      tech: ['React', 'Node.js', 'HubSpot API', 'Tailwind CSS', 'JWT Auth'],
      liveUrl: 'https://example.com/business-demo',
      githubUrl: 'https://github.com/example/business-portal',
    },
    {
      id: 'proj-3',
      category: 'agencies',
      title: 'Verve Studio — Multi-Tool API & Automation Mesh',
      audienceTag: 'Agency Partnership',
      type: 'API Integration & Workflow Automation',
      imageBg: 'from-indigo-900/40 to-slate-900',
      mockupHeader: 'vervestudio.co / api-mesh',
      problem: "Design agency's client lost 15+ hours weekly to manual data transfers between booking forms, payments, and CRM platforms.",
      solution: 'Built custom webhook integrations and an automated Node.js API bridge connecting payments, calendar sync, and CRM leads.',
      result: 'Eliminated 90% of manual data entry errors and boosted client appointment booking speed by 45%.',
      tech: ['Node.js', 'Webhooks', 'REST APIs', 'Stripe', 'Express'],
      liveUrl: 'https://example.com/ecom-demo',
      githubUrl: 'https://github.com/example/verve-artisan',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Technical Delivery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Partnerships & Builds
            </h2>
            <p className="text-slate-400 text-base mt-2 max-w-xl">
              See how software engineering, custom backends, and workflow automations solve complex challenges for freelancers and agencies.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'all' 
                  ? 'bg-emerald-500 text-slate-950 shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('freelancers')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'freelancers' 
                  ? 'bg-emerald-500 text-slate-950 shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Freelancer Co-Builds
            </button>
            <button
              onClick={() => setActiveFilter('agencies')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeFilter === 'agencies' 
                  ? 'bg-emerald-500 text-slate-950 shadow-md' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Agency Builds
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800"
            >
              <div>
                
                {/* Visual Image / Screenshot Mockup Placeholder */}
                <div className={`h-48 bg-gradient-to-br ${project.imageBg} relative p-4 flex flex-col justify-between overflow-hidden border-b border-slate-800/80`}>
                  {/* Browser Bar header mockup */}
                  <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur border border-slate-800 text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                    </div>
                    <span className="text-slate-300 truncate max-w-[180px]">{project.mockupHeader}</span>
                    <span className="w-3"></span>
                  </div>

                  {/* Graphic Mockup Elements */}
                  <div className="my-auto text-center space-y-1">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-950/90 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                      {project.audienceTag}
                    </span>
                    <div className="text-white text-xs font-semibold opacity-90">{project.type}</div>
                  </div>

                  {/* Tag footer inside mockup */}
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                    <span>STATUS: LIVE</span>
                    <span>100% RESPONSIVE</span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4">
                  
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {project.title}
                  </h3>

                  {/* Problem -> Solution -> Result Structure */}
                  <div className="space-y-3 pt-2 text-xs">
                    
                    <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-slate-300">
                      <span className="font-bold text-rose-400 block mb-0.5">PROBLEM:</span>
                      <span>{project.problem}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                      <span className="font-bold text-emerald-400 block mb-0.5">SOLUTION:</span>
                      <span>{project.solution}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-slate-200">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-400 mb-0.5">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>VERIFIED RESULT:</span>
                      </div>
                      <span>{project.result}</span>
                    </div>

                  </div>

                  {/* Tech Stack Tags */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">Tech Stack</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Live Link Buttons Footer */}
              <div className="p-6 pt-0 mt-2 flex items-center justify-between gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-emerald-500/10"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                  aria-label="View Source Code"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
