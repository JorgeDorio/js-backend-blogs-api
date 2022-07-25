const express = require('express');

const router = express.Router();
const { emailVerification, passwordVerification } = require('./middlewares/loginVerification');
const { displayNameValidation, emailValidation,
  passwordValidation, userValidation } = require('./middlewares/user');
const generateToken = require('./middlewares/generateLoginToken');
const { login } = require('./controllers/login');
const { newUser, listUsers, listUserById } = require('./controllers/user');
const { tokenValidation } = require('./middlewares/token');
const { newCategory, listCategories } = require('./controllers/categories');
const { nameValidation } = require('./middlewares/categories');
const { newPost } = require('./controllers/post');
const { postValidation } = require('./middlewares/post');

router.get('/user/:id', tokenValidation, listUserById);
router.get('/user', tokenValidation, listUsers);
router.post('/login', emailVerification, passwordVerification, generateToken, login);
router.post('/user', displayNameValidation, emailValidation,
  passwordValidation, userValidation, generateToken, newUser);
router.post('/categories', tokenValidation, nameValidation, newCategory);
router.get('/categories', tokenValidation, listCategories);
router.post('/post', tokenValidation, postValidation, newPost);

module.exports = router;
