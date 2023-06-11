const ERROR_TYPES = require('../constants/ErrorTypes');
const { DevelopmentError } = require('../models/CustomError');

/**
 * Skeleton class for broker APIs
 * @class
 */
class BrokerAdapter {

    /**
     * Fetches price of given parity at given date. If no date is provided, fetches the current price
     * @param {Object} params 
     * @return {Promise<PriceData>}
     * @throws {BrokerError}
     */
    async fetchPrice(params) {
        throw new DevelopmentError(ERROR_TYPES.METHOD_NOT_IMPLEMENTED);
    }

}


module.exports = {
    BrokerAdapter,
}