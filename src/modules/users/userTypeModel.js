const Sequelize = require("sequelize");
const path = require("path");
const sequelize = require(path.join(process.cwd(), "src/config/lib/sequelize.js"));

const UserType = sequelize.define("user_types", {
    name: {type: Sequelize.STRING, allownull: false},
    is_active: {type: Sequelize.ENUM, values: [0, 1]},
});

module.exports = UserType;
