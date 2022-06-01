const Cart = require("../models/Cart.model");
const Client = require("../models/Client.model");
const Pill = require("../models/Pill.model");

module.exports.cartController = {
    addPillCart: async (req, res) => {
        try {
            const pill = await Pill.findById(req.body.products);
            const cart = await Cart.findOne({ userId: req.params.id });
            const client = await Client.findById(req.params.id);

            if (cart.userId == req.params.id) {
                if (pill.recipe && !client.isRecipe) {
                    res.json("Этот препарат продается только по рецепту врача");
                }
                else {
                    await Cart.findOneAndUpdate({ userId: req.params.id }, {
                        $push: { products: req.body.products },
                        total: cart.total + pill.price
                    });
                    res.json("Препарат добавлен в корзину");
                }
            }
            else {
                res.json("Не найдена корзина")
            }
        } catch (err) { res.json(err) }
    },
    delPillCart: async (req, res) => {
        try {
            const pill = await Pill.findById(req.body.products);
            const cart = await Cart.findOne({ userId: req.params.id });

            await Cart.findOneAndUpdate(req.params.id, {
                $pull: { products: req.body.products },
                total: cart.total - pill.price
            });
            res.json("Препарат удален");

        } catch (err) { res.json(err) }
    },
    clearCart: async (req, res) => {
        try {
            await Cart.findOneAndUpdate({ userId: req.params.id }, {
                products: [],
                total: null
            });
            res.json("Карзина очищена")
        } catch (err) { res.json(err) }
    },
    buyProductsCart: async (req, res) => {
        const cart = await Cart.findOne({ userId: req.params.id });
        const client = await Client.findById(req.params.id);

        if(cart.userId == req.params.id) {
            if(client.sum >= cart.total) {
                await Cart.findOneAndUpdate({ userId: req.params.id }, {
                    products: [],
                    total: null,
                });
                await Client.findByIdAndUpdate(req.params.id, {
                    sum: client.sum - cart.total
                });
                res.json("Продукты закуплены");
            }
            else {
                res.json("У вас не хватает денег")
            }
        }
    }
}