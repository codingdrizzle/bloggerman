const { path } = require('../../server')
const Review = require('./model')

// Create
const createReview = async (data) => {
    return await Review.create({ ...data })
}

// Get a review
const getReview = async reviewId => {
    return await Review.find({ _id: reviewId })
        .populate({ path: 'reviewer', select: ['firstname', 'lastname'] })
        .populate({ path: 'postId', select: ['title', 'body', 'author', 'createdAt'] })
}


// Get all Reviews
const getReviews = async limit => {
    const options = {
        page: 1,
        limit: limit,
        sort: '-createdAt',
    }
    return await Review.find()
        .skip(options.page * options.limit)
        .limit(options.limit)
        .populate({ path: 'reviewer', select: ['firstname', 'lastname'] })
        .populate({ path: 'postId', select: ['title', 'body', 'author', 'createdAt'] })
}

// Update
const updateReview = async (id, data) => {
    return await Review.findOneAndUpdate(id, { $set: {rating: data} })
}

// Delete
const removeReview = async id => {
    return await Review.findOneAndDelete(id)
}

module.exports = {
    createReview,
    getReview,
    getReviews,
    updateReview,
    removeReview,
}