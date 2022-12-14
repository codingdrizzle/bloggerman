const winston = require('winston')

const logConfiguration = {
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.label({
                    label: `✅ `,
                }),
                winston.format.printf(
                    alert =>
                        ` ${alert.label}${alert.level} ====> ${alert.message}`,
                ),
            ), 
        }),
        new winston.transports.Console({
            level: 'error',
            format: winston.format.combine(
                winston.format.label({
                    label: `⛔ `,
                }),
                winston.format.printf(
                    alert =>
                        ` ${alert.label}${alert.level} ====> ${alert.message}`,
                ),
            ), 
        }),
        
    ],
}

module.exports = logConfiguration