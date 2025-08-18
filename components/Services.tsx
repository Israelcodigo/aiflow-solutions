
import React, { useEffect, useRef, useState } from 'react';
import { LightbulbIcon, RobotIcon, BoltIcon, LinkIcon, DocumentTextIcon, AcademicCapIcon, CheckCircleIcon } from './icons/Icons';
import ServiceModal from './ServiceModal';

const servicesData = [
    {
        icon: <LightbulbIcon />,
        title: "Consultoría IA",
        description: "Sesión de 2 horas donde analizamos tu empresa e identificamos oportunidades para implementar IA.",
        price: "150€ por sesión",
        details: [
            "Análisis profundo de flujos de trabajo.",
            "Hoja de ruta de implementación personalizada.",
            "Estimación de ROI y métricas de éxito.",
            "Recomendación de herramientas y plataformas."
        ]
    },
    {
        icon: <RobotIcon />,
        title: "GPTs Personalizados",
        description: "Creamos asistentes de IA especializados para tu empresa. Atención al cliente, generación de contenido, análisis de datos.",
        price: "149€ por GPT",
        details: [
            "Basado en tus documentos y base de conocimientos.",
            "Integración con tus sistemas existentes.",
            "Optimizado para tareas específicas: ventas, soporte, etc.",
            "Entrega con panel de control y analíticas de uso."
        ]
    },
    {
        icon: <BoltIcon />,
        title: "Automatizaciones",
        description: "Conectamos tus aplicaciones (email, CRM, Excel) para eliminar tareas repetitivas y ahorrarte horas cada día.",
        price: "Desde 349€/mes",
        details: [
            "Automatización de entrada de datos y reportes.",
            "Clasificación y respuesta automática de correos.",
            "Sincronización de datos entre plataformas.",
            "Workflows personalizados con herramientas como Zapier o Make."
        ]
    },
    {
        icon: <LinkIcon />,
        title: "Integración MCP",
        description: "Conectamos ChatGPT o Claude directamente con Slack, Google Drive y otras herramientas empresariales.",
        price: "299€ instalación",
        details: [
            "Consultas directas a la IA desde Slack.",
            "Resumen y análisis de documentos en Google Drive.",
            "Generación de contenido directamente en tus apps.",
            "Configuración de seguridad y permisos de acceso."
        ]
    },
    {
        icon: <DocumentTextIcon />,
        title: "Pack Prompts Pro",
        description: "Conjunto de prompts optimizados para tu sector. Multiplica la efectividad de cualquier IA.",
        price: "99€ por pack",
        details: [
            "Prompts para marketing, ventas, RRHH y operaciones.",
            "Guía de 'prompt engineering' para crear los tuyos.",
            "Adaptados a los modelos más recientes (GPT-4, Claude 3).",
            "Actualizaciones periódicas con nuevas técnicas."
        ]
    },
    {
        icon: <AcademicCapIcon />,
        title: "Formación",
        description: "Enseñamos a tu equipo a dominar ChatGPT, Claude y otras IAs. Formación práctica adaptada a vuestros procesos.",
        price: "Desde 89€/hora",
        details: [
            "Sesiones prácticas con casos de uso reales.",
            "Material didáctico y guías de referencia.",
            "Enfoque en seguridad y uso ético de la IA.",
            "Certificado de finalización para los asistentes."
        ]
    }
];

const Services: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeService, setActiveService] = useState<typeof servicesData[0] | null>(null);

    useEffect(() => {
        const currentRef = gridRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
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

    useEffect(() => {
        if (activeService) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [activeService]);

    return (
        <>
            <section id="servicios" className={`py-20 md:py-32 transition-all duration-500 ${activeService ? 'blur-sm scale-95 pointer-events-none' : ''}`}>
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white [text-shadow:0_0_20px_theme(colors.cyan.400/0.5)]">Nuestros Servicios Interactivos</h2>
                    <p className="text-lg text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                        Haz clic en cualquier servicio para descubrir todos los detalles y ver cómo podemos ayudarte.
                    </p>
                    <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                        {servicesData.map((service, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="glow-card h-full">
                                    <div className="relative z-10 bg-[#0f1334] rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 shadow-lg flex flex-col h-full">
                                        <div className="p-8 flex-grow">
                                            <div className="text-cyan-400 mb-4">{service.icon}</div>
                                            <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                            <p className="text-base text-slate-400 mb-4 leading-relaxed">{service.description}</p>
                                            <p className="text-cyan-400 font-semibold">{service.price}</p>
                                        </div>
                                        
                                        <div className="mt-auto border-t border-slate-700/50 px-8 py-4">
                                            <button 
                                                onClick={() => setActiveService(service)}
                                                className="text-sm font-semibold text-cyan-400 flex items-center justify-between w-full hover:text-white transition-colors"
                                            >
                                                <span>Leer más</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <ServiceModal 
                service={activeService}
                onClose={() => setActiveService(null)}
            />
        </>
    );
};

export default Services;