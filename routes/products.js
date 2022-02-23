const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");
const productsSchema = require("../schema/productSchema")

const validate =require("../middleware/validate");
const { singleProductSchema } = require("../schema/productSchema");

router.get("", productController.allProduct);

router.get("/:id", productController.productSearch);

router.post("",validate(productsSchema.productSchema), productController.productAdd);

router.put("/:id",validate(productsSchema.productSchema),productController.update);

router.patch("/:id",validate(productsSchema.singleProductSchema),productController.singleUpdate);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
