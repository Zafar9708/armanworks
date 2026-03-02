import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

/* ─── Google Font injection ───────────────────────────────────────────────── */
const FontStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:wght@300;400;600&family=Share+Tech+Mono&display=swap');

    .font-bebas   { font-family: 'Bebas Neue', sans-serif; }
    .font-cormo   { font-family: 'Cormorant Garamond', serif; }
    .font-mono-st { font-family: 'Share Tech Mono', monospace; }

    @keyframes scanline {
      0%   { transform: translateY(-100%); }
      100% { transform: translateY(100vh); }
    }
    @keyframes flicker {
      0%,19%,21%,23%,25%,54%,56%,100% { opacity: 1; }
      20%,24%,55% { opacity: 0.4; }
    }
    @keyframes gridPulse {
      0%,100% { opacity: 0.04; }
      50%      { opacity: 0.09; }
    }
    @keyframes sparks {
      0%   { transform: translateY(0) translateX(0) scale(1); opacity: 1; }
      100% { transform: translateY(-120px) translateX(var(--dx)) scale(0); opacity: 0; }
    }
    @keyframes rotateSlow {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }
    @keyframes counterSlow {
      from { transform: rotate(360deg); }
      to   { transform: rotate(0deg); }
    }

    .scanline {
      position: absolute; inset: 0; pointer-events: none; z-index: 20; overflow: hidden;
    }
    .scanline::after {
      content: '';
      position: absolute; left: 0; right: 0; height: 3px;
      background: linear-gradient(transparent, rgba(212,175,55,0.15), transparent);
      animation: scanline 4s linear infinite;
    }
    .flicker { animation: flicker 5s infinite; }
    .grid-bg {
      background-image:
        linear-gradient(rgba(212,175,55,0.07) 1px, transparent 1px),
        linear-gradient(to right, rgba(212,175,55,0.07) 1px, transparent 1px);
      background-size: 60px 60px;
      animation: gridPulse 4s ease-in-out infinite;
    }
    .ring-spin  { animation: rotateSlow 12s linear infinite; }
    .ring-counter { animation: counterSlow 8s linear infinite; }
  `}</style>
);

/* ─── Floating particle ───────────────────────────────────────────────────── */
const Particle = ({ delay, x, size }) => (
  <motion.div
    initial={{ opacity: 0, y: 0, x: 0, scale: 1 }}
    animate={{ opacity: [0, 1, 0], y: -140, x: x, scale: [1, 0.5, 0] }}
    transition={{ delay, duration: 2.5 + Math.random() * 2, repeat: Infinity, repeatDelay: Math.random() * 3 }}
    style={{
      position: 'absolute', bottom: 0,
      width: size, height: size,
      borderRadius: '50%',
      background: `radial-gradient(circle, #D4AF37, #92710d)`,
      filter: 'blur(1px)',
    }}
  />
);

