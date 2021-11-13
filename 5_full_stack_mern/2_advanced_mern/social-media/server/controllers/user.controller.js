const User = require('../models/user.model');
const bcrypt = require('bcrypt');
var multer = require('multer');
const jwt = require('jsonwebtoken');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '../client/public/uploads/');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage});

module.exports = {

    register : (req, res) => {
        console.log('in register')
        console.log(req.body)
        //were gonna use the req data or request data and the User model constructor to create a user object 
        const user = new User(req.body);
        //info is already in the instance of THIS object we dont need to pass in anything 
        //save is an instance method doesnt require anything passed in 
        //create is static and takes the object as the parameter
        user.save()
            .then((newUser) => {
                console.log(newUser);
                res.json({
                    successMessage: "thank you for registering",
                    user: newUser
                })
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    login: (req, res) => {
        User.findOne({email: req.body.email})
            .then((userRecord) => {
                //check if the email already exists in the db 
                if(userRecord === null){
                    res.status(400).json({message: 'Invalid Login Attempt'})
                }else{
                    //email is found 
                    //compare the passwords to see if the passwords are valid 
                    bcrypt.compare(req.body.password, userRecord.password) //--->returns a boolean true or false
                    .then((isPasswordValid) => {
                        if(isPasswordValid){
                            console.log('password is valid');
                        res.cookie("usertoken", 
                            jwt.sign({
                                user_id: userRecord._id,
                                email: userRecord.email,
                                username: userRecord.username
                            },
                            process.env.JWT_SECRET),
                            {
                                httpOnly: true,
                                expires: new Date(Date.now() + 900000)
                            }
                        )
                        .json({
                            //this is what information were getting back when we successfully log in if we also wanted access to the email we would just add that in under userLoggedIn 
                            // it could look like so userEmail: userRecord.email
                            message: "Successfully logged in",
                            userLoggedIn: userRecord.username,
                            userEmail: userRecord.email
                        })
                        }
                        else{
                            res.status(400).json({message: "Email/Password invalid"})
                        }
                    })
                    .catch((err) => {
                        res.status(400).json({message: "invalid attempt"})
                    })
                }
            })
            .catch((err) => {
                res.status(400).json({message: "invalid attempt"})
            })
        },

    logout: (req, res) => {
        console.log('logging out');
        res.clearCookie('usertoken');
        res.json({
            message: "you have logged out successfully"
        })
    },

    getOneUser: (req, res)=> {
        User.findOne({_id: req.params.id})
        .then((oneUser)=> {
            console.log(oneUser)
            console.log(res.data)
            res.joson(oneUser);
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    }
}