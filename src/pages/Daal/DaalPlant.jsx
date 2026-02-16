import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Check, ArrowRight, Factory, Drill, Ruler, HardHat, FileText, Activity } from 'lucide-react';
import Navbar from '../../components/home/Navbar';
import Footer from '../../components/home/Footer';

const DaalPlant = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#FFFFFF] min-h-screen pt-24 font-sans selection:bg-[#D4AF37] selection:text-white">
        
        {/* --- 1. TECHNICAL HERO --- */}
        <section className="border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-20 py-24">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-3/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-12 bg-[#D4AF37]"></div>
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">Engineering Division</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-none mb-8 uppercase">
                  Daal Mill <br/> <span className="text-slate-200 text-outline-2">Processing.</span>
                </h1>
                <p className="text-slate-500 text-xl font-light leading-relaxed max-w-2xl mb-12">
                  Integrated Pulse Processing Solutions. As a **Manufacturer and Erector**, Arman Engineering Works delivers custom-fabricated plants designed for maximum recovery and zero downtime.
                </p>
                <div className="flex flex-wrap gap-5">
                  <button className="bg-slate-900 text-white px-10 py-5 font-bold uppercase text-[11px] tracking-widest hover:bg-[#D4AF37] transition-all">
                    Request Plant Layout
                  </button>
                  <button className="border border-slate-200 text-slate-900 px-10 py-5 font-bold uppercase text-[11px] tracking-widest hover:bg-slate-50 transition-all">
                    Technical Catalogue
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-2/5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F8F9FB] p-8 aspect-square flex flex-col justify-end">
                    <div className="text-4xl font-black text-slate-900 mb-2">20Y+</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Industry Expertise</div>
                  </div>
                  <div className="bg-slate-900 p-8 aspect-square flex flex-col justify-end">
                    <div className="text-4xl font-black text-[#D4AF37] mb-2">98%</div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Recovery Yield</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. CORE MACHINERY GRID (MFG FOCUS) --- */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="flex justify-between items-end mb-16 pb-8 border-b border-slate-100">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900">Machinery Fabrication</h2>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2 italic">In-House Manufacturing Specifications</p>
              </div>
              <Settings className="text-slate-200" size={40} />
            </div>

            <div className="grid md:grid-cols-3 gap-0 border border-slate-100">
              {[
                { name: "Emery Roller", type: "De-husking", spec: "High-Alumina Grinding Wheel" },
                { name: "Pulse Pitter", type: "Conditioning", spec: "Precision Scratching System" },
                { name: "Vibro Shifter", type: "Grading", spec: "Multi-Deck Separation" },
                { name: "Daal Polisher", type: "Finishing", spec: "Adjustable Friction Drive" },
                { name: "Bucket Elevator", type: "Conveying", spec: "Anti-Spillage Belt Tech" },
                { name: "Aspiration Fan", type: "Cleaning", spec: "Dynamic Suction Pressure" }
              ].map((item, i) => (
                <div key={i} className="p-10 border-r border-b border-slate-100 hover:bg-[#F8F9FB] transition-colors group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#D4AF37] group-hover:text-white transition-all">
                      <Activity size={18} />
                    </div>
                    <span className="text-[10px] font-black text-slate-300">AEW-{200+i}</span>
                  </div>
                  <h3 className="text-lg font-black uppercase text-slate-900 mb-2">{item.name}</h3>
                  <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest mb-4">{item.type}</div>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{item.spec}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. ERECTION & TURNKEY SECTION (ERECTOR FOCUS) --- */}
        <section className="bg-[#0F172A] py-32 overflow-hidden relative">
          <div className="container mx-auto px-6 lg:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
                    Professional <span className="text-[#D4AF37]">Erection.</span>
                  </h2>
                  <p className="text-slate-400 font-light text-lg">
                    We don't just supply machines; we build the vertical backbone of your processing plant. Our erection crews handle every structural detail.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: Ruler, title: "Structural Layout", desc: "Optimizing vertical space for gravity-based flow." },
                    { icon: Drill, title: "Mechanical Fitting", desc: "On-site precision alignment of heavy shafts and rotors." },
                    { icon: HardHat, title: "Safety & Compliance", desc: "Built to industrial safety codes and vibration standards." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start">
                      <div className="mt-1 flex-shrink-0 w-12 h-12 border border-slate-700 flex items-center justify-center text-[#D4AF37]">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-xs font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1574689049594-37639a7536b3?q=80&w=1000&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-40 grayscale" 
                  alt="Industrial Plant" 
                />
                <div className="absolute top-10 left-10 z-20 bg-white p-8 max-w-xs border-l-[6px] border-[#D4AF37]">
                   <FileText className="text-slate-900 mb-4" size={24} />
                   <h5 className="text-slate-900 font-black uppercase text-xs tracking-widest mb-2">Turnkey Execution</h5>
                   <p className="text-slate-500 text-[11px] font-medium leading-relaxed">
                     Complete site management from foundation drawings to PLC integration and commissioning.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. QUALITY MATRIX --- */}
        <section className="py-24 border-t border-slate-100">
          <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-4 gap-12">
            {[
              "Mild Steel & Stainless Steel Options",
              "Low Energy Consumption Motors",
              "Minimal Grain Breakage Ratio",
              "Custom Capacity (1TPH to 10TPH)"
            ].map((text, i) => (
              <div key={i} className="flex gap-4 items-center">
                <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20">
                  <Check size={14} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-tight text-slate-600">{text}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default DaalPlant;