import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle2, Copy, Tag, Handshake, PhoneCall } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const whatsappNumber = "9373372183";
  const whatsappUrl = `https://wa.me/91${whatsappNumber}?text=Hi%20Student%20Project%20Hub,%20I%20want%20to%20discuss%20my%20college%20project%20and%20negotiate%20the%20price.`;
  const phoneUrl = `tel:+91${whatsappNumber}`;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const contactDetails = [
    {
      title: 'WhatsApp Helpline',
      value: '+91 9373372183',
      icon: MessageSquare,
      actionText: 'Chat on WhatsApp',
      href: whatsappUrl,
      color: 'from-emerald-600 to-teal-600',
    },
    {
      title: 'Direct Phone Call',
      value: '+91 9373372183',
      icon: PhoneCall,
      actionText: 'Call Now',
      href: phoneUrl,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Negotiable Pricing',
      value: '₹500 – ₹3,000',
      icon: Tag,
      actionText: 'Prices Open to Discussion',
      href: whatsappUrl,
      color: 'from-purple-600 to-pink-600',
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <Phone className="h-3.5 w-3.5" />
            Contact Developer
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Direct Contact & <span className="text-gradient">Negotiable Pricing</span>
          </h2>
          <p className="text-slate-300 text-base">
            No complex forms! Reach out directly via WhatsApp or Call. Prices are 100% negotiable!
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div
                key={index}
                className="glass-panel p-6 rounded-3xl border border-slate-800 hover:border-indigo-500/50 glow-card flex flex-col justify-between text-center items-center"
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`h-14 w-14 rounded-2xl bg-gradient-to-tr ${detail.color} flex items-center justify-center text-white shadow-xl mb-4`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {detail.title}
                  </h3>

                  <p className="text-xl font-extrabold text-white mb-4">
                    {detail.value}
                  </p>
                </div>

                <div className="w-full flex items-center gap-2">
                  <a
                    href={detail.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-slate-200 hover:text-white font-bold text-xs border border-slate-800 transition-all text-center flex items-center justify-center gap-1.5"
                  >
                    <span>{detail.actionText}</span>
                  </a>
                  <button
                    onClick={() => copyToClipboard(detail.value, detail.title)}
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                    title="Copy to clipboard"
                  >
                    {copiedText === detail.title ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Banner */}
        <div className="mt-10 glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-slate-900 via-emerald-950/50 to-slate-900 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-950 text-amber-300 border border-amber-800 rounded-full text-xs font-extrabold">
            <Handshake className="h-3.5 w-3.5" /> 100% Price Negotiation Friendly
          </div>
          <h3 className="text-2xl font-extrabold text-white">
            Projects from ₹500 to ₹3,000 🚀
          </h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Discuss your project requirement & budget directly. We match your college deadline and financial requirement!
          </p>
          <div className="pt-1 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" />
              <span>WhatsApp Us (9373372183)</span>
            </a>
            <a
              href={phoneUrl}
              className="px-7 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-extrabold text-sm transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="h-4 w-4 text-indigo-400" />
              <span>Call Us (9373372183)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
