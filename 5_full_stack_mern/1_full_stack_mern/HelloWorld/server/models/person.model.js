const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "first name required"],
        minLength: [2, "first name must be a minimum of 2 characters"]
    },
    lastName: {
        type: String,
        required: [true, "first name required"],
        minLength: [2, "first name must be a minimum of 2 characters"]
    },
}, {timestamps: true})

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;