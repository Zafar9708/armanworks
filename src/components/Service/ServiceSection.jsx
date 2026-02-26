import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import mainVideo from '../../assets/video/main.mp4';

const ServiceSection = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); 

  const services = [
    {
      title: "Processing Plant",
      description: "We have insight into the processing of nearly every type of plant, and we offer responsive solutions that can enhance profitability...",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/12/372814249/QU/CI/BD/7551604/fully-automatic-spice-processing-plant.jpg",
    },
    {
      title: "Turnkey Solutions",
      description: "Food processing technology evolves at a breakneck pace. However it's important for you to make improvement as well at the same time...",
      image: "https://images.pexels.com/photos/7688160/pexels-photo-7688160.jpeg",
    }
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation(); // Prevents the play/pause trigger when clicking mute
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-[#F8F8F7] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Top Row: Processing & Turnkey --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 mb-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className="w-full sm:w-1/2 aspect-[4/3] overflow-hidden rounded-sm shadow-md">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              
              <div className="w-full sm:w-1/2 space-y-3">
                <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
                <button className="flex items-center gap-6 group border border-slate-200 px-4 py-2 hover:bg-white transition-all rounded-sm">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-slate-700">Explore</span>
                  <ArrowRight size={16} className="text-[#D4AF37] group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Bottom Row: Clients & Video --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 items-start"
          >
            <div className="w-full sm:w-1/2 aspect-[4/3] overflow-hidden rounded-sm shadow-md">
              <img 
                src="https://media.bizj.us/view/img/11983229/gettyimages-1044743952*1200xx5000-2818-0-514.jpg" 
                alt="Clients" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full sm:w-1/2 space-y-3">
              <h3 className="text-2xl font-bold text-slate-800 tracking-tight leading-[1.1]">
                1000+ <br /> CLIENTS <br /> WE SERVED
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We strive to fully comprehend our customers mindset and offer what they desire in the most smooth manner.
              </p>
              <button 
                onClick={() => navigate('/client')}
                className="flex items-center gap-6 group border border-slate-200 px-4 py-2 hover:bg-white transition-all rounded-sm"
              >
                <span className="text-[11px] font-bold tracking-widest uppercase text-slate-700">Explore</span>
                <ArrowRight size={16} className="text-[#D4AF37] group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Video Player Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full aspect-video rounded-sm overflow-hidden bg-black group shadow-xl cursor-pointer"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              playsInline
              loop
              muted={isMuted}
            >
              <source src={mainVideo} type="video/mp4" />
            </video>

            {/* Centered Play Button Overlay */}
            {!isVideoPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="bg-white/90 p-5 rounded-full text-slate-900 shadow-2xl transition-transform hover:scale-110">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
            )}

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} className="text-white hover:text-[#86BC42] transition-colors">
                  {isVideoPlaying ? <Pause size={20} /> : <Play size={20} fill="white" />}
                </button>
                
                {/* --- Mute/Unmute Button --- */}
                <button onClick={toggleMute} className="text-white hover:text-[#86BC42] transition-colors">
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>
              
              <span className="text-white text-[10px] font-bold tracking-widest uppercase">
                {isMuted ? 'Muted' : 'Audio On'}
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ServiceSection;