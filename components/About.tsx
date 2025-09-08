import React from 'react';

const About: React.FC = () => {
    return (
        <section id="sobre-nosotros" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                        Nuestro Compromiso
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        En Deified Machines, nuestra mayor preocupación es la calidad del trabajo que entregamos 
                        y que cada herramienta se adapte perfectamente a las personas que la van a usar.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                    
                    {/* Left - Our Philosophy */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Nuestra Filosofía</h3>
                        
                        <div className="space-y-6 text-slate-300">
                            <div className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Las herramientas se adaptan a ti</h4>
                                    <p className="text-sm leading-relaxed">
                                        Diseñamos cada automatización pensando en cómo trabajas actualmente. 
                                        No vas a tener que cambiar tu forma de hacer las cosas para usar nuestras soluciones.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Calidad en cada detalle</h4>
                                    <p className="text-sm leading-relaxed">
                                        Cada línea de código, cada configuración, cada documentación 
                                        pasa por nuestro control de calidad antes de llegar a tus manos.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-2">Compromiso a largo plazo</h4>
                                    <p className="text-sm leading-relaxed">
                                        Una vez que implementamos una solución, estamos disponibles para mantenerla, 
                                        mejorarla y resolver cualquier duda que pueda surgir.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - How We Work */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Cómo Trabajamos</h3>
                        
                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-xl p-6 border border-slate-700/50 mb-6">
                            <div className="space-y-4 text-slate-300">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs text-cyan-400 font-bold">1</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Entendemos tu contexto</h4>
                                        <p className="text-sm">Analizamos cómo trabajas actualmente y qué necesitas mejorar</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs text-cyan-400 font-bold">2</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Diseñamos a medida</h4>
                                        <p className="text-sm">Cada solución está pensada específicamente para tu caso</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs text-cyan-400 font-bold">3</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Implementamos con cuidado</h4>
                                        <p className="text-sm">Instalación gradual, pruebas exhaustivas, documentación completa</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs text-cyan-400 font-bold">4</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">Te acompañamos siempre</h4>
                                        <p className="text-sm">Formación, soporte continuo y mejoras cuando las necesites</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-xl p-6 border border-cyan-700/30">
                            <h4 className="font-semibold text-cyan-300 mb-3">Nuestro Compromiso Contigo</h4>
                            <p className="text-sm text-cyan-100 leading-relaxed">
                                Cada proyecto que aceptamos lo tratamos como si fuera nuestro propio negocio. 
                                Tu éxito es nuestro éxito, y esa mentalidad se refleja en cada detalle de nuestro trabajo.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom - Technical Expertise */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h3 className="text-xl font-semibold text-white mb-3">Selección Inteligente de Modelos</h3>
                        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                            Conocemos toda la gama de modelos disponibles. Elegimos el más eficiente para tu caso específico, 
                            no necesariamente el más caro. La eficiencia es lo mejor para tu empresa.
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className="bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50 text-center">
                            <div className="text-xs text-slate-500 mb-1">OpenAI</div>
                            <div className="text-sm text-white font-medium">Toda la familia GPT</div>
                        </div>
                        <div className="bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50 text-center">
                            <div className="text-xs text-slate-500 mb-1">Anthropic</div>
                            <div className="text-sm text-white font-medium">Claude (Haiku, Sonnet, Opus)</div>
                        </div>
                        <div className="bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50 text-center">
                            <div className="text-xs text-slate-500 mb-1">Google</div>
                            <div className="text-sm text-white font-medium">Gemini (Flash, Pro)</div>
                        </div>
                        <div className="bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50 text-center">
                            <div className="text-xs text-slate-500 mb-1">Automatización</div>
                            <div className="text-sm text-white font-medium">Zapier / Make</div>
                        </div>
                    </div>

                    <div className="text-center">
                        <a 
                            href="#contacto" 
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/25"
                        >
                            Hablemos de tu proyecto
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;