const { connectdb } = require('../config/connection')
const { ObjectId } = require('mongodb')
const { hashPassword } = require('../helper/bcrypt')

class User{
  static user() {
    const users = connectdb().collection('users')
    return users
  }

  static async findAll() {
    const getData = await this.user().find().toArray()

    const data = getData.map(el => {
      return {
        _id: el._id,
        username: el.username,
        email: el.email,
        role: el.role,
        phoneNumber: el.phoneNumber,
        address: el.address
      }
    })

    return data
  }

  static async findById(id) {
    const getData = await this.user().findOne({
      _id: ObjectId(id)
    })

    const data = {
      _id: getData._id,
      username: getData.username,
      email: getData.email,
      role: getData.role,
      phoneNumber: getData.phoneNumber,
      address: getData.address
    }

    return data
  }

  static create(data) {
    const encodedPassword = hashPassword(data.password)
    data.password = encodedPassword

    return this.user().insertOne(data)
  }

  static bulkCreate(data) {
    const encodedData = data.map(el => {
      const encodedPassword = hashPassword(el.password)
      return {
        ...el,
        password: encodedPassword
      }
    })

    return this.user().insertMany(encodedData)
  }

  static async destroy(id) {
    const payload = { _id: ObjectId(id) }
    return this.user().deleteOne(payload)
  }
}

module.exports = User