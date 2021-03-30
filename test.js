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
    console.log('firstName: ' + actual)
    expect(actual).to.not.be.null
  })
  it('should have a last name attribute', async function () {
    const user = await User.findOne()
    const actual = user.lastName
    console.log('lastName: ' + actual)
    expect(actual).to.not.be.null
  })
  it('should have an email attribute', async function () {
    const user = await User.findOne()
    const actual = user.emailAddress
    console.log('emailAddress: ' + actual)
    expect(actual).to.not.be.null
  })
  it('should have a password attribute', async function () {
    const user = await User.findOne()
    const actual = user.password
    console.log('password: ' + actual)
    expect(actual).to.not.be.null
  })
})

describe('The Course Model', function () {
  const { Course } = require('./models')
  it('should have a title attribute', async function () {
    const course = await Course.findOne()
    const actual = course.title
    console.log('title: ' + actual)
    expect(actual).to.not.be.null
  })
  it('should have a description attribute', async function () {
    const course = await Course.findOne()
    const actual = course.description
    console.log('description: ' + actual)
    expect(actual).to.not.be.null
  })
  it('should have an estimatedTime attribute', async function () {
    const course = await Course.findOne()
    const actual = course.estimatedTime
    console.log('estimatedTime: ' + actual)
    expect(actual).to.not.be.null
  })
  it('should have a materialsNeeded attribute', async function () {
    const course = await Course.findOne()
    const actual = course.materialsNeeded
    console.log('materialsNeeded: ' + actual)
    expect(actual).to.not.be.null
  })
  it('should have a userId attribute', async function () {
    const course = await Course.findOne()
    const actual = course.userId
    console.log('userId: ' + actual)
    expect(actual).to.not.be.null
  })
})