const servicer = require('../services/categories');

const newCategory = async (req, res) => {
  const { name } = req.body;
  const category = await servicer.newCategory(name);

  return res.status(201).json(category);
};

const listCategories = async (_req, res) => {
  const request = await servicer.listCategories();
  return res.status(200).json(request);
};

module.exports = { newCategory, listCategories };
