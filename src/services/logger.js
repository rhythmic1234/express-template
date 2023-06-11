const winston = require('winston');
require('winston-daily-rotate-file');
const { splat, combine, timestamp, printf } = winston.format;
const path = require('path');
const { LOG_LEVEL } = process.env;

const logFormatter = combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    splat(),
    printf(({ timestamp, level, message }) => {
        return [timestamp, level, message].join('\t');
    }),
);

/**
 *
 * @constant
 * @type {winston.Logger}
 * @summary Logger object created from winston library
 */
const logger = winston.createLogger({
    level: LOG_LEVEL || 'info',
    transports: [
        new winston.transports.DailyRotateFile({
            filename: path.join('logs', `%DATE%.log`),
            datePattern: 'YYYY-MM-DD',
            options: { flags: 'a', mode: 0o666 },
            prettyPrint: true,
            colorize: true,
            format: logFormatter,
        })
    ]
});


module.exports = {
    logger
};
