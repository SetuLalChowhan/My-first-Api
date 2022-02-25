const Sequelize = require("sequelize");

const sequelize = new Sequelize("MyFirstApi", "root", "", {
    loggin: console.log,
    dialect: "mysql",
    define: {
        timestamps: false,
    },
    sync: true,
});

module.exports = sequelize;
