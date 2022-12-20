const { Schema, model } = require('mongoose')
const {ObjectId} = Schema.Types
const postModel = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
});

// const some = postModel.virtual('http://localhost:8000/api/v1/').get(function () {
//     return '/post/' + this._id
// })

module.exports = model('Post', postModel);