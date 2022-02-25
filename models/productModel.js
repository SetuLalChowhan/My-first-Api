const Sequelize = require("sequelize");
const sequelize = require("./dbmodel");

const Product = sequelize.define("products", {
  product_name: { type: Sequelize.STRING, allowNull: false },
  category: { type: Sequelize.STRING },
  description: { type: Sequelize.TEXT },
  price: { type: Sequelize.INTEGER, allowNull: false },
  rating: { type: Sequelize.INTEGER },
});

module.exports = Product;
