const Controller = require('../controller/controller')
const route = require('express').Router()

route.get('/', Controller.getUser)
route.get('/:id', Controller.getUserById)
route.delete('/:id', Controller.deleteUser)
route.post('/', Controller.addUser)

module.exports = route