const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    register : (req, res) => {
        console.log('in register')
        console.log(req.body)
        //were gonna use the req data or request data and the User model constructor to create a user object 
        const user = new User(req.body);
        console.log(user)
        console.log(req.body.email)
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
    changePic: (req,res) => {
        if (!req.files) {
            return res.status(500).send({ msg: "file is not found" })
        }
            // accessing the file
        const profilePicture = req.files.profilePicture;
        const myFile = req.files.profilePicture;
        console.log(req.files.file);
        console.log("34-myFile", myFile);
        console.log(`THIS IS 39 ${__dirname}/public/${myFile.name}`);
        

        User.findByIdAndUpdate(req.params.id, {profilePicture: profilePicture.name}
        , {
            new: true,  // give me the new version...not the original
            runValidators: true, 
            useFindAndModify: false
            })
                .then((picUpdated) => {
                    console.log(picUpdated);
                    console.log("45 my file", myFile);
                    console.log(`${__dirname}`);
                    profilePicture.mv("./public/" + profilePicture.name, function
                    (err) {
                        if (err) {
                            console.log(err)
                            return res.status(500).send({ msg: "Error occured" });
                        }
                        // returing the response with file path and name
                        // res.send({name: myFile.name, path: `/${myFile.name}`});
                        else{
                            res.send({
                                status: true,
                                message: 'File is uploaded',
                                data: {
                                    name: profilePicture.name,
                                    mimetype: profilePicture.mimetype,
                                    size: profilePicture.size
                                }
                            });
                        }
                    })
                })
                .catch((err) => {
                    console.log("error found in newPic");
                    res.status(400).json(err);
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
            res.json(oneUser);
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    },
    viewAll: (req, res) =>{
        User.find({})
            .then((allUsers)=>{
                console.log(allUsers);
                res.json(allUsers);
            })
            .catch((err)=>{
                console.log("error in ViewAll");
                res.status(400).json(err);
            })
    },
}