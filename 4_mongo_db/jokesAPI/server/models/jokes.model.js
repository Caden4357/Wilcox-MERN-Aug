const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({

    setup: {
        type: String,
        required: [true, "A setup is required"],
        minlength: [10, "Must be longer than 10 characters"]
    },
    punchline: {
        type: String,
        required: [true, "A punchline is required"],
        minlength: [5, "Must be longer than 5 characters"]
    }
}, {timestamps:true})


    const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;