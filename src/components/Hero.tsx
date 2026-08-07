import React from 'react';
import { CheckCircle2, Send, PhoneCall, Code2, Star, Sparkles, Tag, Handshake } from 'lucide-react';

export const Hero: React.FC = () => {
  const highlights = [
    'Projects from ₹500 to ₹3,000',
    'Prices are 100% Negotiable',
    'Full Source Code & Database',
    'Complete Report, PPT & Setup',
  ];

  const targetCourses = ['Diploma', 'BCA', 'MCA', 'B.Tech', 'BE'];
  const whatsappUrl = "https://wa.me/919373372183?text=Hi%20Student%20Project%20Hub,%20I%20want%20to%20discuss%20my%20college%20project.%20Is%20the%20price%20negotiable?";
  const phoneUrl = "tel:+919373372183";

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background glow graphics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Price Highlight & Negotiable Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/90 border border-emerald-700/80 text-emerald-300 text-xs font-bold uppercase tracking-wider shadow-lg">
                <Tag className="h-4 w-4 text-emerald-400" />
                <span>₹500 – ₹3,000 Budget Plans</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-950/90 border border-amber-700/80 text-amber-300 text-xs font-extrabold uppercase tracking-wider shadow-lg animate-pulse">
                <Handshake className="h-4 w-4 text-amber-400" />
                <span>Prices Negotiable 🤝</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Get Your College Project <span className="text-gradient">Built by Experts</span>
            </h1>

            {/* Subtitle */}
            <div className="space-y-2">
              <p className="text-xl sm:text-2xl font-extrabold text-slate-200 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-400 shrink-0" />
                Turn Your Project Idea into Reality 🚀
              </p>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Need a project for Diploma, BCA, MCA, B.Tech or BE? Contact us directly via WhatsApp or Phone Call. Prices are fully negotiable according to your budget!
              </p>
            </div>

            {/* Perks List */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5 bg-slate-900/60 p-3 rounded-xl border border-slate-800 backdrop-blur-sm">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="text-sm font-semibold text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 hover:from-emerald-500 hover:to-teal-400 shadow-xl shadow-emerald-600/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all"
              >
                <Send className="h-5 w-5" />
                <span>WhatsApp (9373372183)</span>
              </a>
              <a
                href={phoneUrl}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-base font-extrabold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:text-white transition-all"
              >
                <PhoneCall className="h-5 w-5 text-indigo-400" />
                <span>Call Now (9373372183)</span>
              </a>
            </div>

            {/* Courses Tags */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold">Courses:</span>
              {targetCourses.map((course) => (
                <span
                  key={course}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-bold text-indigo-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 blur-xl"></div>

              <div className="relative glass-panel rounded-2xl p-6 shadow-2xl border border-slate-800 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">direct_contact.json</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-amber-950 text-amber-300 border border-amber-800 font-bold">
                    NEGOTIABLE PRICING
                  </span>
                </div>

                <div className="bg-slate-950/90 p-5 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 uppercase font-semibold">Project Price Range</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">₹500 – ₹3,000</span>
                  </div>
                  <div className="text-3xl font-extrabold text-white flex items-center gap-2">
                    ₹500 <span className="text-sm font-normal text-slate-400">to</span> ₹3,000
                  </div>
                  <div className="p-2 bg-amber-950/50 border border-amber-800/60 rounded-lg text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
                    <Handshake className="h-4 w-4 shrink-0 text-amber-400" />
                    <span>Prices are open for discussion & negotiable!</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-4 rounded-xl border border-indigo-500/30 text-center space-y-1">
                  <p className="text-xs font-bold text-indigo-300">
                    Direct Call / WhatsApp Helpline:
                  </p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-extrabold text-emerald-400 hover:underline block">
                    📞 9373372183
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 text-center">
                    <Code2 className="h-4 w-4 text-indigo-400 mx-auto mb-1" />
                    <p className="text-base font-extrabold text-white">100%</p>
                    <p className="text-[10px] text-slate-400">Custom Code</p>
                  </div>

                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 text-center">
                    <Star className="h-4 w-4 text-amber-400 fill-amber-400 mx-auto mb-1" />
                    <p className="text-base font-extrabold text-white">4.9 ★</p>
                    <p className="text-[10px] text-slate-400">Student Rated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
