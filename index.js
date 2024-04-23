const express = require('express');
const TehModel = require('./tehC');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 3100;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

//Connect to DB and start server
mongoose.connect(process.env.MONGO_URI, options)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB:", error);
    });

/**
 * Get request endpoint
 */
app.get('/api/data', async (request, response) => {
    try {
        const data = await TehModel.find();
        response.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        response.status(500).json({ error: 'Cannot fetch data' });
    }
});

/**
 * 404
 */
app.get('*', (request, response) => {
    response.status(404).json({ error: 'Not found' });
});
