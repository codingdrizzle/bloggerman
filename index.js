const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send('Hello world'))

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('connected to mongodb'))
    .catch((e) => console.error(e))

app.listen(PORT, () => console.log(`Server running on ${PORT}`))