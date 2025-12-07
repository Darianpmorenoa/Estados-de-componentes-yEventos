import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './Context/AuthContext.jsx';
import { CartProvider } from './Context/CartContext.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import DetallePizza from './pages/DetallePizza.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';
import NotFound from './pages/NotFound.jsx';

const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
    return token ? children : <Navigate to="/login" replace />;
};

const RedirectIfLoggedIn = ({ children }) => {
    const { token } = useAuth();
    return token ? <Navigate to="/" replace /> : children;
};

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <CartProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
            
                        <Route path="/pizza/:id" element={<DetallePizza />} />

                        <Route 
                            path="/login" 
                            element={<RedirectIfLoggedIn><Login /></RedirectIfLoggedIn>} 
                        />
                        <Route 
                            path="/register" 
                            element={<RedirectIfLoggedIn><Register /></RedirectIfLoggedIn>} 
                        />

                        <Route 
                            path="/profile" 
                            element={<ProtectedRoute><Profile /></ProtectedRoute>} 
                        />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </CartProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;