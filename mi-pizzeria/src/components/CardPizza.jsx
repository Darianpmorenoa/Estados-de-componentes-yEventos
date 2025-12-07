import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../Context/CartContext.jsx';

const formatCurrency = (amount) => {
    return amount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
};

const CardPizza = ({ pizza }) => {
    const { addToCart } = useCart(); 

    const handleAddToCart = () => {
        addToCart(pizza); 
        console.log(`Pizza ${pizza.name} añadida al carrito.`);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
            
            {/* Imagen */}
            <div className="h-48">
                <img 
                    src={pizza.img} 
                    alt={pizza.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/FF5733/FFFFFF?text=Pizza" }}
                />
            </div>

            {/* Contenido */}
            <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{pizza.name}</h2>
                <hr className="mb-3"/>
                
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Ingredientes:</h3>
                <ul className="list-none space-y-1 mb-4 flex-grow">
                    {pizza.ingredients.map((ing, index) => (
                        <li key={index} className="text-gray-600 capitalize text-sm flex items-center">
                            <span className="text-red-500 mr-2">🍕</span> {ing}
                        </li>
                    ))}
                </ul>

                <div className="mt-4 flex justify-between items-center border-t pt-4">
                    <span className="text-xl font-extrabold text-green-700">
                        {formatCurrency(pizza.price)}
                    </span>
                    
                    <div className="flex space-x-2">
                        <NavLink 
                            to={`/pizza/${pizza.id}`}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg transition duration-200 text-sm shadow-md"
                        >
                            Ver Más
                        </NavLink>
                        
                        {/* Botón de Añadir al Carrito */}
                        <button
                            onClick={handleAddToCart}
                            className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-3 rounded-lg transition duration-200 text-sm shadow-md"
                        >
                            Añadir 🛒
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;