const Comment = require('./model')

// Create
const createComment = async (data) => {
    return await Comment.create({ ...data })
}

// Get
const getComment = async commentId => {
    return await Comment.find({ _id: commentId })
        .populate({ path: 'commenter', select: ['username'] })
        .populate({ path: 'postId', select: ['title', 'body', 'author', 'createdAt'] })
}

// Get all
const getComments = async limit => {
    const options = {
        page: 1,
        limit: limit,
        sort: '-createdAt',
    }
    return await Comment.find()
        .skip(options.page * options.limit)
        .limit(options.limit)
        .populate({ path: 'commenter', select: ['username'] })
        .populate({ path: 'postId', select: ['title', 'body', 'author', 'createdAt'] })
}

// Update
const updateComment = async (id, data) => {
    return await Comment.findOneAndUpdate(id, { $set: { comment: data } })
}

// Delete
const removeComment = async id => {
    return await Comment.findOneAndDelete(id)
}

module.exports = {
    createComment,
    getComment,
    getComments,
    updateComment,
    removeComment
}