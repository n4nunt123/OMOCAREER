const axios = require('axios')
const redis = require('../config/redis')
const { appUrl } = require('../constants/servicesUrl')

class App {
  static async getCompanies(req, res, next) {
    try {
      const dataCompanies = await redis.get('app:companies')

      if(dataCompanies) {
        const data = JSON.parse(dataCompanies)
        
        res.status(200).json(data)
      } else {
        const { data } = await axios.get(`${appUrl}/companies`)

        await redis.set('app:companies', JSON.stringify(data))

        res.status(200).json(data)
      }
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
  
  static async getJobs(req, res, next) {
    try {
      const dataJobs = await redis.get('app:jobs')

      if(dataJobs) {
        const data = JSON.parse(dataJobs)

        res.status(200).json(data)
      } else {
        const { data } = await axios.get(`${appUrl}/jobs`)

        await redis.set('app:jobs', JSON.stringify(data))

        res.status(200).json(data)
      }
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
  
  static async getJob(req, res, next) {
    try {
      const { id } = req.params
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
  
  static async addJob(req, res, next) {
    try {
      const { data } = await axios({
        method: 'POST',
        url: `${appUrl}/jobs`,
        data: req.body
      })

      await redis.del('app:jobs')
      res.status(201).json(data)
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
  
  static async updateJob(req, res, next) {
    try {
      const { id } = req.params
      const { data } = await axios({
        method: 'UPDATE',
        url: `${appUrl}/jobs/${id}`,
        data: req.body
      })

      await redis.del('app:jobs')
      res.status(201).json(data)
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
  
  static async deleteJob(req, res, next) {
    try {
      const { id } = req.params
      const { data } = await axios({
        method: 'DELETE',
        url: `${appUrl}/jobs/${id}`,
        data: req.body
      })

      await redis.del('app:jobs')
      res.status(201).json(data)
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}

module.exports = App