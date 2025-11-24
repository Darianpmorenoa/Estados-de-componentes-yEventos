import React from 'react';

const Profile = () => {
  
  const staticEmail = "usuario.ejemplo@pizzeria.cl";

  const handleLogout = () => {
    alert("¡Sesión cerrada! (La lógica real se implementará más adelante).");
    console.log("Cerrar sesión estático activado.");
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-red-600">
        <h1 className="text-3xl font-extrabold text-red-700 mb-6 text-center">
          Tu Perfil
        </h1>

        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="text-gray-500 font-medium">Email:</span>
            <span className="text-gray-800 font-semibold">{staticEmail}</span>
          </div>
          
          <div className="text-sm text-gray-500 text-center pt-2">
            Estado actual es de "Usuario Invitado".
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-red-600 transition duration-300 shadow-md transform hover:scale-[1.01]"
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;