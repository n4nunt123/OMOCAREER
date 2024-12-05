const route = require('express').Router()
const User = require('../controller/userController')

route.get('/', User.getDatas)
route.get('/:id', User.getData)
route.post('/', User.addData)
route.delete('/:id', User.deleteData)

module.exports = route
