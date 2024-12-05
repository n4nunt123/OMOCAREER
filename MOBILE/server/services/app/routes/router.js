const express = require('express')
const company = require('./company')
const job = require('./job')
const route = express.Router()


route.use('/companies', company)
route.use('/jobs', job)

module.exports = route