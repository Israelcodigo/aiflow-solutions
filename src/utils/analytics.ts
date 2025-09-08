// Google Analytics 4 - Utilidades de Tracking
// Uso: import { trackEvent, trackFormSubmission } from '@/src/utils/analytics'

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Función base para tracking de eventos
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      ...parameters,
    });
    console.log('📊 GA4 Event:', eventName, parameters);
  } else {
    console.log('📊 GA4 No disponible:', eventName, parameters);
  }
};

// Tracking específico de formulario de contacto
export const trackFormSubmission = (success: boolean, formType: string = 'contact') => {
  trackEvent('form_submit', {
    event_category: 'conversion',
    event_label: formType,
    success: success,
    value: success ? 150 : 0, // Valor del lead (150€ consultoría)
  });
};

// Tracking de interacciones con servicios
export const trackServiceInteraction = (serviceName: string, action: string, price?: number) => {
  trackEvent('service_interaction', {
    action: action,
    event_category: 'services',
    event_label: serviceName,
    value: price || 0,
  });
};

// Tracking de clicks en CTAs importantes
export const trackCTAClick = (ctaText: string, location: string) => {
  trackEvent('cta_click', {
    event_category: 'conversion',
    event_label: ctaText,
    location: location,
  });
};

