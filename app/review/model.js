const { Schema, model } = require('mongoose');

const reviewSchema = new Schema({
    reviewer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    rating: {
        type: Number,
        max: 5,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Review', reviewSchema);