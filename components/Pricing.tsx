import React, { useState, useEffect, useRef } from 'react';
import { CheckCircleIcon } from './icons/Icons';

type Price = string | { monthly: number; annual: number };

type PricingPlan = {
  name: string;
  type: 'one-time' | 'subscription' | 'custom';
  price: Price;
  description: string;
  features: string[];
  featured: boolean;
  cta: string;
  href: string;
};

const pricingData: PricingPlan[] = [
  {
    name: 'Servicios Únicos',
    type: 'one-time',
    price: 'Desde 89€',
    description: 'Soluciones cerradas para objetivos concretos.',
    features: [
      'Consultoría IA (150€/sesión)',
      'GPTs Personalizados (149€/GPT)',
      'Integración MCP (299€/instalación)',
      'Pack Prompts Pro (99€/pack)',
      'Formación (Desde 89€/hora)',
    ],
    featured: false,
    cta: 'Ver Servicios',
    href: '#servicios',
  },
  {
    name: 'Automatización con IA',
    type: 'subscription',
    price: { monthly: 349, annual: 3769 },
    description:
      'Diseñamos un sistema que automatiza un proceso repetitivo con IA. ROI promedio del 400% en 6 meses.',
    features: [
      'Ahorro garantizado: mín. 10h/semana o reembolso 100%',
      'Operación 24/7 sin interrupciones',
      'Gestión integral de la complejidad técnica',
      'Soporte y mantenimiento 30 días incluidos',
    ],
    featured: true,
    cta: 'Empezar a Automatizar',
    href: '#contacto',
  },
  {
    name: 'Plan Empresa',
    type: 'custom',
    price: 'Personalizado',
    description: 'Soluciones a medida y formación avanzada para tu organización.',
    features: [
      'Incluye todo lo del plan de suscripción y, además: múltiples soluciones, automatizaciones a gran escala, formación para equipos completos, soporte técnico dedicado, consultoría estratégica ilimitada.',
    ],
    featured: false,
    cta: 'Contactar',
    href: '#contacto',
  },
];

type BillingCycle = 'monthly' | 'annual';

const PricingCard: React.FC<PricingPlan & { billingCycle: BillingCycle }> = ({
  name,
  type,
  price,
  description,
  features,
  featured,
  cta,
  href,
  billingCycle,
}) => {
  const displayPrice = () => {
    if (type === 'subscription') {
      const priceData = price as { monthly: number; annual: number };
      const amount =
        billingCycle === 'monthly' ? priceData.monthly : Math.round(priceData.annual / 12);
      return (
        <div className="flex items-baseline">
          <span className="text-2xl font-semibold text-slate-400 mr-2">Desde</span>
          <span className="text-5xl font-extrabold text-white">{amount}€</span>
          <span className="text-lg text-slate-400 self-end ml-2">/mes</span>
        </div>
      );
    }
    return <div className="text-5xl font-extrabold text-white">{price as string}</div>;
  };

  const displayDescription = () => {
    if (type === 'subscription' && billingCycle === 'annual') {
      const priceData = price as { monthly: number; annual: number };
      return `Facturado anualmente (Desde ${priceData.annual}€/año)`;
    }
    return description;
  };

  return (
    <div className={`glow-card h-full ${featured ? 'featured-glow' : ''}`}>
      <div
        className={`relative z-10 bg-[#0f1334] p-8 rounded-2xl h-full flex flex-col ${featured ? 'border-2 border-cyan-400' : 'border border-slate-700/50'}`}
      >
        <h3 className="text-xl font-bold text-cyan-400 mb-2">{name}</h3>
        <div className="h-16 mb-2">{displayPrice()}</div>
        <p className="text-base text-slate-400 mb-6 h-10">{displayDescription()}</p>
        <ul className="space-y-3 text-left mb-8 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start text-base text-slate-300">
              <CheckCircleIcon className="w-5 h-5 text-cyan-400 mr-3 shrink-0 mt-1" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <a
          href={href}
          className={`w-full block text-center px-6 py-3 mt-auto rounded-full font-bold transform transition-all duration-300 ${featured ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105' : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#0a0e27]'}`}
        >
          {cta}
        </a>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  useEffect(() => {
    const currentRef = gridRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
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
    <section id="precios" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-white [text-shadow:0_0_20px_theme(colors.cyan.400/0.5)]">
          Planes Flexibles para Crecer
        </h2>
        <p className="text-lg text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Elige pagos únicos para necesidades específicas o suscripción con soporte y mantenimiento
          continuo.
        </p>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-800/50 p-1.5 rounded-full flex items-center space-x-2 border border-slate-700">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 text-sm rounded-full font-semibold transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20' : 'text-slate-400 hover:text-white'}`}
              aria-pressed={billingCycle === 'monthly'}
            >
              Pago Mensual
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 text-sm rounded-full font-semibold transition-all duration-300 relative ${billingCycle === 'annual' ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20' : 'text-slate-400 hover:text-white'}`}
              aria-pressed={billingCycle === 'annual'}
            >
              Pago Anual
              <span className="absolute -top-2.5 right-0 bg-green-400 text-[#0a0e27] text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                Ahorra 10%
              </span>
            </button>
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-stretch"
        >
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ease-out ${plan.featured ? 'lg:scale-105' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {plan.featured && (
                <span className="absolute top-0 right-6 -translate-y-1/2 bg-cyan-400 text-[#0a0e27] px-4 py-1 rounded-full text-sm font-bold z-20">
                  MÁS POPULAR
                </span>
              )}
              <PricingCard {...plan} billingCycle={billingCycle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
