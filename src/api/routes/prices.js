'use strict';
const express = require('express');
const { FetcherWithCache } = require('../../services/FetcherWithCache');
const BinanceAdapter = require('../../services/BinanceAdapter');
const { DataResponse } = require('../../models/Response');
const { NoCacheService } = require('../../services/CacheService');
const { logger } = require('../../services/logger');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/:parity', async (req, res, next) => {
    try {
        const { parity } = req.params;
        logger.info(`GET /prices/${parity} received.`);
        const brokerAdapter = new BinanceAdapter();
        const cacheService = new NoCacheService();
        const fetcher = new FetcherWithCache({ brokerAdapter, cacheService });
        
        const data = await fetcher.fetchPrice({ parity })
        res.status(200).json(new DataResponse(data));
    }
    catch (err) {
        next(err); // default error handler will handle this according to error class
    }
});

module.exports = router;
