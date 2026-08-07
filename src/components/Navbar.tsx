import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X, MessageSquare, PhoneCall } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Live Demos ⚡', href: '#categories' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Services & Pricing', href: '#services' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const whatsappUrl = "https://wa.me/919373372183?text=Hi%20Student%20Project%20Hub,%20I%20want%20to%20discuss%20my%20college%20project%20and%20negotiate%20the%20price.";
  const phoneUrl = "tel:+919373372183";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-indigo-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Student Project <span className="text-gradient">Hub</span>
              </span>
              <span className="block text-[10px] text-slate-400 font-medium -mt-1 tracking-wider uppercase">
                Direct Developer Contact
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  link.name.includes('Live Demos')
                    ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 hover:bg-emerald-900'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* WhatsApp & Call Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-extrabold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition-all"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={phoneUrl}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-extrabold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg transition-all"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Call 9373372183</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-extrabold text-white bg-emerald-600 shadow-lg"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Chat on WhatsApp (9373372183)</span>
            </a>
            <a
              href={phoneUrl}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-extrabold text-white bg-indigo-600"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call Developer (9373372183)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
