import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Award, Target, Users, Settings, Milestone, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 overflow-hidden">
      
      {/* 1. Hero / Narrative Intro */}
      <section className="relative px-6 py-2 lg:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-12 h-[1px] bg-[#FAF1E6]" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
                Legacy of Excellence
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-8 uppercase tracking-tighter">
              A Spirit of Innovation <br />
              <span className="text-[#eaddcf] italic">Built Over 15 Years.</span>
            </h1>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-2xl">
              <p>
                Arman Engineering Works, an <span className="font-bold text-gray-900 border-b-2 border-[#FAF1E6]">ISO 9001:2010 certified company</span>, 
                strives to inculcate the spirit of excellence and innovation in the field of food processing. 
                Our foundation is built on competency, character, and a proud legacy of four decades.
              </p>
              <p>
                Throughout this journey, we have traversed through endless learning moments—transforming 
                challenges into unmatched excellence through a constant process of iterative innovation 
                and technical refinement.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            {/* The Main Image - Integrated cleanly */}
            <div className="relative rounded-3xl overflow-hidden border-8 border-[#FAF1E6]">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" 
                alt="Manufacturing Floor" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white shadow-xl p-8 rounded-2xl border border-gray-100 max-w-[200px]">
              <p className="text-4xl font-black text-gray-900">15+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">
                Years of Robust Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Pillars - Using FAF1E6 for subtle grouping */}
      

      {/* 3. Deep Content / Stats Section */}
      <section className="max-w-7xl mx-auto px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-gray-300 mb-6">Our Capabilities</h3>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FAF1E6] rounded-full flex items-center justify-center font-bold">01</div>
                <div>
                  <h4 className="font-bold text-xl uppercase mb-2">Modern Infrastructure</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Equipped with CNC machinery and advanced welding technologies, our manufacturing 
                    facility ensures that every product leaving our floor meets international quality benchmarks.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FAF1E6] rounded-full flex items-center justify-center font-bold">02</div>
                <div>
                  <h4 className="font-bold text-xl uppercase mb-2">Expert Consultation</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We provide end-to-end guidance from plant layout design to installation and 
                    operator training, ensuring your food processing unit operates at peak efficiency.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#FAF1E6] rounded-full flex items-center justify-center font-bold">03</div>
                <div>
                  <h4 className="font-bold text-xl uppercase mb-2">Sustainability Focus</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our machines are designed to be energy-efficient, minimizing the carbon footprint 
                    of your processing facility while maximizing profit margins.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="border-l-4 border-[#FAF1E6] pl-10 space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter leading-none">
                Traversing endless <br /> 
                learning moments.
              </h2>
              <p className="text-gray-500 italic text-lg font-medium">
                "Our journey is defined not by the machines we have sold, but by the technical 
                benchmarks we have set in the industry."
              </p>
              <button className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest group">
                Download Company Profile 
                <div className="w-10 h-10 rounded-full bg-[#FAF1E6] flex items-center justify-center group-hover:translate-x-2 transition-transform">
                  <ArrowRight size={16} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Timeline / Milestone Markers */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex min-w-[1000px] justify-between items-start pt-10">
            {[
              { year: "2010", desc: "The Foundation" },
              { year: "2015", desc: "First Export Unit" },
              { year: "2020", desc: "ISO Certification" },
              { year: "2055", desc: "Automated Plants" },
              { year: "2026", desc: "Future Tech Integration" }
            ].map((m, i) => (
              <div key={i} className="relative flex flex-col items-center text-center w-48">
                <div className="w-4 h-4 rounded-full bg-gray-900 z-10" />
                {i !== 4 && <div className="absolute top-2 left-1/2 w-full h-[1px] bg-[#FAF1E6]" />}
                <h5 className="mt-6 text-2xl font-black text-gray-900">{m.year}</h5>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;