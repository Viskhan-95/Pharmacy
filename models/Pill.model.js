const { default: mongoose } = require("mongoose");

const pillSchema = mongoose.Schema({
    categoryId: {
        ref: "Category",
        type: mongoose.SchemaTypes.ObjectId
    },
    name: String,
    dosa: Number,
    price: Number,
    recipe: {
        type: Boolean,
        default: false
    }
});

const Pill = mongoose.model("Pill", pillSchema);

module.exports = Pill;