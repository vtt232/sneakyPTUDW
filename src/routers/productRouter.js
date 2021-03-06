const express = require("express");

const productController = require("../controllers/productController");
const authController = require("../controllers/authController");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(
    productController.setProductFilterObject,
    productController.getAllProducts
  )
  .post(
    authController.protect,
    productController.uploadThumbnail,
    productController.addProduct
  );

router
  .route("/:id")
  .get(productController.setProductFilterObject, productController.getProduct)
  .delete(
    authController.protect,
    productController.verifyIfProductForSale,
    productController.verifyProductSeller,
    productController.removeProduct
  )
  .patch(
    authController.protect,
    productController.verifyIfProductForSale,
    productController.verifyProductSeller,
    productController.uploadThumbnail,
    productController.updateProduct
  );

module.exports = router;
