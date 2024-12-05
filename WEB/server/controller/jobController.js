const { Job, User, Company, Skills } = require('../models')
const { sequelize } = require('../models')

class JobController {
  static async getJobs(req, res, next) {
    try {
      const data = await Job.findAll({
        include: [ Skills, User, Company ]
      })
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async getJob(req, res, next) {
    try {
      const { id } = req.params
      const data = await Job.findOne({
        where: { id },
        include: [ Skills, User, Company ]
      })
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }
  
  static async addJob(req, res, next) {
    const t = await sequelize.transaction()
    try {
      const { id } = req.user
      const { title, description, companyId, jobType } = req.body.data
      const { skillOne, skillTwo, skillThree, skillFour, skillFive } = req.body.skills
      const data = await Job.create({
        title,
        description,
        companyId,
        jobType,
        authorId: id,
      }, { transaction: t })

      const jobId = data.id
      const skill1 = await Skills.create({
        jobId,
        name: skillOne.skill,
        level: skillOne.level
      }, { transaction: t })
      if (!skill1) {
        throw { name: 'requirementNotFullfied' }
      }
      const skill2 = await Skills.create({
        jobId,
        name: skillTwo.skill,
        level: skillTwo.level
      }, { transaction: t })
      if (!skill2) {
        throw { name: 'requirementNotFullfied' }
      }
      if (skillThree.skill) {
        await Skills.create({
          jobId,
          name: skillThree.skill,
          level: skillThree.level
        }, { transaction: t })
      }
      if (skillFour.skill) {
        await Skills.create({
          jobId,
          name: skillFour.skill,
          level: skillFour.level
        }, { transaction: t })
      }
      if (skillFive.skill) {
        await Skills.create({
          jobId,
          name: skillFive.skill,
          level: skillFive.level
        }, { transaction: t })
      }

      await t.commit()
      res.status(201).json({ message: `data succesfully added` })
    } catch (err) {
      await t.rollback()
      next(err)
    }
  }
  
  static async updateJob(req, res, next) {
    try {
      const { id } = req.params
      const { title, description, companyId, jobType } = req.body
  
      const update = await Job.update({
        title,
        description,
        companyId,
        jobType
      }, { where: { id } })
  
      if (update[0] !== 0) {
        res.status(201).json({ message: `data with id: ${id} succesfully updated` })
      } else {
        throw { name: 'Error404' }
      }
    } catch (err) {
      next(err)
    }
  }
  
  static async deleteJob(req, res, next) {
    try {
      const { id } = req.params
      const job = await Job.findByPk(id)
      if (!job) {
        throw { name: 'Error404' }
      }

      const deleted = await Job.destroy({ where: { id } })
      res.status(200).json({ message: `data with id: ${id} succesfully deleted` })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = JobController