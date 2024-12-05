const express = require('express')
const CompanyController = require('../controller/companyController')
const authentification = require('../middlewares/authentication')
const route = express.Router()

route.get('/', CompanyController.getCompanies)
route.get('/:id', CompanyController.getCompany)

route.use(authentification)
route.post('/', CompanyController.addCompany)
route.put('/:id', CompanyController.updateCompany)
route.delete('/:id', CompanyController.deleteCompany)

module.exports = route