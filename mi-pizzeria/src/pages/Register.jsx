import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext.jsx';
import Navbar from '../components/Navbar.jsx';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); 

        if (password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        const userData = {
            id: `user-${Date.now()}`, 
            email: email,
            name: name,
            role: 'client'
        };

        login(userData); 
        navigate('/'); 
    };

    return (
        <div>
            <Navbar />
            <main className="flex justify-center items-center py-20 min-h-[calc(100vh-64px)] bg-gray-50">
                <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border-t-4 border-red-700">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                        Crear Cuenta
                    </h1>
                    
                    <form onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                                <p className="font-bold">Error de Validación</p>
                                <p className="text-sm">{error}</p>
                            </div>
                        )}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Nombre Completo
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150"
                                placeholder="Tu Nombre"
                                required
                            />
                        </div>
                        
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Correo Electrónico
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150"
                                placeholder="tu@email.com"
                                required
                            />
                        </div>
                        
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Contraseña
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150"
                                placeholder="Mínimo 6 caracteres"
                                required
                            />
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200 w-full"
                            >
                                Crear Cuenta
                            </button>
                        </div>
                    </form>
                    
                    <div className="mt-6 text-center text-sm">
                        ¿Ya tienes cuenta? 
                        <span 
                            onClick={() => navigate('/login')} 
                            className="text-red-600 hover:text-red-800 font-bold cursor-pointer ml-1 transition duration-150"
                        >
                            Iniciar Sesión
                        </span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Register;