const DATA_TYPES = require('../constants/DataTypes');


/**
 * Skeleton for data fetching operations with caching functions
 * @class
 */
class FetcherWithCache {

    /**
     * @param {Object} params
     * @param {BrokerAdapter} params.brokerAdapter 
     * @param {CacheService} params.cacheService 
     * @constructor
     */
    constructor({ brokerAdapter, cacheService }) {
        this.brokerAdapter = brokerAdapter;
        this.cacheService = cacheService;
    }
    
    /**
     * @param {Object} params
     * @return {Promise<PriceData>}
     * @throws {BrokerError}
     */
    async fetchPrice({ parity, atDate }) {
        // TODO: log here !
        const cached = await this.cacheService.get({ parity, atDate, dataType: DATA_TYPES.PRICE });
        if (cached) {
            return cached;
        }
        // Otherwise, fetch via brokerAdapter
        const data = await this.brokerAdapter.fetchPrice({ parity, atDate });
        await this.cacheService.set({ parity, atDate, dataType: DATA_TYPES.PRICE, data })
        return data;
    }

}


module.exports = {
    FetcherWithCache,
}
