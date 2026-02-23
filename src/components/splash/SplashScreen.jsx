import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [showLogo, setShowLogo] = useState(true);
  const [progress, setProgress] = useState(0);
  const fullText = 'Arman Engineering Works';
  
  useEffect(() => {
    // Faster logo display (0.5s instead of 1s)
    const logoTimeout = setTimeout(() => {
      setShowLogo(false);
      
      // Faster typing animation (80ms instead of 120ms)
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayText(fullText.substring(0, index + 1));
          setProgress(((index + 1) / fullText.length) * 100);
          index++;
        } else {
          clearInterval(typingInterval);
          // Shorter delay after typing (500ms instead of 1000ms)
          setTimeout(() => {
            onComplete();
          }, 500);
        }
      }, 80); // Faster typing speed
      
      return () => clearInterval(typingInterval);
    }, 700); 
    
    return () => clearTimeout(logoTimeout);
  }, [onComplete, fullText]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col items-center justify-center relative overflow-hidden font-sans">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric shapes */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-slate-900 rounded-full blur-3xl"
        />
        
        {/* Industrial grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{ 
               backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }} 
        />
      </div>

      <AnimatePresence mode="wait">
        {showLogo ? (
          // Logo Animation - Faster entrance
          <motion.div
            key="logo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
            className="text-center z-10"
          >
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="relative"
            >
              {/* Premium glow effect */}
              <div className="absolute inset-0 bg-[#D4AF37] blur-2xl opacity-20 rounded-full" />
              
              <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center mx-auto relative">
                <img 
                  src="/logo.png" 
                  alt="Arman Engineering Works Logo" 
                  className="w-full h-full object-contain relative z-10"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 space-y-2"
            >
              <h2 className="text-slate-900 text-2xl md:text-3xl font-black tracking-[0.3em] uppercase">
                ARMAN ENGINEERING
              </h2>
              <p className="text-[#D4AF37] text-xs font-bold tracking-[0.5em] uppercase">
                SINCE 2010
              </p>
            </motion.div>

            {/* Loading dots - Faster animation */}
            <div className="mt-8 flex justify-center space-x-3">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-2 h-2 bg-[#D4AF37] rounded-full"
                />
              ))}
            </div>
          </motion.div>
        ) : (
          // Typing Animation - Faster
          <motion.div
            key="typing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center z-10 max-w-4xl px-6"
          >
            {/* Small logo */}
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6"
            >
              <img 
                src="/logo.png" 
                alt="Arman Engineering Works Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            
            <div className="space-y-6">
              {/* Main title with gold accent */}
              <div className="relative">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
                  {displayText.split(' ').map((word, i) => (
                    <span key={i} className="inline-block mx-1">
                      {word}
                      {i === 1 && <span className="text-[#D4AF37]"> Works</span>}
                    </span>
                  ))}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-1 h-8 md:h-12 ml-1 bg-[#D4AF37]"
                  />
                </h1>
              </div>
              
              {/* Status message */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase"
              >
                {displayText.length === fullText.length ? (
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37]/10 to-transparent px-4 py-2 rounded-full"
                  >
                    <span className="text-slate-900">SYSTEM READY</span>
                    <span className="relative flex h-2 w-2">
                      <motion.span
                        animate={{ scale: [1, 2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"
                      />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]" />
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="text-slate-400">INITIALIZING</span>
                    <span className="text-[#D4AF37]">✦</span>
                  </motion.div>
                )}
              </motion.div>

              {/* Premium Progress Bar */}
              <div className="w-64 md:w-96 mx-auto mt-8">
                <div className="flex justify-between text-[8px] font-bold text-slate-400 mb-2 px-1">
                  <span>SYSTEM CHECK</span>
                  <span className="text-[#D4AF37]">{Math.round(progress)}%</span>
                </div>
                <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-slate-900 to-[#D4AF37]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                {/* Technical details */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-[6px] font-bold text-slate-400 uppercase tracking-wider">
                  <div className="text-left">v2.5.1</div>
                  <div className="text-center">ENGINEERING MODE</div>
                  <div className="text-right">64-bit</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 left-0 right-0 text-center"
      >
        <p className="text-[8px] md:text-[10px] text-slate-400 font-bold tracking-[0.3em] uppercase">
          PRECISION ENGINEERING • INDUSTRIAL EXCELLENCE
        </p>
      </motion.div>
    </div>
  );
};

export default SplashScreen;