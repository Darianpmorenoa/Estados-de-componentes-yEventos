import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 bg-gray-50">
     
      <div className="text-8xl font-extrabold text-red-700 mb-4 animate-bounce">
        404
      </div>
    
      <div className="mb-8">
        <span role="img" aria-label="Pizza Perdida" className="text-9xl block">
          🍕❓
        </span>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
        ¡Vaya! La pizza que buscas no está aquí.
      </h1>
      
      <p className="text-xl text-gray-600 mb-8 max-w-lg">
        Parece que te perdiste en el horno. La ruta a la que intentaste acceder no existe.
      </p>

      <Link 
        to="/" 
        className="px-8 py-3 bg-red-600 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105"
      >
        Volver a la Pizzería (Inicio)
      </Link>
    </div>
  );
};

export default NotFound;