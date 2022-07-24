const jwt = require('jsonwebtoken');
require('dotenv').config();

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;
  const key = process.env.JWT_SECRET;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const data = jwt.verify(authorization, key);

    if (data.displayName) {
      req.user = data.displayName;
      console.log(req.user);
    }
  } catch (_e) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = { tokenValidation };
