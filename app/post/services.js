const Post = require('./model')

// Create
const createPost = async (data) => {
    return await Post.create(data)
}

// Get a Post
const getPost = async postId => {
    return await Post.find({ _id: postId }).populate('author')
}


// Get all Posts
const getPosts = async limit => {
    const options = {
        page: 1,
        limit: limit,
        sort: '-createdAt',
    }
    return await Post.find()
        // .skip(options.page * options.limit)
        .limit(options.limit).populate({
            path: 'author',
            select: ['_id', 'firstname', 'lastname']
        })
}

// Update
const updatePost = async (id, data) => {
    return await Post.findByIdAndUpdate(id, { $set: data })
}

// Delete
const removePost = async id => {
    return await Post.findByIdAndDelete(id)
}

module.exports = {
    createPost,
    getPost,
    getPosts,
    updatePost,
    removePost,
}