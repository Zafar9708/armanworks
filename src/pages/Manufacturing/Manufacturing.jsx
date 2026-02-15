import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, ChevronRight, Factory, Maximize2, X, 
  Cog, ShieldCheck, Box, HardHat, Ruler, Building2, Cpu
} from 'lucide-react';
import Footer from '../../components/home/Footer';
import Navbar from '../../components/home/Navbar';

const ManufacturingFacilities = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const facilityUnits = [
    { 
      id: "01", 
      name: "Gravity Separator Fabrication Bay", 
      desc: "Dedicated to the precision welding and assembly of high-yield gravity separators. This unit houses our advanced plasma cutting machines ensuring micron-level accuracy in plate fabrication.",
      url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
      specs: "Plasma CNC | Robotic Welding"
    },
    { 
      id: "02", 
      name: "Automated Plant Assembly Line", 
      desc: "A massive 10,000 sq. ft. area focused on the modular assembly of Turnkey food processing plants, allowing for rigorous testing of flow dynamics before final dispatch.",
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      specs: "Modular Frameworks | Flow Testing"
    },
    { 
      id: "03", 
      name: "Quality Assurance & Metrology Lab", 
      desc: "Equipped with electronic vibration analyzers and laser alignment tools to ensure every rotating component of the plant is perfectly balanced for long-term endurance.",
      url: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
      specs: "Laser Alignment | Vibration Analysis"
    },
    { 
      id: "04", 
      name: "Heavy Structural Processing Hub", 
      desc: "Where the 'bones' of the plant are made. We use high-grade galvanized steel and industrial-strength coatings to prevent corrosion in diverse climatic conditions.",
      url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
      specs: "Corrosion Testing | Load Bearing"
    },
    { 
      id: "05", 
      name: "CNC Precision Machining Center", 
      desc: "Our high-speed CNC milling and turning center produces the intricate internal parts of grain cleaners and sorters with repeatable precision and superior finish.",
      url: "https://images.unsplash.com/photo-1565608087341-404b25458f63?auto=format&fit=crop&q=80&w=800",
      specs: "VMC Machines | Automated Turning"
    },
    { 
      id: "06", 
      name: "Advanced R&D Prototyping Unit", 
      desc: "The innovation engine of Arman Engineering. Here, our engineers test new designs for energy efficiency and high-yield output using 3D modeling and physical prototypes.",
      url: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800",
      specs: "3D Prototyping | Efficiency Audits"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#FCFDFF] text-slate-800  font-sans">
        
        {/* 1. CLEAN HERO SECTION */}
        <section className="relative py-24 bg-slate-50 border-b border-slate-100 overflow-hidden">
          <div className="container mx-auto px-6 lg:px-20 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <nav className="flex items-center gap-2 text-[11px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-8">
                  <Home size={14} /> <ChevronRight size={12} /> Manufacturing Infrastructure
                </nav>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-none mb-8">
                  ENGINEERED <br /><span className="text-[#D4AF37]">FOR PRECISION.</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
                  Arman Engineering Works operates from a sophisticated industrial ecosystem. Our facilities are designed to handle complex turnkey projects from raw material fabrication to final quality certification under one roof.
                </p>
                <div className="grid grid-cols-2 gap-8 py-8 border-t border-slate-200">
                  <div>
                    <h4 className="text-3xl font-black text-slate-900">25k+</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Sq. Ft. Workshop</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-black text-slate-900">100%</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">In-house Fabrication</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border-[12px] border-white">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" alt="Factory" className="w-full h-[450px] object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-full h-full bg-slate-200 -z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE TECHNICAL FACILITY LIST (CONTENT RICH) */}
        <section className="py-32">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">Our Specialized <span className="text-[#D4AF37]">Units.</span></h2>
                <div className="h-1.5 w-20 bg-[#D4AF37] mb-6"></div>
                <p className="text-slate-500 font-medium">Detailed overview of our multi-departmental manufacturing capabilities.</p>
              </div>
              <Building2 className="text-slate-100 hidden md:block" size={100} />
            </div>

            <div className="grid lg:grid-cols-2 gap-x-12 gap-y-20">
              {facilityUnits.map((unit) => (
                <div key={unit.id} className="group">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div 
                      className="w-full md:w-64 h-64 flex-shrink-0 relative overflow-hidden cursor-pointer shadow-lg"
                      onClick={() => setSelectedImg(unit.url)}
                    >
                      <img src={unit.url} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                      <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-black shadow-sm">UNIT-{unit.id}</div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900">{unit.name}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed italic">
                        {unit.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {unit.specs.split(' | ').map((spec, i) => (
                          <span key={i} className="text-[9px] font-bold uppercase tracking-widest bg-slate-100 text-slate-500 px-3 py-1 border border-slate-200">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TECHNICAL WORKFLOW (PROFESSIONAL ADDITION) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="bg-[#1a2332] p-12 lg:p-20 relative overflow-hidden">
               {/* Content for this dark section is actually professional slate, not flat black */}
              <div className="relative z-10 grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-1">
                  <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-none mb-6">Built For <br/><span className="text-[#D4AF37]">Performance.</span></h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">We follow a strict ISO-aligned manufacturing workflow that ensures every bolt and weld is documented for quality.</p>
                  <button className="text-[#D4AF37] font-black text-[10px] tracking-[0.3em] uppercase border-b border-[#D4AF37] pb-1">Download Infrastructure PDF</button>
                </div>
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">
                  <div className="flex gap-6">
                    <div className="bg-[#D4AF37] h-12 w-12 flex-shrink-0 flex items-center justify-center text-white font-black">01</div>
                    <div>
                      <h5 className="text-white font-bold uppercase text-sm mb-2">Material Sourcing</h5>
                      <p className="text-slate-400 text-xs leading-relaxed">Only certified high-grade steel and OEM components are utilized in our plants.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="bg-slate-700 h-12 w-12 flex-shrink-0 flex items-center justify-center text-white font-black">02</div>
                    <div>
                      <h5 className="text-white font-bold uppercase text-sm mb-2">Precision Welding</h5>
                      <p className="text-slate-400 text-xs leading-relaxed">Argon and robotic-assist welding for leak-proof and structural integrity.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="bg-slate-700 h-12 w-12 flex-shrink-0 flex items-center justify-center text-white font-black">03</div>
                    <div>
                      <h5 className="text-white font-bold uppercase text-sm mb-2">Surface Coating</h5>
                      <p className="text-slate-400 text-xs leading-relaxed">Three-layer industrial coating to resist heat, friction, and moisture.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="bg-slate-700 h-12 w-12 flex-shrink-0 flex items-center justify-center text-white font-black">04</div>
                    <div>
                      <h5 className="text-white font-bold uppercase text-sm mb-2">Trial Run</h5>
                      <p className="text-slate-400 text-xs leading-relaxed">Mandatory 48-hour continuous stress test for all moving parts before dispatch.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. SAFETY & QUALITY STANDARDS */}
        <section className="py-32 bg-[#FCFDFF]">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-4 gap-12">
              <div className="space-y-4">
                <HardHat className="text-[#D4AF37]" size={32} />
                <h4 className="font-black uppercase text-sm tracking-widest">Safety First</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Strict adherence to industrial safety protocols for a zero-accident workshop environment.</p>
              </div>
              <div className="space-y-4">
                <Ruler className="text-[#D4AF37]" size={32} />
                <h4 className="font-black uppercase text-sm tracking-widest">Micron Accuracy</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Using digital calipers and laser sensors for parts that fit perfectly every single time.</p>
              </div>
              <div className="space-y-4">
                <Cpu className="text-[#D4AF37]" size={32} />
                <h4 className="font-black uppercase text-sm tracking-widest">Smart Control</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Integration of PLC panels and IoT sensors directly at the fabrication stage.</p>
              </div>
              <div className="space-y-4">
                <ShieldCheck className="text-[#D4AF37]" size={32} />
                <h4 className="font-black uppercase text-sm tracking-widest">ISO Compliance</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Quality management systems that ensure our global clients receive world-class machinery.</p>
              </div>
            </div>
          </div>
        </section>

        {/* MODAL PREVIEW */}
        <AnimatePresence>
          {selectedImg && (
            <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 backdrop-blur-md bg-slate-900/60">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl w-full bg-white p-2 shadow-2xl"
              >
                <button 
                  onClick={() => setSelectedImg(null)}
                  className="absolute -top-12 right-0 text-white flex items-center gap-2 text-[10px] font-black tracking-widest"
                >
                  CLOSE VIEW <X size={20} />
                </button>
                <img src={selectedImg} className="w-full h-auto max-h-[75vh] object-contain" />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
      <Footer />
    </>
  );
};

export default ManufacturingFacilities;