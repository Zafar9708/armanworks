import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Factory, Zap, Users, Play, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "ADVANCED PROCESSING PLANTS",
      subtitle: "ENGINEERING EXCELLENCE",
      description: "We provide deep industrial insights into multi-crop processing. Our responsive mechanical solutions are engineered to minimize waste and maximize your facility's profitability through precision calibration.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/12/372814249/QU/CI/BD/7551604/fully-automatic-spice-processing-plant.jpg",
      icon: <Factory className="text-slate-400" size={24} />
    },
    {
      title: "EVOLUTIONARY TURNKEY SOLUTIONS",
      subtitle: "END-TO-END INTEGRATION",
      description: "In an era of rapid technological shifts, we deliver future-ready plants. From conceptual design to final commissioning, our turnkey approach ensures your evolution keeps pace with global standards.",
      image: "https://media.licdn.com/dms/image/v2/C4D12AQGCyTiKaNjy2g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1598868532931?e=2147483647&v=beta&t=ThzicLvOQS07pPA3MRsVDNnh_xJU2KLMJta-NjMW_kk",
      icon: <Zap className="text-slate-400" size={24} />
    }
  ];

  const handleClientPortfolioClick = () => {
    navigate('/client');
  };

  return (
    <div className="min-h-screen bg-[#F8F8F7] text-slate-900 font-sans p-6 md:p-12 lg:p-20">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Services Section --- */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Side - Borderless */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
              </div>

              {/* Text Side - Exactly as before */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  {service.icon}
                  <span className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">
                    {service.subtitle}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
                  {service.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg max-w-xl">
                  {service.description}
                </p>
                <button className="group flex items-center gap-4 bg-white border border-slate-200 px-8 py-4 hover:bg-[#FAF1E6] transition-all duration-300">
                  <span className="text-xs font-bold tracking-widest">READ MORE</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- Video Section (Middle Break) - Borderless --- */}
        <div className="my-32 relative group cursor-pointer">
          <div className="relative h-[400px] w-full overflow-hidden">
            <img 
              src="/images/video-placeholder.jpg" 
              className="w-full h-full object-cover brightness-50"
              alt="Video Preview"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="bg-[#FAF1E6] p-6 rounded-full text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                <Play fill="currentColor" size={32} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">WATCH OUR TECHNOLOGY IN ACTION</h3>
            </div>
          </div>
        </div>

        {/* --- Stats / Clients Section - Borderless Images --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-12 lg:p-20">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#FAF1E6] px-4 py-2 rounded-full">
              <Users size={16} />
              <span className="text-[10px] font-bold tracking-widest uppercase">Global Trust</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter">
              1000<span className="text-[#d8cdbf]">+</span>
            </h2>
            <h3 className="text-2xl font-bold text-slate-400">CLIENTS SERVED WORLDWIDE</h3>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <p className="text-xl text-slate-600 leading-relaxed">
              Our commitment to excellence has allowed us to partner with industry leaders across five continents. We don't just supply machinery; we build long-term legacy plants that define market standards.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {['Quality Assurance', '24/7 Support', 'Global Logistics', 'Custom Engineering'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-800">
                  <CheckCircle2 size={18} className="text-slate-400" />
                  {item}
                </div>
              ))}
            </div>
            <button 
              onClick={handleClientPortfolioClick}
              className="flex items-center gap-4 bg-slate-900 text-white px-10 py-5 hover:bg-slate-800 transition-all duration-300 shadow-lg cursor-pointer"
            >
              <span className="text-xs font-bold tracking-widest">OUR CLIENT PORTFOLIO</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceSection;