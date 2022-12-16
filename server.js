const express = require('express')
const cors = require('cors')
// const connect = require('mongoose').connect
require('dotenv').config()

const app = express()
const router = express.Router()

app.use(cors())
app.use(express.json())
// app.use('/api/v1/users/', userRouter)
// app.use('/api/v1/posts/', postRouter)
app.use('/api/v1/', router)

app.get('/', (req, res) => res.send('Hello world'))
const userRouter = require('./app/user/route')
const postRouter = require('./app/post/route')
userRouter(router)
postRouter(router)

module.exports = app