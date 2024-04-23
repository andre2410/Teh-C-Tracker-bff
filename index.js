const express = require('express');
const router = express.Router();
const {mongodbConnection} = require('./database');
require('dotenv').config();

const app = express();
const port = 3100;

mongodbConnection().then(() => {
    app.listen(port, () =>{
        console.log(`Server listening on port ${port}`);
    });
}).catch((error) => {
    console.log("Connection failed: ", error);
});

/**
 * Get request endpoint
 */
router.get('/api/data', async (req, res) => {
    try {
        const tehCData = await mongodbConnection();
        const data = await tehCData.find();
        res.json(data);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json({error: 'Cannot fetch data'});
    }
});

module.exports = router;