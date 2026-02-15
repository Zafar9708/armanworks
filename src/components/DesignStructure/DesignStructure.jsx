import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, PenTool, Factory, ShieldCheck, Zap,ArrowRight } from 'lucide-react';

const DesignStructure = () => {
  const [isHovered, setIsHovered] = useState(false);

  const steps = [
    {
      id: "01",
      title: "CONSULTATION",
      desc: "Initial site analysis and requirement gathering.",
      icon: <PenTool size={20} />,
      pos: "top-0 left-0"
    },
    {
      id: "02",
      title: "ENGINEERING",
      desc: "Custom CAD modeling and structural workflow.",
      icon: <Settings size={20} />,
      pos: "top-0 right-0"
    },
    {
      id: "03",
      title: "PRODUCTION",
      desc: "Precision manufacturing of plant components.",
      icon: <Factory size={20} />,
      pos: "bottom-0 left-0"
    },
    {
      id: "04",
      title: "DEPLOYMENT",
      desc: "On-site installation and system testing.",
      icon: <Zap size={20} />,
      pos: "bottom-0 right-0"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F7] text-slate-900 py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">Process Workflow</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mt-4">
            DESIGN & <span className="text-slate-300">STRUCTURE</span>
          </h2>
        </div>

        {/* The Node Network */}
        <div className="relative h-[600px] w-full max-w-4xl mx-auto">
          
          {/* SVG Connector Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <line x1="20%" y1="20%" x2="80%" y2="80%" stroke="#FAF1E6" strokeWidth="2" strokeDasharray="8 4" />
            <line x1="80%" y1="20%" x2="20%" y2="80%" stroke="#FAF1E6" strokeWidth="2" strokeDasharray="8 4" />
            <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#FAF1E6" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#FAF1E6" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#FAF1E6" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#FAF1E6" strokeWidth="2" />
          </svg>

          {/* Central Logo Node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                backgroundColor: isHovered ? "#0f172a" : "#FAF1E6",
                color: isHovered ? "#FAF1E6" : "#0f172a"
              }}
              className="w-32 h-32 rounded-full flex items-center justify-center shadow-2xl cursor-pointer border-4 border-white transition-colors duration-500"
            >
              {/* Replace with your actual Logo/Icon */}
              <div className="flex flex-col items-center">
                <ShieldCheck size={40} />
                <span className="text-[8px] font-bold tracking-widest mt-2">LOGO</span>
              </div>
            </motion.div>
            
            {/* Pulsing Ring Effect */}
            <motion.div 
              animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 border-2 border-[#FAF1E6] rounded-full -z-10"
            />
          </div>

          {/* Step Nodes */}
          {steps.map((step, index) => (
            <div key={index} className={`absolute ${step.pos} w-full md:w-64 z-20`}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-[#F8F8F7] group-hover:bg-[#FAF1E6] transition-colors flex items-center justify-center rounded-lg text-slate-400 group-hover:text-slate-900">
                    {step.icon}
                  </div>
                  <span className="text-xs font-black text-[#FAF1E6]">STEP {step.id}</span>
                </div>
                <h4 className="text-sm font-black tracking-widest mb-2">{step.title}</h4>
                <p className="text-[12px] text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Footer Action */}
        <div className="mt-20 flex justify-center">
          <button className="group flex items-center gap-8 bg-white border border-slate-200 px-12 py-6 hover:bg-slate-900 transition-all duration-500">
            <div className="text-left">
              <p className="text-[10px] font-bold text-slate-400 tracking-[0.3em]">NEXT PHASE</p>
              <p className="text-sm font-black group-hover:text-white transition-colors">START YOUR PROJECT</p>
            </div>
            <div className="h-10 w-10 bg-[#FAF1E6] rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform">
              <ArrowRight size={20} />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
};

export default DesignStructure;