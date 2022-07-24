const { User } = require('../database/models');

const createUser = async (payload) => {
  await User.create(payload);
};

module.exports = { createUser };
