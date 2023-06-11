const { PriceData } = require('../models/Price');
const { BrokerAdapter } = require('./BrokerAdapter');
const {
    USDMClient,
} = require('binance');
require('dotenv').config();


/**
 * Binance API wrapper
 * @class
 * @extends BrokerAdapter
 */
class BinanceAdapter extends BrokerAdapter {

    /**
     * @param {Object=} params
     * @param {String=} params.apiKey
     * @param {String=} params.apiSecret
     * @constructor
     */
    constructor({ apiKey, apiSecret } = {}) {
        super();
        this.client = new USDMClient({
            api_key: apiKey || process.env.APIKEY,
            api_secret: apiSecret || process.env.APISECRET,
            beautifyResponses: true
        });
    }
    
    /**
     * Fetches price of given parity at given date. If no date is provided, fetches the current price
     * @param {Object} params
     * @return {Promise<PriceData>}
     * @throws {BrokerError}
     */
    async fetchPrice({ parity, atDate, limit }) {

        return this.client.getMarkPrice({
            symbol: parity,
            limit,
        })
        .then(({ symbol, markPrice, time }) => new PriceData({
            parity: symbol,
            value: markPrice,
            atDate: time
        }));
    }
}

module.exports = BinanceAdapter;