
import React, { useState, useEffect, useRef } from 'react';

const processSteps = [
  { number: "1", title: "Análisis", description: "Estudiamos tu empresa y procesos actuales para identificar puntos clave de mejora." },
  { number: "2", title: "Implementación", description: "Configuramos y personalizamos las herramientas IA seleccionadas para tu flujo de trabajo." },
  { number: "3", title: "Formación", description: "Capacitamos a tu equipo con sesiones prácticas para que dominen las nuevas herramientas." },
  { number: "4", title: "Soporte", description: "Te acompañamos durante 30 días para resolver dudas y asegurar una transición exitosa." },
];

const ProcessStep: React.FC<typeof processSteps[0]> = ({ number, title, description }) => (
    <div className="text-center relative group transition-all duration-300 hover:scale-105">
        <div className="relative inline-block">
            <div className="text-6xl font-bold text-cyan-400 mb-4 transition-transform duration-300 group-hover:scale-110">{number}</div>
            <div className="absolute -top-2 -right-2 w-10 h-10 bg-cyan-400/20 rounded-full blur-md -z-10 transition-all duration-300 group-hover:bg-cyan-400/30 group-hover:scale-125"></div>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-base text-slate-400 leading-relaxed">{description}</p>
    </div>
);

const Process: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = gridRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
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
    <section id="proceso" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-white [text-shadow:0_0_20px_theme(colors.cyan.400/0.5)]">Nuestro Proceso Simplificado</h2>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
                <ProcessStep {...step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;