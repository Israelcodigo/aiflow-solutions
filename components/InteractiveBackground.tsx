
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
      {/* Multi-layered Artistic Background */}
      <div className="absolute inset-0">
        {/* Base gradient with improved colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        
        {/* Radial gradients for depth */}
        <div className="absolute inset-0 bg-gradient-radial from-cyan-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-conic from-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
        
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
        
        {/* Glassmorphism overlay for logo area */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10"></div>
      </div>

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