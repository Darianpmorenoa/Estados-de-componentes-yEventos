import React, { createContext, useContext, useState, useEffect } from 'react';

const PizzaContext = createContext();

export const usePizza = () => {
    return useContext(PizzaContext);
};

export const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const response = await fetch('/pizzas.json'); 

                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status} - El archivo JSON no se cargó correctamente.`);
                }
                
                const data = await response.json();
                setPizzas(data);

            } catch (err) {
                console.error("Error al cargar las pizzas:", err.message);
                setError("No se pudo cargar el menú. Asegúrate de que pizzas.json esté en la carpeta /public y tenga el formato JSON correcto.");
                setPizzas([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPizzas();
    }, []);

    const getPizzaById = (id) => {
        return pizzas.find(pizza => pizza.id === id);
    };

    const value = {
        pizzas,
        loading,
        error,
        getPizzaById,
    };

    return (
        <PizzaContext.Provider value={value}>
            {children}
        </PizzaContext.Provider>
    );
};