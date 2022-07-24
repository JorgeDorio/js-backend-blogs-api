const validator = require('email-validator');
const { User } = require('../database/models');

const displayNameValidation = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    res.status(400).json({ message: '"displayName" length must be at least 8 characters long' });
  } else {
    next();
  }
};

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  if (!validator.validate(email)) {
    res.status(400).json({ message: '"email" must be a valid email' });
  } else {
    next();
  }
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    res.status(400).json({ message: '"password" length must be at least 6 characters long' });
  } else {
    next();
  }
};

const userValidation = async (req, res, next) => {
  const { email } = req.body;
  const { dataValues } = await User.findOne({ where: { email } }) || [];
  if (dataValues) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

module.exports = { displayNameValidation, emailValidation, passwordValidation, userValidation };
