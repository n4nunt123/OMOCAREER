const express = require('express')
const JobController = require('../controller/jobController')
const route = express.Router()

route.get('/', JobController.getJobs)
route.get('/:id', JobController.getJob)

route.post('/', JobController.addJob)
route.put('/:id', JobController.updateJob)
route.delete('/:id', JobController.deleteJob)

module.exports = route