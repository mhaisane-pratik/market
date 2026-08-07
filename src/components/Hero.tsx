import React from 'react';
import { Send, PhoneCall, Sparkles, Tag, Handshake, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const targetCourses = ['Diploma', 'BCA', 'MCA', 'B.Tech', 'BE'];
  const whatsappUrl = "https://wa.me/919373372183?text=Hi%20Student%20Project%20Hub,%20I%20want%20to%20discuss%20my%20college%20project.%20Is%20the%20price%20negotiable?";
  const phoneUrl = "tel:+919373372183";

  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-36 md:pb-20 overflow-hidden">
      {/* Background glow graphics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-600/15 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-4 text-left">
            {/* Price Highlight & Negotiable Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-700/80 text-emerald-300 text-xs font-bold shadow-md">
                <Tag className="h-3.5 w-3.5 text-emerald-400" />
                <span>₹500 – ₹3,000 Budget Plans</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/90 border border-amber-700/80 text-amber-300 text-xs font-extrabold shadow-md">
                <Handshake className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                <span>Prices Negotiable 🤝</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Get Your College Project <span className="text-gradient">Built by Experts</span>
            </h1>

            {/* Subtitle */}
            <div className="space-y-1.5 pt-1">
              <p className="text-lg sm:text-2xl font-extrabold text-slate-200 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-400 shrink-0" />
                Turn Your Project Idea into Reality 🚀
              </p>
              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                Custom & ready-made projects for Diploma, BCA, MCA, B.Tech & BE students. Delivered with complete source code, IEEE format report & PPT deck.
              </p>
            </div>

            {/* Quick Deliverables Bar */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Source Code Included', 'Report & PPT Included', 'Setup & Demo Assistance'].map((perk) => (
                <div key={perk} className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900/80 border border-slate-800 rounded-lg text-xs font-semibold text-slate-300">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
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

            {/* Target Courses Tags */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold">Courses:</span>
              {targetCourses.map((course) => (
                <span
                  key={course}
                  className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-xs font-bold text-indigo-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: High Tech Graphic Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 opacity-35 blur-lg"></div>

              <div className="relative glass-panel rounded-2xl p-2.5 border border-slate-800 shadow-2xl overflow-hidden group">
                <div className="relative rounded-xl overflow-hidden aspect-square bg-slate-900">
                  <img
                    src="/hero_graphic.jpg"
                    alt="College Project Development Graphic"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Price Badge */}
                  <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md border border-emerald-500/50 px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-2">
                    <Tag className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs font-extrabold text-emerald-400">₹500 – ₹3,000</span>
                  </div>

                  {/* Floating Negotiable Pill */}
                  <div className="absolute bottom-3 right-3 bg-slate-950/90 backdrop-blur-md border border-amber-500/60 px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-1.5 text-xs font-extrabold text-amber-300">
                    <Handshake className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
                    <span>Prices Negotiable 🤝</span>
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
