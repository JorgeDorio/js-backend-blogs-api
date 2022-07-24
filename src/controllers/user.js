const { CREATED, OK } = require('../HTTP_STATUS');
const servicer = require('../services/user');

const newUser = async (req, res) => {
  const { token } = req;
  await servicer.createUser(req.body);
  res.status(CREATED).json({ token });
};

const listUsers = async (_req, res) => {
  const users = await servicer.listUsers();
  res.status(OK).json(users);
};

module.exports = { newUser, listUsers };
