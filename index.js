const express = require('express')
const cors = require('cors')
const {connect} = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json())

connect(process.env.MONGODB_URL)
    .then(() => console.log('connected to mongodb'))
    .catch((e) => console.error(e))

app.listen(PORT, () => console.log(`Server running on ${PORT}`))