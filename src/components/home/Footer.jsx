import React from 'react';
import { 
  Factory, Phone, Mail, MapPin, ChevronUp, 
  ShieldCheck, MessageCircle, Award,
  Facebook, Linkedin, Instagram, Twitter,
  ArrowRight, CheckCircle, Globe,
  Briefcase, ChevronRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = "919898898219";
  const message = "Hello! I am interested in Arman Engineering products.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  const products = [
    { name: 'Rice Mill', href: '/products/rice-mill' },
    { name: 'Flour Mill', href: '/products/flour-mill' },
    { name: 'Dal Mill', href: '/products/dal-mill' },
    { name: 'Oil Mill', href: '/products/oil-mill' },
    { name: 'Color Sorters', href: '/products/color-sorters' },
    { name: 'Separators', href: '/products/gravity-separators' }
  ];

  return (
    <footer className="bg-slate-950 text-white font-sans antialiased relative overflow-hidden border-t border-white/5">
      {/* Visual Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            
            {/* Column 1: Brand - Full width on mobile */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 backdrop-blur-md">
                  <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="w-8 h-8 object-contain"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/32x32?text=AE'; }}
                  />
                </div>
                <h2 className="text-xl font-bold tracking-tight uppercase leading-none">
                  Arman <span className="text-[#D4AF37] block text-sm font-medium tracking-widest mt-1">Engineering</span>
                </h2>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Architecting precision machinery and industrial ecosystems since 1995. 
                Global leaders in grain processing technology.
              </p>
              <div className="flex gap-3">
                {[Facebook, Linkedin, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 rounded-md bg-white/5 border border-white/10 text-slate-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 & 3: Links - Displayed as 2 columns on Mobile */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Briefcase size={14} className="text-[#D4AF37]" /> Company
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-slate-400 hover:text-[#D4AF37] text-sm transition-colors flex items-center gap-1 group">
                        <ChevronRight size={12} className="text-[#D4AF37] opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Factory size={14} className="text-[#D4AF37]" /> Products
                </h3>
                <ul className="space-y-3">
                  {products.map((product) => (
                    <li key={product.name}>
                      <a href={product.href} className="text-slate-400 hover:text-[#D4AF37] text-sm transition-colors block">
                        {product.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 4: Contact - Full width on mobile */}
            <div className="lg:col-span-4 space-y-6">
              <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-5 flex items-center gap-2">
                <MapPin size={14} className="text-[#D4AF37]" /> Contact Us
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-3 text-sm">
                  <MapPin size={18} className="text-[#D4AF37] shrink-0" />
                  <p className="text-slate-400">State Highway No. 41, Industrial Area, Patan, Gujarat - 384151</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  <a href={`tel:${whatsappNumber}`} className="flex items-center gap-3 text-slate-300 hover:text-[#D4AF37] transition-colors">
                    <Phone size={16} className="text-[#D4AF37]" />
                    <span className="text-sm">+91 98988 98219</span>
                  </a>
                  <a href="mailto:info@armanengineering.com" className="flex items-center gap-3 text-slate-300 hover:text-[#D4AF37] transition-colors">
                    <Mail size={16} className="text-[#D4AF37]" />
                    <span className="text-sm">info@armanengineering.com</span>
                  </a>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl font-bold text-sm transition-all"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications - Clean row */}
        <div className="py-6 border-y border-white/5 flex flex-wrap justify-center sm:justify-between gap-4">
           <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-500"><Award size={14} className="text-[#D4AF37]"/> ISO 9001:2015</div>
           <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-500"><CheckCircle size={14} className="text-[#D4AF37]"/> MSME Certified</div>
           <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-slate-500"><Globe size={14} className="text-[#D4AF37]"/> NSIC Registered</div>
        </div>

        {/* Bottom Bar - Centered on Mobile */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <ShieldCheck size={14} className="text-[#D4AF37]" />
            <span>© {currentYear} Arman Engineering Works.</span>
          </div>

          <div className="flex items-center gap-6 text-[11px] font-medium text-slate-500">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-slate-950 transition-all group"
              aria-label="Scroll to top"
            >
              <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;