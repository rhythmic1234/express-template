const logger = require('./services/logger');
const app = require('./app');
require('dotenv').config();

const {
    HOST,
    PORT,
} = process.env;


app.listen(PORT, HOST, () => {
    logger.info(`⚡️ Server has started at ${HOST}:${PORT}`);
});