const { createNewPost, deletePost, editPost, getAllPosts, getOnePost } = require('./controller')
const getId = require('../../middlewares/get-id')

module.exports = router => {
    router
        .get('/posts/', getAllPosts)
        .post('/post', createNewPost);

    router.route('/post/')
        .get(getId, getOnePost)
        .patch(getId, editPost)
        .delete(getId, deletePost)
}