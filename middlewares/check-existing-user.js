const User = require('../app/user/model');
const ObjectId = require('mongoose').Types.ObjectId

const checkExistingUser = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).json({ "message": "User already exists" });
    else next()
}

const checkNoExistingUser = async (req, res, next) => {
    const user = await User.findById(ObjectId(req.id));

    if (!user) return res.status(400).json({ "message": "User does not exist" });
    else next()
}

module.exports = {
    checkExistingUser,
    checkNoExistingUser
}