const { Router } = require("express");
const { clientController } = require("../controllers/clients.controller");

const route = Router();

route.get('/user/client/:id', clientController.getClientById);
route.post('/user/new/client/add', clientController.addClient);
route.delete('/user/client/delete/:id', clientController.delClient);
route.patch('/user/client/update/:id', clientController.updateClient);
route.patch('/user/sum/add/:id', clientController.updateSumClient);

route.get('/admin/clients', clientController.getClients);
route.get('/admin/client/:id', clientController.getClientById);
route.post('/admin/new/client/add', clientController.addClient);
route.delete('/admin/client/delete/:id', clientController.delClient);
route.patch('/admin/client/update/:id', clientController.updateClient);
route.patch('/admin/sum/add/:id', clientController.updateSumClient);

module.exports = route;