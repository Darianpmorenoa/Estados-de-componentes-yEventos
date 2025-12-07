import React from 'react';
import { useAuth } from '../Context/AuthContext.jsx';
import { FaUserCircle } from 'react-icons/fa';

const Profile = () => {
    const { token, logout } = useAuth(); 

    return (
        <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-2xl text-center">
            <FaUserCircle className="text-8xl text-red-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Mi Perfil</h1>
            <p className="text-lg text-gray-600 mb-6">
                ¡Bienvenido, Usuario Logueado!
            </p>
            
            <div className="text-left space-y-3 mb-8 p-4 bg-gray-50 rounded-lg border">
                <p className="font-semibold text-gray-700">Estado de Autenticación:</p>
                <p className={`font-mono text-sm p-2 rounded ${token ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    Token Activo: {token ? 'true' : 'false (Error: No deberías estar aquí sin token!)'}
                </p>
            </div>

            <button
                onClick={logout}
                className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition duration-300"
            >
                Cerrar Sesión
            </button>
        </div>
    );
};

export default Profile;