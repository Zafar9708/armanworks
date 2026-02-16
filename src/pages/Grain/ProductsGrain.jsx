import React from 'react';
import { motion } from 'framer-motion';
import { Settings, ShieldCheck, Drill, Truck, Box, Factory, ChevronRight } from 'lucide-react';
import Navbar from '../../components/home/Navbar';
import Footer from '../../components/home/Footer';

// Placeholder image paths - replace with your actual assets
const GrainHero = "https://images.unsplash.com/photo-1590725121839-892b458a74fe?q=80&w=2000&auto=format&fit=crop"; 
const Machine1 = "https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800&auto=format&fit=crop";

const ProductsGrain = () => {
  const products = [
    {
      title: "Industrial Grain Silos",
      desc: "Galvanized steel storage solutions designed for long-term preservation and protection against environmental factors.",
      features: ["Flat & Hopper Bottom", "Aeration Systems", "Temperature Monitoring"],
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Bucket Elevators",
      desc: "High-capacity vertical conveying systems engineered for gentle handling of grains and seeds.",
      features: ["Heavy-duty Belting", "Wear-resistant Liners", "Dust-tight Construction"],
      image: "https://images.unsplash.com/photo-1574689049594-37639a7536b3?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Grain Cleaning Machines",
      desc: "Multi-stage cleaning systems that remove impurities, ensuring the highest quality output for milling.",
      features: ["Vibratory Screens", "Aspiration Systems", "Adjustable Air Flow"],
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#F8F9FB] min-h-screen pt-20 font-sans">
        
        {/* --- HERO SECTION --- */}
        <section className="relative h-[70vh] flex items-center overflow-hidden bg-slate-900">
          <img 
            src={GrainHero} 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            alt="Grain Processing Plant"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
          
          <div className="container mx-auto px-6 lg:px-20 relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-3xl"
            >
              <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-xs mb-4 block">
                Manufacturer & Erector
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                Grain <span className="text-slate-400">Processing</span> Solutions.
              </h1>
              <p className="text-slate-300 text-lg font-light max-w-xl mb-8 leading-relaxed">
                Arman Engineering Works provides end-to-end solutions for grain storage, cleaning, and movement. From custom manufacturing to on-site erection.
              </p>
              <div className="flex gap-4">
                <button className="bg-[#D4AF37] text-slate-900 px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-white transition-colors">
                  Get a Quote
                </button>
                <button className="border border-white/30 text-white px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-colors">
                  Download Catalog
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- WHY ARMAN ENGINEERING --- */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex items-center gap-4">
                <Factory className="text-[#D4AF37]" size={32} />
                <div className="text-[10px] font-black uppercase tracking-widest">In-House Manufacturing</div>
              </div>
              <div className="flex items-center gap-4">
                <Drill className="text-[#D4AF37]" size={32} />
                <div className="text-[10px] font-black uppercase tracking-widest">Expert Erection Team</div>
              </div>
              <div className="flex items-center gap-4">
                <ShieldCheck className="text-[#D4AF37]" size={32} />
                <div className="text-[10px] font-black uppercase tracking-widest">ISO Certified Quality</div>
              </div>
              <div className="flex items-center gap-4">
                <Settings className="text-[#D4AF37]" size={32} />
                <div className="text-[10px] font-black uppercase tracking-widest">Turnkey Projects</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PRODUCT GRID --- */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="mb-20">
              <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900">
                Core Machinery <span className="text-slate-300">& Equipment.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {products.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-white border border-slate-200 group overflow-hidden"
                >
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-[#D4AF37] text-slate-900 text-[9px] font-black uppercase px-3 py-1">
                      Arman Built
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-black uppercase tracking-tight mb-3 text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-light mb-6 leading-relaxed">
                      {item.desc}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {item.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase">
                          <ChevronRight size={14} className="text-[#D4AF37]" /> {feat}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full border border-slate-900 py-3 text-[10px] font-black uppercase tracking-widest group-hover:bg-slate-900 group-hover:text-white transition-all">
                      View Technical Specs
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- ERECTION & SERVICE SECTION --- */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-[#D4AF37]/5 skew-x-12 translate-x-20" />
          
          <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#D4AF37] font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
                Engineering Excellence
              </span>
              <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-8">
                Turning Blueprints <br/>
                Into <span className="text-[#D4AF37]">Steel Reality.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                    <Box size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight mb-2">Precision Manufacturing</h4>
                    <p className="text-sm text-slate-400 font-light">Components fabricated in our own facility using high-grade galvanized steel and CNC precision.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                    <Truck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-tight mb-2">On-Site Erection</h4>
                    <p className="text-sm text-slate-400 font-light">Our specialized erector crews manage everything from heavy lifting to precision alignment and commissioning.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square border border-white/10 p-4">
                <img 
                  src={Machine1} 
                  alt="Erection Site" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#D4AF37] p-8 hidden md:block">
                <div className="text-4xl font-black text-slate-900">20+</div>
                <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default ProductsGrain;