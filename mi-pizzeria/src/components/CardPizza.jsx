import React from 'react';
import { useCart } from '../Context/CartContext.jsx'; 

const CardPizza = ({ pizza, onViewChange }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(pizza);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row max-w-4xl mx-auto border border-gray-100">
      
         {/* Columna de Imagenes*/}
      <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
        <img 
          src={pizza.img} 
          alt={`Imagen de ${pizza.name}`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
          onClick={() => onViewChange('detail', pizza.id)}
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x300/FEE2E2/B91C1C?text=No+Imagen" }}
        />
      </div>

      {/* Columna de Contenido */}
      <div className="p-6 md:w-2/3 flex flex-col justify-between">
        <h2 className="text-3xl font-bold text-red-700 mb-2 capitalize">{pizza.name}</h2>
        
        {/* Lista de Ingredientes */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-1">Ingredientes:</h3>
          <ul className="flex flex-wrap gap-2 text-sm text-gray-600">
            {pizza.ingredients && pizza.ingredients.map((ing, index) => (
              <li key={index} className="bg-red-100 px-3 py-1 rounded-full text-red-800">
                {ing.charAt(0).toUpperCase() + ing.slice(1)}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Footer con Precio y Botones */}
        <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          
          <span className="text-4xl font-extrabold text-green-600 mb-4 sm:mb-0">
            ${pizza.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </span>

          <div className="flex space-x-3">
            <button 
              onClick={() => onViewChange('detail', pizza.id)}
              className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600 transition duration-200 transform hover:scale-105"
            >
              Ver Más
            </button>
            <button 
              onClick={handleAddToCart}
              className="px-6 py-3 bg-red-700 text-white font-semibold rounded-full shadow-lg hover:bg-red-800 transition duration-200 transform hover:scale-105 flex items-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.378 5.53a1 1 0 00.94.69h8.216a1 1 0 00.94-.69l1.378-5.53a.997.997 0 00.01-.042L16.78 3H18a1 1 0 100-2H2a1 1 0 001 1zM7.294 13a1 1 0 102.412 0H7.294zm8.412 0a1 1 0 102.412 0H15.706zM6 16a1 1 0 100 2h1a1 1 0 100-2H6zm9 0a1 1 0 100 2h1a1 1 0 100-2h-1z" />
              </svg>
              <span>Añadir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;