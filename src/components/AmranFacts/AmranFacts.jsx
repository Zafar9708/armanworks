// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Users, ShieldCheck, Factory, Award, CheckCircle, ArrowRight, Minus, Settings, X, Send, MessageCircle } from 'lucide-react';

// const AmranCompactGallery = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [isInquiryOpen, setIsInquiryOpen] = useState(false);
//   const [touchedIndex, setTouchedIndex] = useState(null);

//   const facts = [
//     {
//       id: "01",
//       title: "EXPERIENCED ENGINEERS",
//       value: "50+",
//       desc: "Our structural wing is led by industry veterans specializing in mechanical stress and grain-flow dynamics.",
//       icon: <Users size={20} strokeWidth={1.5} />,
//     },
//     {
//       id: "02",
//       title: "TRUSTED CLIENTS",
//       value: "1000+",
//       desc: "Architecting success for a diverse global portfolio, from local mills to industrial conglomerates.",
//       icon: <ShieldCheck size={20} strokeWidth={1.5} />,
//     },
//     {
//       id: "03",
//       title: "QUALITY PRODUCTS",
//       value: "PREMIUM",
//       desc: "Engineered with SS-316 surgical-grade steel for maximum hygiene and lifetime structural durability.",
//       icon: <Settings size={20} strokeWidth={1.5} />,
//     },
//     {
//       id: "04",
//       title: "MANUFACTURING HUB",
//       value: "25,000",
//       unit: "SQ.FT",
//       desc: "A state-of-the-art facility optimized for precision manufacturing and rapid global deployment.",
//       icon: <Factory size={20} strokeWidth={1.5} />,
//     },
//     {
//       id: "05",
//       title: "ISO CERTIFIED",
//       value: "9001:2010",
//       desc: "Strict adherence to international management protocols ensuring total consistency in every component.",
//       icon: <Award size={20} strokeWidth={1.5} />,
//     }
//   ];

//   const handleInquiryOpen = () => {
//     setIsInquiryOpen(true);
//   };

//   const handleInquiryClose = () => {
//     setIsInquiryOpen(false);
//   };

//   const handleWhatsApp = () => {
//     const message = encodeURIComponent("Hello, I'm interested in partnering with Amran. Please share more details about your products and services.");
//     window.open(`https://wa.me/919998551985?text=${message}`, '_blank');
//   };

//   // Handle touch for mobile
//   const handleTouchStart = (index) => {
//     // Clear any existing touch
//     if (touchedIndex !== null) {
//       setTouchedIndex(null);
//     }
//     // Set new touch
//     setTouchedIndex(index);
//     setHoveredIndex(index);
//   };

//   const handleTouchEnd = () => {
//     // Keep the touch state for a moment before clearing
//     setTimeout(() => {
//       setTouchedIndex(null);
//       setHoveredIndex(null);
//     }, 500);
//   };

//   // Determine if animation should be active (hover on desktop, touch on mobile)
//   const isActive = (index) => hoveredIndex === index || touchedIndex === index;

//   return (
//     <div className="min-h-screen bg-white text-slate-900 font-sans p-4 sm:p-6 md:p-12 lg:p-20">
//       <div className="max-w-6xl mx-auto">
        
//         {/* HEADER SECTION */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 md:gap-8 border-b border-slate-200 pb-6 md:pb-10">
//           <div className="space-y-1 md:space-y-2">
//           {/* HEADER SECTION */}
// <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 md:gap-8 border-b border-slate-200 pb-6 md:pb-10">
//   <div className="w-full md:w-auto space-y-1 md:space-y-2 text-center md:text-left">
//     <div className="flex items-center gap-2 justify-center md:justify-start">
//       <Minus className="text-slate-400" size={12} />
//       <span className="text-[8px] md:text-[9px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-slate-400">Company Dossier</span>
//     </div>
//     <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
//       AMRAN <span className="text-slate-300">FACTS</span>
//     </h2>
//   </div>
//   <div className="text-right hidden md:block">
//     <p className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mb-1">Standard Reference</p>
//     <span className="text-xs font-black">EST. 2026 / TECH-REVEAL</span>
//   </div>
// </div>
//           </div>
//           <div className="text-right hidden md:block">
//             <p className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mb-1">Standard Reference</p>
//             <span className="text-xs font-black">EST. 2026 / TECH-REVEAL</span>
//           </div>
//         </div>

