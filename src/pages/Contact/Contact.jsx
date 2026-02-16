import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageSquare, Factory, Construction, ArrowRight } from 'lucide-react';
import Navbar from '../../components/home/Navbar';
import Footer from '../../components/home/Footer';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen pt-20 font-sans">
        
        {/* --- PROFESSIONAL HEADER --- */}
        <section className="bg-slate-50 py-20 border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37]">Connect With Us</span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Project Consultation & Support
              </h1>
              <p className="text-slate-600 text-base leading-relaxed font-light">
                Whether you are planning a new processing plant or require maintenance for an existing installation, 
                our engineering team is ready to assist you with technical expertise.
              </p>
            </div>
          </div>
        </section>

        {/* --- CONTACT GRID --- */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-3 gap-12">
              
              {/* Left Column: Direct Contact Info */}
              <div className="space-y-10">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Contact Details</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <Phone className="text-[#D4AF37] flex-shrink-0" size={20} />
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Phone & WhatsApp</p>
                        <p className="text-slate-900 font-bold">+91 98XXX XXXXX</p>
                        <p className="text-slate-900 font-bold">+91 94XXX XXXXX</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Mail className="text-[#D4AF37] flex-shrink-0" size={20} />
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Email Inquiry</p>
                        <p className="text-slate-900 font-bold">info@armanengineering.com</p>
                        <p className="text-slate-900 font-bold">sales@armanengineering.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-10 border-t border-slate-50">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Operating Hours</h3>
                  <div className="flex gap-4">
                    <Clock className="text-[#D4AF37] flex-shrink-0" size={20} />
                    <div className="text-sm text-slate-600 font-light">
                      <p>Monday — Saturday</p>
                      <p className="font-bold text-slate-900">09:00 AM — 07:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle & Right Column: The Integrated Form */}
              <div className="lg:col-span-2 bg-white border border-slate-100 shadow-xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <MessageSquare size={120} />
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 mb-8 uppercase tracking-tight">Request a Quote</h2>
                
                <form className="grid md:grid-cols-2 gap-6 relative z-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border-none p-4 text-sm outline-none focus:ring-1 focus:ring-[#D4AF37]" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Company Name</label>
                    <input type="text" className="w-full bg-slate-50 border-none p-4 text-sm outline-none focus:ring-1 focus:ring-[#D4AF37]" placeholder="Agro Industries Ltd" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-slate-50 border-none p-4 text-sm outline-none focus:ring-1 focus:ring-[#D4AF37]" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Inquiry Type</label>
                    <select className="w-full bg-slate-50 border-none p-4 text-sm outline-none focus:ring-1 focus:ring-[#D4AF37] appearance-none cursor-pointer">
                      <option>New Plant Setup (Turnkey)</option>
                      <option>Machinery Purchase</option>
                      <option>Erection Services</option>
                      <option>Spare Parts / Maintenance</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Your Requirements</label>
                    <textarea rows="4" className="w-full bg-slate-50 border-none p-4 text-sm outline-none focus:ring-1 focus:ring-[#D4AF37]" placeholder="Briefly describe your project capacity and location..."></textarea>
                  </div>
                  <button className="md:col-span-2 bg-slate-900 text-white py-5 font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-3">
                    Submit Inquiry <ArrowRight size={16} />
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* --- OFFICE & WORKSHOP LOCATIONS --- */}
        <section className="py-20 bg-[#F8F9FB] border-t border-slate-100">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-2 gap-12">
              
              <div className="bg-white p-10 border border-slate-200">
                <Factory className="text-[#D4AF37] mb-6" size={32} />
                <h4 className="text-xl font-bold text-slate-900 mb-4">Manufacturing Unit</h4>
                <div className="flex gap-4">
                  <MapPin className="text-slate-300 flex-shrink-0" size={18} />
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    Plot No. XX, Industrial Area Phase II,<br />
                    Near Grain Market, City Name,<br />
                    State - XXXXXX, India
                  </p>
                </div>
              </div>

              <div className="bg-white p-10 border border-slate-200">
                <Construction className="text-[#D4AF37] mb-6" size={32} />
                <h4 className="text-xl font-bold text-slate-900 mb-4">Corporate Office</h4>
                <div className="flex gap-4">
                  <MapPin className="text-slate-300 flex-shrink-0" size={18} />
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    Suite 101, Engineering Chambers,<br />
                    Business District, City Name,<br />
                    State - XXXXXX, India
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- MAP PLACEHOLDER --- */}
        <div className="w-full h-96 bg-slate-200 grayscale">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11212!2d77.2!3d28.6" 
            className="w-full h-full border-0" 
            allowFullScreen="" 
            loading="lazy"
            title="Office Location"
           ></iframe>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default ContactPage;