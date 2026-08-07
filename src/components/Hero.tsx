import React from 'react';
import { CheckCircle2, Send, PhoneCall, Sparkles, Tag, Handshake } from 'lucide-react';

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
                Custom & ready-made projects for Diploma, BCA, MCA, B.Tech & BE students. Everything delivered with source code, report & PPT.
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
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition-all"
              >
                <Send className="h-4 w-4" />
                <span>WhatsApp (9373372183)</span>
              </a>
              <a
                href={phoneUrl}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-extrabold text-slate-200 bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition-all"
              >
                <PhoneCall className="h-4 w-4 text-white" />
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

          {/* Right Column: High Tech Modern Graphic Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 opacity-40 blur-xl"></div>

              <div className="relative glass-panel rounded-3xl p-3 border border-slate-800 shadow-2xl overflow-hidden group">
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-slate-900">
                  <img
                    src="/hero_graphic.jpg"
                    alt="Student College Project Development Illustration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Floating Price Badge Overlay */}
                  <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-md border border-emerald-500/50 p-3 rounded-2xl shadow-xl flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                      <Tag className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">Special Rate</span>
                      <span className="text-sm font-extrabold text-emerald-400">₹500 – ₹3,000</span>
                    </div>
                  </div>

                  {/* Floating Negotiable Pill Overlay */}
                  <div className="absolute bottom-4 right-4 bg-slate-950/90 backdrop-blur-md border border-amber-500/60 px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 text-xs font-extrabold text-amber-300">
                    <Handshake className="h-4 w-4 text-amber-400 animate-pulse" />
                    <span>Prices Negotiable 🤝</span>
                  </div>
                </div>

                {/* Bottom Direct Helpline Trigger */}
                <div className="pt-3 pb-1 px-3 flex items-center justify-between text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>WhatsApp / Call Helpline:</span>
                  </div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-extrabold text-emerald-400 hover:underline flex items-center gap-1"
                  >
                    <span>9373372183</span>
                    <PhoneCall className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
