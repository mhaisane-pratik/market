import React, { useState } from 'react';
import { ShieldCheck, Cpu } from 'lucide-react';

export const Technologies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const techList = [
    { name: 'Java', category: 'Backend', desc: 'Enterprise Core & OOP', icon: '☕', tag: 'Core' },
    { name: 'Spring Boot', category: 'Backend', desc: 'Microservices & Enterprise APIs', icon: '🍃', tag: 'Popular' },
    { name: 'React.js', category: 'Frontend', desc: 'Modern Single Page Applications', icon: '⚛️', tag: 'Trending' },
    { name: 'Next.js', category: 'Frontend', desc: 'SSR & Fullstack React Framework', icon: '▲', tag: 'Modern' },
    { name: 'Node.js', category: 'Backend', desc: 'Scalable JS Runtime Environment', icon: '🟢', tag: 'Fast' },
    { name: 'Express.js', category: 'Backend', desc: 'Lightweight Web Framework', icon: '⚡', tag: 'API' },
    { name: 'Python', category: 'Backend', desc: 'AI, ML & Automation Scripts', icon: '🐍', tag: 'High Demand' },
    { name: 'Django', category: 'Backend', desc: 'High-level Python Web Framework', icon: '🎸', tag: 'Fullstack' },
    { name: 'Flutter', category: 'Mobile', desc: 'Cross-Platform Mobile Apps', icon: '💙', tag: 'Mobile' },
    { name: 'Android', category: 'Mobile', desc: 'Native Java / Kotlin Apps', icon: '🤖', tag: 'Native' },
    { name: 'PHP', category: 'Backend', desc: 'Web Systems & MySQL Projects', icon: '🐘', tag: 'Classic' },
    { name: 'Laravel', category: 'Backend', desc: 'PHP Web Application Framework', icon: '🔴', tag: 'Robust' },
    { name: 'MySQL', category: 'Database', desc: 'Relational Database System', icon: '🐬', tag: 'Standard' },
    { name: 'PostgreSQL', category: 'Database', desc: 'Enterprise SQL Database', icon: '🐘', tag: 'Enterprise' },
    { name: 'MongoDB', category: 'Database', desc: 'NoSQL Document Store', icon: '🍃', tag: 'NoSQL' },
    { name: 'AI & Machine Learning', category: 'AI/ML', desc: 'Neural Networks & Prediction', icon: '🧠', tag: 'Advanced' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Mobile', 'AI/ML'];

  const filteredTech = activeTab === 'All' 
    ? techList 
    : techList.filter(t => t.category === activeTab);

  return (
    <section id="technologies" className="py-24 relative bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="h-3.5 w-3.5" />
            Technologies
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technologies We <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We build academic and commercial projects across all modern tech stacks.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-slate-950 border border-slate-800 backdrop-blur-md gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === cat
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="group glass-panel p-5 rounded-2xl border border-slate-800/90 hover:border-indigo-500/60 glow-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl group-hover:scale-125 transition-transform">{tech.icon}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-indigo-300 border border-slate-700">
                    {tech.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {tech.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  {tech.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>{tech.category}</span>
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
