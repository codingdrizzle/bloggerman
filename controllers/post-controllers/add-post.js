const Post = require('../../models/post-model');
const ObjectId = require('mongoose').Types.ObjectId

const addPost = async (req, res) => {
    try {
        if(Object.keys(req.body).length === 0) return res.status(400).json({"message": "bad request"})

        console.log(ObjectId(req.id));
        await Post.create({ author: ObjectId(req.id), ...req.body})
        return res.status(201).json({"message": "success"})
    } catch (error) {
        console.error({"message" : error})
        return res.status(400).json({"message" : error})
    }
}

module.exports = addPost;