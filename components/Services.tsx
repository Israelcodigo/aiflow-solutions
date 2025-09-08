import React, { useEffect, useRef, useState } from 'react';

import {
  LightbulbIcon,
  RobotIcon,
  BoltIcon,
  LinkIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ShoppingCartIcon,
} from './icons/Icons';
import ServiceModal from './ServiceModal';
import ShoppingCart, { CartItem } from './ShoppingCart';
import { trackServiceInteraction } from '../src/utils/analytics';

// Datos de servicios normalizados con formato de precios consistente
const servicesData = [
  {
    description:
      'Identifica exactamente dónde tu empresa pierde tiempo en tareas manuales. Auditamos tus procesos actuales y te mostramos cómo automatizar hasta 20 horas semanales, aumentando productividad un 40%.',
    details: [
      'Análisis profundo de flujos de trabajo actuales.',
      'Hoja de ruta de implementación personalizada por prioridad.',
      'Estimación precisa de ROI y ahorro de tiempo.',
      'Metodología específica para medir el impacto obtenido.',
      'Recomendación de herramientas y plataformas optimizadas.',
    ],
    icon: <LightbulbIcon />,
    id: 'consultoria-ia',
    price: '150 € por sesión',
    priceNumeric: 150,
    title: 'Auditoría de Procesos Automatizables',
  },
  {
    description:
      'Reduce el tiempo de atención al cliente un 85% y aumenta conversiones un 25% con asistentes IA que conocen tu negocio. Responden consultas 24/7 con la misma calidad que tu equipo.',
    details: [
      'Entrenado con tus documentos, políticas y base de conocimientos.',
      'Integración directa con tu CRM, WhatsApp y sistemas existentes.',
      'Optimizado para ventas, soporte técnico, reservas o consultas.',
      'Dashboard para monitorear conversaciones y mejorar respuestas.',
    ],
    icon: <RobotIcon />,
    id: 'gpts-personalizados',
    price: '149 € por asistente',
    priceNumeric: 149,
    title: 'Asistente de IA para Atención al Cliente',
  },
  {
    description:
      'Elimina tareas repetitivas de facturación, seguimiento de leads y reporting mensual. Conectamos email, CRM y ERP para que todo funcione solo. Reduces errores un 90% y ahorras 30+ horas mensuales.',
    details: [
      'Automatización de facturación y seguimiento de pagos.',
      'Sync automático entre CRM, email y herramientas de gestión.',
      'Workflows personalizados para tu proceso de ventas específico.',
      'Dashboards en tiempo real para monitorear todo el proceso.',
      'Setup completo y mantenimiento incluido.',
    ],
    icon: <BoltIcon />,
    id: 'automatizaciones',
    price: 'Desde 349 €/mes',
    priceNumeric: 349,
    title: 'Automatización de Procesos Administrativos',
  },
  {
    description:
      'Tu equipo accede a IA desde Slack con contexto de todos tus documentos. Consulta contratos, analiza propuestas y genera reportes sin salir de tu workspace. Productividad instantánea.',
    details: [
      'Consultas directas a IA desde Slack con contexto completo.',
      'Análisis automático de documentos en Google Drive/SharePoint.',
      'Resúmenes de meetings, propuestas y contratos en segundos.',
      'Configuración de seguridad empresarial y permisos por equipo.',
      'Training del equipo incluido en la instalación.',
    ],
    icon: <LinkIcon />,
    id: 'integracion-mcp',
    price: '299 € instalación',
    priceNumeric: 299,
    title: 'IA Integrada en tu Workspace',
  },
  {
    description: 'Convierte tu equipo en experto en IA con plantillas probadas para tu sector. Desde propuestas comerciales hasta análisis de mercado, todo listo para usar y obtener resultados profesionales.',
    details: [
      'Templates específicos para tu sector: marketing, consulting, inmobiliario, etc.',
      'Prompts optimizados para GPT-4, Claude y otras IAs avanzadas.',
      'Casos de uso reales: propuestas, reportes, análisis, presentaciones.',
      'Guías paso a paso para adaptar cada template a tu negocio.',
      'Actualizaciones gratuitas cuando salen nuevos modelos de IA.',
    ],
    icon: <DocumentTextIcon />,
    id: 'pack-prompts-pro',
    price: '99 € por pack',
    priceNumeric: 99,
    title: 'Templates de IA para tu Sector',
  },
  {
    description:
      'Convierte a tu equipo en experto en IA en 4 semanas. Formación práctica con casos reales de tu negocio. Desde principiantes hasta uso avanzado para diferentes departamentos.',
    details: [
      'Sesiones prácticas con casos reales de tu empresa.',
      'Itinerarios específicos: ventas, marketing, admin, soporte.',
      'Material didáctico y guías de referencia permanentes.',
      'Enfoque en productividad, seguridad y mejores prácticas.',
      'Seguimiento post-formación para resolver dudas.',
    ],
    icon: <AcademicCapIcon />,
    id: 'formacion',
    price: 'Desde 89 €/hora',
    priceNumeric: 89,
    title: 'Capacitación en IA para Equipos',
  },
];

const Services: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<(typeof servicesData)[0] | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (service: (typeof servicesData)[0]) => {
    const existingItem = cartItems.find((item) => item.id === service.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === service.id ? { ...item, quantity: item.quantity + 1 } : item,
        ),
      );
    } else {
      const newItem: CartItem = {
        id: service.id,
        price: service.price,
        priceNumeric: service.priceNumeric,
        quantity: 1,
        title: service.title,
      };
      setCartItems([...cartItems, newItem]);
    }

    // 📊 Track service added to cart
    trackServiceInteraction(service.title, 'add_to_cart', service.priceNumeric);

    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)));
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
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
        rootMargin: '50px',
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
        className={`py-20 md:py-32 transition-all duration-500 ${activeService || isCartOpen ? 'blur-sm scale-95 pointer-events-none' : ''}`}
        aria-labelledby="servicios-heading"
      >
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <header className="text-center mb-16">
            <h2
              id="servicios-heading"
              className="text-4xl md:text-5xl font-semibold mb-6 text-white [text-shadow:0_0_20px_theme(colors.cyan.400/0.5)]"
            >
              Soluciones que Resuelven Problemas Reales
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed text-slate-400">
              Identificamos exactamente dónde tu empresa pierde tiempo y dinero, luego implementamos 
              IA para automatizar esos procesos. Resultados medibles desde el primer mes.
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
                className={`service-card bg-[#111a2e] border border-slate-700/60 rounded-3xl overflow-hidden h-full flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={
                  {
                    '--appear-delay': `${index * 150}ms`,
                    transitionDelay: isVisible ? '0ms' : `${index * 150}ms`,
                  } as React.CSSProperties
                }
                tabIndex={0}
                role="article"
                aria-labelledby={`service-${service.id}-title`}
              >
                {/* Card Content */}
                <div className="p-8 flex-grow flex flex-col">
                  {/* Icon */}
                  <div className="service-icon text-cyan-400 mb-6 flex-shrink-0">
                    {React.cloneElement(service.icon, {
                      'aria-hidden': 'true',
                      className: 'w-12 h-12',
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />

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
