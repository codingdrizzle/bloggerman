const { getOneUser, getAllUsers, addNewUser, editUser, deleteUser } = require('./controller')

module.exports = router => {
    router.route('/user')
        .get(getAllUsers)
        .post(addNewUser)

    router.route('/user/:id')
        .get(getOneUser)
        .patch(editUser)
        .delete(deleteUser)
}