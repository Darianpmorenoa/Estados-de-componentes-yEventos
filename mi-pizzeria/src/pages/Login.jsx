import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext.jsx';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
   
    const { login } = useAuth(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "user@mail.com" && password === "1234") {
            const mockToken = "jwt-12345-admin-token";
            const userData = { email, name: "Darian", role: "admin" };
            
            login(userData, mockToken); 
            
            alert(`Bienvenido de vuelta, ${userData.name}!`);
            navigate('/'); 
            alert('Error: Credenciales inválidas. Intenta con user@mail.com y 1234.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-sm p-8 bg-white shadow-xl rounded-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-red-700">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Correo Electrónico
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="user@mail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <button
                            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-150"
                            type="submit"
                        >
                            Ingresar
                        </button>
                        <p className="mt-4 text-sm text-gray-600">
                            ¿No tienes cuenta? <Link to="/register" className="text-red-600 hover:text-red-800 font-bold">Regístrate</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;