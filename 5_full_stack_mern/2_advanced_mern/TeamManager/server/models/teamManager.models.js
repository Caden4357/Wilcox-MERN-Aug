const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minlength: [2, "more than 2 characters"]
    },
    position: {
        type: String,
    }
}, {timestamps: true})

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;