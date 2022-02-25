const Sequelize = require("sequelize");
const path = require("path");
const sequelize = require(path.join(process.cwd(), "src/config/lib/sequelize.js"));

const UserType = require("./userTypeModel");

const User = sequelize.define("users", {
    username: {type: Sequelize.STRING, allowNull: false},
    email: {type: Sequelize.STRING, allowNull: false},
    password: {type: Sequelize.STRING, allowNull: false},
    first_name: {type: Sequelize.STRING},
    last_name: {type: Sequelize.STRING},
    phone_number: {type: Sequelize.INTEGER},
    age: {type: Sequelize.INTEGER},
    address: {type: Sequelize.STRING},
    user_type_id: {type: Sequelize.INTEGER},
    is_active: {type: Sequelize.ENUM, values: [0, 1]},
});
// UserType.hasMany(User,{as:"users", foreignKey:"user_type_id"})
User.belongsTo(UserType, {as: "user_type", foreignKey: "user_type_id"});

module.exports = User;
