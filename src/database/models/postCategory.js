'use strict'

const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true },
  }, {
    tableName: 'PostCategories',
    timestamps: false
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      through: PostCategory,
      foreignKey: 'postId',
    });
  };

  return PostCategory;
};

module.exports = PostCategory; 
