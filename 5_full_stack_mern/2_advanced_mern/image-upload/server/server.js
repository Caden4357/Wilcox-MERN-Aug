const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	credentials: true,
	origin: "http://localhost:3000"
}))

require("./config/mongoose.config");

require('./routes/image.routes')(app)

app.listen(8000, () => {
    console.log("Successfully connected to port 8000")
})

// const fileStorageEngine = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// })
// const upload = multer({storage: fileStorageEngine});

// app.post('/single', upload.single('image'), (req, res) => {
//     console.log(req.file);
//     res.send("single file upload success")
// })

