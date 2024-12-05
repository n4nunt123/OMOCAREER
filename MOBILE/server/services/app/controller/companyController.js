const { Company } = require('../models')

class CompanyController {
  static async getCompanies(req, res, next) {
    try {
      const data = await Company.findAll()
      
      if (!data) {
        throw { name: 'Error404'}
      }

      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CompanyController