const winston = require('winston')

const logConfiguration = require('./config')
const logger = winston.createLogger(logConfiguration)

module.exports = logger
