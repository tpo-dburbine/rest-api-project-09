const Sequelize = require('sequelize')
const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class User extends Model {
    // /**
    //  * Helper method for defining associations.
    //  * This method is not a part of Sequelize lifecycle.
    //  * The `models/index` file will call this method automatically.
    //  */
    // static associate(models) {
    //   // define association here
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      /* validate: {
        notEmpty: {
          msg: 'A first name is required'
        }
      } */
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      /* validate: {
        notEmpty: {
          msg: 'A last name is required'
        }
      } */
    },
    emailAddress: {
      type: DataTypes.STRING,
      /* allowNull: false,
      validate: {
        notEmpty: {
          msg: 'An email address is required'
        }
      } */
    },
    password: {
      type: DataTypes.STRING,
     /*  allowNull: false,
      validate: {
        notEmpty: {
          msg: 'A password is required'
        }
      } */
    }
  }, { sequelize })

  User.associate = (models) => {
    // TODO Add associations.
    User.hasMany(models.Course, {
      foreignKey: {
        fieldName: 'userId',
        allowNull: false
      }
    })
  }

  return User
}