//         {/* COMPACT GALLERY GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200 shadow-sm">
//           {facts.map((fact, index) => (
//             <motion.div
//               key={fact.id}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               onTouchStart={() => handleTouchStart(index)}
//               onTouchEnd={handleTouchEnd}
//               onTouchCancel={handleTouchEnd}
//               className="relative h-64 sm:h-72 md:h-80 border-r border-b border-slate-200 p-6 sm:p-8 flex flex-col justify-between group overflow-hidden cursor-pointer bg-white/40 hover:bg-white transition-all duration-500"
//               initial={false}
//             >
//               {/* Slide-up Background Highlight - Shows on hover (desktop) and touch (mobile) */}
//               <AnimatePresence mode="wait">
//                 {isActive(index) && (
//                   <motion.div 
//                     key={`bg-${index}`}
//                     initial={{ y: '100%' }}
//                     animate={{ y: 0 }}
//                     exit={{ y: '100%' }}
//                     transition={{ duration: 0.35, ease: "circOut" }}
//                     className="absolute inset-0 bg-[#FAF1E6] z-0"
//                   />
//                 )}
//               </AnimatePresence>

//               {/* Card Top: ID & Icon */}
//               <div className="relative z-10 flex justify-between items-start">
//                 <span className="text-[9px] sm:text-[10px] font-black tracking-widest text-slate-300 group-hover:text-slate-900 transition-colors">
//                   {fact.id}
//                 </span>
//                 <div className="text-slate-400 group-hover:text-slate-900 transition-colors">
//                   {fact.icon}
//                 </div>
//               </div>

//               {/* Card Middle: Values */}
//               <div className="relative z-10">
//                 <h3 className="text-3xl sm:text-4xl font-black tracking-tighter group-hover:italic transition-all duration-300">
//                   {fact.value}
//                   {fact.unit && <span className="text-[8px] sm:text-[10px] font-bold not-italic ml-1 opacity-40 uppercase tracking-widest">{fact.unit}</span>}
//                 </h3>
//                 <h4 className="text-[9px] sm:text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 group-hover:text-slate-900 mt-1 transition-colors">
//                   {fact.title}
//                 </h4>
//               </div>

//               {/* Card Bottom: Description & Action */}
//               <div className="relative z-10">
//                 <div className="overflow-hidden">
//                   <motion.p 
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ 
//                       y: isActive(index) ? 0 : 20, 
//                       opacity: isActive(index) ? 1 : 0 
//                     }}
//                     transition={{ duration: 0.4, delay: 0.1 }}
//                     className="text-[11px] sm:text-[12px] leading-relaxed text-slate-500"
//                   >
//                     {fact.desc}
//                   </motion.p>
//                 </div>
//                 <div className="mt-3 sm:mt-4 flex items-center justify-between">
//                   <motion.div 
//                     animate={{ 
//                       width: isActive(index) ? '100%' : '1.5rem' 
//                     }}
//                     transition={{ duration: 0.4 }}
//                     className="h-[1px] bg-slate-200 group-hover:bg-slate-900"
//                   />
//                   <motion.div
//                     animate={{ 
//                       x: isActive(index) ? 0 : -16,
//                       opacity: isActive(index) ? 1 : 0
//                     }}
//                     transition={{ duration: 0.3, delay: 0.1 }}
//                   >
//                     <ArrowRight size={14} className="ml-4" />
//                   </motion.div>
//                 </div>
//               </div>

//               {/* Touch indicator for mobile */}
//               {touchedIndex === index && (
//                 <motion.div 
//                   className="absolute bottom-2 right-2 z-20"
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   exit={{ scale: 0 }}
//                 >
//                   <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
//                 </motion.div>
//               )}
//             </motion.div>
//           ))}

