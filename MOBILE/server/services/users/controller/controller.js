const User = require('../model/User')

class Controller {
  static async getUser(req, res, next) {
    try {
      const data = await User.findAll()
      res.status(200).json(data)
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }

  static async getUserById(req, res, next) {
    try {
      const { id } = req.params
      const data = await User.findById(id)

      if (!data) {
       res.status(404).json({ message: 'Error data not found' })
      }

      res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async addUser(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body
      const data = await User.create({
        username,
        email,
        password,
        role: 'Admin',
        phoneNumber,
        address
      })
      res.status(200).json({ message: `Success create data with id: ${data.insertedId}` })
    } catch (err) {
      res.status(500).json(err)
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const { id } = req.params
      const data = await User.findById(id)
      if (!data) {
        res.status(404).json({ message: 'Error data not found' })
      }
      await User.destroy(id)
      res.status(200).json({ message: `Success delete data with id: ${id}` })
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
  }
}

module.exports = Controller