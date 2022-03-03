require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
// const userStrategy = require(path.join(process.cwd(), "src/modules/users/userStrategy.js"));

const userStrategy = require(path.join(process.cwd(), "src/modules/users/userStrategy.js"));
const app = express();

const productRoutes = require(path.join(process.cwd(), "src/modules/products/productRoutes.js"));
const userRoutes = require(path.join(process.cwd(), "src/modules/users/userRoutes.js"));

module.exports = async function () {
    app.use(cookieParser(process.env.COOKIE_SECRET));
    app.use(express.json());

    app.use(userRoutes);
    app.use(productRoutes);

    userStrategy();

    return app;
};
