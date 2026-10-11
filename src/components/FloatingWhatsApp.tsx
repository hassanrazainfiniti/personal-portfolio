import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
    >
      {/* Tooltip on hover/focus */}
      {showTooltip && (
        <div
          role="tooltip"
          className="bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap animate-fade-in pointer-events-none"
        >
          Let's chat on WhatsApp
        </div>
      )}

      {/* Floating button */}
      <a
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-label="Chat with Muhammad Hassan Raza on WhatsApp"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-108 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-[#25D366]" />
      </a>
    </aside>
  );
};
