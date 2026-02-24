import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Building2, CheckCircle, Globe, ShieldCheck, Users, ArrowRight } from 'lucide-react';
import Navbar from '../../components/home/Navbar';
import Footer from '../../components/home/Footer';

const ClientsPage = () => {
   
   const logos = [
    { id: 1, src: "https://cdn.worldvectorlogo.com/logos/siemens-1.svg", name: "Siemens" },
    { id: 2, src: "https://cdn.worldvectorlogo.com/logos/caterpillar.svg", name: "Caterpillar" },
    { id: 3, src: "https://cdn.worldvectorlogo.com/logos/bosch-2.svg", name: "Bosch" },
    { id: 4, src: "https://cdn.worldvectorlogo.com/logos/abb-2.svg", name: "ABB" },
    { id: 5, src: "https://cdn.worldvectorlogo.com/logos/mitsubishi-1.svg", name: "Mitsubishi" },
    { id: 6, src: "https://cdn.worldvectorlogo.com/logos/john-deere-2.svg", name: "John Deere" },
    { id: 7, src: "https://cdn.worldvectorlogo.com/logos/komatsu.svg", name: "Komatsu" },
    { id: 8, src: "https://cdn.worldvectorlogo.com/logos/volvo-1.svg", name: "Volvo" },
    { id: 9, src: "https://cdn.worldvectorlogo.com/logos/tata-1.svg", name: "Tata" },
    { id: 10, src: "https://cdn.worldvectorlogo.com/logos/kubota-1.svg", name: "Kubota" },
    { id: 11, src: "https://cdn.worldvectorlogo.com/logos/danfoss.svg", name: "Danfoss" },
    { id: 12, src: "https://cdn.worldvectorlogo.com/logos/ge-general-electric.svg", name: "GE" },
    { id: 13, src: "https://cdn.worldvectorlogo.com/logos/hyundai-7.svg", name: "Hyundai" },
    { id: 14, src: "https://cdn.worldvectorlogo.com/logos/hitachi-1.svg", name: "Hitachi" },
    { id: 15, src: "https://cdn.worldvectorlogo.com/logos/kirloskar.svg", name: "Kirloskar" },
    { id: 16, src: "https://cdn.worldvectorlogo.com/logos/mahindra-1.svg", name: "Mahindra" },
    { id: 17, src: "https://cdn.worldvectorlogo.com/logos/skf-1.svg", name: "SKF" },
    { id: 18, src: "https://cdn.worldvectorlogo.com/logos/eaton-1.svg", name: "Eaton" },
    { id: 19, src: "https://cdn.worldvectorlogo.com/logos/atlas-copco.svg", name: "Atlas Copco" },
    { id: 20, src: "https://cdn.worldvectorlogo.com/logos/schneider-electric.svg", name: "Schneider" },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen pt-20 font-sans">
        
        {/* --- REFINED HERO --- */}
        <section className="bg-[#F8F9FB] py-20 border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37]">Global Partnerships</span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Our Clients & Strategic Alliances
              </h1>
              <p className="text-slate-600 text-base leading-relaxed font-light">
                Arman Engineering Works has spent over two decades building high-performance grain and spice processing plants. 
                Our reputation is built on the success of the 300+ clients we serve across the globe.
              </p>
            </div>
          </div>
        </section>

        {/* --- TRUST METRICS --- */}
        <section className="py-12 border-b border-slate-50">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              <div className="border-l-2 border-[#D4AF37] pl-6">
                <div className="text-2xl font-bold text-slate-900">300+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Plants Erected</div>
              </div>
              <div className="border-l-2 border-[#D4AF37] pl-6">
                <div className="text-2xl font-bold text-slate-900">12+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Countries</div>
              </div>
              <div className="border-l-2 border-[#D4AF37] pl-6">
                <div className="text-2xl font-bold text-slate-900">95%</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Retention Rate</div>
              </div>
              <div className="border-l-2 border-[#D4AF37] pl-6">
                <div className="text-2xl font-bold text-slate-900">20Y+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CLIENT LOGO GRID --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">Industry Leaders We Support</h2>
              <p className="text-slate-400 text-sm mt-2 font-light">Manufacturer & Erector Partners since 2004</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-slate-100 border border-slate-100">
              {logos.map((logo) => (
                <div key={logo.id} className="bg-white aspect-video flex items-center justify-center p-8 group hover:bg-[#F8F9FB] transition-colors">
                  <div className="flex flex-col items-center">
                    <img 
                      src={logo.src} 
                      alt={logo.name}
                      className="max-h-12 w-auto"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                      }}
                    />
                    <span className="text-[9px] font-bold mt-3 uppercase tracking-tighter text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                      {logo.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- THE ARMAN PROMISE --- */}
        <section className="py-20 bg-[#F8F9FB]">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Why Clients Choose Arman Engineering</h2>
                <div className="space-y-6">
                  {[
                    { title: "Direct Manufacturer", desc: "No middlemen. We fabricate every critical component in our own workshop." },
                    { title: "Expert Erectors", desc: "Specialized on-site teams for structural alignment and plant commissioning." },
                    { title: "After-Sales Support", desc: "24/7 technical assistance and ready stock of spare parts." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1"><CheckCircle className="text-[#D4AF37]" size={18} /></div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">{item.title}</h4>
                        <p className="text-sm text-slate-500 font-light mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-10 border border-slate-200 shadow-sm">
                <div className="text-[#D4AF37] mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Become a Partner</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-8">
                  Looking to setup a modern processing plant? Join our network of successful millers. We provide full technical documentation and site surveys.
                </p>
                <button className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-900 hover:text-[#D4AF37] transition-colors">
                  Request a Consultation <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default ClientsPage;