import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import pizzas from '../data/Pizzas.js';
import { useCart } from '../Context/CartContext.jsx';

const formatCurrency = (amount) => {
  return amount.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  });
};

const DetallePizza = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();

  const pizza = pizzas.find(p => p.id === id);

  if (!pizza) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-red-700 mb-4">
          Pizza no encontrada 🥺
        </h1>
        <p className="text-gray-600 mb-8">
          La pizza con ID "{id}" no existe en nuestro menú.
        </p>
        <button 
          onClick={() => navigate('/')} 
          className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300 shadow-md"
        >
          Volver al Menú
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(pizza);
    console.log(`Pizza ${pizza.name} añadida al carrito.`);
  };


  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        <div className="lg:w-1/2 p-4">
          <img 
            src={pizza.img} 
            alt={pizza.name} 
            className="w-full h-auto object-cover rounded-xl shadow-lg border border-gray-100"
          />
        </div>

        <div className="lg:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-red-800 mb-2">
              {pizza.name}
            </h1>
            <p className="text-3xl font-black text-red-600 mb-6 border-b pb-4">
              {formatCurrency(pizza.price)}
            </p>

            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Descripción
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {pizza.desc}
            </p>

            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Ingredientes
            </h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {pizza.ingredients.map((ing, index) => (
                <span key={index} className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold text-sm shadow-sm border border-red-200">
                  {ing}
                </span>
              ))}
            </div>
          </div>
        
          <button
            onClick={handleAddToCart}
            className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition duration-300 shadow-xl text-lg mt-4 transform hover:scale-[1.01]"
          >
            Añadir al Carrito 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetallePizza;