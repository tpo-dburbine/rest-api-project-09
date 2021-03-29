const { expect } = require('chai')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const { Sequelize, Op, Model, DataTypes } = require('sequelize')

// // Helper function for User model testing
// const userModelTest = async ({user}) => {
//   const User = require(global.appRoot + '/models/user')
//   const testUser =
//     await User.create({ user })
//       .then(() => true)
//       .catch((error) => false)
//     return testUser
// }

describe('The User Model', function () {
  const { User } = require('./models')
  it('should have a first name attribute', async function () {
    const user = await User.findOne()
    const actual = user.firstName
    expect(actual).to.be(true)
  })
  it('should have a last name attribute', async function () {
    const actual = await User.findOne().lastName
    expect(actual).to.be(true)
  })
  it('should have an email attribute', async function () {
    const actual = await User.findOne().emailAddress
    expect(actual).to.be(true)
  })
  it('should have a password attribute', async function () {
    const actual = await User.findOne().password
    expect(actual).to.be(true)
  })
})