const { string, number, array, object } = require("yup");

let allproducts = {
  product_name: string()
    .min(5, "product_name must be at least 3 characters")
    .max(50, "product_name must be at most 50 charcters")
    .required("product_name must not be empty"),

  category: string()
    .required("Category must be required")
    .min(4, "Category word must be at least 4 characters")
    .max(40, "Category word must be at most 40 characters"),
  description: string()
    .min(12, "description must be at least 12 characters")
    .max(100, "description must be at most 100 characters")
    .required("Description must be required"),

  price: number()
    .positive("price value must be a positive")
    .integer("price value must be an integer")
    .required("price value must not be empty"),

  rating: number()
    .positive("Rating must be a positive")
    .integer("Rating must be an integer")
    .required("Rating must be required"),
};

//for add,update

let productSchema = object().shape({
  product_name: allproducts.product_name,
  category: allproducts.category,
  price: allproducts.price,
  description: allproducts.description,
  rating: allproducts.rating,
});
//single update

let singleProduct = {
  product_name: string()
    .min(5, "product_name must be at least 3 characters")
    .max(50, "product_name must be at most 50 charcters"),

  category: string()
    .min(4, "Category word must be at least 4 characters")
    .max(40, "Category word must be at most 40 characters"),
  description: string()
    .min(12, "description must be at least 12 characters")
    .max(100, "description must be at most 100 characters"),

  price: number()
    .positive("price value must be a positive")
    .integer("price value must be an integer"),

  rating: number()
    .positive("Rating must be a positive")
    .integer("Rating must be an integer"),
};

let singleProductSchema = object().shape({
  product_name: singleProduct.product_name,
  category: singleProduct.category,
  price: singleProduct.price,
  description: singleProduct.description,
  rating: singleProduct.rating,
});

module.exports = { productSchema, singleProductSchema };
