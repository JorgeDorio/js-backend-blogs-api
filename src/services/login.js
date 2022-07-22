const { User } = require('../database/models/index');

const verifyLogin = async (email) => {
  const { dataValues } = await User.findOne({ where: { email } }) || [];
  return dataValues;
};

module.exports = { verifyLogin };
