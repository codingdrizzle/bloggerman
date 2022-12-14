const User = require('./model')
// import logger from '../../logger/index'

// Create user
const createUser = async (data) => {
    // Create auser object
    return await User.create(data)
}

// Get user
const getUser = async userId => {
    return await User.find({ _id: userId })
}

// Get all users
const getUsers = async limit => {
    const options = {
        page: 1,
        limit: limit,
        sort: '-createdAt',
    }
    return await User.find()
        // .skip(options.page * options.limit)
        .limit(options.limit)
}

// Update user
const updateUser = async (id, data) => {
    return await User.findByIdAndUpdate(id, { $set: data })
}

// Delete
const removeUser = async id => {
    return await User.findByIdAndRemove(id)
}

module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    removeUser
}