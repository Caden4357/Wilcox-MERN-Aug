// const Image = require('../models/image.model');
// const fileUpload = require('express-fileupload');
// var fs = require('fs');
// const multer = require('multer');

// const fileStorageEngine = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// })
// const upload = multer({storage: fileStorageEngine});
// module.exports = (app) => {
//     app.post('/single', upload.single('image'), (req, res) => {
//         console.log(req.file.path);
//         console.log(req.file);
//         const title = req.body.title;
//         const img = req.file;
//         const newImage = {
//             title,
//             img
//         }
//         const newImg = new Image(newImage);
//         newImg.save()
//             // .then(() => res.json("successfull upload"))
//             // .catch(err => res.status(400).json('Error: ' + err));
//         res.send("single file upload success")
//     }),
//     app.get('/', (req, res) => {
//         Image.find({})
//         .then((allImages) => {
//             res.json(allImages)
//         })
//         .catch((err)=>{
//             console.log("Get all images failed");
//             res.status(400).json(err);
//         })
//     })
// }
const imageController = require('../controllers/image.controller')
module.exports = (app) => {
    app.post('/addPhoto', imageController.add_photo);
}