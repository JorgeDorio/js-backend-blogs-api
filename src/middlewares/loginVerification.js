const { BAD_REQUEST } = require('../HTTP_STATUS')

const emailVerification = (req, res, next) => {
  const { email } = req.body;
  if (email === undefined) {
    return res.status(BAD_REQUEST).json({ "message": "Some required fields are missing" })
  } else if (!email.length) {
    return res.status(BAD_REQUEST).json({ "message": "Invalid fields" })
  } else {
    next()
  }
}

const passwordVerification = (req, res, next) => {
  const { password } = req.body;
  if (password === undefined) {
    return res.status(BAD_REQUEST).json({ "message": "Some required fields are missing" })
  } else if (!password.length) {
    return res.status(BAD_REQUEST).json({ "message": "Invalid fields" })
  } else {
    next()
  }

}

module.exports = { emailVerification, passwordVerification }
