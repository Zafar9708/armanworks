import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [showLogo, setShowLogo] = useState(true);
  const fullText = 'Arman Engineering Works';
  
  useEffect(() => {
    // Show logo for 1 second
    const logoTimeout = setTimeout(() => {
      setShowLogo(false);
      
      // Start typing animation
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setDisplayText(fullText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(typingInterval);
          // Wait 1 second after typing completes then navigate
          setTimeout(() => {
            onComplete();
          }, 1000);
        }
      }, 120);
      
      return () => clearInterval(typingInterval);
    }, 1000);
    
    return () => clearTimeout(logoTimeout);
  }, [onComplete, fullText]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      
      {/* Subtle Blueprint Grid (Optional, keep for professional look) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {showLogo ? (
        // Logo Animation - Background removed from container
        <div className="text-center z-10">
          <div className="relative animate-float">
            <div className="w-44 h-44 flex items-center justify-center mx-auto transition-transform duration-500">
              <img 
                src="/logo.png" 
                alt="Arman Engineering Works Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="mt-8 text-slate-900 text-xl md:text-2xl font-black tracking-[0.5em] animate-fade-in uppercase">
            ARMAN ENGINEERING
          </div>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-[#FAF1E6] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[#FAF1E6] rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 bg-[#FAF1E6] rounded-full animate-bounce [animation-delay:0.4s]"></div>
          </div>
        </div>
      ) : (
        // Typing Animation
        <div className="text-center z-10">
          <div className="relative animate-scale-in">
            <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mx-auto mb-8">
              <img 
                src="/logo.png" 
                alt="Arman Engineering Works Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter uppercase">
              {displayText}
              <span className="inline-block w-1 h-8 md:h-12 ml-1 bg-[#FAF1E6] animate-pulse">
                |
              </span>
            </h1>
            
            <div className="text-slate-400 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              {displayText.length === fullText.length ? (
                <span className="inline-flex items-center gap-2 animate-fade-in text-slate-900">
                  READY TO OPERATE
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FAF1E6] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FAF1E6]"></span>
                  </span>
                </span>
              ) : (
                <span className="flex items-center justify-center gap-1">
                  CALIBRATING SYSTEMS...
                </span>
              )}
            </div>

            {/* Professional Progress bar */}
            <div className="w-64 md:w-80 h-1 bg-slate-100 mx-auto mt-8 overflow-hidden">
              <div 
                className="h-full bg-slate-900 transition-all duration-300"
                style={{ width: `${(displayText.length / fullText.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplashScreen;