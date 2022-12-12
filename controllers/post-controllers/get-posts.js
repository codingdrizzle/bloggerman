const Post = require('../../models/post-model');
const ObjectId = require('mongoose').Types.ObjectId

const getPosts = async (req, res) => {
    const {id} = req.query
    try {
        if(id){
            const posts = await Post.find({_id: ObjectId(id)}).populate('author')
            return res.status(200).json(posts);
        }
        
        const posts = await Post.find().populate('author')
        return res.status(200).json(posts);
    } catch (error) {
         return res.status(404).json({"message": error})
    }
}

module.exports = getPosts;