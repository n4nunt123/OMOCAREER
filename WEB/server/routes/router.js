const express = require('express')
const user = require('./user')
const company = require('./company')
const job = require('./job')
const route = express.Router()

route.use('/user', user)
route.use('/company', company)
route.use('/job', job)

module.exports = route