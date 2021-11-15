// const router = require('express').Router();
// const multer = require('multer');
// const { v4: uuidv4 } = require('uuid');
// let path = require('path');
// let User = require('../models/picture.model');

const UserController = require('../controllers/user.controller');
const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, 'uploads');
//     },
//     filename: function(req, file, cb) {   
//         cb(null, '-' + Date.now() + path.extname(file.originalname));
//     }
// });

// const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//     if(allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }
// let upload = multer({ storage:storage, fileFilter:fileFilter }).single('photo');


module.exports = (app) => {
    app.post('/users/add', UserController.uploadPhoto),
    app.get('/', UserController.findAllUsers)
}