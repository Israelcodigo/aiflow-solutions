
import React, { useState } from 'react';
import { trackFormSubmission, trackEvent } from '../src/utils/analytics';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        message: '',
        honeypot: '' // Campo oculto anti-spam
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        setStatusMessage('');

        // Usar nuestra API endpoint
        const endpoint = '/api/contact';

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (response.ok && result.success) {
                setStatus('success');
                setStatusMessage(result.message || '¡Gracias por tu interés! Te contactaremos pronto.');
                setFormData({ name: '', company: '', email: '', message: '', honeypot: '' });
                
                // 📊 Track successful form submission
                trackFormSubmission(true, 'contact');
            } else {
                setStatus('error');
                setStatusMessage(result.error || 'Error al enviar el formulario. Inténtalo de nuevo.');
                
                // 📊 Track failed form submission
                trackFormSubmission(false, 'contact');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
            setStatusMessage('Error de conexión. Por favor, verifica tu conexión e inténtalo de nuevo.');
            
            // 📊 Track network error
            trackEvent('form_error', {
                event_category: 'error',
                event_label: 'network_error',
                error_message: error instanceof Error ? error.message : 'Unknown error'
            });
        }
    };

    return (
        <section id="contacto" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white [text-shadow:0_0_20px_theme(colors.cyan.400/0.5)]">Empieza Hoy</h2>
                <div className="max-w-2xl mx-auto">
                    <div className="glow-card">
                        <form onSubmit={handleSubmit} className="relative z-10 bg-[#0f1334] p-8 rounded-2xl border border-slate-700/50">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nombre</label>
                                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">Empresa</label>
                                    <input type="text" name="company" id="company" required value={formData.company} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">¿Qué quieres mejorar?</label>
                                    <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"></textarea>
                                </div>
                                
                                {/* Honeypot field - hidden from users, visible to bots */}
                                <input
                                    type="text"
                                    name="honeypot"
                                    value={formData.honeypot}
                                    onChange={handleChange}
                                    style={{ display: 'none' }}
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                />
                            </div>
                            <div className="mt-6">
                                <button type="submit" disabled={status === 'submitting'} className="w-full px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                                    {status === 'submitting' ? 'Enviando...' : 'Solicitar Consultoría 150€'}
                                </button>
                                {statusMessage && (
                                    <p className={`mt-4 text-center font-medium ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                                        {statusMessage}
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;