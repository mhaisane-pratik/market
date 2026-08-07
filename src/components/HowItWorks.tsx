import React from 'react';
import { PhoneCall, Code2, PackageCheck, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const whatsappUrl = "https://wa.me/919373372183?text=Hi%20Student%20Project%20Hub,%20I%20want%20to%20discuss%20my%20college%20project%20and%20negotiate%20the%20price.";
  const phoneUrl = "tel:+919373372183";

  const steps = [
    {
      number: '01',
      title: '1. WhatsApp or Call Us',
      subtitle: 'Share your project topic, guidelines & budget on WhatsApp or Phone Call (9373372183).',
      desc: 'Discuss your requirements directly with our developer. Prices are negotiable based on your budget!',
      icon: MessageSquare,
      color: 'from-emerald-600 to-teal-600',
    },
    {
      number: '02',
      title: '2. We Develop Your Project',
      subtitle: 'Clean code, IEEE format report & PPT prepared for your college submission.',
      desc: 'Our experienced developers build your application according to your college requirements.',
      icon: Code2,
      color: 'from-purple-600 to-indigo-600',
    },
    {
      number: '03',
      title: '3. Complete Delivery & Setup',
      subtitle: 'Receive full source code, report, PPT deck & live AnyDesk installation support.',
      desc: 'Get full unlocked code, database, report, slides & viva explanation support.',
      icon: PackageCheck,
      color: 'from-blue-600 to-cyan-600',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5" />
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            3 simple steps — no complicated forms required. Contact us directly!
          </p>
        </div>

        {/* Stepper Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex flex-col items-center">
                <div className="w-full glass-panel p-8 rounded-3xl border border-slate-800 hover:border-indigo-500/50 glow-card text-left flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`h-14 w-14 rounded-2xl bg-gradient-to-tr ${step.color} flex items-center justify-center text-white shadow-xl`}>
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="text-4xl font-extrabold font-mono text-slate-700">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs font-bold text-indigo-300 mb-4 leading-relaxed">
                      {step.subtitle}
                    </p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                    >
                      <span>WhatsApp Chat</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={phoneUrl}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300"
                    >
                      <PhoneCall className="h-3.5 w-3.5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
