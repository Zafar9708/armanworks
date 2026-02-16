import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Filter, Factory, Construction, Settings } from 'lucide-react';
import Navbar from '../../components/home/Navbar';
import Footer from '../../components/home/Footer';

const GalleryPage = () => {
  const [filter, setFilter] = useState('all');

  const items = [
    { id: 1, category: 'mfg', title: 'CNC Laser Cutting', location: 'Workshop', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800' },
    { id: 2, category: 'erection', title: 'Pulse Plant Erection', location: 'Nagpur, MH', img: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=800' },
    { id: 3, category: 'products', title: 'Gravity Separator', location: 'Final QC', img: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800' },
    { id: 4, category: 'erection', title: 'Sortex Platform', location: 'Indore, MP', img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800' },
    { id: 5, category: 'mfg', title: 'Bucket Elevator Assembly', location: 'Workshop', img: 'https://images.unsplash.com/photo-1590725121839-892b458a74fe?q=80&w=800' },
    { id: 6, category: 'products', title: 'Seed Cleaning Line', location: 'Export Unit', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800' },
  ];

  const filteredItems = filter === 'all' ? items : items.filter(item => item.category === filter);

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen pt-20 font-sans">
        
        {/* --- PAGE HEADER --- */}
        <section className="bg-slate-50 py-16 border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight mb-4">Engineering Portfolio</h1>
            <p className="text-slate-500 text-sm max-w-xl mx-auto font-light">
              Visual documentation of our manufacturing precision and on-site erection capabilities across India.
            </p>
          </div>
        </section>

        {/* --- FILTER NAVIGATION --- */}
        <section className="py-8 sticky top-20 bg-white/80 backdrop-blur-md z-30 border-b border-slate-50">
          <div className="container mx-auto px-6 flex justify-center gap-4">
            {[
              { id: 'all', label: 'All Works' },
              { id: 'mfg', label: 'Fabrication' },
              { id: 'erection', label: 'Site Erection' },
              { id: 'products', label: 'Finished Units' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                  filter === tab.id 
                  ? 'bg-slate-900 text-white' 
                  : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* --- GALLERY GRID --- */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-20">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden bg-slate-100 aspect-[4/3]"
                  >
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40" 
                    />
                    
                    {/* Overlay Info */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest mb-2">
                        {item.category === 'mfg' ? 'Manufacturing' : 'Erection Project'}
                      </div>
                      <h3 className="text-white text-lg font-bold uppercase tracking-tight leading-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-[10px] uppercase font-medium">{item.location}</p>
                    </div>

                    {/* Industrial Frame Effect */}
                    <div className="absolute inset-0 border-[0px] group-hover:border-[20px] border-slate-900/10 transition-all duration-300 pointer-events-none"></div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* --- QUALITY BADGE SECTION --- */}
        <section className="py-20 border-t border-slate-100">
          <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex items-center gap-5">
              <Factory className="text-[#D4AF37]" size={28} />
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-900">Precision MFG</h4>
                <p className="text-[11px] text-slate-500 font-light">In-house facility with modern machinery.</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Construction className="text-[#D4AF37]" size={28} />
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-900">Site Compliance</h4>
                <p className="text-[11px] text-slate-500 font-light">Professional on-site assembly teams.</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Settings className="text-[#D4AF37]" size={28} />
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-900">Ready to Commission</h4>
                <p className="text-[11px] text-slate-500 font-light">Final load testing and quality check.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;