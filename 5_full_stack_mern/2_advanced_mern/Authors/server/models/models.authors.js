const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "must be three or more characters"]
    }
}, {timestamps: true})

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;