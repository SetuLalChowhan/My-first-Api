const Sequelize = require("sequelize");

const sequelize = new Sequelize("MyFirstApi", "root", "", {
  loggin: console.log,
  dialect: "mysql",
  define: {
    timestamps: false,
  },
  sync: true,
});

const User = sequelize.define("users", {
  username: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false },
  first_name: { type: Sequelize.STRING },
  last_name: { type: Sequelize.STRING },
  phone_number: { type: Sequelize.INTEGER },
  age: { type: Sequelize.INTEGER },
  address: { type: Sequelize.STRING },
});

const Product = sequelize.define("products", {
  product_name: { type: Sequelize.STRING, allowNull: false },
  category: { type: Sequelize.STRING },
  description: { type: Sequelize.TEXT },
  price: { type: Sequelize.INTEGER, allowNull: false },
  rating: { type: Sequelize.INTEGER },
});

module.exports = {User,Product};
