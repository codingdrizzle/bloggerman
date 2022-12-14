require('dotenv').config()
const app = require('./server')
const database = require('./config/db')


// const app = express()
const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    database()
    console.log(`Server running on ${PORT}`)
})