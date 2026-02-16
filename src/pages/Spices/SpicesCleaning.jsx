import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wind, Layers, ShieldCheck, Cpu, ArrowUpRight, CheckCircle2, Factory, Drill, Ruler, HardHat } from 'lucide-react';
import Navbar from '../../components/home/Navbar';
import Footer from '../../components/home/Footer';

const SpiceHero = "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2000&auto=format&fit=crop"; 

const SpicesCleaning = () => {
  const machines = [
    {
      id: "01",
      name: "Gravity Separator",
      purpose: "Precision Grading",
      desc: "Custom-manufactured for high-accuracy weight separation. Essential for removing light seeds and heavy stones from Cumin, Mustard, and Sesame lines.",
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "02",
      name: "Vibratory Seed Cleaner",
      purpose: "Multi-Deck Screening",
      desc: "Engineered for gentle handling. We fabricate these with adjustable stroke and frequency to suit the fragility of different seed varieties.",
      image: "https://images.unsplash.com/photo-1599120200092-271708849646?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen pt-20 font-sans selection:bg-[#D4AF37]/30">
        
        {/* --- HEADER: MFG & ERECTOR FOCUS --- */}
        <section className="relative py-24 px-6 lg:px-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D4AF37]/5 rounded-bl-[200px] -z-10" />
          
          <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-6">
                <Factory size={12} /> Design • Manufacture • Erect
              </div>
              <h1 className="text-6xl md:text-8xl font-light text-slate-900 leading-[0.9] mb-8">
                Integrated <br/>
                <span className="font-black italic">Seed Lines.</span>
              </h1>
              <p className="text-slate-500 text-lg font-light max-w-md mb-10 leading-relaxed">
                Arman Engineering Works is a specialized **Manufacturer & Erector** of high-purity cleaning plants. From shop-floor fabrication to final on-site commissioning.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-slate-900 text-white px-10 py-5 font-black uppercase text-[10px] tracking-[0.2em] shadow-xl hover:bg-[#D4AF37] hover:text-white transition-all">
                  Consult an Engineer
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative">
              <div className="rounded-[40px] overflow-hidden border-[16px] border-[#F8F9FB] shadow-2xl">
                <img src={SpiceHero} alt="Spice Processing Plant" className="w-full h-[500px] object-cover" />
              </div>
              {/* Manufacturer Tag */}
              <div className="absolute -top-6 -left-6 bg-[#D4AF37] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-xs font-black uppercase tracking-widest">Est. Fabrication</div>
                <div className="text-3xl font-black italic">Since 2004</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- MANUFACTURING EXCELLENCE GRID --- */}
        <section className="py-32 px-6 lg:px-20 bg-[#F8F9FB]/50">
          <div className="container mx-auto">
            <div className="mb-20 text-center md:text-left">
              <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-4">
                Custom Built <span className="text-[#D4AF37]">Machinery.</span>
              </h2>
              <p className="text-slate-400 font-medium text-xs uppercase tracking-[0.3em]">Built In-House • Installed On-Site</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {machines.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white p-5 rounded-[2.5rem] shadow-sm border border-slate-100 group"
                >
                  <div className="rounded-[2rem] overflow-hidden h-72 mb-8 relative">
                    <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.name} />
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900">
                      MFG Code: AEW-{100 + idx}
                    </div>
                  </div>
                  <div className="px-6 pb-6 text-center">
                    <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900 mb-2">{item.name}</h3>
                    <div className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-[0.2em] mb-4">{item.purpose}</div>
                    <p className="text-slate-500 font-light text-sm mb-6 leading-relaxed">{item.desc}</p>
                    <div className="pt-4 border-t border-slate-50 flex justify-around">
                      <div className="text-center">
                        <div className="text-slate-900 font-black text-sm">SS-304</div>
                        <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Material</div>
                      </div>
                      <div className="text-center">
                        <div className="text-slate-900 font-black text-sm">99.9%</div>
                        <div className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Purity</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- NEW SECTION: THE ERECTOR'S WORKFLOW --- */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="absolute left-10 top-1/2 -translate-y-1/2 text-[15rem] font-black text-slate-50/50 pointer-events-none select-none">
            ERECTOR
          </div>

          <div className="container mx-auto px-6 lg:px-20">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              
              <div className="flex-1 space-y-12 z-10">
                <div>
                  <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mb-6 leading-none">
                    Turnkey Plant <br/>
                    <span className="text-[#D4AF37]">Execution.</span>
                  </h2>
                  <p className="text-slate-500 font-light text-lg">
                    As an experienced **Erector**, we manage the entire lifecycle of your seed processing plant—from foundation drawings to final grain-in-grain-out testing.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { icon: Ruler, title: "Custom Layouts", desc: "Design & CAD drawing according to your factory space." },
                    { icon: Drill, title: "Site Installation", desc: "Complete erection of elevators, ducting, and machines." },
                    { icon: HardHat, title: "Commissioning", desc: "Full-load testing and operator training on-site." },
                    { icon: ShieldCheck, title: "AMC Support", desc: "Annual Maintenance Contracts for peak performance." }
                  ].map((feat, i) => (
                    <div key={i} className="group border-l-2 border-slate-100 hover:border-[#D4AF37] pl-6 transition-all">
                      <feat.icon className="text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform" size={24} />
                      <h4 className="font-bold uppercase tracking-tight text-xs text-slate-900 mb-1">{feat.title}</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed font-light">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 w-full z-10">
                <div className="relative">
                  <div className="absolute -inset-4 border border-[#D4AF37]/20 rounded-3xl" />
                  <div className="bg-[#F8F9FB] rounded-2xl p-10 lg:p-16 relative">
                    <div className="space-y-8">
                      <div className="text-center pb-8 border-b border-slate-200">
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37] mb-2">Our Quality Standard</div>
                        <h3 className="text-3xl font-black text-slate-900 text-center">Why Choose Arman?</h3>
                      </div>
                      
                      {[
                        "We Manufacture 100% of the Steel Components",
                        "Specialized Erecting Team for Seed Processing",
                        "Low-Noise, Anti-Vibration Fabrication Technology",
                        "Integrated Dust Aspiration & PLC Automation"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all">
                            <CheckCircle2 size={16} />
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wide text-slate-600 group-hover:text-slate-900 transition-colors leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}

                      <div className="pt-8">
                        <button className="w-full bg-slate-900 text-white py-5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:shadow-[#D4AF37]/20 transition-all flex items-center justify-center gap-2">
                          Request Turnkey Quote <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default SpicesCleaning;