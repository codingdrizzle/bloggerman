const express = require('express')
// Middlewares
const checkExistingUser = require('../middlewares/check-existing-user')
const hashPassword = require('../middlewares/hash-password')
const getId = require('../middlewares/get-id')
// Controllers
const getAllUsers = require('../controllers/user-controllers/get-all-users')
const addNewUser = require('../controllers/user-controllers/add-new-user')
const editUser = require('../controllers/user-controllers/edit-user')
const deleteUser = require('../controllers/user-controllers/delete-user')

const userRouter = express.Router()

userRouter.get('/users', getAllUsers)
userRouter.post('/add-user', checkExistingUser, hashPassword, addNewUser)
userRouter.patch('/edit-user', getId, editUser)
userRouter.delete('/delete-user', getId, deleteUser)

module.exports = userRouter