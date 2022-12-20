const getId = (req, res, next) => {
    const { id } = req.params
    if (!id) return res.status(400).json({ "message": "no id found" })
    req.id = id
    next()
}

module.exports = getId