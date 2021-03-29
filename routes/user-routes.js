const express = require('express');
const router = express.Router();
const User = require('../models').User
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

module.exports = router
