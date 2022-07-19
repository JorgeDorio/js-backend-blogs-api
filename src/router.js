const express = require('express');
const router = express.Router();
const { emailVerification, passwordVerification } = require('./middlewares/loginVerification')
const generateLokinToken = require('./middlewares/generateLoginToken')
const { login } = require('./controllers/login')

router.post('/user', emailVerification, passwordVerification, generateLokinToken, login)

module.exports = router
