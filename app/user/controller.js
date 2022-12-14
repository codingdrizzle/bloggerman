const { createUser, getUser, getUsers, removeUser, updateUser } = require('./services')
const ObjectId = require('mongoose').Types.ObjectId
const responses = require('../../utils/responses')
const messages = require('../../utils/messages')

exports.getOneUser = async (req, res) => {
    try {
        const response = await getUser(ObjectId(req.id))
        return responses.onSuccessDataResponse(res, response, 'Successfully fetched user')
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const response = await getUsers()
        return responses.onSuccessDataResponse(res, response, 'Successfully fetched users')
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}

exports.addNewUser = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) return responses.onErrorResponse(res, 'Bad request')

        const response = await createUser(req.body)
        return responses.onSuccessDataResponse(res, response, messages.createSuccess)
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}


exports.deleteUser = async (req, res) => {
    try {
        await removeUser(ObjectId(req.id))
        return responses.onSuccessResponse(res, 'Successfully deleted')
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}


exports.editUser = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) return responses.onBadRequest(res, 'Bad request')

        const response = await updateUser(ObjectId(req.id), req.body)
        return responses.onSuccessDataResponse(res, response, 'Successfully updated')
    } catch (error) {
        return responses.onErrorResponse(res, error.errors)
    }
}
