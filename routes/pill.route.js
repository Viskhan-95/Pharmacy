const { Route, Router } = require("express");
const { pillController } = require("../controllers/pill.controller");

const route = Router();

route.get('/user/all/pill', pillController.getAllPill);
route.get('/user/pill/:id', pillController.getPillById);
route.get('/user/pill/category/:id', pillController.getPillByCategory);

route.get('/admin/pill/category/:id', pillController.getPillByCategory);
route.get('/admin/all/pill', pillController.getAllPill);
route.get('/admin/pill/:id', pillController.getPillById);
route.post('/admin/pill/add/:id', pillController.addPill);
route.delete('/admin/pill/delete/:id', pillController.deletePill);
route.patch('/admin/pill/update/:id', pillController.updatePill);

module.exports = route;