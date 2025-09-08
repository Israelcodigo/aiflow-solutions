import React, { Suspense } from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';

// Lazy loading para componentes no críticos
const Services = React.lazy(() => import('./components/Services'));
const Pricing = React.lazy(() => import('./components/Pricing'));
const About = React.lazy(() => import('./components/About'));
const Blog = React.lazy(() => import('./components/Blog'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const InteractiveBackground = React.lazy(() => import('./components/InteractiveBackground'));

// Componente de loading reutilizable
const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="text-white font-sans">
      <Suspense fallback={<LoadingFallback />}>
        <InteractiveBackground />
      </Suspense>
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <Suspense fallback={<LoadingFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Blog />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
