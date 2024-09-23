const express = require('express');
const router = express.Router();
const TehModel = require('../models/tehC');

/**
 * GET DATA
 */
router.get('/tehC', async (request, response) => {
    try {
        const data = await TehModel.find();
        response.json(data);
    } catch (error) {
        response.status(500).json({ error: 'Cannot fetch data' });
    }
});

module.exports = router;