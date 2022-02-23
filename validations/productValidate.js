// const { productSchema } = require("../schema/productSchema");
// const { singleProductSchema } = require("../schema/productSchema");

// //for addproduct and update product

// const productValidation = async (req, res, next) => {
//   try {
//     await productSchema.validate(req.body);
//     next();
//   } catch (err) {
//     res.status(404).send(err.errors[0]);
//   }
// };

// // for single update

// const singleProductValidation = async (req, res, next) => {
//   try {
//     await singleProductSchema.validate(req.body);
//     next();
//   } catch (err) {
//     return res.status(404).send(err.errors[0]);
//   }
// };

// module.exports = {productValidation,singleProductValidation};
