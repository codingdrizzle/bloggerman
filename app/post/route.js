const { createNewPost, deletePost, editPost, getAllPosts, getOnePost } = require('./controller')

module.exports = router => {
    router.get('/posts', getAllPosts)
        .post('/post', createNewPost)
        .route('/post/:id')
        .get(getOnePost)
        .patch(editPost)
        .delete(deletePost)
}