/* ─── Odometer digit ──────────────────────────────────────────────────────── */
const OdometerDigit = ({ value }) => (
  <div style={{ overflow: 'hidden', height: '1em', display: 'inline-block' }}>
    <motion.div
      animate={{ y: `-${value * 10}%` }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {[0,1,2,3,4,5,6,7,8,9].map(d => (
        <span key={d} style={{ height: '1em', display: 'block', lineHeight: '1em' }}>{d}</span>
      ))}
    </motion.div>
  </div>
);

/* ─── Main component ──────────────────────────────────────────────────────── */
const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('reveal');     // reveal → type → done
  const [displayText, setDisplayText] = useState('');
  const [progress, setProgress] = useState(0);
  const fullText = 'ARMAN ENGINEERING WORKS';

  /* Logo reveal → typing */
  useEffect(() => {
    if (phase !== 'reveal') return;
    const t = setTimeout(() => setPhase('type'), 500);
    return () => clearTimeout(t);
  }, [phase]);

  /* Typing */
  useEffect(() => {
    if (phase !== 'type') return;
    let idx = 0;
    const iv = setInterval(() => {
      if (idx < fullText.length) {
        setDisplayText(fullText.slice(0, idx + 1));
        setProgress(Math.round(((idx + 1) / fullText.length) * 100));
        idx++;
      } else {
        clearInterval(iv);
        setTimeout(() => { setPhase('done'); setTimeout(onComplete, 600); }, 600);
      }
    }, 65);
    return () => clearInterval(iv);
  }, [phase]);

  const particles = Array.from({ length: 18 }, (_, i) => ({
    delay: i * 0.18,
    x: (Math.random() - 0.5) * 120,
    size: 2 + Math.random() * 3,
  }));

  return (
    <>
      <FontStyle />
      <div
        style={{
          minHeight: '100vh', background: '#080808',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
        }}
      >
        {/* Scanline overlay */}
        <div className="scanline" />

        {/* Grid */}
        <div className="grid-bg" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />

        {/* Radial vignette */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, #080808 100%)',
        }} />

        {/* Corner brackets */}
        {[
          { top: 24, left: 24, rotate: 0 },
          { top: 24, right: 24, rotate: 90 },
          { bottom: 24, right: 24, rotate: 180 },
          { bottom: 24, left: 24, rotate: 270 },
        ].map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
            style={{
              position: 'absolute', ...pos,
              width: 40, height: 40,
              borderTop: '2px solid rgba(212,175,55,0.5)',
              borderLeft: '2px solid rgba(212,175,55,0.5)',
              transform: `rotate(${pos.rotate}deg)`,
              pointerEvents: 'none',
            }}
          />
        ))}



        {/* ── REVEAL PHASE ── */}
        <AnimatePresence>
          {phase === 'reveal' && (
            <motion.div
              key="reveal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: 'center', zIndex: 10, position: 'relative' }}
            >
              {/* Spinning rings */}
              <div style={{ position: 'relative', width: 220, height: 220, margin: '0 auto' }}>
                {/* Outer ring */}
                <div className="ring-spin" style={{
                  position: 'absolute', inset: 0,
                  borderRadius: '50%',
                  border: '1px solid rgba(212,175,55,0.3)',
                  borderTopColor: '#D4AF37',
                }} />
                {/* Mid ring */}
                <div className="ring-counter" style={{
                  position: 'absolute', inset: 16,
                  borderRadius: '50%',
                  border: '1px solid rgba(212,175,55,0.15)',
                  borderBottomColor: 'rgba(212,175,55,0.6)',
                }} />
                {/* Inner dashed */}
                <div style={{
                  position: 'absolute', inset: 32,
                  borderRadius: '50%',
                  border: '1px dashed rgba(212,175,55,0.2)',
                }} />

                {/* Logo */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  style={{
                    position: 'absolute', inset: 48,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(212,175,55,0.1), transparent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <img src="/logo.png" alt="Logo" style={{ width: '75%', height: '75%', objectFit: 'contain' }} />
                </motion.div>

                {/* Tick marks around ring */}
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} style={{
                    position: 'absolute', top: '50%', left: '50%',
                    width: i % 6 === 0 ? 10 : 5,
                    height: 1,
                    background: i % 6 === 0 ? '#D4AF37' : 'rgba(212,175,55,0.3)',
                    transformOrigin: '-108px 0',
                    transform: `rotate(${i * 15}deg) translateX(-108px)`,
                  }} />
                ))}
              </div>

              {/* Gold glow under logo */}
              <div style={{
                position: 'absolute', top: '60%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 200, height: 200,
                background: 'radial-gradient(circle, rgba(212,175,55,0.15), transparent 70%)',
                borderRadius: '50%', pointerEvents: 'none',
              }} />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                style={{ marginTop: 24 }}
              >
                <div className="font-bebas flicker" style={{
                  color: '#D4AF37', fontSize: 'clamp(28px, 6vw, 48px)',
                  letterSpacing: '0.4em',
                }}>
                  ARMAN ENGINEERING
                </div>
                <div className="font-cormo" style={{
                  color: 'rgba(255,255,255,0.35)',
                  fontSize: 11, letterSpacing: '0.5em',
                  textTransform: 'uppercase', marginTop: 4,
                }}>
                  Precision · Industrial · Excellence
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── TYPE PHASE ── */}
        <AnimatePresence>
          {(phase === 'type' || phase === 'done') && (
            <motion.div
              key="type"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: 'center', zIndex: 10, padding: '0 24px', maxWidth: 720, width: '100%' }}
            >
              {/* Small logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ width: 72, height: 72, margin: '0 auto 28px' }}
              >
                <img src="/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </motion.div>

              {/* Main title */}
              <div style={{ position: 'relative', marginBottom: 8 }}>
                <div className="font-bebas" style={{
                  fontSize: 'clamp(36px, 8vw, 88px)',
                  lineHeight: 0.9,
                  letterSpacing: '0.06em',
                  background: 'linear-gradient(180deg, #ffffff 0%, #c8a951 60%, #8a6a1a 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                    style={{
                      display: 'inline-block',
                      width: 4, height: '0.75em',
                      background: '#D4AF37',
                      verticalAlign: 'middle',
                      marginLeft: 4,
                      WebkitTextFillColor: '#D4AF37',
                    }}
                  />
                </div>
              </div>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: displayText.length > 5 ? 1 : 0 }}
                className="font-cormo"
                style={{
                  color: 'rgba(212,175,55,0.5)',
                  fontSize: 'clamp(12px, 2vw, 16px)',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  marginBottom: 40,
                }}
              >
                Since 2010 · Crafting Industrial Solutions
              </motion.div>

              {/* Progress bar */}
              <div style={{ width: 'min(400px, 90%)', margin: '0 auto' }}>


                {/* Track */}
                <div style={{
                  height: 2, background: 'rgba(255,255,255,0.06)',
                  borderRadius: 2, overflow: 'visible', position: 'relative',
                }}>
                  <motion.div
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.2 }}
                    style={{
                      height: '100%',
                      background: 'linear-gradient(90deg, #5a3e0a, #D4AF37)',
                      borderRadius: 2,
                      position: 'relative',
                    }}
                  >
                    {/* Glowing tip */}
                    <div style={{
                      position: 'absolute', right: -1, top: '50%',
                      transform: 'translateY(-50%)',
                      width: 6, height: 6, borderRadius: '50%',
                      background: '#D4AF37',
                      boxShadow: '0 0 8px 3px rgba(212,175,55,0.6)',
                    }} />
                  </motion.div>

                  {/* Segment ticks */}
                  {[25, 50, 75].map(pct => (
                    <div key={pct} style={{
                      position: 'absolute', top: -3,
                      left: `${pct}%`, width: 1, height: 8,
                      background: 'rgba(212,175,55,0.25)',
                    }} />
                  ))}
                </div>


              </div>

              {/* Particles above progress */}
              <div style={{ position: 'relative', height: 0 }}>
                {progress > 60 && particles.map((p, i) => (
                  <div key={i} style={{ position: 'absolute', bottom: 0, left: `${30 + Math.random() * 40}%` }}>
                    <Particle {...p} />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.8 }}
          className="font-mono-st"
          style={{
            position: 'absolute', bottom: 20,
            color: 'rgba(212,175,55,0.4)', fontSize: 8,
            letterSpacing: '0.4em', textTransform: 'uppercase',
          }}
        >
          PRECISION ENGINEERING · INDUSTRIAL EXCELLENCE · EST. 2010
        </motion.div>

        {/* Side ruler marks */}
        {[20, 35, 50, 65, 80].map((pct) => (
          <div key={pct} style={{
            position: 'absolute', left: 12,
            top: `${pct}%`, display: 'flex', alignItems: 'center', gap: 4,
          }}>
            <div style={{ width: 16, height: 1, background: 'rgba(212,175,55,0.2)' }} />
            <span className="font-mono-st" style={{ color: 'rgba(212,175,55,0.15)', fontSize: 7 }}>
              {pct}
            </span>
          </div>
        ))}
        {[20, 35, 50, 65, 80].map((pct) => (
          <div key={pct} style={{
            position: 'absolute', right: 12,
            top: `${pct}%`, display: 'flex', alignItems: 'center', gap: 4,
          }}>
            <span className="font-mono-st" style={{ color: 'rgba(212,175,55,0.15)', fontSize: 7 }}>
              {pct}
            </span>
            <div style={{ width: 16, height: 1, background: 'rgba(212,175,55,0.2)' }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SplashScreen;