const express = require('express')
const cors = require('cors')
// const connect = require('mongoose').connect
require('dotenv').config()
const userRouter = require('./routes/user-router')
const postRouter = require('./routes/post-router')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/v1/users/', userRouter)
app.use('/api/v1/posts/', postRouter)

app.get('/', (req, res) => res.send('Hello world'))

module.exports = app