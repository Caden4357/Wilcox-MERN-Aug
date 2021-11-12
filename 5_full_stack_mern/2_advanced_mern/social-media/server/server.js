require('dotenv').config();
const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const app = express();
var fs = require('fs');
var path = require('path');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
	credentials: true,
	origin: "http://localhost:3000"
}))

app.use(cookieParser());
// Set EJS as templating engine 
app.set("view engine", "ejs");

require("./config/mongoose.config");

// require("./routes/cartoon.routes")(app);
require('./routes/user.routes')(app)

app.listen(process.env.MY_PORT, () => 
console.log(`You have successfully connected to port ${process.env.MY_PORT}`));