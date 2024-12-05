const { Job, Company, Skills } = require('../models')
const { sequelize } = require('../models')
const axios = require('axios')

const userUrl = 'http://localhost:4001'

class JobController {
  static async getJobs(req, res, next) {
    try {
      const dataJobs = await Job.findAll({
        include: [ Skills, Company ]
      })

      if (!dataJobs) {
        throw { name: 'Error404'}
      }

      res.status(200).json(dataJobs)
    } catch (err) {
      next(err)
    }
  }

  static async getJob(req, res, next) {
    try {
      const { id } = req.params
      const dataJob = await Job.findOne({
        where: { id },
        include: [ Skills, Company ]
      })
      
      if (!dataJob) {
        throw { name: 'Error404'}
      }

      const { data } = await axios.get(`${userUrl}/users/${dataJob.userMongoId}`)

      const { name, companyLogo, location, email, description, companyLink } = dataJob.Company
      const [ skillOne, skillTwo, skillThree, skillFour, skillFive ] = dataJob.Skills

      const listSkills = []
      const skill = [ skillOne.dataValues, skillTwo?.dataValues, skillThree?.dataValues, skillFour?.dataValues, skillFive?.dataValues ]

      skill.forEach(el => {
        if (el) {
          listSkills.push(el)
        }
      });

      const payload = {
        id: dataJob.id,
        title: dataJob.title,
        description: dataJob.description,
        jobType: dataJob.jobType,
        Company: {
          name,
          companyLogo,
          location,
          email,
          description,
          companyLink
        },
        Skills: listSkills,
        userMongo: data,
        companyId: dataJob.companyId,
        userMongoId: dataJob.userMongoId
      }

      res.status(200).json(payload)
    } catch (err) {
      next(err)
    }
  }
  
  static async addJob(req, res, next) {
    const t = await sequelize.transaction()
    try {
      const { title, description, companyId, jobType, userMongoId } = req.body
      const [ skillOne, skillTwo, skillThree, skillFour, skillFive ] = req.body.Skills

      const data = await Job.create({
        title,
        description,
        companyId,
        jobType,
        userMongoId,
      }, { transaction: t })

      const jobId = data.id
      const skill1 = await Skills.create({
        jobId,
        name: skillOne.name,
        level: skillOne.level
      }, { transaction: t })
      if (!skill1) {
        throw { name: 'requirementNotFullfied' }
      }
      const skill2 = await Skills.create({
        jobId,
        name: skillTwo.name,
        level: skillTwo.level
      }, { transaction: t })
      if (!skill2) {
        throw { name: 'requirementNotFullfied' }
      }
      if (skillThree) {
        await Skills.create({
          jobId,
          name: skillThree.name,
          level: skillThree.level  
        }, { transaction: t })
      }
      if (skillFour) {
        await Skills.create({
          jobId,
          name: skillFour.name,
          level: skillFour.level
        }, { transaction: t })
      }
      if (skillFive) {
        await Skills.create({
          jobId,
          name: skillFive.name,
          level: skillFive.level
        }, { transaction: t })
      }

      await t.commit()
      res.status(201).json({ message: `data succesfully added` })
    } catch (err) {
      console.log(err)
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