const { Router } = require("express");
const { cartController } = require("../controllers/carts.controller");

const route = Router();

route.patch('/user/cart/add/pill/:id', cartController.addPillCart);
route.patch('/user/cart/delete/pill/:id', cartController.delPillCart);
route.patch('/user/cart/clear/:id', cartController.clearCart);
route.patch('/user/cart/pill/buy/:id', cartController.buyProductsCart);

module.exports = route;