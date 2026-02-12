import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFixed = () => {
  const whatsappNumber = "919898898219";
  const message = "Hello! I am interested in Arman Engineering products. Could you please provide more details?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-[100] group flex items-center gap-3"
    >
      {/* Icon Square */}
      <div className="w-14 h-14 bg-[#25D366] text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:-rotate-12">
        <MessageCircle size={28} fill="currentColor" />
      </div>

      {/* Hover Label */}
      <span className="bg-white text-slate-900 px-4 py-2 text-[10px] font-black tracking-widest uppercase shadow-xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 border-l-4 border-[#25D366] hidden md:block">
        Support Online
      </span>
    </a>
  );
};

export default WhatsAppFixed;