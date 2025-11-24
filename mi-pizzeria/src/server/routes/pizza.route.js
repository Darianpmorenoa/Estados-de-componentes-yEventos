import express from 'express';
import { pizzas } from '../../src/data/Pizzas.js';
const pizzaRoute = express.Router();

pizzaRoute.get('/', (req, res) => {
    try {
        return res.status(200).json(pizzas); 
    } catch (error) {
        console.error("Error al obtener todas las pizzas:", error);
        return res.status(500).json({ error: "Error interno del servidor al obtener pizzas." });
    }
});

pizzaRoute.get('/:id', (req, res) => {
    const { id } = req.params;

    try {
        const pizza = pizzas.find(p => p.id === id);

        if (pizza) {
            return res.status(200).json(pizza); 
        } else {
            return res.status(404).json({ error: "Pizza no encontrada" });
        }
    } catch (error) {
        console.error(`Error al obtener pizza con ID ${id}:`, error);
        return res.status(500).json({ error: "Error interno del servidor." });
    }
});

export default pizzaRoute;