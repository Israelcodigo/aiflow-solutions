import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './icons/Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    }
}, [isMenuOpen]);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#precios', label: 'Precios' },
    { href: '#recursos', label: 'Recursos' },
    { href: '#contacto', label: 'Contacto' },
  ];
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-[#0a0e27]/80 backdrop-blur-lg border-b border-cyan-400/20' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <a href="#inicio" className="text-2xl font-bold text-cyan-400">Deified Machines</a>
            <ul className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-white hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menú" aria-expanded={isMenuOpen}>
                <MenuIcon className="w-6 h-6 text-white"/>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a0e27]/95 backdrop-blur-lg z-[60] transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
      >
          <div className="flex justify-between items-center container mx-auto px-6 h-[81px]">
              <div className="text-2xl font-bold text-cyan-400">Deified Machines</div>
              <button onClick={() => setIsMenuOpen(false)} aria-label="Cerrar menú">
                  <XIcon className="w-6 h-6 text-white"/>
              </button>
          </div>
          <nav>
            <ul className="flex flex-col items-center justify-center h-[calc(100vh-81px)] space-y-8 -mt-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={handleLinkClick} className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
      </div>
    </>
  );
};

export default Header;