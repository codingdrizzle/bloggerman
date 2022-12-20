const { addReview, getOneReview, getAllReviews, deleteReview, editReview } = require('./controller')
const getId = require('../../middlewares/get-id')

module.exports = router => {
    router.route('/reviews/')
        .get(getAllReviews)
    router.route('/review/')
        .post(addReview)
    router.route('/review/:id')
        .get(getId, getOneReview)
        .patch(getId, editReview)
        .delete(getId, deleteReview)
}