const servicer = require('../services/categories');

const newCategory = async (req, res) => {
  const { name } = req.body;
  const category = await servicer.newCategory(name);

  return res.status(201).json(category);
};

module.exports = { newCategory };
