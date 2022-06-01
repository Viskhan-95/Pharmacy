const Category = require("../models/Category.model");

module.exports.categoryController = {
    getAllCategories: async (req, res) => {
        try {
            const allCategories = await Category.find();
            res.json(allCategories);
        } catch (err) {res.json(err);}
    },
    getCategoryById: async (req, res) => {
        try {
            const category = await Category.findById(req.params.id);
            res.json(category);
        } catch (err) {res.json(err);}
    },
    addCategory: async (req, res) => {
        try {
            const category = await Category.create({
                name: req.body.name
            });
            res.json(category);
        } catch (err) {res.json(err)}
    },
    deleteCategory: async (req, res) => {
        try {
            await Category.findByIdAndUpdate(req.params.id);
            res.json("Category deleted");
        }
        catch (err) {res.json(err)}
    },
    updateCategory: async (req, res) => {
        try{
            const category = await Category.findByIdAndUpdate(req.params.id, {
                name: req.body.name
            });
            res.json("Category updated");
        }catch (err) {res.json(err)}
    }
}