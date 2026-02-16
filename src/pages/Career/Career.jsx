import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Target, Rocket, Heart, ArrowRight, MapPin, Clock } from 'lucide-react';
import Navbar from '../../components/home/Navbar';
import Footer from '../../components/home/Footer';

const CareersPage = () => {
  const jobs = [
    {
      title: "Senior Design Engineer (CAD)",
      department: "Manufacturing",
      location: "In-House Workshop",
      type: "Full-Time",
      desc: "Expertise in designing mechanical layouts for Grain and Seed cleaning machinery."
    },
    {
      title: "Project Erection Lead",
      department: "On-Site Operations",
      location: "Field Projects (Pan India)",
      type: "Full-Time",
      desc: "Lead teams in the structural installation and commissioning of Turnkey Daal Mill plants."
    },
    {
      title: "Quality Control Specialist",
      department: "Fabrication",
      location: "In-House Workshop",
      type: "Full-Time",
      desc: "Ensuring SS-304/316 fabrication standards and high-precision load testing."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen pt-20 font-sans">
        
        {/* --- REFINED CAREER HERO --- */}
        <section className="bg-slate-900 py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-6 lg:px-20 relative z-10">
            <div className="max-w-3xl">
              <span className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block text-center md:text-left">Join The Legacy</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-6 leading-tight text-center md:text-left">
                Build the Future of <br/> <span className="text-[#D4AF37]">Agro-Engineering.</span>
              </h1>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-10 text-center md:text-left">
                We are looking for passionate engineers, fabricators, and thinkers to help us design and erect the next generation of food processing plants.
              </p>
              <div className="flex justify-center md:justify-start">
                 <button className="bg-[#D4AF37] text-slate-900 px-10 py-4 font-bold uppercase text-[11px] tracking-widest hover:bg-white transition-all">
                  Explore Openings
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- CORE VALUES --- */}
        <section className="py-20 border-b border-slate-50">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center p-8 bg-slate-50 border-b-2 border-transparent hover:border-[#D4AF37] transition-all">
                <Target className="text-[#D4AF37] mx-auto mb-6" size={32} />
                <h3 className="font-bold text-slate-900 uppercase text-sm mb-4">Precision First</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">We value detail-oriented minds who believe that even a millimeter matters in fabrication.</p>
              </div>
              <div className="text-center p-8 bg-slate-50 border-b-2 border-transparent hover:border-[#D4AF37] transition-all">
                <Users className="text-[#D4AF37] mx-auto mb-6" size={32} />
                <h3 className="font-bold text-slate-900 uppercase text-sm mb-4">Collaborative Culture</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">Our designers work closely with our site erectors to ensure seamless plant integration.</p>
              </div>
              <div className="text-center p-8 bg-slate-50 border-b-2 border-transparent hover:border-[#D4AF37] transition-all">
                <Rocket className="text-[#D4AF37] mx-auto mb-6" size={32} />
                <h3 className="font-bold text-slate-900 uppercase text-sm mb-4">Career Growth</h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">From the shop floor to project leadership—we nurture talent that wants to build big.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- JOB LISTINGS --- */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Current Openings</h2>
                <p className="text-slate-400 text-sm mt-2 font-light italic">Join our manufacturing and erection units</p>
              </div>
              <Briefcase className="text-slate-100 hidden md:block" size={60} />
            </div>

            <div className="space-y-4">
              {jobs.map((job, i) => (
                <div key={i} className="group border border-slate-100 p-8 flex flex-col md:flex-row justify-between items-center hover:shadow-xl transition-all hover:border-[#D4AF37]/30">
                  <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                      <h4 className="text-lg font-bold text-slate-900">{job.title}</h4>
                      <span className="text-[9px] font-bold bg-[#D4AF37]/10 text-[#D4AF37] px-2 py-1 uppercase tracking-tighter">
                        {job.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 text-slate-400 text-[11px] uppercase tracking-widest font-bold">
                      <span className="flex items-center gap-2"><MapPin size={12} /> {job.location}</span>
                      <span className="flex items-center gap-2"><Clock size={12} /> {job.type}</span>
                    </div>
                    <p className="mt-4 text-slate-500 text-sm font-light max-w-xl">{job.desc}</p>
                  </div>
                  <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-900 hover:text-[#D4AF37] transition-colors border-l-0 md:border-l border-slate-100 pl-0 md:pl-10 h-full">
                    Apply Now <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- LIFE AT ARMAN --- */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                 <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400" className="w-full aspect-square object-cover" alt="Workshop Life" />
                    <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400" className="w-full aspect-square object-cover mt-8" alt="On-site Work" />
                 </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight uppercase">Life at Arman Works</h2>
                <p className="text-slate-500 font-light leading-relaxed">
                  We believe in a hands-on approach. Our team spends time both at the drawing board and on the factory floor. This 360-degree exposure ensures you understand the heartbeat of industrial engineering.
                </p>
                <div className="flex gap-8">
                  <div className="text-center">
                    <div className="text-xl font-bold text-slate-900">100+</div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Team Members</p>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-slate-900">0%</div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Safety Incidents</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- GENERAL INQUIRY --- */}
        <section className="py-20 text-center bg-white">
          <div className="container mx-auto px-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-tight">Don't see a perfect fit?</h3>
            <p className="text-slate-500 text-sm font-light mb-8 max-w-lg mx-auto">
              We are always on the lookout for talented individuals. Send your CV and portfolio to our HR department.
            </p>
            <a href="mailto:hr@armanengineering.com" className="text-slate-900 font-bold text-sm border-b-2 border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-all">
              hr@armanengineering.com
            </a>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default CareersPage;