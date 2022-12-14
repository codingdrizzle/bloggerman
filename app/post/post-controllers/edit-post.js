const Post = require('../../models/post-model');
const ObjectId = require('mongoose').Types.ObjectId

const editPost = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) return res.status(400).json({ "message": "nothing to edit" })

        await Post.findByIdAndUpdate(ObjectId(req.id), req.body)
        return res.status(200).json({ "message": "edit success" })
    } catch (error) {
        console.error({ "message": error })
        return res.status(400).json({ "message": error })
    }
}

module.exports = editPost;