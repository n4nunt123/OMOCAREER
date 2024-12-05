const express = require('express')
const UserController = require('../controller/userController')
const authentification = require('../middlewares/authentication')
const route = express.Router()

route.post('/register', UserController.register)
route.post('/login', UserController.login)
route.get('/', authentification, UserController.getUsers)
route.get('/:id', authentification, UserController.getUser)

module.exports = route