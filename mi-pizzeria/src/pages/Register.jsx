import React from 'react';

const Register = () => {
  return (
    <div className="container mx-auto p-4 flex justify-center mt-10">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-6">Crear Cuenta</h1>
        <form className="space-y-4">
          <input type="email" placeholder="Correo Electrónico" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" />
          <input type="password" placeholder="Contraseña" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" />
          <button type="submit" className="w-full p-3 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 transition duration-300">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;