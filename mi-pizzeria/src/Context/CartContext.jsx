import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

const calculateTotal = (cart) => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

 
    const total = useMemo(() => calculateTotal(cart), [cart]);

    const addToCart = (pizza) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === pizza.id);

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === pizza.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...pizza, quantity: 1 }];
            }
        });
    };

    // Función para aumentar la cantidad
    const increaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Función para disminuir la cantidad
    const decreaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            ).filter(item => item.quantity > 0) // Opcional: remover si llega a 0
        );
    };
    
    // Función para remover del carrito
    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    // Función para vaciar el carrito
    const clearCart = () => {
        setCart([]);
    };

    // Objeto de valor del contexto
    const contextValue = {
        cart,
        total,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};