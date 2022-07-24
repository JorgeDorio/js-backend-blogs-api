const { Category } = require('../database/models');

const newCategory = async (name) => {
  const insert = await Category.create({ name });
  return insert;
};

module.exports = { newCategory };
