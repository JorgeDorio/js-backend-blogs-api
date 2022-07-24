const express = require('express');

const router = express.Router();
const { emailVerification, passwordVerification } = require('./middlewares/loginVerification');
const { displayNameValidation, emailValidation,
  passwordValidation, userValidation } = require('./middlewares/user');
const generateToken = require('./middlewares/generateLoginToken');
const { login } = require('./controllers/login');
const { newUser, listUsers, listUserById } = require('./controllers/user');
const { tokenValidation } = require('./middlewares/token');

router.get('/user/:id', tokenValidation, listUserById);
router.get('/user', tokenValidation, listUsers);
router.post('/login', emailVerification, passwordVerification, generateToken, login);
router.post('/user', displayNameValidation, emailValidation,
  passwordValidation, userValidation, generateToken, newUser);

module.exports = router;
