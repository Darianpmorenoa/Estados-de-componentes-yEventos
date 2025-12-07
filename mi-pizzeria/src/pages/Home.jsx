import React from 'react';
import Header from '../components/Header.jsx';
import CardPizza from '../components/CardPizza.jsx';
import { usePizza } from '../Context/PizzaContext.jsx';

const Home = () => {
  const { pizzas, loading, error } = usePizza();

  if (loading) {
    return (
      <div className="text-center py-20">
        <Header />
        <h2 className="text-2xl font-semibold text-blue-500">Cargando menú...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <Header />
        <h2 className="text-2xl font-semibold text-red-600">
          ⚠️ {error}
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Por favor, revisa la consola para ver los detalles del error de conexión.
        </p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;