const { createComment, getComment, getComments, removeComment, updateComment } = require('./services')
const ObjectId = require('mongoose').Types.ObjectId
const responses = require('../../utils/responses')
const messages = require('../../utils/messages')
const Post = require('../post/model')

exports.getOneComment = async (req, res) => {
    try { 
        const response = await getComment(ObjectId(req.id))
        return responses.onSuccessDataResponse(res, response, 'Successful')
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}

exports.getAllComment = async (req, res) => {
    try {
        const response = await this.getAllComment()
        return responses.onSuccessDataResponse(res, response, 'Successful')
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}

exports.addComment = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) return responses.onErrorResponse(res, 'Bad request')

        const response = await createComment(req.body)
        await Post.findOneAndUpdate({ _id: response.postId }, { $push: { reviews:response._id } })
        return responses.onSuccessDataResponse(res, response, messages.createSuccess)
    } catch (error) {
        console.log(error)
        return responses.onErrorResponse(res, error)
    }
}


exports.deleteComment = async (req, res) => {
    try {
        await removeComment(ObjectId(req.id))
        return responses.onSuccessResponse(res, 'Successfully deleted')
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}


exports.editComment = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) return responses.onBadRequest(res, 'Bad request')

        const response = await updateComment(ObjectId(req.id), req.body.rating)
        return responses.onSuccessDataResponse(res, response, 'Successfully updated')
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}
