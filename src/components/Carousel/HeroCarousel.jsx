import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, ShieldCheck, X, Send, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AmranPremiumCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const slides = [
    { 
      id: 1, 
      cert: "ISO 9001:2010 Certified", 
      title: "Gravity Separator", 
      subtitle: "5 HP Automatic", 
      desc: "Arman Powder Coated 5 HP Automatic Gravity Separator with 20 ton/day capacity. Ideal for separating kernels and granular products based on specific gravity.", 
      img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      fullName: "5 HP Automatic Gravity Separator"
    },
    { 
      id: 2, 
      cert: "ISO 9001:2010 Certified", 
      title: "Gravity Separator", 
      subtitle: "3 HP Automatic", 
      desc: "3 HP automatic gravity separator with single phase connection and powder coated finish for durability and efficient separation of granular products.", 
      img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420335972/MT/PQ/VJ/28748905/rice-mill-plant-installation-services-500x500.jpg",
      fullName: "3 HP Automatic Gravity Separator"
    },
    { 
      id: 3, 
      cert: "ISO 9001:2010 Certified", 
      title: "Gravity Separator", 
      subtitle: "5 Fan System", 
      desc: "High-capacity gravity separator with 5 fans for enhanced separation efficiency. Ideal for large-scale grain processing with 80 ton/day capacity.", 
      img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
      fullName: "5 Fan Gravity Separator"
    },
    { 
      id: 4, 
      cert: "ISO 9001:2010 Certified", 
      title: "Food Processing", 
      subtitle: "Automatic Plant", 
      desc: "Complete food processing solution for grinding applications. Features automatic operation, mild steel construction, and 10 HP motor power with 100 kg/hr capacity.", 
      img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg",
      fullName: "Automatic Food Processing Plant"
    },
    { 
      id: 5, 
      cert: "ISO 9001:2010 Certified", 
      title: "Drum Sealer", 
      subtitle: "Automatic Cap", 
      desc: "Electric driven automatic drum cap sealing machine for industrial packaging. Features 2 HP power, 240V voltage, and 100 caps/min capacity.", 
      img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      fullName: "Automatic Drum Cap Sealing Machine"
    },
    { 
      id: 6, 
      cert: "ISO 9001:2010 Certified", 
      title: "Flour Mill", 
      subtitle: "50 HP Plant", 
      desc: "High-capacity automatic flour mill plant for commercial applications. Features 50 HP motor, three phase connection, and 1000 kg/hr capacity.", 
      img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420335972/MT/PQ/VJ/28748905/rice-mill-plant-installation-services-500x500.jpg",
      fullName: "Automatic Flour Mill Plant"
    },
    { 
      id: 7, 
      cert: "ISO 9001:2010 Certified", 
      title: "Belt Conveyor", 
      subtitle: "Flat System", 
      desc: "Flat belt conveyor for packaging applications. Features 400 kg load capacity, automatic operation, and mild steel construction for durability.", 
      img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
      fullName: "Mild Steel Flat Belt Conveyor"
    },
    { 
      id: 8, 
      cert: "ISO 9001:2010 Certified", 
      title: "Air Classifier", 
      subtitle: "500 kg/hr", 
      desc: "Industrial machine that separates dry powder materials into fine and coarse fractions based on size and shape using air currents and centrifugal force.", 
      img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg",
      fullName: "Air Classifier Machine"
    },
    { 
      id: 9, 
      cert: "ISO 9001:2010 Certified", 
      title: "Sortex Plant", 
      subtitle: "Fully Automatic", 
      desc: "Complete cleaning solution with 80 HP power, three phase connection, and automatic operation. Ideal for industrial cleaning applications with 4 Ton capacity.", 
      img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      fullName: "Fully Automatic Sortex Cleaning Plant"
    },
    { 
      id: 10, 
      cert: "ISO 9001:2010 Certified", 
      title: "Dal Mill", 
      subtitle: "Automatic", 
      desc: "Automatic dal mill machine for all pulses processing. Features 3 HP motor, SS 304 construction, and 70% head pulses recovery with 200 kg/hr capacity.", 
      img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420335972/MT/PQ/VJ/28748905/rice-mill-plant-installation-services-500x500.jpg",
      fullName: "Automatic Dal Mill Machine"
    },
    { 
      id: 11, 
      cert: "ISO 9001:2010 Certified", 
      title: "Vibro Destoner", 
      subtitle: "Automatic", 
      desc: "Vibro destoner machine for industrial applications. Features 2 HP motor, three phase connection, and powder coated finish with 2 Ton/day capacity.", 
      img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420334120/FW/BN/UO/28748905/flour-mill-plant-installation-service-500x500.jpeg",
      fullName: "Automatic Vibro Destoner Machine"
    },
    { 
      id: 12, 
      cert: "ISO 9001:2010 Certified", 
      title: "Centrifugal Fan", 
      subtitle: "5 HP", 
      desc: "Centrifugal fan with 3 kW motor power, 10 Bar pressure, and 1200 RPM speed. Ideal for commercial ventilation applications with wall mounting option.", 
      img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420331053/UO/QR/UR/28748905/oil-mill-plant-installation-services-500x500.jpg",
      fullName: "5 HP Industrial Centrifugal Fan"
    },
    { 
      id: 13, 
      cert: "ISO 9001:2010 Certified", 
      title: "Pneumatic System", 
      subtitle: "Hydraulic", 
      desc: "Hydraulic systems with the potential to handle heavier loads and produce more work than pneumatic systems. Features 10 Ton max force with 100kg/hr capacity.", 
      img: "https://5.imimg.com/data5/SELLER/Default/2024/5/420470046/XP/HM/QE/28748905/dal-mills-plant-installation-services-500x500.jpeg",
      fullName: "Hydraulic Pneumatic Equipment"
    }
  ];

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

  const handleTechnicalSpecs = () => {
    setSelectedProduct(slides[index]);
    navigate('/contact', { 
      state: { 
        product: slides[index].fullName,
        subject: `Technical Specifications Request for ${slides[index].fullName}`
      } 
    });
  };

  const handleRequestQuote = () => {
    setSelectedProduct(slides[index]);
    setIsQuoteOpen(true);
  };

  const handleQuoteClose = () => {
    setIsQuoteOpen(false);
    setSelectedProduct(null);
  };

  const handleWhatsApp = () => {
    const product = slides[index];
    const message = encodeURIComponent(`Hello, I'm interested in ${product.fullName}. Please share more details and quote.`);
    window.open(`https://wa.me/919998551985?text=${message}`, '_blank');
    setIsQuoteOpen(false);
  };

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
                <button 
                  onClick={handleTechnicalSpecs}
                  className="bg-[#D4AF37] text-black px-10 py-4 font-black text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2"
                >
                  Technical Specs <ArrowUpRight size={16} />
                </button>
                <button 
                  onClick={handleRequestQuote}
                  className="border border-white/20 text-white px-10 py-4 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                >
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

      {/* Quote Popup Modal */}
      <AnimatePresence>
        {isQuoteOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleQuoteClose}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              className="bg-white w-full max-w-2xl relative overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="bg-[#0a0a0a] p-8 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black mb-2">Request Quote</h3>
                    <p className="text-gray-400 text-sm">
                      {selectedProduct ? `For: ${selectedProduct.fullName}` : 'Fill the form and our team will respond within 24 hours'}
                    </p>
                  </div>
                  <button
                    onClick={handleQuoteClose}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Form */}
              <form className="p-8 space-y-1" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] block mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] block mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] block mb-2">
                    Quantity Required
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-slate-200 py-3 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold"
                    placeholder="e.g., 1 Unit, 50 Meters, etc."
                  />
                </div>

                <div>
                  <label className="text-[9px] font-black uppercase tracking-wider text-[#D4AF37] block mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    required
                    className="w-full border border-slate-200 p-4 focus:border-[#D4AF37] outline-none transition-colors text-sm font-bold resize-none"
                    placeholder={`I'm interested in ${selectedProduct?.fullName || 'your products'}. Please share specifications and quote.`}
                    defaultValue={`I'm interested in ${selectedProduct?.fullName || 'your products'}. Please share specifications and quote.`}
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-[#0a0a0a] text-white py-4 text-[10px] font-black tracking-wider uppercase hover:bg-[#D4AF37] hover:text-black transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    Submit Request
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex-1 bg-green-600 text-white py-4 text-[10px] font-black tracking-wider uppercase hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AmranPremiumCarousel;