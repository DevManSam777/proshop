import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connetDB from './config/db.js';
import { doesNotThrow } from 'assert';
import productRoutes from './routes/productRoutes.js';
const port = process.env.PORT || 5000;

connetDB();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});