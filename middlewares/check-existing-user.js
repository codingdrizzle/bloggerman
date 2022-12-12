const User = require('../models/user-model');

const checkExistingUser = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if(user) return res.status(400).json({"message" : "User already exists"});
    else next()
}

module.exports = checkExistingUser