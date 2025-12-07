import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './Context/CartContext.jsx';
import { PizzaProvider } from './Context/PizzaContext.jsx';
import { AuthProvider } from './Context/AuthContext.jsx'; 

const rootElement = document.getElementById('root');

if (rootElement) {
  
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AuthProvider> 
        <PizzaProvider> 
          <CartProvider> 
            <App /> 
          </CartProvider>
        </PizzaProvider>
      </AuthProvider>
    </React.StrictMode>,
  );
} else {
  console.error("Error: No se encontró el elemento 'root' en el HTML.");
}