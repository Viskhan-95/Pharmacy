const Cart = require("../models/Cart.model");
const Client = require("../models/Client.model");

module.exports.clientController = {
    getClients: async (req, res) => {
        try {
            const clients = await Client.find();
            res.json(clients);
        } catch (err) { res.json(err) }
    },
    getClientById: async (req, res) => {
        try {
            const client = await Client.findById(req.params.id);
            res.json(client);
        } catch (err) { res.json(err) }
    },
    addClient: async (req, res) => {
        try {
            const newClient = await Client.create({
                name: req.body.name
            });
            await Cart.create({
                userId: newClient._id
            });
            res.json(newClient);
        } catch (err) { res.json(err) }
    },
    delClient: async (req, res) => {
        try {
            await Client.findByIdAndRemove(req.params.id);
            res.json("Client deleted");
        } catch (err) { res.json(err) }
    },
    updateClient: async (req, res) => {
        try {
            await Client.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                isRecipe: req.params.isRecipe,
            });
            res.json("Client updated")
        } catch (err) { res.json(err) }
    },
    updateSumClient: async (req, res) => {
        try {
            const client = await Client.findById(req.params.id);
            const result = client.sum + req.body.sum;

            await Client.findByIdAndUpdate(req.params.id, {
                sum: result
            });
            res.json(`Wallet replenished ${result}`)
        } catch (err) { res.json(err) }
    },
}