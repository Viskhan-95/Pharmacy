const { default : mongoose } = require("mongoose");

const clientSchema = mongoose.Schema({
    name: String,
    sum: {
        type: Number,
        default: 0
    },
    isRecipe: {
        type: Boolean,
        default: false
    }
});

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;