import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, ShieldCheck } from 'lucide-react';

const slides = [
  { id: 1, cert: "ISO 9001:2015 Certified", title: "Huller Machine", subtitle: "New Generation", desc: "Engineered for high-capacity performance with precision hulling technology for global standards.", img: "https://www.maavumill.in/images/huller-machine/huller-flour-mill-machine-in-coimbatore.webp" },
  { id: 2, cert: "ISO 9001:2015 Certified", title: "Grain Separator", subtitle: "Premium Sorting", desc: "Advanced sorting accuracy using magnetic and vibration-based filtration systems.", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/435636215/EG/VL/AC/20532802/single-drum-magnetic-separator.png" },
  { id: 3, cert: "ISO 9001:2015 Certified", title: "Daal Plant", subtitle: "Fully Automatic", desc: "Full-scale processing efficiency for industrial-grade pulse production and packaging.", img: "https://shriviratraengineering.in/wp-content/uploads/2024/01/Slider3-1024x683.webp" },
  { id: 4, cert: "ISO 9001:2015 Certified", title: "Paddy Cleaner", subtitle: "High Velocity", desc: "Instantly removes impurities with high-velocity air and screen technology.", img: "https://cpimg.tistatic.com/09390795/b/4/UL-Series-MS-Paddy-Pre-Cleaner.jpg" },
  { id: 5, cert: "ISO 9001:2015 Certified", title: "Spice Grinder", subtitle: "Heavy Duty", desc: "Heavy-duty grinding for bulk produce while maintaining nutritional aroma and texture.", img: "https://5.imimg.com/data5/SELLER/Default/2025/12/565467796/XH/QL/FY/14678655/commercial-spice-grinder-machine.jpg" },
  { id: 6, cert: "ISO 9001:2015 Certified", title: "Sorter Parts", subtitle: "Precision Access", desc: "Genuine precision parts for peak sorting and color grading performance.", img: "https://www.metakcolorsorter.com/wp-content/uploads/2015/10/rice_color_sorter-2-1030x1030.jpg" },
  { id: 7, cert: "ISO 9001:2015 Certified", title: "Polishing Unit", subtitle: "Grain Excellence", desc: "Adds a premium finish to your harvest, maximizing market value and shelf life.", img: "https://5.imimg.com/data5/SELLER/Default/2023/5/311689499/RQ/UI/WD/21436662/wheat-grain-polisher-machine.jpg" },
  { id: 8, cert: "ISO 9001:2015 Certified", title: "Processing Expert", subtitle: "Vertical Transport", desc: "Integrated vertical transport and high-strength elevator solutions for modern factories.", img: "https://shriviratraengineering.in/wp-content/uploads/2024/01/Slider3-1024x683.webp" },
  { id: 9, cert: "ISO 9001:2015 Certified", title: "Dryer System", subtitle: "Moisture Control", desc: "Optimized moisture control with advanced pneumatic heating technology for Dal mills.", img: "https://5.imimg.com/data5/SELLER/Default/2023/11/359441354/VS/SD/AZ/37321722/dal-mill-dryer.png" },
  { id: 10, cert: "ISO 9001:2015 Certified", title: "Packing Unit", subtitle: "High Accuracy", desc: "Tailored industrial packing solutions for accuracy and extreme high speed.", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/435636215/EG/VL/AC/20532802/single-drum-magnetic-separator.png" },
];

const AmranPremiumCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-screen min-h-[700px] w-full bg-[#0a0a0a] overflow-hidden">
      
      {/* BACKGROUND TEXT WATERMARK */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
        <h1 className="text-[25vw] font-black text-white leading-none uppercase">ARMAN</h1>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center"
        >
          <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
            
            {/* CONTENT SECTION */}
            <div className="z-20 space-y-8 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 text-[#D4AF37]"
              >
                <ShieldCheck size={20} />
                <span className="text-xs font-bold tracking-[0.4em] uppercase">{slides[index].cert}</span>
              </motion.div>

              <div className="space-y-2">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/40 text-xl font-bold uppercase tracking-widest"
                >
                  {slides[index].subtitle}
                </motion.h3>
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]"
                >
                  {slides[index].title.split(' ')[0]} <br />
                  <span className="text-[#D4AF37]">{slides[index].title.split(' ')[1] || ""}</span>
                </motion.h2>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 text-lg max-w-md leading-relaxed"
              >
                {slides[index].desc}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-6 pt-6"
              >
                <button className="bg-[#D4AF37] text-black px-10 py-4 font-black text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2">
                  Technical Specs <ArrowUpRight size={16} />
                </button>
                <button className="border border-white/20 text-white px-10 py-4 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                  Request Quote
                </button>
              </motion.div>
            </div>

            {/* IMAGE SECTION */}
            <div className="relative flex justify-center items-center order-1 lg:order-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10"
              >
                {/* Visual Depth Circle */}
                <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[120px] rounded-full" />
                
                <img 
                  src={slides[index].img} 
                  alt={slides[index].title}
                  className="h-[350px] md:h-[500px] w-auto object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.8)]"
                />
              </motion.div>
              
              {/* Massive Slide Number Background */}
              <span className="absolute -right-10 top-1/2 -translate-y-1/2 text-[20rem] font-black text-white/[0.03] leading-none pointer-events-none">
                {(index + 1).toString().padStart(2, '0')}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* CONTROLS */}
      <div className="absolute bottom-12 right-12 z-50 flex items-center gap-4">
        <button onClick={prevSlide} className="w-14 h-14 border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all">
          <ChevronLeft size={24} />
        </button>
        <div className="h-[1px] w-20 bg-white/10" />
        <button onClick={nextSlide} className="w-14 h-14 border border-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* PROGRESS TRACKER */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 z-50 space-y-4 hidden lg:block">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group flex items-center gap-4 outline-none"
          >
            <div className={`h-1 transition-all duration-500 ${index === i ? "w-12 bg-[#D4AF37]" : "w-4 bg-white/20"}`} />
            <span className={`text-[10px] font-bold tracking-widest transition-all ${index === i ? "text-[#D4AF37] opacity-100" : "text-white opacity-0 group-hover:opacity-40"}`}>
              {(i + 1).toString().padStart(2, '0')}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AmranPremiumCarousel;