const ERROR_TYPES = require('../constants/ErrorTypes');
const { DevelopmentError } = require('../models/CustomError');

/**
 * Skeleton for cache related operations
 */
class CacheService {
    /**
     * For getting cached data
     * @param {Object} params
     * @return {Promise<Object|null>}
     */
    async get(params) {
        throw new DevelopmentError(ERROR_TYPES.METHOD_NOT_IMPLEMENTED);
    }
    
    /**
     * For saving cached data
     * @param {Object} params
     * @async
     */
    async set(params) {
        throw new DevelopmentError(ERROR_TYPES.METHOD_NOT_IMPLEMENTED);
    }
}


/**
 * Dummy class for not using any cache
 */
class NoCacheService {
    /**
     * For getting cached data
     * @param {Object} params
     * @return {Promise<null>}
     */
    async get(params) {
        return Promise.resolve(null);
    }
    
    /**
     * For saving cached data
     * @param {Object} params
     * @async
     */
    async set(params) {
        return Promise.resolve(null);
    }
}

module.exports = {
    CacheService,
    NoCacheService,
}