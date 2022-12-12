
const getId = (req, res, next) => {
    const {id} = req.query

    if(!id) return res.status(400).json({"message" : "no user id found"})

    req.id = id
    next()
}

module.exports = getId