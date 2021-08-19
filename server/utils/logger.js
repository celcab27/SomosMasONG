/**
 * @module utils
 */
const winston = require('winston');

const insertDate = winston.format((info) => {
    info.message = `${new Date().toISOString()} ${info.message}`
    return info
})

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
  }

winston.addColors(colors)

/**
 * Logger will show in console and save in logs/aplication-logs.log file important information about what the server is doing.
 * 'info', 'warn', 'error' and 'debug' got their own colors.
 * To use the logger just import it and use it as a function, follow the example
 * @example
 * const log = require('./utils/logger')
 * ...
 * log.info('User sended') //This will print in console = info: User sended
 * log.warn('Email already exist!') // '' '' warn: Email already exist!
 * log.error(error) // error: [The error message]
 * log.debug(req.body) // debug:[{body}] to use it as console.log
 */

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level:'debug',
            handleExceptions: true,
            format: winston.format.combine(
                winston.format.colorize({all: true}),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            level: 'info',
            handleExceptions: true,
            format: winston.format.combine(
                insertDate(),
               winston.format.simple()
            ), 
            maxsize: 5120000, //5Mb
            maxFiles:5,
            filename: `${__dirname}/../logs/aplication-logs.log`
        })
    ]
});

module.exports = logger;
