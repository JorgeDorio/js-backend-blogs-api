const { Category } = require('../database/models');

const newCategory = async (name) => {
  const insert = await Category.create({ name });
  return insert;
};

const listCategories = async () => {
  const request = await Category.findAll();
  const categories = request.map((category) => category.dataValues);
  return categories;
};

module.exports = { newCategory, listCategories };
