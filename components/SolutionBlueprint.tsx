import React, { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface BlueprintStep {
  title: string;
  description: string;
  details: string[];
  timeframe: string;
  tools: string[];
}

const SolutionBlueprint: React.FC = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const blueprintSteps: BlueprintStep[] = [
    {
      description: "Identificamos exactamente dónde y cómo tu agencia pierde tiempo en reporting manual",
      details: [
        "Auditoría completa de todos los procesos de reporting actuales",
        "Identificación de fuentes de datos: Google Analytics, Meta Ads, Google Ads, SEMrush, etc.",
        "Mapeo de formatos de entrega por cliente",
        "Cálculo preciso del tiempo invertido por semana/mes",
        "Identificación de errores recurrentes en el proceso manual"
      ],
      timeframe: "1-2 semanas",
      title: "Análisis y Mapeo de Procesos",
      tools: ["Herramientas de análisis de procesos", "Entrevistas con equipo", "Audit spreadsheets"]
    },
    {
      description: "Diseñamos la solución técnica específica para tu stack tecnológico",
      details: [
        "Configuración de conectores API para todas las plataformas",
        "Diseño de base de datos para almacenar métricas históricas",
        "Creación de templates personalizados por tipo de cliente",
        "Definición de triggers automáticos (ej: cada domingo)",
        "Establecimiento de checks de calidad automatizados"
      ],
      timeframe: "1 semana",
      title: "Arquitectura de Automatización",
      tools: ["Zapier/Make.com", "Google Sheets API", "Looker Studio", "Airtable"]
    },
    {
      description: "Entrenamos una IA específica para generar insights de tus reportes",
      details: [
        "Entrenamiento con ejemplos de tus mejores reportes históricos",
        "Configuración para detectar anomalías en métricas",
        "Programación de insights automáticos por sector/cliente",
        "Integración con tu tono de comunicación corporativo",
        "Testing con datos reales de al menos 3 clientes piloto"
      ],
      timeframe: "2-3 semanas",
      title: "Desarrollo del Agente de IA",
      tools: ["GPT-4 customizado", "ChatGPT API", "Prompt engineering", "Fine-tuning"]
    },
    {
      description: "Desplegamos la solución con clientes piloto para validar resultados",
      details: [
        "Setup completo en entorno de producción",
        "Migración de al menos 5 clientes al nuevo sistema",
        "Comparación side-by-side: proceso manual vs automatizado",
        "Ajustes basados en feedback del equipo y clientes",
        "Documentación completa del proceso automatizado"
      ],
      timeframe: "1-2 semanas",
      title: "Implementación y Testing",
      tools: ["Entorno de producción", "A/B testing", "Feedback loops"]
    },
    {
      description: "Extendemos la automatización a toda tu cartera de clientes",
      details: [
        "Migración del 100% de clientes al sistema automatizado",
        "Setup de alertas para detectar fallos o anomalías",
        "Entrenamiento del equipo en el nuevo workflow",
        "Implementación de mejoras continuas basadas en datos",
        "Establecimiento de KPIs para medir el impacto"
      ],
      timeframe: "1 semana",
      title: "Escalado y Optimización",
      tools: ["Monitoring tools", "Team training", "KPI dashboards"]
    }
  ];

  const expectedResults = [
    {
      description: "Reducción en tiempo de reporting",
      detail: "De 10 horas semanales a 30 minutos de revisión",
      metric: "95%"
    },
    {
      description: "Errores de copia/pega",
      detail: "Eliminación completa del error humano en datos",
      metric: "0"
    },
    {
      description: "Aumento en calidad percibida",
      detail: "Insights más profundos y consistentes en cada reporte",
      metric: "40%"
    },
    {
      description: "Tiempo liberado para estrategia",
      detail: "Tu equipo puede enfocarse en crecimiento, no en gestión",
      metric: "15h/semana"
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-slate-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            BLUEPRINT DETALLADO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Automatización de Reporting para Agencias de Marketing
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            <span className="font-bold text-white">El problema:</span> Tu equipo invierte más de 10 horas cada semana recopilando datos de múltiples plataformas para crear informes. Es manual, propenso a errores y roba tiempo estratégico.
          </p>
          <p className="text-lg text-cyan-400 mt-4 font-semibold">
            Aquí está exactamente cómo lo solucionaríamos para tu agencia.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-8">Plan de Implementación Paso a Paso</h3>
            <div className="space-y-4">
              {blueprintSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                        <p className="text-slate-300 text-sm">{step.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                        {step.timeframe}
                      </span>
                      {expandedStep === index ? (
                        <ChevronDownIcon className="w-5 h-5 text-slate-400" />
                      ) : (
                        <ChevronRightIcon className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                  </button>
                  
                  {expandedStep === index && (
                    <div className="px-6 pb-4 border-t border-slate-700/50">
                      <div className="pt-4 space-y-4">
                        <div>
                          <h5 className="font-semibold text-slate-200 mb-2">Actividades Detalladas:</h5>
                          <ul className="space-y-2">
                            {step.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-slate-300 text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-slate-200 mb-2">Herramientas:</h5>
                          <div className="flex flex-wrap gap-2">
                            {step.tools.map((tool, idx) => (
                              <span key={idx} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-2xl font-bold text-white mb-6">Resultados Esperados</h3>
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                <div className="space-y-6">
                  {expectedResults.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
                        {result.metric}
                      </div>
                      <div className="font-semibold text-white text-sm mb-1">
                        {result.description}
                      </div>
                      <div className="text-xs text-slate-400">
                        {result.detail}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-cyan-500/10 border border-cyan-400/20 rounded-lg">
                  <p className="text-sm text-slate-300 text-center">
                    <span className="font-bold text-white">ROI Estimado:</span>
                    <br />Recuperas la inversión en menos de 2 meses con el tiempo ahorrado.
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <a
                    href="#diagnostico"
                    className="inline-block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg hover:scale-105 transform transition-all duration-300"
                  >
                    Solicitar Blueprint Personalizado
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/20 rounded-lg p-6 max-w-2xl">
            <p className="text-slate-300 mb-4">
              <span className="font-bold text-white">Este no es un ejemplo teórico.</span> 
              <br />Es el proceso exacto que seguiríamos para automatizar tu reporting.
            </p>
            <p className="text-sm text-yellow-400 font-semibold">
              ¿Quieres ver cómo se aplicaría específicamente a tu agencia?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionBlueprint;