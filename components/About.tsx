import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Transformamos Tu Forma de Trabajar
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            No se trata de cambiar lo que haces, sino de{' '}
            <span className="text-cyan-400 font-semibold">cómo lo haces</span>. Optimizamos tu
            tiempo, automatizamos lo mecánico y te convertimos en supervisor de procesos
            inteligentes.
          </p>
          <div className="inline-block bg-gradient-to-r from-slate-800/80 to-slate-900/80 rounded-2xl p-6 border border-slate-700/50">
            <p className="text-slate-400 text-sm leading-relaxed">
              <span className="text-cyan-400 font-semibold">La IA hace el trabajo.</span>
              <span className="text-white"> Tú te enfocas en lo que realmente importa:</span>{' '}
              supervisar, decidir y hacer crecer tu negocio.
            </p>
          </div>
        </div>

        {/* Casos de Éxito - Nueva sección */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-white mb-12 text-center">
            Resultados, no promesas
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonio */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
              <p className="text-slate-300 italic mb-6">
                "La automatización del reporting nos ahorró 15 horas al mes. El equipo fue rápido,
                profesional y el ROI fue evidente desde el primer mes."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">JP</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Juan Pérez</p>
                  <p className="text-sm text-slate-400">CEO, Agencia Digital Creativa</p>
                </div>
              </div>
            </div>

            {/* Caso cuantificado */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
              <h4 className="font-bold text-xl text-white mb-4">
                Reducción del 90% en tiempo de facturación
              </h4>
              <p className="text-slate-300 mb-6">
                Para una consultora B2B, implementamos un flujo que extrae datos de múltiples
                fuentes, genera facturas y las envía para aprobación.
              </p>
              <div className="text-center">
                <span className="text-4xl font-bold text-cyan-400">20 horas/mes</span>
                <p className="text-sm text-slate-400">Ahorradas en tareas administrativas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main transformation areas */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-white mb-12 text-center">
            ¿En qué va a cambiar tu día a día?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Office Work */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-4xl mb-6">💼</div>
              <h4 className="text-lg font-bold text-white mb-4">Trabajo de Oficina</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="line-through">Redactar emails repetitivos manualmente</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Revisar y aprobar emails generados automáticamente</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="line-through">Crear informes desde cero cada mes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Supervisar informes que se generan solos</span>
                </div>
              </div>
            </div>

            {/* Web Conversion */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-4xl mb-6">🌐</div>
              <h4 className="text-lg font-bold text-white mb-4">Conversión Web</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="line-through">
                    Perder clientes que visitan tu web fuera de horario
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Chatbot atiende 24/7 y cualifica leads automáticamente</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="line-through">
                    Responder las mismas preguntas básicas una y otra vez
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Recibir solo consultas pre-cualificadas y complejas</span>
                </div>
              </div>
            </div>

            {/* Mechanical Tasks */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
              <div className="text-4xl mb-6">⚙️</div>
              <h4 className="text-lg font-bold text-white mb-4">Tareas Mecánicas</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="line-through">Copiar datos entre sistemas manualmente</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Los datos se sincronizan automáticamente</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span className="line-through">
                    Clasificar y organizar documentos uno por uno
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Supervisar que la IA organizó todo correctamente</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nuestro Equipo */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Nuestro Equipo</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">AM</span>
              </div>
              <h4 className="font-bold text-white mb-2">Alejandro Martínez</h4>
              <p className="text-cyan-400 text-sm mb-3">CEO & IA Strategist</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                15+ años optimizando procesos empresariales. Ex-consultor en McKinsey, especialista
                en automatización con IA para PYMEs y startups.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">LC</span>
              </div>
              <h4 className="font-bold text-white mb-2">Laura Chen</h4>
              <p className="text-cyan-400 text-sm mb-3">CTO & AI Engineer</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Ingeniera de ML con experiencia en Google y Meta. Experta en integración de modelos
                de IA y arquitecturas escalables para empresas.
              </p>
            </div>
          </div>
        </div>

        {/* Our commitment */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-2xl p-8 border border-cyan-700/30">
            <h3 className="text-2xl font-bold text-white mb-6">Nuestro Compromiso</h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-cyan-300 mb-3">Lo que garantizamos:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Ahorro mínimo garantizado: 10h/semana o reembolso 100%
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    ROI promedio del 400% en los primeros 6 meses
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Formación completa + soporte 30 días incluido
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-300 mb-3">Cómo elegimos la IA:</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Modelo más eficiente para tu caso específico
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Equilibrio perfecto entre costo y rendimiento
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Escalabilidad según crezca tu negocio
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical platforms */}
        <div className="text-center">
          <p className="text-slate-400 text-sm mb-4">
            Trabajamos con toda la gama de modelos disponibles
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-slate-800/50 px-3 py-1 rounded-full text-xs text-slate-300 border border-slate-700/50">
              ChatGPT
            </span>
            <span className="bg-slate-800/50 px-3 py-1 rounded-full text-xs text-slate-300 border border-slate-700/50">
              Claude AI
            </span>
            <span className="bg-slate-800/50 px-3 py-1 rounded-full text-xs text-slate-300 border border-slate-700/50">
              Google Gemini
            </span>
            <span className="bg-slate-800/50 px-3 py-1 rounded-full text-xs text-slate-300 border border-slate-700/50">
              Automatización
            </span>
            <span className="bg-slate-800/50 px-3 py-1 rounded-full text-xs text-slate-300 border border-slate-700/50">
              Integración
            </span>
          </div>

          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-cyan-500/25"
          >
            Agenda una demo gratuita de 15 min
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
