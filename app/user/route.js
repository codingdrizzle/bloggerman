const { getOneUser, getAllUsers, addNewUser, editUser, deleteUser } = require('./controller')
const hashPassword = require('../../middlewares/hash-password')
module.exports = router => {
    router.route('/user')
        .get(getAllUsers)
        .post(hashPassword, addNewUser)

    router.route('/user/:id')
        .get(getOneUser)
        .patch(editUser)
        .delete(deleteUser)
}