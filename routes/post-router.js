const express = require('express')
// Middleware
const getId = require('../middlewares/get-id')
// Controllers
const addPost = require('../controllers/post-controllers/add-post')
const getPosts = require('../controllers/post-controllers/get-posts')
const editPost = require('../controllers/post-controllers/edit-post')
const deletePost = require('../controllers/post-controllers/delete-post')

const postRouter = express.Router()

postRouter.route('/')
          .get(getPosts)
          .post(addPost)
          .patch(editPost)
          .delete(deletePost)

postRouter.route('/:id')
          .get(getPosts)
          .post(addPost)
          .patch(editPost)
          .delete(deletePost)


module.exports = postRouter