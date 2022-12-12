const bcrypt = require('bcrypt');

const hashPassword = async (req, res, next) => {
    if(!req.body.password) return next()
    await bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) return res.status(400).json(err)
        else {
            req.body.password = hash
            return next()
        }
    });
}

module.exports = hashPassword