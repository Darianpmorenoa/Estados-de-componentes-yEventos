import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import DetallePizza from './pages/DetallePizza.jsx'; 
import Cart from './pages/Cart.jsx'; 
import Profile from './pages/Profile.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import NotFound from './pages/NotFound.jsx';
import { CartProvider } from './Context/CartContext.jsx'; 

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar /> 
        <main className="min-h-screen bg-gray-50 font-inter">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pizza/:id" element={<DetallePizza />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;