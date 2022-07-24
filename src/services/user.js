const { User } = require('../database/models');

const createUser = async (payload) => {
  await User.create(payload);
};

const listUsers = async () => {
  const request = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  const users = request.map((user) => user.dataValues);
  return users;
};

module.exports = { createUser, listUsers };
