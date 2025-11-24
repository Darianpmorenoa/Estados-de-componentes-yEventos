import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../Context/CartContext.jsx'; 

const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.023.824l3.19 14.753a.934.934 0 0 0 .964.846h11.23a.934.934 0 0 0 .964-.846l3.19-14.753A1.034 1.034 0 0 0 22.115 3H4.015" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6h1.5a.75.75 0 0 1 0 1.5h-1.5V6Zm0 3h1.5a.75.75 0 0 1 0 1.5h-1.5V9Z" />
    </svg>
);

const Navbar = () => {
    const { calculateTotal } = useCart();
    const totalAmount = calculateTotal;
    const location = useLocation();

    const formatCurrency = (amount) => {
        return amount.toLocaleString('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0,
        });
    };

    // Rutas de navegación
    const navLinks = [
        { name: "🍕 Inicio", path: "/" },
        { name: "👤 Perfil", path: "/profile" },
        { name: "🔑 Login", path: "/login" },
        { name: "📝 Registro", path: "/register" },
    ];
    
    // Función de estilos activos
    const getLinkClass = (path) => {
        const isActive = location.pathname === path;
        return `px-4 py-2 rounded-lg font-semibold transition duration-200 ease-in-out ${
            isActive 
                ? 'bg-red-700 text-white shadow-inner' 
                : 'text-gray-300 hover:bg-red-700/50 hover:text-white'
        }`;
    };

    return (
        <nav className="bg-red-900 shadow-xl sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    
                    {/* Logotipo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-black text-white tracking-widest hover:text-red-300 transition duration-200">
                            MAMMA MIA!
                        </Link>
                    </div>

                    {/* Enlaces de Navegación */}
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.path} 
                                to={link.path} 
                                className={getLinkClass(link.path)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Botón del Carrito*/}
                    <Link
                        to="/cart"
                        className="flex items-center bg-green-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-[1.05] ml-4"
                    >
                        <CartIcon />
                        {/* Muestra el total formateado */}
                        <span>Total: {formatCurrency(totalAmount)}</span>
                    </Link>

                </div>
            </div>
            {/* Versión Móvil de los Enlaces */}
            <div className="sm:hidden border-t border-red-800 p-2">
                <div className="flex justify-around space-x-2">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.path} 
                            to={link.path} 
                            className={getLinkClass(link.path) + " text-sm flex-1 text-center"}
                        >
                            {link.name.split(' ')[1] || link.name} 
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;