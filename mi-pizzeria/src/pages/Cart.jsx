import React from 'react';
import { useCart } from '../Context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus, FaTrashAlt, FaShoppingCart } from 'react-icons/fa';

const formatCurrency = (amount) => {
    const num = Number(amount) || 0; 
    return num.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
};

const Cart = () => {
    const { 
        cart, 
        total, 
        increaseQuantity, 
        decreaseQuantity, 
        removeFromCart,
        clearCart 
    } = useCart();
    const navigate = useNavigate();

    const CartItem = ({ item }) => {
        const { id, name, price, img, quantity } = item;

        if (!item || !id) return null; 

        return (
            <div className="flex items-center justify-between p-4 mb-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm transition duration-150 ease-in-out">
                <div className="flex items-center space-x-4 flex-grow">
                    <img 
                        src={img} 
                        alt={name} 
                        className="w-16 h-16 object-cover rounded-full shadow-md"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/A31F34/FFFFFF?text=Pizza" }}
                    />
                    <div>
                        <p className="text-lg font-semibold text-gray-800">{name}</p>
                        <p className="text-sm text-gray-500">{formatCurrency(price)} c/u</p>
                    </div>
                </div>

                <div className="flex items-center space-x-2 mr-4">
                    <button
                        onClick={() => decreaseQuantity(id)}
                        className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-150 disabled:bg-red-300 active:bg-red-700"
                        disabled={quantity <= 1}
                        aria-label={`Disminuir la cantidad de ${name}`}
                    >
                        <FaMinus size={12} />
                    </button>
                    
                    <span className="w-8 h-8 flex items-center justify-center bg-white text-gray-800 border border-gray-300 rounded-lg font-bold">
                        {quantity}
                    </span>

                    <button
                        onClick={() => increaseQuantity(id)}
                        className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-150 active:bg-green-700"
                        aria-label={`Aumentar la cantidad de ${name}`}
                    >
                        <FaPlus size={12} />
                    </button>
                </div>

                <div className="w-24 text-right">
                    <p className="text-lg font-bold text-gray-800">{formatCurrency(price * quantity)}</p>
                </div>

                <button
                    onClick={() => removeFromCart(id)}
                    className="ml-4 p-2 text-gray-500 hover:text-red-600 transition duration-150"
                    aria-label={`Eliminar ${name} del carrito`}
                >
                    <FaTrashAlt size={20} />
                </button>
            </div>
        );
    };

    if (!cart || cart.length === 0) {
        return (
            <div className="max-w-4xl mx-auto py-12 px-4 text-center">
                <FaShoppingCart className="text-6xl text-gray-400 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-gray-700 mb-2">Tu Carrito Está Vacío</h1>
                <p className="text-gray-500 mb-6">Añade algunas pizzas deliciosas para comenzar tu pedido.</p>
                <button 
                    onClick={() => navigate('/')}
                    className="bg-red-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
                >
                    Explorar Menú
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold text-red-700 mb-8 border-b pb-4">Tu Carrito de Compras</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Columna de Ítems del Carrito */}
                <div className="lg:col-span-2">
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>

                {/* Columna de Resumen del Pedido */}
                <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-lg h-fit">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-3">Resumen del Pedido</h2>
                    
                    <div className="space-y-3">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal:</span>
                            <span className="font-medium">{formatCurrency(total)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Envío:</span>
                            <span className="font-medium text-green-600">Gratis</span>
                        </div>
                    </div>
                    
                    <div className="flex justify-between text-2xl font-extrabold text-red-700 mt-5 pt-3 border-t-2 border-red-100">
                        <span>Total:</span>
                        <span>{formatCurrency(total)}</span>
                    </div>

                    <button
                        onClick={() => console.log("Procediendo a Pagar...")} // Placeholder
                        className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300 mt-6"
                    >
                        Ir a Pagar
                    </button>
                    <button
                        onClick={clearCart}
                        className="w-full bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-300 transition duration-300 mt-3"
                    >
                        Vaciar Carrito
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;