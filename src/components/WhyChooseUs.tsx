import React from 'react';
import { Code, DollarSign, Zap, FileText, MessageSquare, Sparkles, Handshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const chooseUsItems = [
    {
      title: 'Negotiable Student Pricing',
      description: 'Budget plans from ₹500 to ₹3,000 — open for price negotiation!',
      icon: Handshake,
      color: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Pocket Friendly Rates',
      description: 'Affordable academic assistance with complete source code & docs.',
      icon: DollarSign,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: '100% Custom Development',
      description: 'Built according to your specific college topic and guidelines.',
      icon: Code,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Complete Project Docs',
      description: 'Plagiarism-free IEEE report, SRS document & PPT presentation slides.',
      icon: FileText,
      color: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'Fast Turnaround',
      description: 'Quick delivery within 24 to 72 hours for urgent submission deadlines.',
      icon: Zap,
      color: 'from-rose-500 to-pink-600',
    },
    {
      title: 'Direct Call / WhatsApp',
      description: 'Direct contact with developers on 9373372183 — no middleman!',
      icon: MessageSquare,
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 relative bg-slate-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/80 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            Why Choose Us?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for <span className="text-gradient">Student Success</span>
          </h2>
          <p className="text-slate-400 text-base">
            Simple, honest, student-first project assistance with negotiable pricing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chooseUsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group glass-panel p-6 rounded-2xl glow-card border border-slate-800/80 hover:border-indigo-500/50 transition-all flex items-start gap-4"
              >
                <div
                  className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg shrink-0`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
