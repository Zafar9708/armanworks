import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Box, Cpu, Activity, Shield, Plus } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'GRAIN CLEANER',
    category: 'GRAIN MACHINERY',
    image: '/images/grain.png',
    desc: 'Precision filtration system designed for high-volume organic harvest processing.',
    specs: ['10 Tons/Hour', '15HP Power', 'Auto-Flow Control'],
    icon: <Box size={20} />
  },
  {
    id: 2,
    name: 'DAL MILL PLANT',
    category: 'DAAL PLANT',
    image: '/images/daal.png',
    desc: 'Fully integrated automated facility for high-yield pulse de-husking and splitting.',
    specs: ['PLC Controlled', '98% Recovery', 'Dust-Free Tech'],
    icon: <Cpu size={20} />
  },
  {
    id: 3,
    name: 'SORTEX PLANT',
    category: 'SORTEX ACCESSORIES',
    image: '/images/sortex.png',
    desc: 'Next-generation optical sorting utilizing AI-driven CCD camera sensors.',
    specs: ['99.9% Accuracy', '256 Channels', 'RGB+IR Sensing'],
    icon: <Activity size={20} />
  },
  {
    id: 4,
    name: 'SPICE GRINDER',
    category: 'SPICES MACHINERY',
    desc: 'Cryogenic-ready grinding unit for maintaining essential oils and aroma.',
    image: '/images/spices.png',
    specs: ['Fine Mesh 120', 'No-Heat Tech', 'SS 316 Build'],
    icon: <Shield size={20} />
  }
];

const ProfessionalShowcase = () => {
  const [activeTab, setActiveTab] = useState(products[0]);

  return (
    <div className="min-h-screen bg-[#F8F8F7] text-slate-900 font-sans p-6 md:p-12 lg:p-20">
      <div className="max-w-7xl mx-auto">
        
        {/* New Header Section */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center">
            OUR <span className="text-slate-400">PRODUCTS</span>
          </h2>
          <div className="mt-4 flex items-center justify-center w-full">
            <div className="h-[2px] w-24 bg-[#FAF1E6]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Interactive List */}
          <div className="lg:col-span-5 space-y-2">
            {products.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveTab(item)}
                className={`relative group cursor-pointer py-8 border-b border-slate-200 transition-all duration-500 ${
                  activeTab.id === item.id ? 'pl-8' : 'pl-0 opacity-40 hover:opacity-100'
                }`}
              >
                {/* Active Indicator Dot */}
                {activeTab.id === item.id && (
                  <motion.div 
                    layoutId="indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#FAF1E6] rounded-full shadow-[0_0_10px_#FAF1E6]"
                  />
                )}

                <div className="flex flex-col">
                  <span className="text-[9px] font-bold tracking-[0.3em] text-slate-400 mb-2 uppercase">
                    {item.category}
                  </span>
                  <h2 className={`text-2xl md:text-3xl font-black transition-all duration-300 ${
                    activeTab.id === item.id ? 'tracking-normal' : 'tracking-tighter'
                  }`}>
                    {item.name}
                  </h2>
                </div>

                {/* Mobile-only view details */}
                <div className={`overflow-hidden transition-all duration-500 lg:hidden ${
                  activeTab.id === item.id ? 'max-h-40 mt-4' : 'max-h-0'
                }`}>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: The Stage */}
          <div className="lg:col-span-7 sticky top-20">
            <div className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0, x: 100, scale: 1 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 1.05 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.4, 0, 0.2, 1] 
                  }}
                  className="absolute inset-0"
                >
                  <img 
                    src={activeTab.image} 
                    alt={activeTab.name} 
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* Subtle Technical Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                    <div className="text-white space-y-4 max-w-md">
                      <p className="text-sm font-light leading-relaxed opacity-90 italic">
                        {activeTab.desc}
                      </p>
                      <div className="flex gap-3">
                        {activeTab.specs.map((spec, i) => (
                          <span key={i} className="text-[9px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-sm border border-white/20">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="bg-[#FAF1E6] p-4 rounded-full text-slate-900 hover:scale-110 transition-transform shadow-lg">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Load More Button - Square with #FAF1E6 */}
        <div className="mt-24 flex justify-center">
          <button className="bg-[#FAF1E6] hover:bg-[#f2e6d8] text-slate-900 font-bold text-xs tracking-[0.3em] px-10 py-5 transition-all duration-300 flex items-center gap-3 shadow-sm hover:shadow-md group">
            LOAD MORE <Plus size={16} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProfessionalShowcase;