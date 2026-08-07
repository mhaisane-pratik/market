import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  const whatsappUrl = "https://wa.me/919373372183?text=Hi%20Student%20Project%20Hub,%20I%20want%20to%20discuss%20my%20college%20project%20and%20negotiate%20the%20price.";
  const phoneUrl = "tel:+919373372183";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 shadow-2xl pb-safe">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 active:scale-98 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-1.5 transition-transform"
        >
          <MessageSquare className="h-4 w-4" />
          <span>WhatsApp (9373372183)</span>
        </a>

        <a
          href={phoneUrl}
          className="py-3 px-4 rounded-xl bg-indigo-600 active:scale-98 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 transition-transform"
        >
          <PhoneCall className="h-4 w-4 text-white" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
};
