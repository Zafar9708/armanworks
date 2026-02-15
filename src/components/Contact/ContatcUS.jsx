import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Mail, MapPin, Minus, User, Hash } from 'lucide-react';

const AmranContactSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* MAIN CONTACT SECTION (TRIGGER) */}
      <section className="bg-gray-50 py-24 px-6 md:px-12 text-center overflow-hidden relative border-t border-gray-100">
        {/* Subtle Background Watermark */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none flex justify-center items-center">
             {/* <h2 className="text-[20vw] font-black text-slate-900 leading-none">CONTACT</h2> */}
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-[1px] w-8 bg-[#D4AF37]"></div>
            <span className="text-[10px] font-black tracking-[0.5em] uppercase text-[#D4AF37]">Inquiry Portal</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-8 leading-tight">
            Consult With Our <br /> <span className="text-slate-400">Technical Team.</span>
          </h2>
          
          <p className="text-slate-500 text-sm md:text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            From initial floor planning to machinery installation, we provide end-to-end engineering support for your milling industry.
          </p>

          <button 
            onClick={toggleModal}
            className="group relative px-12 py-5 bg-slate-900 text-white font-black text-[11px] tracking-[0.3em] uppercase transition-all overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-slate-900 transition-colors duration-300">Open Inquiry Form</span>
            <motion.div 
              className="absolute inset-0 bg-[#D4AF37]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
          </button>
        </div>
      </section>

      {/* POP-UP MODAL FORM */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            />

            {/* Form Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              className="bg-white w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 relative overflow-hidden shadow-2xl"
            >
              {/* Left Side: Contact Details */}
              <div className="bg-gray-50 p-12 hidden md:flex flex-col justify-between border-r border-gray-100">
                <div>
                  <h3 className="text-2xl font-black tracking-tighter uppercase mb-4 text-slate-900">Direct <br/> Lines</h3>
                  <div className="h-1 w-12 bg-[#D4AF37] mb-8"></div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed mb-10">
                    Reach out directly to our engineering headquarters.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <Phone size={18} className="text-[#D4AF37] mt-1" />
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">Support Line</p>
                        <p className="text-sm font-black text-slate-900">+91 98XXX XXXXX</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail size={18} className="text-[#D4AF37] mt-1" />
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">Technical Email</p>
                        <p className="text-sm font-black text-slate-900">eng@amran.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-gray-200">
                    <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">Amran Engineering Works © 2026</p>
                </div>
              </div>

              {/* Right Side: The Form Fields */}
              <div className="p-10 md:p-14 relative bg-white">
                <button 
                  onClick={toggleModal}
                  className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-slate-400" />
                </button>

                <form className="space-y-7">
                  {/* Full Name */}
                  <div className="relative">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4AF37] block mb-1">Full Name</label>
                    <input type="text" required className="w-full border-b border-gray-200 py-3 focus:border-slate-900 outline-none transition-colors text-sm font-bold text-slate-900 bg-transparent placeholder:text-gray-300" placeholder="ENTER NAME" />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4AF37] block mb-1">Email Address</label>
                    <input type="email" required className="w-full border-b border-gray-200 py-3 focus:border-slate-900 outline-none transition-colors text-sm font-bold text-slate-900 bg-transparent placeholder:text-gray-300" placeholder="EMAIL@COMPANY.COM" />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4AF37] block mb-1">Phone Number</label>
                    <input type="tel" required className="w-full border-b border-gray-200 py-3 focus:border-slate-900 outline-none transition-colors text-sm font-bold text-slate-900 bg-transparent placeholder:text-gray-300" placeholder="+91 00000 00000" />
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4AF37] block mb-1">Requirement Details</label>
                    <textarea rows="3" required className="w-full border-b border-gray-200 py-3 focus:border-slate-900 outline-none transition-colors text-sm font-bold text-slate-900 bg-transparent resize-none placeholder:text-gray-300" placeholder="DESCRIBE YOUR PROJECT..."></textarea>
                  </div>

                  <button className="w-full mt-4 bg-slate-900 text-white py-5 text-[10px] font-black tracking-[0.4em] uppercase hover:bg-[#D4AF37] hover:text-slate-900 transition-all flex items-center justify-center gap-3">
                    Submit Technical Request <Send size={14} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AmranContactSection;