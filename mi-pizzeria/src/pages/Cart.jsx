import React from 'react';
import { useCart } from '../Context/CartContext.jsx';
import { Link } from 'react-router-dom';

const formatCurrency = (amount) => {
  return amount.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  });
};

const Cart = () => {
  const { cartItems, removeItem, updateQuantity, calculateTotal } = useCart();
  const totalAmount = calculateTotal;

  const handleCheckout = () => {
    const message = `¡Gracias por tu pedido! El total es ${formatCurrency(totalAmount)}. Proceso de pago simulado.`;
    console.log("Proceso de Pago Iniciado:", message);
  
    alert("¡Pedido simulado con éxito! Revisa la consola para más detalles.");
  };
  
  const handleQuantityChange = (id, change) => {
    const item = cartItems.find(i => i.id === id);
    if (item) {
        updateQuantity(id, Math.max(0, item.quantity + change));
    }
  }


  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center h-[50vh]">
        <h1 className="text-4xl font-extrabold text-red-700 mb-4">
          Tu Carrito está Vacío 😔
        </h1>
        <p className="text-gray-600 mb-8">
          ¡Añade unas deliciosas pizzas para comenzar tu pedido!
        </p>
        <Link 
          to="/" 
          className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition duration-300 shadow-md"
        >
          Ver Menú de Pizzas
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      <h1 className="text-4xl font-extrabold text-red-800 mb-8 text-center">
        Tu Pedido
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        
        <div className="lg:w-2/3 space-y-4">
          {cartItems.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center bg-white p-4 rounded-xl shadow-lg border border-red-100 transition duration-300 hover:shadow-red-200"
            >
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-20 h-20 object-cover rounded-lg mr-4 border border-gray-200"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/80x80/cccccc/333333?text=Pizza"; }} // Fallback de imagen
              />
              
              <div className="flex-grow">
                <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                <p className="text-red-600 font-semibold">{formatCurrency(item.price)}</p>
              </div>

              <div className="flex items-center space-x-2 mr-4">
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="bg-red-100 text-red-600 w-8 h-8 rounded-full hover:bg-red-200 font-bold text-lg transition duration-200"
                  aria-label="Disminuir cantidad"
                >
                  -
                </button>
                <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="bg-red-600 text-white w-8 h-8 rounded-full hover:bg-red-700 font-bold text-lg transition duration-200"
                  aria-label="Aumentar cantidad"
                >
                  +
                </button>
              </div>
              
              <div className="w-24 text-right hidden sm:block">
                <p className="text-lg font-bold text-gray-900">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="ml-4 text-gray-400 hover:text-red-500 transition duration-200"
                aria-label="Eliminar ítem"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="lg:w-1/3">
          <div className="bg-red-50 p-6 rounded-xl shadow-xl sticky lg:top-20 border border-red-200">
            <h2 className="text-2xl font-bold text-red-800 border-b pb-3 mb-4">
              Resumen del Pedido
            </h2>
            
            <div className="flex justify-between text-xl font-semibold mb-6">
              <span className="text-gray-700">Total a Pagar:</span>
              <span className="text-red-700 font-extrabold">{formatCurrency(totalAmount)}</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition duration-300 shadow-lg text-lg transform hover:scale-[1.01]"
            >
              Proceder al Pago
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;