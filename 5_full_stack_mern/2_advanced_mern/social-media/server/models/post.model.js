const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    content:{
        type:String,
        required:[true, "Cannot be blank"],
        minlength:[2, "Minimun length of 2"]
    },
    likes:{
        type:Number,
        default:0
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    username:{
        type:String
    }
}, { timestamps: true })
module.exports = mongoose.model("Post", PostSchema);
