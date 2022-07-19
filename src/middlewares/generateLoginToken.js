require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateLoginToken = (req, _res, next) => {
  const payload = req.body;
  const config = { expiresIn: '15m', algorithm: 'HS256' }
  const token = jwt.sign(payload, process.env.JWT_SECRET, config)
  req.token = token;
  next();
}

module.exports = generateLoginToken
