import React from 'react';
import { motion } from 'framer-motion';

const AmranClientMarquee = () => {
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

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="bg-white py-20 overflow-hidden border-t border-b border-slate-100">
      
      {/* SECTION TITLE */}
      <div className="max-w-[1440px] mx-auto px-12 mb-16 text-center">
        <span className="text-[10px] font-black tracking-[0.6em] text-slate-400 uppercase">
          STRATEGIC PARTNERSHIPS
        </span>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* THE INFINITE TRACK */}
        <motion.div
          className="flex items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 45, // Active but professional speed
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              /* w-1/6 ensures exactly 6 logos per row on desktop */
              className="flex-shrink-0 w-1/2 md:w-1/3 lg:w-1/6 flex items-center justify-center px-10"
            >
              <div className="group relative w-full h-24 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.name}
                  /* Removed Grayscale and Low Opacity - Now Full Color */
                  className="max-h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* SOFT EDGE FADES - Keeps the transition smooth */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      </div>

      <div className="max-w-[1440px] mx-auto px-12 mt-12 flex justify-center">
        <div className="h-[1px] w-24 bg-slate-100" />
      </div>
    </div>
  );
};

export default AmranClientMarquee;