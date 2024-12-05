const { comparePassword } = require('../helper/bcrypt')
const { generateToken } = require('../helper/jwt')
const { User } = require('../models')

class UserController {
  static async getUsers(req, res, next) {
    try {
      const data = await User.findAll({ attributes: { exclude: ['password'] } })
      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async getUser(req, res, next) {
    try {
      const { id } = req.params
      console.log(id)
      const data = await User.findOne({
        where: { id },
        attributes: { exclude: ['password'] }
      })

      if (!data) {
        throw ({ name: 'Data not found' })
      }

      res.status(200).json(data)
    } catch (err) {
      next(err)
    }
  }

  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body
      console.log(req.body)
      const data = await User.create({
        username,
        password,
        email,
        phoneNumber,
        address,
        role: 'User'
      })
      res.status(201).json({ name: `data succesfully added with email: ${email}` })
    } catch (err) {
      next(err)
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      const data = await User.findOne({ where: { email }})
      if (!data) {
        throw ({ name: 'invalidEmailPassword' })
      }

      const validationPassword = comparePassword(password, data.password)
      if (!validationPassword) {
        throw ({ message: 'invalidEmailPassword' })
      }

      const payload = { id: data.id }
      const access_token = generateToken(payload)

      res.status(200).json({ access_token })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = UserController