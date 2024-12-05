'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skills extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Skills.belongsTo(models.Job, {
        foreignKey: 'jobId'
      })
    }
  }
  Skills.init({
    jobId: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Skill name is required'
        },
        notEmpty: {
          msg: 'Skill name is required'
        }
      }
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Skill level is required'
        },
        notEmpty: {
          msg: 'Skill level is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Skills',
  });
  return Skills;
};