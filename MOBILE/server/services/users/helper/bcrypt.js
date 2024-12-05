const bcrypt = require('bcryptjs')

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 5)
}

const comparePassword = (password, encodedPassword) => {
  return bcrypt.compareSync(password, encodedPassword)
}

module.exports = { hashPassword, comparePassword }