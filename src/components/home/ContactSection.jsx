import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';

const ContactSection = () => {
  const whatsappNumber = "919898898219"; // Format: CountryCode + Number
  const message = encodeURIComponent("Hello! I am interested in your processing plant solutions.");

  return (
    <div className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* --- Left Side: Contact Info --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
                GET IN <span className="text-[#D4AF37]">TOUCH</span>
              </h2>
              <p className="text-slate-500 max-w-md">
                Have a project in mind? Our team of experts is ready to help you scale your processing facility with precision engineering.
              </p>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-6 items-start">
                <div className="bg-[#FAF8F0] p-4 rounded-sm text-[#D4AF37]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-1">Office Address</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    State Highway No. 41, Industrial Area,<br /> Patan, Gujarat - 384151
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-6 items-start">
                <div className="bg-[#FAF8F0] p-4 rounded-sm text-[#D4AF37]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-1">Call Us</h4>
                  <p className="text-slate-600 font-medium">+91 98988 98219</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-[#25D366] text-white px-8 py-4 rounded-sm shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle size={20} fill="white" />
                <span className="text-sm font-bold tracking-widest uppercase">Chat on WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>

          {/* --- Right Side: Contact Form --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FBFBFB] p-8 md:p-12 border border-slate-100 shadow-sm rounded-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-[#D4AF37] transition-colors text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-[#D4AF37] transition-colors text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000"
                  className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-[#D4AF37] transition-colors text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Description</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-white border border-slate-200 p-4 outline-none focus:border-[#D4AF37] transition-colors text-sm resize-none"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ backgroundColor: '#B8952E' }}
                className="w-full bg-[#D4AF37] text-white font-bold py-5 rounded-sm flex items-center justify-center gap-3 tracking-[0.2em] uppercase text-xs transition-colors shadow-lg"
              >
                Send Message
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;