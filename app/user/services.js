const User = require('./model')

// Check user existence
const checkExistingUser = async (email) => {
    const exist = await User.findOne({ email: email })
    return exist ? true : false
}

// Create user
const createUser = async (data) => {
    if(checkExistingUser(data.email)) return {"message" : "User already exist"}
    // Create auser object
    else return await User.create(data)
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