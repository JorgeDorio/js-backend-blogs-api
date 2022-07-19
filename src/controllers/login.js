const { OK } = require('../HTTP_STATUS')

const login = (req, res) => {
  const token = req.token;
  return res.status(OK).json({ "token": token })
}

module.exports = { login }
