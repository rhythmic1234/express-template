const ORDER_TYPES = require('../constants/OrderTypes');

/**
 * Model for individual orders recorded at given date
 */
class AggregatedOrdersAtPrice {
    /**
     * 
     * @param {Object} params
     * @param {String} params.type - Either ask or bid. @see OrderTypes
     * @param {String} params.price - The price at orders are filled
     * @param {String} params.totalCount - The total amount in terms of BASE currency (not quote currency)
     */
    constructor({ type, price, totalCount, atDate}) {
        this.type = type;
        this.price = price;
        this.totalCount = totalCount;
        this.atDate = atDate;
    }
}

/**
 * Model for orderbook information
 */
class OrderbookData {
    /**
     * @param {Object} params
     * @param {String} params.parity
     * @param {Array} params.ask
     * @param {Date} params.atDate
     * @constructor
     */
    constructor({ parity, ask, bid, atDate }) {
        this.parity = parity;
        this.ask = ask.map(x => new AggregatedOrdersAtPrice({
            type: ORDER_TYPES.ASK,
            // TODO
        }));
        this.bid = ask.map(x => new AggregatedOrdersAtPrice({
            type: ORDER_TYPES.BID,
            // TODO
        }));
        this.atDate = atDate;
    }
}

module.exports = {
    AggregatedOrdersAtPrice,
    OrderbookData,
}