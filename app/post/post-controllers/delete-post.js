
const Post = require('../../models/post-model');
const ObjectId = require('mongoose').Types.ObjectId

const deletePost = async(req, res) => {
    try {
        await Post.findByIdAndDelete(ObjectId(req.id))
        return res.status(200).json({ "message": "delete success" })
    } catch (error) {
        console.error({ "message": error })
        return res.status(400).json({ "message": error })
    }
}

module.exports = deletePost;