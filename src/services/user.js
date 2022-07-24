const { User } = require('../database/models');

const createUser = async (payload) => {
  await User.create(payload);
};

const listUsers = async () => {
  const request = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  const users = request.map((user) => user.dataValues);
  return users;
};

const listUserById = async (Id) => {
  try {
    const { dataValues } = await User.findByPk(Id);
    const { id, displayName, email, image } = dataValues;
    const user = { id, displayName, email, image };
    return user;
  } catch (_e) {
    return false;
  }
};

module.exports = { createUser, listUsers, listUserById };
