const { logger } = require('../../services/logger');

module.exports = ((req, res, next) => {
    logger.info(`=> [${req.method}] ${req.originalUrl}`);
    // You can also log http body or query parameters here
    next();
});
