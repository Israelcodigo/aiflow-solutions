
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
      src: '/images/gemini.png', // Use real Gemini logo PNG
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
          className="opacity-0 animate-fade-in-up group flex flex-col items-center"
          style={{ animationDelay: `${1 + index * 0.2}s`, animationFillMode: 'forwards' }}
          title={logo.name}
        >
          {/* Solo el logo, sin fondo de tarjeta */}
          <div className="relative flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1">
            <img 
              src={imageErrors.has(logo.name) ? logo.fallback : logo.src}
              alt={logo.alt}
              className="h-20 w-20 md:h-24 md:w-24 object-contain filter drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl group-hover:brightness-110"
              loading="lazy"
              decoding="async"
              width="96"
              height="96"
              onError={() => handleImageError(logo.name)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogoCloud;