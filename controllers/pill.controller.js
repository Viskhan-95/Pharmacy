const { ObjectId } = require("bson");
const Pill = require("../models/Pill.model");

module.exports.pillController = {
    getAllPill: async (req, res) => {
        try {
            const allPill = await Pill.find();
            res.json(allPill);

        } catch (err) { res.json(err) }
    },
    getPillById: async (req, res) => {
        try {
            const pill = await Pill.findById(req.params.id);
            res.json(pill);
        } catch (err) { res.json(err) }
    },
    getPillByCategory: async (req, res) => {
        try {
            const pill = await Pill.find({ categoryId: req.params.id });
            res.json(pill);
        } catch (err) { res.json(err) }
    },
    addPill: async (req, res) => {
        try {
            const pill = await Pill.create({
                categoryId: req.params.id,
                name: req.body.name,
                dosa: req.body.dosa,
                price: req.body.price,
                recipe: req.body.recipe
            });
            res.json(pill);
        } catch (err) { res.json(err) }
    },
    deletePill: async (req, res) => {
        try {
            await Pill.findByIdAndRemove(req.params.id);
            res.json("Pill deleted");
        } catch (err) { res.json(err) }
    },
    updatePill: async (req, res) => {
        try {
            const pill = await Pill.findByIdAndUpdate(req.params.id, {
                    categoryId: req.params.id,
                    name: req.body.name,
                    dosa: req.body.dosa,
                    price: req.body.price,
                    recipe: req.body.recipe
            });
            await res.json("Pill updated");
        } catch (err) { res.json(err) }
    }
}