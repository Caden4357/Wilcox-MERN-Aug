const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minLength: [2, "more than 2 characters"]
    },
    price: {
        type: Number,
        required: [true, "price is required"]
    },
    description: {
        type: String,
        required: [true, "description is required"],
        minLength: [5, "more than 5 characters"]
    }
}, {timestamps: true})

const Procuct = mongoose.model("Product", ProductSchema);

module.exports = Procuct;