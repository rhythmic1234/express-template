const ERROR_TYPES = require('../../constants/ErrorTypes');
const { ValidationError, AuthorizationError, BrokerError } = require('../../models/CustomError');
const { ErrorResponse } = require('../../models/Response');
const { logger } = require('../../services/logger');

module.exports = (err, req, res, next) => {
    logger.error(`[DefaultErrorHandler] for request [${req.method}] ${req.originalUrl} => ${err.message} => ${JSON.stringify(err.stack)}`);
    let responseObject;
    let httpStatus;
    if (err instanceof AuthorizationError) {
        httpStatus = 403;
        responseObject = new ErrorResponse(ERROR_TYPES.NO_SUCH_ROUTE);
    }
    else if (err instanceof ValidationError) {
        httpStatus = 400;
        responseObject = new ErrorResponse(ERROR_TYPES.INVALID_PARAMETER);
    }
    else if (err instanceof BrokerError) {
        httpStatus = 400;
        responseObject = new ErrorResponse(ERROR_TYPES.BROKER_ERROR);
    }
    else {
        httpStatus = 500;
        responseObject = new ErrorResponse(ERROR_TYPES.UNHANDLED_ERROR);
    }
    res.status(httpStatus).json(responseObject);
}