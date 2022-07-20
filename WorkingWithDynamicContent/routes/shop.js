const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getIndex);

router.get("/products", shopController.getProducts);

// ':' tells that there will be some value and that will be set in productId
router.get("/products/:productId", shopController.getProduct);
// example: /products/3434

/*
If there would be a route such as:
router.get("/products/delete") 
then it must be placed aboe the dynamic route handler as the code flows from top to bottom , the more precise route 
will reach first , else 'delete' would be considerd dynamic and will be set into productId.

*/

router.get("/cart", shopController.getCart);

router.post("/cart", shopController.postCart);

router.post("/cart-delete-item", shopController.postCartDeleteProduct);

router.post("/create-order", shopController.postOrder);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;
