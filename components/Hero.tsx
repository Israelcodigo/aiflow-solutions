
import React from 'react';
import { BoltIcon, LightbulbIcon, AcademicCapIcon } from './icons/Icons';
import LogoCloud from './LogoCloud';

const keyBenefits = [
  {
    icon: <BoltIcon className="w-6 h-6" />,
    text: 'Automatización Eficiente',
    delay: '1s'
  },
  {
    icon: <LightbulbIcon className="w-6 h-6" />,
    text: 'Decisiones Inteligentes',
    delay: '1.2s'
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6" />,
    text: 'Capacitación Experta',
    delay: '1.4s'
  }
];

const Hero: React.FC = () => {
    return (
        <section id="inicio" className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-12 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-12">
                    {/* Left Column: Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <div className="animate-fade-in-down">
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Multiplica tu Productividad con IA
                            </h1>
                        </div>
                        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
                            <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 mb-8">
                                Consultoría especializada en implementación de inteligencia artificial para empresas y particulares. Te enseñamos a usar ChatGPT, Claude y otras herramientas IA de forma profesional.
                            </p>
                            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
                                <a href="#contacto" className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transform transition-all duration-300">
                                    Consultoría 150€
                                </a>
                                <a href="#servicios" className="px-8 py-4 rounded-full font-bold text-cyan-400 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-[#0a0e27] transform transition-all duration-300">
                                    Ver Servicios
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Logos */}
                    <div className="flex-1 mt-16 lg:mt-0 flex justify-center items-center">
                       <LogoCloud />
                    </div>
                </div>
                
                {/* Key Benefits - Centered below */}
                <div className="mt-20 flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
                    {keyBenefits.map((benefit, index) => (
                        <div 
                            key={index} 
                            className="flex items-center gap-3 opacity-0 animate-fade-in-up"
                            style={{ animationDelay: benefit.delay, animationFillMode: 'forwards' }}
                        >
                            <div className="text-cyan-400 p-2 bg-cyan-400/10 rounded-full">
                                {React.cloneElement(benefit.icon, { className: 'w-6 h-6' })}
                            </div>
                            <span className="text-slate-200 font-medium">{benefit.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            <a href="#intro" aria-label="Scroll to next section" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <svg className="w-8 h-8 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                </svg>
            </a>
        </section>
    );
};

export default Hero;