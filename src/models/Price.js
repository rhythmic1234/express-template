/**
 * Model for price information
 */
class PriceData {
    /**
     * @param {Object} params
     * @param {String} params.parity
     * @param {String} params.value
     * @param {String} params.atDate
     * @constructor
     */
    constructor({ parity, value, atDate }) {
        this.parity = parity;
        this.value = value;
        this.atDate = new Date(Date.parse(atDate));
    }
}

module.exports = {
    PriceData,
}