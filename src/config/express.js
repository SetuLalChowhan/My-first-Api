const express = require("express");
const path = require("path");

const app = express();

const productRoutes = require(path.join(process.cwd(), "src/modules/products/productRoutes.js"));
const userRoutes = require(path.join(process.cwd(), "src/modules/users/userRoutes.js"));

module.exports = async function () {
    app.use(express.json());

    app.use(userRoutes);
    app.use(productRoutes);

    return app;
};
