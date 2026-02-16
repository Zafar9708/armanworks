import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Fan, Box, ArrowRight, Settings2, ShieldCheck, Database, Wrench } from 'lucide-react';
import Navbar from '../../components/home/Navbar';
import Footer from '../../components/home/Footer';

const SortexAccessories = () => {
  const accessories = [
    {
      title: "Sortex Platforms",
      mfg: "Custom Fabricated",
      desc: "Heavy-duty anti-vibration structures designed specifically for high-speed color sorters to ensure laser accuracy.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Z-Type Elevators",
      mfg: "Gentle Handling",
      desc: "Designed to prevent breakage of cleaned grains while feeding the Sortex machine. Features food-grade buckets.",
      image: "https://images.unsplash.com/photo-1565608438257-fac3c27beb36?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Surge Bins",
      mfg: "Stainless Steel",
      desc: "Buffer storage units that ensure a constant, uniform flow of material to the sorting sensors.",
      image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Compressor Systems",
      mfg: "Air Integration",
      desc: "High-pressure moisture-free air delivery systems required for precise pneumatic ejection.",
      image: "https://images.unsplash.com/photo-1597439286641-2ca8f5acbf3e?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen pt-24 font-sans selection:bg-[#D4AF37]">
        
        {/* --- 1. MINIMALIST HERO --- */}
        <section className="py-20 border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="bg-[#D4AF37] h-[2px] w-12"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37]">Auxiliary Systems</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-10 uppercase">
                Sortex <span className="text-slate-200">Solutions.</span>
              </h1>
              <p className="text-slate-500 text-xl font-light leading-relaxed mb-12">
                Every Sortex machine needs a high-performance ecosystem. We manufacture and erect the essential accessories—from dust-free elevators to precision-leveled platforms.
              </p>
            </div>
          </div>
        </section>

        {/* --- 2. THE ACCESSORY GRID --- */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-2 gap-12">
              {accessories.map((item, idx) => (
                <div key={idx} className="group border border-slate-100 p-8 hover:border-[#D4AF37]/50 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-48 h-48 bg-slate-50 overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                      alt={item.title} 
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-black uppercase text-slate-900">{item.title}</h3>
                      <span className="text-[9px] font-bold text-[#D4AF37] border border-[#D4AF37] px-2 py-1 uppercase">{item.mfg}</span>
                    </div>
                    <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-[#D4AF37] transition-colors">
                      Technical Drawing <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. ERECTION EXCELLENCE SECTION --- */}
        <section className="py-32 bg-[#F8F9FB]">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-8">
                  Precision <span className="text-[#D4AF37]">Alignment</span> <br/> 
                  is Everything.
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm text-[#D4AF37]">
                      <Settings2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-sm mb-2">Vibration Damping</h4>
                      <p className="text-slate-500 text-sm font-light">Our platforms are engineered to absorb mechanical noise, preventing false-rejects in color sorters.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm text-[#D4AF37]">
                      <Database size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase text-sm mb-2">Pneumatic Plumbing</h4>
                      <p className="text-slate-500 text-sm font-light">Erection includes high-grade air piping and filtration to keep sorter nozzles clean.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 bg-slate-900 p-12 text-white relative">
                 <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37] mb-6">Support Expertise</div>
                 <h3 className="text-3xl font-black uppercase mb-8">Integrated Sortex Setup</h3>
                 <ul className="space-y-4 mb-10">
                   {["Vertical Bucket Elevators", "Anti-Dust Ducting", "Electronic Panel Racks", "Modular Mezzanines"].map((text, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                       <ShieldCheck className="text-[#D4AF37]" size={16} /> {text}
                     </li>
                   ))}
                 </ul>
                 <div className="pt-8 border-t border-slate-800">
                    <div className="text-sm font-light text-slate-400 italic">"We provide the structural foundation for your Sortex machine to perform at peak capacity."</div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. CALL TO ACTION --- */}
        <section className="py-24 bg-white text-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto border-2 border-slate-900 p-12">
              <Wrench className="mx-auto mb-6 text-[#D4AF37]" size={40} />
              <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-6">Maintenance & Spares</h2>
              <p className="text-slate-500 font-light mb-10">
                We manufacture and stock high-wear accessories including elevator buckets, belts, and air-filtration cartridges.
              </p>
              <button className="bg-slate-900 text-white px-12 py-5 font-black uppercase text-[10px] tracking-widest hover:bg-[#D4AF37] transition-all">
                Download Spare Parts List
              </button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default SortexAccessories;