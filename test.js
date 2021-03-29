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
    const actual = await User.findOne().firstName
    expect(actual).to.not.be.null
  })
  it('should have a last name attribute', async function () {
    const actual = await User.findOne().lastName
    expect(actual).to.not.be.null
  })
  it('should have an email attribute', async function () {
    const actual = await User.findOne().emailAddress
    expect(actual).to.not.be.null
  })
  it('should have a password attribute', async function () {
    const actual = await User.findOne().password
    expect(actual).to.not.be.null
  })
})

describe('The Course Model', function () {
  const { Course } = require('./models')
  it('should have a title attribute', async function () {
    const actual = await Course.findOne().title
    expect(actual).to.not.be.null
  })
  it('should have a description attribute', async function () {
    const actual = await Course.findOne().description
    expect(actual).to.not.be.null
  })
  it('should have an estimatedTime attribute', async function () {
    const actual = await Course.findOne().estimatedTime
    expect(actual).to.not.be.null
  })
  it('should have a materialsNeeded attribute', async function () {
    const actual = await Course.findOne().materialsNeeded
    expect(actual).to.not.be.null
  })
  it('should have a userId attribute', async function () {
    const actual = await Course.findOne().userId
    expect(actual).to.not.be.null
  })
})