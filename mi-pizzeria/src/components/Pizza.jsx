import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import { useCart } from '../Context/CartContext.jsx';
import { usePizza } from '../Context/PizzaContext.jsx';

const formatCurrency = (amount) => {
    return amount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
};

const Pizza = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { pizzas } = usePizza();

    const [pizza, setPizza] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPizzaDetails = async () => {
            setLoading(true);
            try {
                const foundPizza = pizzas.find(p => p.id === id);

                if (foundPizza) {
                    setPizza(foundPizza);
                } else {
                    alert("Pizza no encontrada.");
                    navigate('/'); 
                }
            } catch (error) {
                console.error("Error al obtener el detalle de la pizza:", error);
                alert("Ocurrió un error al cargar los detalles.");
                navigate('/');
            } finally {
                setLoading(false);
            }
        };

        if (id && pizzas.length > 0) {
            fetchPizzaDetails();
        } else if (pizzas.length === 0) {
            setLoading(true);
        }
    }, [id, pizzas, navigate]);


    if (loading) {
        return (
            <div className="text-center py-20">
                <Navbar />
                <p className="text-xl font-semibold">Cargando detalles de la pizza...</p>
            </div>
        );
    }

    if (!pizza) {
        return null; 
    }

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-4 sm:p-8">
                <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-2xl overflow-hidden mt-10">
                    
                    {/* Columna de Imagen */}
                    <div className="md:w-1/2">
                        <img 
                            src={pizza.img} 
                            alt={pizza.name} 
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/FF5733/FFFFFF?text=Pizza" }}
                        />
                    </div>

                    {/* Columna de Detalles */}
                    <div className="md:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
                        <h1 className="text-4xl font-extrabold text-red-700 mb-4 border-b pb-2">
                            {pizza.name}
                        </h1>

                        <p className="text-gray-600 mb-6 text-lg">
                            {pizza.desc}
                        </p>

                        <h2 className="text-xl font-bold text-gray-800 mb-3">
                            Ingredientes:
                        </h2>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6 pl-4">
                            {pizza.ingredients.map((ing, index) => (
                                <li key={index} className="capitalize flex items-center">
                                    <span className="text-red-500 mr-2">🍅</span> {ing}
                                </li>
                            ))}
                        </ul>

                        <div className="flex justify-between items-center mt-6 pt-4 border-t">
                            <span className="text-3xl font-extrabold text-green-700">
                                Precio: {formatCurrency(pizza.price)}
                            </span>
                            <button
                                onClick={() => {
                                    addToCart(pizza);
                                    alert(`¡${pizza.name} añadida al carrito!`);
                                }}
                                className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg shadow-xl transition duration-200 transform hover:scale-105 flex items-center space-x-2"
                            >
                                <span className="text-xl">🛒</span>
                                <span>Añadir al Carrito</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pizza;