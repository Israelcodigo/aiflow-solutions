
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import InteractiveBackground from './components/InteractiveBackground';

const App: React.FC = () => {
  return (
    <div className="text-white font-sans">
      <InteractiveBackground />
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <Services />
        <Pricing />
        <Process />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;