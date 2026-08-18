import React from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/nurseryData';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Floating Action Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-all duration-300 shadow-[#25D366]/40"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageSquare className="w-7 h-7 fill-white group-hover:rotate-12 transition-transform" />

        {/* Hover Tooltip */}
        <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-forest-dark border border-gold/30 text-gold text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
          WhatsApp 3D Architect
        </span>
      </a>
    </div>
  );
}
