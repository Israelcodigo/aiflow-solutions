import React from 'react';
import StatCard from './StatCard';

const MarketProof: React.FC = () => {
  const marketStats = [
    {
      delay: "0.2s",
      description: "Aumento en la calidad del trabajo entregado por profesionales que usan IA generativa",
      source: "Harvard Business Review / BCG",
      sourceUrl: "https://hbr.org/2023/09/ai-is-already-changing-work",
      statistic: "40%"
    },
    {
      delay: "0.4s",
      description: "Del tiempo de los empleados puede ser automatizado con IA generativa",
      source: "McKinsey Global Institute",
      sourceUrl: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier",
      statistic: "70%"
    },
    {
      delay: "0.6s",
      description: "De las empresas usarán IA generativa en producción para 2026",
      source: "Gartner",
      sourceUrl: "https://www.gartner.com/en/articles/beyond-chatgpt-the-future-of-generative-ai-for-enterprises",
      statistic: "80%"
    }
  ];

  const additionalStats = [
    {
      delay: "0.8s",
      description: "Más rápido completan las tareas los consultores con GPT-4",
      source: "Harvard Business Review / BCG",
      sourceUrl: "https://hbr.org/2023/09/ai-is-already-changing-work",
      statistic: "25%"
    },
    {
      delay: "1.0s",
      description: "Valor económico anual que podría añadir la IA generativa globalmente",
      source: "McKinsey Global Institute",
      sourceUrl: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier",
      statistic: "$4.4T"
    }
  ];

  return (
    <section id="market-proof" className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            La IA no es una promesa, son resultados
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Los datos no mienten. Empresas líderes ya están obteniendo ventajas competitivas reales con IA generativa. 
            <span className="block mt-2 text-cyan-400 font-semibold">¿Vas a quedarte atrás?</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {marketStats.map((stat, index) => (
            <StatCard
              key={index}
              statistic={stat.statistic}
              description={stat.description}
              source={stat.source}
              sourceUrl={stat.sourceUrl}
              delay={stat.delay}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {additionalStats.map((stat, index) => (
            <StatCard
              key={index}
              statistic={stat.statistic}
              description={stat.description}
              source={stat.source}
              sourceUrl={stat.sourceUrl}
              delay={stat.delay}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <div 
            className="inline-block bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-lg p-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
          >
            <p className="text-lg text-slate-300 mb-4">
              <span className="font-bold text-white">La pregunta no es si necesitas IA,</span> 
              <br />sino cuándo vas a empezar a usarla estratégicamente.
            </p>
            <a
              href="#diagnostico"
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:scale-105 transform transition-all duration-300"
            >
              Descubre tu potencial con IA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketProof;