import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white mt-10">
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg font-semibold mb-2">Mamma Mia! 🍕 Tu Pizzería Favorita</p>
        <p className="text-sm text-red-200">
          Desafío Latam | Consumo de API en React.
        </p>
        <div className="mt-4 space-x-4 text-red-300">
          <a href="#" className="hover:text-white transition">Términos</a>
          <span className="text-red-500">|</span>
          <a href="#" className="hover:text-white transition">Privacidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;