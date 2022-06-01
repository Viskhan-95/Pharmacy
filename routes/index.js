const { Router } = require("express");

const route = Router();

route.use(require("./categories.route"));
route.use(require("./pill.route"));
route.use(require("./clients.route"));
route.use(require("./carts.route"));

module.exports = route;