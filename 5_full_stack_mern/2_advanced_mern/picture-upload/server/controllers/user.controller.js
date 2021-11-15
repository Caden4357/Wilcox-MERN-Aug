const router = require('express').Router();
const multer = require('multer');
let path = require('path');
const User = require('../models/picture.model');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {   
        cb(null, '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
let upload = multer({ storage:storage, fileFilter:fileFilter }).single('photo');
module.exports = {
    uploadPhoto: (req, res) => {
        const name = req.body.name;
        const birthdate = req.body.birthdate;
        const photo = req.files.photo;
        console.log(req.files)
    
        const newUserData = {
            name,
            birthdate,
            photo
        }
    
        const newUser = new User(newUserData);
    
        newUser.save()
            .then(() => res.json('User Added'))
            .catch(err => res.status(400).json('Error: ' + err));
    },
    findAllUsers: (req, res) => {
        User.find({})
        .then((allUsers) => {
            res.json(allUsers)
        })
        .catch((err)=> {
            console.log("Get all users failed");
            res.status(400).json(err);
        })
    }
}
