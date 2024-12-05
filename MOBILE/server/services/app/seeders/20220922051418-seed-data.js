'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const data = require('../data.json')
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
    
    await queryInterface.bulkInsert('Companies', company)
    await queryInterface.bulkInsert('Jobs', job)
    await queryInterface.bulkInsert('Skills', skills)
  },
  
  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Companies')
     await queryInterface.bulkDelete('Jobs')
     await queryInterface.bulkDelete('Skills')
  }
};
