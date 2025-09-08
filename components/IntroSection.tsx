import React, { useState, useEffect, useRef } from 'react';

const FlowLineIcon = () => (
  <svg
    width="100%"
    height="100"
    viewBox="0 0 1200 100"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute bottom-0 left-0 w-full h-auto -z-10"
  >
    <defs>
      <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#0a0e27', stopOpacity: 0 }} />
        <stop offset="50%" style={{ stopColor: '#00d4ff', stopOpacity: 0.3 }} />
        <stop offset="100%" style={{ stopColor: '#0a0e27', stopOpacity: 0 }} />
      </linearGradient>
    </defs>
    <path
      d="M0 50 Q 300 0, 600 50 T 1200 50"
      stroke="url(#flowGradient)"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M0 60 Q 300 20, 600 60 T 1200 60"
      stroke="url(#flowGradient)"
      strokeWidth="1"
      strokeOpacity="0.5"
      fill="none"
    />
  </svg>
);

const IntroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="intro" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            De la Idea a la Implementación, <span className="text-cyan-400">sin Fricción.</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Tu socio estratégico en la era de la IA, para empresas y profesionales.
          </p>
        </div>
        <div
          className={`transition-all duration-1000 ease-out delay-300 mt-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-lg text-slate-400 max-w-4xl mx-auto leading-relaxed">
            En Deified Machines, convertimos la IA en un activo operativo. Diseñamos e integramos
            soluciones a medida que se alinean con tus procesos, fortalecen a tu equipo y entregan
            resultados medibles. Nuestro compromiso: tecnología avanzada aplicada de forma práctica,
            segura y eficiente.
          </p>
        </div>
      </div>
      <FlowLineIcon />
    </section>
  );
};

export default IntroSection;
