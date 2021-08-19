const morgan = require('morgan');
const log = require('../utils/logger');

const stream = morgan.StreamOptions = {
    write: (message) => log.http(message)
};

const morganMiddleware = morgan(
    ":method :url :status :res[content-length] - :response-time ms",
    { stream }
);

module.exports = morganMiddleware
