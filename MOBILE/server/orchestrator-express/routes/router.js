const route = require('express').Router()
const user = require('./userRouter')
const app = require('./appRouter')

route.use('/apps', app)
route.use('/users', user)

module.exports = route
