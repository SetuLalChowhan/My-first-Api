const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    loggin: console.log,
    dialect: "mysql",
    define: {
        timestamps: false,
    },
    sync: true,
});

module.exports = sequelize;
