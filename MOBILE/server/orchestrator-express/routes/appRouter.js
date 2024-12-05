const route = require('express').Router()
const App = require('../controller/appController')

// Companies
route.get('/companies', App.getCompanies)
// Jobs
route.get('/jobs', App.getJobs)
route.get('/jobs/:id', App)
route.post('/jobs', App)
route.put('/jobs/:id', App)
route.delete('/jobs', App)

module.exports = route
