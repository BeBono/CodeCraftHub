const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
dotenv.config();

const app = express();

// Middleware
app.use(express.json());  // For parsing JSON bodies
app.use(cors());          // For handling Cross-Origin Resource Sharing

// Connect to the database
connectDB();

// Routes
app.use('/api/users', userRoutes); // Register user-related routes

module.exports = app;
