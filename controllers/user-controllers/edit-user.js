const User = require('../../models/user-model');
const ObjectId = require('mongoose').Types.ObjectId

const editUser = async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0) return res.status(400).json({ "message": "nothing to update" })

        await User.findByIdAndUpdate(ObjectId(req.id), req.body)
        return res.status(200).json({ "message": "update success" })
    } catch (error) {
        console.error({ "message": error })
        return res.status(400).json({ "message": error })
    }
}

module.exports = editUser;