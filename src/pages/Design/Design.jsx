import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, ChevronRight, PenTool, Box, Activity, 
  CheckCircle2, Cpu, Ruler, Monitor, PencilRuler,
  Compass, Layers, Database, ChevronLeft, X, Send, Phone, Mail,MapPin,Settings
} from 'lucide-react';
import Footer from '../../components/home/Footer';
import Navbar from '../../components/home/Navbar';

const DesignAndStructure = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const workflow = [
    {
      id: "01",
      title: "Conceptual Design",
      phase: "Foundation Phase",
      desc: "Our expert designers build 2D and 3D models of the plant with accurate, easy, and quick access so that you can take a virtual tour of the project even before construction work begins.",
      detailedDesc: "We provide a basic model for baseline evaluation and identify the desires and aspirations of each customer type in terms of how they communicate with the design under various conditions. We provide an accurate production forecast, future looks, fundamental understanding of the scope of developments, that includes marketability, labor needs and expected costs.",
      deliverables: [
        "Flow Diagrams & P&I Diagrams",
        "Engineering Specifications",
        "Utility Requirement Data Sheets",
        "3D Virtual Walkthrough Models",
        "Production Forecasting Reports"
      ],
      stats: ["3D Visualization", "Flow Analysis", "Requirement Mapping"],
      icon: PenTool,
      color: "#D4AF37",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "02",
      title: "Preliminary Engineering",
      phase: "Development Phase",
      desc: "The preliminary design and Engineering process determines the overall project set-up. Our design team collaborates with you to determine the requirements of your project!",
      detailedDesc: "To have your dream project, we are preparing ourselves adequately by providing comprehensive planning and layout solutions. We ensure every aspect of your project is carefully considered before moving to detailed engineering.",
      deliverables: [
        "Conceptual Layouts & Plot Plans",
        "Equipment Layout & Arrangement",
        "Detailed Specifications for Package Items",
        "Data Sheets for All Equipment",
        "Initial Cost Estimates"
      ],
      stats: ["Plot Planning", "Equipment Layout", "Specification Sheets"],
      icon: Compass,
      color: "#2D5A82",
      image: "https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&fit=crop&q=80&w=1200"
    },
    {
      id: "03",
      title: "Detail Engineering",
      phase: "Execution Phase",
      desc: "Our Engineers create a full project concept which includes the designation of equipment, components, structure, installation etc. We cover all the analyses before the launch of the project.",
      detailedDesc: "Our expert engineers create a detailed outline of the project ensuring every component is precisely engineered for optimal performance, longevity, and safety. We leave nothing to chance.",
      deliverables: [
        "Detailed Equipment Specifications",
        "Structural Design & Analysis",
        "Installation Methodologies",
        "Piping & Instrumentation Diagrams",
        "Construction & Fabrication Drawings"
      ],
      stats: ["Equipment Design", "Structural Engineering", "Installation Planning"],
      icon: Settings,
      color: "#D4AF37",
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-[#F4F7FA] text-slate-800 font-sans pt-24 selection:bg-[#D4AF37] selection:text-white">
        
        {/* --- 1. UNIQUE ARCHITECTURAL HERO (EXACTLY AS YOU HAD IT) --- */}
        <section className="relative py-32 bg-white border-b border-slate-200 overflow-hidden">
          {/* Subtle Blueprint Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#2D5A82 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}>
          </div>

          <div className="container mx-auto px-6 lg:px-20 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <nav className="flex items-center gap-2 text-[10px] font-black tracking-[0.4em] text-[#D4AF37] uppercase mb-12">
                  <Compass size={14} /> <ChevronRight size={12} /> Design Engineering
                </nav>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.85] mb-10">
                  PRECISION <br /><span className="text-slate-300">THROUGH</span> <span className="text-[#D4AF37]">DESIGN.</span>
                </h1>
                <p className="max-w-xl text-lg text-slate-500 font-light leading-relaxed border-l-2 border-slate-100 pl-8">
                  From concept to construction, our engineering philosophy ensures every detail is meticulously planned and executed. We don't just design structures; we engineer success.
                </p>
                {/* Added only the button that opens the contact form */}
                <button 
                  onClick={() => setIsContactOpen(true)}
                  className="mt-12 group bg-slate-900 text-white px-8 py-4 text-xs font-black tracking-[0.2em] uppercase hover:bg-[#D4AF37] transition-all duration-300 flex items-center gap-3"
                >
                  Start Your Journey <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="lg:col-span-5 relative hidden lg:block">
                 <div className="w-full aspect-square border-[1px] border-slate-100 rounded-full flex items-center justify-center relative">
                    <div className="w-3/4 aspect-square border-[1px] border-[#D4AF37]/20 rounded-full animate-spin-slow"></div>
                    <Database className="absolute text-slate-100" size={120} />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 border border-slate-200 text-[9px] font-black tracking-widest text-slate-400">DATA_DRIVEN_LOGIC</div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. THE INTERACTIVE STEP-NODE SECTION (EXACTLY AS YOU HAD IT) --- */}
        <section className="py-24 bg-[#F4F7FA]">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="bg-white shadow-2xl overflow-hidden rounded-sm flex flex-col lg:flex-row min-h-[700px]">
              
              {/* Left Side: Navigation Nodes */}
              <div className="lg:w-80 bg-slate-50 border-r border-slate-100 p-10 flex flex-col justify-between">
                <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 mb-12">Systemic Workflow</h3>
                    <div className="space-y-12 relative">
                        {/* Connecting Line */}
                        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-slate-200"></div>
                        
                        {workflow.map((item, index) => (
                            <button 
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className="relative z-10 flex items-center gap-6 group text-left outline-none"
                            >
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-500 ${
                                    activeStep === index ? 'bg-[#D4AF37] text-white scale-110 shadow-lg' : 'bg-white border border-slate-200 text-slate-400'
                                }`}>
                                    {item.id}
                                </div>
                                <div className="transition-all duration-300">
                                    <p className={`text-[10px] font-black tracking-widest uppercase ${activeStep === index ? 'text-[#D4AF37]' : 'text-slate-400'}`}>Phase {item.id}</p>
                                    <p className={`text-sm font-bold tracking-tight ${activeStep === index ? 'text-slate-900' : 'text-slate-400'}`}>{item.phase}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-200">
                    <p className="text-[9px] font-black text-slate-400 leading-relaxed uppercase tracking-widest">
                        Validated under <br />ISO 9001 Structural Standards
                    </p>
                </div>
              </div>

              {/* Right Side: Dynamic Content */}
              <div className="flex-1 p-10 lg:p-20 relative bg-white">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="h-full flex flex-col justify-between"
                    >
                        <div className="grid lg:grid-cols-2 gap-16">
                            <div className="space-y-8">
                                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-none tracking-tighter">
                                    {workflow[activeStep].title}
                                </h2>
                                <p className="text-lg text-slate-500 font-light leading-relaxed italic border-l-4 border-[#D4AF37] pl-6">
                                    "{workflow[activeStep].desc}"
                                </p>
                                <div className="space-y-4 pt-4">
                                    {workflow[activeStep].stats.map((stat, i) => (
                                        <div key={i} className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-slate-700">
                                            <div className="h-1.5 w-1.5 bg-[#D4AF37]"></div>
                                            {stat}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-[#D4AF37]/30"></div>
                                <div className="overflow-hidden rounded-sm bg-slate-100 aspect-[4/5] shadow-xl">
                                    <img 
                                        src={workflow[activeStep].image} 
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100" 
                                        alt="Design Engineering Detail" 
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Technical Footer of the Content Box */}
                        <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
                            <div className="flex gap-12">
                                <div>
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Standard Check</p>
                                    <p className="text-xs font-bold text-slate-800 tracking-tighter uppercase">Verified Logic</p>
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Compute Environment</p>
                                    <p className="text-xs font-bold text-slate-800 tracking-tighter uppercase underline decoration-[#D4AF37]">CAD Workstation 09</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. THE "STRUCTURE" DEEP-DIVE (EXACTLY AS YOU HAD IT) --- */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative">
                <div className="absolute -inset-10 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
                <div className="relative z-10 border-[1px] border-slate-200 p-2 bg-white">
                    <img 
                        src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200" 
                        className="w-full h-auto" 
                        alt="Structural Analysis heatmap" 
                    />
                    
                </div>
              </div>
              <div className="space-y-10">
                <span className="text-[#D4AF37] text-[10px] font-black tracking-[0.5em] uppercase">Structural Integrity</span>
                <h2 className="text-5xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                    Built for <br /><span className="text-slate-300">Endurance.</span>
                </h2>
                <p className="text-slate-500 text-lg font-light leading-relaxed">
                  We follow the <strong>"A.E.W 25%"</strong> rule—every structural frame is engineered to withstand 25% more than its rated maximum load. This cushion of safety is why our installations stay operational long after competitors' machines show fatigue.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                    <div className="p-8 bg-slate-50 border border-slate-100 hover:border-[#D4AF37] transition-colors group">
                        <Ruler className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" />
                        <h5 className="font-bold text-sm uppercase tracking-widest mb-2">Micron Fitment</h5>
                        <p className="text-[11px] text-slate-400 leading-relaxed uppercase">Laser-aligned joints for zero-tolerance assembly.</p>
                    </div>
                    <div className="p-8 bg-slate-50 border border-slate-100 hover:border-[#D4AF37] transition-colors group">
                        <Layers className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform" />
                        <h5 className="font-bold text-sm uppercase tracking-widest mb-2">Modular Core</h5>
                        <p className="text-[11px] text-slate-400 leading-relaxed uppercase">Scalable frame design for future capacity expansion.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. LEGACY INDICATOR (EXACTLY AS YOU HAD IT) --- */}
        <section className="py-24 bg-slate-100/50">
          <div className="container mx-auto px-6 lg:px-20 text-center">
             <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-12">The Engineering Standard</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {[
                    { label: "Design Patents", val: "12+" },
                    { label: "FEA Audits", val: "100%" },
                    { label: "Active Designs", val: "450+" },
                    { label: "Engineering Staff", val: "Senior Only" }
                ].map((stat, i) => (
                    <div key={i}>
                        <p className="text-3xl font-black text-slate-900 mb-1">{stat.val}</p>
                        <p className="text-[9px] font-black text-[#D4AF37] uppercase tracking-widest">{stat.label}</p>
                    </div>
                ))}
             </div>
          </div>
        </section>

        {/* --- 5. CONTACT MODAL (ADDED BUTTON AND MODAL) --- */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-20 text-center">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
              Ready to <span className="text-[#D4AF37]">Engineer</span> Your Project?
            </h3>
            <p className="text-slate-500 max-w-2xl mx-auto mb-12">
              Let's discuss your requirements and create a design that stands the test of time.
            </p>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="group bg-slate-900 text-white px-12 py-5 text-xs font-black tracking-[0.3em] uppercase hover:bg-[#D4AF37] transition-all duration-500 relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Design Journey</span>
              <div className="absolute inset-0 bg-[#D4AF37] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>
        </section>

        {/* CONTACT MODAL */}
        <AnimatePresence>
          {isContactOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsContactOpen(false)}
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
                    onClick={() => setIsContactOpen(false)}
                    className="absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={20} className="text-slate-400" />
                  </button>

                  <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative">
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4AF37] block mb-1">Full Name</label>
                      <input type="text" required className="w-full border-b border-gray-200 py-3 focus:border-slate-900 outline-none transition-colors text-sm font-bold text-slate-900 bg-transparent placeholder:text-gray-300" placeholder="ENTER NAME" />
                    </div>

                    <div className="relative">
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4AF37] block mb-1">Email Address</label>
                      <input type="email" required className="w-full border-b border-gray-200 py-3 focus:border-slate-900 outline-none transition-colors text-sm font-bold text-slate-900 bg-transparent placeholder:text-gray-300" placeholder="EMAIL@COMPANY.COM" />
                    </div>

                    <div className="relative">
                      <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#D4AF37] block mb-1">Phone Number</label>
                      <input type="tel" required className="w-full border-b border-gray-200 py-3 focus:border-slate-900 outline-none transition-colors text-sm font-bold text-slate-900 bg-transparent placeholder:text-gray-300" placeholder="+91 00000 00000" />
                    </div>

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
      <Footer />
    </>
  );
};

export default DesignAndStructure;