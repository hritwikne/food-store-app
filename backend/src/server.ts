import express from 'express';
import cors from 'cors';
import { sample_foods } from './data';

const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200']
}));

app.get('/api/foods', (req, res) => {
    res.send(sample_foods);
});

app.get("/api/foods/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(foods);
});

app.get("/api/foods/:id", (req, res) => {
    const id = req.params.id;
    const food = sample_foods.find(food => food.id === id);
    if (food) {
        res.send(food);
    } else {
        res.status(404).send({ error: 'Food not found' });
    }
});

const port = 5000;
app.listen(port, () => {
    console.log("Server started on port 5000");
});