const express = require("express");
const router = express.Router();
const path = require("path");
const productController = require("./productController");
const productsSchema = require("./productSchema");

const validate = require(path.join(process.cwd(), "src/modules/core/middleware/validate.js"));

// const validate = require("../core/middleware/validate");

router.get("/api/products", productController.allProduct);

router.get("/api/products/:id", productController.productSearch);

router.post("/api/products", validate(productsSchema.productSchema), productController.productAdd);

router.put("/api/products/:id", validate(productsSchema.productSchema), productController.update);

router.patch("/api/products/:id", validate(productsSchema.singleProductSchema), productController.singleUpdate);

router.delete("/api/products/:id", productController.deleteProduct);

module.exports = router;
