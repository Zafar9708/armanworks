import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageCircle, Send } from 'lucide-react';

const ContactSection = () => {
  const whatsappNumber = "919898898219";
  const message = encodeURIComponent("Hello! I am interested in your processing plant solutions.");

  return (
    <div className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* --- Left Side: Contact Info (Centered on Mobile) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-10"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
                GET IN <span className="text-[#D4AF37]">TOUCH</span>
              </h2>
              <p className="text-slate-500 max-w-md mx-auto lg:mx-0">
                Have a project in mind? Our team of experts is ready to help you scale your processing facility with precision engineering.
              </p>
            </div>

            <div className="space-y-8 w-full">
              {/* Address */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-start">
                <div className="bg-[#FAF8F0] p-4 rounded-sm text-[#D4AF37]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-widest text-[10px] mb-1">Office Address</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    State Highway No. 41, Industrial Area,<br /> Patan, Gujarat - 384151
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center lg:items-start">
                <div className="bg-[#FAF8F0] p-4 rounded-sm text-[#D4AF37]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-widest text-[10px] mb-1">Call Us</h4>
                  <p className="text-slate-600 font-medium text-lg">+91 98988 98219</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-4">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/${whatsappNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-4 rounded-sm shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle size={20} fill="white" />
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-white">Chat on WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* --- Right Side: Contact Form --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#FBFBFB] p-6 md:p-10 border border-slate-100 shadow-sm rounded-sm"
          >
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-white border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm"
                  placeholder="+91 00000 00000"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Requirement Description</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-white border border-slate-200 p-3.5 outline-none focus:border-[#D4AF37] transition-colors text-sm resize-none"
                  placeholder="How can we assist you?"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ backgroundColor: '#B8952E' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#D4AF37] text-white font-bold py-4 rounded-sm flex items-center justify-center gap-3 tracking-[0.2em] uppercase text-[11px] transition-colors shadow-md mt-4"
              >
                Send Message
                <Send size={14} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;