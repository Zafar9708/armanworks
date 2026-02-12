import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Settings, ArrowRight } from 'lucide-react';

const slides = [
  { id: 1, cert: "An ISO 9001 : 2015 Certified", title: "THE NEW HULLER MACHINE", desc: "Engineered for high-capacity performance with precision hulling technology.", img: "https://www.maavumill.in/images/huller-machine/huller-flour-mill-machine-in-coimbatore.webp" },
  { id: 2, cert: "An ISO 9001 : 2015 Certified", title: "PREMIUM GRAIN SEPARATOR", desc: "Advanced sorting accuracy using magnetic and vibration-based filtration.", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/435636215/EG/VL/AC/20532802/single-drum-magnetic-separator.png" },
  { id: 3, cert: "An ISO 9001 : 2015 Certified", title: "AUTOMATIC DAAL PLANT", desc: "Full-scale processing efficiency for industrial-grade pulse production.", img: "https://shriviratraengineering.in/wp-content/uploads/2024/01/Slider3-1024x683.webp" },
  { id: 4, cert: "An ISO 9001 : 2015 Certified", title: "HIGH-SPEED PADDY CLEANER", desc: "Instantly removes impurities with high-velocity air and screen technology.", img: "https://cpimg.tistatic.com/09390795/b/4/UL-Series-MS-Paddy-Pre-Cleaner.jpg" },
  { id: 5, cert: "An ISO 9001 : 2015 Certified", title: "INDUSTRIAL SPICE GRINDER", desc: "Heavy-duty grinding for bulk produce while maintaining nutritional aroma.", img: "https://5.imimg.com/data5/SELLER/Default/2025/12/565467796/XH/QL/FY/14678655/commercial-spice-grinder-machine.jpg" },
  { id: 6, cert: "An ISO 9001 : 2015 Certified", title: "COLOR SORTER ACCESSORIES", desc: "Genuine precision parts for peak sorting and color grading performance.", img: "https://www.metakcolorsorter.com/wp-content/uploads/2015/10/rice_color_sorter-2-1030x1030.jpg" },
  { id: 7, cert: "An ISO 9001 : 2015 Certified", title: "GRAIN POLISHING UNIT", desc: "Adds a premium finish to your harvest, maximizing market value.", img: "https://5.imimg.com/data5/SELLER/Default/2023/5/311689499/RQ/UI/WD/21436662/wheat-grain-polisher-machine.jpg" },
  { id: 8, cert: "An ISO 9001 : 2015 Certified", title: "PROCESSING EXPERT", desc: "Integrated vertical transport and high-strength elevator solutions.", img: "https://shriviratraengineering.in/wp-content/uploads/2024/01/Slider3-1024x683.webp" },
  { id: 9, cert: "An ISO 9001 : 2015 Certified", title: "DAL DRYER SYSTEM", desc: "Optimized moisture control with advanced pneumatic heating technology.", img: "https://5.imimg.com/data5/SELLER/Default/2023/11/359441354/VS/SD/AZ/37321722/dal-mill-dryer.png" },
  { id: 10, cert: "An ISO 9001 : 2015 Certified", title: "PRECISION PACKING UNIT", desc: "Tailored industrial packing solutions for accuracy and high speed.", img: "https://5.imimg.com/data5/SELLER/Default/2024/7/435636215/EG/VL/AC/20532802/single-drum-magnetic-separator.png" },
];

const ArmanCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-screen min-h-[600px] w-full bg-gray-500 overflow-hidden font-sans border-y border-white/5">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={index}
          custom={direction}
          initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-24"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              
              {/* Text Group */}
              <div className="w-full lg:w-1/2 space-y-5 text-center lg:text-left order-2 lg:order-1">
                <div className="inline-flex items-center gap-2">
                   <div className="w-6 h-[1px] bg-[#FAF1E6]/40" />
                   <span className="text-[#FAF1E6] text-xs font-bold uppercase tracking-widest opacity-80">
                      {slides[index].cert}
                   </span>
                </div>
                
                <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-tight">
                  {slides[index].title}
                </h2>
                
                <p className="text-gray-400 text-sm md:text-lg font-normal leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {slides[index].desc}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button className="w-full sm:w-auto bg-[#FAF1E6] text-[#1a1a1a] px-8 py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
                    View Specs
                  </button>
                  <button className="text-white/60 hover:text-white flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors">
                    Get a Quote <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Image Group */}
              <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2">
                <div className="relative">
                  {/* Studio glow behind machine */}
                  <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full scale-150" />
                  
                  <motion.img 
                    initial={{ scale: 0.85, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    src={slides[index].img} 
                    alt={slides[index].title} 
                    className="h-[280px] md:h-[380px] lg:h-[420px] w-auto object-contain z-10 drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows: Positioned like the original */}
      <div className="absolute inset-y-0 left-0 right-0 z-40 flex items-center justify-between px-4 lg:px-8 pointer-events-none">
        <button onClick={prevSlide} className="pointer-events-auto p-3 lg:p-4 rounded-full border border-white/10 text-white/40 hover:text-white hover:bg-white/5 transition-all">
          <ChevronLeft size={36} strokeWidth={1} />
        </button>
        <button onClick={nextSlide} className="pointer-events-auto p-3 lg:p-4 rounded-full border border-white/10 text-white/40 hover:text-white hover:bg-white/5 transition-all">
          <ChevronRight size={36} strokeWidth={1} />
        </button>
      </div>

      {/* Centered Number Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-40 flex justify-center items-center gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
            className="group flex flex-col items-center gap-2"
          >
            <span className={`text-[10px] font-bold transition-all duration-300 ${
              index === i ? "text-[#FAF1E6]" : "text-white/20 group-hover:text-white/50"
            }`}>
              {(i + 1).toString().padStart(2, '0')}
            </span>
            <div className={`h-[1px] transition-all duration-500 rounded-full ${
              index === i ? "w-8 bg-[#FAF1E6]" : "w-4 bg-white/10 group-hover:bg-white/30"
            }`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArmanCarousel;