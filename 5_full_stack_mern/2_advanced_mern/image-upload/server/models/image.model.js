const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    img:{
        type:String
    }
}, {timestamps: true})

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;