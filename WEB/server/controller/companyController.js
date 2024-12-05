const { Company } = require('../models')

class CompanyController {
  static async getCompanies(req, res, next) {
    try {
      const data = await Company.findAll()
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async getCompany(req, res, next) {
    try {
      const { id } = req.params
      const data = await Company.findOne({ where: { id } })

      if (!data) {
        throw { name: 'Error404'}
      }

      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async addCompany(req, res, next) {
    try {
      const { name, companyLogo, location, email, description } = req.body
      const { id } = req.user

      const data = await Company.create({
        name,
        companyLogo,
        location,
        email,
        description,
        authorId: id
      })

      res.status(201).json({ message: `data succesfully added with company name: ${name}` })
    } catch (err) {
      next(err)
    }
  }

  static async updateCompany(req, res, next) {
    try {
      const { name, companyLogo, location, email, description } = req.body
      const { id } = req.params

      const update = await Company.update({
        name,
        companyLogo,
        location,
        email,
        description
      }, { where: { id } })

      if (update[0] !== 0) {
        res.status(201).json({ message: `data with id: ${id} succesfully updated` })
      } else {
        throw { name: 'Error404'}
      }
    } catch (err) {
      next(err)
    }
  }

  static async deleteCompany(req, res, next) {
    try {
      const { id } = req.params
      const company = await Company.findByPk(id)

      if (!company) {
        throw { name: 'Error404'}
      }

      const deleted = await Company.destroy({ where: { id } })
      res.status(200).json({ message: `data with id: ${id} succesfully deleted` })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = CompanyController