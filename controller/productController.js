const { Product } = require("../models/dbmodel");

async function allProduct(req, res) {
  try {
    const products = await Product.findAll({});
    res.send(products);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
}

async function productAdd(req, res) {
  const { product_name, category, description, price, rating } = req.body;
  try {
    const existProduct = await Product.findOne({ where: { product_name } });

    if (existProduct) return res.status(404).send("Product Allready Added");

    const product = await Product.create({
      product_name,
      category,
      description,
      price,
      rating,
    });

    res.status(201).send(product);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
}

async function productSearch(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ where: { id } });

    if (!product) return res.status(404).send("Product Not Found");

    res.send(product);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
}

async function update(req, res) {
  const {id} = req.params
  try {
    const { product_name, category, description, price, rating } = req.body;

    const product = await Product.findOne({ where: { id } });

    if (!product) return res.status(404).send("Product Not Found");

    const updateProduct = await product.update({
      product_name,
      category,
      description,
      price,
      rating,
    });

    res.status(201).send(updateProduct);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
}

async function singleUpdate(req, res) {
  const {id} = req.params
  try {
    const { product_name, category, description, price, rating } = req.body;

    const product = await Product.findOne({ where: { id } });

    if (!product) return res.status(404).send("Product Not Found");

    if (product_name) product.update({ product_name });
    else if (category) product.update({ category });
    else if (description) product.update({ description });
    else if (price) product.update({ price });
    else if (rating) product.update({ rating });

    res.send(product);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ where: { id } });

    if (!product) return res.status(404).send("Product Not Found");

    product.destroy();

    res.send("product deleted");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  allProduct,
  productAdd,
  productSearch,
  update,
  singleUpdate,
  deleteProduct,
};