//           {/* Contact Node */}
//           <div className="relative h-64 sm:h-72 md:h-80 border-r border-b border-slate-200 p-6 sm:p-8 flex flex-col justify-center items-center bg-slate-900 group overflow-hidden">
//              <motion.div 
//                animate={{ rotate: 360 }}
//                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//                className="absolute -right-10 -bottom-10 w-32 sm:w-40 h-32 sm:h-40 border border-white/5 rounded-full"
//              />
//              <div className="text-center space-y-3 sm:space-y-4 relative z-10">
//                <h3 className="text-white text-base sm:text-lg font-black tracking-tighter uppercase leading-tight">Partner with <br/> Excellence</h3>
//                <button 
//                  onClick={handleInquiryOpen}
//                  className="bg-[#FAF1E6] text-slate-900 px-5 sm:px-6 py-2.5 sm:py-3 text-[8px] sm:text-[9px] font-black tracking-[0.2em] hover:bg-white transition-all uppercase whitespace-nowrap"
//                >
//                  Inquire Now
//                </button>
//              </div>
//           </div>
//         </div>

//         {/* Inquiry Popup Modal - Responsive */}
//         <AnimatePresence>
//           {isInquiryOpen && (
//             <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
//               {/* Backdrop */}
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={handleInquiryClose}
//                 className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
//               />

//               {/* Modal */}
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0, y: 40 }}
//                 animate={{ scale: 1, opacity: 1, y: 0 }}
//                 exit={{ scale: 0.9, opacity: 0, y: 40 }}
//                 className="bg-white w-full max-w-lg md:max-w-2xl relative overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
//               >
//                 {/* Header */}
//                 <div className="bg-slate-900 p-5 sm:p-6 md:p-8 text-white">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-xl sm:text-2xl font-black mb-1 sm:mb-2">Partner Inquiry</h3>
//                       <p className="text-slate-400 text-xs sm:text-sm">Fill the form and our team will respond within 24 hours</p>
//                     </div>
//                     <button
//                       onClick={handleInquiryClose}
//                       className="p-1.5 sm:p-2 hover:bg-slate-800 rounded-lg transition-colors"
//                     >
//                       <X size={18} className="sm:w-5 sm:h-5" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Form */}
//                 <form className="p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5" onSubmit={(e) => e.preventDefault()}>
//                   <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
//                     <div>
//                       <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-[#FAF1E6] block mb-1 sm:mb-2">
//                         Full Name *
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         className="w-full border-b border-slate-200 py-2 sm:py-3 focus:border-[#FAF1E6] outline-none transition-colors text-xs sm:text-sm font-bold"
//                         placeholder="John Smith"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-[#FAF1E6] block mb-1 sm:mb-2">
//                         Company Name
//                       </label>
//                       <input
//                         type="text"
//                         className="w-full border-b border-slate-200 py-2 sm:py-3 focus:border-[#FAF1E6] outline-none transition-colors text-xs sm:text-sm font-bold"
//                         placeholder="Company Name"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
//                     <div>
//                       <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-[#FAF1E6] block mb-1 sm:mb-2">
//                         Email *
//                       </label>
//                       <input
//                         type="email"
//                         required
//                         className="w-full border-b border-slate-200 py-2 sm:py-3 focus:border-[#FAF1E6] outline-none transition-colors text-xs sm:text-sm font-bold"
//                         placeholder="john@company.com"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-[#FAF1E6] block mb-1 sm:mb-2">
//                         Phone *
//                       </label>
//                       <input
//                         type="tel"
//                         required
//                         className="w-full border-b border-slate-200 py-2 sm:py-3 focus:border-[#FAF1E6] outline-none transition-colors text-xs sm:text-sm font-bold"
//                         placeholder="+91 98765 43210"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-[#FAF1E6] block mb-1 sm:mb-2">
//                       Message *
//                     </label>
//                     <textarea
//                       rows="3"
//                       required
//                       className="w-full border border-slate-200 p-3 sm:p-4 focus:border-[#FAF1E6] outline-none transition-colors text-xs sm:text-sm font-bold resize-none"
//                       placeholder="Tell us about your requirements..."
//                     />
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
//                     <button
//                       type="submit"
//                       className="w-full sm:flex-1 bg-slate-900 text-white py-3 sm:py-4 text-[9px] sm:text-[10px] font-black tracking-wider uppercase hover:bg-[#FAF1E6] hover:text-slate-900 transition-colors flex items-center justify-center gap-2"
//                     >
//                       <Send size={12} className="sm:w-3.5 sm:h-3.5" />
//                       Submit Inquiry
//                     </button>
//                     <button
//                       type="button"
//                       onClick={handleWhatsApp}
//                       className="w-full sm:flex-1 bg-green-600 text-white py-3 sm:py-4 text-[9px] sm:text-[10px] font-black tracking-wider uppercase hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
//                     >
//                       <MessageCircle size={12} className="sm:w-3.5 sm:h-3.5" />
//                       WhatsApp
//                     </button>
//                   </div>
//                 </form>
//               </motion.div>
//             </div>
//           )}
//         </AnimatePresence>

