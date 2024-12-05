const express = require('express')
const CompanyController = require('../controller/companyController')
const route = express.Router()

route.get('/', CompanyController.getCompanies)

module.exports = route