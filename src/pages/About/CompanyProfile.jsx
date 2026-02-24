import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, ChevronRight, Eye, Target, ShieldCheck, 
  Briefcase, Minus, Quote, Microscope, Factory, Maximize2, X 
} from 'lucide-react';
import Footer from '../../components/home/Footer';
import Navbar from '../../components/home/Navbar';
import WhatsAppFixed from '../../components/WhatsApp';
import ScrollToTop from '../../components/ScrollToTop';

const AboutUsContent = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeTab, setActiveTab] = useState('mission');

  const mvvData = {
    mission: {
      title: "Our Mission",
      content: "Building competency and character through constant innovation to provide world-class food processing units that empower global food producers with high-yield technology.",
      image: "/images/mission.png",
      icon: <Target className="text-[#D4AF37]" size={32} />
    },
    vision: {
      title: "Our Vision",
      content: "To be globally recognized as the most trustworthy Plant Manufacturing Engineer, providing finest quality Turnkey solutions and setting industry benchmarks.",
      image: "/images/vision.png",
      icon: <Eye className="text-[#D4AF37]" size={32} />
    },
    values: {
      title: "Our Values",
      content: "Exceptional service, timely delivery, and the manufacturing of reputable quality machinery at competitive prices with unwavering integrity.",
      image: "/images/values.png",
      icon: <ShieldCheck className="text-[#D4AF37]" size={32} />
    }
  };

  const manufacturingImages = [
    { id: 1, name: "Precision Gravity Separator", url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" },
    { id: 2, name: "Food Processing Plant", url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
    { id: 3, name: "Quality Control Lab", url: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800" },
    { id: 4, name: "CNC Machining Unit", url: "https://images.unsplash.com/photo-1565608087341-404b25458f63?auto=format&fit=crop&q=80&w=800" },
    { id: 5, name: "Heavy Assembly Bay", url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" },
    { id: 6, name: "Automated Welding Line", url: "https://images.unsplash.com/photo-1535813548-6601f6945379?auto=format&fit=crop&q=80&w=800" },
    { id: 7, name: "Advanced R&D Center", url: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800" },
    { id: 8, name: "Logistics Division", url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white font-sans text-slate-900 pt-0">
        
        {/* 1. HERO & INTRO PROFILE */}
        <section className="relative py-20 bg-slate-50 border-b border-gray-100">
          <div className="container mx-auto px-6 lg:px-20">
            <nav className="flex items-center gap-2 text-[10px] font-black tracking-widest uppercase text-slate-400 mb-12">
              <a href="/" className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"><Home size={12} /> HOME</a>
              <ChevronRight size={10} />
              <span className="text-slate-900 font-bold tracking-widest uppercase">ABOUT US</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                <div className="flex items-center gap-3 mb-4 text-[#D4AF37]"><Briefcase size={20} /><span className="text-xs font-black uppercase tracking-[0.4em]">Corporate Profile</span></div>
                <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-none">Arman Engineering <br /><span className="text-[#D4AF37]">Works.</span></h1>
                <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-[#D4AF37] pl-6 mb-6">
                  Established as a Partnership firm in the year 2010, we “Arman Engineering Works” are a leading Manufacturer Wholesaler Trader and Service Provider of a wide range of Gravity Separator, Food Processing Plant, Plant Installation Service etc.
                </p>
              </motion.div>
              <div className="h-[350px] overflow-hidden rounded-sm shadow-xl"><img src="/images/profile.png" className="w-full h-full object-cover" alt="Corporate" /></div>
            </div>
          </div>
        </section>

        {/* 2. DYNAMIC MISSION, VISION, VALUES (TABBED) */}
        <section className="py-24 bg-white container mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 p-8 lg:p-12 rounded-sm shadow-sm border border-gray-100">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="flex gap-4 border-b border-gray-200">
                {Object.keys(mvvData).map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? "text-[#D4AF37] border-b-2 border-[#D4AF37]" : "text-slate-400 hover:text-slate-600"}`}>
                    {tab}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.3 }} className="space-y-6">
                  {mvvData[activeTab].icon}
                  <h3 className="text-3xl font-black uppercase tracking-tight">{mvvData[activeTab].title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg italic">"{mvvData[activeTab].content}"</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="order-1 lg:order-2 h-[400px] overflow-hidden rounded-sm">
              <AnimatePresence mode="wait">
                <motion.img key={activeTab} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.5 }} src={mvvData[activeTab].image} className="w-full h-full object-cover shadow-inner" alt={activeTab} />
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* 3. WHY US SECTION */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 relative"><img src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=600" className="w-full h-[500px] object-cover rounded-sm shadow-xl" alt="Inspire" /></div>
            <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center gap-3 text-[#D4AF37]"><Minus /><span className="text-xs font-black uppercase tracking-[0.4em]">Why Us</span></div>
              <h2 className="text-4xl font-black uppercase tracking-tighter">We Innovate <span className="text-[#D4AF37]">& Inspire.</span></h2>
              <p className="text-slate-600 leading-relaxed text-lg">Over four decades, our relentless efforts have helped us gain rich experience and pave the way for the revolutionary technological innovation in food processing. We gained a deep insights into the industry and customer requirements and sound technical expertise as a trustworthy plant manufacturers that offer the most reliable turnkey solutions.</p>
              <div className="bg-slate-50 p-10 border-l-4 border-[#D4AF37] shadow-sm">
                <h4 className="font-black uppercase text-sm mb-4 tracking-widest">What we deliver</h4>
                <p className="text-slate-600 text-sm leading-relaxed">Pulse processing plant, Whole grain flour Mill, Seeds pre-cleaning system, Sortex plant Equipment, Gram flour (Besan) mill plant, Seeds bulk handling system, Rice Mill plant, multipurpose cleaning plant and handling and controlling system.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. COMPANY SPEAKS & R&D SECTION */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative space-y-6">
              <Quote className="text-[#D4AF37]/20 absolute -top-10 -left-6" size={80} />
              <span className="text-[#D4AF37] font-black uppercase text-[10px] tracking-widest uppercase">Company Speaks</span>
              <h2 className="text-4xl font-black uppercase tracking-tighter">Competency & <span className="text-[#D4AF37]">Character.</span></h2>
              <p className="text-slate-600 italic text-lg leading-relaxed font-medium">"Building the competency, character and commitment through the constant process of innovation, we proudly boast of our robust experience in food processing manufacturing. During this journey, we have traversed through endless learning moments – all that has turned into unmatched excellence."</p>
            </div>
            <div className="space-y-8 bg-white p-10 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 text-[#D4AF37]"><Microscope size={24} /><span className="text-xs font-black uppercase tracking-widest">Research & Development</span></div>
              <div className="h-48 overflow-hidden rounded-sm"><img src="https://www.andritz.com/resource/blob/51976/c720ed450f00c29453b9e67e1b2065e6/picture-2-astroe-research-development-pumps-pumps-data.png" className="w-full h-full object-cover" alt="R&D" /></div>
              <p className="text-slate-600 text-sm leading-relaxed">Our untiring efforts over four decades of time have helped us gain rich experience to pave the way for revolutionary innovation in food processing technology. A deep understanding of industry and customer requirements has gained us a leading position.</p>
            </div>
          </div>
        </section>

        {/* 5. MANUFACTURING FACILITIES (WHITE BG + HOVER NAME) */}
        <section className="py-24 bg-white container mx-auto px-6 lg:px-20">
          <header className="mb-12 flex justify-between items-end border-b pb-6 border-gray-100">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Manufacturing <span className="text-[#D4AF37]">Facilities</span></h2>
            <Factory className="text-slate-200" size={40} />
          </header>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {manufacturingImages.map((img) => (
              <div 
                key={img.id} 
                className="group relative h-60 overflow-hidden cursor-pointer rounded-sm bg-slate-900" 
                onClick={() => setSelectedImg(img.url)}
              >
                {/* Image: Grayscale by default, color and zoom on hover */}
                <img 
                  src={img.url} 
                  className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-40" 
                  alt={img.name} 
                />
                
                {/* Overlay: Name and Icon appear on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-4 text-center">
                  <Maximize2 className="text-[#D4AF37] mb-3" size={28} />
                  <p className="text-white text-[11px] font-black uppercase tracking-[0.2em] leading-tight">
                    {img.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODAL POPUP */}
        <AnimatePresence>
          {selectedImg && (
            <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 backdrop-blur-md bg-black/80">
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative max-w-2xl w-full z-10 bg-white p-2">
                <button onClick={() => setSelectedImg(null)} className="absolute -top-10 right-0 text-white hover:text-[#D4AF37] transition-colors"><X size={32} /></button>
                <img src={selectedImg} className="w-full h-auto" alt="Preview" />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
      <WhatsAppFixed />
      <ScrollToTop />
    </>
  );
};

export default AboutUsContent;