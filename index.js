require('dotenv').config()
const app = require('./server')
const database = require('./config/db')
const connect = require('mongoose').connect


// const app = express()
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    database()
    console.log(`Server running on ${PORT}`)
})