import React from 'react';
import { Award, Layers, Cpu, FileCheck2, ArrowRight, Tag } from 'lucide-react';

export const Services: React.FC = () => {
  const whatsappUrl = "https://wa.me/919373372183?text=Hi%20Student%20Project%20Hub,%20I%20want%20to%20know%20more%20about%20your%20project%20pricing.";

  const servicesList = [
    {
      title: 'Mini Projects',
      price: '₹500 – ₹1,200',
      description: 'Simple academic projects for semester submissions.',
      features: ['Full Source Code', 'Database Script', 'Setup Instructions', 'Fast 24-48h Delivery'],
      icon: Layers,
      gradient: 'from-cyan-600 to-blue-600',
    },
    {
      title: 'Major & Final Year Projects',
      price: '₹1,500 – ₹2,500',
      description: 'Complete major applications with complete project report.',
      features: ['Unlocked Codebase', 'IEEE Format Report', 'PPT Presentation', 'Viva Questions'],
      icon: Award,
      gradient: 'from-indigo-600 to-purple-600',
    },
    {
      title: 'Custom Development',
      price: '₹2,000 – ₹3,000',
      description: 'Developed according to your exact college requirements.',
      features: ['Tailored Synopsis Code', 'Custom Features', 'Preferred Tech Stack', 'Deploy Support'],
      icon: Cpu,
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Documentation & PPT',
      price: '₹500 – ₹1,000',
      description: 'Project Report, SRS, UML Diagrams, PPT, and Viva Q&A.',
      features: ['Plagiarism-free Report', 'ER & Use Case Diagrams', 'Presentation Slides', 'Ready for Submission'],
      icon: FileCheck2,
      gradient: 'from-emerald-600 to-teal-600',
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/80 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            Affordable Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Clear & <span className="text-gradient">Affordable Packages</span>
          </h2>
          <p className="text-slate-400 text-base">
            Budget friendly pricing from ₹500 to ₹3,000 depending on project complexity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-indigo-500/50 glow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-tr ${service.gradient} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-950 border border-emerald-700 text-emerald-300 flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      {service.price}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-200 hover:text-white border border-slate-800 text-xs font-bold transition-all"
                >
                  <span>Inquire on WhatsApp</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
