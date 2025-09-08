import React, { useState } from 'react';

const LogoCloud: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const logos = [
    {
      alt: 'Logo de ChatGPT - Inteligencia Artificial conversacional de OpenAI',
      fallback: '/images/chatgpt-optimized.svg',
      name: 'ChatGPT',
      src: '/images/chatgpt.png',
    },
    {
      alt: 'Logo de Claude - Asistente de IA de Anthropic',
      fallback: '/images/claude-optimized.svg',
      name: 'Claude',
      src: '/images/claude.png',
    },
    {
      alt: 'Logo de Gemini - IA multimodal de Google',
      fallback: '/images/gemini-optimized.svg',
      name: 'Gemini',
      src: '/images/gemini.png', // Use real Gemini logo PNG
    },
  ];

  const handleImageError = (logoName: string) => {
    setImageErrors((prev) => new Set(prev).add(logoName));
  };

  return (
    <div
      className="w-full max-w-2xl flex justify-around items-center gap-16 py-8"
      role="img"
      aria-label="Logos de plataformas de inteligencia artificial soportadas"
    >
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
              className={`object-contain filter drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl group-hover:brightness-110 ${
                logo.name === 'ChatGPT' || logo.name === 'Claude'
                  ? 'h-28 w-28 md:h-36 md:w-36'
                  : 'h-24 w-24 md:h-32 md:w-32'
              }`}
              loading="lazy"
              decoding="async"
              width={logo.name === 'ChatGPT' || logo.name === 'Claude' ? '144' : '128'}
              height={logo.name === 'ChatGPT' || logo.name === 'Claude' ? '144' : '128'}
              onError={() => handleImageError(logo.name)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogoCloud;
