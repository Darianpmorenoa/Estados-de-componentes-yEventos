import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext.jsx';
import { useAuth } from '../Context/AuthContext.jsx';
import { FaPizzaSlice, FaShoppingCart } from 'react-icons/fa';


const PIZZA_API_BASE_URL = '/pizzas.json'; 

const formatCurrency = (amount) => {
    return amount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
};

const DetallePizza = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const { token } = useAuth();
    const navigate = useNavigate();
    
    const [pizza, setPizza] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPizzaDetail = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const response = await fetch(PIZZA_API_BASE_URL);
                
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: No se pudo cargar el archivo de pizzas.`);
                }
                
                const allPizzas = await response.json();
                
                const foundPizza = allPizzas.find(p => p.id === id);

                if (foundPizza) {
                    setPizza(foundPizza);
                } else {
                    setError(`Error: La pizza con ID "${id}" no fue encontrada en el menú.`);
                    setPizza(null);
                }

            } catch (err) {
                console.error("Error al cargar la información de la pizza:", err);
                setError(`Error de red o archivo JSON: ${err.message}. Asegúrate de que pizzas.json tiene el formato correcto.`);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchPizzaDetail();
        }
    }, [id]);

    const handleAddToCart = () => {
        if (!token) {
            console.log("Debe iniciar sesión para agregar productos al carrito.");
            navigate('/login');
            return;
        }
        
        if (pizza) {
            addToCart(pizza);
            console.log(`Pizza ${pizza.name} añadida al carrito desde el detalle.`);
        }
    };

    if (loading) {
        return (
            <div className="text-center p-20">
                <FaPizzaSlice className="animate-spin text-6xl text-red-600 mx-auto mb-4" />
                <p className="text-xl text-gray-700">Cargando detalles de la pizza...</p>
            </div>
        );
    }

    if (error && !pizza) {
        return (
            <div className="text-center p-20 text-gray-600">
                <p className="text-2xl font-bold text-red-600">Error</p>
                <p className="text-red-500 mt-4">{error}</p>
                <button 
                    onClick={() => navigate('/')} 
                    className="mt-6 bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 transition"
                >
                    Volver al Menú
                </button>
            </div>
        );
    }
    
    if (!pizza) {
         return (
            <div className="text-center p-20 text-gray-600">
                <p className="text-2xl font-bold">Error Crítico: No se pudo cargar la información de la pizza.</p>
                <p className="text-red-500 mt-4">{error}</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                
                {/* Columna de Imagen */}
                <div className="md:w-1/2">
                    <img 
                        src={pizza.img} 
                        alt={pizza.name} 
                        className="w-full h-full object-cover md:h-96"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/FF5733/FFFFFF?text=Pizza+Detail" }}
                    />
                </div>

                {/* Columna de Detalles */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-2">{pizza.name}</h1>
                    <p className="text-2xl font-bold text-red-600 mb-6 border-b pb-4">
                        {formatCurrency(pizza.price)}
                    </p>
                    
                    {error && (
                         <div className="p-3 mb-4 text-sm bg-yellow-100 border border-yellow-400 text-yellow-800 rounded-lg font-semibold">
                            {error}
                         </div>
                    )}


                    <h2 className="text-xl font-semibold text-gray-700 mb-3">Descripción:</h2>
                    <p className="text-gray-600 mb-6">{pizza.desc || "Descripción detallada no disponible."}</p>

                    <h2 className="text-xl font-semibold text-gray-700 mb-3">Ingredientes:</h2>
                    <ul className="list-disc list-inside space-y-1 mb-8">
                        {(pizza.ingredients || []).map((ing, index) => (
                            <li key={index} className="text-gray-600 capitalize">
                                {ing}
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={handleAddToCart}
                        disabled={!token}
                        className={`font-bold py-3 px-6 rounded-lg transition duration-300 shadow-xl flex items-center justify-center space-x-2 ${
                            !token 
                                ? 'bg-gray-400 cursor-not-allowed text-gray-700'
                                : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}
                        title={!token ? "Debes iniciar sesión para añadir al carrito" : "Añadir la pizza al carrito"}
                    >
                        <FaShoppingCart />
                        <span>Añadir al Carrito</span>
                    </button>
                    {!token && (
                        <p className="text-red-500 text-sm mt-2 text-center">
                            Inicia sesión para poder comprar.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetallePizza;