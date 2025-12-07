import React from 'react';
import { useAuth } from '../Context/AuthContext.jsx';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoutes = ({ children, requiresAuth = false, redirectIfAuth = false }) => {
    const { token } = useAuth();
    const location = useLocation();
    
    if (requiresAuth && !token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (redirectIfAuth && token) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoutes;