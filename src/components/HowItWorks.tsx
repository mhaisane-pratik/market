import React from 'react';
import { FormInput, Code2, PackageCheck, ArrowRight, Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: '1. Share Your Requirements',
      subtitle: 'Tell us your project topic, technology stack, or college guidelines.',
      desc: 'Submit your requirements via our form or WhatsApp (9373372183) including your preferred technology, deadline, and college format.',
      icon: FormInput,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      number: '02',
      title: '2. We Build Your Project',
      subtitle: 'Our team develops your project with clean code, proper documentation, and modern UI.',
      desc: 'Our experienced developers build your application following high industry standards, formatted report guidelines, and PPT presentation slides.',
      icon: Code2,
      color: 'from-purple-600 to-indigo-600',
    },
    {
      number: '03',
      title: '3. Get Complete Delivery',
      subtitle: 'Receive the source code, report, PPT, database, and a full project explanation.',
      desc: 'Get full unlocked source code, database script, SRS report, presentation slides, and live AnyDesk setup support with viva explanation.',
      icon: PackageCheck,
      color: 'from-emerald-600 to-teal-600',
    },
  ];

  const whatsappUrl = "https://wa.me/919373372183?text=Hi%20Student%20Project%20Hub,%20I%20want%20to%20share%20my%20project%20requirements.";

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
            3 simple steps to bring your college project idea to life.
          </p>
        </div>

        {/* 3 Stepper Grid */}
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

                  <div className="pt-6 mt-6 border-t border-slate-800/60">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                    >
                      <span>Start Step {index + 1} on WhatsApp</span>
                      <ArrowRight className="h-3.5 w-3.5" />
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
