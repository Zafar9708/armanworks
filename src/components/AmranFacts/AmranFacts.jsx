import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ShieldCheck, Factory, Award, CheckCircle, ArrowRight, Minus, Settings, X, Send, MessageCircle } from 'lucide-react';

const AmranCompactGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const facts = [
    {
      id: "01",
      title: "EXPERIENCED ENGINEERS",
      value: "50+",
      desc: "Our structural wing is led by industry veterans specializing in mechanical stress and grain-flow dynamics.",
      icon: <Users size={20} strokeWidth={1.5} />,
    },
    {
      id: "02",
      title: "TRUSTED CLIENTS",
      value: "1000+",
      desc: "Architecting success for a diverse global portfolio, from local mills to industrial conglomerates.",
      icon: <ShieldCheck size={20} strokeWidth={1.5} />,
    },
    {
      id: "03",
      title: "QUALITY PRODUCTS",
      value: "PREMIUM",
      desc: "Engineered with SS-316 surgical-grade steel for maximum hygiene and lifetime structural durability.",
      icon: <Settings size={20} strokeWidth={1.5} />,
    },
    {
      id: "04",
      title: "MANUFACTURING HUB",
      value: "25,000",
      unit: "SQ.FT",
      desc: "A state-of-the-art facility optimized for precision manufacturing and rapid global deployment.",
      icon: <Factory size={20} strokeWidth={1.5} />,
    },
    {
      id: "05",
      title: "ISO CERTIFIED",
      value: "9001:2010",
      desc: "Strict adherence to international management protocols ensuring total consistency in every component.",
      icon: <Award size={20} strokeWidth={1.5} />,
    }
  ];

  const handleInquiryOpen = () => {
    setIsInquiryOpen(true);
  };

  const handleInquiryClose = () => {
    setIsInquiryOpen(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello, I'm interested in partnering with Amran. Please share more details about your products and services.");
    window.open(`https://wa.me/919998551985?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans p-6 md:p-12 lg:p-20">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-slate-200 pb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Minus className="text-slate-400" size={14} />
              <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-slate-400">Company Dossier</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
              AMRAN <span className="text-slate-300">FACTS</span>
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mb-1">Standard Reference</p>
            <span className="text-xs font-black">EST. 2026 / TECH-REVEAL</span>
          </div>
        </div>

        {/* COMPACT GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200 shadow-sm">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative h-72 md:h-80 border-r border-b border-slate-200 p-8 flex flex-col justify-between group overflow-hidden cursor-pointer bg-white/40 hover:bg-white transition-all duration-500"
            >
              {/* Slide-up Background Highlight */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div 
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.35, ease: "circOut" }}
                    className="absolute inset-0 bg-[#FAF1E6] z-0"
                  />
                )}
              </AnimatePresence>

              {/* Card Top: ID & Icon */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[10px] font-black tracking-widest text-slate-300 group-hover:text-slate-900 transition-colors">
                  {fact.id}
                </span>
                <div className="text-slate-400 group-hover:text-slate-900 transition-colors">
                  {fact.icon}
                </div>
              </div>

              {/* Card Middle: Values */}
              <div className="relative z-10">
                <h3 className="text-4xl font-black tracking-tighter group-hover:italic transition-all duration-300">
                  {fact.value}
                  {fact.unit && <span className="text-[10px] font-bold not-italic ml-1 opacity-40 uppercase tracking-widest">{fact.unit}</span>}
                </h3>
                <h4 className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 group-hover:text-slate-900 mt-1 transition-colors">
                  {fact.title}
                </h4>
              </div>

              {/* Card Bottom: Description & Action */}
              <div className="relative z-10">
                <div className="overflow-hidden">
                  <p className={`text-[12px] leading-relaxed text-slate-500 transition-all duration-500 ${hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    {fact.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="h-[1px] w-6 bg-slate-200 group-hover:w-full group-hover:bg-slate-900 transition-all duration-500" />
                  <ArrowRight size={14} className={`ml-4 transition-all duration-500 ${hoveredIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Contact Node */}
          <div className="relative h-72 md:h-80 border-r border-b border-slate-200 p-8 flex flex-col justify-center items-center bg-slate-900 group overflow-hidden">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute -right-10 -bottom-10 w-40 h-40 border border-white/5 rounded-full"
             />
             <div className="text-center space-y-4 relative z-10">
               <h3 className="text-white text-lg font-black tracking-tighter uppercase leading-tight">Partner with <br/> Excellence</h3>
               <button 
                 onClick={handleInquiryOpen}
                 className="bg-[#FAF1E6] text-slate-900 px-6 py-3 text-[9px] font-black tracking-[0.2em] hover:bg-white transition-all uppercase"
               >
                 Inquire Now
               </button>
             </div>
          </div>
        </div>

        {/* Inquiry Popup Modal */}
        <AnimatePresence>
          {isInquiryOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleInquiryClose}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
              />

              {/* Modal */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 40 }}
                className="bg-white w-full max-w-2xl relative overflow-hidden shadow-2xl"
              >
                {/* Header */}
                <div className="bg-slate-900 p-8 text-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-black mb-2">Partner Inquiry</h3>
                      <p className="text-slate-400 text-sm">Fill the form and our team will respond within 24 hours</p>
                    </div>
                    <button
                      onClick={handleInquiryClose}
                      className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>

                {/* Form */}
                <form className="p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-wider text-[#FAF1E6] block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full border-b border-slate-200 py-3 focus:border-[#FAF1E6] outline-none transition-colors text-sm font-bold"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-wider text-[#FAF1E6] block mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full border-b border-slate-200 py-3 focus:border-[#FAF1E6] outline-none transition-colors text-sm font-bold"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-wider text-[#FAF1E6] block mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full border-b border-slate-200 py-3 focus:border-[#FAF1E6] outline-none transition-colors text-sm font-bold"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-wider text-[#FAF1E6] block mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full border-b border-slate-200 py-3 focus:border-[#FAF1E6] outline-none transition-colors text-sm font-bold"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] font-black uppercase tracking-wider text-[#FAF1E6] block mb-2">
                      Message *
                    </label>
                    <textarea
                      rows="4"
                      required
                      className="w-full border border-slate-200 p-4 focus:border-[#FAF1E6] outline-none transition-colors text-sm font-bold resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-slate-900 text-white py-4 text-[10px] font-black tracking-wider uppercase hover:bg-[#FAF1E6] hover:text-slate-900 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send size={14} />
                      Submit Inquiry
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="flex-1 bg-green-600 text-white py-4 text-[10px] font-black tracking-wider uppercase hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={14} />
                      WhatsApp
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default AmranCompactGallery;