import express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from '@middleware/errorMiddleware';
import goalRoutes from '@routes/goalRoutes'
import mongoConnect from '@config/mongoConnect';
dotenv.config();

const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.use('/api/goals', goalRoutes);

app.use(errorHandler);
// mongodb connect
mongoConnect(process.env.MONGO_URI, port, app);