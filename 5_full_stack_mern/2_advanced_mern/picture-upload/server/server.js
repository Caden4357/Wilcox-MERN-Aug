const express = require('express');
const cors = require('cors');
const path = require('path');
const fileRoutes = require('./routes/user.routes')
const bodyParser = require('body-parser')

const app = express();
require('dotenv').config();

const port = process.env.MY_PORT ;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
require("./config/mongoose.config");
app.use('/api', fileRoutes.routes)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})