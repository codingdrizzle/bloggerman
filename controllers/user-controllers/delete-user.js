
const User = require('../../models/user-model');
const ObjectId = require('mongoose').Types.ObjectId

const deleteUser = async(req, res) => {
    try {
        await User.findByIdAndDelete(ObjectId(req.id))
        return res.status(200).json({ "message": "delete success" })
    } catch (error) {
        console.error({ "message": error })
        return res.status(400).json({ "message": error })
    }
}

module.exports = deleteUser;