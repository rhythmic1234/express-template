
/**
 * Stardard error response format
 */
class ErrorResponse {
    /**
     * @param {Object} params
     * @param {String} params.message - message to be shown to user
     * @param {String} params.code - custom code for internal debugging. Used not to send implementation details to user
     * @constructor
     */
    constructor({ message, code }) {
        this.error = {
            message,
            code,
        };
    }
}


/**
 * Stardard data response format
 */
class DataResponse {
    /**
     * @param {Object} data - Requested data. If single item is returned it will be an object. Otherwise it is an array
     * @constructor
     */
    constructor(data) {
        this.data = data;
    }
}


module.exports = {
    ErrorResponse,
    DataResponse,
}