const mongoose = require('mongoose')
const validator = require('mongoose-validator');

const userModel = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: validator({
            validator: 'isEmail',
            message: 'Please enter a valid email address'
        })
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    posts: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model('User', userModel);