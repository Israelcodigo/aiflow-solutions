import React from 'react';
import { 
  CheckCircleIcon, 
  DocumentTextIcon, 
  ChartBarIcon, 
  LightBulbIcon,
  ClockIcon,
  CurrencyEuroIcon
} from '@heroicons/react/24/outline';

const DiagnosticOffering: React.FC = () => {
  const diagnosticIncludes = [
    {
      description: "Auditamos exactamente dónde y cómo pierdes tiempo en tareas repetitivas",
      icon: <ChartBarIcon className="w-6 h-6" />,
      title: "Análisis de Procesos Actuales"
    },
    {
      description: "Identificamos los 3-5 procesos con mayor potencial de automatización",
      icon: <DocumentTextIcon className="w-6 h-6" />,
      title: "Mapa de Oportunidades de IA"
    },
    {
      description: "Proyección exacta de ahorro de tiempo y costes en tu contexto",
      icon: <CurrencyEuroIcon className="w-6 h-6" />,
      title: "Cálculo de ROI Específico"
    },
    {
      description: "Plan paso a paso priorizado por impacto y facilidad de implementación",
      icon: <LightBulbIcon className="w-6 h-6" />,
      title: "Hoja de Ruta Personalizada"
    }
  ];

  const diagnosticDeliverables = [
    "Informe de 15-20 páginas con análisis detallado",
    "Mapa visual de procesos automatizables", 
    "Cálculo de ROI para cada oportunidad identificada",
    "Cronograma de implementación recomendado",
    "Lista de herramientas específicas recomendadas",
    "1 hora de consulta para resolver dudas sobre el informe"
  ];

  const guarantees = [
    "Si no identificamos al menos 10 horas/semana automatizables, te devolvemos el 100%",
    "Informe entregado en máximo 7 días laborables",
    "Acceso directo por WhatsApp durante todo el proceso"
  ];

  return (
    <section id="diagnostico" className="py-20 px-6 bg-gradient-to-b from-slate-800/50 to-slate-900/80">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/20 px-4 py-2 rounded-full text-sm font-semibold text-green-400 mb-4">
            OFERTA DE RIESGO CERO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Diagnóstico de Potencial IA
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Antes de automatizar cualquier proceso, necesitas saber exactamente <span className="font-bold text-white">dónde está tu mayor oportunidad de ahorro</span>. 
            Este diagnóstico te da un mapa claro de tu potencial de automatización.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-slate-400 mb-8">
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-5 h-5 text-green-400" />
              <span>7 días máximo</span>
            </div>
            <div className="w-px h-6 bg-slate-600"></div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="w-5 h-5 text-green-400" />
              <span>100% garantizado</span>
            </div>
            <div className="w-px h-6 bg-slate-600"></div>
            <div className="flex items-center space-x-2">
              <CurrencyEuroIcon className="w-5 h-5 text-green-400" />
              <span>Solo 199€</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">¿Qué incluye el diagnóstico?</h3>
            <div className="space-y-6">
              {diagnosticIncludes.map((item, index) => (
                <div 
                  key={index}
                  className="flex space-x-4 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-300 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Lo que recibes</h3>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 mb-6">
              <ul className="space-y-3">
                {diagnosticDeliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-400/20 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-green-400 mb-2">Nuestras Garantías:</h4>
              <ul className="space-y-2">
                {guarantees.map((guarantee, index) => (
                  <li key={index} className="text-sm text-slate-300 flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{guarantee}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-2xl">
            <div className="mb-6">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                199€
              </div>
              <p className="text-slate-400">Una inversión que se paga sola identificando una sola oportunidad</p>
            </div>
            
            <div className="mb-6">
              <p className="text-lg text-slate-300 mb-2">
                <span className="font-bold text-white">¿Por qué tan barato?</span>
              </p>
              <p className="text-sm text-slate-400">
                Porque sabemos que cuando veas tu potencial real de ahorro, 
                querrás que implementemos las soluciones. Esta es nuestra manera de demostrarte nuestro expertise sin riesgo.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="#contacto"
                className="block w-full px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-600 text-white font-bold rounded-lg hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
              >
                Solicitar Diagnóstico por 199€
              </a>
              <p className="text-xs text-slate-400">
                ✓ Sin compromiso ✓ 100% garantizado ✓ Resultados en 7 días
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-6 max-w-3xl">
            <p className="text-yellow-400 font-semibold mb-2">
              ⚡ Caso de Éxito Reciente
            </p>
            <p className="text-slate-300 text-sm">
              "El diagnóstico identificó que podíamos automatizar 12 horas semanales de reporting. 
              Solo con eso, recuperamos la inversión en menos de una semana." 
              <br />
              <span className="text-slate-400 italic">— Director de Agencia Digital, Barcelona</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticOffering;