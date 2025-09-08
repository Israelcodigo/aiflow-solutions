import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center">
      <div className="container mx-auto px-6">
        <p className="text-slate-400">
          &copy; {new Date().getFullYear()} Deified Machines. Todos los derechos reservados.
        </p>
        <p className="text-slate-500 text-sm mt-1">
          Transformando empresas con inteligencia artificial
        </p>
      </div>
    </footer>
  );
};

export default Footer;
