const auth = require('basic-auth')
const { User } = require('../models')
const bcrypt = require('bcryptjs')

// Middleware to authenticate the request using Basic Authentication.
exports.authenticateUser = async (req, res, next) => {
  let message // Stores the message to display
  const credentials = auth(req)

  if (credentials) {
    const user = await User.findOne({ where: { emailAddress: credentials.name } })
    if (user) {
      const authenticated = bcrypt.compareSync(credentials.pass, user.password)
      if (authenticated) {
        console.log(`Authentication successful for user: ${user.firstName}`)
        req.currentUser = user
      } else {
        message = 'Password entered is incorrect'
      }
    } else {
      message = `User not found for email: ${credentials.userId}`
    }
  } else {
    message = 'Auth header not found'
  }

  if (message) {
    console.warn(message)
    res.status(401).json({ message: 'Access Denied' })
  } else {
    next()
  }
}
