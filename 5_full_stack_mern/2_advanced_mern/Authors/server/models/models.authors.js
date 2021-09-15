const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const AuthorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        unique: [true, "Name already exists"],
        minlength: [3, "must be three or more characters"]
    }
}, {timestamps: true})

const Author = mongoose.model("Author", AuthorSchema);
AuthorSchema.plugin(uniqueValidator, { message: 'Name already exists.' });
module.exports = Author;