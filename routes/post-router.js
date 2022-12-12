const express = require('express')
// Middleware
const getId = require('../middlewares/get-id')
// Controllers
const addPost = require('../controllers/post-controllers/add-post')
const getPosts = require('../controllers/post-controllers/get-posts')
const editPost = require('../controllers/post-controllers/edit-post')
const deletePost = require('../controllers/post-controllers/delete-post')

const postRouter = express.Router()

postRouter.get('/', getPosts)
postRouter.post('/new', getId, addPost)
postRouter.patch('/edit', getId, editPost)
postRouter.delete('/delete', getId, deletePost)

module.exports = postRouter