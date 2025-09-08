// Configuración de Google Analytics
const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-PLACEHOLDER123';

// Verificar si estamos en desarrollo  
const isDevelopment = import.meta.env.MODE === 'development';

// Script de Google Analytics dinámico
export const initializeGA4 = () => {
  if (typeof window === 'undefined') return;

  // Solo cargar GA4 en producción o si la variable está configurada
  if (isDevelopment && GA4_MEASUREMENT_ID === 'G-PLACEHOLDER123') {
    console.log('🔧 GA4 en modo desarrollo - usando placeholder');
    return;
  }

  // Cargar Google Analytics 4
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Configurar gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }

  gtag('js', new Date());
  gtag('config', GA4_MEASUREMENT_ID, {
    page_location: window.location.href,
    page_title: document.title,
    send_page_view: true,
  });

  // Hacer gtag disponible globalmente
  (window as any).gtag = gtag;
};

// Declaración de tipos para TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
