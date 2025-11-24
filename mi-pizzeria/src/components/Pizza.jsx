import React, { useState, useEffect } from 'react';
const PIZZA_ID = 'p001'; 

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `http://localhost:5001/api/pizzas/${PIZZA_ID}`;

  useEffect(() => {
    const fetchPizzaDetail = async () => {
      try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        setPizza(data); 
      } catch (err) {
        console.error(`Hubo un problema al obtener el detalle de la pizza ${PIZZA_ID}:`, err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzaDetail();
  }, []); 

  if (loading) {
    return <div className="text-center my-5">Cargando detalle de la pizza...</div>;
  }

  if (error || !pizza) {
    return <div className="alert alert-danger mx-5">Error: No se pudo cargar la pizza.</div>;
  }

  const { nombre, descripcion, precio, imagen, ingredientes } = pizza;

  return (
    <div className="container my-5">
      <div className="row border p-4 shadow-lg rounded">
        <div className="col-md-6">
          <img 
            src={imagen} 
            alt={nombre} 
            className="img-fluid rounded" 
            style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }} 
          />
        </div>
        
        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div>
            <h1 className="display-4 fw-bold">{nombre}</h1>
            <p className="lead border-bottom pb-3">{descripcion}</p>

            <h3 className="mt-4">Ingredientes:</h3>
            <ul>
              {ingredientes && ingredientes.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
              ))}
            </ul>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
            <span className="h3 fw-bold text-success">Precio: ${precio.toLocaleString()}</span>
            <button className="btn btn-danger btn-lg">
              🛒 Añadir al Carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;