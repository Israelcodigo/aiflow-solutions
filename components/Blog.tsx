import React from 'react';

import { DocumentTextIcon, LightbulbIcon, CheckCircleIcon } from './icons/Icons';

const blogPosts = [
  {
    category: 'Automatización',
    excerpt:
      'Descubre cómo implementar un chatbot eficaz que reduzca hasta un 60% los costes operativos mientras mejora la experiencia del usuario.',
    icon: <DocumentTextIcon className="w-8 h-8" />,
    id: 1,
    readTime: '5 min',
    title: 'Guía completa: Cómo un chatbot puede reducir costes de atención al cliente',
  },
  {
    category: 'Productividad',
    excerpt:
      'Identifica procesos repetitivos en tu empresa y aprende a automatizarlos para ahorrar hasta 15 horas semanales de trabajo manual.',
    icon: <LightbulbIcon className="w-8 h-8" />,
    id: 2,
    readTime: '4 min',
    title: '5 tareas administrativas que puedes automatizar hoy mismo con IA',
  },
  {
    category: 'Casos de Éxito',
    excerpt:
      'Análisis detallado de cómo una cadena retail aumentó sus ventas un 40% mediante automatización de procesos con IA.',
    icon: <CheckCircleIcon className="w-8 h-8" />,
    id: 3,
    readTime: '6 min',
    title: 'Caso de éxito: Aumentando la eficiencia en retail con automatización',
  },
];

const Blog: React.FC = () => {
  return (
    <section id="recursos" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white [text-shadow:0_0_20px_theme(colors.cyan.400/0.5)]">
            Recursos y Guías
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-slate-400">
            Artículos especializados sobre automatización de procesos, chatbots para ecommerce y
            casos de éxito en la implementación de IA empresarial.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-cyan-400 p-2 bg-cyan-400/10 rounded-lg">{post.icon}</div>
                <div>
                  <span className="text-xs text-cyan-400 font-medium">{post.category}</span>
                  <div className="text-xs text-slate-500">{post.readTime} lectura</div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 leading-tight">{post.title}</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">{post.excerpt}</p>

              <button className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors duration-300 flex items-center gap-2">
                Leer más
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
