const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 3100;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const tehC_routes = require('./routes/tehC_routes');

//Use routes
app.use('/api', tehC_routes);

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
 * 404
 */
app.get('*', (request, response) => {
    response.status(404).json({ error: 'Not found' });
});
