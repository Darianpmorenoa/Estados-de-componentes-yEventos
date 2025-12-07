import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(true); 
    const logout = () => {
        setToken(false);
        console.log("Usuario ha cerrado sesión. Token es ahora false.");
    };

    const login = () => {
        setToken(true);
        console.log("Usuario ha iniciado sesión. Token es ahora true.");
    };

    const value = {
        token,
        logout,
        login,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};