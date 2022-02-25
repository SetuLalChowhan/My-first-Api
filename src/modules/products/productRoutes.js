const express = require("express");
const router = express.Router();
const path = require("path");
const productController = require("./productController");
const productsSchema = require("./productSchema");

const validate = require(path.join(process.cwd(), "src/modules/core/middleware/validate.js"));

// const validate = require("../core/middleware/validate");

router.get("", productController.allProduct);

router.get("/:id", productController.productSearch);

router.post("", validate(productsSchema.productSchema), productController.productAdd);

router.put("/:id", validate(productsSchema.productSchema), productController.update);

router.patch("/:id", validate(productsSchema.singleProductSchema), productController.singleUpdate);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
