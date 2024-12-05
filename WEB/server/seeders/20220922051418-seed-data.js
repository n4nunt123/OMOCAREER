'use strict';
const { hashPassword } = require('../helper/bcrypt')

module.exports = {
  async up (queryInterface, Sequelize) {
    const data = require('../data.json')
    const user = data.User.map(el => {
      const encodedPassword = hashPassword(el.password)
      return {
        ...el,
        password: encodedPassword,
        updatedAt: new Date(),
        createdAt: new Date()
      }
    })
    const company = data.Company.map(el => {
      return {
        ...el,
        updatedAt: new Date(),
        createdAt: new Date()
      }
    })
    const job = data.Job.map(el => {
      return {
        ...el,
        updatedAt: new Date(),
        createdAt: new Date()
      }
    })
    const skills = data.Skills.map(el => {
      return {
        ...el,
        updatedAt: new Date(),
        createdAt: new Date()
      }
    })
    
    await queryInterface.bulkInsert('Users', user)
    await queryInterface.bulkInsert('Companies', company)
    await queryInterface.bulkInsert('Jobs', job)
    await queryInterface.bulkInsert('Skills', skills)
  },
  
  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users')
     await queryInterface.bulkDelete('Companies')
     await queryInterface.bulkDelete('Jobs')
     await queryInterface.bulkDelete('Skills')
  }
};
