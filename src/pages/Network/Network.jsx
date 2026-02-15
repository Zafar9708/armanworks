import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Navigation, ShieldCheck, ChevronRight, Home, Zap } from 'lucide-react';
import Footer from '../../components/home/Footer';
import Navbar from '../../components/home/Navbar';

const NetworkPresence = () => {
  const [activeTab, setActiveTab] = useState('india');

  // Exact coordinates for the blinking dots based on the map URLs provided
  const indiaNodes = [
    { name: "Gujarat Hub", top: "48%", left: "15%" },
    { name: "Punjab Sector", top: "20%", left: "28%" },
    { name: "Maharashtra Unit", top: "62%", left: "25%" },
    { name: "Rajasthan Plant", top: "35%", left: "22%" },
    { name: "MP Operations", top: "46%", left: "38%" },
    { name: "Tamil Nadu Service", top: "85%", left: "42%" }
  ];

  const globalNodes = [
    { name: "Middle East Hub", top: "38%", left: "58%" },
    { name: "East Africa Unit", top: "60%", left: "54%" },
    { name: "SE Asia Export", top: "55%", left: "82%" },
    { name: "SAARC Operations", top: "45%", left: "72%" },
    { name: "Eastern Europe", top: "30%", left: "52%" }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#F8F9FB] min-h-screen pt-24 font-sans selection:bg-[#D4AF37]">
        
        {/* --- SECTION 1: PROFESSIONAL HEADER --- */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <nav className="flex justify-center items-center gap-2 text-[10px] font-black tracking-[0.4em] text-[#D4AF37] uppercase mb-8">
              <Home size={14} /> <ChevronRight size={12} /> Strategic Presence
            </nav>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-6 uppercase">
              Global <span className="text-slate-300">Footprint.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-500 font-light text-lg">
              Engineering solutions delivered across borders. Explore our domestic strength and international reach.
            </p>
          </div>
        </section>

        {/* --- SECTION 2: THE INTERACTIVE MAP INTERFACE --- */}
        <section className="py-12">
          <div className="container mx-auto px-6 lg:px-20">
            
            {/* TAB SELECTOR */}
            <div className="flex justify-center mb-16">
              <div className="bg-slate-200/50 p-1.5 rounded-full flex border border-slate-200">
                <button 
                  onClick={() => setActiveTab('india')}
                  className={`px-10 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
                    activeTab === 'india' ? 'bg-[#0F172A] text-white shadow-xl' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Our Domestic Network
                </button>
                <button 
                  onClick={() => setActiveTab('global')}
                  className={`px-10 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
                    activeTab === 'global' ? 'bg-[#0F172A] text-white shadow-xl' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Our Global Network
                </button>
              </div>
            </div>

            {/* MAP VIEWPORT */}
            <div className="relative bg-[#0F172A] rounded-2xl overflow-hidden shadow-2xl min-h-[500px] lg:min-h-[750px] flex items-center justify-center border border-slate-800">
              
              {/* Technical Grid Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                   style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
              </div>

              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-full p-10 flex items-center justify-center"
                >
                  {activeTab === 'india' ? (
                    <div className="relative w-full max-w-2xl">
                      {/* INDIA MAP URL */}
                      <img 
                        src="http://googleusercontent.com/image_collection/image_retrieval/10385398856887637397_0" 
                        alt="India Map"
                        className="w-full h-auto opacity-40 grayscale brightness-150 contrast-125"
                      />
                      {/* INDIA BLINKING NODES */}
                      {indiaNodes.map((node, i) => (
                        <div key={i} className="absolute group" style={{ top: node.top, left: node.left }}>
                          <span className="relative flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
                          </span>
                          <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-white text-[#0F172A] text-[9px] font-black px-3 py-1.5 whitespace-nowrap rounded shadow-2xl z-50">
                            {node.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="relative w-full max-w-5xl">
                      {/* WORLD MAP URL */}
                      <img 
                        src="http://googleusercontent.com/image_collection/image_retrieval/12814060965264586195_0" 
                        alt="World Map"
                        className="w-full h-auto opacity-30 grayscale invert brightness-200"
                      />
                      {/* GLOBAL BLINKING NODES */}
                      {globalNodes.map((node, i) => (
                        <div key={i} className="absolute group" style={{ top: node.top, left: node.left }}>
                          <span className="relative flex h-4 w-4">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
                          </span>
                          <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-white text-[#0F172A] text-[9px] font-black px-3 py-1.5 whitespace-nowrap rounded shadow-2xl z-50">
                            {node.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* MAP LEGEND / STATUS BAR */}
              <div className="absolute bottom-10 left-10 hidden md:block">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
                    <span className="text-white text-[10px] font-black uppercase tracking-widest">Active Manufacturing Hub</span>
                  </div>
                  <div className="h-4 w-px bg-slate-700"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                    <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Global Support Center</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 3: NETWORK PILLARS --- */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-3 gap-16">
            <div className="space-y-6 group">
              <Zap className="text-[#D4AF37] transition-transform group-hover:scale-110" size={32} />
              <h4 className="text-xl font-black uppercase tracking-tighter">Strategic Deployment</h4>
              <p className="text-sm text-slate-500 font-light leading-relaxed">Our regional service units ensure that on-site engineers reach any domestic facility within a 24-hour response window.</p>
            </div>
            <div className="space-y-6 group border-x border-slate-100 px-8">
              <Globe className="text-[#D4AF37] transition-transform group-hover:rotate-12" size={32} />
              <h4 className="text-xl font-black uppercase tracking-tighter">International Logistics</h4>
              <p className="text-sm text-slate-500 font-light leading-relaxed">Handling complex turnkey exports to Africa and the Middle East with certified industrial packaging standards.</p>
            </div>
            <div className="space-y-6 group">
              <ShieldCheck className="text-[#D4AF37] transition-transform group-hover:scale-110" size={32} />
              <h4 className="text-xl font-black uppercase tracking-tighter">Verified Reliability</h4>
              <p className="text-sm text-slate-500 font-light leading-relaxed">Every installation in our network is tracked and supported by 20+ years of engineering data and expertise.</p>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default NetworkPresence;