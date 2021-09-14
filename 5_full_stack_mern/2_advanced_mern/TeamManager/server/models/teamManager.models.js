const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minlength: [2, "more than 2 characters"]
    },
    position: {
        type: String,
    },
    dayOneStatus: {
        type: String,
        default: "undecided",
        enum: [
            "playing",
            "notPlaying",
            "undecided"
        ]
    },
    dayTwoStatus: {
        type: String,
        default: "undecided",
        enum: [
            "playing",
            "notPlaying",
            "undecided"
        ]
    },
    dayThreeStatus: {
        type: String,
        default: "undecided",
        enum: [
            "playing",
            "notPlaying",
            "undecided"
        ]
    },
}, {timestamps: true})

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;