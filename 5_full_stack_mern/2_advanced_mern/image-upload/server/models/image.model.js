const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    img:{
        data:Buffer,
        contentType:String
    }
}, {timestamps: true})

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;