const axios = require('axios')
const redis = require('../config/redis')
const { userUrl } = require('../constants/servicesUrl')

class User {
  static async getDatas(req, res, next) {
    try {
      const dataUsers = await redis.get('user:datas')

      if(dataUsers) {
        const data = JSON.parse(dataUsers)

        res.status(200).json(data)
      } else {
        const { data } = await axios.get(`${userUrl}/users`)

        await redis.set('user:datas', JSON.stringify(data))

        res.status(200).json(data)
      }
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
  
  static async getData(req, res, next) {
    try {
      const { id } = req.params
      const { data } = await axios.get(`${userUrl}/users/${id}`)
      
      res.status(200).json(data)
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
  
  static async addData(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body

      await axios({
        method: 'POST',
        url: `${userUrl}/users/`,
        data: { username, email, password, phoneNumber, address }
      })

      await redis.del('user:datas')

      res.status(201).json({ message: `Success saved data user with email: ${email}` })
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
  
  static async deleteData(req, res, next) {
    try {
      const { id } = req.params

      await axios({
        method: 'DELETE',
        url: `${userUrl}/users/${id}`,
      })

      await redis.del('user:datas')
      
      res.status(201).json({ message: `Success saved data user with email: ${email}` })
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' })
    }
  }
}

module.exports = User