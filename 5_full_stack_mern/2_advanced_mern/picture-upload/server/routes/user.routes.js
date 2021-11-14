const express = require('express');
const {upload} = require('../helpers/filehelper');
const {singleFileUpload} = require('../controllers/fileUploadController');
const router = express.Router();

router.post('/singleFile', upload.single('file'), )

module.exports = {
    routes: router
}