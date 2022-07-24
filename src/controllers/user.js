const { CREATED } = require('../HTTP_STATUS');
const servicer = require('../services/user');

const newUser = async (req, res) => {
  const { token } = req;
  await servicer.createUser(req.body);
  res.status(CREATED).json({ token });
};

module.exports = { newUser };
