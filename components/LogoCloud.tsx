
import React, { useState } from 'react';

const LogoCloud: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const logos = [
    { 
      src: '/images/chatgpt.png',
      fallback: '/images/chatgpt-optimized.svg',
      name: 'ChatGPT', 
      alt: 'Logo de ChatGPT - Inteligencia Artificial conversacional de OpenAI'
    },
    { 
      src: '/images/claude.png',
      fallback: '/images/claude-optimized.svg',
      name: 'Claude', 
      alt: 'Logo de Claude - Asistente de IA de Anthropic'
    },
    { 
      src: '/images/gemini-optimized.svg', // Use optimized SVG directly for Gemini
      fallback: '/images/gemini-optimized.svg',
      name: 'Gemini', 
      alt: 'Logo de Gemini - IA multimodal de Google'
    },
  ];

  const handleImageError = (logoName: string) => {
    setImageErrors(prev => new Set(prev).add(logoName));
  };

  return (
    <div className="w-full max-w-md flex justify-around items-center gap-8 py-8" role="img" aria-label="Logos de plataformas de inteligencia artificial soportadas">
      {logos.map((logo, index) => (
        <div
          key={logo.name}
          className="opacity-0 animate-fade-in-up group flex flex-col items-center gap-3"
          style={{ animationDelay: `${1 + index * 0.2}s`, animationFillMode: 'forwards' }}
          title={logo.name}
        >
          <div className="relative p-6 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-600/50 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/50 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 flex items-center justify-center logo-contrast-bg">
            <img 
              src={imageErrors.has(logo.name) ? logo.fallback : logo.src}
              alt={logo.alt}
              className="h-12 w-12 md:h-14 md:w-14 object-contain filter drop-shadow-lg"
              loading="lazy"
              decoding="async"
              width="56"
              height="56"
              onError={() => handleImageError(logo.name)}
            />
            {/* Subtle glow effect for better visibility */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-200 transition-colors duration-300 drop-shadow-sm">
            {logo.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LogoCloud;