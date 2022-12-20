const { createReview, getReview, getReviews, removeReview, updateReview } = require('./services')
const ObjectId = require('mongoose').Types.ObjectId
const responses = require('../../utils/responses')
const messages = require('../../utils/messages')
const Post = require('../post/model')

exports.getOneReview = async (req, res) => {
    try { 
        const response = await getReview(ObjectId(req.id))
        return responses.onSuccessDataResponse(res, response, 'Successful')
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}

exports.getAllReviews = async (req, res) => {
    try {
        const response = await getReviews()
        return responses.onSuccessDataResponse(res, response, 'Successful')
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}

exports.addReview = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) return responses.onErrorResponse(res, 'Bad request')

        const response = await createReview(req.body)
        await Post.findOneAndUpdate({ _id: response.postId }, { $push: { reviews:response._id } })
        return responses.onSuccessDataResponse(res, response, messages.createSuccess)
    } catch (error) {
        console.log(error)
        return responses.onErrorResponse(res, error)
    }
}


exports.deleteReview = async (req, res) => {
    try {
        await removeReview(ObjectId(req.id))
        return responses.onSuccessResponse(res, 'Successfully deleted')
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}


exports.editReview = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) return responses.onBadRequest(res, 'Bad request')

        const response = await updateReview(ObjectId(req.id), req.body.rating)
        return responses.onSuccessDataResponse(res, response, 'Successfully updated')
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}