//         {/* Mobile instruction text - optional */}
//         <div className="mt-4 text-center block sm:hidden">
//           <p className="text-[8px] text-slate-400 uppercase tracking-widest">Tap cards to reveal details</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AmranCompactGallery;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ShieldCheck, Factory, Award, CheckCircle, ArrowRight, Minus, Settings, X, Send, MessageCircle } from 'lucide-react';

const AmranCompactGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [touchedIndex, setTouchedIndex] = useState(null);
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const facts = [
    {
      id: "01",
      title: "EXPERIENCED ENGINEERS",
      value: "50+",
      desc: "Our structural wing is led by industry veterans specializing in mechanical stress and grain-flow dynamics.",
      icon: <Users size={20} strokeWidth={1.5} />,
    },
    {
      id: "02",
      title: "TRUSTED CLIENTS",
      value: "1000+",
      desc: "Architecting success for a diverse global portfolio, from local mills to industrial conglomerates.",
      icon: <ShieldCheck size={20} strokeWidth={1.5} />,
    },
    {
      id: "03",
      title: "QUALITY PRODUCTS",
      value: "PREMIUM",
      desc: "Engineered with SS-316 surgical-grade steel for maximum hygiene and lifetime structural durability.",
      icon: <Settings size={20} strokeWidth={1.5} />,
    },
    {
      id: "04",
      title: "MANUFACTURING HUB",
      value: "25,000",
      unit: "SQ.FT",
      desc: "A state-of-the-art facility optimized for precision manufacturing and rapid global deployment.",
      icon: <Factory size={20} strokeWidth={1.5} />,
    },
    {
      id: "05",
      title: "ISO CERTIFIED",
      value: "9001:2010",
      desc: "Strict adherence to international management protocols ensuring total consistency in every component.",
      icon: <Award size={20} strokeWidth={1.5} />,
    }
  ];

  const handleInquiryOpen = () => {
    setIsInquiryOpen(true);
    // Reset form state when opening
    setSubmitSuccess(false);
    setSubmitError('');
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleInquiryClose = () => {
    setIsInquiryOpen(false);
    // Reset form state when closing
    setSubmitSuccess(false);
    setSubmitError('');
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    // Prepare data for API - mapping fields to match API requirements
    const apiData = {
      fullName: formData.fullName,
      companyName: formData.companyName || '', // Optional field
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      productName: "Partner Inquiry - Amran Compact Gallery" // Default value since productName is not needed
    };

    try {
      const response = await fetch('https://arman-backend-cwew.onrender.com/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData)
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        
        // Reset form after 2 seconds and close modal
        setTimeout(() => {
          handleInquiryClose();
        }, 2000);
      } else {
        setSubmitError(data.message || 'Failed to submit inquiry. Please try again.');
        
        // Auto clear error after 5 seconds
        setTimeout(() => setSubmitError(''), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Network error. Please check your connection and try again.');
      
      // Auto clear error after 5 seconds
      setTimeout(() => setSubmitError(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello, I'm interested in partnering with Amran. Please share more details about your products and services.");
    window.open(`https://wa.me/919998551985?text=${message}`, '_blank');
  };

  // Handle touch for mobile
  const handleTouchStart = (index) => {
    // Clear any existing touch
    if (touchedIndex !== null) {
      setTouchedIndex(null);
    }
    // Set new touch
    setTouchedIndex(index);
    setHoveredIndex(index);
  };

  const handleTouchEnd = () => {
    // Keep the touch state for a moment before clearing
    setTimeout(() => {
      setTouchedIndex(null);
      setHoveredIndex(null);
    }, 500);
  };

  // Determine if animation should be active (hover on desktop, touch on mobile)
  const isActive = (index) => hoveredIndex === index || touchedIndex === index;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans p-4 sm:p-6 md:p-12 lg:p-20">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 md:gap-8 border-b border-slate-200 pb-6 md:pb-10">
          <div className="space-y-1 md:space-y-2">
          {/* HEADER SECTION */}
<div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 md:gap-8 border-b border-slate-200 pb-6 md:pb-10">
  <div className="w-full md:w-auto space-y-1 md:space-y-2 text-center md:text-left">
    <div className="flex items-center gap-2 justify-center md:justify-start">
      <Minus className="text-slate-400" size={12} />
      <span className="text-[8px] md:text-[9px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-slate-400">Company Dossier</span>
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
      AMRAN <span className="text-slate-300">FACTS</span>
    </h2>
  </div>
  {/* <div className="text-right hidden md:block">
    <p className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mb-1">Standard Reference</p>
    <span className="text-xs font-black">EST. 2026 / TECH-REVEAL</span>
  </div> */}
</div>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mb-1">Standard Reference</p>
            <span className="text-xs font-black">EST. 2010 / TECH-REVEAL</span>
          </div>
        </div>

        {/* COMPACT GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200 shadow-sm">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => handleTouchStart(index)}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchEnd}
              className="relative h-64 sm:h-72 md:h-80 border-r border-b border-slate-200 p-6 sm:p-8 flex flex-col justify-between group overflow-hidden cursor-pointer bg-white/40 hover:bg-white transition-all duration-500"
              initial={false}
            >
              {/* Slide-up Background Highlight - Shows on hover (desktop) and touch (mobile) */}
              <AnimatePresence mode="wait">
                {isActive(index) && (
                  <motion.div 
                    key={`bg-${index}`}
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.35, ease: "circOut" }}
                    className="absolute inset-0 bg-[#FAF1E6] z-0"
                  />
                )}
              </AnimatePresence>

              {/* Card Top: ID & Icon */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[9px] sm:text-[10px] font-black tracking-widest text-slate-300 group-hover:text-slate-900 transition-colors">
                  {fact.id}
                </span>
                <div className="text-slate-400 group-hover:text-slate-900 transition-colors">
                  {fact.icon}
                </div>
              </div>

              {/* Card Middle: Values */}
              <div className="relative z-10">
                <h3 className="text-3xl sm:text-4xl font-black tracking-tighter group-hover:italic transition-all duration-300">
                  {fact.value}
                  {fact.unit && <span className="text-[8px] sm:text-[10px] font-bold not-italic ml-1 opacity-40 uppercase tracking-widest">{fact.unit}</span>}
                </h3>
                <h4 className="text-[9px] sm:text-[10px] font-black tracking-[0.2em] uppercase text-slate-500 group-hover:text-slate-900 mt-1 transition-colors">
                  {fact.title}
                </h4>
              </div>

              {/* Card Bottom: Description & Action */}
              <div className="relative z-10">
                <div className="overflow-hidden">
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: isActive(index) ? 0 : 20, 
                      opacity: isActive(index) ? 1 : 0 
                    }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-[11px] sm:text-[12px] leading-relaxed text-slate-500"
                  >
                    {fact.desc}
                  </motion.p>
                </div>
                <div className="mt-3 sm:mt-4 flex items-center justify-between">
                  <motion.div 
                    animate={{ 
                      width: isActive(index) ? '100%' : '1.5rem' 
                    }}
                    transition={{ duration: 0.4 }}
                    className="h-[1px] bg-slate-200 group-hover:bg-slate-900"
                  />
                  <motion.div
                    animate={{ 
                      x: isActive(index) ? 0 : -16,
                      opacity: isActive(index) ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <ArrowRight size={14} className="ml-4" />
                  </motion.div>
                </div>
              </div>

              {/* Touch indicator for mobile */}
              {touchedIndex === index && (
                <motion.div 
                  className="absolute bottom-2 right-2 z-20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                </motion.div>
              )}
            </motion.div>
          ))}

          {/* Contact Node */}
          <div className="relative h-64 sm:h-72 md:h-80 border-r border-b border-slate-200 p-6 sm:p-8 flex flex-col justify-center items-center bg-slate-900 group overflow-hidden">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute -right-10 -bottom-10 w-32 sm:w-40 h-32 sm:h-40 border border-white/5 rounded-full"
             />
             <div className="text-center space-y-3 sm:space-y-4 relative z-10">
               <h3 className="text-white text-base sm:text-lg font-black tracking-tighter uppercase leading-tight">Partner with <br/> Excellence</h3>
               <button 
                 onClick={handleInquiryOpen}
                 className="bg-[#FAF1E6] text-slate-900 px-5 sm:px-6 py-2.5 sm:py-3 text-[8px] sm:text-[9px] font-black tracking-[0.2em] hover:bg-white transition-all uppercase whitespace-nowrap"
               >
                 Inquire Now
               </button>
             </div>
          </div>
        </div>

        {/* Inquiry Popup Modal - Responsive */}
        <AnimatePresence>
          {isInquiryOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleInquiryClose}
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
              />

              {/* Modal */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 40 }}
                className="bg-white w-full max-w-lg md:max-w-2xl relative overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              >
                {/* Success Message */}
                {submitSuccess ? (
                  <div className="p-12 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-3">THANK YOU!</h3>
                    <p className="text-slate-500 mb-8 max-w-sm mx-auto">
                      Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Header */}
                    <div className="bg-slate-900 p-5 sm:p-6 md:p-8 text-white">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-black mb-1 sm:mb-2">Partner Inquiry</h3>
                          <p className="text-slate-400 text-xs sm:text-sm">Fill the form and our team will respond within 24 hours</p>
                        </div>
                        <button
                          onClick={handleInquiryClose}
                          className="p-1.5 sm:p-2 hover:bg-slate-800 rounded-lg transition-colors"
                        >
                          <X size={18} className="sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Error Message */}
                    {submitError && (
                      <div className="mx-5 sm:mx-6 md:mx-8 mt-4 p-3 bg-red-50 border border-red-200 rounded-sm">
                        <p className="text-red-600 text-xs font-bold text-center">{submitError}</p>
                      </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                        <div>
                          <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-[#FAF1E6] block mb-1 sm:mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-slate-200 py-2 sm:py-3 focus:border-[#FAF1E6] outline-none transition-colors text-xs sm:text-sm font-bold"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-[#FAF1E6] block mb-1 sm:mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full border-b border-slate-200 py-2 sm:py-3 focus:border-[#FAF1E6] outline-none transition-colors text-xs sm:text-sm font-bold"
                            placeholder="Company Name"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                        <div>
                          <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-[#FAF1E6] block mb-1 sm:mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-slate-200 py-2 sm:py-3 focus:border-[#FAF1E6] outline-none transition-colors text-xs sm:text-sm font-bold"
                            placeholder="john@company.com"
                          />
                        </div>
                        <div>
                          <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-[#FAF1E6] block mb-1 sm:mb-2">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full border-b border-slate-200 py-2 sm:py-3 focus:border-[#FAF1E6] outline-none transition-colors text-xs sm:text-sm font-bold"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-[#FAF1E6] block mb-1 sm:mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          rows="3"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full border border-slate-200 p-3 sm:p-4 focus:border-[#FAF1E6] outline-none transition-colors text-xs sm:text-sm font-bold resize-none"
                          placeholder="Tell us about your requirements..."
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full sm:flex-1 bg-slate-900 text-white py-3 sm:py-4 text-[9px] sm:text-[10px] font-black tracking-wider uppercase hover:bg-[#FAF1E6] hover:text-slate-900 transition-colors flex items-center justify-center gap-2 ${
                            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              SUBMITTING...
                            </>
                          ) : (
                            <>
                              <Send size={12} className="sm:w-3.5 sm:h-3.5" />
                              Submit Inquiry
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={handleWhatsApp}
                          disabled={isSubmitting}
                          className="w-full sm:flex-1 bg-green-600 text-white py-3 sm:py-4 text-[9px] sm:text-[10px] font-black tracking-wider uppercase hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                        >
                          <MessageCircle size={12} className="sm:w-3.5 sm:h-3.5" />
                          WhatsApp
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Mobile instruction text - optional */}
        <div className="mt-4 text-center block sm:hidden">
          <p className="text-[8px] text-slate-400 uppercase tracking-widest">Tap cards to reveal details</p>
        </div>
      </div>
    </div>
  );
};

export default AmranCompactGallery;