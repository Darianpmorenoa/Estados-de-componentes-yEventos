import React from 'react';
import { useCart } from '../Context/CartContext'; 

const Cart = ({ onViewChange }) => {
  const { cart, getTotal, incrementQuantity, decrementQuantity, removeItem } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center p-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Tu Carrito está Vacío 🛒</h2>
        <p className="text-lg text-gray-500 mb-6">Parece que aún no has añadido ninguna pizza.</p>
        <button
          onClick={() => onViewChange('home')}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600 transition duration-200"
        >
          Explorar Menú
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-6">
      <h1 className="text-4xl font-extrabold text-center text-red-800 mb-10">
        Tu Pedido
      </h1>
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center space-x-4">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-16 h-16 object-cover rounded-lg"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/64x64/FEE2E2/B91C1C?text=P" }}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 capitalize">{item.name}</h3>
                <p className="text-sm text-gray-500">Precio unitario: ${item.price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => decrementQuantity(item.id)}
                  className="p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <span className="text-lg font-bold text-gray-800 w-6 text-center">{item.quantity}</span>
                <button 
                  onClick={() => incrementQuantity(item.id)}
                  className="p-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v8a1 1 0 11-2 0V6a1 1 0 011-1z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <span className="text-xl font-bold text-green-600 w-20 text-right">
                ${(item.price * item.quantity).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </span>
              
              <button 
                onClick={() => removeItem(item.id)}
                className="p-1 text-gray-400 hover:text-red-500 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Resumen y Checkout */}
      <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-red-500">
        <div className="flex justify-between items-center text-3xl font-bold mb-6">
          <span className="text-gray-700">Total a Pagar:</span>
          <span className="text-red-700">${getTotal().toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
        </div>
        
        <button className="w-full py-4 bg-red-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-[1.01]">
          Proceder al Pago
        </button>
      </div>
    </div>
  );
};

export default Cart;