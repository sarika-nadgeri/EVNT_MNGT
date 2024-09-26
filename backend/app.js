import express from 'express';
import { dbConnection } from './database/dbConnection.js';
import dotenv from 'dotenv';
import messageRouter from './router/messageRouter.js';
import cors from 'cors';

// Load environment variables
dotenv.config({ path: './config/config.env' });

const app = express();

// Configure CORS middleware
app.use(cors({
    origin: process.env.FRONTEND_URL, // Ensure this matches the frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
}));

// Ensure CORS preflight requests are handled
app.options('*', cors());

app.use(express.json()); // to parse JSON data
app.use(express.urlencoded({ extended: true })); // to handle form data

app.use("/api/v1/message", messageRouter);

dbConnection();

export default app;
