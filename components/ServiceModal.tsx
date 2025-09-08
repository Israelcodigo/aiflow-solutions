import React, { useEffect } from 'react';

import { CheckCircleIcon, XIcon, type IconProps } from './icons/Icons';





type Service = {
  icon: React.ReactElement<IconProps>;
  title: string;
  description: string;
  price: string;
  details: string[];
};

type ServiceModalProps = {
  service: Service | null;
  onClose: () => void;
};

const ServiceModal: React.FC<ServiceModalProps> = ({ onClose, service }) => {
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  if (!service) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in-down"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      style={{ animationDuration: '0.4s' }}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="glow-card featured-glow">
          <div className="relative z-10 bg-[#0f1334] rounded-2xl border border-cyan-400/50 shadow-2xl shadow-cyan-500/10 flex flex-col max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-slate-700/50 flex justify-between items-center flex-shrink-0">
              <div className="flex items-center gap-4">
                <div className="text-cyan-400">
                  {React.cloneElement(service.icon, { className: 'w-8 h-8' })}
                </div>
                <h3 id="modal-title" className="text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <XIcon className="w-5 h-5" />
                <span className="sr-only">Cerrar modal</span>
              </button>
            </div>

            {/* Body */}
            <div className="p-8 overflow-y-auto">
              <p className="text-lg text-slate-300 mb-2 leading-relaxed">{service.description}</p>
              <p className="text-cyan-400 font-semibold mb-6">{service.price}</p>

              <h4 className="font-semibold text-white mb-4">¿Qué incluye?</h4>
              <ul className="space-y-3">
                {service.details.map((point, i) => (
                  <li key={i} className="flex items-start text-base text-slate-300 leading-relaxed">
                    <CheckCircleIcon className="w-5 h-5 text-cyan-400 mr-3 mt-1 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-700/50 text-right bg-[#0f1334]/50 flex-shrink-0">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transform transition-all duration-300"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
