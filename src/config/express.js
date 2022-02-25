const express = require("express");
const path = require("path");

const app = express();

const productRoutes = require(path.join(process.cwd(), "src/modules/products/productRoutes.js"));
const userRoutes = require(path.join(process.cwd(), "src/modules/users/userRoutes.js"));

// const productRoutes = require("../modules/products/productRoutes");
// const userRoutes = require("../modules/users/userRoutes");
module.exports = async function () {
    app.use(express.json());

    app.use("/api/users", userRoutes);
    app.use("/api/products", productRoutes);

    return app;
};
