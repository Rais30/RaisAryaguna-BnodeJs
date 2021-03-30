const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

// CREATE -> POSR - GET
router
  .post("/product", productsController.createProducts)
  .get("/products", productsController.getAllProduct)
  .get("/products/:id", productsController.getAllProduct);

module.exports = router;
