const express = require('express');
const router = express.Router();
const Users = require('../models').User
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
  const user = await Users.findOne()

  res.json({
    firstName: user.firstName,
    lastName: user.lastName,
    emailAddress: user.emailAddress
  })
}))

module.exports = router
