import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext.jsx'; 
import pizzas from '../data/Pizzas.js';

const formatCurrency = (amount) => {
  return amount.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  });
};

const PizzaCard = ({ pizza }) => {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addItem(pizza);
  };
  
  const handleViewDetails = () => {
      navigate(`/pizza/${pizza.id}`);
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col transform transition duration-500 hover:scale-[1.02] hover:shadow-red-300">
      <img 
        src={pizza.img} 
        alt={pizza.name} 
        className="w-full h-48 object-cover cursor-pointer"
        onClick={handleViewDetails}
      />
      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{pizza.name}</h2>
        <p className="text-red-600 font-extrabold text-xl mb-4">{formatCurrency(pizza.price)}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-600">
          {pizza.ingredients.map((ing, index) => (
            <span key={index} className="bg-red-50 px-3 py-1 rounded-full border border-red-200">
              {ing}
            </span>
          ))}
        </div>
        
        <div className="mt-auto flex justify-between gap-3">
          <button
            onClick={handleViewDetails}
            className="flex-1 bg-red-100 text-red-600 font-semibold py-2 rounded-lg hover:bg-red-200 transition duration-300 border border-red-300"
          >
            Ver Más
          </button>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-red-600 text-white font-semibold py-2 rounded-lg hover:bg-red-700 transition duration-300 shadow-lg shadow-red-200"
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};


const Home = () => {
  
  return (
    <div className="container mx-auto px-4 py-10">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-red-800 mb-3">
          ¡Bienvenidos a Mamma Mia! 🍕
        </h1>
        <p className="text-xl text-gray-600">
          Las pizzas más ricas, directo a tu mesa.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
      
    </div>
  );
};

export default Home;