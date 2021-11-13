const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({

    firstName:{
        type: String,
        required: [true, "first name is required"]
    },
    lastName:{
        type: String,
        required: [true, "last name is required"]
    },
    username:{
        type: String,
        required: [true, "username is required"]
    },
    img:
    {
        type:String
    },
    email:{
        type: String,
        required: [true, "username is required"]
    },
    password:{
        type: String,
        required: [true, "username is required"],
        minlength: [8, "password must be min 8 characters"]
    },
}, {timestamps: true})

    
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set((value) => this._confirmPassword = value)

UserSchema.pre('validate', function(next){
    console.log('in validate');

    if(this.password !== this.confirmPassword){
        this.invalidate('confirm password doesnt match password')
        console.log('did not match')
    }
    console.log(this.password, this.confirmPassword);
    next();
})


UserSchema.pre("save", function(next) {
    console.log('in pre save');
    bcrypt.hash(this.password, 10)
        .then((hashedPassword) => {
            this.password = hashedPassword;
        next();
        })
})




const User = mongoose.model("User", UserSchema);

module.exports = User;