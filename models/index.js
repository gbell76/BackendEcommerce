const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category)

Category.hasMany(Product)

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false
  },
  //as: '?'
})

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
  //as: '?'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
