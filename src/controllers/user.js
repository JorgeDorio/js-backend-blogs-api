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

const listUserById = async (req, res) => {
  const { id } = req.params;
  const user = await servicer.listUserById(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(user);
};

module.exports = { newUser, listUsers, listUserById };
