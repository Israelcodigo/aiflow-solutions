import React, { useEffect, useRef, useState } from 'react';
import { LightbulbIcon, RobotIcon, BoltIcon, LinkIcon, DocumentTextIcon, AcademicCapIcon, CheckCircleIcon, ShoppingCartIcon } from './icons/Icons';
import ServiceModal from './ServiceModal';
import ShoppingCart, { CartItem } from './ShoppingCart';

// Datos de servicios normalizados con formato de precios consistente
const servicesData = [
    {
        id: "consultoria-ia",
        icon: <LightbulbIcon />,
        title: "Consultoría IA",
        description: "Auditoría técnica de 2 horas para identificar casos de uso prioritarios, estimar impacto y definir un roadmap accionable.",
        price: "150 € por sesión",
        priceNumeric: 150,
        details: [
            "Análisis profundo de flujos de trabajo.",
            "Hoja de ruta de implementación personalizada.",
            "Estimación de ROI y métricas de éxito.",
            "Recomendación de herramientas y plataformas."
        ]
    },
    {
        id: "gpts-personalizados",
        icon: <RobotIcon />,
        title: "GPTs Personalizados",
        description: "Asistentes de IA diseñados para tu operación: atención al cliente, soporte interno, creación de contenido y analítica.",
        price: "149 € por GPT",
        priceNumeric: 149,
        details: [
            "Basado en tus documentos y base de conocimientos.",
            "Integración con tus sistemas existentes.",
            "Optimizado para tareas específicas: ventas, soporte, etc.",
            "Entrega con panel de control y analíticas de uso."
        ]
    },
    {
        id: "automatizaciones",
        icon: <BoltIcon />,
        title: "Automatizaciones",
        description: "Orquestamos flujos entre email, CRM, ERP y hojas de cálculo para eliminar tareas repetitivas, reducir errores y acelerar ciclos.",
        price: "Desde 349 €/mes",
        priceNumeric: 349,
        details: [
            "Automatización de entrada de datos y reportes.",
            "Clasificación y respuesta automática de correos.",
            "Sincronización de datos entre plataformas.",
            "Workflows personalizados con herramientas como Zapier o Make."
        ]
    },
    {
        id: "integracion-mcp",
        icon: <LinkIcon />,
        title: "Integración MCP",
        description: "Conecta ChatGPT o Claude con Slack, Google Drive y más mediante Model Context Protocol (MCP) para contexto en tiempo real.",
        price: "299 € instalación",
        priceNumeric: 299,
        details: [
            "Consultas directas a la IA desde Slack.",
            "Resumen y análisis de documentos en Google Drive.",
            "Generación de contenido directamente en tus apps.",
            "Configuración de seguridad y permisos de acceso."
        ]
    },
    {
        id: "pack-prompts-pro",
        icon: <DocumentTextIcon />,
        title: "Pack Prompts Pro",
        description: "Kits de prompts por sector con guías y ejemplos listos para uso profesional.",
        price: "99 € por pack",
        priceNumeric: 99,
        details: [
            "Prompts para marketing, ventas, RRHH y operaciones.",
            "Guía de 'prompt engineering' para crear los tuyos.",
            "Adaptados a los modelos más recientes (GPT-4, Claude 3).",
            "Actualizaciones periódicas con nuevas técnicas."
        ]
    },
    {
        id: "formacion",
        icon: <AcademicCapIcon />,
        title: "Formación",
        description: "Programas de capacitación práctica en ChatGPT, Claude y otras IAs. Itinerarios por nivel y sector.",
        price: "Desde 89 €/hora",
        priceNumeric: 89,
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
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (service: typeof servicesData[0]) => {
        const existingItem = cartItems.find(item => item.id === service.id);
        
        if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.id === service.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            const newItem: CartItem = {
                id: service.id,
                title: service.title,
                price: service.price,
                priceNumeric: service.priceNumeric,
                quantity: 1
            };
            setCartItems([...cartItems, newItem]);
        }
        
        setIsCartOpen(true);
    };

    const updateQuantity = (id: string, quantity: number) => {
        if (quantity === 0) {
            setCartItems(cartItems.filter(item => item.id !== id));
        } else {
            setCartItems(cartItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            ));
        }
    };

    const removeItem = (id: string) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    useEffect(() => {
        const currentRef = gridRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px'
            }
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
        if (activeService || isCartOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [activeService, isCartOpen]);

    return (
        <>
            {/* Cart Button - Fixed Position */}
            <button
                onClick={() => setIsCartOpen(true)}
                className="fixed top-24 right-6 z-30 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 hover:shadow-cyan-500/30"
            >
                <ShoppingCartIcon className="w-6 h-6" />
                {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                        {cartItemsCount}
                    </span>
                )}
            </button>

            <section 
                id="servicios" 
                className={`py-20 md:py-32 transition-all duration-500 ${(activeService || isCartOpen) ? 'blur-sm scale-95 pointer-events-none' : ''}`}
                aria-labelledby="servicios-heading"
            >
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <header className="text-center mb-16">
                        <h2 
                            id="servicios-heading"
                            className="text-4xl md:text-5xl font-semibold mb-6 text-white [text-shadow:0_0_20px_theme(colors.cyan.400/0.5)]"
                        >
                            Nuestros Servicios Interactivos
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto leading-relaxed text-slate-400">
                            Soluciones de IA diseñadas para impulsar la productividad de tu negocio. 
                            Desde consultoría estratégica hasta automatizaciones completamente personalizadas.
                        </p>
                    </header>

                    {/* Services Grid */}
                    <div 
                        ref={gridRef} 
                        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr"
                        role="region"
                        aria-label="Lista de servicios disponibles"
                    >
                        {servicesData.map((service, index) => (
                            <article
                                key={service.id}
                                className={`service-card bg-[#111a2e] border border-slate-700/60 rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                                tabIndex={0}
                                role="article"
                                aria-labelledby={`service-${service.id}-title`}
                            >
                                {/* Card Content */}
                                <div className="p-8 flex-grow flex flex-col">
                                    {/* Icon */}
                                    <div className="service-icon text-cyan-400 mb-6 flex-shrink-0">
                                        {React.cloneElement(service.icon, { 
                                            className: "w-12 h-12",
                                            'aria-hidden': 'true'
                                        })}
                                    </div>

                                    {/* Title */}
                                    <h3 
                                        id={`service-${service.id}-title`}
                                        className="text-xl font-semibold text-white mb-4 min-h-[3.5rem] flex items-center"
                                    >
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm text-slate-300 mb-6 leading-relaxed flex-grow">
                                        {service.description}
                                    </p>

                                    {/* Price */}
                                    <div className="mb-6">
                                        <p 
                                            className="text-base font-bold text-cyan-400"
                                            aria-label={`Precio: ${service.price}`}
                                        >
                                            {service.price}
                                        </p>
                                    </div>
                                </div>

                                {/* Actions Footer */}
                                <footer className="border-t border-slate-700/50 bg-slate-800/20 p-6 space-y-3">
                                    <button 
                                        onClick={() => addToCart(service)}
                                        className="service-cta-primary w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#111a2e]"
                                        aria-label={`Añadir ${service.title} al carrito`}
                                    >
                                        Comprar ahora
                                    </button>
                                    
                                    <button 
                                        onClick={() => setActiveService(service)}
                                        className="service-cta-secondary w-full text-sm font-medium text-cyan-400 flex items-center justify-center gap-2 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#111a2e] rounded-lg"
                                        aria-label={`Ver detalles completos de ${service.title}`}
                                    >
                                        <span>Ver detalles</span>
                                        <svg 
                                            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </footer>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            
            <ServiceModal 
                service={activeService}
                onClose={() => setActiveService(null)}
            />
            
            <ShoppingCart
                isOpen={isCartOpen}
                items={cartItems}
                onClose={() => setIsCartOpen(false)}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
            />
        </>
    );
};

export default Services;