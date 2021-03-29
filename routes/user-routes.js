const express = require('express')
const router = express.Router()
const User = require('../models').User
const Course = require('../models').Course
const createError = require('http-errors')

function asyncHandler (cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

router.get('/api/users', asyncHandler(async (req, res) => {
  const user = await User.findOne()

  res.json({
    firstName: user.firstName,
    lastName: user.lastName,
    emailAddress: user.emailAddress
  })
}))

router.post('/api/users', asyncHandler(async (req, res) => {
  try {
    await User.create(req.body)
    res.location('/').status(201).json(req.body)
  } catch (error) {
    res.status(400).json({ error })
  }
}))
router.get('/api/courses', asyncHandler(async (req, res) => {
  const courses = await Course.findAll({
    attributes: [
      'title',
      'description',
      'estimatedTime',
      'materialsNeeded'
    ],
    include: [
      {
        model: User,
        attributes: [
          'firstName',
          'lastName',
          'emailAddress'
        ]
      }
    ]
  })
  res.json(courses)
}))

router.post('/api/courses', asyncHandler(async (req, res) => {
  try {
    await Course.create(req.body)
    res.location('/').status(201).json(req.body)
  } catch (error) {
    res.status(400).json({ error })
  }
}))
module.exports = router
