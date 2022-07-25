const { BlogPost, User, PostCategory } = require('../database/models');

const newPost = async (data, email) => {
  const { title, content, categoryIds } = data;
  const user = await User.findOne({ where: { email } });
  const { id } = user.dataValues;
  const { dataValues } = await BlogPost.create({ title, content, userId: id });
  await PostCategory.create({ postId: dataValues.id, categoryId: categoryIds[0] });
  await PostCategory.create({ postId: dataValues.id, categoryId: categoryIds[1] });
  return dataValues;
};

module.exports = { newPost };
