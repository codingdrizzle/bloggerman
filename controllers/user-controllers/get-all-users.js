const User = require('../../models/user-model');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
         return res.status(404).json({"message": error})
    }
}

module.exports = getAllUsers;