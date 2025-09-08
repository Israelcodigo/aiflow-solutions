import React from 'react';

const About: React.FC = () => {
    return (
        <section id="sobre-nosotros" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <header className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white [text-shadow:0_0_20px_theme(colors.cyan.400/0.5)]">
                        Sobre Nosotros
                    </h2>
                    <p className="text-lg max-w-3xl mx-auto leading-relaxed text-slate-400">
                        Conoce al equipo detrás de las soluciones de IA que están transformando empresas.
                    </p>
                </header>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Team Photo */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <img 
                                src="/images/team-founder.jpg"
                                alt="Equipo fundador de Deified Machines - Especialistas en IA y automatización empresarial"
                                className="rounded-2xl shadow-2xl w-full max-w-md hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                                width="400"
                                height="500"
                            />
                            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                                +5 años en IA
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Expertos en IA Empresarial
                        </h3>
                        
                        <p className="text-slate-300 leading-relaxed text-lg">
                            Somos un equipo especializado en implementación de inteligencia artificial para empresas. 
                            Con más de <span className="text-cyan-400 font-semibold">5 años de experiencia</span> ayudando 
                            a organizaciones a automatizar procesos y aumentar su productividad.
                        </p>

                        <p className="text-slate-300 leading-relaxed text-lg">
                            Hemos trabajado con <span className="text-cyan-400 font-semibold">+50 empresas</span> de 
                            diversos sectores, desde startups hasta corporaciones, implementando soluciones que han 
                            generado ahorros promedio de <span className="text-cyan-400 font-semibold">30+ horas mensuales</span> 
                            por empleado.
                        </p>

                        <div className="grid grid-cols-3 gap-6 mt-8">
                            <div className="text-center p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50">
                                <div className="text-2xl font-bold text-cyan-400 mb-1">+50</div>
                                <div className="text-sm text-slate-400">Empresas</div>
                            </div>
                            <div className="text-center p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50">
                                <div className="text-2xl font-bold text-cyan-400 mb-1">5+</div>
                                <div className="text-sm text-slate-400">Años exp.</div>
                            </div>
                            <div className="text-center p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50">
                                <div className="text-2xl font-bold text-cyan-400 mb-1">30h</div>
                                <div className="text-sm text-slate-400">Ahorro/mes</div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a 
                                href="#contacto" 
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/25"
                            >
                                Conoce nuestro proceso
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;