const { addComment, deleteComment, editComment, getAllComment, getOneComment } = require('./controller')
const getId = require('../../middlewares/get-id')

module.exports = router => {
    router.route('/comments/')
        .get(getAllComment)
    router.route('/comment/')
        .post(addComment)
    router.route('/comment/:id')
        .get(getId, getOneComment)
        .patch(getId, editComment)
        .delete(getId, deleteComment)
}