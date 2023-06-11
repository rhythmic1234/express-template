const express = require('express');
require('dotenv').config();

const loggingMiddleware = require('./api/middlewares/logging');
const authorizationMiddleware = require('./api/middlewares/authorization');
const defaultErrorHandler = require('./api/middlewares/defaultErrorHandler');
const pricesRoute = require('./api/routes/prices');

const app = express();

// Order is important. First we need to use logging
app.use(loggingMiddleware);

app.use(authorizationMiddleware);

app.use('/prices', pricesRoute);

// Order is important. The last route should be the default error handler
app.use(defaultErrorHandler);

module.exports = app;