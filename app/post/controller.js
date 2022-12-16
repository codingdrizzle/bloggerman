const { createPost, getPost, getPosts, removePost, updatePost } = require('./services')
const ObjectId = require('mongoose').Types.ObjectId
const responses = require('../../utils/responses')
const messages = require('../../utils/messages')

exports.getOnePost = async (req, res) => {
    try { 
        const response = await getPost(ObjectId(req.id))
        return responses.onSuccessDataResponse(res, response, 'Successful')
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}

exports.getAllPosts = async (req, res) => {
    try {
        const response = await getPosts()
        return responses.onSuccessDataResponse(res, response, 'Successful')
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}

exports.createNewPost = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) return responses.onErrorResponse(res, 'Bad request')

        const response = await createPost(req.body)
        return responses.onSuccessDataResponse(res, response, messages.createSuccess)
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}


exports.deletePost = async (req, res) => {
    try {
        await removePost(ObjectId(req.id))
        return responses.onSuccessResponse(res, 'Successfully deleted')
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}


exports.editPost = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) return responses.onBadRequest(res, 'Bad request')

        const response = await removePost(ObjectId(req.id), req.body)
        return responses.onSuccessDataResponse(res, response, 'Successfully updated')
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}
