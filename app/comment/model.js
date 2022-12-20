const { Schema, model } = require('mongoose').Schema;

const commentSchema = new Schema({
    commenter: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    comment: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Comment', reviewSchema);