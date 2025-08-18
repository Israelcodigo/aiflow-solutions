
import React, { useEffect, useState } from 'react';

const InteractiveBackground: React.FC = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReduceMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const particles = Array.from({ length: reduceMotion ? 20 : 60 });

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-20 overflow-hidden" aria-hidden="true">
      {/* UNIFIED BACKGROUND - NO SEAMS */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #0a0f1f 0%, #0d1a2e 35%, #0a1c3c 70%, #0a0f1f 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        backgroundPosition: '0 0'
      }}>
        {/* Subtle asymmetric glow overlay */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse 1000px 600px at 30% 20%, rgba(34, 211, 238, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 1200px 800px at 70% 80%, rgba(59, 130, 246, 0.04) 0%, transparent 70%)
          `,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        }}></div>
        
        {/* Organic blob shapes */}
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter id="gooey">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="gooey" />
            </filter>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.3)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
            </linearGradient>
            <radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.25)" />
              <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
            </radialGradient>
          </defs>
          
          {/* Animated blob 1 */}
          <ellipse
            cx="20" cy="30" rx="15" ry="10"
            fill="url(#gradient1)"
            filter="url(#gooey)"
            className={reduceMotion ? '' : 'animate-pulse'}
            style={{
              animationDuration: '4s',
              transformOrigin: 'center',
            }}
          />
          
          {/* Animated blob 2 */}
          <ellipse
            cx="80" cy="70" rx="12" ry="18"
            fill="url(#gradient2)"
            filter="url(#gooey)"
            className={reduceMotion ? '' : 'animate-pulse'}
            style={{
              animationDuration: '6s',
              animationDelay: '2s',
              transformOrigin: 'center',
            }}
          />
          
          {/* Static decorative shapes for reduced motion */}
          <circle cx="60" cy="20" r="8" fill="rgba(6, 182, 212, 0.1)" />
          <circle cx="30" cy="80" r="6" fill="rgba(59, 130, 246, 0.15)" />
        </svg>
      </div>

      {/* Anti-banding noise layer */}
      <div className="absolute inset-0 pointer-events-none" style={{
        opacity: 0.03,
        mixBlendMode: 'overlay',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px'
      }}></div>

      {/* Optimized sparkle particles */}
      {!reduceMotion && particles.map((_, i) => {
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 3 + 3; // Reduced range for better performance
        const delay = Math.random() * 5;
        const top = Math.random() * 100;
        const left = Math.random() * 100;

        return (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-300/60 animate-sparkle will-change-transform"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              boxShadow: `0 0 ${size * 3}px 1px hsla(185, 100%, 60%, 0.4)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default InteractiveBackground;