const { Router } = require("express");
const { categoryController } = require("../controllers/categories.controller");

const route = Router();

route.get('/user/all/categories', categoryController.getAllCategories);
route.get('/user/category/:id', categoryController.getCategoryById);

route.get('/admin/all/categories', categoryController.getAllCategories);
route.get('/admin/category/:id', categoryController.getCategoryById);
route.post('/admin/category/add', categoryController.addCategory);
route.delete('/admin/category/delete/:id', categoryController.deleteCategory);
route.patch('/admin/category/update/:id', categoryController.updateCategory);

module.exports = route;