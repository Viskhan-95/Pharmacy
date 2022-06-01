const { default: mongoose } = require("mongoose");

const cartSchema = mongoose.Schema({
    userId: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId,
        default: null
    },
    products: [
        {
            ref: "Pill",
            type: mongoose.SchemaTypes.ObjectId
        },
    ],
    total: {
        type: Number,
        default: 0
    }
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;