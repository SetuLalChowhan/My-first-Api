const Sequelize = require("sequelize");
const sequelize = require("./dbmodel");

const UserType = sequelize.define("user_types", {
  name: { type: Sequelize.STRING, allownull: false },
  is_active: { type: Sequelize.ENUM, values: [0, 1] },
});

module.exports = UserType;
