const { addReview, getOneReview, getAllReviews, deleteReview, editReview } = require('./controller')
const getId = require('../../middlewares/get-id')

module.exports = router => {
    router.get('/reviews/', getAllReviews)
        .post('/review/', addReview)

    router.route('/review/:id')
        .get(getId, getOneReview)
        .patch(getId, editReview)
        .delete(getId, deleteReview)
}