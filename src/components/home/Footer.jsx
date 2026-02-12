import React from 'react';
import { Factory, Phone, Mail, MapPin, ChevronUp, ShieldCheck, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = "919898898219"; 
  const message = "Hello! I am interested in Arman Engineering products. Could you please provide more details?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-white border-t border-slate-200 font-sans antialiased relative overflow-hidden">
      {/* Decorative Grid Background - Subtle Engineering Feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Company Identity */}
        <div className="lg:col-span-4 space-y-6">
  <div className="flex items-center gap-3">
    {/* Logo Container - keeping the tilted industrial look */}
    <div className="w-12 h-12  flex items-center justify-center transform rotate-3 overflow-hidden">
      <img 
        src="/logo.png" 
        alt="Arman Logo" 
        className="w-32 h-32 object-contain transform -rotate-3" // counter-rotate so logo stays straight
      />
    </div>
    
    <div>
      <h2 className="text-xl font-black tracking-tighter text-slate-900 uppercase leading-none -ml-4">
        Arman <br /> <span className="text-slate-400">Engineering</span>
      </h2>
    </div>
  </div>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-medium">
              Architecting precision machinery and industrial ecosystems since 1995. Global leaders in grain and spice processing technology.
            </p>
            <div className="flex gap-3">
              <span className="text-[9px] font-black tracking-widest text-slate-900 px-3 py-1 border border-slate-200 uppercase">ISO 9001:2010</span>
              <span className="text-[9px] font-black tracking-widest text-slate-900 px-3 py-1 border border-slate-200 uppercase">MSME Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Company</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Products', 'Services'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-700 hover:text-black hover:translate-x-1 inline-block transition-all font-semibold">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Divisions</h3>
            <ul className="space-y-3 text-sm text-slate-700 font-semibold">
              <li className="hover:text-black cursor-pointer transition-colors">Grain Machinery</li>
              <li className="hover:text-black cursor-pointer transition-colors">Daal Plant</li>
              <li className="hover:text-black cursor-pointer transition-colors">Sortex Systems</li>
              <li className="hover:text-black cursor-pointer transition-colors">Spice Grinding</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Headquarters</h3>
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin size={18} className="text-[#FAF1E6] shrink-0 mt-1" />
                <p className="text-sm text-slate-800 font-bold leading-snug">
                  State Highway No. 41, Industrial Area, <br />
                  Sujanpur - Sidhpur, Patan, GJ 384151
                </p>
              </div>
              <div className="pt-5 border-t border-slate-100 space-y-3">
                <a href={`tel:+919898898219`} className="flex items-center gap-3 text-sm font-black text-slate-950 group">
                  <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-50 transition-colors">
                    <Phone size={14} />
                  </div> 
                  +91 98988 98219
                </a>
                <a href="mailto:info@armanengineering.com" className="flex items-center gap-3 text-sm font-black text-slate-950 group">
                  <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-50 transition-colors">
                    <Mail size={14} />
                  </div> 
                  info@armanengineering.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: WhatsApp & Scroll Top */}
        <div className="mt-16 pt-8 border-t border-slate-900/5 flex flex-col md:flex-row justify-between items-center gap-6">
       

          {/* Copyright Info */}
          <div className="flex flex-col items-center">
             <div className="flex items-center gap-2 text-slate-400">
               <ShieldCheck size={14} />
               <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                 © {currentYear} Arman Engineering Works
               </span>
             </div>
          </div>
          
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;