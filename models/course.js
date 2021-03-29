const Sequelize = require('sequelize')
const { Model } = require('sequelize')

module.exports = (sequelize) => {
  class Course extends Model {
    // /**
    //  * Helper method for defining associations.
    //  * This method is not a part of Sequelize lifecycle.
    //  * The `models/index` file will call this method automatically.
    //  */
    // static associate(models) {
    //   // define association here
  }
  Course.init({
    title: {
      type: Sequelize.STRING,
      /* allowNull: false,
      validate: {
        notEmpty: {
          msg: 'A course name is required'
        }
      } */
    },
    description: {
      type: Sequelize.TEXT,
      /* allowNull: false,
      validate: {
        notEmpty: {
          msg: 'A description is required'
        }
      } */
    },
    estimatedTime: {
      type: Sequelize.STRING
    },
    materialIsNeeded: {
      type: Sequelize.STRING
    }
  }, { sequelize })

  Course.associate = (models) => {
    // TODO Add associations.
    Course.belongsTo(models.User, {
      foreignKey: {
        fieldName: 'userId',
        allowNull: false
      }
    })
  }

  return Course
}
