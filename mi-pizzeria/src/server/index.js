import express from 'express';
import cors from 'cors'; 
import pizzaRoutes from './routes/pizza.route.js'; 

const app = express();
const PORT = 5001; 

app.use(cors({
origin: 'http://localhost:5173', 
methods: ['GET', 'POST', 'PUT', 'DELETE'],
credentials: true,
}));

app.use(express.json());


app.use('/api', pizzaRoutes); 

app.listen(PORT, () => {
console.log(`servidor corriendo en el puerto ${PORT}`);
});