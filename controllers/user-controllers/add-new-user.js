const User = require('../../models/user-model');

const addNewUser = async (req, res) => {
    try {
        if(Object.keys(req.body).length === 0) return res.status(400).json({"message": "bad request"})

        await User.create(req.body)
        return res.status(201).json({"message": "success"})
    } catch (error) {
        console.error({"message" : error})
        return res.status(400).json({"message" : error})
    }
}

module.exports = addNewUser;