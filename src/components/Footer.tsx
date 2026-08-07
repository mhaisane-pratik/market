import React from 'react';
import { GraduationCap, Heart, ArrowUp, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/919373372183?text=Hi%20Student%20Project%20Hub,%20I%20want%20to%20discuss%20my%20college%20project%20requirement.";

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Student Project <span className="text-gradient">Hub</span>
              </span>
            </div>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed font-medium">
              Your Project • Your Requirements • Our Development Expertise 🚀
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Helping diploma, BCA, MCA, B.Tech & BE students build quality academic projects with complete source code, reports, PPT decks, and live support.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
              >
                <Send className="h-3.5 w-3.5" />
                <span>WhatsApp Helpline: 9373372183</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-indigo-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-indigo-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-400 transition-colors">
                  Services Offered
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-indigo-400 transition-colors">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-indigo-400 transition-colors">
                  Ready-Made Projects & Live Demos
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-indigo-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#submit-project" className="hover:text-indigo-400 transition-colors">
                  Submit Project Requirement
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Live Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Live Project Demos
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://college-two-alpha.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500 text-slate-300 hover:text-white"
              >
                <div className="font-bold text-white">College Event Management System</div>
                <div className="text-[10px] text-emerald-400">college-two-alpha.vercel.app ↗</div>
              </a>
              <a
                href="https://pg-seven-opal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2.5 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-500 text-slate-300 hover:text-white"
              >
                <div className="font-bold text-white">PG Accommodation Finder System</div>
                <div className="text-[10px] text-emerald-400">pg-seven-opal.vercel.app ↗</div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Student Project Hub. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500 inline" /> for Engineering & IT Students
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
