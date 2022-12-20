const { getOneUser, getAllUsers, addNewUser, editUser, deleteUser } = require('./controller')
const hashPassword = require('../../middlewares/hash-password')
const getId = require('../../middlewares/get-id')
const {checkExistingUser, checkNoExistingUser} = require('../../middlewares/check-existing-user')

module.exports = router => {
    router.route('/user')
        .get(getAllUsers)
        .post(checkExistingUser, hashPassword, addNewUser);

    router.route('/user/:id')
        .get(getId, checkNoExistingUser, getOneUser)
        .patch(getId, checkNoExistingUser, editUser)
        .delete(getId, checkNoExistingUser, deleteUser)
}