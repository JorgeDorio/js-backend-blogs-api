const { BAD_REQUEST } = require('../HTTP_STATUS');

const emailVerification = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(BAD_REQUEST).json({ message: 'Some required fields are missing' });
  }
  next();
};

const passwordVerification = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(BAD_REQUEST).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = { emailVerification, passwordVerification };
