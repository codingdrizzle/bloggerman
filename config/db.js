const { connect, connection } = require('mongoose')
const logger = require('../logger')

const database = () => {
    connect(process.env.MONGODB_URL)

    connection.on('connected', () => logger.info('Database connected successfully'))
    connection.on('error', () => logger.info('Database connected successfully'))
}

module.exports = database