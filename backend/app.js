const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { db } = require('./db/db');
const {readdirSync} = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const server = async () => {
    try {
        await db();
        app.listen(PORT, () => {
            console.log(`Listening to port: ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        process.exit(1); // Exit with failure
    }
};

server();