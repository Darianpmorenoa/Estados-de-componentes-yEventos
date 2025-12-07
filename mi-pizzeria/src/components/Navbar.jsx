import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../Context/CartContext.jsx';
import { useAuth } from '../Context/AuthContext.jsx';
import { FaPizzaSlice, FaShoppingCart, FaUser, FaSignInAlt, FaSignOutAlt, FaHome, FaReceipt } from 'react-icons/fa';

const Navbar = () => {
    const { total } = useCart();
    const { token, logout, login } = useAuth(); 


    const formatCurrency = (amount) => {
        return amount.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
    };

    const baseLinkStyle = "px-3 py-2 rounded-lg text-sm font-medium transition duration-150 flex items-center space-x-1";
    const activeLinkStyle = "bg-red-700 text-white shadow-md";
    const inactiveLinkStyle = "text-gray-300 hover:bg-red-600 hover:text-white";

    return (
        <nav className="bg-gray-800 shadow-xl sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <NavLink to="/" className="flex-shrink-0 flex items-center space-x-2 text-xl font-bold text-white mr-6">
                            <FaPizzaSlice className="text-red-500" />
                            <span>Mamma Mia!</span>
                        </NavLink>
                        
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                            <NavLink
                                to="/"
                                className={({ isActive }) => 
                                    `${baseLinkStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`
                                }
                            >
                                <FaHome />
                                <span>Home</span>
                            </NavLink>

                            {!token && (
                                <>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) => 
                                            `${baseLinkStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`
                                        }
                                    >
                                        <FaSignInAlt />
                                        <span>Login</span>
                                    </NavLink>
                                    <NavLink
                                        to="/register"
                                        className={({ isActive }) => 
                                            `${baseLinkStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`
                                        }
                                    >
                                        <FaReceipt />
                                        <span>Register</span>
                                    </NavLink>
                                </>
                            )}

                            {token && (
                                <>
                                    <NavLink
                                        to="/profile"
                                        className={({ isActive }) => 
                                            `${baseLinkStyle} ${isActive ? activeLinkStyle : inactiveLinkStyle}`
                                        }
                                    >
                                        <FaUser />
                                        <span>Profile</span>
                                    </NavLink>
                                    
                                    <button
                                        onClick={logout} 
                                        className={`${baseLinkStyle} text-gray-300 hover:bg-red-600 hover:text-white cursor-pointer`}
                                    >
                                        <FaSignOutAlt />
                                        <span>Logout</span>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center">
                        <NavLink
                            to="/cart"
                            className={({ isActive }) => 
                                `${baseLinkStyle} bg-red-500 hover:bg-red-400 text-white font-extrabold ${isActive ? 'ring-2 ring-white ring-offset-2 ring-offset-gray-800' : ''}`
                            }
                        >
                            <FaShoppingCart className="mr-1" />
                            <span>Total: {formatCurrency(total)}</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;